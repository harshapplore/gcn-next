import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
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
  BASE_ROUTE,
  BASIC_INFO,
  BILLING,
  TERMS_N_CONDITIONS,
  PRODUCTS,
  SHIPPING,
  ORDER_HISTORY,
} from "./routes";

import Products from "./Products";
import OrderHistory from "./OrderHistory";
import Shipping from "./Shipping";
import ConfigProduct from "./ConfigProduct";

import { scrollToElement } from "@/utils/scroll";

const SellerBackend = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.user);

  const [activePage, setActivePage] = useState();
  const [activeAction, setActiveAction] = useState();

  useEffect(() => {
    if (!seller.id) dispatch(fetchSeller());
  }, []);

  useEffect(() => {
    const { query } = router;

    const section = "/" + query.section;
    const { action } = query;

    if (!section) setActivePage(PRODUCTS);
    if (section === PRODUCTS) setActivePage(PRODUCTS);
    if (section === SHIPPING) setActivePage(SHIPPING);
    if (section === ORDER_HISTORY) setActivePage(ORDER_HISTORY);

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
        <ShopBanner />
        <ShopNav isSellerPage />

        <div className={styles["shop-main-ctr"]}>
          <div className={styles["side-ctr"]} id="backend-view">
            <Sidebar activePage={activePage} />
          </div>
          <div className={styles["right-ctr"]}>
            <div className="container">
              <div className="flex top">
                {/* <div className="shop-content"> */}
                {/* <!-- Add here --> */}
                {!activeAction && activePage === PRODUCTS && <Products />}
                {activeAction === "add" && activePage === PRODUCTS && (
                  <ConfigProduct action={activeAction} />
                )}

                {activeAction === "edit" && activePage === PRODUCTS && (
                  <ConfigProduct action={activeAction} />
                )}
              </div>
            </div>
            
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
