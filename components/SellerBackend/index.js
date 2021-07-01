import Nav from "shared/Nav";
import { useRouter } from "next/router";

const SellerBackend = () => {
  const router = useRouter();

  console.log(router);

  return (
    <>
      <Nav />
      <div className="page-section pt-0">
        <div className="relative hide-mobile">
          <img
            src="images/bild-header2x.jpg"
            loading="lazy"
            sizes="100vw"
            srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
            className="shop-banner-img"
            alt=""
          />
          <div className="shop-img-link floating w-inline-block">
            <div className="new-img-wrapper">
              <img
                src="images/expand-more-black-24-dp.svg"
                loading="lazy"
                alt="x-10"
                className="mb-10"
                alt=""
              />
              <div>Add image</div>
            </div>
          </div>
        </div>
        <div className="nav-area">
          <div className="container">
            <div className="flex no-wrap">
              <div className="shop-filter">
                <div className="logo-floater">
                  <img
                    src="images/bild-header2x.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 46vw, (max-width: 767px) 29vw, 200px"
                    srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                    alt="Handcrafted stuff"
                    className="logo-img"
                  />
                  <div className="mobile-title">
                    <h1>Green Fashion Shop</h1>
                    <div className="overline-text mb-40">30 Products</div>
                  </div>
                </div>
              </div>
              <div className="shop-content pt-0">
                <div className="scroll-x">
                  <a href="#" className="nav-link-shop current w-inline-block">
                    <div>Edit Profile</div>
                  </a>
                  <a href="#" className="nav-link-shop w-inline-block">
                    <div>Sign out</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex top">
            <div className="shop-filter popup-mobile">
              <div className="scroll-y">
                <div>
                  <a href="#" className="tab-link-shop current w-inline-block">
                    <div>Basic Information</div>
                  </a>
                  <a href="#" className="tab-link-shop w-inline-block">
                    <div>Billing</div>
                  </a>
                  <a href="#" className="tab-link-shop w-inline-block">
                    <div>Terms &amp; Conditions</div>
                  </a>
                  <a href="#" className="tab-link-shop w-inline-block">
                    <div>Products</div>
                  </a>
                  <a href="#" className="tab-link-shop w-inline-block">
                    <div>Shipping</div>
                  </a>
                  <a href="#" className="tab-link-shop w-inline-block">
                    <div>Order History</div>
                  </a>
                </div>
              </div>
              <div className="mobile-only">
                <div className="center">
                  <a href="#" className="button gray w-inline-block">
                    <div className="text-block">Clear</div>
                  </a>
                  <a href="#" className="button orange mx-10 w-inline-block">
                    <div className="text-block">Apply</div>
                  </a>
                </div>
              </div>
              <a href="#" className="shop-delete mobile-only w-inline-block">
                <img
                  src="images/clear-black-24-dp.svg"
                  loading="lazy"
                  width={24}
                  alt="Close"
                />
              </a>
            </div>
            <div className="shop-content">
              <div className="hide-mobile">
                <div className="heading-wrapper mb-40">
                  <h1>Thomas' Soap Shop</h1>
                  <div className="overline-text">30 Products</div>
                </div>
              </div>
              <div className="dynamic-content">
                <div>
                  <div className="mb-20 w-form">
                    <form
                      id="email-form-3"
                      name="email-form-3"
                      data-name="Email Form 3"
                      className="flex"
                    >
                      <div className="searchbar-wrapper">
                        <input
                          type="text"
                          className="text-field mb-0 w-input"
                          maxLength={256}
                          name="Search"
                          data-name="Search"
                          placeholder="Search Products"
                          id="Search"
                          required
                        />
                        <img
                          src="images/search-black-24-dp.svg"
                          loading="lazy"
                          alt=""
                          className="search-icon"
                        />
                      </div>
                      <select
                        id="field-2"
                        name="field-2"
                        data-name="Field 2"
                        className="text-field select width-24 mb-0 w-select"
                      >
                        <option value>Sort by</option>
                        <option value="First">First Choice</option>
                        <option value="Second">Second Choice</option>
                        <option value="Third">Third Choice</option>
                      </select>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex top mb-40">
                  <div className="shop-product-item">
                    <a
                      href="item-detail.html"
                      className="shop-product-img w-inline-block"
                    >
                      <div className="new-img-wrapper">
                        <div className="cross-wrapper">
                          <div className="cross-line" />
                          <div className="cross-line rot" />
                        </div>
                        <div>Add Product</div>
                      </div>
                    </a>
                  </div>
                  <div className="shop-product-item">
                    <a
                      href="item-detail.html"
                      className="shop-product-img w-inline-block"
                    >
                      <img
                        src="images/bild-header2x.jpg"
                        loading="lazy"
                        sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 17vw, 218.40000915527344px"
                        srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                        alt="Handcrafted stuff"
                        className="back-img"
                      />
                    </a>
                    <div className="check-floater">
                      <img
                        src="images/check-circle-black-24-dp.svg"
                        loading="lazy"
                        width={24}
                        alt=""
                      />
                    </div>
                    <div className="potw-like">
                      <div className="product-context-menu active">
                        <a href="#" className="context-link">
                          View
                        </a>
                        <a href="#" className="context-link">
                          Edit
                        </a>
                        <a href="#" className="context-link">
                          Duplicate
                        </a>
                        <a href="#" className="context-link">
                          Delete
                        </a>
                      </div>
                      <img
                        src="images/expand-more-black-24-dp-copy-6.svg"
                        loading="lazy"
                        alt=""
                        className="heart"
                      />
                    </div>
                    <div className="shop-product-info">
                      <a href="#" className="link">
                        Skyboats: Hängende Laterne String Lights
                      </a>
                      <div>Add image</div>
                    </div>
                  </div>
                  <div className="shop-product-item">
                    <a
                      href="item-detail.html"
                      className="shop-product-img w-inline-block"
                    >
                      <img
                        src="images/bild-header2x.jpg"
                        loading="lazy"
                        sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 17vw, 218.40000915527344px"
                        srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                        alt="Handcrafted stuff"
                        className="back-img"
                      />
                    </a>
                    <div className="check-floater">
                      <img
                        src="images/cancel-black-24-dp-2.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="potw-like">
                      <img
                        src="images/expand-more-black-24-dp-copy-6.svg"
                        loading="lazy"
                        alt=""
                        className="heart"
                      />
                      <div className="product-context-menu">
                        <a href="#" className="context-link">
                          View
                        </a>
                        <a href="#" className="context-link">
                          Edit
                        </a>
                        <a href="#" className="context-link">
                          Duplicate
                        </a>
                        <a href="#" className="context-link">
                          Delete
                        </a>
                      </div>
                    </div>
                    <div className="shop-product-info">
                      <a href="#" className="link">
                        Skyboats: Hängende Laterne String Lights
                      </a>
                      <div>Add image</div>
                    </div>
                  </div>
                  <div className="shop-product-item">
                    <a
                      href="item-detail.html"
                      className="shop-product-img w-inline-block"
                    >
                      <img
                        src="images/bild-header2x.jpg"
                        loading="lazy"
                        sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 17vw, 218.40000915527344px"
                        srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                        alt="Handcrafted stuff"
                        className="back-img"
                      />
                    </a>
                    <div className="check-floater">
                      <img
                        src="images/cancel-black-24-dp-2.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="potw-like">
                      <img
                        src="images/expand-more-black-24-dp-copy-6.svg"
                        loading="lazy"
                        alt=""
                        className="heart"
                      />
                      <div className="product-context-menu">
                        <a href="#" className="context-link">
                          View
                        </a>
                        <a href="#" className="context-link">
                          Edit
                        </a>
                        <a href="#" className="context-link">
                          Duplicate
                        </a>
                        <a href="#" className="context-link">
                          Delete
                        </a>
                      </div>
                    </div>
                    <div className="shop-product-info">
                      <a href="#" className="link">
                        Skyboats: Hängende Laterne String Lights
                      </a>
                      <div>Add image</div>
                    </div>
                  </div>
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
                  <div className="text-block">Upload CSV</div>
                </a>
              </div>
              <div className="dynamic-content">
                <div className="heading-wrapper mb-40">
                  <h2>Add product</h2>
                  <div className="overline-text">30 Products</div>
                </div>
                <div className="product-add-block">
                  <div className="heading-wrapper mb-40">
                    <h3>Add Photos &amp; Videos</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
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
                  <form
                    id="email-form-3"
                    name="email-form-3"
                    data-name="Email Form 3"
                  >
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
                        <span className="checkbox-label w-form-label">
                          Sample Answer
                        </span>
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
                        <span className="checkbox-label w-form-label">
                          Sample Answer
                        </span>
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
                        <span className="checkbox-label w-form-label">
                          Sample Answer
                        </span>
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
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
              <div className="dynamic-content">
                <div className="heading-wrapper mb-40">
                  <h2>Shipping</h2>
                  <div className="overline-text">30 Products</div>
                </div>
                <div className="w-form">
                  <form
                    id="email-form-3"
                    name="email-form-3"
                    data-name="Email Form 3"
                  >
                    <div className="product-add-block">
                      <label className="checkbox-field w-clearfix w-radio">
                        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input" />
                        <input
                          type="radio"
                          data-name="Radio 2"
                          id="radio-2"
                          name="radio"
                          defaultValue="Radio"
                          required
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span className="checkbox-label w-form-label">
                          Delivery cost by country
                        </span>
                      </label>
                      <div>
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
                              name="Select-6"
                              data-name="Select 6"
                              id="Select-6"
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
                      </div>
                      <label className="checkbox-field w-clearfix w-radio">
                        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input" />
                        <input
                          type="radio"
                          data-name="Radio 3"
                          id="radio-3"
                          name="radio"
                          defaultValue="Radio"
                          required
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span className="checkbox-label w-form-label">
                          Delivery cost by weight
                        </span>
                      </label>
                      <div>
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
                              name="Select-6"
                              data-name="Select 6"
                              id="Select-6"
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
                      </div>
                      <div>
                        <label className="w-checkbox checkbox-field">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                          <input
                            type="checkbox"
                            id="checkbox-6"
                            name="checkbox-6"
                            data-name="Checkbox 6"
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
                      <div>
                        <label className="w-checkbox checkbox-field">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                          <input
                            type="checkbox"
                            id="checkbox-6"
                            name="checkbox-6"
                            data-name="Checkbox 6"
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
                      <div>
                        <label className="w-checkbox checkbox-field">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                          <input
                            type="checkbox"
                            id="checkbox-6"
                            name="checkbox-6"
                            data-name="Checkbox 6"
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
                    </div>
                    <input
                      type="submit"
                      defaultValue="Save"
                      data-wait="Please wait..."
                      className="button blue mr-10 w-button"
                    />
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
              <div className="dynamic-content">
                <div className="heading-wrapper mb-40">
                  <h2>Order History</h2>
                  <div className="overline-text">30 Products</div>
                </div>
                <div className="w-form">
                  <form
                    id="email-form-4"
                    name="email-form-4"
                    data-name="Email Form 4"
                  >
                    <div className="order-wrapper">
                      <div className="order-item">
                        <div className="date-row">
                          <div>12.12.2012</div>
                        </div>
                        <div className="id-row">
                          <div>#231245213</div>
                        </div>
                        <div className="state-row big">
                          <select
                            id="field-6"
                            name="field-6"
                            className="text-field select state w-select"
                          >
                            <option value>Select one...</option>
                            <option value="First">First Choice</option>
                            <option value="Second">Second Choice</option>
                            <option value="Third">Third Choice</option>
                          </select>
                        </div>
                        <div className="price-row">
                          <div>€259,99</div>
                        </div>
                        <div className="button-row">
                          <a href="#" className="button w-button">
                            Details
                          </a>
                        </div>
                      </div>
                      <div className="order-item">
                        <div className="date-row">
                          <div>12.03.2021</div>
                        </div>
                        <div className="id-row">
                          <div>#4325141324</div>
                        </div>
                        <div className="state-row big">
                          <select
                            id="field-6"
                            name="field-6"
                            className="text-field select state w-select"
                          >
                            <option value>Select one...</option>
                            <option value="First">First Choice</option>
                            <option value="Second">Second Choice</option>
                            <option value="Third">Third Choice</option>
                          </select>
                        </div>
                        <div className="price-row">
                          <div>€419,99</div>
                        </div>
                        <div className="button-row">
                          <a href="#" className="button w-button">
                            Details
                          </a>
                        </div>
                      </div>
                      <div className="order-item">
                        <div className="date-row">
                          <div>12.08.2012</div>
                        </div>
                        <div className="id-row">
                          <div>#23415234</div>
                        </div>
                        <div className="state-row big">
                          <select
                            id="field-6"
                            name="field-6"
                            className="text-field select state w-select"
                          >
                            <option value>Select one...</option>
                            <option value="First">First Choice</option>
                            <option value="Second">Second Choice</option>
                            <option value="Third">Third Choice</option>
                          </select>
                        </div>
                        <div className="price-row">
                          <div>€1.259,99</div>
                        </div>
                        <div className="button-row">
                          <a href="#" className="button w-button">
                            Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerBackend;
