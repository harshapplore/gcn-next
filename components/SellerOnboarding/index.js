import React, { useCallback, useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { fetchUser, fetchSeller } from "@/slices/user";

import Footer from "@/shared/Footer";
import Header from "@/shared/Header2";

import Nav from "./Nav";
import GetStarted from "./PS1";
import Pricing from "./Pricing";
import ShopInfo from "./PS3";
import ContactInfo from "./PS4";
import GetPaidInfo from "./PS5";
import PaymentOptionsInfo from "./PS6";
import TermsNConditions from "./PS7";
import ShopName from "./PS8";
import ShopDetails from "./PS9";


import { pages } from "./router";
import Seller_Intro from "./Seller_Intro";
import Seller_Nav from "./Seller_Nav";
import Seller_Basic_Info from "./Seller_Basic_Info";
import Seller_Vision_Strategy from "./Seller_Vision_Strategy";
import Seller_About_Done from "./Seller_About_Done";
import Seller_Price_Intro from "./Seller_Price_Intro";
import Seller_Price_Plan from "./Seller_Price_Plan";

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
      
      // console.log(router)
      // console.log(activePageIndex)
      // console.log(getUser())
      // console.log(getSeller())
    dispatch(fetchSeller());
  };

  return (
    <>
      <Head>
        <title> Seller Onboarding | Greeen Cloud Nine </title>
      </Head>
      <Header nav={<Seller_Nav />} />
      {/* Let's get Started  */}
      {activePageIndex === 0 && <Seller_Intro nextPage={nextPage} />}
      {/* {activePageIndex === 0 && <GetStarted nextPage={nextPage} />} */}
      {/* Basic info */}
      {activePageIndex === 1 && <Seller_Basic_Info nextPage={nextPage} />}
      {/* {activePageIndex === 1 && <Pricing nextPage={nextPage} />} */}
      {/* Choose Pricing Plan */}
      {/* Page 3 */} 
      {activePageIndex === 2 && <Seller_Vision_Strategy nextPage={nextPage} />}

      {/* {activePageIndex === 2 && <ShopInfo next={nextPage} />} */}
      {activePageIndex === 3 && <Seller_About_Done nextPage={nextPage} />}
      {/* {activePageIndex === 3 && <ContactInfo next={nextPage} />} */}
      {/* {activePageIndex === 4 && <GetPaidInfo next={nextPage} />} */}
      {activePageIndex === 4 && <Seller_Price_Intro nextPage={nextPage} />}
      {/* {activePageIndex === 5 && <PaymentOptionsInfo next={nextPage} />} */}
      {activePageIndex === 5 && < Seller_Price_Plan nextPage={nextPage} />}
      {/* Page 4 */}
      {activePageIndex === 6 && <TermsNConditions next={nextPage} />}
      {/* Page 5 */}
      {activePageIndex === 7 && <ShopName next={nextPage} />}
      {activePageIndex === 8 && <ShopDetails />}
      <Footer />
    </>
  );
};

export default SellerOnboarding;
