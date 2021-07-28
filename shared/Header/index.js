import {useState, useEffect } from "react";

import styled from "styled-components";
import GC9Logo from "@/assets/icons/gcn-logo.svg";
import SearchIcon from "@/assets/icons/search.svg";

const HeaderContainer = styled.div`
  padding: 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 25px;

  .h-search-ctr{

    border: 0.85px solid #d5d5d5;
    color: #222;
    padding: 10px 15px;

    flex: 1;

    display: flex;

    .h-search-icon{
      padding-right: 8px;
    }

    input{
      width: 100%;
      border: 0;
      outline: 0;
    }
  }

`

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <HeaderContainer>
      <div className="logo">
        <img src={GC9Logo.src} alt="Green Cloud Logo" />
      </div>
      <div className="h-search-ctr">
        <span className="h-search-icon"> <img src={SearchIcon.src} width="18" height="18px" alt="search_icon" /> </span>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="I'm looking for...."/>
      </div>
    </HeaderContainer>
  );
};

export default Header;
