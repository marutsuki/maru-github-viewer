import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
export default userSearchSlice.reducer;