import { UserInfo } from "../../components/mainpage/types/index"

export interface UserSearchParams {
    sortType: string,
    searchString: string,
    department: string
}

export interface CacheStructure {
    key: string,
    users: Array<UserInfo>,
    timestamp: EpochTimeStamp
}

export interface MainPageSliceState {
    isLoading: boolean,
    users: Array<UserInfo>,
    cache: Array<CacheStructure>,
    error: boolean ,
    category: string,
    search: UserSearchParams
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