import { authAxios } from "setups/axios";

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
