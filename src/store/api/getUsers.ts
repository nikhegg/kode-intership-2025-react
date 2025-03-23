import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersAPI } from "./users";
import { isAxiosError } from "axios";

const usersThunkName = "MainPageUsers"

export const usersRequest = createAsyncThunk(usersThunkName, async(department: string, thunkApi) => {
		try {
			let response = await usersAPI.getUsers(department)
			return response.data
    	} catch(error: unknown) {
			if(isAxiosError(error)) {
				if(error.status == 404) return {items: []}
				return thunkApi.rejectWithValue(true)
			}
		}
	}
)