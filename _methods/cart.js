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

const saveCart = (state) => {
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

  return saveCart({ ...cart.slice(0, index), ...cart.slice(index + 1) });
};
