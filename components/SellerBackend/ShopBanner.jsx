const ShopBanner = () => {
  return (
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
  );
};

export default ShopBanner;
