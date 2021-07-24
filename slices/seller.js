import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAxios } from "@/setups/axios";

export const fetchSeller = createAsyncThunk("user/fetchSeller", async () => {
  const response = await authAxios()({
    url: "/sellers/me",
  });

  return response.data;
});

export const sellerSlice = createSlice({
  name: "seller",
  initialState: {
    loading: false,
    seller: {},
  },
  extraReducers: {
    [fetchSeller.fulfilled]: (state, action) => {
      state.seller = action.payload;
      state.loading = false;
    },
    [fetchSeller.rejected]: (state, _) => {
      state.seller = {};
      state.loading = true;
    },
    [fetchSeller.pending]: (state, _) => {
      state.seller = {};
      state.loading = true;
    },
  },
});

export const {} = sellerSlice.actions;

export default sellerSlice.reducer;
