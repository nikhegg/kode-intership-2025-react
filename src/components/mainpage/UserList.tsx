import { UserInfo, UserListProps } from "./types";
import { useAppSelector } from "../../store/hooks";
import UserCard from "./UserCard";
import PageLoadFail from "../shared/PageLoadFail";
import YearDivider from "./YearDivider";
import { MagnifierIcon } from "../../assets/index"
import "./styles/UserList.css"
import { getNextBirthdayYear } from "./helpers";

function UserList(props: UserListProps) {
    const sortType = useAppSelector((state) => (state.search.sortType))

    let users: Array<UserInfo>
    if(props.users) {
        users = props.users as Array<UserInfo>
    } else {
        users = new Array(15).fill(null)
    }

    let lastYear = 0
    return (
        <div className="user-list-container">
            <div className="user-list">
                {users.length == 0 ? 
                <PageLoadFail icon={ MagnifierIcon } title="Мы никого не нашли" descriptiption="Попробуй скорректировать запрос"/>
                : users.map((value, index) => {
                    let userCard = <UserCard key={index} user={value} showBirthday={sortType == "birthday"}/>
                    if(!value || sortType != "birthday") return userCard
                    let birthdayYear = getNextBirthdayYear(value?.birthday)
                    if(birthdayYear != lastYear && lastYear != 0) {
                        lastYear = birthdayYear
                        let yearDivider = <YearDivider year={lastYear} />
                        return (
                            <>
                            {yearDivider}
                            {userCard}
                            </>
                        )
                    } else lastYear = birthdayYear
                    return userCard
                })}
            </div>
        </div>
    )
}

export default UserList;