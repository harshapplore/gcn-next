const TopNav = () => {
  return (
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
  );
};

export default TopNav;
