import { createBrowserRouter } from "react-router-dom"
import MainPage from "../components/MainPage"
import UserDetails from "../components/UserDetails"
import PageNotFound from "../components/404"

export const router = createBrowserRouter([
    {
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/profile",
                element: <UserDetails />
            },
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