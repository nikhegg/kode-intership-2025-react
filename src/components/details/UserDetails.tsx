import InfoPanel from "./InfoPanel";
import { calculateAge, formatDate, formatPhoneNumber } from "./helpers";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import "./styles/UserDetails.css"
// Icons
import {ChevronLeftIcon, StarIcon, PhoneIcon} from "../../assets/index"
import { useEffect } from "react";

function UserDetails() {
    let navigate = useNavigate()
    const isLoading = useAppSelector((state) => (state.isLoading))

    // API не даёт пользователей ID, придётся брать из единственного эндпоинта
    let location = useLocation()
    let id = location.pathname.split("/profile/").pop() as string
    const users = useAppSelector((state) => state.usersCache)
    let user = users.find(x => x.id == id)
    if(id.startsWith("/profile") || id == "") {
        navigate("/")
        return
    }
    useEffect(() => {
        if(!user && !isLoading) {
            navigate("/error")
            return
        }
        if(!user) return
        document.title = `KODE | ${user?.firstName} ${user?.lastName}`
        return () => {document.title = `KODE | Поиск`}
    }, [users])
    if(user) {
        return (
        <div className="user-details">
            <div className="user-banner">
                <div className="back-block">
                    <div className="details-back-button" onClick={() => navigate("/")}>
                        <img src={ChevronLeftIcon} draggable={false} />
                    </div>
                </div>
                <div className="user-block">
                    <img src={ user.avatarUrl} alt="" draggable={false}/>
                    <div className="user-info">
                        <div className="user-title">
                            <div>{ user.firstName } { user.lastName }</div>
                            <div>{ user.userTag }</div>
                        </div>
                        <div className="user-position">{ user?.position }</div>
                    </div>
                </div>
            </div>
            <div className="user-data-container">
                <div className="user-data">
                    <InfoPanel icon={StarIcon} placeholder={formatDate(user.birthday)} description={calculateAge(user.birthday)} />
                    <hr />
                    <InfoPanel icon={PhoneIcon} placeholder={formatPhoneNumber(user.phone)} description="" href={`tel:${user.phone}`}/>
                </div>
            </div>
        </div>
        )
    }
}

export default UserDetails;