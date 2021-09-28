import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TextArea from "@/shared/Input/TextArea";
import Button from "@/shared/Button";

import { fetchSeller } from "@/slices/user";
import { updateShop } from "@/_controllers/shop";

const TermsAndConditions = () => {
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.seller);
  const [_data, _setData] = useState({});
  const [_shop, _setShop] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!seller.id) dispatch(fetchSeller());
  }, []);

  useEffect(() => {
    if (!seller.shop) {
      _setShop({});
      return;
    }
    console.log("SELLER")
    console.log(seller)
    _setShop(seller.shop);
  }, [seller]);

  const updateShopHandler = async (shopId) => {
    setLoading(true);

    const result = await updateShop(shopId, _data);

    console.log(result, _data);

    _setData({
      returnsAndRefunds: "",
      generalConditions: "",
      privacyPolicy: ""
    });
    dispatch(fetchSeller());

    setLoading(false);

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
        <Button
          loading={loading}
          type="secondary"
          name="Save Changes"
          action={() => updateShopHandler(_shop.id)}
        />
      </div>
    </div>
  );
};

export default TermsAndConditions;
