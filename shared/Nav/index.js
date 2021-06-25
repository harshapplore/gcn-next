import Image from "next/image";

import GC9Logo from "assets/images/gc9-logo.svg";
import SearchIcon from "assets/images/search.svg";
import AccountIcon from "assets/images/account-icon.svg";
import CartIcon from "assets/images/cart-icon.svg";
import FavIcon from "assets/images/favorite-border.svg";

const NavWrapper = ({ children }) => {
  return (
    <div
      data-collapse="medium"
      data-animation="over-right"
      data-duration="400"
      data-w-id="062adfd6-ed3c-be5a-1456-3fc414380157"
      role="banner"
      className="navbar w-nav"
    >
      <div className="custom-css w-embed"></div>
      {children}
    </div>
  );
};

const Navigation = () => {
  return (
    <>
      <div className="navbar-top">
        <div className="brand-wrapper">
          <a href="#" className="brand w-inline-block">
            <img {...GC9Logo} alt="Green Cloud Nine Logo" />
          </a>
        </div>

        <div className="form-search w-form">
          <form
            id="email-form-2"
            name="email-form-2"
            data-name="Email Form 2"
            className="search-bar-wrapper"
          >
            <input
              type="text"
              className="search-bar w-input"
              maxlength="256"
              name="Searchbar-2"
              data-name="Searchbar 2"
              placeholder="I'm searching for"
              id="Searchbar-2"
            />
            <img {...SearchIcon} alt="Search Icon" className="search-icon" />
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <div className="right-icon-nav">
          <a href="#" className="icon-nav w-inline-block">
            <img {...FavIcon} alt="Favorite Icon" />
          </a>
          <a href="#" className="icon-nav w-inline-block">
            <img {...AccountIcon} alt="Account" />
          </a>
          <a href="#" className="icon-nav w-inline-block">
            <img {...CartIcon} alt="Shopping Cart" />
          </a>
        </div>
        <div className="menu-button w-nav-button">
          <div className="burger">
            <div className="line top"></div>
            <div className="line mid"></div>
            <div className="line bot"></div>
          </div>
        </div>
      </div>
      <nav role="navigation" className="nav-menu w-nav-menu">
        <a
          href="index.html"
          aria-current="page"
          className="nav-link w-nav-link w--current"
        >
          Home
        </a>
        <a href="seller-onboarding.html" className="nav-link w-nav-link">
          About
        </a>
        <a href="#" className="nav-link w-nav-link">
          Contact
        </a>
        <a href="#" className="nav-link w-nav-link">
          Our Promise
        </a>
        <a href="#" className="nav-link w-nav-link">
          Our Promise
        </a>
        <a href="#" className="nav-link w-nav-link">
          Our Promise
        </a>
        <a href="#" className="nav-link promise w-inline-block">
          <div className="button-icon w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewbox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <g>
                <rect fill="none" height="24" width="24"></rect>
              </g>
              <g>
                <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z"></path>
              </g>
            </svg>
          </div>
          <div className="text-block">Our Promise</div>
        </a>
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
            € (Eur)
          </a>
        </div>
      </nav>
    </>
  );
};

export default function Nav() {
  return (
    <NavWrapper>
      <Navigation />
    </NavWrapper>
  );
}
