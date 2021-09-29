import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import AuthForm from "@/shared/Auth/AuthForm";
import { useSelector } from "react-redux";
import Button from "@/shared/Button";

import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import UserPopup from "./UserPopup";
import ErrorPopup from "@/shared/Message/ErrorPopup";
import MobileNav from "../Nav2/MobileNav";

export function NavBarMobile() {
  return (
      <Menu menuButton={<MenuButton>Open menu</MenuButton>} transition>
          <MenuItem>New File</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuItem>Close Window</MenuItem>
      </Menu>
  );
}

const Header = ({ nav }) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const {errors} = useSelector(state => state.errors);

  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const {search} = router.query;
    if(search) setSearch(search);
  }, [router.query]);

const mobileMenu=(e)=>{
  e.preventDefault()
  setMobile(!mobile)
}
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
        <a onClick={mobileMenu} className="menu-button w-inline-block">
          <div className="burger">
            <div className="line top" />
            <div className="line mid" />
            <div className="line bot" />
          </div>
        </a>
      </div>
      {nav}
      {/* {mobile ?<NavBarMobile/>  : {nav}} */}
    </div>
  );
};

export default Header;
