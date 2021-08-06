import Head from "next/head";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";

import View from "./View";

const SellerInfo = () => {
  return (
    <>
      <Head>
        <title>Seller Info | Green Cloud Nine</title>
      </Head>
      <Header nav={<Nav />} />
      <View />
      <Footer />
    </>
  );
};

export default SellerInfo;
