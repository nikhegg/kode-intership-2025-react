import { useState } from "react"
import MagnifierIcon from "../../assets/searchbar/search.svg"
import SortIcon from "../../assets/searchbar/sort.png"
import { categoryButtonClick, filterCategories, getExtendedClass } from "./helpers"
import "./styles/TopAppBar.css"

function TopAppBar() {
    let [chosenCategory, setCategory] = useState(filterCategories[0].key)

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
                    <div key={index} className={getExtendedClass(chosenCategory == category.key, "search-filter-button", "selected")} onClick={() => categoryButtonClick(index, setCategory)}>
                        {category.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopAppBar;