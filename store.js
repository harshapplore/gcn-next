import { configureStore } from "@reduxjs/toolkit";

import userReducer from "slices/user";
import categoriesReducer from "slices/categories";

export default configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
  },
});
