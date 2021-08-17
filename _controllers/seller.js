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
