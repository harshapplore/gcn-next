import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";

import {
  BASE_ROUTE,
  PRODUCTS,
  ORDER_HISTORY,
  ACCOUNT_AND_SHOP_SETTING
} from "@/components/SellerBackend/routes";

const NavLinkContainer = styled.div`
  cursor: pointer;

  padding: 8px 12px;
  margin: 8px 0;
  color: ${({current}) => current? 'var(--secondary)' : 'inherit' };
  border-left: 2px solid ${({current}) => current? 'var(--secondary)' : 'inherit' };

  font-weight: 400;
`;

const NavLink = ({ to, text, current }) => {
  return (
    <Link href={to}>
      <a>
        <NavLinkContainer current={current}> {text}</NavLinkContainer>
      </a>
    </Link>
  );
};

const Sidebar = ({}) => {
  const router = useRouter();
  const [activePage, setActivePage] = useState();

  useEffect(() => {
    const {section} = router.query;
    if(!section) setActivePage();
    if(section) setActivePage('/'+section);
  }, [router.query]);

  return (
    <div>
      <NavLink
        to={BASE_ROUTE + ACCOUNT_AND_SHOP_SETTING}
        text="Account and Shop Settings"
        current={activePage === ACCOUNT_AND_SHOP_SETTING}
      />
      <NavLink
        to={BASE_ROUTE + PRODUCTS}
        text="Products"
        current={activePage === PRODUCTS}
      />
      <NavLink
        to={BASE_ROUTE + ORDER_HISTORY}
        text="Order History"
        current={activePage === ORDER_HISTORY}
      />
    </div>
  );
};

export default Sidebar;
