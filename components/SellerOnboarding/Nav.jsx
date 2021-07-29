import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./nav.module.scss";

import { pages } from "./router";

const Nav = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "About You",
      link: `/seller-onboarding/${pages[0]}`,
    },
    {
      name: "Pricing",
      link: `/seller-onboarding/${pages[1]}`,
    },
    {
      name: "Administration",
      link: `/seller-onboarding/${pages[2]}`,
    },
    {
      name: "Terms & Conditions",
      link: `/seller-onboarding/${pages[5]}`,
    },
    {
      name: "Appeareance",
      link: `/seller-onboarding/${pages[6]}`,
    },
  ];

  useEffect(() => {
    if (!router.query) {
      setActiveTab(0);
    }

    console.log(router.query);
  }, [router]);

  return (
    <div className={styles.nav}>
      {tabs.map((tab, index) => {
        const classes = [styles.tab];

        if (activeTab === index) classes.push(styles.active);

        return (
          <div
            key={"nav" + index}
            className={classes.join(" ")}
            onClick={() => router.push(tab.link)}
          >
            {tab.name}
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
