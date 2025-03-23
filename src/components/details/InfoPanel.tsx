import { InfoPanelProps } from "./types";

function InfoPanel(props: InfoPanelProps) {
    return (
        <div className="user-data-line">
            <img src={props.icon} alt="" draggable={false}/>
            {props.href ? 
                <a href={props.href} className="data-placeholder">{ props.placeholder }</a>
                : <div className="data-placeholder">{props.placeholder}</div>
            }
            {props.description == "" ? (null) : (
                <div className="data-desc">{props.description}</div>
            )}
        </div>
    )
}

export default InfoPanel;