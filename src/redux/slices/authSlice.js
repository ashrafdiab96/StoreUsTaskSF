import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk } from "../thunks/authThunks";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        access_token: "",
    },
  
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.access_token = action.payload.data.token;
            state.user = action.payload.data.user;
            state.loading = false;
        });
        builder.addCase(loginThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(logoutThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(logoutThunk.fulfilled, (state, action) => {
            state.access_token = "";
            state.loading = false;
        });
        builder.addCase(logoutThunk.rejected, (state) => {
            state.loading = false;
        });
        
    },
});

export default authSlice;
