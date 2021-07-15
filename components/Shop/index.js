import { useRouter } from "next/router";

import Nav from "shared/Nav";

import ShopBanner from "shared/Shop/Banner";
import ShopNav from "shared/Shop/Nav";
import ShopHeading from "shared/Shop/Heading";

import ShopCard from "./ShopCard";
import ShopSidebar from "./ShopSidebar";
import ShopNavBlocks from "./ShopNav";

import Certifications from "./Certifications";
import TermsNConditions from "./TNC";
import AboutUs from "./AboutUs";

const Rating = ({ rating }) => {
  let filled = rating;
  let empty = 5 - rating;

  const ele = [];

  while (filled > 0) {
    ele.push(
      <img
        src="/images/star-black-24-dp-copy-4.svg"
        loading="lazy"
        alt="Filled star"
        className="shop-product-star"
      />
    );

    filled--;
  }

  while (empty > 0) {
    ele.push(
      <img
        src="/images/star-black-24-dp-copy.svg"
        loading="lazy"
        alt="Empty star"
        className="shop-product-star"
      />
    );
    empty--;
  }

  return <div>{ele}</div>;
};

const ShopProduct = ({ name, seller, price }) => {
  return (
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
        <a className="link">{name}</a>
        <div className="by-seller">By {seller}</div>
        <div className="shop-product-price">€ {price}</div>
        <Rating rating={3} />
      </div>
    </div>
  );
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
  const router = useRouter();

  const { query } = router;

  return (
    <>
      <Nav />
      <div className="page-section pt-0">
        <ShopBanner />
        <ShopNav>
          <ShopNavBlocks />
        </ShopNav>

        <div className="container">
          {(!query.tab || query.tab === "products") && (
            <div className="flex">
              {/*  */}
              <ShopSidebar />

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
                  <ShopProduct name="XXX YYY ZZZ" seller="Ramesh" price={55} />
                </div>
              </div>
            </div>
          )}

          {query.tab === "certificates" && <Certifications />}

          {query.tab === "terms-n-conditions" && <TermsNConditions />}

          {query.tab === "about-us" && <AboutUs />}
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
