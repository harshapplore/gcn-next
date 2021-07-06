const BasicInfo = () => {
  return (
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
                src="/images/search-black-24-dp.svg"
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
            <div>Oops! Something went wrong while submitting the form.</div>
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
              src="/images/bild-header2x.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 17vw, 218.40000915527344px"
              srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
              alt="Handcrafted stuff"
              className="back-img"
            />
          </a>
          <div className="check-floater">
            <img
              src="/images/check-circle-black-24-dp.svg"
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
              src="/images/expand-more-black-24-dp-copy-6.svg"
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
              src="/images/bild-header2x.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 17vw, 218.40000915527344px"
              srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
              alt="Handcrafted stuff"
              className="back-img"
            />
          </a>
          <div className="check-floater">
            <img src="/images/cancel-black-24-dp-2.svg" loading="lazy" alt="" />
          </div>
          <div className="potw-like">
            <img
              src="/images/expand-more-black-24-dp-copy-6.svg"
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
              src="/images/bild-header2x.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 17vw, 218.40000915527344px"
              srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
              alt="Handcrafted stuff"
              className="back-img"
            />
          </a>
          <div className="check-floater">
            <img src="/images/cancel-black-24-dp-2.svg" loading="lazy" alt="" />
          </div>
          <div className="potw-like">
            <img
              src="/images/expand-more-black-24-dp-copy-6.svg"
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
  );
};

export default BasicInfo;