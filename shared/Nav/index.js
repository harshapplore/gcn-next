import Image from "next/image";
import Link from "next/link";

import GC9Logo from "@/assets/images/gc9-logo.svg";
import SearchIcon from "@/assets/images/search.svg";
import AccountIcon from "@/assets/images/account-icon.svg";
import CartIcon from "@/assets/images/cart-icon.svg";
import FavIcon from "@/assets/images/favorite-border.svg";
import ButtonIcon from "@/assets/images/button-icon.svg";

const NavLink = ({ text, route }) => {
  return (
    <Link href={route}>
      <a className="nav-link w-nav-link"> {text}</a>
    </Link>
  );
};

const NavWrapper = ({ children }) => {
  return (
    <div
      data-collapse="medium"
      data-animation="over-right"
      data-duration="400"
      data-w-id="062adfd6-ed3c-be5a-1456-3fc414380157"
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
        {/* GCN Logo */}
        <div className="brand-wrapper">
          <a href="/" className="brand w-inline-block">
            <img {...GC9Logo} alt="Green Cloud Nine Logo" />
          </a>
        </div>

        {/* Search Bar */}
        <div className="form-search w-form">
          <form className="search-bar-wrapper">
            <input
              type="text"
              className="search-bar w-input"
              maxLength="256"
              placeholder="I'm searching for"
            />
            <img {...SearchIcon} alt="Search Icon" className="search-icon" />
          </form>
        </div>

        {/* Top Bar Icons */}
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

        {/*  Mobile Hamburger Icon */}
        <div className="menu-button w-nav-button">
          <div className="burger">
            <div className="line top"></div>
            <div className="line mid"></div>
            <div className="line bot"></div>
          </div>
        </div>
      </div>

      <nav role="navigation" className="nav-menu w-nav-menu">
        <NavLink route="/" text="Cosmetics" />
        <NavLink route="/seller-onboarding" text="Mother & Child" />
        <NavLink route="/" text="Home & Household" />
        <NavLink route="/" text="Food & Drink" />
        <NavLink route="/" text="Fashion" />
        <NavLink route="/" text="Accessory & Jewellery" />
        
        <a href="/" className="nav-link promise w-inline-block">
          <div className="button-icon w-embed">
            <img {...ButtonIcon} alt="" />
          </div>
          <div className="text-block">Our Promise</div>
        </a>
        <div className="mobile-menu-bar">
          <a href="/" className="footer-inline-link dark">
            Austria
          </a>
          <div className="footer-inline-link-divider">|</div>
          <a href="/" className="footer-inline-link dark">
            English
          </a>
          <div className="footer-inline-link-divider">|</div>
          <a href="/" className="footer-inline-link dark">
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
