import { configureStore } from "@reduxjs/toolkit";
import { jsonPlaceholderApi } from "./rtk/backend.api";

export const store = configureStore({
    reducer: {
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer
    },
    // middleware: getDefaultMiddleware => 
    //     getDefaultMiddleware().concat(jsonPlaceholderApi.middleware)

    middleware: get => get().concat(jsonPlaceholderApi.middleware)
    
})