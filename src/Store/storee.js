import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/AuthSlice";

export const storee = configureStore({
  reducer: {
    authState: authSlice.reducer,
  },
});