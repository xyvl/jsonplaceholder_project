import { configureStore, combineReducers } from "@reduxjs/toolkit";
import allPosts from './slice/posts'
const posts = combineReducers({allPosts})

export const store = configureStore({
	reducer: posts
})

export type AppDispatch = typeof store.dispatch
export type RootSelector = ReturnType<typeof store.getState>