import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Nav from "./nav";

import Contact from "./sections/contact";
import Password from "./sections/password";
import ShopInfo from "./sections/shop-info";
import Payments from "./sections/payments-and-billing";
import TermsAndConditions from "./sections/terms-and-conditions";
import AssessmentsAndPrefernces from "./sections/assessments-and-perferences";
import ShippingSettings from "./sections/Shipping";
import DeleteAccount from "./sections/delete";

import {
  CONTACT,
  PASSWORD,
  PAYMENT_AND_BILLING,
  TERMS_AND_CONDITIONS,
  SHIPPING_SETTINGS,
  ASSESMENTS_AND_PREFERENCES,
  DELETE_ACCOUNT,
  SHOP_INFO,
} from "./routes";

import { getShop, updateShop } from "@/_controllers/shop";

const AccountSettings = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("");

  const { seller } = useSelector((state) => state.seller);

  const [_shop, _setShop] = useState([]);

  useEffect(() => {
    let tab = router.query && router.query.tab;

    if (!tab) {
      setActiveTab(CONTACT);
      return;
    }

    tab = "/" + tab;

    if (tab === CONTACT) setActiveTab(CONTACT);
    if (tab === PASSWORD) setActiveTab(PASSWORD);
    if (tab === SHOP_INFO) setActiveTab(SHOP_INFO);
    if (tab === PAYMENT_AND_BILLING) setActiveTab(PAYMENT_AND_BILLING);
    if (tab === TERMS_AND_CONDITIONS) setActiveTab(TERMS_AND_CONDITIONS);
    if (tab === SHIPPING_SETTINGS) setActiveTab(SHIPPING_SETTINGS);
    if (tab === ASSESMENTS_AND_PREFERENCES)
      setActiveTab(ASSESMENTS_AND_PREFERENCES);
    if (tab === DELETE_ACCOUNT) setActiveTab(DELETE_ACCOUNT);
  }, [router.query]);

  useEffect(async () => {
    if (!seller.id) return;

    const shop = await getShop(seller.shop.id);

    _setShop(shop);
  }, [seller]);

  return (
    <div className="shop-content">
      <h2 className="headline-4 mb-30">My Account Settings</h2>
      <Nav />
      {activeTab === CONTACT && <Contact />}
      {activeTab === PASSWORD && <Password />}
      {activeTab === SHOP_INFO && <ShopInfo />}
      {activeTab === PAYMENT_AND_BILLING && <Payments />}
      {activeTab === TERMS_AND_CONDITIONS && <TermsAndConditions />}
      {activeTab === SHIPPING_SETTINGS && <ShippingSettings shop={_shop} />}
      {activeTab === ASSESMENTS_AND_PREFERENCES && <AssessmentsAndPrefernces />}
      {activeTab === DELETE_ACCOUNT && <DeleteAccount />}
    </div>
  );
};

export default AccountSettings;
