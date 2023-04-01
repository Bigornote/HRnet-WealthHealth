import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    employee: employeeSlice.reducer,
  },
});
