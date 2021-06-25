const PS3 = ({next}) => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>Shop Information</h1>
        </div>
        <div className="w-form">
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
            <div className="flex mb-40">
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                name="field-5"
                data-name="Field 5"
                placeholder="Full Company name*"
                id="field-5"
                required
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Street address*"
                id="node"
                required
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Postal code*"
                id="node"
                required
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="City*"
                id="node"
                required
              />
              <div className="select-wrapper">
                <select
                  name="Select"
                  data-name="Select"
                  id="Select"
                  required
                  className="text-field select w-select"
                >
                  <option value>Select one...</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                </select>
              </div>
              <input
                type="text"
                maxLength={256}
                data-name
                placeholder="VAT"
                id="node"
                className="text-field w-input"
              />
              <div className="select-wrapper">
                <select
                  name="Select-3"
                  data-name="Select 3"
                  id="Select-3"
                  required
                  className="text-field select w-select"
                >
                  <option value>Select one...</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                </select>
              </div>
              <div className="select-wrapper">
                <select
                  name="Select-4"
                  data-name="Select 4"
                  id="Select-4"
                  required
                  className="text-field select w-select"
                >
                  <option value>Select one...</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                </select>
              </div>
              <div className="select-wrapper">
                <select
                  name="Select-5"
                  data-name="Select 5"
                  id="Select-5"
                  required
                  className="text-field select w-select"
                >
                  <option value>Select one...</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                </select>
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

export default PS3;
