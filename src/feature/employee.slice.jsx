import { createSlice } from "@reduxjs/toolkit";

/**
 * Add an initialState, employee is a empty array
 * Create a reducers createEmployee, The payload will be added in the current state to be updated
 */

const initialState = {
  employees: [],
};

// state = the current state of our slice
// action = the element that will be dispatcher
// action.payload = the value sent by the action to update the employees property
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    createEmployee: (state, { payload }) => {
      state.employees.push(payload);
    },
  },
});

export const { createEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
