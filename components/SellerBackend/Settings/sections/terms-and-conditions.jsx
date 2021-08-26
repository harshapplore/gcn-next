const TermsAndConditions = () => {
  return (
    <div className="settings-block">
      <h3 className="headline-5 mb-30">Terms &amp; Conditions</h3>
      <div className="w-form">
        <form id="email-form-4" name="email-form-4" data-name="Email Form 4">
          <div className="terms-headline mb-20">
            <h4 className="subtitle-1 subtitle-1--blue">
              Returns and Refungs (Wiederrufungsrecht)
            </h4>
            <div>
              <a className="terms-language current">English</a>
              <a className="terms-language">Deutsch</a>
            </div>
          </div>
          <textarea
            placeholder="Type in here…"
            maxLength={5000}
            id="Returns-and-Refunds"
            name="Returns-and-Refunds"
            data-name="Returns and Refunds"
            className="input-x input-x--text-area w-input"
            defaultValue={""}
          />
          <div className="settings-spacer" />
          <div className="terms-headline mb-20">
            <h4 className="subtitle-1 subtitle-1--blue">
              General Conditions (AGB)
            </h4>
            <div>
              <a className="terms-language current">English</a>
              <a className="terms-language">Deutsch</a>
            </div>
          </div>
          <textarea
            placeholder="Type in here…"
            maxLength={5000}
            id="General-Conditions"
            name="General-Conditions"
            data-name="General Conditions"
            className="input-x input-x--text-area w-input"
            defaultValue={""}
          />
          <div className="settings-spacer" />
          <h4 className="subtitle-1 subtitle-1--blue mb-20">
            Privacy Policy (Datenschutz)
          </h4>
          <textarea
            placeholder="Type in here…"
            maxLength={5000}
            id="Privacy-Policy"
            name="Privacy-Policy"
            data-name="Privacy Policy"
            className="input-x input-x--text-area mb-30 w-input"
            defaultValue={""}
          />
          <a className="button blue mr-10">Save and Continue</a>
        </form>
        <div className="w-form-done" />
        <div className="w-form-fail" />
      </div>
    </div>
  );
};

export default TermsAndConditions;
