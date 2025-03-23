import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersRequest } from "../api/getUsers";
import { MainPageSliceState, UserSearchParams } from "./MainPageSlice.types";
import { UserInfo } from "../../components/mainpage/types";
import { GooseIcon } from "../../assets";

const mainPageSliceName: string = "MainPageSlice"

const initialState: MainPageSliceState = {
    category: "",
    isLoading: true,
    error: false,
    users: [],
    cache: [],
    search: {
        sortType: "alphabet",
        searchString: "",
        department: "all"
    }
}

function sortUsers(users: Array<UserInfo>, params: UserSearchParams) {
    if(params.searchString && params.searchString.length != 0) {
        users = users.filter(user => {
            const searchParam = params.searchString?.toLowerCase() as string
            
            const fullName = (user.firstName + " " + user.lastName).toLowerCase()
            const fullNameMatches = fullName.includes(searchParam)
            // В API нет поля для email, но логика будет работать, если добавить это поле
            const emailMatches = user.email == searchParam

            const tagMatches = user.userTag.toLowerCase().includes(searchParam)
            return fullNameMatches || emailMatches || tagMatches
        })
    }
    switch(params.sortType) {
        case "alphabet":
            users.sort((a, b) => (
                a.firstName + " " + a.lastName).localeCompare(b.firstName + " " + b.lastName, "ru"
            ))
            break
        case "birthday":
            // users.sort((a,b) => (
            //     new Date(b.birthday).getTime() - new Date(a.birthday).getTime()
            // ))
            users.sort((a, b) => {
                const today = new Date()
                const currentYear = today.getFullYear()
                
                const getNextBirthday = (birthday: string) => {
                    const birthDate = new Date(birthday)
                    let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate())
                    if (nextBirthday < today) {
                        nextBirthday.setFullYear(currentYear + 1)
                    }
                    return nextBirthday
                }
                
                return getNextBirthday(a.birthday).getTime() - getNextBirthday(b.birthday).getTime()
            })
            break
    }
    return users
}

function getUsersFromCache(state: MainPageSliceState) {
    let cacheIndex = state.cache.findIndex(x => x.key == state.search.department)
    let usersCache = new Array<UserInfo>()
    if(cacheIndex != -1) usersCache = state.cache[cacheIndex].users
    return usersCache
}


export const mainPageSlice = createSlice({
    name: mainPageSliceName,
    initialState: initialState,
    reducers: {
        setDepartmentFilter: (state, action: PayloadAction<string>) => {
            state.search.department = action.payload
            let cache = getUsersFromCache(state)
            state.users = sortUsers(cache, state.search)
        },
        setSearchString: (state, action: PayloadAction<string>) => {
            state.search.searchString = action.payload
            let cache = getUsersFromCache(state)
            state.users = sortUsers(cache, state.search)
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.search.sortType = action.payload
            let cache = getUsersFromCache(state)
            state.users = sortUsers(cache, state.search)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(usersRequest.pending, (state) => {
            state.isLoading = true
            state.error = false
        })
        builder.addCase(usersRequest.fulfilled, (state, action) => {
            state.isLoading = false
            if(!action.payload?.cached && action.payload?.cacheKey) {
                let cacheIndex = state.cache.findIndex(x => x.key == action.payload?.cacheKey)
                if(cacheIndex == -1) state.cache.push({
                    key: action.payload.cacheKey,
                    users: action.payload.data.items,
                    timestamp: new Date().getTime()
                })
                else {
                    state.cache[cacheIndex].users = action.payload.data.items
                    state.cache[cacheIndex].timestamp = new Date().getTime()
                }
            }
            let newCacheIndex = state.cache.findIndex(x => x.key == action.payload?.cacheKey)
            
            // Предоставленные в API avatarUrl не возвращали изображение
            if(!action.payload?.cached) state.cache[newCacheIndex].users.forEach((user, index) => {
                // Fallback значение, если нет аватарки
                if(!user.avatarUrl || user.avatarUrl == "") user.avatarUrl = GooseIcon
                user.avatarUrl = `https://i.pravatar.cc/150?img=${index+1}`
            })
            state.users = sortUsers(state.cache[newCacheIndex].users, state.search)

            state.error = false
        })
        builder.addCase(usersRequest.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as boolean
        })
    }
})

export const { actions, reducer } = mainPageSlice
export const { setSearchString, setDepartmentFilter, setSort } = mainPageSlice.actions