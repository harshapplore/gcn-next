import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { useSelector } from "react-redux";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";

import CartShopView from "./CartShopView";
import Shipping from "./Shipping";

import { createCheckout } from "controllers/payments";

const CheckOut = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);

  const [activePage, setActivePage] = useState();

  const [data, setData] = useState({});
  const [showShipping, setShowShipping] = useState();

  useEffect(() => {
    const { section } = router.query;
    setActivePage(section);
  }, [router.query]);

  const checkout = async () => {
    let products = data.order
      .map((shop) => shop.products)
      .flat()
      .map((product) => ({ ...product.product, quantity: product.quantity }));

    products = products.map((product) => ({
      price: product.price,
      quantity: product.quantity,
      name: product.name,
      images: product.images.length
        ? product.images.map((image) => image.url)
        : ["https://google.com/non"],
      quantity: product.quantity,
    }));

    console.log(data);

    const url = await createCheckout({
      email: user.email,
      payTypes: ["card"],
      deliveryCharges: data.totalDelivery,
      co2Compensation: data.co2Compensation,
      currency: "eur",
      items: products,
    });

    location.assign(url);
  };

  return (
    <>
      <Header nav={<Nav />} />
      <Head>
        <title>Cart | Green Cloud Nine</title>
      </Head>
      <div className="page-section">
        {!activePage && (
          <CartShopView
            data={data}
            setData={setData}
            goToShipping={() => setShowShipping(true)}
          />
        )}

        {showShipping && (
          <Shipping checkout={checkout} data={data} setData={setData} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
