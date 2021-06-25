const PS8 = ({ next }) => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>Name your shop</h1>
        </div>
        <div className="w-form">
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
            <input
              type="text"
              className="text-field mb-20 w-input"
              maxLength={256}
              data-name
              placeholder="Thomas' Soap Shop"
              id="node"
              required
            />
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

export default PS8;
