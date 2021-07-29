import { useState, useEffect } from "react";

import styled from "styled-components";
import GC9Logo from "@/assets/icons/gcn-logo.svg";
import SearchIcon from "@/assets/icons/search.svg";
import LikeIcon from "@/assets/icons/heart.svg";
import CartIcon from "@/assets/icons/cart.svg";
import UserIcon from "@/assets/icons/user.svg";

const HeaderWrapperContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: #fff;
  z-index: 1;

  input {
    border: 0;
    outline: 0;
  }
`;

const HeaderContainer = styled.div`
  padding: 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 25px;

  .h-search-ctr {
    border: 0.85px solid #d5d5d5;
    color: #222;
    padding: 10px 15px;

    border-radius: 5px;

    flex: 1;

    display: flex;

    .h-search-icon {
      padding-right: 8px;
    }

    input {
      width: 100%;
      border: 0;
      outline: 0;
    }
  }

  @media (max-width: 800px) {
    .h-search-ctr {
      display: none;
    }
  }

  .h-buttons {
    span {
      padding-inline: 4px;
    }
  }
`;

const MobileSearchContainer = styled.div`
  @media (min-width: 800px) {
    display: none;
  }

  display: flex;

  padding: 12px 24px;
  border-block: 0.96px solid #e5e5e5;

  .h-search-container {
    flex: 1;

    .h-search-icon {
      img {
        height: 20px;
      }

      padding-right: 4px;
    }

    .h-search-input {
      

      input {
        width: 75%;
      }
    }
  }
`;

const HeaderDesktop = () => {
  const [search, setSearch] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  return (
    <HeaderContainer>
      <div className="logo">
        <img src={GC9Logo.src} alt="Green Cloud Logo" />
      </div>
      <div className="h-search-ctr">
        <span className="h-search-icon">
          <img
            src={SearchIcon.src}
            width="18"
            height="18px"
            alt="search_icon"
          />
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="I'm looking for...."
        />
      </div>

      <div className="h-buttons">
        <span>
          <img src={LikeIcon.src} alt="saved_items" />
        </span>
        <span>
          <img src={UserIcon.src} alt="user_icon" />
        </span>
        <span>
          <img src={CartIcon.src} alt="cart_icon" />
        </span>
      </div>
    </HeaderContainer>
  );
};

const MobileSearch = () => {
  return (
    <MobileSearchContainer>
      <div className="h-search-container">
        <span className="h-search-icon">
          <img src={SearchIcon.src} alt="search_icon" />
        </span>
        <span className="h-search-input">
          <input type="text" placeholder="I'm looking for..." />
        </span>
      </div>
      <div className="h-menu-icon"></div>
    </MobileSearchContainer>
  );
};

export const HeaderWrapper = ({ Nav }) => {
  return (
    <HeaderWrapperContainer>
      <HeaderDesktop />
      <MobileSearch />
      {Nav && <Nav />}
    </HeaderWrapperContainer>
  );
};

export default HeaderWrapper;
