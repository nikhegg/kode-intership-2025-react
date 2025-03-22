
import { useState } from "react"
import MagnifierIcon from "../../assets/searchbar/search.svg"
import SortIcon from "../../assets/searchbar/sort.png"
import "./TopAppBar.css"

interface CategoryStructure {
    key: string,
    name: string
}

function TopAppBar() {
    let filterCategories: Array<CategoryStructure> = [
        { key:"all", name:"Все" },
        { key:"designers", name: "Designers" },
        { key:"analysts", name: "Analysts" },
        { key:"managers", name: "Managers" },
        { key:"ios", name:"iOS" },
        { key:"android", name:"Android" }
    ]
    let [chosenCategory, setCategory] = useState(filterCategories[0].key)

    function getFilterClass(isSelected: boolean): string {
        let filterClass = "search-filter-button"
        if(isSelected) filterClass += " selected"
        return filterClass
    }
    function categoryButtonClick(index: number): void {
        setCategory(filterCategories[index].key)
    }
    return (
        <div className="top-app-bar">
            <h1>Поиск</h1>
            <div className="search-input">
                <img src={ MagnifierIcon } alt="Search" draggable={ false }/>
                <input type="text" placeholder="Введи имя, тег, почту..."/>
                <img src={ SortIcon } style={{height:"12px"}} alt="Sort" draggable={ false }/>
            </div>

            <div className="search-filters">
                {filterCategories.map((category, index) => (
                    <div key={index} className={getFilterClass(chosenCategory == category.key)} onClick={() => categoryButtonClick(index)}>
                        {category.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopAppBar;