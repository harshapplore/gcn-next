const PS7 = ({next}) => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>Terms &amp;&nbsp;Conditions</h1>
        </div>
        <div className="w-form">
          <form id="email-form-4" name="email-form-4" data-name="Email Form 4">
            <div className="mb-60">
              <h2 className="mb-20">
                Returns &amp;&nbsp;Refunds (Widerrufsbelehrung)
              </h2>
              <div
                data-duration-in={300}
                data-duration-out={100}
                className="w-tabs"
              >
                <div className="tabs-menu inline w-tab-menu">
                  <a
                    data-w-tab="Tab 1"
                    className="terms-lang w-inline-block w-tab-link w--current"
                  >
                    <div>English</div>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className="terms-lang w-inline-block w-tab-link"
                  >
                    <div>German</div>
                  </a>
                </div>
                <div className="w-tab-content">
                  <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                    <textarea
                      placeholder="Short Description (max. XX)"
                      maxLength={5000}
                      id="node-4"
                      data-name
                      required
                      className="text-field area w-input"
                      defaultValue={""}
                    />
                  </div>
                  <div data-w-tab="Tab 2" className="w-tab-pane">
                    <textarea
                      placeholder="Kurze Beschreibung (max. XX)"
                      maxLength={5000}
                      id="node-4"
                      data-name
                      className="text-field area w-input"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-60">
              <h2 className="mb-20">General Conditions (AGB)</h2>
              <div
                data-duration-in={300}
                data-duration-out={100}
                className="w-tabs"
              >
                <div className="tabs-menu inline w-tab-menu">
                  <a
                    data-w-tab="Tab 1"
                    className="terms-lang w-inline-block w-tab-link w--current"
                  >
                    <div>English</div>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className="terms-lang w-inline-block w-tab-link"
                  >
                    <div>German</div>
                  </a>
                </div>
                <div className="w-tab-content">
                  <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                    <textarea
                      placeholder="Short Description (max. XX)"
                      maxLength={5000}
                      id="node-4"
                      data-name
                      required
                      className="text-field area w-input"
                      defaultValue={""}
                    />
                  </div>
                  <div data-w-tab="Tab 2" className="w-tab-pane">
                    <textarea
                      placeholder="Kurze Beschreibung (max. XX)"
                      maxLength={5000}
                      id="node-4"
                      data-name
                      className="text-field area w-input"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-40">
              <h2 className="mb-20">Privacy Policy (Datenschutz)</h2>
              <div
                data-duration-in={300}
                data-duration-out={100}
                className="w-tabs"
              >
                <div className="tabs-menu inline w-tab-menu">
                  <a
                    data-w-tab="Tab 1"
                    className="terms-lang w-inline-block w-tab-link w--current"
                  >
                    <div>English</div>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className="terms-lang w-inline-block w-tab-link"
                  >
                    <div>German</div>
                  </a>
                </div>
                <div className="w-tab-content">
                  <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                    <textarea
                      placeholder="Short Description (max. XX)"
                      maxLength={5000}
                      id="node-4"
                      data-name
                      required
                      className="text-field area w-input"
                      defaultValue={""}
                    />
                  </div>
                  <div data-w-tab="Tab 2" className="w-tab-pane">
                    <textarea
                      placeholder="Kurze Beschreibung (max. XX)"
                      maxLength={5000}
                      id="node-4"
                      data-name
                      className="text-field area w-input"
                      defaultValue={""}
                    />
                  </div>
                </div>
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

export default PS7;