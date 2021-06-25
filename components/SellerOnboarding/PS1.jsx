const PS1 = ({ nextPage }) => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>Hello Thomas, let's get started!</h1>
          <div className="overline-text mb-40">Seller Questionaire</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="w-form">
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
            <div className="mb-60">
              <label htmlFor="name" className="field-label">
                Why do you think your company is sustainable?
              </label>
              <textarea
                placeholder="Answer"
                maxLength={5000}
                id="field"
                name="field"
                className="text-field area w-input"
                defaultValue={""}
              />
            </div>
            <div className="mb-60">
              <label htmlFor="name" className="field-label">
                Why do you think your company is sustainable?
              </label>
              <textarea
                placeholder="Answer"
                maxLength={5000}
                id="field-3"
                name="field-3"
                data-name="Field 3"
                className="text-field area w-input"
                defaultValue={""}
              />
            </div>
            <div className="mb-60">
              <label htmlFor="name" className="field-label">
                Please select your certificates
              </label>
              <div className="select-wrapper">
                <select
                  name="Select-5"
                  data-name="Select 5"
                  id="Select-5"
                  required
                  className="text-field pills w-select"
                >
                  <option value>Select one...</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                  <option value="Another Choice">Another Choice</option>
                  <option value="Another Choice 2">Another Choice 2</option>
                </select>
              </div>
            </div>
            <div className="mb-60">
              <label htmlFor="name" className="field-label mb-20">
                Why do you think your company is sustainable?
              </label>
              <label className="w-checkbox checkbox-field">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  data-name="Checkbox"
                  style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                />
                <span className="checkbox-label w-form-label">
                  Sample Answer
                </span>
              </label>
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
                  Sample Answer
                </span>
              </label>
              <label className="w-checkbox checkbox-field">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                <input
                  type="checkbox"
                  id="checkbox-2"
                  name="checkbox-2"
                  data-name="Checkbox 2"
                  style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                />
                <span className="checkbox-label w-form-label">
                  Sample Answer
                </span>
              </label>
            </div>
            <input
              type="submit"
              defaultValue="Continue"
              data-wait="Please wait..."
              className="button blue w-button"
              onClick={(e) => {
                e.preventDefault();
                nextPage();
              }}
              onSubmit={(e) => {
                e.preventDefault();
                nextPage();
              }}
            />
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

export default PS1;
