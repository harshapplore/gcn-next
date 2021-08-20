import { createSlice } from "@reduxjs/toolkit";

import { getCart, saveCart } from "@/_methods/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    loadCart: (state) => {
      state.cart = getCart();
    },
    // saveCartRedux: (state, action) => {
    //   state.cart = saveCart(action.payload);
    // },
  },
});

export const { loadCart, saveCartRedux } = cartSlice.actions;

export default cartSlice.reducer;
