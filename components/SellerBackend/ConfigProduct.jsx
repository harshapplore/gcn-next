const ConfigProduct = () => {
  return (
    <div className="dynamic-content">
      <div className="heading-wrapper mb-40">
        <h2>Add product</h2>
        <div className="overline-text">30 Products</div>
      </div>
      <div className="product-add-block">
        <div className="heading-wrapper mb-40">
          <h3>Add Photos &amp; Videos</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="flex left mb-40">
          <div className="shop-img-link grab">
            <img
              src="images/bild-header2x.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 42vw, 150px"
              srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
              alt="Handcrafted stuff"
              className="back-img"
            />
            <div className="check-floater">
              <img
                src="images/check-circle-black-24-dp.svg"
                loading="lazy"
                width={24}
                alt=""
              />
              <div className="inline-text">Main</div>
            </div>
          </div>
          <div className="shop-img-link grab">
            <img
              src="images/bild-header2x.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 42vw, 150px"
              srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
              alt="Handcrafted stuff"
              className="back-img"
            />
          </div>
          <a href="#" className="shop-img-link w-inline-block">
            <div className="new-img-wrapper">
              <img
                src="images/expand-more-black-24-dp.svg"
                loading="lazy"
                alt="Next"
                className="mb-10"
              />
              <div>Add image</div>
            </div>
          </a>
        </div>
        <a href="#" className="button icon blue w-inline-block">
          <div className="button-icon w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <g>
                <rect fill="none" height={24} width={24} />
              </g>
              <g>
                <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" />
              </g>
            </svg>
          </div>
          <div className="text-block">Bulk Upload</div>
        </a>
      </div>
      <div className="w-form">
        <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
          <div className="product-add-block">
            <div className="heading-wrapper mb-20">
              <h3>Description</h3>
            </div>
            <div className="flex mb-40">
              <input
                type="text"
                className="text-field grow w-input"
                maxLength={256}
                name="field-5"
                data-name="Field 5"
                placeholder="Product name*"
                id="field-5"
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
              <div className="select-wrapper">
                <select
                  name="Select-3"
                  data-name="Select 3"
                  id="Select-3"
                  required
                  className="text-field pills w-select"
                >
                  <option value>Select one...</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                </select>
              </div>
            </div>
            <div className="mb-40">
              <label htmlFor="name" className="mb-20">
                Filters
              </label>
              <label className="w-checkbox checkbox-field">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  data-name="Checkbox"
                  style={{
                    opacity: 0,
                    position: "absolute",
                    zIndex: -1,
                  }}
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
                  style={{
                    opacity: 0,
                    position: "absolute",
                    zIndex: -1,
                  }}
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
                  style={{
                    opacity: 0,
                    position: "absolute",
                    zIndex: -1,
                  }}
                />
                <span className="checkbox-label w-form-label">
                  Sample Answer
                </span>
              </label>
            </div>
            <div className="tabs-menu">
              <div className="terms-lang active">
                <div>Deutsch</div>
              </div>
              <div className="terms-lang">
                <div>English</div>
              </div>
            </div>
            <div className="mb-20">
              <textarea
                placeholder="Description"
                maxLength={5000}
                id="Description"
                name="Description"
                data-name="Description"
                className="text-field area w-input"
                defaultValue={""}
              />
              <div className="flex">
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
                <input
                  type="text"
                  className="text-field w-input"
                  maxLength={256}
                  name="field-5"
                  data-name="Field 5"
                  placeholder="Product name*"
                  id="field-5"
                  required
                />
                <div className="select-wrapper">
                  <select
                    name="Select-3"
                    data-name="Select 3"
                    id="Select-3"
                    required
                    className="text-field pills w-select"
                  >
                    <option value>Select one...</option>
                    <option value="First">First Choice</option>
                    <option value="Second">Second Choice</option>
                    <option value="Third">Third Choice</option>
                  </select>
                </div>
                <div className="select-wrapper">
                  <select
                    name="Select-3"
                    data-name="Select 3"
                    id="Select-3"
                    required
                    className="text-field pills w-select"
                  >
                    <option value>Select one...</option>
                    <option value="First">First Choice</option>
                    <option value="Second">Second Choice</option>
                    <option value="Third">Third Choice</option>
                  </select>
                </div>
              </div>
            </div>
            <label className="w-checkbox checkbox-field">
              <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
              <input
                type="checkbox"
                id="checkbox-5"
                name="checkbox-5"
                data-name="Checkbox 5"
                style={{
                  opacity: 0,
                  position: "absolute",
                  zIndex: -1,
                }}
              />
              <span className="checkbox-label w-form-label">Sample Answer</span>
            </label>
          </div>
          <div className="product-add-block">
            <div className="heading-wrapper mb-20">
              <h3>Price</h3>
            </div>
            <div className="flex mb-40">
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                name="field-5"
                data-name="Field 5"
                placeholder="Product name*"
                id="field-5"
                required
              />
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
            <label className="w-checkbox checkbox-field">
              <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
              <input
                type="checkbox"
                id="checkbox-5"
                name="checkbox-5"
                data-name="Checkbox 5"
                style={{
                  opacity: 0,
                  position: "absolute",
                  zIndex: -1,
                }}
              />
              <span className="checkbox-label w-form-label">Sample Answer</span>
            </label>
            <label className="w-checkbox checkbox-field">
              <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
              <input
                type="checkbox"
                id="checkbox-5"
                name="checkbox-5"
                data-name="Checkbox 5"
                style={{
                  opacity: 0,
                  position: "absolute",
                  zIndex: -1,
                }}
              />
              <span className="checkbox-label w-form-label">Sample Answer</span>
            </label>
          </div>
          <input
            type="submit"
            defaultValue="Save"
            data-wait="Please wait..."
            className="button blue mr-10 w-button"
          />
          <input
            type="submit"
            defaultValue="Next Product"
            data-wait="Please wait..."
            className="button blue secondary w-button"
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
  );
};

export default ConfigProduct;
