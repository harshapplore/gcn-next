const CompensationChoices = () => {
  return (
    <div className="page-section wf-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h2>For a greener Environment</h2>
        </div>
        <div className="product-add-block pb-120">
          <p className="lead-text accent mb-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <div className="w-form">
            <form
              id="email-form-3"
              name="email-form-3"
              data-name="Email Form 3"
            >
              <div className="certificate-item">
                <div>
                  <img
                    src="images/fill-2.svg"
                    loading="lazy"
                    alt="Green Cloud Nine Logo"
                    className="cert-img"
                  />
                </div>
                <div className="cert-text">
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </div>
                </div>
                <div className="div-block-2">
                  <label className="checkbox-field w-clearfix w-radio">
                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input" />
                    <input
                      type="radio"
                      data-name="Certificate"
                      id="node-4"
                      name="Certificate"
                      defaultValue={1}
                      required
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    />
                    <span
                      htmlFor="node-4"
                      className="checkbox-label w-form-label"
                    >
                      Choose
                    </span>
                  </label>
                </div>
              </div>
              <div className="certificate-item">
                <div>
                  <img
                    src="images/fill-2.svg"
                    loading="lazy"
                    alt="Green Cloud Nine Logo"
                    className="cert-img"
                  />
                </div>
                <div className="cert-text">
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </div>
                </div>
                <div>
                  <label className="checkbox-field w-clearfix w-radio">
                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input" />
                    <input
                      type="radio"
                      data-name="Certificate"
                      id="node-5"
                      name="Certificate"
                      defaultValue={2}
                      required
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    />
                    <span
                      htmlFor="node-5"
                      className="checkbox-label w-form-label"
                    >
                      Choose
                    </span>
                  </label>
                </div>
              </div>
              <div className="cert-footer">
                <div className="cert-footer-box left">
                  <div>
                    Contribute <strong>1% of your total sum</strong> to your
                    prefered non-profit and help us safe the planet!
                  </div>
                </div>
                <div className="cert-footer-box">
                  <input
                    type="submit"
                    defaultValue="Add"
                    data-wait="Please wait..."
                    className="button mr-20 w-button"
                  />
                  <div className="inline">
                    <div className="cert-price">€ 2,-</div>
                    <div className="small accent">to total sum</div>
                  </div>
                </div>
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
    </div>
  );
};

export default CompensationChoices;