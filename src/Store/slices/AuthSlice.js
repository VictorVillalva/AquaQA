import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticathed: false,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticathed = true;
    },
    addUser: (state, action) => {
      state.user = action.payload.rol;
    },
    logout: (state /* action */) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticathed = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;