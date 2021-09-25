import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import AuthForm from "@/shared/Auth/AuthForm";
import { useSelector } from "react-redux";
import Button from "@/shared/Button";

import UserPopup from "./UserPopup";
import ErrorPopup from "@/shared/Message/ErrorPopup";

const Header = ({ nav }) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const {errors} = useSelector(state => state.errors);

  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const {search} = router.query;
    if(search) setSearch(search);
  }, [router.query]);

  return (
    <div className="navbar">
      {showForm && <AuthForm close={() => setShowForm(false)} />}
      
      <ErrorPopup messages={errors} /> 

      <div className="navbar-top">
        <div className="brand-wrapper" onClick={() => router.push("/")}>
          <a className="brand w-inline-block w--current cursor">
            <img src="/images/fill-2.svg" alt="Green Cloud Nine Logo" />
          </a>
        </div>
        <div className="form-search w-form">
          <div
            id="search-form"
            name="search-form"
            data-name="Search Form"
            className="search-bar-wrapper"
          >
            <input
              type="text"
              className="search-bar w-input"
              placeholder="I'm searching for"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyUp={(e) => e.keyCode === 13? router.push(`/products?filters=${JSON.stringify({search})}`): ""}
            />
            <img
              src="/images/search-black-24-dp.svg"
              alt="search"
              className="search-icon cursor"
              onClick={() => router.push(`/products?filters=${JSON.stringify({search})}`)}
            />
        </div>
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
                {user.type == "customer" &&
                <a
                  className="icon-nav w-inline-block"
                  onClick={() => router.push("/customer/favorites")}
                >
                    
                  <img
                    src="/images/favorite-border-black-24-dp.svg"
                    loading="lazy"
                    alt="icon"
                  />
                </a>}
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
