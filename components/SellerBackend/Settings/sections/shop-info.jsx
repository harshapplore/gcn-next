const ShopInfo = () => {
  return (
    <div className="settings-block">
      <h3 className="headline-5 mb-30">Shop Information</h3>
      <div className="account-current-data">
        <div>
          <div className="label">Current Company Name</div>
          <div>Thomas Martin GmbH</div>
        </div>
        <div>
          <div className="label">Current Shop Name</div>
          <div>Thomas Soap Shop</div>
        </div>
      </div>
      <h4 className="subtitle-2 mb-10">Change Shop Information</h4>
      <div className="w-form">
        <form
          id="wf-form-Change-Shop-Information"
          name="wf-form-Change-Shop-Information"
          data-name="Change Shop Information"
        >
          <div className="account-form-1">
            <div className="input-x input-x--flex">
              <input
                type="text"
                className="input-x__input-field w-input"
                maxLength={256}
                name="Company-Name"
                data-name="Company Name"
                placeholder="Company Name"
                id="Company-Name"
              />
              <div className="input-x__change">
                <div>Change</div>
                <img
                  src="../images/edit-black-24-dp.svg"
                  loading="lazy"
                  alt="Edit"
                  className="change__img"
                />
              </div>
            </div>
            <div className="input-x input-x--flex input-x--error">
              <input
                type="text"
                className="input-x__input-field w-input"
                maxLength={256}
                name="Shop-Name"
                data-name="Shop Name"
                placeholder="Shop Name"
                id="Shop-Name"
              />
              <div className="input-x__change">
                <div>Change</div>
                <img
                  src="../images/edit-black-24-dp.svg"
                  loading="lazy"
                  alt="Edit"
                  className="change__img"
                />
              </div>
              <div className="input-x__error">
                Error:{" "}
                <span className="input-error__message">
                  Shop Name is already taken
                </span>
              </div>
            </div>
            <div className="input-x input-x--flex">
              <input
                type="tel"
                className="input-x__input-field w-input"
                maxLength={256}
                name="Street-adress"
                data-name="Street adress"
                placeholder="Street adress"
                id="Street-adress"
              />
              <div className="input-x__change">
                <div>Change</div>
                <img
                  src="../images/edit-black-24-dp.svg"
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
                name="Postal-Code"
                data-name="Postal Code"
                placeholder="Postal Code"
                id="Postal-Code"
              />
              <div className="input-x__change">
                <div>Change</div>
                <img
                  src="../images/edit-black-24-dp.svg"
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
                name="City"
                data-name="City"
                placeholder="City"
                id="City-2"
              />
              <div className="input-x__change">
                <div>Change</div>
                <img
                  src="../images/edit-black-24-dp.svg"
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
                name="VAT"
                data-name="VAT"
                placeholder="VAT"
                id="VAT"
              />
              <div className="input-x__change">
                <div>Change</div>
                <img
                  src="../images/edit-black-24-dp.svg"
                  loading="lazy"
                  alt="Edit"
                  className="change__img"
                />
              </div>
            </div>
          </div>
          <a className="button blue mr-10">Save Changes</a>
        </form>
      </div>
    </div>
  );
};

export default ShopInfo;
