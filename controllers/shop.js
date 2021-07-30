import QS from "query-string";
import { axios, authAxios } from "@/setups/axios";

export const getShop = async (id) => {
  const res = await axios()({
    url: `/shops/${id}`,
    method: "get",
  });

  return res.data;
};

export const getShopByFilter = (filter) => {
  const filter = QS.stringify(filter);

  const res = await axios()({
    url: `/shops?${filter}`,
    method: "GET",
  });

  return res.data;
};
