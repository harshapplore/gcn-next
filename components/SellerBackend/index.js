import Nav from "@/shared/Nav";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { fetchSeller } from "@/slices/user";

import ShopBanner from "@/shared/Shop/Banner";
import Fetcher from "@/shared/Fetcher";

import ShopHeading from "@/shared/Shop/Heading";
import ShopNav from "@/shared/Shop/Nav";
import NavSidebar from "./NavSideBar";


import {
  BASE_ROUTE,
  BASIC_INFO,
  BILLING,
  TERMS_N_CONDITIONS,
  PRODUCTS,
  SHIPPING,
  ORDER_HISTORY,
  ADD_PRODUCT,
  EDIT_PRODUCT,
} from "./routes";

import Products from "./Products";
import OrderHistory from "./OrderHistory";
import Shipping from "./Shipping";
import ConfigProduct from "./ConfigProduct";

const SellerBackend = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.user);

  const [activePage, setActivePage] = useState();
  const [activeAction, setActiveAction] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

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

  return (
    <>
      <Nav />
      <div className="page-section pt-0">
        <ShopBanner />
        <ShopNav />

        <div className="container">
          <div className="flex top">
            <NavSidebar activePage={activePage} />
            <div className="shop-content">
              <ShopHeading />

              {/* <!-- Add here --> */}

              {!activeAction && activePage === PRODUCTS && <Products />}
              {activeAction === 'add' && activePage === PRODUCTS && (
                <ConfigProduct action={activeAction} />
              )}

              {activeAction=== 'edit' && activePage === PRODUCTS && (
                <ConfigProduct action={activeAction}  />
              )}

              {activePage === SHIPPING && <Shipping />}
              {activePage === ORDER_HISTORY && <OrderHistory />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerBackend;
