import Head from "next/head";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUser } from "@/slices/user";
import { fetchSeller } from "@/slices/seller";
import { fetchCustomer } from "@/slices/customer";

import Nav from "@/shared/Nav";
import Footer from "@/shared/Footer";

import Banner from "./Banner/banner";
import WeeklyProducts from "./WeeklyProducts";
import NewProducts from "./NewProducts";

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
      <Nav />
      <Banner />
      <WeeklyProducts />
      <NewProducts />
      <Footer />
    </>
  );
};

export default Home;
