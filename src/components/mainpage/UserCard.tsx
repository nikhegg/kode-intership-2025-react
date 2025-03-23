import { UserCardProps } from "./types";
import { getExtendedClass } from "./helpers";
import { useNavigate } from "react-router-dom";
import "./styles/UserCard.css"
import { useTranslation } from "react-i18next";

function UserCard(props: UserCardProps) {
    const [_, i18next] = useTranslation("locale")
    let user = props.user
    let navigate = useNavigate();
    function handleUserCardClick() {
        if(user == null) return
        navigate(`/profile/${user.id}`)
    }


    function formatDateToDay(date: Date | string) {
        if(typeof date == "string") date = new Date(date)
        return date.toLocaleDateString(i18next.language, {
            day: "numeric",
            month: "short"
        }).replace(".", "")
    }

    return (
        <div className={getExtendedClass(user == null, "user-card", "skeleton")}>
            <div onClick={handleUserCardClick}>
                <div className="user-avatar">
                    { user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt={`${user?.firstName} ${user?.lastName}`} draggable={false} />
                    ) : (null) }
                </div>
                <div className="user-info">
                    <div className="user-title">
                        <div className="user-name">{user?.firstName} {user?.lastName}</div>
                        <div className="user-tag">{user?.userTag}</div>
                    </div>
                    <div className="user-position">{user?.position}</div>
                </div>
            </div>
            {props.showBirthday && user?.birthday ? (
                <div className="user-birthday">{ formatDateToDay(user.birthday) }</div>
            ) : null}
        </div>
    )
}

export default UserCard;