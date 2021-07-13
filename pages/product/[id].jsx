


const ProductDetail = () => {
  return (
    <>
      <div className="page-section">
        <div className="container w-clearfix">
          <div className="product-image-wrapper">
            <div id="main" className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    src="images/bild-header2x.jpg"
                    loading="lazy"
                    sizes="(max-width: 767px) 92vw, (max-width: 1279px) 58vw, 720px"
                    srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                    alt="Handcrafted stuff"
                    className="product-image"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="images/bild-header2x.jpg"
                    loading="lazy"
                    sizes="(max-width: 767px) 92vw, (max-width: 1279px) 58vw, 720px"
                    srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                    alt="Handcrafted stuff"
                    className="product-image"
                  />
                </div>
              </div>
            </div>
            <div id="thumbs" className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    src="images/bild-header2x.jpg"
                    loading="lazy"
                    sizes="(max-width: 767px) 92vw, (max-width: 1279px) 58vw, 720px"
                    srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                    alt="Handcrafted stuff"
                    className="product-image"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="images/bild-header2x.jpg"
                    loading="lazy"
                    sizes="(max-width: 767px) 92vw, (max-width: 1279px) 58vw, 720px"
                    srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                    alt="Handcrafted stuff"
                    className="product-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="product-info-wrapper">
            <div className="mb-20">
              <h1 className="item-heading">
                Implement swiper with thumbnail pagination on the left
              </h1>
              <div className="overline-text">By Seller</div>
            </div>
            <div className="item-product-price mb-40">€ 129,00</div>
            <div>
              <div className="button secondary small">
                <div>Text</div>
              </div>
              <div className="button secondary small">
                <div>More text</div>
              </div>
              <div className="button secondary small">
                <div>less text</div>
              </div>
              <div className="button secondary small">
                <div>Text</div>
              </div>
              <div className="button secondary small">
                <div>different text</div>
              </div>
              <div className="button secondary small">
                <div>Text</div>
              </div>
            </div>
            <div className="mb-80 w-form">
              <form
                id="email-form-3"
                name="email-form-3"
                data-name="Email Form 3"
              >
                <select
                  id="field"
                  name="field"
                  className="text-field select item w-select"
                >
                  <option value>Size</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                </select>
                <a href="#" className="button icon orange w-inline-block">
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
                  <div className="text-block">Our Promise</div>
                </a>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <div className="mb-10">
              <img
                src="images/done-black-24-dp.svg"
                loading="lazy"
                alt="Checkmark"
              />
              <div className="item-additional-info">
                In Stock, Delivery time: 2 – 5 days
              </div>
            </div>
            <div>
              <img
                src="images/share-black-24-dp.svg"
                loading="lazy"
                alt="Share"
              />
              <div className="item-additional-info">Share</div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section pt-0">
        <div className="nav-area seller-item-detail">
          <div className="container">
            <div className="scroll-x">
              <a href="#" className="nav-link-shop w-inline-block">
                <div>Description</div>
              </a>
              <a href="#" className="nav-link-shop w-inline-block">
                <div>Reviews</div>
              </a>
              <a href="#" className="nav-link-shop current w-inline-block">
                <div>Questions</div>
              </a>
              <a href="#" className="nav-link-shop w-inline-block">
                <div>Terms &amp;&nbsp;Conditions</div>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
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
              For static content, just drop it into any page and begin editing.
              For dynamic content, add a rich text field to any collection and
              then connect a rich text element to that field in the settings
              panel. Voila!
            </p>
            <h4>How to customize formatting for each rich text</h4>
            <p>
              Headings, paragraphs, blockquotes, figures, images, and figure
              captions can all be styled after a class is added to the rich text
              element using the "When inside of" nested selector system.
            </p>
          </div>
        </div>
      </div>
      <div className="page-section">
        <div className="container">
          <div className="heading-wrapper mb-40">
            <h2>You may also like ...</h2>
          </div>
          <div className="flex">
            <div className="flex-child-32">
              <div className="potw-item">
                <img
                  src="images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 1279px) 31vw, 384px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a href="#" className="potw-name w-inline-block">
                  <div>Mustershop</div>
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
                  sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 1279px) 31vw, 384px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a href="#" className="potw-name w-inline-block">
                  <div>Mustershop</div>
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
                  sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 1279px) 31vw, 384px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a href="#" className="potw-name w-inline-block">
                  <div>Mustershop</div>
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
    </>
  );
};

export default ProductDetail;
