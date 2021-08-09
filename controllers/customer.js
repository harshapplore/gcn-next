import { authAxios } from "@/setups/axios";
import QS from "query-string";

export const addToCart = async ({ productId, quantity }) => {
  const res = await authAxios()({
    url: `/customers/cart`,
    method: "PUT",
    data: {
      productId,
      quantity,
    },
  });

  return res.data;
};

export const getCart = async () => {
  const res = await authAxios()({
    url: "/customers/order",
    method: "GET",
  });

  return res.data;
};

export const getCartProducts = async (filter) => {
  const res = await authAxios()({
    url: `/carts?${QS.stringify(filter)}`,
    method: "GET",
  });

  return res.data;
};

export const updateCartItem = async (id, data) => {
  const res = await authAxios()({
    url: `/carts/${id}`,
    method: "PUT",
    data: data,
  });

  return res.data;
};

export const deleteItem = async (id) => {
  const res = await authAxios()({
    url: `/carts/${id}`,
    method: "DELETE",
  });

  return res.data;
};