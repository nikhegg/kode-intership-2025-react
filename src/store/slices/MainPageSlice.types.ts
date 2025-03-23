import { UserInfo } from "../../components/mainpage/types/index"

export interface MainPageSliceState {
    isLoading: boolean,
    users: Array<UserInfo>,
    error: boolean ,
    category: string
}

export interface USERS_FETCH_START {
    type: "UsersFetchStarted",
}

export interface USERS_FETCH_SUCCESS {
    type: "UsersFetchSuccess",
    payload: Array<UserInfo>,
}

export interface USERS_FETCH_FAILED {
    type: "UsersFetchFailed",
    payload: string,
}