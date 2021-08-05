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
