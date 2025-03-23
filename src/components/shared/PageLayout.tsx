import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { usersRequest } from "../../store/api/getUsers";
import { Outlet } from "react-router-dom";

function PageLayout() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(usersRequest())
    }, [])
    return (
        <Outlet />
    )
}

export default PageLayout;