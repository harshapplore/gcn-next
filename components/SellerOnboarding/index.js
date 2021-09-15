import React, { useCallback, useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { fetchUser, fetchSeller } from "@/slices/user";

import Footer from "@/shared/Footer";
import Header from "@/shared/Header2";


import { pages } from "./router";
import Seller_Intro from "./Seller_Intro";
import Seller_Nav from "./Seller_Nav";
import Seller_Basic_Info from "./Seller_Basic_Info";
import Seller_Vision_Strategy from "./Seller_Vision_Strategy";
import Seller_About_Done from "./Seller_About_Done";
import Seller_Price_Intro from "./Seller_Price_Intro";
import Seller_Price_Plan from "./Seller_Price_Plan";
import Seller_Governance_Management from "./Seller_Governance_Management";
import Seller_Social from "./Seller_Social";
import Seller_Environmental from "./Seller_Environmental";
import Seller_Price_Billing from "./Seller_Price_Billing";
import Seller_Shop_Info from "./Seller_Shop_Info";
import Seller_Shop_Terms from "./Seller_Shop_Terms";
import Seller_Shop_Shipping_Settings from "./Seller_Shop_Shipping_Settings";
import Seller_Shop_Details from "./Seller_Shop_Details";

const SellerOnboarding = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, seller } = useSelector((state) => state.user);

  const [activePageIndex, setActivePageIndex] = useState(0);

  const getUser = useCallback(() => dispatch(fetchUser()), [dispatch]);
  const getSeller = useCallback(() => dispatch(fetchSeller()), [dispatch]);
  
  
  useEffect(() => {
    window.scrollTo(0, 35);

    const { section } = router.query;


    const index = pages.findIndex((page) => page === section);

    if (!user.id) getUser();
    if (!seller.id) getSeller();

    if (index === -1) {
      setActivePageIndex(0);
      return;
    }
    
    setActivePageIndex(index);
  }, [router]);

  const nextPage = () => {
    activePageIndex <= pages.length
    ? router.push("/seller-onboarding/" + pages[activePageIndex + 1])
      : router.push("/seller-onboarding/" + pages[activePageIndex]);
    dispatch(fetchSeller());
  };

  return (
    <>
      <Head>
        <title> Seller Onboarding | Greeen Cloud Nine </title>
      </Head>
      <Header nav={<Seller_Nav />} />
      {activePageIndex === 0 && <Seller_Intro nextPage={nextPage} />}
      {activePageIndex === 1 && <Seller_Basic_Info nextPage={nextPage} />}
      {activePageIndex === 2 && <Seller_Vision_Strategy nextPage={nextPage} />}
      {activePageIndex === 3 && <Seller_Governance_Management nextPage={nextPage} />}
      {activePageIndex === 4 && <Seller_Social nextPage={nextPage} />}
      {activePageIndex === 5 && <Seller_Environmental nextPage={nextPage} />}
      {activePageIndex === 6 && <Seller_About_Done nextPage={nextPage} />}
      {activePageIndex === 7 && <Seller_Price_Intro nextPage={nextPage} />}
      {activePageIndex === 8 && < Seller_Price_Plan nextPage={nextPage} />}
      {activePageIndex === 9 && < Seller_Price_Billing nextPage={nextPage} />}
      {activePageIndex === 10 && <Seller_Shop_Info nextPage={nextPage} />}
      {activePageIndex === 11 && <Seller_Shop_Terms nextPage={nextPage} />}
      {activePageIndex === 12 && <Seller_Shop_Shipping_Settings nextPage={nextPage} />}
      {activePageIndex === 13 && <Seller_Shop_Details />}
      <Footer />
    </>
  );
};

export default SellerOnboarding;
