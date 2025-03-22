import { useState } from "react";
import TopAppBar from "./mainpage/TopAppBar";
import UserList from "./mainpage/UserList";
import "../index.css"

function MainPage() {
    let [loading, setLoading] = useState(true)

    function displayContent() {
        if(loading) {}
    }
    return (
        <div className="wrapper">
            <TopAppBar />
            <UserList users={[]} />
        </div>
    )
}

export default MainPage;