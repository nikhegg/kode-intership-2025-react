import { YearDividerProps } from "./types";
import "./styles/YearDivider.css"

function YearDivider(props: YearDividerProps) {
    return (
        <div className="year-divider-wrapper">
            <div className="year-divider">
                <div className="year-line"></div>
                <div className="year-text">{ props.year }</div>
                <div className="year-line"></div>
            </div>
        </div>
    )
}

export default YearDivider