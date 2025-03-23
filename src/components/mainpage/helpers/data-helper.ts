import { useTranslation } from "react-i18next";
import { CategoryStructure } from "../types";

export function getFilterCategories(): Array<CategoryStructure> {
    const [t, _] = useTranslation("locale")
    let categories: Array<string | CategoryStructure> = ["all", "designers", "analytics", "management",
        "qa", "ios", "android", "back_office", "frontend", "hr",
        "pr", "support", "backend"]
    for(let i = 0; i < categories.length; i++) {
        let key = categories[i]
        categories[i] = {
            key,
            name: t(`main.categories.${key}`)
        } as CategoryStructure
    }
    return categories as Array<CategoryStructure>
}

export function getExtendedClass(shouldExtend: boolean, baseClass: string, extension: string): string {
    let classStr = baseClass
    if(shouldExtend) classStr += ` ${extension}`
    return classStr
}

export function formatDateToYear(date: Date | string) {
    if(typeof date == "string") date = new Date(date)
    return date.toLocaleDateString("ru-RU", {
        year: "numeric"
    })
}

export function getNextBirthdayYear(birthday: Date | string) {
    if(typeof birthday == "string") birthday = new Date(birthday)
    const today = new Date()
    const currentYear = today.getFullYear()
    const birthDate = new Date(birthday)
    let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate())
    
    return ((nextBirthday < today) ? currentYear + 1 : currentYear)
}