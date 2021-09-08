export const filterConverter = (data) => {
  const newData = {};

  const { brand, price, sortBy, ...rest } = data;

  if (brand) newData.shopName = brand;

  if (price && price.length > 0) {
    if (price.length === 1) {
      const priceSplit = price[0].split(" ");

      if (priceSplit.length === 2 || priceSplit.length === 3)
        newData.price_gt = parseInt(priceSplit.pop());
      else {
        newData.price_gt = parseInt(priceSplit[1]);
        newData.price_lt = parseInt(priceSplit.pop());
      }
    }

    if (price.length > 1) {
      const priceSplitArr = price.map((price) => price.split(" "));

      const index = priceSplitArr.findIndex((prices) => prices[0] === ">");

      if (index === -1) {
        newData.price_gt = priceSplitArr.reduce((a, c) => {
          const currentValue = parseInt(c[1]);
          return currentValue < a ? currentValue : a;
        }, 10000);
        newData.price_lt = priceSplitArr.reduce((a, c) => {
          const currentValue = parseInt(c.pop());
          return currentValue > a ? currentValue : a;
        }, 0);
      } else {
        newData.price_gt = priceSplitArr[index][2];
      }
    }
  }

  switch (sortBy) {
    case "Highest Price":
      newData.sortBy = "price:desc";
      break;

    case "Lowest Price":
      newData.sortBy = "price:asc";
      break;

    case "Most Recent":
      newData.sortBy = "createdAt:desc";
      break;
  }

  return {
    ...rest,
    ...newData,
  };
};

export const queryBuilder = ({
  sustainability,
  category,
  colors,
  price_gt,
  price_lt,
  sale,
  sortBy,
  deliversTo,
  deliveryTime,
  shopName,
  shopLocation,
  freeDelivery,
  pickUp,
}) => {
  const q_category = category
    ? `category{
            id: ${category}}`
    : "";

  const q_sustainability = sustainability
    ? `sustainability_in: ${JSON.stringify(sustainability)}`
    : "";

  const q_colors = colors ? `colors_in: ${JSON.stringify(colors)} ` : "";

  const q_shop =
    (shopName || deliversTo || deliveryTime || shopLocation || freeDelivery) &&
    `shop: {
    ${shopName ? `name: ${JSON.stringify(shopName)}` : ""}
    ${shopLocation ? `` : ""}
    ${
      (deliversTo || deliveryTime) &&
      `shipping{
      ${deliversTo ? `country_in: ${JSON.stringify(deliversTo)}` : ""}
      ${freeDelivery ? `freeDelivery: ${freeDelivery}` : ""}
      ${pickUp ? `pickUp: ${pickUp}` : ""}
      ${
        deliveryTime
          ? `{
        deliveryTime_in: ${JSON.stringify(deliveryTime)}
      }`
          : ""
      }
      }`
    }`;

  return `
    query{
      products( 
        where:{ 
        ${q_category}
        ${q_sustainability}
        ${q_colors}
        ${price_gt ? `price_gt: ${price_gt}` : ""}
        ${price_lt ? `price_lt: ${price_lt}` : ""}
        ${sale ? `sale: true` : ""}
      }
      ${sortBy ? `sort:${JSON.stringify(sortBy)}` : ""} 
      ){
        id
        name
        images {
          url
        }
        price
        rating
        shop{
          id
          name
        }
      }
    }
  `;
};

export const filterQuery = `
  query test($sustainability: [String], $colors: [String], $price_lt: Float, $price_gt: Float, $shopName: String, $sortBy: String) {
    products(where: {
      sustainability_in: $sustainability
      colors_in: $colors
      price_lt: $price_lt
      price_gt: $price_gt
      shop: {
        name: $shopName
      }
    } sort: $sortBy){
      id
        name
        images {
          url
        }
        price
        rating
        shop{
          id
          name
        }
    }
  }
`;
