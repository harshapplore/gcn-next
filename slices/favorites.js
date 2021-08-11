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
    favoriteItems: [],
    favoriteShops: [],
  },
  extraReducers: {
    [fetchFavoriteItems.fulfilled]: (state, action) => {
      state.favoriteItems = action.payload;
    },
    [fetchFavoriteItems.rejected]: (state, _) => {
      state.favoriteItems = [];
    },
    [fetchFavoriteItems.pending]: (state, _) => {
      state.favoriteItems = [];
    },
    [fetchFavoriteShops.fulfilled]: (state, action) => {
      state.favoriteShops = action.payload;
    },
    [fetchFavoriteShops.rejected]: (state, _) => {
      state.favoriteShops = [];
    },
    [fetchFavoriteShops.pending]: (state, _) => {
      state.favoriteShops = [];
    },
  },
});

export const {} = favoritesSlice.actions;

export default favoritesSlice.reducer;