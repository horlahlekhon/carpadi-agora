import { createSlice } from '@reduxjs/toolkit';

export const authReducer = createSlice({
    name: "auth",
    initialState: {
        user: {},
        token: "",
        isLoggedIn: false,
    },
    reducers: {
        saveAuthUser: (state, {payload}) => {
            state.user = payload;
        },
        saveToken: (state, {payload}) => {
            state.token = payload;
            state.isLoggedIn = !!payload;
        }
    }
});

export const { saveAuthUser, saveToken } = authReducer.actions;
export default authReducer.reducer;