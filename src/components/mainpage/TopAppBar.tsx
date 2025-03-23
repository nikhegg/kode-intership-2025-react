import { ChangeEvent, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { getFilterCategories, getExtendedClass } from "./helpers"
import SortSelect from "./SortSelect"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setDepartmentFilter, setSearchString } from "../../store/slices/MainPageSlice"
import { usersRequest } from "../../store/api/getUsers"
import { SearchIcon, SearchIconDark, SortIcon, SelectedSortIcon, ChevronLeftIcon, RussianFlag, AmericanFlag } from "../../assets/index"
import "./styles/TopAppBar.css"
import i18next from "i18next"

function TopAppBar() {
    const [t, _] = useTranslation("locale")

    const [ popupActive, setPopupActive ] = useState(false)
    const [ searchActive, setSearchActive ] = useState(false)

    const searchString = useAppSelector((state) => (state.search.searchString))
    const selectedCategory = useAppSelector((state) => (state.search.department))
    const sortType = useAppSelector((state) => (state.search.sortType))

    let displaySortIcon = SortIcon
    if(sortType != "alphabet") displaySortIcon = SelectedSortIcon

    const dispatch = useAppDispatch()
    function handleTyping(event: ChangeEvent<HTMLInputElement>) {  
        dispatch(setSearchString(event.target.value))
    }
    const filterCategories = getFilterCategories()
    function handleCategoryClick(index: number) {
        let key = filterCategories[index].key
        if(key == selectedCategory) return
        dispatch(usersRequest(key)).then(() => {
            dispatch(setDepartmentFilter(key))
        })
    }

    const [languageMenuState, setLanguageMenuState] = useState(false)
    const langMenu = useRef<HTMLDivElement>(null)
    function languageMenuSwitch() {
        setLanguageMenuState(!languageMenuState)
    }
    function changeLanguage(language: string) {
        i18next.changeLanguage(language)
        localStorage.setItem("pref_lang", language)
    }
    document.addEventListener("mousedown", (event) => {
        if(!languageMenuState) return
        if(langMenu.current?.contains(event.target as Node)) return
        languageMenuSwitch()
    })
    return (
        <>
        { popupActive ? (
            <SortSelect onClose={() => setPopupActive(false)}/>
        ) : (null)}
        <div className="top-app-bar">
            <div className="top-title">
                <h1>{t("main.top_app_bar.title")}</h1>
                <div className="lang-switch">
                    <div className="switch-body" onClick={languageMenuSwitch}>
                        <div>{t("language")}</div>
                        <img src={ChevronLeftIcon} alt="" className={languageMenuState ? "chevron_up" : "chevron_down"}/>
                    </div>
                    <div className={languageMenuState ? "lang-dropdown opened" : "lang-dropdown"} ref={langMenu}>
                        <div className="lang-button" onClick={() => changeLanguage("en")}>
                            <img src={ AmericanFlag } alt="English" draggable={false}/>
                            <div>English</div>
                        </div>
                        <div className="lang-button" onClick={() => changeLanguage("ru")}>
                            <img src={ RussianFlag } alt="Russian" draggable={false} />
                            <div>Русский</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-input">
                <img src={ searchActive ? SearchIconDark : SearchIcon } alt="Search" draggable={ false }/>
                <input type="text" placeholder={t("main.top_app_bar.search_placeholder")}
                value={searchString} onChange={handleTyping}
                onFocus={() => setSearchActive(true)}
                onBlur={() => setSearchActive(false)}/>
                <img src={ displaySortIcon } onClick={() => setPopupActive(true)} style={{height:"12px"}} alt="Sort" draggable={ false }/>
            </div>

            <div className="search-filters">
                {filterCategories.map((category, index) => (
                    <div key={index} className={getExtendedClass(selectedCategory == category.key, "search-filter-button", "selected")} onClick={() => handleCategoryClick(index)}>
                        {category.name}
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default TopAppBar;