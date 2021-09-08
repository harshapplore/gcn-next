export const gqlQueryBuilder = ({
  sustainability,
  category,
  colors,
  price_gt,
  price_lt,
  sale,
  sort_by,
  shopId,
  deliveryLocations,
  deliveryTime,
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
    (shopId || deliveryLocations || deliveryTime) &&
    `shop{
    ${shopId ? `id: ${shopId}` : ""}
    ${
      (deliveryLocations || deliveryTime) &&
      `shipping{
      ${
        deliveryLocations ? `country: ${JSON.stringify(deliveryLocations)}` : ""
      }
      ${
        deliveryTime
          ? `{
        deliveryTime: ${deliveryTime}
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
        ${q_shop}
        
      }
      ${sort_by ? `sort:${sort_by}` : ""} 
      ){
        id,
        name,
        images,
        price,
        rating,
      }
    }
  `;
};

