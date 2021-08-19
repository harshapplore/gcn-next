import { axios, authAxios } from "setups/axios";

export const createCheckout = async (data) => {
  const res = await authAxios()({
    url: "/payments",
    method: "POST",
    data: data,
  });
  
  return res.data;
};

export const getCheckoutUrl = async (data) => {
  const settings = {
    url: "/checkout",
    method: "POST",
    data,
  };

  const res = await (data.customer ? authAxios()(settings) : axios()(settings));

  return res.data;
};
