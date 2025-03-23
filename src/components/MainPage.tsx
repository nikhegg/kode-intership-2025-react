import TopAppBar from "./mainpage/TopAppBar";
import UserList from "./mainpage/UserList";
import { useAppSelector } from "../store/hooks";
import "../index.css"

function MainPage() {
    const mainPageData = useAppSelector((state) => (state))

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