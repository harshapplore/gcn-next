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

export const changePassword = async (currentPassword, password) => {
  const res = await authAxios()({
    url: "/users/change-password",
    method: "PUT",
    data: {
      currentPassword,
      password,
    },
  });

  return res.data;
};
