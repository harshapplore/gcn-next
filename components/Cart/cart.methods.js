import EUVATCalculator from "eu-vat-calc";
import countriesList from "@/_data/countriesList";

import shop from "@/slices/shop";
import countries from '@/_data/countriesList.json';

export const getShopView = (products) => {
  const shopsList = [];
  const shops = [];

  products.map((cartItem) => {
    if (!shopsList.includes(cartItem.shop.id)) {
      shopsList.push(cartItem.shop.id);
      shops.push({
        shopId: cartItem.shop.id,
        shop: cartItem.shop,
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

    const index = shops.findIndex((shop) => shop.shopId === cartItem.shop.id);

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
  if (!products) return 0;

  return products.reduce(
    (a, product) => a + Math.round(product.price * product.quantity),
    0
  );
};

export const getSubTotalDelivery = (products) => {
  console.log(products)
    let shop = products.length ? (products[0].shop ? products[0].shop : false)  : false
    if(shop.shipping) {
        
        let totalWeight = 0;
        products.forEach(val => {
            totalWeight += val.weight * val.quantity
        })
 
        let shippingPrice = 0;
        shop.shipping.forEach(val => {
            if (val.country == "National") {
                val.weights.forEach(weight => {
                    if (totalWeight < 1 && weight.category == "0 to 1Kg") {
                        shippingPrice = weight.cost;
                    } else if ((totalWeight >= 1 && totalWeight < 5) && weight.category == "1 to 5Kg") {
                        shippingPrice = weight.cost;
                    } else if ((totalWeight >= 5 && totalWeight < 10) && weight.category == "5 to 10Kg") {
                        shippingPrice = weight.cost;
                    } else if (totalWeight >= 10 && weight.category == "More than 10Kg") {
                        shippingPrice = weight.cost;
                    }
                })
            }
        })

        return shippingPrice;
    } else {
        return 0;
    } 
};

export const calculateVat = ({
  domesticCountry,
  destinationCountry,
  amount,
}) => { 
    console.log({
      domesticCountry,
      destinationCountry,
      amount,
    })
    let vat = countries.filter(val => val.name == domesticCountry)
    if(vat.length > 0) {
        let vatValue = vat[0].vat;
        let finalAmount = ((vatValue / 100) * amount);
        return finalAmount;
    } else {
        return 0;
    } 
};

/* Shop Meta Data Generator */

// export const getShopMeta = () => {
//   const
// }
