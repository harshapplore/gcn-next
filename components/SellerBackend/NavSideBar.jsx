import Link from "next/link";
import { useRouter } from "next/router";

import {
  BASE_ROUTE,
  PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  BILLING,
  SHIPPING,
  ORDER_HISTORY,
  BASIC_INFO,
  TERMS_N_CONDITIONS,
} from "./routes";

const NavLink = ({ to, text, current }) => {
  return (
    <Link href={to}>
      <a
        className={"tab-link-shop w-inline-block" + (current ? " current" : "")}
      >
        <div>{text}</div>
      </a>
    </Link>
  );
};

const NavSidebar = ({ activePage }) => {
  const router = useRouter();

  console.log(activePage);

  return (
    <div className="shop-filter popup-mobile">
      <div className="scroll-y">
        <div>
          <NavLink
            to={BASE_ROUTE + BASIC_INFO}
            text="Basic Information"
            current={activePage === BASIC_INFO}
          />
          <NavLink
            to={BASE_ROUTE + BILLING}
            text="Billing"
            current={activePage === BILLING}
          />
          <NavLink
            to={BASE_ROUTE + TERMS_N_CONDITIONS}
            text="Terms & Conditions"
            current={activePage === TERMS_N_CONDITIONS}
          />
          <NavLink
            to={BASE_ROUTE + PRODUCTS}
            text="Products"
            current={activePage === PRODUCTS}
          />
          <NavLink
            to={BASE_ROUTE + SHIPPING}
            text="Shipping"
            current={activePage === SHIPPING}
          />
          <NavLink
            to={BASE_ROUTE + ORDER_HISTORY}
            text="Order History"
            current={activePage === ORDER_HISTORY}
          />
        </div>
      </div>
      <div className="mobile-only">
        <div className="center">
          <a href="#" className="button gray w-inline-block">
            <div className="text-block">Clear</div>
          </a>
          <a href="#" className="button orange mx-10 w-inline-block">
            <div className="text-block">Apply</div>
          </a>
        </div>
      </div>
      <a href="#" className="shop-delete mobile-only w-inline-block">
        <img
          src="images/clear-black-24-dp.svg"
          loading="lazy"
          width={24}
          alt="Close"
        />
      </a>
    </div>
  );
};

export default NavSidebar;
