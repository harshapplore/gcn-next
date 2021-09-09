import { createContext } from "react";

const initialValue = {
  shippingCost: [],
  setShippingCost: () => {},
};

export default createContext(initialValue);
