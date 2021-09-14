import Head from "next/head";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUser } from "@/slices/user";
import { fetchSeller } from "@/slices/seller";
import { fetchCustomer } from "@/slices/customer";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Button from "@/shared/Button";
import Footer from "@/shared/Footer";

import Banner from "./Banner/banner";
import WeeklyProducts from "./WeeklyProducts";
import NewProducts from "./NewProducts";

import GreenCloudNine from "./GreenCloudNine";

const Home = () => {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const { customer } = useSelector((state) => state.customer);
  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(fetchUser());
    }
  }, []);

  useEffect(() => {
    if (user) {
      if (user.type === "customer" && !customer.id) dispatch(fetchCustomer());
      if (user.type === "seller" && !seller.id) dispatch(fetchSeller());
    }
  }, [user]);

  return (
    <>
      <Head>
        <title> Green Cloud Nine </title>
      </Head>
      <Header nav={<Nav />}/>
      <Banner />
      <WeeklyProducts />
      <NewProducts />
      {/* <GreenCloudNine /> */}
      <Footer />
    </>
  );
};

export default Home;
