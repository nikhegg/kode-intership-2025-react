import { CategoryStructure } from "../types";

export const filterCategories: Array<CategoryStructure> = [
    { key:"all", name:"Все" },
    { key:"designers", name: "Дизайн" },
    { key:"analytics", name: "Аналитика" },
    { key:"management", name: "Менеджмент" },
    { key:"qa", name: "QA"},
    { key:"ios", name:"iOS" },
    { key:"android", name:"Android" },
    { key:"back_office", name:"Бэк-офис" },
    { key:"frontend", name:"Frontend" },
    { key:"hr", name:"HR" },
    { key:"pr", name:"PR" },
    { key:"backend", name:"Backend" }
]

export function getExtendedClass(shouldExtend: boolean, baseClass: string, extension: string): string {
    let classStr = baseClass
    if(shouldExtend) classStr += ` ${extension}`
    return classStr
}

export function formatDateToYear(date: Date | string) {
    if(typeof date == "string") date = new Date(date)
    // debugger;
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

export function formatDateToDay(date: Date | string) {
    if(typeof date == "string") date = new Date(date)
    return date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "short"
    }).replace(".", "")
}