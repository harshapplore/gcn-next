import { authAxios, axios } from "@/setups/axios";
import QS from "query-string";

/* Cart Methods */

export const addToCart = async ({ productId, quantity }) => {
  const res = await authAxios()({
    url: `/customers/cart`,
    method: "PUT",
    data: {
      productId,
      quantity,
    },
  });

  return res.data;
};

export const getCart = async () => {
  const res = await authAxios()({
    url: "/customers/order",
    method: "GET",
  });

  return res.data;
};

export const getCartProducts = async (filter) => {
  const res = await authAxios()({
    url: `/carts?${QS.stringify(filter)}`,
    method: "GET",
  });

  return res.data;
};

export const updateCartItem = async (id, data) => {
  const res = await authAxios()({
    url: `/carts/${id}`,
    method: "PUT",
    data: data,
  });

  return res.data;
};

export const deleteItem = async (id) => {
  const res = await authAxios()({
    url: `/carts/${id}`,
    method: "DELETE",
  });

  return res.data;
};

/*
 * Controllers to manage Favorites
 */

export const getFavoriteItems = async ({ customerId }) => {
  const filter = QS.stringify({
    customer: customerId,
    type: "Product",
  });

  const res = await authAxios()({
    url: `/favorites?${filter}`,
    method: "GET",
  });

  return res.data;
};

export const getFavoriteShops = async ({ customerId }) => {
  const filter = QS.stringify({
    customer: customerId,
    type: "Shop",
  });

  const res = await authAxios()({
    url: `/favorites?${filter}`,
    method: "GET",
  });
  console.log(res)
  return res.data;
};

export const addToFavorites = async ({
  customerId,
  userId,
  type,
  product,
  shop,
}) => {
  const data = {
    customer: customerId,
    user: userId,
    type,
    product,
    shop,
  };

  const res = await authAxios()({
    url: "/favorites",
    method: "POST",
    data,
  });

  return res.data;
};

export const deleteFavorite = async (id) => {
  const res = await authAxios()({
    url: `/favorites/${id}`,
    method: "DELETE",
  });

  return res.data;
};

/**
 * Methods for Orders
 */

export const getAllOrders = async ({ customerId}) => {
  const filter = QS.stringify({
    "user.id": customerId
  });

  const res = await authAxios()({
    url: `/orders?${filter}&_sort=createdAt:DESC`,
    method: "GET",
  });

  return res.data;
};


export const cancelOrder = async ({ orderId, shopId,Status }) => {
    const res = await authAxios()({
        url: `/orders/cancleOrder`,
        method: "POST",
        data: {
            orderId,
            shopId,
            Status
        }
    });

    return res.data;
};


export const reviewOrder = async (data) => {
    const res = await authAxios()({
        url: `/reviews`,
        method: "POST",
        data
    });
    const rese = await authAxios()({
        url: `/orders/cancleOrder`,
        method: "POST",
        data: {
            ...data,
            Status: "Product Reviewed"
        }
    });

    return res.data;
};

/**
 * Get Order details for a particular order
 * @param {*} id 
 * @returns object orderData
 */
export const getOrder = async (id) => {
  const res = await authAxios()({
    url: `/orders/${id}`,
    method: "GET",
  });

  return res.data;
};

export const changeName = async (id, data)=>{
  const res = await authAxios()({
    url: `/users/${id}`,
    method: "PUT",
    data
  });
  return res.data;
}
export const changeEmail = async (id, data)=>{
  const res = await authAxios()({
    url: `/users/${id}`,
    method: "PUT",
    data
  });
  return res.data;
}
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
