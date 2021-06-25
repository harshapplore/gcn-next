

const PageSection = () => {
  return (
    <div className="page-section border-bottom">
      <div className="container">
        <div className="flex center mb-60">
          <h1>Products of the week</h1>
          <a href="#" className="button w-button">
            More
          </a>
        </div>
        <div className="flex">
          <div className="flex-child-32">
            <div className="potw-item">
              <img
                src="images/bild-header2x.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 29vw, (max-width: 767px) 30vw, (max-width: 1279px) 31vw, 384px"
                srcSet="
            images/bild-header2x-p-500.jpeg   500w,
            images/bild-header2x-p-800.jpeg   800w,
            images/bild-header2x-p-2000.jpeg 2000w,
            images/bild-header2x-p-2600.jpeg 2600w,
            images/bild-header2x.jpg         2880w
          "
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
                sizes="(max-width: 479px) 29vw, (max-width: 767px) 30vw, (max-width: 1279px) 31vw, 384px"
                srcSet="
            images/bild-header2x-p-500.jpeg   500w,
            images/bild-header2x-p-800.jpeg   800w,
            images/bild-header2x-p-2000.jpeg 2000w,
            images/bild-header2x-p-2600.jpeg 2600w,
            images/bild-header2x.jpg         2880w
          "
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
                sizes="(max-width: 479px) 29vw, (max-width: 767px) 30vw, (max-width: 1279px) 31vw, 384px"
                srcSet="
            images/bild-header2x-p-500.jpeg   500w,
            images/bild-header2x-p-800.jpeg   800w,
            images/bild-header2x-p-2000.jpeg 2000w,
            images/bild-header2x-p-2600.jpeg 2600w,
            images/bild-header2x.jpg         2880w
          "
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
  );
};

export default PageSection;