import "./styles/PageLoadFail.css"
import FlyingSaucerIcon from "../../assets/flying-saucer.png"
import { useAppDispatch } from "../../store/hooks";
import { usersRequest } from "../../store/api/getUsers";

function PageLoadFail() {
    const dispatch = useAppDispatch()
    function tryAgainHandle() {
        dispatch(usersRequest())
    }

    return (
        <div className="load-error">
            <img src={FlyingSaucerIcon} alt="Error" draggable={false}/>
            <div className="load-info">
                <div className="error-title">Какой-то сверхразум все сломал</div>
                <div className="error-desc">Постараемся быстро починить</div>
                <div className="error-button" onClick={tryAgainHandle}>Попробовать снова</div>
            </div>
        </div>
    )
}


export default PageLoadFail;