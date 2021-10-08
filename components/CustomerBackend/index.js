import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";

import Fetcher from "@/shared/Fetcher";

import Order from "./Order";
import OrdersList from "./OrdersList";
import Favorites from "./Favorites";

import { FAVORITES, ORDER_LIST, ACCOUNT_SETTINGS } from "./routes";
// import Settings from "./Settings";
import NewSettings from "./NewSettings";

const CustomerBackend = () => {
  const router = useRouter();

  const { customer } = useSelector((state) => state.customer);
  
  const [activeTab, setActiveTab] = useState(0);
  const [orderId, setOrderId] = useState();

  useEffect(() => {
    const { section, orderId } = router.query;

    if (!section) {
      setActiveTab(0);
      return;
    }

    if (section === FAVORITES.split("/").pop()) {
      setActiveTab(0);
    }

    if (section === ORDER_LIST.split("/").pop()) {
      setActiveTab(1);
    }
    if (section === ACCOUNT_SETTINGS.split("/").pop()) {
      setActiveTab(2);
    }

    if (orderId) setOrderId(orderId);
    else setOrderId(null);
  }, [router.query]);

  console.log(customer)
  return (
    <>
      <Head> <title> {customer.user && customer.user.name} | Green Cloud Nine </title></Head>
      <Header nav={<Nav />} />
      <Fetcher />
      <div>
        {/* <div className="page-section-alert wf-section">
          <div className="container">
            <div>
              This is some text inside of a <a className="white-link">div</a>{" "}
              block.
            </div>
          </div>
        </div> */}
        <div className="page-section wf-section">
          <div className="container">
            <div className="flex mb-5">
              <div className="shop-filter">
                <div className="logo-floater lower">
                  <img
                    src={customer.user?.image || "/images/bild-header2x.jpg"}
                    loading="lazy"
                    sizes="(max-width: 479px) 110px, (max-width: 767px) 140px, 200px"
                    alt={customer.user && customer.user.name}
                    className="logo-img"
                  />
                  <div className="mobile-title">
                    <h1>Hello {customer.user && customer.user.name}!</h1>
                    <div className="overline-text mb-40">
                      Nice to see you today
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-content hide-mobile">
                <h1>Hello {customer.user && customer.user.name}!</h1>
              </div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="shop-filter">
                <div>
                  <a
                    className={
                      "tab-link-shop w-inline-block" +
                      (activeTab === 0 ? " current" : "")
                    }
                    onClick={() => router.push(FAVORITES)}
                  >
                    <div>Favorites</div>
                  </a>
                  <div
                    className={
                      "tab-link-shop w-inline-block" +
                      (activeTab === 1 ? " current" : "")
                    }
                    onClick={() => router.push(ORDER_LIST)}
                  >
                    <div>Order History</div>
                  </div>
                  <div
                    className={
                      "tab-link-shop w-inline-block" +
                      (activeTab === 2 ? " current" : "")
                    }
                    onClick={() => router.push(ACCOUNT_SETTINGS)}
                  >
                    <div>Account Settings</div>
                  </div>
                </div>
              </div>

              <div className="shop-content pt-0">
                {activeTab === 0 && <Favorites />}
                {activeTab === 1 && !orderId && <OrdersList />}
                {activeTab === 1 && orderId && <Order orderId={orderId}/>}
                {/* {activeTab === 2 && <Settings />} */}
                {activeTab === 2 && <NewSettings />}
                {/* {activeTab === 2 && "Hello world"} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerBackend;
