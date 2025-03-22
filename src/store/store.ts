import { configureStore } from '@reduxjs/toolkit'
import { reducer as usersSliceReducer } from './slices/MainPageSlice'

export const store = configureStore({
	reducer: usersSliceReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})