import { useState, useEffect } from "react";
import Head from "next/head";

import { useSelector } from "react-redux";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";
import Fetcher from "@/shared/Fetcher";

import { getCartProducts } from "@/controllers/customer";
import { getCheckoutUrl } from "@/controllers/payments";

import CartContext from "./cart.context";
import CartShopView from "./CartShopView";
import Shipping from "./Shipping";

import { getShopView } from "./cart.methods";

const Cart = () => {
  const { customer } = useSelector((state) => state.customer);
  const { user } = useSelector((state) => state.user);

  const [showShipping, setShowShipping] = useState();

  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [shipping, setShipping] = useState({});
  const [billing, setBilling] = useState({});
  const [pickUpOrder, setPickUpOrder] = useState(false);
  const [gift, setGift] = useState({ gift: false, giftMessage: "" });
  const [subTotals, setSubTotals] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDelivery, setTotalDelivery] = useState(0);
  const [co2Compensation, setCo2Compensation] = useState(0);
  const [total, setTotal] = useState(0);

  const value = {
    shops,
    products,
    shipping,
    billing,
    products,
    subTotals,
    gift,
    pickUpOrder,
    totalPrice,
    totalDelivery,
    co2Compensation,
    total,
    setShops,
    setProducts,
    setBilling,
    setGift,
    setPickUpOrder,
    setShipping,
    setSubTotals,
    setTotalPrice,
    setTotalDelivery,
    setCo2Compensation,
    setTotal,
  };

  useEffect(async () => {
    const products = await getCartProducts({ user: user.id });
    setProducts(products);
  }, []);

  useEffect(() => {
    const shops = getShopView(products);
    setShops(shops);
  }, [products]);

  const checkout = async () => {
    let products = shops.map((shop) => shop.products).flat();

    products = products.map((product) => ({
      ...product,
      images: product.images.length
        ? product.images.map((image) => image.url)
        : ["https://google.com/non"],
    }));

    const url = await getCheckoutUrl({
      customerId: customer.id,
      userId: user.id,
      email: user.email,
      payTypes: ["card"],
      deliveryCharges: totalDelivery,
      currency: "eur",
      ...gift,
      products,
      co2Compensation,
      pickUpOrder,
      billing,
      shipping,
      total,
      snapshot: {
        shops,
        subTotals,
        shipping,
        billing,
      },
    });

    location.assign(url);
  };

  return (
    <>
      <Header nav={<Nav />} />
      <Head>
        <title>Cart | Green Cloud Nine</title>
      </Head>
      <Fetcher />

      <CartContext.Provider value={value}>
        <div className="page-section">
          <CartShopView goToShipping={() => setShowShipping(true)} />

          {showShipping && <Shipping checkout={checkout} />}
        </div>
        <Footer />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
