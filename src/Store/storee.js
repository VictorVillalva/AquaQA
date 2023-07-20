import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/AuthSlice";
import { TableSlice } from "./slices/TableSlice";

export const storee = configureStore({
  reducer: {
    authState: authSlice.reducer,
    table: TableSlice.reducer
  },
});