import { useState } from "react";

import { useSelector } from "react-redux";
import authAxios from "setups/axios";

import Message from "shared/Message";

const PS8 = ({ next }) => {
  const { seller } = useSelector((state) => state.user);

  const [shop, setShop] = useState(seller.shop || "");

  const [err, setErr] = useState("");

  const submit = async () => {
    if (!shop.name) {
      setErr("Shop Name cannot be empty");
      return;
    }

    const res = await authAxios()({
      url: `/shops/${seller.shop.id}`,
      method: "PUT",
      data: {
        name: shop.name,
      },
    });

    if (res) next();
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>Name your shop</h1>
        </div>
        <div className="w-form">
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
            <input
              type="text"
              className="text-field mb-20 w-input"
              maxLength={80}
              placeholder="Thomas' Soap Shop"
              value={shop.name || ""}
              onChange={(e) => setShop({ ...shop, name: e.target.value })}
              required
            />
            <input
              type="submit"
              defaultValue="Save & Continue"
              data-wait="Please wait..."
              className="button blue w-button"
              onClick={submit}
            />
          </form>
          {err && <Message text={err} status={-1} />}
        </div>
      </div>
    </div>
  );
};

export default PS8;
