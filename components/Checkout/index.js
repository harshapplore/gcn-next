import { useState, useEffect } from "react";
import Head from "next/head";
import router, { useRouter } from "next/router";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";

import CheckoutMessage from "./CheckoutMessage";

const Checkout = () => {
  const router = useRouter();

  const [ success, setSuccess ] = useState();

  useEffect(() => {
    const { success } = router.query;

    setSuccess(success);
  }, [router.query]);

  return (
    <>
      <Head> Order Confirmation | Green Cloud Nine </Head>
      <Header nav={<Nav />} />
      {success && <CheckoutMessage />}
      <Footer />
    </>
  );
};

export default Checkout;
