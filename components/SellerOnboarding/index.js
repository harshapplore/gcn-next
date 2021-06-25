import React, { useState } from "react";

import Nav from "shared/Nav";
import Footer from "shared/Footer";

import PS1 from "./PS1";
import PS2 from "./PS2";
import ShopInfo from "./PS3";
import ContactInfo from "./PS4";
import GetPaidInfo from "./PS5";
import PaymentOptionsInfo from "./PS6";
import TermsNConditions from "./PS7";
import ShopName from "./PS8";
import ShopDetails from "./PS9";

const SellerOnboarding = () => {
  const [data, setData] = useState();
  const [activePage, setActivePage] = useState(1);
  const [activeSection, setActiveSection] = useState(1);

  const nextPage = () => {
    setActiveSection(1);
    setActivePage(activePage + 1);
  };

  const nextSection = () => {
    setActiveSection(activeSection + 1);
  };

  return (
    <>
      <Nav />

      {/* Let's get Started  */}
      {activePage === 1 && <PS1 nextPage={nextPage} />}

      {/* Choose Pricing Plan */}
      {activePage === 2 && <PS2 nextPage={nextPage} />}

      {/* Page 3 */}

      {activePage === 3 && (
        <>
          {activeSection === 1 && <ShopInfo next={nextSection} />}
          {activeSection === 2 && <ContactInfo next={nextSection} />}
          {activeSection === 3 && <GetPaidInfo next={nextSection} />}
          {activeSection === 4 && <PaymentOptionsInfo next={nextPage} />}
        </>
      )}

      {activePage === 4 && <TermsNConditions next={nextPage} />}

      {activePage === 5 && (
        <>
          {activeSection === 1 && <ShopName next={nextSection} />}
          {activeSection === 2 && <ShopDetails />}
        </>
      )}
      <Footer />
    </>
  );
};

export default SellerOnboarding;
