import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AmericanFlag, ChevronLeftIcon, RussianFlag } from "../../assets";

function LanguageSwitcher() {
    const [t, i18next] = useTranslation("locale")
    const [ languageMenuState, setLanguageMenuState ] = useState(false)
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
        <div className="lang-switch">
            <div className="switch-body" onClick={languageMenuSwitch}>
                <div>{t("language")}</div>
                <img src={ ChevronLeftIcon } alt="" className={languageMenuState ? "chevron_up" : "chevron_down"}/>
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
    )
}

export default LanguageSwitcher;