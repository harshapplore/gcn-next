import Axios from "axios";

export const axios = () => {
  return Axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_ENDPOINT,
  });
};

export const authAxios = () => {
  const token = localStorage.getItem("token");

  return Axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_ENDPOINT,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default authAxios;
