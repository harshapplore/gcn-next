import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ShopHeading = () => {
  const { seller } = useSelector((state) => state.user);
  const [shop, setShop] = useState({});

  useEffect(() => {
    if (seller && seller.shop) setShop(seller.shop);
  }, [seller]);

  return (
    <div className="hide-mobile">
      <div className="heading-wrapper mb-40">
        <h1>{shop.name}</h1>
        <div className="overline-text">30 Products</div>
      </div>
    </div>
  );
};

export default ShopHeading;
