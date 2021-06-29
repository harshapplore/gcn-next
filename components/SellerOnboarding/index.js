import React, { useState } from "react";

import Head from "next/head";

import Nav from "shared/Nav";
import Footer from "shared/Footer";

import GetStarted from "./PS1";
import Pricing from "./PS2";
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
    window.scrollTo(0, 0);
    setActiveSection(1);
    setActivePage(activePage + 1);
  };

  const nextSection = () => {
    window.scrollTo(0, 0);
    setActiveSection(activeSection + 1);
  };

  return (
    <>
      <Head>
        <title> Seller Onboarding | Greeen Cloud Nine </title> 
      </Head> 
      <Nav />

      {/* Let's get Started  */}
      {activePage === 1 && <GetStarted nextPage={nextPage} />}

      {/* Choose Pricing Plan */}
      {activePage === 2 && <Pricing nextPage={nextPage} />}

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
