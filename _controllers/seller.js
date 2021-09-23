import { authAxios } from "@/setups/axios";


export const getSeller = () => {};

export const putSeller = async (id, data) => {
  const res = await authAxios()({
    url: `/sellers/${id}`,
    method: "PUT",
    data,
  });

  return res.data;
};


export const getAllOrders = async (id) => {
    const res = await authAxios()({
        url: `/orders?thisShop_contains=${id}&_sort=createdAt:DESC`,
        method: "GET",
    });

    return res.data;
};
