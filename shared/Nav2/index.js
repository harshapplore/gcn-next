const Nav2 = () => {
  return (
    <nav className="nav-menu">
      <div className="navlink-wrapper">
        <a href="#" className="nav-link current">
          Cosmetics
        </a>
        <a href="#" className="nav-link">
          Mother &amp; Child
        </a>
        <a href="#" className="nav-link">
          Home &amp; Household
        </a>
        <a href="#" className="nav-link">
          Food &amp; Drink
        </a>
        <a href="#" className="nav-link">
          Fashion
        </a>
        <a href="#" className="nav-link">
          Accessoires &amp; Jewellery
        </a>
      </div>
      <div className="promise-wrapper">
        <a href="#" className="nav-link promise w-inline-block">
          <img
            src="images/spa-black-24-dp.svg"
            loading="lazy"
            alt
            className="button-icon"
          />
          <div className="text-block">Our Promise</div>
        </a>
      </div>
      <div className="mobile-menu-bar">
        <a href="#" className="footer-inline-link dark">
          Austria
        </a>
        <div className="footer-inline-link-divider">|</div>
        <a href="#" className="footer-inline-link dark">
          English
        </a>
        <div className="footer-inline-link-divider">|</div>
        <a href="#" className="footer-inline-link dark">
          € (EUR)
        </a>
      </div>
    </nav>
  );
};

export default Nav2;
