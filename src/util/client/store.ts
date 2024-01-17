import { configureStore } from "@reduxjs/toolkit";
import userSearchReducer from "./user/userSearchSlice";

export function createStore() {
    return configureStore({
        reducer: {
            userSearchReducer
        }
    });
}

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];