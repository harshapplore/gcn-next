import React, { useState, useEffect } from "react";

const SignIn = ({ close, showRegister }) => {
  const [data, setData] = useState({});

  const updateData = (key, value) => {
    const newData = { ...data };
    newData[key] = value;

    setData(newData);
  };

  return (
    <div className="popup-wrapper sign-in">
      <div className="overlay" onClick={close} />
      <div className="sign-in-popup">
        <h2>Sign In</h2>
        <div className="scroll-y">
          <div className="w-form">
            <form>
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                placeholder="Email Address"
                value={data.email}
                onChange={(e) => updateData("email", e.target.value)}
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                placeholder="Password"
                required
                value={data.password}
                onChange={(e) => update("password", e.target.value)}
              />

              <div className="flex mb-20">
                <label className="w-checkbox checkbox-field">
                  <div
                    className={
                      "w-checkbox-input w-checkbox-input--inputType-custom checkbox" +
                      (data.staySignedIn ? " w--redirected-checked" : "")
                    }
                  />
                  <input
                    type="checkbox"
                    style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    value={data.staySignedIn}
                    onChange={(e) =>
                      updateData("staySignedIn", e.currentTarget.value)
                    }
                  />
                  <span className="checkbox-label w-form-label">
                    Stay signed in
                  </span>
                </label>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>
              <div className="center">
                <input
                  type="submit"
                  defaultValue="Save & Continue"
                  data-wait="Please wait..."
                  className="button blue w-button"
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
          <div className="center">
            <div className="mb-20">or</div>
            <div className="mb-10">
              <a href="#" className="button secondary w-button">
                Continue with google
              </a>
            </div>
            <div className="mb-10">
              <a href="#" className="button secondary w-button">
                Continue with facebook
              </a>
            </div>
            <div className="mb-20">
              <a href="#" className="button secondary w-button">
                Continue with apple
              </a>
            </div>
            <div className="mb-10">Don't have an account?</div>
            <div>
              <a href="#" className="button w-button" onClick={showRegister}>
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Register = ({ close }) => {
  const [data, setData] = useState({ type: "seller" });

  const [formFilled, setFormFilled] = useState(false);
  const [formFailed, setFormFailed] = useState(false);

  const updateData = (key, value) => {
    const newData = { ...data };
    newData[key] = value;
    setData(newData);
    console.log(data);
  };

  const updateType = (type) => {
    setData({ ...data, type });
  };

  return (
    <div className="popup-wrapper register">
      <div className="overlay" onClick={close} />
      <div className="sign-in-popup">
        <h2>Register</h2>

        <div className="scroll-y">
          <div className="w-tabs">
            <div className="tab-menu-register w-tab-menu">
              <a
                data-w-tab="Tab 1"
                className={
                  "tab-register w-inline-block w-tab-link" +
                  (data.type === "customer" ? " w--current" : "")
                }
                onClick={() => updateType("customer")}
              >
                <div>Customer</div>
              </a>

              <a
                data-w-tab="Tab 2"
                className={
                  "tab-register w-inline-block w-tab-link" +
                  (data.type === "seller" ? " w--current" : "")
                }
                onClick={() => updateType("seller")}
              >
                <div>Seller</div>
              </a>
            </div>

            <div className="w-tab-content">
              <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                <div className="w-form">
                  <form>
                    <input
                      type="text"
                      className="text-field w-input"
                      maxLength={256}
                      data-name
                      placeholder="Name"
                      value={data.name}
                      onChange={(e) => updateData("name", e.target.value)}
                    />
                    <input
                      type="text"
                      className="text-field w-input"
                      maxLength={256}
                      placeholder="Email Address"
                      required
                      value={data.email}
                      onChange={(e) => updateData("email", e.target.value)}
                    />
                    <input
                      type="text"
                      className="text-field w-input"
                      maxLength={256}
                      placeholder="Password"
                      required
                      onChange={(e) => updateData("password", e.target.value)}
                    />
                    <select
                      id="node-3"
                      data-name
                      className="text-field w-select"
                      value={data.choice}
                      onChange={(e) => updateData("choice", e.target.value)}
                    >
                      <option value>Select one...</option>
                      <option value="First">First Choice</option>
                      <option value="Second">Second Choice</option>
                      <option value="Third">Third Choice</option>
                    </select>
                    <div className="flex mb-20">
                      <label className="w-checkbox checkbox-field">
                        <div
                          className={
                            "w-checkbox-input w-checkbox-input--inputType-custom checkbox" +
                            (data.newsletter ? " w--redirected-checked" : "")
                          }
                        />
                        <input
                          type="checkbox"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                          onChange={(e) =>
                            updateData("newsletter", e.currentTarget.checked)
                          }
                        />
                        <span className="checkbox-label w-form-label">
                          Newsletter
                        </span>
                      </label>
                    </div>
                    <div className="flex mb-20">
                      <label className="w-checkbox checkbox-field">
                        <div
                          className={
                            "w-checkbox-input w-checkbox-input--inputType-custom checkbox" +
                            (data.terms ? " w--redirected-checked" : "")
                          }
                        />
                        <input
                          type="checkbox"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                          value={data.terms}
                          onChange={(e) =>
                            updateData("terms", e.currentTarget.checked)
                          }
                        />
                        <span className="checkbox-label w-form-label">
                          Accept Terms &amp;&nbsp;Conditions and Privacy Policy
                        </span>
                        <div className="form-info">Lorem ipsum</div>
                      </label>
                    </div>
                    <div className="center">
                      <input
                        type="submit"
                        defaultValue="Register"
                        data-wait="Please wait..."
                        className="button blue w-button"
                      />
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>

                {data.type === "customer" && (
                  <div className="center">
                    <div className="mb-20">or</div>
                    <div className="mb-20">
                      <a href="#" className="button secondary w-button">
                        Continue with google
                      </a>
                    </div>
                    <div className="mb-20">
                      <a href="#" className="button secondary w-button">
                        Continue with facebook
                      </a>
                    </div>
                    <div className="mb-50">
                      <a href="#" className="button secondary w-button">
                        Continue with apple
                      </a>
                    </div>
                  </div>
                )}
                {data.type === "seller" && (
                  <div className="sell">
                    <div className="mb-20">Sell on Green Cloud Nine</div>
                    <a href="#" className="button secondary w-button">
                      How it works
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PageBanner = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="page-section banner">
      <img
        src="images/bild-header2x.jpg"
        loading="lazy"
        sizes="100vw"
        srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
        alt="Handcrafted stuff"
        className="back-img"
      />
      <div className="container">
        <div className="home-banner-content">
          <a href="#" className="button icon orange mx-10 w-inline-block">
            <div className="button-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="currentColor"
              >
                <g>
                  <rect fill="none" height={24} width={24} />
                </g>
                <g>
                  <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" />
                </g>
              </svg>
            </div>
            <div className="text-block">Discover products</div>
          </a>
          <a
            data-w-id="1ef2d677-f83c-fa19-5392-cae032f4ab0f"
            href="#"
            className="button icon blue mx-10 w-inline-block"
            onClick={() => setShowSignIn(true)}
          >
            <div className="button-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="currentColor"
              >
                <g>
                  <rect fill="none" height={24} width={24} />
                </g>
                <g>
                  <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" />
                </g>
              </svg>
            </div>
            <div className="text-block">Sell products</div>
          </a>
        </div>
      </div>
      {showSignIn && (
        <SignIn
          close={() => setShowSignIn(false)}
          showRegister={() => {
            setShowSignIn(false);
            setShowRegister(true);
          }}
        />
      )}
      {showRegister && <Register close={() => setShowRegister(false)} />}
    </div>
  );
};

export default PageBanner;
