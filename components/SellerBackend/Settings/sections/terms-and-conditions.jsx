import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TextArea from "@/shared/Input/TextArea";

import { fetchSeller } from "@/slices/user";
import { updateShop } from "@/_controllers/shop";

const TermsAndConditions = () => {
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.seller);
  const [_data, _setData] = useState({});
  const [_shop, _setShop] = useState({});

  useEffect(() => {
    if (!seller.shop) {
      _setShop({});
      return;
    }

    _setShop(seller.shop);
  }, [seller.shop]);

  console.log("Shop", _shop, seller.shop)

  const updateShopHandler = async (shopId) => {
    const result = await updateShop(shopId, _data);

    dispatch(fetchSeller());
    _setData({});

    return result;
  };

  return (
    <div className="settings-block">
      <h3 className="headline-5 mb-30">Terms &amp; Conditions</h3>
      <div className="w-form">
        <div className="terms-headline mb-20">
          <h4 className="subtitle-1 subtitle-1--blue">Returns and Refunds</h4>
        </div>

        <TextArea
          placeholder={_shop.returnsAndRefunds || "Type in here..."}
          value={_data.returnsAndRefunds}
          setValue={(value) => _setData({ ..._data, returnsAndRefunds: value })}
        />

        <div className="settings-spacer" />
        <div className="terms-headline mb-20">
          <h4 className="subtitle-1 subtitle-1--blue">General Conditions</h4>
        </div>

        <TextArea
          placeholder={_shop.generalConditions || "General Conditions"}
          value={_data.generalConditions}
          setValue={(value) => _setData({ ..._data, generalConditions: value })}
        />
        <div className="settings-spacer" />
        <h4 className="subtitle-1 subtitle-1--blue mb-20">Privacy Policy</h4>

        <TextArea
          placeholder={_shop.privacyPolicy || "Privacy Policy"}
          value={_data.privacyPolicy}
          setValue={(value) => _setData({ ..._data, privacyPolicy: value })}
        />

        <div className="settings-spacer" />

        <a
          className="button blue mr-10"
          onClick={() => updateShopHandler(_shop.id)}
        >
          Save and Continue
        </a>
      </div>
    </div>
  );
};

export default TermsAndConditions;
