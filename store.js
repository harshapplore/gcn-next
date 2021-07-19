import { configureStore } from "@reduxjs/toolkit";

import userReducer from "slices/user";
import categoriesReducer from "slices/categories";
import shopReducer from "slices/shop";

import customerReducer from "slices/customer";
import sellerReducer from "slices/seller";

export default configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    shop: shopReducer,
    customer: customerReducer,
    seller: sellerReducer,
  },
});
