import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersAPI } from "./users";
import { isAxiosError } from "axios";
import { RootState } from "../types";

const usersThunkName = "MainPageUsers"

export const usersRequest = createAsyncThunk(usersThunkName, async(department: string, thunkApi) => {
		try {
			let cacheKey = department || "all"
			let state = thunkApi.getState() as RootState
			let cached = state.cache.find(x =>x.key == cacheKey)
			if(cached && (Date.now() - cached.timestamp) <= 5 * 60 * 1000) {
				return {data: {items: cached.users}, cached: true, cacheKey}
			}
			
			let response = await usersAPI.getUsers(department)
			return {data: response.data, cached: false, cacheKey}
    	} catch(error: unknown) {
			if(isAxiosError(error)) {
				if(error.status == 404) return {items: []}
				return thunkApi.rejectWithValue(true)
			}
		}
	}
)