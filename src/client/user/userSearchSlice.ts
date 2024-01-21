import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type UserSearchState = {
    activeFilter: string;
};

const initialState: UserSearchState = {
    activeFilter: ""
};

const userSearchSlice = createSlice({
    name: "UserSearch",
    initialState,
    reducers: {
        updateUserSearch(_, action: PayloadAction<string>) {
            return ({
                activeFilter: action.payload
            });
        }
    }
});

export const { updateUserSearch } = userSearchSlice.actions;
export const selectUserSearch = (state: RootState) => state.userSearchReducer;
export default userSearchSlice.reducer;