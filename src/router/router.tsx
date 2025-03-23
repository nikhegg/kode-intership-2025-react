import { createHashRouter } from "react-router-dom"
import MainPage from "../components/MainPage"
import UserDetails from "../components/details/UserDetails"
import PageNotFound from "../components/404"
import PageLayout from "../components/shared/PageLayout"

export const router = createHashRouter([
    {
        element: <PageLayout />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/profile/*",
                element: <UserDetails />
            }
        ]
    }, {
        children: [
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
], {
    future: {
        v7_relativeSplatPath: true
    }
})