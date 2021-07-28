import userReducer from "@/slices/user";
import customerReducer from "@/slices/customer";
import sellerReducer from "@/slices/seller";
import categoriesReducer from "@/slices/categories";
import shopReducer from "@/slices/shop";

import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";

export const stateFactory = (initialState) => {
  const reducer = {
    user: userReducer,
    customer: customerReducer,
    seller: sellerReducer,
    shop: shopReducer,
    categories: categoriesReducer,
  };

  return configureStore({reducer});
};

export default stateFactory;
