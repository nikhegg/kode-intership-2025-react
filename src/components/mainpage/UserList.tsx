import { UserInfo, UserListProps } from "./types";
import UserCard from "./UserCard";
import "./styles/UserList.css"

function UserList(props: UserListProps) {
    
    let users: Array<UserInfo>
    if(props.users) {
        users = props.users as Array<UserInfo>
    } else {
        users = new Array(15).fill(null)
    }

    return (
        <div className="user-list-container">
            <div className="user-list">
                {users.map((value, index) => (
                    <UserCard key={index} user={value}/>
                ))}
            </div>
        </div>
    )
}

export default UserList;