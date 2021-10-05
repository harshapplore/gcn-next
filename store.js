import { configureStore } from "@reduxjs/toolkit";

import userReducer from "@/slices/user";
import categoriesReducer from "@/slices/categories";
import shopReducer from "@/slices/shop";

import customerReducer from "@/slices/customer";
import sellerReducer from "@/slices/seller";
import favoritesReducer from "@/slices/favorites";
import cartReducer from "@/slices/cart";
import orderReducer from "@/slices/order";

import errorReducer from "@/slices/error";

export default configureStore({
	reducer: {
		user: userReducer,
		categories: categoriesReducer,
		shop: shopReducer,
		customer: customerReducer,
		seller: sellerReducer,
		favorites: favoritesReducer,
		errors: errorReducer,
		cart: cartReducer,
		order: orderReducer,
	},
});

//
