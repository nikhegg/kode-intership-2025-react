import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { usersRequest } from "../../store/api/getUsers";
import { Outlet } from "react-router-dom";

function PageLayout() {
    const department = useAppSelector((state) => (state.search.department))
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(usersRequest(department))
    }, [])
    return (
        <Outlet />
    )
}

export default PageLayout;