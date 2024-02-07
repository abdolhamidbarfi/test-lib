import { configureStore } from "@reduxjs/toolkit";
import  UserReducer  from "./slices/user";
import LoadingReducer from "./slices/loading";

export const store = configureStore({
    reducer : {
        UserReducer,
        LoadingReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch