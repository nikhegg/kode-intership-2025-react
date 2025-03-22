import { createSlice } from "@reduxjs/toolkit";
import { usersRequest } from "../api/getUsers";
import { MainPageSliceState } from "./MainPageSlice.types";

const mainPageSliceName: string = "MainPageSlice"

const initialState: MainPageSliceState = {
    category: "",
    isLoading: false,
    error: undefined,
    users: []
}

export const mainPageSlice = createSlice({
    name: mainPageSliceName,
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(usersRequest.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(usersRequest.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload.items
        })
        builder.addCase(usersRequest.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export const { actions, reducer } = mainPageSlice