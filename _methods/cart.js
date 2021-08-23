/**
 * Manipulates the Cart
 */

const Cart = () => {
  const initialCart = [];
  localStorage.setItem("cart", JSON.stringify(initialCart));
  return JSON.parse(localStorage.getItem("cart"));
};

export const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (!cart) return Cart();
  return JSON.parse(cart);
};

export const saveCart = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
  return JSON.parse(localStorage.getItem("cart"));
};

export const addToCart = (product) => {
  const cart = getCart();

  console.log("Cart", typeof cart);

  const index = cart.findIndex((item) => item.id === product.id);

  if (index >= 0) {
    return saveCart([
      ...cart.slice(0, index),
      { ...cart[index], quantity: cart[index].quantity + 1 },
      ...cart.slice(index + 1),
    ]);
  }

  return saveCart([...cart, product]);
};

export const updateCart = (product) => {
  if (!product || !product.id) {
    throw new Error("Invalid Update: Product missing.");
  }

  const cart = getCart();

  const index = cart.findIndex((item) => item.id === product.id);

  if (index === -1) return saveCart([...cart, product]);

  const newCart = [
    ...cart.slice(0, index),
    { ...cart[index], ...product },
    ...cart.slice(index + 1),
  ];

  return saveCart(newCart);
};

export const deleteFromCart = (product) => {
  if (!product && !product.id)
    throw new Error("The item to be deleted is not valid.");

  const cart = getCart();

  const index = cart.findIndex((item) => item.id === product.id);

  if (index === -1) return cart;

  return saveCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
};

/* */

export const loadAddress = (type) => {
  if (!type) throw new Error("Type of the address is missing.");

  if (type != "billing" && type != "shipping")
    throw new Error("Invalid Address type.");

  const address = localStorage.getItem(type);

  return address ? JSON.parse(address) : {};
};

export const saveAddress = (type, address) => {
  if (!type) throw new Error("Type of the address is missing.");

  if (type != "billing" && type != "shipping")
    throw new Error("Invalid Address type.");

  if (!address || !Object.keys(address).length)
    throw new Error("Address cannot be empty");

  localStorage.setItem(type, JSON.stringify(address));
  return JSON.parse(localStorage.getItem(type));
};

/// Save Shop Meta Information

export const getShopsMeta = () => {
  const shopMeta = localStorage.getItem("shopMeta");

  if (!shopMeta) {
    localStorage.setItem("shopMeta", JSON.stringify([]));
  }

  return JSON.parse(localStorage.getItem("shopMeta"));
};

export const saveShopsMeta = (data) => {
  localStorage.setItem("shopMeta", JSON.stringify(data));
  return JSON.parse(localStorage.getItem("shopMeta"));
};
