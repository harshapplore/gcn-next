import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import QS from "query-string";

const Block = ({ text, active, onClick }) => {
  return (
    <a
      className={"nav-link-shop w-inline-block" + (active ? " current" : "")}
      onClick={onClick}
    >
      <div>{text}</div>
    </a>
  );
};

const NavBlock = () => {
  const router = useRouter();
  const { query } = router;

  const blocks = [
    {
      text: "Products",
      tab: "products",
    },
    {
      text: "Certificates",
      tab: "certificates",
    },
    {
      text: "Terms & Conditions",
      tab: "terms-n-conditions",
    },
    {
      text: "About Us",
      tab: "about-us",
    },
  ];

  const onTabClick = (tab) => {
    const { query } = router;
    const { id, ...rest } = query;

    const q = { ...rest, tab };

    router.push(`/shop/${id}?${QS.stringify(q)}`);
  };

  return (
    <div className="shop-content pt-0">
      <div className="scroll-x">
        {blocks.map((block) => (
          <Block
            text={block.text}
            active={
              query.tab ? block.tab === query.tab : block.tab === "products"
            }
            onClick={() => onTabClick(block.tab)}
          />
        ))}
      </div>
    </div>
  );
};

export default NavBlock;
