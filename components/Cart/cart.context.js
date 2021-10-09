import { createContext } from "react";

const initialValue = {
  products: [],
  shops: [],
  shopsMeta: [],
  billing: {},
  shipping: {},
  subTotals: [],
  gift: {},
  pickUpOrder: false,
  totalPrice: 0,
  totalDelivery: 0,
  co2Compensation: 0,
  vat: 0,
  total: 0,

  setShops: () => {},
  setShopsMeta: () => {},
  setProducts: () => {},
  setBilling: () => {},
  setShipping: () => {},
  setGift: () => {},
  setPickUpOrder: () => {},
  setSubTotals: () => {},
  setTotalPrice: () => {},
  setTotalDelivery: () => {},
  setCo2Compensation: () => {},
  setVat: () => {},
  setTotal: () => {},
};

export default createContext(initialValue);
