import { UserListProps } from "./types";
import UserCard from "./UserCard";
import "./styles/UserList.css"

function UserList(props: UserListProps) {
    let users = props.users
    if(users.length == 0) { // Fill with 15 skeletons
        for(let i = 0; i < 15; i++) {
            users.push(null)
        }
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