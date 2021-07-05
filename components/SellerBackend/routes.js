export const BASE_ROUTE = "/seller-backend";

export const BASIC_INFO = "/basic-info";
export const BILLING = "/billing";
export const TERMS_N_CONDITIONS = "/terms-and-condtions";
export const PRODUCTS = "/products";
export const SHIPPING = "/shipping";
export const ORDER_HISTORY = "/order-history";

export const ADD_PRODUCT = (id) => BASE_ROUTE + PRODUCTS + `/${id}/add`;
export const EDIT_PRODUCT = (id) => BASE_ROUTE + PRODUCTS + `/${id}/edit`;
