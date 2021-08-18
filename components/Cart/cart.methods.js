import shop from "@/slices/shop";

export const getShopView = (products) => {
  console.log("getShopV", products);

  const shopsList = [];
  const shops = [];

  products.map((cartItem) => {
    if (!shopsList.includes(cartItem.shop.id)) {
      shopsList.push(cartItem.shop.id);
      shops.push({
        shopId: cartItem.shop.id,
        products: [
          {
            ...cartItem,
            quantity: cartItem.quantity,
            size: cartItem.size,
            color: cartItem.color,
            cartId: cartItem.id,
          },
        ],
      });

      return;
    }

    const index = shops.findIndex(
      (shop) => shop.shopId === cartItem.shop.id
    );

    shops[index].products.push({
      ...cartItem,
      quantity: cartItem.quantity,
      size: cartItem.size,
      color: cartItem.color,
      cartId: cartItem.id,
    });
  });

  return shops;
};

export const getProductView = (shops) => {
  return shops.map((shop) => shop.products).flat();
};

export const getSubTotalPrice = (products) => {
  return products.reduce(
    (a, product) => a + Math.round(product.price * product.quantity),
    0
  );
};

export const getSubTotalDelivery = () => {
  return 0;
};

/**
 * Cart Manipulation - Methods to manipulate Cart
 * */
