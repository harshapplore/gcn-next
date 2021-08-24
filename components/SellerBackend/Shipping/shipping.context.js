import { createContext } from "react";

const initialValue = {
  shippingCosts: [],
  setShippingCosts: () => {},
};

export default createContext(initialValue);
