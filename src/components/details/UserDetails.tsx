import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import InfoPanel from "./InfoPanel";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import "./styles/UserDetails.css"
// Icons
import {ChevronLeftIcon, StarIcon, PhoneIcon} from "../../assets/index"

function UserDetails() {
    let [t, i18next] = useTranslation("locale")
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
        return () => {document.title = t("main.system.document_title")}
    }, [users])

    function formatDate(date: Date | string) {
        if(typeof date == "string") date = new Date(date)
        return date.toLocaleDateString(i18next.language, {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    }

    function calculateAge(date: Date | string) {
        if(typeof date == "string") date = new Date(date)
        const today = new Date()
        
        let age = today.getFullYear() - date.getFullYear()
        const monthDifference = today.getMonth() - date.getMonth()
        
        if (monthDifference < 0 || 
            (monthDifference === 0 && today.getDate() < date.getDate())
        ) age--
        
        if(i18next.language != "ru") {
            return t("profile.age.one", {age})
        } else if (age % 10 === 1 && age % 100 !== 11) {
            //return `${age} год`
            return t("profile.age.first", {age})
        } else if ((age % 10 >= 2 && age % 10 <= 4) && !(age % 100 >= 12 && age % 100 <= 14)) {
            // return `${age} года`
            return t("profile.age.second", {age})
        } else {
            // return `${age} лет`
            return t("profile.age.third", {age})
        }
    }

    const formatPhoneNumber = (phone: string): string =>
        phone.replace(/^\+7(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($1) $2 $3 $4');

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