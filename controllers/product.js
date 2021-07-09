import { authAxios } from "setups/axios";

export const getProduct = async (id) => {
  const res = await authAxios()({
    url: `/products/${id}`,
    method: "GET",
  });

  return res.data;
};

export const addProduct = async (data) => {
  const res = await authAxios()({
    url: `/products`,
    method: "POST",
    data
  })
}

export const putProduct = async (id, data) => {
  const res = await authAxios()({
    url: `/products/${id}`,
    method: "PUT",
    data,
  });

  return res.data;
};

export const uploadFiles = async (files) =>{
  const formData = new FormData();
    files.map((file) => formData.append("files", file));

    const res = await authAxios()({
      url: "/upload",
      method: "POST",
      data: formData,
    });

    return res.data;
}


