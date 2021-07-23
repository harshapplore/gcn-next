import {axios, authAxios} from "setups/axios";

export const getShop = async (id) => {
  const res = await axios()({
    url: `/shops/${id}`,
    method: 'get'
  })

  return res.data;
}

