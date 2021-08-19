import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import AuthForm from "@/shared/Auth/AuthForm";
import { useSelector } from "react-redux";
import Button from "@/shared/Button";

import UserPopup from "./Popup";

const Header = ({ nav }) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="navbar">
      {showForm && <AuthForm close={() => setShowForm(false)} />}

      <div className="navbar-top">
        <div className="brand-wrapper" onClick={() => router.push("/")}>
          <a className="brand w-inline-block w--current">
            <img src="/images/fill-2.svg" alt="Green Cloud Nine Logo" />
          </a>
        </div>
        <div className="form-search w-form">
          <form
            id="search-form"
            name="search-form"
            data-name="Search Form"
            className="search-bar-wrapper"
          >
            <input
              type="text"
              className="search-bar w-input"
              maxLength={256}
              name="Searchbar"
              data-name="Searchbar"
              placeholder="I'm searching for"
              id="Searchbar"
              required
            />
            <img
              src="/images/search-black-24-dp.svg"
              alt="search"
              className="search-icon"
            />
          </form>
        </div>
        <div className="clearfix" />
        <div className="right-icon-nav">
          {!user.id && (
            <Button
              type="secondary"
              name="Login / Register"
              action={() => setShowForm(true)}
            />
          )}
          <>
            {user.id && (
              <>
                <a
                  className="icon-nav w-inline-block"
                  onClick={() => router.push("/customer/favorites")}
                >
                  <img
                    src="/images/favorite-border-black-24-dp.svg"
                    loading="lazy"
                    alt="icon"
                  />
                </a>
                <UserPopup />
              </>
            )}

            {user.type !== "seller" && (
              <a
                className="icon-nav w-inline-block"
                onClick={() => router.push("/cart")}
              >
                <img
                  src="/images/local-mall-black-24-dp.svg"
                  loading="lazy"
                  alt="Shopping Cart"
                />
              </a>
            )}
          </>
        </div>
        <a className="menu-button w-inline-block">
          <div className="burger">
            <div className="line top" />
            <div className="line mid" />
            <div className="line bot" />
          </div>
        </a>
      </div>
      {nav}
    </div>
  );
};

export default Header;
