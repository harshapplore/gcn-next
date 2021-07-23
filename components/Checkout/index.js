import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Nav from "shared/Nav";

import CartShopView from "./CartShopView";
import SND from "./ShippingNDelivery";
import Payment from "./Payment";
import ItemView from "./ItemView";
import CheckoutMessage from "./CheckoutMessage";

const CheckOut = () => {
  const router = useRouter();

  const [activePage, setActivePage] = useState();

  useEffect(() => {
    const { section } = router.query;

    if (!section) setActivePage(null);

    if (section) setActivePage(section);
  }, [router.query]);

  return (
    <>
      <Nav />
      <div className="page-section">
        {activePage === "cart" && <CartShopView />}

        {activePage === "shipping-and-billing" && <SND />}

        {activePage === "payment" && <Payment />}

        {activePage === "Order Confirmation" && <ItemView />}

        {activePage === "checkout" && <CheckoutMessage />}
      </div>
    </>
  );
};

export default CheckOut;
