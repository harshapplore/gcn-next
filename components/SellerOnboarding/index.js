import React, { useCallback, useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { fetchUser, fetchSeller } from "@/slices/user";

import Nav from "@/shared/Nav";
import Footer from "@/shared/Footer";

import GetStarted from "./PS1";
import Pricing from "./PS2";
import ShopInfo from "./PS3";
import ContactInfo from "./PS4";
import GetPaidInfo from "./PS5";
import PaymentOptionsInfo from "./PS6";
import TermsNConditions from "./PS7";
import ShopName from "./PS8";
import ShopDetails from "./PS9";

import { pages } from "./router";

const SellerOnboarding = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, seller } = useSelector((state) => state.user);

  const [activePageIndex, setActivePageIndex] = useState(0);

  const getUser = useCallback(() => dispatch(fetchUser()), [dispatch]);
  const getSeller = useCallback(() => dispatch(fetchSeller()), [dispatch]);

  useEffect(() => {
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
      <Nav />
      {/* Let's get Started  */}
      {activePageIndex === 0 && <GetStarted nextPage={nextPage} />}
      {/* Choose Pricing Plan */}
      {activePageIndex === 1 && <Pricing nextPage={nextPage} />}
      {/* Page 3 */}
      {activePageIndex === 2 && <ShopInfo next={nextPage} />}
      {activePageIndex === 3 && <ContactInfo next={nextPage} />}
      {activePageIndex === 4 && <GetPaidInfo next={nextPage} />}
      {activePageIndex === 5 && <PaymentOptionsInfo next={nextPage} />}
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
