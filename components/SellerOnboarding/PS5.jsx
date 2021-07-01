import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { fetchSeller } from "slices/user";
import authAxios from "setups/axios";

import CheckBox from "shared/Checkbox";

const PS5 = ({ next }) => {
  const { seller } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [payInfo, setPayInfo] = useState(seller || {});

  console.log(payInfo);

  useEffect(() => {
    if (!seller.id) {
      dispatch(fetchSeller());
    }
  }, []);

  const updatePayInfo = (key, value) => {
    const newPayInfo = { ...payInfo };
    newPayInfo[key] = value;
    setPayInfo(newPayInfo);

    console.log(payInfo);
  };

  const submit = async (e) => {
    e.preventDefault();

    const res = await authAxios()({
      url: `/sellers/${seller.id}`,
      method: "PUT",
      data: payInfo,
    });

    if (res) {
      console.log(res);
      dispatch(fetchSeller());
      next();
    }
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
              <input
                type="submit"
                defaultValue="Save & Continue"
                data-wait="Please wait..."
                className="button blue w-button"
                onClick={submit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PS5;
