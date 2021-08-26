import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  CONTACT,
  PASSWORD,
  SHOP_INFO,
  PAYMENT_AND_BILLING,
  ASSESMENTS_AND_PREFERENCES,
  TERMS_AND_CONDITIONS,
  SHIPPING_SETTINGS,
  DELETE_ACCOUNT,
} from "./routes";

const NavLink = ({ name, link, isActive }) => {
  return (
    <Link href={link}>
      <a className={"settings-link" + (isActive ? " current" : "")}>{name} </a>
    </Link>
  );
};

const Nav = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab("/" + router.query.tab || "/");
  }, [router.query]);

  const linkFactory = (path) => `/seller/settings${path}`;

  const links = [
    {
      name: "Contact",
      link: linkFactory(CONTACT),
    },
    {
      name: "Password",
      link: linkFactory(PASSWORD),
    },
    {
      name: "Shop Information",
      link: linkFactory(SHOP_INFO),
    },
    {
      name: "Payments and Billing",
      link: linkFactory(PAYMENT_AND_BILLING),
    },
    {
      name: "Terms & Conditions",
      link: linkFactory(TERMS_AND_CONDITIONS),
    },
    {
      name: "Shipping Setting",
      link: linkFactory(SHIPPING_SETTINGS),
    },
    {
      name: "Assessments & Preferences",
      link: linkFactory(ASSESMENTS_AND_PREFERENCES),
    },
    {
      name: "Delete Account",
      link: linkFactory(DELETE_ACCOUNT),
    },
  ];

  return (
    <div className="settings-nav">
      {links &&
        links.length > 0 &&
        links.map((link) => (
          <NavLink
            name={link.name}
            link={link.link}
            isActive={link.link === linkFactory(activeTab)}
          />
        ))}
    </div>
  );
};

export default Nav;
