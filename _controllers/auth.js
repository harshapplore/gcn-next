import { v4 } from "uuid";

import { axios, authAxios } from "@/setups/axios";
import { setErrors, clearErrors } from "@/slices/error";

export const loginUser = ({}) => {};

export const registerUser = async (
  { name, email, password, region, newsletter, terms, type },
  role,
  dispatch
) => {
  const username =
    name &&
    name.split(" ")[0].slice(0, 5) + "-" + v4().split("-").pop().slice(0, 4);

  dispatch(clearErrors());

  const response = await axios()({
    url: "/auth/local/register",
    method: "POST",
    data: { name, email, username, password, region, newsletter, type, terms },
  }).catch((error) => {
    console.log("Error", error);

    const errors = error.response && error.response.data.message
      .map((error) => error.messages)    

    dispatch(setErrors(errors));
  });

  console.log(response);

  return response && response.data;
};

export const putRole = async (token, role, dispatch) => {
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

  if (res) return res.data;
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
