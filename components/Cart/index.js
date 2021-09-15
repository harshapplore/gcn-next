import { useState, useEffect } from "react";
import Head from "next/head";

import { useSelector, useDispatch } from "react-redux";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";
import Fetcher from "@/shared/Fetcher";

import { loadCart } from "@/slices/cart";
import { getCheckoutUrl } from "@/_controllers/payments";

import CartContext from "./cart.context";
import CartShopView from "./CartShopView";
import Shipping from "./Shipping";

import {
  getShopView,
  getProductView,
  getSubTotalPrice,
  getSubTotalDelivery,
} from "./cart.methods";

import {
  getCart,
  saveCart,
  getShopsMeta,
  saveShopsMeta,
} from "@/_methods/cart";

import { getShop } from "@/_controllers/shop";
import shop from "@/slices/shop";



const Cart = () => {
  const dispatch = useDispatch();

  const { customer } = useSelector((state) => state.customer);
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);

  const [showShipping, setShowShipping] = useState();

  const [shops, setShops] = useState([]);
  const [shopsMeta, setShopsMeta] = useState([]);
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
    shopsMeta,
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
    setShopsMeta,
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

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  useEffect(async () => {
    if (cart && cart.length > 0) setProducts(cart);
    else setProducts([]);
  }, [cart]);

  useEffect(() => {
    if (!products) return;

    const shops = getShopView(products);
    setShops(shops);

    const savedShopMeta = getShopsMeta();

    const shopsMeta = shops.map((shop) => {
      const price = getSubTotalPrice(shop.products);
      const delivery = getSubTotalDelivery(shop.products);

      const index = savedShopMeta.findIndex(
        (meta) => shop.shopId === meta.shopId
      );

      return {
        shopId: shop.shopId,
        pickUp: index !== -1 ? savedShopMeta[index].pickUp : false,
        price,
        delivery,
        subtotal: price + delivery,
      };
    });

    setShopsMeta(shopsMeta);
  }, [products]);

  useEffect(async () => {
    if (!shops || !shops.length) return;

    const products = getProductView(shops);

    saveCart(products);

    const savedShopMeta = getShopsMeta();

    const shopsMeta = shops.map((shop) => {
      const price = getSubTotalPrice(shop.products);
      const delivery = getSubTotalDelivery(shop.products);

      const index = savedShopMeta.findIndex(
        (meta) => shop.shopId === meta.shopId
      );

      return {
        shopId: shop.shopId,
        pickUp: index !== -1 ? savedShopMeta[index].pickUp : false,
        price,
        delivery,
        subtotal: price + delivery,
      };
    });

    setShopsMeta(shopsMeta);
  }, [shops]);

  useEffect(() => {
    if (!shopsMeta || !shopsMeta.length) return;

    saveShopsMeta(shopsMeta);
  }, [shopsMeta]);

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
        shopsMeta
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
