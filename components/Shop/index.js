import Nav from "shared/Nav";

import ShopBanner from "shared/Shop/Banner";
import ShopNav from "shared/Shop/Nav";
import ShopHeading from "shared/Shop/Heading";

import ShopCard from "./ShopCard";

const ShopProduct = () => {
  return;
};

const Filters = () => {
  return (
    <div className="hide-mobile">
      <div>
        <div className="w-form">
          <form
            id="email-form-3"
            name="email-form-3"
            data-name="Email Form 3"
            className="flex"
          >
            <select
              id="field"
              name="field"
              className="text-field select width-24 w-select"
            >
              <option value>Sustainability</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
            <select
              id="field-6"
              name="field-6"
              data-name="Field 6"
              className="text-field select width-24 w-select"
            >
              <option value>Price</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
            <select
              id="field-5"
              name="field-5"
              data-name="Field 5"
              className="text-field select width-24 w-select"
            >
              <option value>Colour</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
            <select
              id="field-4"
              name="field-4"
              data-name="Field 4"
              className="text-field select width-24 w-select"
            >
              <option value>Price</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
            <select
              id="field-3"
              name="field-3"
              data-name="Field 3"
              className="text-field select width-24 w-select"
            >
              <option value>Sale</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
            <select
              id="field-2"
              name="field-2"
              data-name="Field 2"
              className="text-field select width-24 w-select"
            >
              <option value>Sort by</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

const Shop = () => {
  return (
    <>
      <Nav />
      <div className="page-section pt-0">
        <ShopBanner />
        <ShopNav />

        <div className="container">
          <div className="flex">
            <div className="shop-filter popup-mobile">
              <div className="scroll-y">
                <div className="mb-80">
                  <a className="tab-link-shop current w-inline-block">
                    <div>Cosmetics</div>
                  </a>
                  <a className="tab-link-shop w-inline-block">
                    <div>Mother &amp;&nbsp;Child</div>
                  </a>
                  <a className="tab-link-shop w-inline-block">
                    <div>Home &amp;&nbsp;Household</div>
                  </a>
                  <a className="tab-link-shop w-inline-block">
                    <div>Food &amp;&nbsp;Drink</div>
                  </a>
                  <a className="tab-link-shop w-inline-block">
                    <div>Fashion</div>
                  </a>
                  <a className="tab-link-shop w-inline-block">
                    <div>Accessories &amp;&nbsp;Jewellery</div>
                  </a>
                </div>
                <div>
                  <div className="w-form">
                    <form
                      id="email-form-4"
                      name="email-form-4"
                      data-name="Email Form 4"
                    >
                      <div className="shop-select-text first">Delivers to:</div>
                      <select
                        id="field-7"
                        name="field-7"
                        className="text-field select w-select"
                      >
                        <option value>Select one...</option>
                        <option value="First">First Choice</option>
                        <option value="Second">Second Choice</option>
                        <option value="Third">Third Choice</option>
                      </select>
                      <div className="shop-select-text">Search within:</div>
                      <select
                        id="field-7"
                        name="field-7"
                        className="text-field select w-select"
                      >
                        <option value>Select one...</option>
                        <option value="First">First Choice</option>
                        <option value="Second">Second Choice</option>
                        <option value="Third">Third Choice</option>
                      </select>
                      <div className="shop-select-text">Shop location</div>
                      <select
                        id="field-7"
                        name="field-7"
                        className="text-field select w-select"
                      >
                        <option value>Select one...</option>
                        <option value="First">First Choice</option>
                        <option value="Second">Second Choice</option>
                        <option value="Third">Third Choice</option>
                      </select>
                      <div className="shop-select-text">Delivery time:</div>
                      <select
                        id="field-7"
                        name="field-7"
                        className="text-field select w-select"
                      >
                        <option value>Select one...</option>
                        <option value="First">First Choice</option>
                        <option value="Second">Second Choice</option>
                        <option value="Third">Third Choice</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
              <div className="pick-up-wrapper mb-40">
                <a className="pickup-switch-wrapper active w-inline-block">
                  <div className="switch-switcher" />
                </a>
                <div className="pickup-text">Pick up available</div>
              </div>
              <div className="mobile-only">
                <div className="center">
                  <a className="button gray w-inline-block">
                    <div className="text-block">Clear</div>
                  </a>
                  <a className="button orange mx-10 w-inline-block">
                    <div className="text-block">Apply</div>
                  </a>
                </div>
              </div>
              <a className="shop-delete w-inline-block">
                <img
                  src="images/clear-black-24-dp.svg"
                  loading="lazy"
                  width={24}
                  alt="Close"
                />
              </a>
            </div>

            <div className="shop-content">
              
              {/* Filter for Mobile View */}
              <div className="mobile-only mb-20">
                <div className="center mb-10">
                  <a className="button icon orange block w-inline-block">
                    <div className="button-icon static w-embed">
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
                    <div className="text-block">Filter (3)</div>
                  </a>
                </div>
                <a className="button icon secondary small tag w-inline-block">
                  <div className="button-icon tag w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M0 0L24 0 24 24 0 24z"
                          transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
                        />
                        <path
                          fill="currentColor"
                          fillRule="nonzero"
                          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text-block">Upcycled</div>
                </a>
                <a className="button icon secondary small tag w-inline-block">
                  <div className="button-icon tag w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M0 0L24 0 24 24 0 24z"
                          transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
                        />
                        <path
                          fill="currentColor"
                          fillRule="nonzero"
                          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text-block">0-100€</div>
                </a>
                <a className="button icon secondary small tag w-inline-block">
                  <div className="button-icon tag w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M0 0L24 0 24 24 0 24z"
                          transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
                        />
                        <path
                          fill="currentColor"
                          fillRule="nonzero"
                          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text-block">0-100€</div>
                </a>
              </div>


              <ShopCard name="GC9 Shop" />
              <Filters />


              <div className="flex">

                {/* Shop Items */}
                <div className="shop-product-item">
                  <a className="shop-product-img w-inline-block">
                    <img
                      src="images/bild-header2x.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 17vw, 218.40000915527344px"
                      alt="Product"
                      className="back-img"
                    />
                  </a>
                  <a className="potw-like active w-inline-block">
                    <img
                      src="/images/favorite-border-black-24-dp-2.svg"
                      loading="lazy"
                      width={25}
                      alt="Like"
                      className="orange-heart"
                    />
                    <img
                      src="/images/favorite-border-black-24-dp_1.svg"
                      loading="lazy"
                      alt="Like"
                      className="heart"
                    />
                  </a>
                  <div className="shop-product-info">
                    <a className="link">
                      Skyboats: Hängende Laterne String Lights
                    </a>
                    <div className="by-seller">By Seller</div>
                    <div className="shop-product-price">€ 129,00</div>
                    <div>
                      <img
                        src="images/star-black-24-dp-copy-4.svg"
                        loading="lazy"
                        alt="Filled star"
                        className="shop-product-star"
                      />
                      <img
                        src="images/star-black-24-dp-copy-4.svg"
                        loading="lazy"
                        alt="Filled star"
                        className="shop-product-star"
                      />
                      <img
                        src="images/star-black-24-dp-copy-4.svg"
                        loading="lazy"
                        alt="Filled star"
                        className="shop-product-star"
                      />
                      <img
                        src="images/star-black-24-dp-copy-4.svg"
                        loading="lazy"
                        alt="Filled star"
                        className="shop-product-star"
                      />
                      <img
                        src="images/star-black-24-dp-copy.svg"
                        loading="lazy"
                        alt="Empty star"
                        className="shop-product-star"
                      />
                    </div>
                  </div>
                
                </div>
             
             
              </div>
            </div>
          


          </div>
          <div className="mt-100">
            <div className="heading-wrapper mb-40">
              <h1>Certificates</h1>
              <div className="overline-text mb-40">30 Products</div>
            </div>
            <div />
          </div>
          <div className="mt-100">
            <div className="heading-wrapper mb-40">
              <h1>Terms &amp; Conditions</h1>
              <div className="overline-text mb-40">30 Products</div>
            </div>
            <div className="w-richtext">
              <h2>What’s a Rich Text element?</h2>
              <p>
                The rich text element allows you to create and format headings,
                paragraphs, blockquotes, images, and video all in one place
                instead of having to add and format them individually. Just
                double-click and easily create content.
              </p>
              <h4>Static and dynamic content editing</h4>
              <p>
                A rich text element can be used with static or dynamic content.
                For static content, just drop it into any page and begin
                editing. For dynamic content, add a rich text field to any
                collection and then connect a rich text element to that field in
                the settings panel. Voila!
              </p>
              <h4>How to customize formatting for each rich text</h4>
              <p>
                Headings, paragraphs, blockquotes, figures, images, and figure
                captions can all be styled after a class is added to the rich
                text element using the "When inside of" nested selector system.
              </p>
            </div>
          </div>
          <div className="mt-100">
            <div className="heading-wrapper mb-40">
              <h1>About us</h1>
              <div className="overline-text mb-40">30 Products</div>
            </div>
            <div className="w-richtext">
              <h2>What’s a Rich Text element?</h2>
              <p>
                The rich text element allows you to create and format headings,
                paragraphs, blockquotes, images, and video all in one place
                instead of having to add and format them individually. Just
                double-click and easily create content.
              </p>
              <h4>Static and dynamic content editing</h4>
              <p>
                A rich text element can be used with static or dynamic content.
                For static content, just drop it into any page and begin
                editing. For dynamic content, add a rich text field to any
                collection and then connect a rich text element to that field in
                the settings panel. Voila!
              </p>
              <h4>How to customize formatting for each rich text</h4>
              <p>
                Headings, paragraphs, blockquotes, figures, images, and figure
                captions can all be styled after a class is added to the rich
                text element using the "When inside of" nested selector system.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          <div className="heading-wrapper mb-40">
            <h2>Similar shops</h2>
          </div>
          <div className="flex">
            <div className="flex-child-32">
              <div className="potw-item">
                <img
                  src="images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 83vw, (max-width: 991px) 46vw, (max-width: 1279px) 31vw, 384px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a className="potw-name w-inline-block">
                  <div>Mustershop</div>
                  <img
                    src="images/expand-more-black-24-dp.svg"
                    loading="lazy"
                    alt="Next"
                  />
                </a>
              </div>
            </div>
            <div className="flex-child-32">
              <div className="potw-item">
                <img
                  src="images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 83vw, (max-width: 991px) 46vw, (max-width: 1279px) 31vw, 384px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a className="potw-name w-inline-block">
                  <div>Mustershop</div>
                  <img
                    src="images/expand-more-black-24-dp.svg"
                    loading="lazy"
                    alt="Next"
                  />
                </a>
              </div>
            </div>
            <div className="flex-child-32">
              <div className="potw-item">
                <img
                  src="images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 83vw, (max-width: 991px) 46vw, (max-width: 1279px) 31vw, 384px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a className="potw-name w-inline-block">
                  <div>Mustershop</div>
                  <img
                    src="images/expand-more-black-24-dp.svg"
                    loading="lazy"
                    alt="Next"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
