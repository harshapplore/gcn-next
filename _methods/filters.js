export const filterConverter = (data) => {
  const newData = {};

  console.log("fC", data);

  const {
    brand,
    price,
    sortBy,
    pickUp,
    freeDelivery,
    sale,
    shopNames,
    deliversTo,
    ...rest
  } = data;

  if (brand) newData.shopName = brand;

  if (sale) newData.sale = sale;

  if (pickUp) newData.pickUp = pickUp;

  if (deliversTo && deliversTo.length) newData.deliversTo = deliversTo;

  if (freeDelivery) newData.freeDelivery = freeDelivery;

  if (shopNames && shopNames.length) newData.shopNames = shopNames;

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
    ${(deliversTo || deliveryTime) &&
    `shipping{
      ${deliversTo ? `country_in: ${JSON.stringify(deliversTo)}` : ""}
      ${freeDelivery ? `freeDelivery: ${freeDelivery}` : ""}
      ${pickUp ? `pickUp: ${pickUp}` : ""}
      ${deliveryTime
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
  query test($sustainability: [String], $colors: [String], $price_lt: Float, $price_gt: Float, $shopName: String, $shopNames: [String], $sortBy: String, $category: String, $freeDelivery: Boolean, $sale: Boolean, $pickUp: Boolean, $deliversTo: [String], $deliveryTime: String, $shopLocation: String, $search: String, $tags: [String]) {
    products(where: {
      name_contains: $search
      sustainability_in: $sustainability
      colors_in: $colors
      price_lt: $price_lt
      price_gt: $price_gt
      sale: $sale
      tags_in: $tags
      category: {
        id: $category
      },
      shop: {
        name: $shopName
        name_in: $shopNames
        country: $shopLocation
        freeDelivery: $freeDelivery
        pickUp: $pickUp
        shipping: {
          country: $deliversTo
          weights: {
            deliveryTime: $deliveryTime
          }
        }
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
