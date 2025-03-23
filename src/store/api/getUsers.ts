import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersAPI } from "./users";

const usersThunkName = "MainPageUsers"

export const usersRequest = createAsyncThunk(usersThunkName, async(_, thunkApi) => {
		try {
			let response = await usersAPI.getUsers()
			return response.data
    	} catch(error) {
			return thunkApi.rejectWithValue(true)
		}
	}
)