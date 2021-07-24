import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAxios } from "@/setups/axios";

import QS from "query-string";

export const fetchShopProducts = createAsyncThunk(
  "shop/fetchProducts",
  async (shopId) => {

    const query = {
      shop: shopId
    }

    const response = await authAxios()({
      url: `/products?${QS.stringify(query)}`,
      method: "GET",
    });

    console.log(response.data);

    return response.data;
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shop: [],
    products: []
  },
  extraReducers: {
    [fetchShopProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [fetchShopProducts.rejected]: (state, _) => {
      state.products = [];
    },
    [fetchShopProducts.pending]: (state, _) => {
      state.products = [];
    },
  },
});

export const {} = shopSlice.actions;

export default shopSlice.reducer;
