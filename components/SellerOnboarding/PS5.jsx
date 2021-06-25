const PS5 = ({ next }) => {
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
                maxLength={256}
                data-name
                placeholder="Bank Account Owner"
                id="node-2"
                required
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="IBAN"
                id="node"
                required
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="BIC/SWIFT"
                id="node"
                required
              />
            </div>
            <div className="mb-40">
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
                  Use a different account for the Green Cloud Nine pricing plan
                </span>
              </label>
            </div>
            <div className="center">
              <input
                type="submit"
                defaultValue="Save & Continue"
                data-wait="Please wait..."
                className="button blue w-button"
                onClick={(e) => {
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

export default PS5;
