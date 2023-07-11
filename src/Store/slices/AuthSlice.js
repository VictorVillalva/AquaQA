import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticathed: false,
    currentUser:null
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticathed = true;
      state.currentUser = action.payload.rol
      console.log(state.currentUser)
    },
    logout: (state /* action */) => {
      localStorage.removeItem('token');
      localStorage.removeItem('rol');
      state.token = null;
      state.isAuthenticathed = false;
      state.currentUser=null
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;