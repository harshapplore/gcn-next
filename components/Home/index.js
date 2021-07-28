import Head from "next/head";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUser } from "@/slices/user";
import { fetchSeller } from "@/slices/seller";
import { fetchCustomer } from "@/slices/customer";

import Nav from "@/shared/Nav";
import Button from "@/shared/Button";
import Footer from "@/shared/Footer2";

import Banner from "./Banner/banner";
import WeeklyProducts from "./WeeklyProducts";
import NewProducts from "./NewProducts";

import styles from "./home.module.scss";

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
      <div className={styles["gcn-detail"]}>
        <h2> What is Green Cloud Nine? </h2>
        <div className={styles.text}>
          Morbi scelerisque malesuada quam ac hendrerit. Sed vitae metus velit.
          Phasellus eget enim id felis semper euismod. Nunc lacus ipsum,
          imperdiet quis congue vel, aliquam ut nunc. Aenean sed nulla vel velit
          sollicitudin tempus iaculis non risus. Donec urna quam, malesuada a
          convallis tempus, ullamcorper ut elit. Etiam tempus nec nulla eu
          cursus. Maecenas condimentum augue justo, ut accumsan erat
          pellentesque ac. Integer semper aliquam metus, eu maximus orci
          sollicitudin vel. Aenean mattis, est eu tempus mollis, enim lacus
          auctor enim, malesuada sagittis turpis lectus vel urna. Donec vel
          tincidunt purus. Nam id leo id mi fermentum congue eget sit amet
          ipsum. Quisque dictum leo ut congue imperdiet. Donec libero arcu,
          semper id sollicitudin malesuada, sodales vitae justo.
        </div>
        <Button type="secondary" name="Our Promise" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
