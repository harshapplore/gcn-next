export const getShopView = (products) => {
  console.log(products);

  const shopsList = [];
  const shops = [];

  products.map((cartItem) => {
    if (!shopsList.includes(cartItem.product.shop)) {
      shopsList.push(cartItem.product.shop);
      shops.push({
        shopId: cartItem.product.shop,
        products: [
          {
            ...cartItem.product,
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
      (shop) => shop.shopId === cartItem.product.shop
    );

    shops[index].products.push({
      ...cartItem.product,
      quantity: cartItem.quantity,
      size: cartItem.size,
      color: cartItem.color,
      cartId: cartItem.id,
    });
  });

  return shops;
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
