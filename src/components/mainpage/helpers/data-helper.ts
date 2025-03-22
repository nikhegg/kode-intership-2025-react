import { isFormElement } from "react-router-dom/dist/dom";
import { CategoryStructure } from "../types";

export const filterCategories: Array<CategoryStructure> = [
    { key:"all", name:"Все" },
    { key:"designers", name: "Designers" },
    { key:"analysts", name: "Analysts" },
    { key:"managers", name: "Managers" },
    { key:"ios", name:"iOS" },
    { key:"android", name:"Android" }
]

export function getExtendedClass(shouldExtend: boolean, baseClass: string, extension: string): string {
    let classStr = baseClass
    if(shouldExtend) classStr += ` ${extension}`
    return classStr
} 
export function categoryButtonClick(index: number, setCategory: Function): void {
    setCategory(filterCategories[index].key)
}