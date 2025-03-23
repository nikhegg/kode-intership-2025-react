import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { usersRequest } from "../../store/api/getUsers";
import { Outlet } from "react-router-dom";
import { setNetworkStatus } from "../../store/slices/MainPageSlice";

function PageLayout() {
    const department = useAppSelector((state) => (state.search.department))
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(usersRequest(department))
    }, [])

    window.addEventListener("online", () => {
        dispatch(setNetworkStatus(true))
    })
    window.addEventListener("offline", () => {
        dispatch(setNetworkStatus(false))
    })

    return (
        <Outlet />
    )
}

export default PageLayout;