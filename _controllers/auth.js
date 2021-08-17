import { axios } from "@/setups/axios";

export const loginUser = ({}) => {};

export const registerUser = ({}) => {};

export const putRole = async (token, role) => {
  const res = await axios()({
    url: "/users/role",
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      role: role,
    },
  }).catch((error) => {
    console.log(error, error.response);
  });

  if(res) return res.data;
};

export const getUser = async (token) => {
  const response = await axios()({
    url: "/users/me",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
