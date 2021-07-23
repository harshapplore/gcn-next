const CustomerBackend = () => {
  return (
    <>
      <div className="page-section-alert">
        <div className="container">
          <div>
            This is some text inside of a 
            <a href="#" className="white-link">
              div
            </a>
            block.
          </div>
        </div>
      </div>
      <div className="page-section">
        <div className="container">
          <div className="flex mb-40">
            <div className="shop-filter">
              <div className="logo-floater lower">
                <img
                  src="images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 46vw, (max-width: 767px) 29vw, 200px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="logo-img"
                />
                <div className="mobile-title">
                  <h1>Hello Maria!</h1>
                  <div className="overline-text mb-40">
                    Nice to see you today
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-content hide-mobile">
              <h1>Hello Maria!</h1>
            </div>
          </div>
          <div className="flex">
            <div className="shop-filter">
              <div className="scroll-x">
                <a href="#" className="tab-link-shop w-inline-block">
                  <div>Favorites</div>
                </a>
                <a href="#" className="tab-link-shop current w-inline-block">
                  <div>Order History</div>
                </a>
                <a href="#" className="tab-link-shop w-inline-block">
                  <div>Account Settings</div>
                </a>
                <a href="#" className="tab-link-shop w-inline-block">
                  <div>Requests</div>
                </a>
              </div>
            </div>
            <div className="customer-backend-tab-content">
              <div>
                <div className="mb-60">
                  <div className="heading-wrapper">
                    <h2>Favorite Items</h2>
                  </div>
                  <div className="flex">
                    <div className="flex-child-32">
                      <div className="potw-item">
                        <img
                          src="images/bild-header2x.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 85vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 23vw, 291.20001220703125px"
                          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                          alt="Handcrafted stuff"
                          className="back-img"
                        />
                        <a href="#" className="potw-name w-inline-block">
                          <div>Musterproduktname</div>
                          <img
                            src="images/expand-more-black-24-dp.svg"
                            loading="lazy"
                            alt="Next"
                          />
                        </a>
                        <a href="#" className="potw-like w-inline-block">
                          <img
                            src="images/favorite-border-black-24-dp-2.svg"
                            loading="lazy"
                            width={25}
                            alt="Like"
                            className="orange-heart"
                          />
                          <img
                            src="images/favorite-border-black-24-dp_1.svg"
                            loading="lazy"
                            alt="Like"
                            className="heart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="flex-child-32">
                      <div className="potw-item">
                        <img
                          src="images/bild-header2x.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 85vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 23vw, 291.20001220703125px"
                          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                          alt="Handcrafted stuff"
                          className="back-img"
                        />
                        <a href="#" className="potw-name w-inline-block">
                          <div>Musterproduktname</div>
                          <img
                            src="images/expand-more-black-24-dp.svg"
                            loading="lazy"
                            alt="Next"
                          />
                        </a>
                        <a href="#" className="potw-like active w-inline-block">
                          <img
                            src="images/favorite-border-black-24-dp-2.svg"
                            loading="lazy"
                            width={25}
                            alt="Like"
                            className="orange-heart"
                          />
                          <img
                            src="images/favorite-border-black-24-dp_1.svg"
                            loading="lazy"
                            alt="Like"
                            className="heart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="flex-child-32">
                      <div className="potw-item">
                        <img
                          src="images/bild-header2x.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 85vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 23vw, 291.20001220703125px"
                          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                          alt="Handcrafted stuff"
                          className="back-img"
                        />
                        <a href="#" className="potw-name w-inline-block">
                          <div>Musterproduktname</div>
                          <img
                            src="images/expand-more-black-24-dp.svg"
                            loading="lazy"
                            alt="Next"
                          />
                        </a>
                        <a href="#" className="potw-like w-inline-block">
                          <img
                            src="images/favorite-border-black-24-dp-2.svg"
                            loading="lazy"
                            alt="Like"
                            className="orange-heart"
                          />
                          <img
                            src="images/favorite-border-black-24-dp_1.svg"
                            loading="lazy"
                            alt="Like"
                            className="heart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="flex-child-32">
                      <div className="potw-item">
                        <img
                          src="images/bild-header2x.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 85vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 23vw, 291.20001220703125px"
                          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                          alt="Handcrafted stuff"
                          className="back-img"
                        />
                        <a href="#" className="potw-name w-inline-block">
                          <div>Musterproduktname</div>
                          <img
                            src="images/expand-more-black-24-dp.svg"
                            loading="lazy"
                            alt="Next"
                          />
                        </a>
                        <a href="#" className="potw-like w-inline-block">
                          <img
                            src="images/favorite-border-black-24-dp-2.svg"
                            loading="lazy"
                            width={25}
                            alt="Like"
                            className="orange-heart"
                          />
                          <img
                            src="images/favorite-border-black-24-dp_1.svg"
                            loading="lazy"
                            alt="Like"
                            className="heart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="flex-child-32">
                      <div className="potw-item">
                        <img
                          src="images/bild-header2x.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 85vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 23vw, 291.20001220703125px"
                          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                          alt="Handcrafted stuff"
                          className="back-img"
                        />
                        <a href="#" className="potw-name w-inline-block">
                          <div>Musterproduktname</div>
                          <img
                            src="images/expand-more-black-24-dp.svg"
                            loading="lazy"
                            alt="Next"
                          />
                        </a>
                        <a href="#" className="potw-like w-inline-block">
                          <img
                            src="images/favorite-border-black-24-dp-2.svg"
                            loading="lazy"
                            alt="Like"
                            className="orange-heart"
                          />
                          <img
                            src="images/favorite-border-black-24-dp_1.svg"
                            loading="lazy"
                            alt="Like"
                            className="heart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="flex-child-32">
                      <div className="potw-item">
                        <img
                          src="images/bild-header2x.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 85vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 23vw, 291.20001220703125px"
                          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                          alt="Handcrafted stuff"
                          className="back-img"
                        />
                        <a href="#" className="potw-name w-inline-block">
                          <div>Musterproduktname</div>
                          <img
                            src="images/expand-more-black-24-dp.svg"
                            loading="lazy"
                            alt="Next"
                          />
                        </a>
                        <a href="#" className="potw-like w-inline-block">
                          <img
                            src="images/favorite-border-black-24-dp-2.svg"
                            loading="lazy"
                            alt="Like"
                            className="orange-heart"
                          />
                          <img
                            src="images/favorite-border-black-24-dp_1.svg"
                            loading="lazy"
                            alt="Like"
                            className="heart"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="heading-wrapper">
                    <h2>Favorite Brands</h2>
                  </div>
                  <div className="flex">
                    <div className="flex-child-32">
                      <div className="potw-item">
                        <img
                          src="images/bild-header2x.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 85vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 23vw, 291.20001220703125px"
                          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                          alt="Handcrafted stuff"
                          className="back-img"
                        />
                        <a href="#" className="potw-name w-inline-block">
                          <div>Musterproduktname</div>
                          <img
                            src="images/expand-more-black-24-dp.svg"
                            loading="lazy"
                            alt="Next"
                          />
                        </a>
                        <a href="#" className="potw-like w-inline-block">
                          <img
                            src="images/favorite-border-black-24-dp-2.svg"
                            loading="lazy"
                            width={25}
                            alt="Like"
                            className="orange-heart"
                          />
                          <img
                            src="images/favorite-border-black-24-dp_1.svg"
                            loading="lazy"
                            alt="Like"
                            className="heart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="flex-child-32">
                      <div className="potw-item">
                        <img
                          src="images/bild-header2x.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 85vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 23vw, 291.20001220703125px"
                          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                          alt="Handcrafted stuff"
                          className="back-img"
                        />
                        <a href="#" className="potw-name w-inline-block">
                          <div>Musterprfdsfdafoduktname</div>
                          <img
                            src="images/expand-more-black-24-dp.svg"
                            loading="lazy"
                            alt="Next"
                          />
                        </a>
                        <a href="#" className="potw-like active w-inline-block">
                          <img
                            src="images/favorite-border-black-24-dp-2.svg"
                            loading="lazy"
                            width={25}
                            alt="Like"
                            className="orange-heart"
                          />
                          <img
                            src="images/favorite-border-black-24-dp_1.svg"
                            loading="lazy"
                            alt="Like"
                            className="heart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="flex-child-32">
                      <div className="potw-item">
                        <img
                          src="images/bild-header2x.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 85vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 23vw, 291.20001220703125px"
                          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                          alt="Handcrafted stuff"
                          className="back-img"
                        />
                        <a href="#" className="potw-name w-inline-block">
                          <div>Musterproduktname</div>
                          <img
                            src="images/expand-more-black-24-dp.svg"
                            loading="lazy"
                            alt="Next"
                          />
                        </a>
                        <a href="#" className="potw-like w-inline-block">
                          <img
                            src="images/favorite-border-black-24-dp-2.svg"
                            loading="lazy"
                            alt="Like"
                            className="orange-heart"
                          />
                          <img
                            src="images/favorite-border-black-24-dp_1.svg"
                            loading="lazy"
                            alt="Like"
                            className="heart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="flex-child-32">
                      <div className="potw-item">
                        <img
                          src="images/bild-header2x.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 85vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 23vw, 291.20001220703125px"
                          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                          alt="Handcrafted stuff"
                          className="back-img"
                        />
                        <a href="#" className="potw-name w-inline-block">
                          <div>Musterproduktname</div>
                          <img
                            src="images/expand-more-black-24-dp.svg"
                            loading="lazy"
                            alt="Next"
                          />
                        </a>
                        <a href="#" className="potw-like w-inline-block">
                          <img
                            src="images/favorite-border-black-24-dp-2.svg"
                            loading="lazy"
                            alt="Like"
                            className="orange-heart"
                          />
                          <img
                            src="images/favorite-border-black-24-dp_1.svg"
                            loading="lazy"
                            alt="Like"
                            className="heart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="flex-child-32">
                      <div className="potw-item">
                        <img
                          src="images/bild-header2x.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 85vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 23vw, 291.20001220703125px"
                          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                          alt="Handcrafted stuff"
                          className="back-img"
                        />
                        <a href="#" className="potw-name w-inline-block">
                          <div>Musterproduktname</div>
                          <img
                            src="images/expand-more-black-24-dp.svg"
                            loading="lazy"
                            alt="Next"
                          />
                        </a>
                        <a href="#" className="potw-like w-inline-block">
                          <img
                            src="images/favorite-border-black-24-dp-2.svg"
                            loading="lazy"
                            alt="Like"
                            className="orange-heart"
                          />
                          <img
                            src="images/favorite-border-black-24-dp_1.svg"
                            loading="lazy"
                            alt="Like"
                            className="heart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="flex-child-32">
                      <div className="potw-item">
                        <img
                          src="images/bild-header2x.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 85vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 23vw, 291.20001220703125px"
                          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                          alt="Handcrafted stuff"
                          className="back-img"
                        />
                        <a href="#" className="potw-name w-inline-block">
                          <div>Musterproduktname</div>
                          <img
                            src="images/expand-more-black-24-dp.svg"
                            loading="lazy"
                            alt="Next"
                          />
                        </a>
                        <a href="#" className="potw-like w-inline-block">
                          <img
                            src="images/favorite-border-black-24-dp-2.svg"
                            loading="lazy"
                            alt="Like"
                            className="orange-heart"
                          />
                          <img
                            src="images/favorite-border-black-24-dp_1.svg"
                            loading="lazy"
                            alt="Like"
                            className="heart"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="heading-wrapper mb-40">
                  <h2>Order History</h2>
                </div>
                <div className="order-wrapper">
                  <div className="order-item">
                    <div className="date-row">
                      <div>12.12.2012</div>
                    </div>
                    <div className="id-row">
                      <div>#231245213</div>
                    </div>
                    <div className="state-row">
                      <div>In Progress</div>
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
                    <div className="state-row">
                      <div>Shipped</div>
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
                    <div className="state-row">
                      <div>Partially Shipped</div>
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
              </div>
              <div>
                <div className="w-form">
                  <form
                    id="email-form-3"
                    name="email-form-3"
                    data-name="Email Form 3"
                  >
                    <div className="mb-60">
                      <div className="heading-wrapper mb-40">
                        <h2>Billing address</h2>
                      </div>
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
                          type="text"
                          className="text-field w-input"
                          maxLength={256}
                          data-name
                          placeholder="Company"
                          id="node"
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
                          placeholder="City*"
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
                          placeholder="VAT"
                          id="node"
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
                    </div>
                    <div className="mb-60">
                      <div className="heading-wrapper mb-40">
                        <h2>Delivery address</h2>
                      </div>
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
                          type="text"
                          className="text-field w-input"
                          maxLength={256}
                          data-name
                          placeholder="Company"
                          id="node"
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
                          placeholder="City*"
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
                          placeholder="VAT"
                          id="node"
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
                    </div>
                    <div className="mb-60">
                      <div className="heading-wrapper mb-40">
                        <h2>Payment Preference</h2>
                      </div>
                      <div className="payment-item">
                        <div className="payment-left">
                          <img
                            src="images/fill-2.png"
                            loading="lazy"
                            alt
                            className="payment-icon"
                          />
                          <div className="inline-text">
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
                                Credit Card
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="payment-item">
                        <div className="payment-left">
                          <img
                            src="images/fill-2.png"
                            loading="lazy"
                            alt
                            className="payment-icon"
                          />
                          <div className="inline-text">
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
                                Stripe
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="payment-button">
                          <a href="#" className="button secondary w-button">
                            Add account Info
                          </a>
                        </div>
                      </div>
                      <div className="payment-item">
                        <div className="payment-left">
                          <img
                            src="images/fill-2.png"
                            loading="lazy"
                            alt
                            className="payment-icon"
                          />
                          <div className="inline-text">
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
                                Apple Pay
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="payment-button">
                          <a href="#" className="button secondary w-button">
                            Add account Info
                          </a>
                        </div>
                      </div>
                      <div className="payment-item">
                        <div className="payment-left">
                          <img
                            src="images/fill-2.png"
                            loading="lazy"
                            alt
                            className="payment-icon"
                          />
                          <div className="inline-text">
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
                                Credite Crd
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="payment-button">
                          <a href="#" className="button secondary w-button">
                            Add account Info
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mb-40">
                      <div className="heading-wrapper mb-40">
                        <h2>Preferences</h2>
                      </div>
                      <div className="flex mb-40">
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


export const CustomerBackend;