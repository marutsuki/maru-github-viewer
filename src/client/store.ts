import userSearchReducer from "@/client/user/userSearchSlice";
import { configureStore } from "@reduxjs/toolkit";

export function createStore() {
    return configureStore({
        reducer: {
            userSearchReducer,
        },
    });
}

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
