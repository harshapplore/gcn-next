import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("");

  const { query } = router;

  const tabs = [
    {
      name: "Description",
      key: "description",
    },
    {
      name: "Reviews",
      key: "reviews",
    },
    // {
    //   name: "Questions",
    //   key: "questions",
    // },
    {
      name: "Terms & Conditions",
      key: "terms-n-conditions",
    },
  ];

  useEffect(() => {
    if (!query.tab) setActiveTab(0);

    const index = tabs.findIndex((tab) => tab.key === query.tab);

    setActiveTab(index);
    ``;
  }, [query]);

  return (
      <div className="nav-area seller-item-detail">
        <div className="container">
          <div className="scroll-x">
            {tabs.map((tab, index) => (
              <a
                key={"tab-" + index}
                className={
                  "nav-link-shop w-inline-block" +
                  (index === activeTab ? " current" : "")
                }
                onClick={() =>
                  router.push(`/product/${query.id}?tab=${tab.key}`)
                }
              >
                <div>{tab.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Nav;
