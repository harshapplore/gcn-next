import Head from "next/head";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUser } from "slices/user";

import Nav from "shared/Nav";
import Footer from "shared/Footer";

import Banner from "./Banner/banner";
import WeeklyProducts from "./WeeklyProducts";
import NewProducts from "./NewProducts";

const Home = () => {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {

    if(!isLoggedIn) {
      dispatch(fetchUser());
    }
  }, []);

  return (
    <>
      <Head>
        <title>Green Cloud Nine</title>
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
