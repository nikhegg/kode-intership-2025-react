import { useTranslation } from "react-i18next";
import { SortSelectProps } from "./types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSort } from "../../store/slices/MainPageSlice";
import { CrossIcon } from "../../assets/index"
import "./styles/SortSelect.css"

function SortSelect(props: SortSelectProps) {
    const [t, _] = useTranslation("locale")
    const storedSort = useAppSelector((state) => (state.search.sortType))

    const dispatch = useAppDispatch()
    function closePopup(sort?: string) {
        if(sort) dispatch(setSort(sort))

        if(props.onClose) props.onClose()
    }

    return (
        <div className="sort-popup">
            <div className="background" onClick={() => closePopup()}></div>
            <div className="sort-window">
                <div className="sort-top-bar">
                    <div className="sort-name">{t("main.sort.title")}</div>
                    <div className="sort-close" onClick={() => closePopup()}>
                        <img src={CrossIcon} alt="X" />
                    </div>
                </div>
                <div className="sort-select">
                    <div>
                        <input type="radio" name="main-page-sort" id="radio-alphabet" checked={storedSort === "alphabet"} onChange={() => closePopup("alphabet")}/>
                        <label htmlFor="radio-alphabet">{t("main.sort.alphabet")}</label>
                    </div>
                    <div>
                        <input type="radio" name="main-page-sort" id="radio-birthday" checked={storedSort === "birthday"} onChange={() => closePopup("birthday")}/>
                        <label htmlFor="radio-birthday">{t("main.sort.birthday")}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortSelect;