import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import locale_en from "./en/locale_en.json"
import locale_ru from "./ru/locale_ru.json"

i18next.use(initReactI18next).init({
    fallbackLng: "en",
    lng: navigator.language.slice(0,2),
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {locale: locale_en},
        ru: {locale: locale_ru}
    }
})

export default i18next;