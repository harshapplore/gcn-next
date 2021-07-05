import { useState } from "react";

import { useSelector } from "react-redux";

import authAxios from "setups/axios";
import CheckBox from "shared/Checkbox";

const PS6 = ({ next }) => {
  const { seller } = useSelector((state) => state.user);

  const [options, setOptions] = useState(seller.acceptedPaymentOptions || {});

  const updateOptions = (key, value) => {
    const newOptions = { ...options };
    newOptions[key] = value;
    setOptions(newOptions);
  };

  const submit = async (e) => {
    e.preventDefault();

    const res = await authAxios()({
      url: `/sellers/${seller.id}`,
      method: "PUT",
      data: {
        onboardStatus: 6,
        acceptedPaymentOptions: options,
      },
    });

    if (res) next();
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>Which payment options do you accept?</h1>
        </div>
        <div className="w-form">
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
            <div className="payment-wrapper">
              <div className="payment-item">
                <div className="payment-left">
                  <img
                    src="images/fill-2.png"
                    loading="lazy"
                    alt
                    className="payment-icon"
                  />
                  <div className="inline-text">
                    <CheckBox
                      text="Credit Card"
                      value={options.creditCard}
                      setValue={(value) => updateOptions("creditCard", value)}
                    />
                  </div>
                </div>
              </div>
              <div className="payment-item">
                <div className="payment-left">
                  <img
                    src="images/fill-2.png"
                    loading="lazy"
                    alt
                    className="payment-icon"
                  />
                  <div className="inline-text">
                    <CheckBox
                      text="Stripe"
                      value={options.stripe}
                      setValue={(value) => updateOptions("stripe", value)}
                    />
                  </div>
                </div>
                <div className="payment-button">
                  <a href="#" className="button secondary w-button">
                    Add account Info
                  </a>
                </div>
              </div>
              <div className="payment-item">
                <div className="payment-left">
                  <img
                    src="images/fill-2.png"
                    loading="lazy"
                    alt
                    className="payment-icon"
                  />
                  <div className="inline-text">
                    <CheckBox
                      text="Apple Pay"
                      value={options.applePay}
                      setValue={(value) => updateOptions("applePay", value)}
                    />
                  </div>
                </div>
                <div className="payment-button">
                  <a href="#" className="button secondary w-button">
                    Add account Info
                  </a>
                </div>
              </div>
              <div className="payment-item">
                <div className="payment-left">
                  <img
                    src="images/fill-2.png"
                    loading="lazy"
                    alt
                    className="payment-icon"
                  />
                  <div className="inline-text">
                    <CheckBox
                      text="Paypal"
                      value={options.paypal}
                      setValue={(value) => updateOptions("paypal", value)}
                    />
                  </div>
                </div>
                <div className="payment-button">
                  <a href="#" className="button secondary w-button">
                    Add account Info
                  </a>
                </div>
              </div>
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
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PS6;
