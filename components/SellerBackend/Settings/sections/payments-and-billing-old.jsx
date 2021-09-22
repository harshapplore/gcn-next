const Payments = () => {
  return (
    <>
      <div className="settings-block">
        <h3 className="headline-5 mb-20">How you will get paid</h3>
        <div className="dynamic-content">
          <div className="payment-method-wrapper">
            <div className="payment-method">
              <img
                src="/imagesimages/about-1.jpg"
                loading="lazy"
                width={61}
                height={30}
                alt=""
                className="payment-method-img"
              />
              <div className="delivery-country-text">Payment Method</div>
              <div className="show-details">
                <div>Show Details</div>
                <img
                  src="/imagesimages/expand-more-black-24-dp-copy-6.svg"
                  loading="lazy"
                  alt="expand"
                />
              </div>
            </div>
            <div className="mb-0 w-form">
              <div className="payment-form-1">
                <div className="payment-form-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                  <div className="payment-default">
                    <label className="w-checkbox checkbox-field mb-0">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked" />
                      <input
                        type="checkbox"
                        id="Default Payment Method"
                        name="Default-Payment-Method"
                        data-name="Default Payment Method"
                        defaultChecked
                        style={{
                          opacity: 0,
                          position: "absolute",
                          zIndex: -1,
                        }}
                      />
                      <span
                        htmlFor="Default Payment Method"
                        className="checkbox-label w-form-label"
                      >
                        Set as default payment method
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <div className="input-x input-x--flex mb-15">
                    <input
                      type="number"
                      className="input-x__input-field w-input"
                      maxLength={256}
                      name="Card-Number"
                      data-name="Card Number"
                      placeholder="Card Number"
                      id="Card-Number"
                      required
                    />
                    <div className="input-x__change">
                      <div>Change</div>
                      <img
                        src="/imagesimages/edit-black-24-dp.svg"
                        loading="lazy"
                        alt="Edit"
                        className="change__img"
                      />
                    </div>
                  </div>
                  <div className="input-x input-x--flex mb-15">
                    <input
                      type="text"
                      className="input-x__input-field w-input"
                      maxLength={256}
                      name="Name-on-Card"
                      data-name="Name On Card"
                      placeholder="Name on Card"
                      id="Name-on-Card"
                      required
                    />
                    <div className="input-x__change">
                      <div>Change</div>
                      <img
                        src="/images/edit-black-24-dp.svg"
                        loading="lazy"
                        alt="Edit"
                        className="change__img"
                      />
                    </div>
                  </div>
                  <div className="payment-expiration">
                    <div className="subtitle-2">Expiration date</div>
                    <select
                      name="Expiration-Month-2"
                      data-name="Expiration Month 2"
                      id="Expiration-Month-2"
                      required
                      className="input-x input-x--select w-select"
                    >
                      <option value={1}>01</option>
                    </select>
                    <select
                      name="Expiration-Year-2"
                      data-name="Expiration Year 2"
                      id="Expiration-Year-2"
                      required
                      className="input-x input-x--select w-select"
                    >
                      <option value={2021}>2021</option>
                      <option value={2022}>2022</option>
                      <option value={2023}>2023</option>
                      <option value={2024}>2024</option>
                      <option value={2025}>2025</option>
                      <option value={2026}>2026</option>
                      <option value={2027}>2027</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="payment-button-wrapper">
                <a className="button blue mr-10">Save Changes</a>
                <a className="button blue secondary">Delete Adress</a>
              </div>
            </div>
          </div>
        </div>
        <div className="dynamic-content">
          <div className="payment-method-wrapper">
            <div className="payment-method">
              <img
                src="/images/about-1.jpg"
                loading="lazy"
                width={61}
                height={30}
                alt=""
                className="payment-method-img"
              />
              <div className="delivery-country-text">Payment Method</div>
              <div className="show-details">
                <div>Show Details</div>
                <img
                  src="/images/expand-more-black-24-dp-copy-6.svg"
                  loading="lazy"
                  alt="expand"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="add-country">
          <img
            src="/images/add-black-24-dp.svg"
            loading="lazy"
            width={24}
            height={24}
            alt="Add"
            className="shop-product-list-add-icon"
          />
          <div className="delivery-country-text">Add Payment Method</div>
        </div>
      </div>
      <div className="settings-block">
        <h3 className="headline-5 mb-30">
          Which payment options do you accept?
        </h3>
        <div className="w-form">
          <div className="account-form-1 mb-50">
            <div className="payment-method-option">
              <img
                src="/images/about-1.jpg"
                loading="lazy"
                width={135}
                height={71}
                alt=""
                className="payment-method-option-img"
              />
              <label className="w-checkbox checkbox-field mb-0">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked" />
                <input
                  type="checkbox"
                  id="Payment Method 1"
                  name="Payment-Method-1"
                  data-name="Payment Method 1"
                  defaultChecked
                  style={{
                    opacity: 0,
                    position: "absolute",
                    zIndex: -1,
                  }}
                />
                <span
                  htmlFor="Payment Method 1"
                  className="checkbox-label w-form-label"
                >
                  Payment Method
                </span>
              </label>
            </div>
            <div className="payment-method-option">
              <img
                src="/images/about-1.jpg"
                loading="lazy"
                width={135}
                height={71}
                alt=""
                className="payment-method-option-img"
              />
              <label className="w-checkbox checkbox-field mb-0">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                <input
                  type="checkbox"
                  id="Payment Method 3"
                  name="Payment-Method-3"
                  data-name="Payment Method 3"
                  style={{
                    opacity: 0,
                    position: "absolute",
                    zIndex: -1,
                  }}
                />
                <span
                  htmlFor="Payment Method 3"
                  className="checkbox-label w-form-label"
                >
                  Payment Method
                </span>
              </label>
            </div>
            <div className="payment-method-option">
              <img
                src="/images/about-1.jpg"
                loading="lazy"
                width={135}
                height={71}
                alt=""
                className="payment-method-option-img"
              />
              <label className="w-checkbox checkbox-field mb-0">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked" />
                <input
                  type="checkbox"
                  id="Payment Method 2"
                  name="Payment-Method-2"
                  data-name="Payment Method 2"
                  defaultChecked
                  style={{
                    opacity: 0,
                    position: "absolute",
                    zIndex: -1,
                  }}
                />
                <span
                  htmlFor="Payment Method 2"
                  className="checkbox-label w-form-label"
                >
                  Payment Method
                </span>
              </label>
            </div>
            <div className="payment-method-option">
              <img
                src="/images/about-1.jpg"
                loading="lazy"
                width={135}
                height={71}
                alt=""
                className="payment-method-option-img"
              />
              <label className="w-checkbox checkbox-field mb-0">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                <input
                  type="checkbox"
                  id="Payment Method 4"
                  name="Payment-Method-4"
                  data-name="Payment Method 4"
                  style={{
                    opacity: 0,
                    position: "absolute",
                    zIndex: -1,
                  }}
                />
                <span
                  htmlFor="Payment Method 4"
                  className="checkbox-label w-form-label"
                >
                  Payment Method
                </span>
              </label>
            </div>
          </div>
          <a className="button blue mr-10">Save Changes</a>
        </div>
      </div>
      <div className="settings-block">
        <h3 className="headline-5 mb-30">Plan and Billing</h3>
        <div className="business-plan">
          <div>
            <h4 className="subtitle-1 subtitle-1--blue mb-20">Business Plan</h4>
            <div>
              <div className="label">Current Business Plan</div>
              <div>Bonsai</div>
            </div>
          </div>
          <div className="plan-details w-richtext">
            <p>
              <strong>Details</strong>
            </p>
            <ul role="list">
              <li>12% commission fee on all transactions</li>
              <li>€ 0,20 listing fee per item</li>
              <li>max. 15 items</li>
            </ul>
          </div>
          <a
            id="w-node-f58e9903-c090-0e6b-e66d-899582061220-0db831b0"
            className="button blue"
          >
            Change my plan
          </a>
        </div>
        <div className="settings-spacer" />
        <h4 className="subtitle-1 subtitle-1--blue mb-20">Billing Details</h4>
        <div className="billing-details">
          <div>
            <div className="mb-20">
              <div className="label">Last Invoice</div>
              <div>01.01.2021</div>
            </div>
            <div>
              <div className="label">Next Invoice</div>
              <div>01.02.2021</div>
            </div>
          </div>
          <div className="w-form">
            <div className="input-x input-x--flex mb-15">
              <input
                type="text"
                className="input-x__input-field w-input"
                maxLength={256}
                name="Name-or-Company-Name"
                data-name="Name Or Company Name"
                placeholder="Name or Company Name"
                id="Name-or-Company-Name"
              />
              <div className="input-x__change">
                <div>Change</div>
                <img
                  src="/images/edit-black-24-dp.svg"
                  loading="lazy"
                  alt="Edit"
                  className="change__img"
                />
              </div>
            </div>
            <div className="account-form-1">
              <div className="input-x input-x--flex">
                <input
                  type="tel"
                  className="input-x__input-field w-input"
                  maxLength={256}
                  name="Street-adress-2"
                  data-name="Street Adress 2"
                  placeholder="Street adress"
                  id="Street-adress-2"
                />
                <div className="input-x__change">
                  <div>Change</div>
                  <img
                    src="/images/edit-black-24-dp.svg"
                    loading="lazy"
                    alt="Edit"
                    className="change__img"
                  />
                </div>
              </div>
              <div className="input-x input-x--flex">
                <input
                  type="email"
                  className="input-x__input-field w-input"
                  maxLength={256}
                  name="Postal-Code-3"
                  data-name="Postal Code 3"
                  placeholder="Postal Code"
                  id="Postal-Code-3"
                />
                <div className="input-x__change">
                  <div>Change</div>
                  <img
                    src="/images/edit-black-24-dp.svg"
                    loading="lazy"
                    alt="Edit"
                    className="change__img"
                  />
                </div>
              </div>
              <div className="input-x input-x--flex">
                <input
                  type="email"
                  className="input-x__input-field w-input"
                  maxLength={256}
                  name="City-3"
                  data-name="City 3"
                  placeholder="City"
                  id="City-3"
                />
                <div className="input-x__change">
                  <div>Change</div>
                  <img
                    src="/images/edit-black-24-dp.svg"
                    loading="lazy"
                    alt="Edit"
                    className="change__img"
                  />
                </div>
              </div>
              <div className="input-x input-x--flex">
                <input
                  type="email"
                  className="input-x__input-field w-input"
                  maxLength={256}
                  name="VAT-2"
                  data-name="VAT 2"
                  placeholder="VAT"
                  id="VAT-2"
                />
                <div className="input-x__change">
                  <div>Change</div>
                  <img
                    src="/images/edit-black-24-dp.svg"
                    loading="lazy"
                    alt="Edit"
                    className="change__img"
                  />
                </div>
              </div>
            </div>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div className="settings-spacer" />
        <h4 className="subtitle-1 subtitle-1--blue mb-20">Invoices</h4>
        <div className="invoice-headline">
          <div className="label">Date</div>
          <div className="label">Plan</div>
          <div className="label">Comission Fee</div>
          <div className="label">Subscription</div>
          <div
            id="w-node-f58e9903-c090-0e6b-e66d-899582061264-0db831b0"
            className="label"
          >
            Download
          </div>
        </div>
        <div className="invoice-spacer" />
        <div>
          <div className="invoice">
            <div>01.01.2021</div>
            <div>Bonsai</div>
            <div>70 EUR</div>
            <div>70 EUR</div>
            <a
              id="w-node-f58e9903-c090-0e6b-e66d-899582061271-0db831b0"
              className="invoice-download w-inline-block"
            >
              <div className="icon-24 w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                  <g transform="rotate(-90,12,12)" fill="currentcolor">
                    <path d="M 0,0 H 24 V 24 H 0 Z" fill="none" />
                    <path d="M 13,8 14.41,9.41 12.83,11 H 21 v 2 H 12.83 L 14.41,14.58 13,16 9,12 Z" />
                    <path d="m 5,5 h 7 V 3 H 5 C 3.9,3 3,3.9 3,5 v 14 c 0,1.1 0.9,2 2,2 h 7 V 19 H 5 Z" />
                  </g>
                </svg>
              </div>
            </a>
          </div>
          <div className="invoice">
            <div>01.02.2021</div>
            <div>Bonsai</div>
            <div>70 EUR</div>
            <div>70 EUR</div>
            <a
              id="w-node-f58e9903-c090-0e6b-e66d-89958206127c-0db831b0"
              className="invoice-download w-inline-block"
            >
              <div className="icon-24 w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                  <g transform="rotate(-90,12,12)" fill="currentcolor">
                    <path d="M 0,0 H 24 V 24 H 0 Z" fill="none" />
                    <path d="M 13,8 14.41,9.41 12.83,11 H 21 v 2 H 12.83 L 14.41,14.58 13,16 9,12 Z" />
                    <path d="m 5,5 h 7 V 3 H 5 C 3.9,3 3,3.9 3,5 v 14 c 0,1.1 0.9,2 2,2 h 7 V 19 H 5 Z" />
                  </g>
                </svg>
              </div>
            </a>
          </div>
          <div className="invoice">
            <div>01.03.2021</div>
            <div>Bonsai</div>
            <div>70 EUR</div>
            <div>70 EUR</div>
            <a
              id="w-node-f58e9903-c090-0e6b-e66d-899582061287-0db831b0"
              className="invoice-download w-inline-block"
            >
              <div className="icon-24 w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                  <g transform="rotate(-90,12,12)" fill="currentcolor">
                    <path d="M 0,0 H 24 V 24 H 0 Z" fill="none" />
                    <path d="M 13,8 14.41,9.41 12.83,11 H 21 v 2 H 12.83 L 14.41,14.58 13,16 9,12 Z" />
                    <path d="m 5,5 h 7 V 3 H 5 C 3.9,3 3,3.9 3,5 v 14 c 0,1.1 0.9,2 2,2 h 7 V 19 H 5 Z" />
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="invoice-button-wrapper">
          <a className="button blue">See more</a>
        </div>
        <div className="settings-spacer" />
        <h4 className="subtitle-1 subtitle-1--blue mb-20">Payment Method</h4>
        <div className="mb-0 w-form">
          <div className="payment-form-1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div>
              <div className="input-x input-x--flex mb-15">
                <input
                  type="number"
                  className="input-x__input-field w-input"
                  maxLength={256}
                  name="Card-Number-2"
                  data-name="Card Number 2"
                  placeholder="Card Number"
                  id="Card-Number-2"
                  required
                />
                <div className="input-x__change">
                  <div>Change</div>
                  <img
                    src="/images/edit-black-24-dp.svg"
                    loading="lazy"
                    alt="Edit"
                    className="change__img"
                  />
                </div>
              </div>
              <div className="input-x input-x--flex mb-15">
                <input
                  type="text"
                  className="input-x__input-field w-input"
                  maxLength={256}
                  name="Name-on-Card-2"
                  data-name="Name On Card 2"
                  placeholder="Name on Card"
                  id="Name-on-Card-2"
                  required
                />
                <div className="input-x__change">
                  <div>Change</div>
                  <img
                    src="/images/edit-black-24-dp.svg"
                    loading="lazy"
                    alt="Edit"
                    className="change__img"
                  />
                </div>
              </div>
              <div className="payment-expiration">
                <div className="subtitle-2">Expiration date</div>
                <select
                  name="Expiration-Month-2"
                  data-name="Expiration Month 2"
                  id="Expiration-Month-2"
                  required
                  className="input-x input-x--select w-select"
                >
                  <option value={1}>01</option>
                  <option value={2}>02</option>
                  <option value={3}>03</option>
                  <option value={4}>04</option>
                  <option value={5}>05</option>
                  <option value={6}>06</option>
                  <option value={7}>07</option>
                  <option value={8}>08</option>
                  <option value={9}>09</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                </select>
                <select
                  name="Expiration-Year-2"
                  data-name="Expiration Year 2"
                  id="Expiration-Year-2"
                  required
                  className="input-x input-x--select w-select"
                >
                  <option value={2021}>2021</option>
                  <option value={2022}>2022</option>
                  <option value={2023}>2023</option>
                  <option value={2024}>2024</option>
                  <option value={2025}>2025</option>
                  <option value={2026}>2026</option>
                  <option value={2027}>2027</option>
                </select>
              </div>
            </div>
          </div>
          <div className="payment-button-wrapper">
            <a className="button blue mr-10">Save Changes</a>
            <a className="button blue secondary">Delete Adress</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
