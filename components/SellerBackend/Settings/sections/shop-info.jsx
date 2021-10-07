import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchSeller } from "@/slices/seller";

import TextInput from "@/shared/Input/Text";
import Button from "@/shared/Button";

import { updateShop } from "@/_controllers/shop";

const ShopInfo = () => {
  const dispatch = useDispatch();

  const { seller } = useSelector((state) => state.seller);

  const [_shop, _setShop] = useState({});
  const [_data, _setData] = useState({});
  const [region, setRegion] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!seller.shop) {
      _setShop({});
      return;
    }
    setRegion(seller.user.region)
    _setShop(seller.shop);
  }, [seller.shop]);

  const updateShopHandler = async (shopId) => {
    setLoading(true);

    const result = await updateShop(shopId, _data);

    dispatch(fetchSeller());
    _setData({});

    setLoading(false);
    return result;
  };

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
          <TextInput
            placeholder={_shop.companyName || "Company Name"}
            value={_data.companyName || ""}
            setValue={(value) => _setData({ ..._data, companyName: value })}
          />
          <TextInput
            placeholder={_shop.name || "Shop Name"}
            value={_data.name || ""}
            setValue={(value) => _setData({ ..._data, name: value })}
          />
          <TextInput
            placeholder={_shop.streetAddress || "Street Address"}
            value={_data.streetAddress || ""}
            setValue={(value) => _setData({ ..._data, streetAddress: value })}
          />
          <TextInput
            placeholder={_shop.postalCode || "Postal Code"}
            value={_data.postalCode || ""}
            setValue={(value) => _setData({ ..._data, postalCode: value })}
          />
          <TextInput
            placeholder={_shop.city || "City"}
            value={_data.city || ""}
            setValue={(value) => _setData({ ..._data, city: value })}
          />
          <TextInput
            placeholder={_shop.vat || "VAT"}
            value={_data.vat || ""}
            setValue={(value) => _setData({ ..._data, vat: value })}
          />
          <TextInput
            placeholder={_shop.region || region || "Region"}
            value={_data.region || ""}
            setValue={(value) => _setData({ ..._data, region: value })}
          />
        </div>

        <Button
          type="secondary"
          loading={loading}
          name="Save Changes"
          caps={true}
          action={() => updateShopHandler(_shop.id)}
        />
      </div>
    </div>
  );
};

export default ShopInfo;
