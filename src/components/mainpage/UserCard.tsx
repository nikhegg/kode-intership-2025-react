import { UserCardProps } from "./types";
import "./styles/UserCard.css"
import { getExtendedClass } from "./helpers";

function UserCard(props: UserCardProps) {
    let user = props.user

    // MOCK USER
    // user = {
    //     id:"test-mock-id-5434120",
    //     avatarUrl: "https://live.staticflickr.com/3823/13903388625_6fe7405f2f_z.jpg",
    //     firstName: "Jane",
    //     lastName: "Doe",
    //     userTag: "te",
    //     department: 'management',
    //     position: "Top Manager",
    //     birthday: "1989-03-09",
    //     phone:"88005553535"
    // }

    return (
        <div className={getExtendedClass(user == null, "user-card", "skeleton")}>
            <div className="user-avatar">
                { user?.avatarUrl ? (
                    <img src={user.avatarUrl} draggable={false} />
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
    )
}

export default UserCard;