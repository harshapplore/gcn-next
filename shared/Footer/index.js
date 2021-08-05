const Footer = () => {
  return (
    <div className="footer">
      <div className="page-section social-bar">
        <div className="container">
          <div className="footer-top-flex">
            <div>
              <a className="footer-inline-link dark">Austria</a>
              <div className="footer-inline-link-divider">|</div>
              <a className="footer-inline-link dark">English</a>
              <div className="footer-inline-link-divider">|</div>
              <a className="footer-inline-link dark">€ (EUr)</a>
            </div>
            <div className="social-wrapper">
              <a className="social-icon first w-inline-block">
                <img src="/images/group-3.svg" loading="lazy" alt="Pinterest" />
              </a>
              <a className="social-icon w-inline-block">
                <img src="/images/group-2.svg" loading="lazy" alt="Twitter" />
              </a>
              <a className="social-icon w-inline-block">
                <img src="/images/group.svg" loading="lazy" alt="Instagram" />
              </a>
              <a className="social-icon w-inline-block">
                <img
                  src="/images/facebook-black-24-dp.svg"
                  loading="lazy"
                  alt="Facebook"
                />
              </a>
              <a className="social-icon last w-inline-block">
                <img
                  src="/images/share-black-24-dp.svg"
                  loading="lazy"
                  alt="Share"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section footer">
        <div className="container">
          <div className="footer-flex">
            <div className="footer-column">
              <div className="footer-heading">Shop</div>
              <a className="footer-link w-inline-block">
                <div>Cosmetics</div>
              </a>
              <a className="footer-link w-inline-block">
                <div>Mother &amp;&nbsp;Child</div>
              </a>
              <a className="footer-link w-inline-block">
                <div>Home &amp;&nbsp;Household</div>
              </a>
              <a className="footer-link w-inline-block">
                <div>Food &amp;&nbsp;Drink</div>
              </a>
              <a className="footer-link w-inline-block">
                <div>Fashion</div>
              </a>
              <a className="footer-link w-inline-block">
                <div>Accessory &amp;&nbsp;Jewellery</div>
              </a>
              <a className="footer-link w-inline-block">
                <div>Sale</div>
              </a>
            </div>
            <div className="footer-column">
              <div className="footer-heading">GC9</div>
              <a className="footer-link w-inline-block">
                <div>About us</div>
              </a>
              <a className="footer-link w-inline-block">
                <div>Our Promise</div>
              </a>
              <a className="footer-link w-inline-block">
                <div>Sell Products</div>
              </a>
              <a className="footer-link w-inline-block">
                <div>Policies</div>
              </a>
              <a className="footer-link w-inline-block">
                <div>Imprint</div>
              </a>
            </div>
            <div className="footer-column">
              <div className="footer-heading">Shop</div>
              <a className="footer-link w-inline-block">
                <div>For buyers</div>
              </a>
              <a className="footer-link w-inline-block">
                <div>For sellers</div>
              </a>
            </div>
            <div className="footer-column last">
              <div>
                <span className="medium">Green Cloud Nine e.U.</span>
                <br />
                Kienbergstraße 41
                <br />
                6200 Jenbach
                <br />
                Österreich
                <br />
                <br />
                <a className="footer-link">info@greencloudnine.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section footer-bar">
        <div className="container w-clearfix">
          <div className="footer-bar-content">
            <a className="footer-inline-link">Nutzungsbedingungen</a>
            <div className="footer-inline-link-divider">|</div>
            <a className="footer-inline-link">Datenschutz</a>
            <div className="footer-inline-link-divider">|</div>
            <a className="footer-inline-link">Impressum</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
