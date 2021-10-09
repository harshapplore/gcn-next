import Head from "next/head";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";
import Fetcher from "@/shared/Fetcher";


import View from "./View";
import { useSelector } from "react-redux";

const SellerInfo = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <title>Seller Info | Green Cloud Nine</title>
      </Head>
      <Header nav={<Nav />} />
      <Fetcher />
      <View />
      <Footer />
    </>
  );
};

export default SellerInfo;
