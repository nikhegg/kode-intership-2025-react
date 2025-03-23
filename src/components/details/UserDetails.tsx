import InfoPanel from "./InfoPanel";
import "./styles/UserDetails.css"
import ChevronLeftIcon from "../../assets/chevron_left.png"
import StarIcon from "../../assets/profile/star.png"
import PhoneIcon from "../../assets/profile/phone.png"
import { useNavigate } from "react-router-dom";

function UserDetails() {
    let navigate = useNavigate()

    return (
        <div className="user-details">
            <div className="user-banner">
                <div className="back-block">
                    <div className="details-back-button" onClick={() => navigate("/")}>
                        <img src={ChevronLeftIcon} draggable={false} />
                    </div>
                </div>
                <div className="user-block">
                    <img src="https://24ai.tech/ru/wp-content/uploads/sites/4/2023/10/01_product_1_sdelat-izobrazhenie-1-1-5-scaled.jpg" alt="" draggable={false}/>
                    <div className="user-info">
                        <div className="user-title">
                            <div>Алиса Иванова</div>
                            <div>al</div>
                        </div>
                        <div className="user-position">Designer</div>
                    </div>
                </div>
            </div>
            <div className="user-data-container">
                <div className="user-data">
                    <InfoPanel icon={StarIcon} placeholder="5 июня 1996" description="24 года" />
                    <hr />
                    <InfoPanel icon={PhoneIcon} placeholder="+7 (999) 900 99 99" description="" />
                </div>
            </div>
        </div>
    )
}

export default UserDetails;