import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios, authAxios } from "setups/axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios()({
      url: "/categories",
      method: "GET",
    });
    return response.data;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state, _) => {
      state.categories = [];
    },
    [fetchCategories.pending]: (state, _) => {
      state.categories = [];
    },
  },
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;
