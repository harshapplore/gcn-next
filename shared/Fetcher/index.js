// This component is meant just for fetching user details & update redux store.

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "slices/user";
import { fetchCustomer } from "slices/customer";
import { fetchSeller } from "slices/seller";

const Fetcher = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { customer } = useSelector((state) => state.customer);
  const { seller } = useSelector((state) => state.seller);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    if (!user.id) dispatch(fetchUser());

    if (!customer.id && !seller.id) {
      const data = localStorage.getItem("data");
      const { type } = JSON.parse(data);

      if (type === "customer") dispatch(fetchCustomer());

      if (type === "seller") dispatch(fetchSeller());
    }
  }, []);

  return <> </>;
};

export default Fetcher;
