import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { fetchSeller } from "@/slices/user";

import Fetcher from "@/shared/Fetcher";
import Header from "@/shared/Header2";
import Footer from "@/shared/Footer";
import Nav from "@/shared/Nav2";

import ShopBanner from "@/shared/Shop2/Banner";
import ShopNav from "@/shared/Shop2/Nav";
import Sidebar from "@/shared/Shop2/Sidebar";
import styles from "./backend.module.scss";

import {
  PRODUCTS,
  SHIPPING,
  ORDER_HISTORY,
  ACCOUNT_AND_SHOP_SETTING,
} from "./routes";

import Products from "./Products";
import ConfigProduct from "./Products/ConfigProduct";
import OrderHistory from "./OrderHistory";
import Settings from "./Settings";

import { scrollToElement } from "@/utils/scroll";
import { route } from "next/dist/server/router";

const SellerBackend = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.user);

  console.log(seller)
  const [activePage, setActivePage] = useState();
  const [activeAction, setActiveAction] = useState();

  useEffect(() => {
    if (!seller.id) dispatch(fetchSeller());
    if (!seller.shop) router.push("/")
  }, []);

  useEffect(() => {
    const { query } = router;

    const section = "/" + query.section;
    const { action } = query;

    if (!section) setActivePage(PRODUCTS);
    if (section === PRODUCTS) setActivePage(PRODUCTS);
    if (section === SHIPPING) setActivePage(SHIPPING);
    if (section === ORDER_HISTORY) setActivePage(ORDER_HISTORY);
    if (section === ACCOUNT_AND_SHOP_SETTING) setActivePage(ACCOUNT_AND_SHOP_SETTING);

    setActiveAction(action);
  }, [router]);

  useEffect(() => {
    scrollToElement("#backend-view");
  }, [router.query]);

  return (
    <>
      <Header nav={<Nav />} />
      <Fetcher />
      <div className="page-section pt-0">
        <ShopBanner edit={true} />
        <ShopNav isSellerPage edit={true}/>

        <div className={styles["shop-main-ctr"]}>
          <div className={styles["side-ctr"]} id="backend-view">
            <Sidebar activePage={activePage} />
          </div>
          <div className={styles["right-ctr"]}>
            {activePage === ACCOUNT_AND_SHOP_SETTING && <Settings />}

            {!activeAction && activePage === PRODUCTS && <Products />}
            {activeAction === "add" && activePage === PRODUCTS && (
              <ConfigProduct action={activeAction} />
            )}

            {activeAction === "edit" && activePage === PRODUCTS && (
              <ConfigProduct action={activeAction} />
            )}

            {activePage === SHIPPING && <Shipping />}
            {activePage === ORDER_HISTORY && <OrderHistory />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SellerBackend;
