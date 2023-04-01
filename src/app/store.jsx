import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "../feature/employee.slice";

export const store = configureStore({
  reducer: {
    employee: employeeSlice,
  },
});
