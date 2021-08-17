import { authAxios } from "setups/axios";

export const createCheckout = async (data) => {
  const res = await authAxios()({
    url: "/payments",
    method: "POST",
    data: data,
  });

  console.log(res);

  return res.data;
};

export const getCheckoutUrl = async (data) => {
  const res = await authAxios()({
    url: "/checkout",
    method: "POST",
    data,
  });

  return res.data;
};
