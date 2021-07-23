const SND = () => {
  return (
    <div className="container">
      <div className="heading-wrapper mb-40">
        <h2>Shipping</h2>
      </div>
      <div className="flex mb-40">
        <div className="flex-child-45">
          <h3>Billing address</h3>
          <div className="w-form">
            <form
              id="email-form-6"
              name="email-form-6"
              data-name="Email Form 6"
            >
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Full name*"
                id="node-3"
                required
              />
              <input
                type="text"
                maxLength={256}
                data-name
                placeholder="Company"
                id="node-3"
                className="text-field w-input"
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Street address*"
                id="node-3"
                required
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Postal code*"
                id="node-3"
                required
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="City*"
                id="node-3"
                required
              />
              <select
                id="field-4"
                name="field-4"
                className="text-field select mb-10 w-select"
              >
                <option value>Country</option>
                <option value="First">First Choice</option>
                <option value="Second">Second Choice</option>
                <option value="Third">Third Choice</option>
              </select>
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Email*"
                id="node-3"
                required
              />
              <input
                type="text"
                maxLength={256}
                data-name
                placeholder="Phone"
                id="node-3"
                className="text-field w-input"
              />
            </form>
          </div>
        </div>
        <div className="flex-child-45">
          <h3>Delivery address</h3>
          <div className="w-form">
            <form
              id="email-form-5"
              name="email-form-5"
              data-name="Email Form 5"
            >
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
                  Same as Billing address
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="inline w-form">
          <form>
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
                Save for next order
              </span>
            </label>
          </form>
        </div>
        <div className="button">
          <div>Continue as guest</div>
        </div>
      </div>
    </div>
  );
};

export default SND;
