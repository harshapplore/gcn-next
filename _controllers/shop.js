import QS from "query-string";
import { axios, authAxios } from "@/setups/axios";

export const getShop = async (id) => {
  const res = await axios()({
    url: `/shops/${id}`,
    method: "get",
  });

  return res.data;
};
export const getShops = async () => {
    const res = await axios()({
        url: `/shops`,
        method: "get",
    });

    return res.data;
};

export const getShopByFilter = async (id, filter) => {
  const qFilter = QS.stringify(filter);

  const res = await axios()({
    url: `/shops/${id}?${qFilter}`,
    method: "GET",
  });

  return res.data;
};

export const updateShop = async (id, data) => {
  const res = await authAxios()({
    url: `/shops/${id} `,
    method: "PUT",
    data
  });

  return res.data;
};
