import "./styles/PageLoadFail.css"
import { LoadFailProps } from "./types";

function PageLoadFail(props: LoadFailProps) {
    function handleButtonClick() {
        if(props.button) props.button.onClick()
    }

    return (
        <div className="load-error">
            <img src={ props.icon } alt="Error" draggable={false}/>
            <div className="load-info">
                <div className="error-title">{ props.title }</div>
                <div className="error-desc">{ props.descriptiption }</div>
                { props.button ? (
                    <div className="error-button" onClick={ handleButtonClick }>{ props.button.text }</div>
                ) : (null)}
            </div>
        </div>
    )
}


export default PageLoadFail;