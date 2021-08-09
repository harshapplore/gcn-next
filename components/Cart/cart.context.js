import { createContext } from "react";

const initialValue = {
  products: [],
  shops: [],
  billing: {},
  shipping: {},
  subTotals: [],
  pickUpOrder: false,
  totalPrice: 0,
  totalDelivery: 0,
  co2Compensation: 0,
  total: 0,

  setShops: () => {},
  setProducts: () => {},
  setBilling: () => {},
  setShipping: () => {},
  setPickUpOrder: () => {},
  setSubTotals: () => {},
  setTotalPrice: () => {},
  setTotalDelivery: () => {},
  setCo2Compensation: () => {},
  setTotal: () => {},
};

export default createContext(initialValue);
