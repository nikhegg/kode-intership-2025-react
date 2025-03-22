import TopAppBar from "./mainpage/TopAppBar";
import UserList from "./mainpage/UserList";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { usersRequest } from "../store/api/getUsers";
import "../index.css"

function MainPage() {
    const mainPageData = useAppSelector((state) => (state))
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(usersRequest())
    }, [])

    return (
        <div className="wrapper">
            <TopAppBar />
            {mainPageData.isLoading ? (
                <UserList users={null} />
            ) : (
                <UserList users={mainPageData.users} />
            )}
        </div>
    )
}

export default MainPage;