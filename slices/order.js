import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAxios } from "@/setups/axios";

export const fetchOrder = createAsyncThunk("seller/orders", async () => {
  const response = await authAxios()({
    url: "orders",
  });

  return response.data;
});

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    orders: [],
  },
  extraReducers: {
    [fetchOrder.fulfilled]: (state, action) => {
      state.orders = action.payload;
      state.loading = false;
    },
    [fetchOrder.rejected]: (state, _) => {
      state.orders = {};
      state.loading = true;
    },
    [fetchOrder.pending]: (state, _) => {
      state.orders = {};
      state.loading = true;
    },
  },
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;
