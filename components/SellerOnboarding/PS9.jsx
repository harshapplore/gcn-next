const PS9 = () => {
  return (
    <div className="page-section">
      <div>
        <img
          src="images/bild-header2x.jpg"
          loading="lazy"
          sizes="100vw"
          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
          alt="Handcrafted stuff"
          className="shop-banner-img"
        />
      </div>
      <div className="container">
        <div className="flex">
          <div className="shop-filter">
            <img
              src="images/bild-header2x.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 77vw, 200px"
              srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
              alt="Handcrafted stuff"
              className="logo-img"
            />
          </div>
          <div className="shop-content">
            <h1 className="mb-40">Thomas' Soap Shop</h1>
            <div className="flex left mb-40">
              <div className="shop-img-link">
                <a href="#" className="shop-delete w-inline-block">
                  <img
                    src="images/favorite-border-black-24-dp-2.svg"
                    loading="lazy"
                    alt="Like"
                  />
                </a>
                <img
                  src="images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="150px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
              </div>
              <div className="shop-img-link">
                <a href="#" className="shop-delete w-inline-block">
                  <img
                    src="images/favorite-border-black-24-dp-2.svg"
                    loading="lazy"
                    alt="Like"
                  />
                </a>
                <img
                  src="images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="150px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
              </div>
              <a href="#" className="shop-img-link w-inline-block">
                <div className="new-img-wrapper">
                  <img
                    src="images/favorite-border-black-24-dp-2.svg"
                    loading="lazy"
                    alt="Like"
                    className="mb-10"
                  />
                  <div>Add image</div>
                </div>
              </a>
            </div>
            <div className="w-form">
              <form
                id="email-form-5"
                name="email-form-5"
                data-name="Email Form 5"
              >
                <div
                  data-duration-in={300}
                  data-duration-out={100}
                  className="mb-20 w-tabs"
                >
                  <div className="tabs-menu w-tab-menu">
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
                    <div
                      data-w-tab="Tab 1"
                      className="w-tab-pane w--tab-active"
                    >
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
                <input
                  type="submit"
                  defaultValue="Save & Continue"
                  data-wait="Please wait..."
                  className="button blue w-button"
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
      </div>
    </div>
  );s
};

export default PS9;
