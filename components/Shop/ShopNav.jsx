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
      text: "About Us",
      tab: "about-us",
    },
    {
      text: "Certificates",
      tab: "certificates",
    },
    {
      text: "Terms & Conditions",
      tab: "terms-n-conditions",
    },
  ];

  const onTabClick = (tab) => {
    const { query } = router;
    const { id, ...rest } = query;

    const q = { ...rest, tab };

    router.push(`/shop/${id}?${QS.stringify(q)}`);
  };

  return (
    <div className="nav-area">
    <div className="shop-content pt-0">
      <div className="scroll-x">
        {blocks.map((block, index) => (
          <Block
            key={"block-" + index}
            text={block.text}
            active={
              query.tab ? block.tab === query.tab : block.tab === "products"
            }
            onClick={() => onTabClick(block.tab)}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default NavBlock;
