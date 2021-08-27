import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import TextInput from "@/shared/Input/Text";

const ShopInfo = () => {
  const { seller } = useSelector((state) => state.seller);

  const [_shop, _setShop] = useState({});

  useEffect(() => {
    if (!seller.shop) {
      _setShop({});
      return;
    }

    _setShop(seller.shop);
  }, [seller.shop]);

  return (
    <div className="settings-block">
      <h3 className="headline-5 mb-30">Shop Information</h3>
      <div className="account-current-data">
        <div>
          <div className="label">Current Company Name</div>
          <div>{_shop.companyName}</div>
        </div>
        <div>
          <div className="label">Current Shop Name</div>
          <div>{_shop.name}</div>
        </div>
      </div>
      <h4 className="subtitle-2 mb-10">Change Shop Information</h4>
      <div className="w-form">
          <div className="account-form-1">

            <TextInput placeholder={_shop.companyName || "Company Name"} />
            <TextInput placeholder={_shop.name || "Shop Name"}  />
            <TextInput placeholder={_shop.streetAddress || "Street Address"} />
            <TextInput placeholder={_shop.postalCode || "Postal Code"} />
            <TextInput placeholder={_shop.city || "City"} />
            <TextInput placeholder={_shop.vat || "VAT"} />
          </div>
          <a className="button blue mr-10">Save Changes</a>
      </div>
    </div>
  );
};

export default ShopInfo;
