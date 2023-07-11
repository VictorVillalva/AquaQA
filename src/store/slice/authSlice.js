import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken: null,
        isAuthenticathed: false,
      },
    reducers: {
        login: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.isAuthenticathed = true;
          },
        logout: (state) => {
            localStorage.removeItem('accessToken');
            state.accessToken = null;
            state.isAuthenticathed = false;
          },
    }  
})

export const { login, logout } = authSlice.actions;