const PS4 = ({ next }) => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>Contact Information</h1>
        </div>
        <div className="w-form">
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
            <div className="flex mb-40">
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="First name*"
                id="node-3"
                required
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Last name*"
                id="node"
                required
              />
              <input
                type="tel"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Phone number*"
                id="node"
                required
              />
              <input
                type="email"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Email contact person*"
                id="node"
                required
              />
              <input
                type="email"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Email order management*"
                id="node"
                required
              />
              <input
                type="email"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Email customer service*"
                id="node"
                required
              />
              <input
                type="email"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Email returns*"
                id="node"
                required
              />
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

export default PS4;
