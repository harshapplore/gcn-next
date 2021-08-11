import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import QS from "query-string";
import { authAxios } from "@/setups/axios";

export const fetchFavoriteItems = createAsyncThunk(
  "favorites/fetchProducts",
  async (customerId) => {
    const filter = QS.stringify({
      customer: customerId,
      type: "Product",
    });

    const response = await axios()({
      url: `/favorites?${filter}`,
      method: "GET",
    });

    if (response.data && response.data.length > 0) {
      return response.data.map((item) => {
        return item.id;
      });
    }
  }
);

export const fetchFavoriteShops = createAsyncThunk(
  "favorites/fetchProducts",
  async (customerId) => {
    const filter = QS.stringify({
      customer: customerId,
      type: "Shop",
    });

    const response = await axios()({
      url: `/favorites?${filter}`,
      method: "GET",
    });

    if (response.data && response.data.length > 0) {
      return response.data.map((item) => {
        return item.id;
      });
    }
  }
);

export const favoritesSlice = createSlice({
  name: "categories",
  initialState: {
    products: [],
    shops: [],
  },
  extraReducers: {
    [fetchFavoriteItems.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [fetchFavoriteItems.rejected]: (state, _) => {
      state.products = [];
    },
    [fetchFavoriteItems.pending]: (state, _) => {
      state.products = [];
    },
    [fetchFavoriteShops.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [fetchFavoriteShops.rejected]: (state, _) => {
      state.products = [];
    },
    [fetchFavoriteShops.pending]: (state, _) => {
      state.products = [];
    },
  },
});

export const {} = favoritesSlice.actions;

export default favoritesSlice.reducer;
