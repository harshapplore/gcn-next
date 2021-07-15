import Shop from "components/Shop";

import Auth from "shared/Auth/Auth";

export const ShopPage = () => {
  return (
    <Auth>
      <Shop />
    </Auth>
  );
};

export default ShopPage;
