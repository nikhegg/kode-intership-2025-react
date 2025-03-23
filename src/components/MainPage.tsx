import TopAppBar from "./mainpage/TopAppBar";
import UserList from "./mainpage/UserList";
import { useAppSelector } from "../store/hooks";
import PageLoadFail from "./mainpage/PageLoadFail";
import "../index.css"
import "./mainpage/styles/MainPage.css"

function MainPage() {
    // const mainPageData = useAppSelector((state) => (state))
    const users = useAppSelector((state) => (state.users))
    const isLoading = useAppSelector((state) => (state.isLoading))
    const err = useAppSelector((state) => (state.error))

    return (
        <div className="wrapper">
            <TopAppBar />
            {err ? (
                <PageLoadFail />
            ) : (
                <UserList users={isLoading ? (null) : (users)} />
            )}
        </div>
    )
}

export default MainPage;