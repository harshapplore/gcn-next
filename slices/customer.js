import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAxios } from "@/setups/axios";

export const fetchCustomer = createAsyncThunk(
  "customer/fetchCustomer",
  async () => {
    const response = await authAxios()({
      url: `/customers/me`,
      method: "GET",  
    });
    return response.data;
  }
);

export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    loading: false,
    customer: {},
  },
  extraReducers: {
    [fetchCustomer.fulfilled]: (state, action) => {
      state.customer = action.payload;
    },
    [fetchCustomer.rejected]: (state, _) => {
      state.customer = {};
    },
    [fetchCustomer.pending]: (state, _) => {
      state.customer = {};
    },
  },
});

export const {} = customerSlice.actions;

export default customerSlice.reducer;
