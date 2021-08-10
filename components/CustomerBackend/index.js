import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";

import Fetcher from "@/shared/Fetcher";

import Order from "./Order";

const CustomerBackend = () => {
  return (
    <>
      <Header nav={<Nav />} />
      <Fetcher />
      <div>
        <div className="page-section-alert wf-section">
          <div className="container">
            <div>
              This is some text inside of a <a className="white-link">div</a>{" "}
              block.
            </div>
          </div>
        </div>
        <div className="page-section wf-section">
          <div className="container">
            <div className="flex mb-40">
              <div className="shop-filter">
                <div className="logo-floater lower">
                  <img
                    src="images/bild-header2x.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 110px, (max-width: 767px) 140px, 200px"
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
                  <a className="tab-link-shop w-inline-block">
                    <div>Favorites</div>
                  </a>
                  <a className="tab-link-shop current w-inline-block">
                    <div>Order History</div>
                  </a>
                </div>
              </div>

              <div className="shop-content pt-0">
                <div className="dynamic-content">
                  <div className="mb-60">
                    <div className="heading-wrapper">
                      <h2>Favorite Items</h2>
                    </div>

                    <div className="flex left-3">
                      <div className="flex-child-32">
                        <div className="potw-item">
                          <img
                            src="images/bild-header2x.jpg"
                            loading="lazy"
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 46vw, (max-width: 991px) 35vw, (max-width: 1279px) 23vw, 291.1875px"
                            srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                            alt="Handcrafted stuff"
                            className="back-img"
                          />
                          <a className="potw-name w-inline-block">
                            <div>Musterproduktname</div>
                            <img
                              src="images/expand-more-black-24-dp.svg"
                              loading="lazy"
                              alt="Next"
                            />
                          </a>
                          <a className="potw-like w-inline-block">
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
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 46vw, (max-width: 991px) 35vw, (max-width: 1279px) 23vw, 291.1875px"
                            srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                            alt="Handcrafted stuff"
                            className="back-img"
                          />
                          <a className="potw-name w-inline-block">
                            <div>Musterproduktname</div>
                            <img
                              src="images/expand-more-black-24-dp.svg"
                              loading="lazy"
                              alt="Next"
                            />
                          </a>
                          <a className="potw-like active w-inline-block">
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
                    </div>
                  </div>

                  <div>
                    <div className="heading-wrapper">
                      <h2>Favorite Brands</h2>
                    </div>
                    <div className="flex left-3">
                      <div className="flex-child-32">
                        <div className="potw-item">
                          <img
                            src="images/bild-header2x.jpg"
                            loading="lazy"
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 46vw, (max-width: 991px) 35vw, (max-width: 1279px) 23vw, 291.1875px"
                            srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                            alt="Handcrafted stuff"
                            className="back-img"
                          />
                          <a className="potw-name w-inline-block">
                            <div>Musterproduktname</div>
                            <img
                              src="images/expand-more-black-24-dp.svg"
                              loading="lazy"
                              alt="Next"
                            />
                          </a>
                          <a className="potw-like w-inline-block">
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
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 46vw, (max-width: 991px) 35vw, (max-width: 1279px) 23vw, 291.1875px"
                            srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                            alt="Handcrafted stuff"
                            className="back-img"
                          />
                          <a className="potw-name w-inline-block">
                            <div>Musterprfdsfdafoduktname</div>
                            <img
                              src="images/expand-more-black-24-dp.svg"
                              loading="lazy"
                              alt="Next"
                            />
                          </a>
                          <a className="potw-like active w-inline-block">
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
                    </div>
                  </div>
                </div>

                <div className="dynamic-content">
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
                        <a className="button w-button">Details</a>
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
                        <a className="button w-button">Details</a>
                      </div>
                    </div>
                  </div>
                </div>

                <Order />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerBackend;
