import { axios, authAxios } from "@/setups/axios";
import QS from "query-string";

export const getProduct = async (id) => {
  const res = await axios()({
    url: `/products/${id}`,
    method: "GET",
  });

  return res.data;
};

export const getProducts = async (filters) => {
  const res = await axios()({
    url: `/products?${QS.stringify(filters)}`,
    method: "GET",
  });

  return res.data;
};

export const getLatestProducts = async () => {
  const filters = {
    _sort: "createdAt:desc",
    _limit: 8,
  };

  const res = await axios()({
    url: `/products?${QS.stringify(filters)}`,
    method: "GET",
  });

  return res.data;
};

export const getProductsFromShop = async (id) => {
  const query = {
    shop: id,
  };

  const res = await axios()({
    url: `/products?${QS.stringify(query)}`,
    method: "GET",
  });

  return res.data;
};

export const addProduct = async (data) => {
  const res = await authAxios()({
    url: `/products`,
    method: "POST",
    data,
  });

  return res.data;
};

export const putProduct = async (id, data) => {
  const res = await authAxios()({
    url: `/products/${id}`,
    method: "PUT",
    data,
  });

  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await authAxios()({
    url: `/products/${id}`,
    method: "DELETE",
  });

  return res.data;
};

export const uploadFiles = async (files) => {
  const formData = new FormData();
  files.map((file) => formData.append("files", file));

  const res = await authAxios()({
    url: "/upload",
    method: "POST",
    data: formData,
  });

  return res.data;
};
 