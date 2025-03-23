import { createSlice } from "@reduxjs/toolkit";
import { usersRequest } from "../api/getUsers";
import { MainPageSliceState } from "./MainPageSlice.types";

const mainPageSliceName: string = "MainPageSlice"

const initialState: MainPageSliceState = {
    category: "",
    isLoading: false,
    error: false,
    users: []
}

export const mainPageSlice = createSlice({
    name: mainPageSliceName,
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(usersRequest.pending, (state) => {
            state.isLoading = true
            state.error = false
        })
        builder.addCase(usersRequest.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload.items
            state.error = false
        })
        builder.addCase(usersRequest.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as boolean
        })
    }
})

export const { actions, reducer } = mainPageSlice