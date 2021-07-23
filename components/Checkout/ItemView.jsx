const ItemView = () => {
  return (
    <div className="container">
      <div className="heading-wrapper mb-40">
        <h2>Check your order</h2>
      </div>
      <div className="shop-list mb-60">
        <div className="flex mb-20">
          <div className="flex">
            <div className="checkout-shop-item-img">
              <img
                src="images/bild-header2x.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 120px"
                srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                alt="Handcrafted stuff"
                className="back-img"
              />
            </div>
            <div>
              <h3>Long Item Name</h3>
              <div className="overline-text pull-up">By Seller</div>
              <div>Size: S</div>
            </div>
          </div>
          <div className="pt-30">
            <div className="shop-product-price">€ 129,50</div>
          </div>
        </div>
        <div className="flex mb-20">
          <div className="flex">
            <div className="checkout-shop-item-img">
              <img
                src="/images/bild-header2x.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 120px"
                srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                alt="Handcrafted stuff"
                className="back-img"
              />
            </div>
            <div>
              <h3>Long Item Name</h3>
              <div className="overline-text pull-up">By Seller</div>
              <div>Size: S</div>
            </div>
          </div>
          <div className="pt-30">
            <div className="shop-product-price">€ 129,50</div>
          </div>
        </div>
        <div className="flex mb-20">
          <div className="flex">
            <div className="checkout-shop-item-img">
              <img
                src="/images/bild-header2x.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 120px"
                srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                alt="Handcrafted stuff"
                className="back-img"
              />
            </div>
            <div>
              <h3>Long Item Name</h3>
              <div className="overline-text pull-up">By Seller</div>
              <div>Size: S</div>
            </div>
          </div>
          <div className="pt-30">
            <div className="shop-product-price">€ 129,50</div>
          </div>
        </div>
        <div className="total-wrapper">
          <div className="medium">Total: € 429,50</div>
          <div>Delivery: € 18,90</div>
          <div>CO2 compensation (345)km: € 4,80</div>
        </div>
      </div>
      <div className="center">
        <div className="button">order now</div>
      </div>
    </div>
  );
};

export default ItemView;
