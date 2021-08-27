import { authAxios } from "@/setups/axios";

export const getUser = () => {};

export const putUser = async (id, data) => {
  const res = await authAxios()({
    url: `/users/${id}`,
    method: "PUT",
    data,
  });

  return res.data;
};
