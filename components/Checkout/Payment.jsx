const Payment = () => {
  return (
    <div className="container">
      <div className="heading-wrapper mb-40">
        <h2>Payment</h2>
      </div>
      <div className="w-form">
        <form className="center">
          <div className="payment-wrapper">
            <div className="payment-item">
              <div className="payment-left">
                <img
                  src="/images/fill-2.png"
                  loading="lazy"
                  alt="Green Cloud 9 Logo"
                  className="payment-icon"
                />
                <div className="inline-text">
                  <label className="checkbox-field w-radio">
                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom checkbox w-radio-input" />
                    <input
                      type="radio"
                      data-name="Radio"
                      id="radio"
                      defaultValue="Radio"
                      required
                      style={{
                        opacity: 0,
                        position: "absolute",
                        zIndex: -1,
                      }}
                    />
                    <span className="checkbox-label w-form-label">
                      Credit Card
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="payment-item">
              <div className="payment-left">
                <img
                  src="/images/fill-2.png"
                  loading="lazy"
                  alt="Green Cloud 9 Logo"
                  className="payment-icon"
                />
                <div className="inline-text">
                  <label className="checkbox-field w-radio">
                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom checkbox w-radio-input" />
                    <input
                      type="radio"
                      style={{
                        opacity: 0,
                        position: "absolute",
                        zIndex: -1,
                      }}
                    />
                    <span className="checkbox-label w-form-label">
                      Credit Card
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="payment-item">
              <div className="payment-left">
                <img
                  src="/images/fill-2.png"
                  loading="lazy"
                  alt="Green Cloud 9 Logo"
                  className="payment-icon"
                />
                <div className="inline-text">
                  <label className="checkbox-field w-radio">
                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom checkbox w-radio-input" />
                    <input
                      type="radio"
                      style={{
                        opacity: 0,
                        position: "absolute",
                        zIndex: -1,
                      }}
                    />
                    <span className="checkbox-label w-form-label">
                      Credit Card
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="center">
            <input
              type="submit"
              defaultValue="Check your order"
              className="button blue w-button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
