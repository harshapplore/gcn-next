import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const CategoryBlock = ({ name, action }) => {
  return (
    <a className="footer-link w-inline-block cursor" onClick={action}>
      <div>{name}</div>
    </a>
  );
};

const Footer = () => {
  const router = useRouter();
  const { categories } = useSelector((state) => state.categories);

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

              {categories &&
                categories.length > 0 &&
                categories.map((category, index) => (
                  <CategoryBlock
                    key={"cat" + index}
                    name={category.name}
                    action={() => router.push(`/category/${category.id}`)}
                  />
                ))}
            </div>
            <div className="footer-column">
              <div className="footer-heading">GC9</div>
              <a
                className="footer-link w-inline-block cursor"
                onClick={() => router.push("/about")}
              >
                <div>About us</div>
              </a>
              <a
                className="footer-link w-inline-block cursor"
                onClick={() => router.push("/seller-info")}
              >
                <div>Sell Products</div>
              </a>
              <a className="footer-link w-inline-block">
                <div>Policies</div>
              </a>
            </div>
            <div className="footer-column">
              <div className="footer-heading">Info</div>
              <a
                className="footer-link w-inline-block"
                onClick={() => router.push("/help")}
              >
                <div>For buyers</div>
              </a>
              <a
                className="footer-link w-inline-block"
                onClick={() => router.push("/help")}
              >
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
            <a className="footer-inline-link">Terms of Service</a>
            <div className="footer-inline-link-divider">|</div>
            <a className="footer-inline-link">Privacy Policy</a>
            <div className="footer-inline-link-divider">|</div>
            <a className="footer-inline-link">Imprint</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
