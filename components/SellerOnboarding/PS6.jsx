const PS6 = ({next}) => {
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
                    <label className="w-checkbox checkbox-field">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                      <input
                        type="checkbox"
                        id="checkbox-3"
                        name="checkbox-3"
                        data-name="Checkbox 3"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
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
                    src="images/fill-2.png"
                    loading="lazy"
                    alt
                    className="payment-icon"
                  />
                  <div className="inline-text">
                    <label className="w-checkbox checkbox-field">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                      <input
                        type="checkbox"
                        id="checkbox-3"
                        name="checkbox-3"
                        data-name="Checkbox 3"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                      />
                      <span className="checkbox-label w-form-label">
                        Stripe
                      </span>
                    </label>
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
                    <label className="w-checkbox checkbox-field">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                      <input
                        type="checkbox"
                        id="checkbox-3"
                        name="checkbox-3"
                        data-name="Checkbox 3"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                      />
                      <span className="checkbox-label w-form-label">
                        Apple Pay
                      </span>
                    </label>
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
                    <label className="w-checkbox checkbox-field">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                      <input
                        type="checkbox"
                        id="checkbox-3"
                        name="checkbox-3"
                        data-name="Checkbox 3"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                      />
                      <span className="checkbox-label w-form-label">
                        Credite Crd
                      </span>
                    </label>
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
                onClick = {e => {
                  e.preventDefault();
                  next();
                }}
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
