import { useTranslation } from "react-i18next";
import TopAppBar from "./mainpage/TopAppBar";
import UserList from "./mainpage/UserList";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import PageLoadFail from "./shared/PageLoadFail";
import { LoadFailButtonProps } from "./shared/types";
import { usersRequest } from "../store/api/getUsers";
import FlyingSaucerIcon from "../assets/flying-saucer.png"
import "../index.css"
import "./mainpage/styles/MainPage.css"

function MainPage() {
    const [t, _] = useTranslation("locale")
    
    const users = useAppSelector((state) => (state.users))
    const isLoading = useAppSelector((state) => (state.isLoading))
    const err = useAppSelector((state) => (state.error))
    const department = useAppSelector((state) => (state.search.department))
    const dispatch = useAppDispatch()

    let button: LoadFailButtonProps = {
        onClick: () => {
            dispatch(usersRequest(department))
        },
        text: t("main.errors.try_again")//"Попробовать снова"
    }
    return (
        <div className="wrapper">
            <TopAppBar />
            {err ? 
                <PageLoadFail
                icon={FlyingSaucerIcon}
                title={t("main.errors.critical_error_text")}
                descriptiption={t("main.errors.fix_in_progress")}
                button={button}
                />
            :
                <UserList users={isLoading ? (null) : (users)} />
            }
        </div>
    )
}

export default MainPage;