import { configureStore } from "@reduxjs/toolkit";

import userReducer from "slices/user";
import categoriesReducer from "slices/categories";
import shopReducer from "slices/shop";

export default configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    shop: shopReducer,
  },
});
