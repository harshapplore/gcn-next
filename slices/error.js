import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    errors: [],
  },
  reducers: {
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = [];
    }
  },
});

export const { setErrors, clearErrors } = errorSlice.actions;

export default errorSlice.reducer;
