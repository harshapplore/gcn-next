import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import authAxios from "@/setups/axios";

import CheckBox from "@/shared/Checkbox";
import Button from "@/shared/Button";

const PS5 = ({ next }) => {
  const { seller } = useSelector((state) => state.user);

  const [payInfo, setPayInfo] = useState(seller || {});

  const updatePayInfo = (key, value) => {
    const newPayInfo = { ...payInfo };
    newPayInfo[key] = value;
    setPayInfo(newPayInfo);
  };

  const submit = async (e) => {
    e.preventDefault();

    const res = await authAxios()({
      url: `/sellers/${seller.id}`,
      method: "PUT",
      data: payInfo,
    });

    if (res) next();
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>How you'll get paid</h1>
        </div>
        <div className="w-form">
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
            <div className="flex mb-20">
              <input
                type="text"
                className="text-field w-input"
                maxLength={80}
                placeholder="Bank Account Owner"
                required
                value={payInfo.bankAccountOwner}
                onChange={(e) =>
                  updatePayInfo("bankAccountOwner", e.target.value)
                }
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={80}
                placeholder="IBAN"
                required
                value={payInfo.iban}
                onChange={(e) => updatePayInfo("iban", e.target.value)}
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={80}
                placeholder="BIC/SWIFT"
                required
                value={payInfo.bicOrSwift}
                onChange={(e) => updatePayInfo("bicOrSwift", e.target.value)}
              />
            </div>

            <div className="mb-40">
              <CheckBox
                text="Use a different account for the Green Cloud Nine pricing plan"
                value={payInfo.useDifferentAccountPricing}
                setValue={(value) =>
                  updatePayInfo("useDifferentAccountPricing", value)
                }
              />
            </div>

            <div className="center">
              <Button type="secondary" action={submit} name="Save & Continue" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PS5;
