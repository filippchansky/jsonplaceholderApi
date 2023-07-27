import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { jsonPlaceholderApi } from "./rtk/backend.api";
import searchReducer from './slice/searchSlice'

export const store = configureStore({
    reducer: {
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
        search: searchReducer
        
    },
    // middleware: getDefaultMiddleware => 
    //     getDefaultMiddleware().concat(jsonPlaceholderApi.middleware)

    middleware: get => get().concat(jsonPlaceholderApi.middleware)
    
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
