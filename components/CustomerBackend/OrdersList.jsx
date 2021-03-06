import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { getAllOrders } from "@/_controllers/customer";

import { ORDER_LIST } from "./routes";
import Order from "./Order.jsx";
import AppLoader from "@/utils/AppLoader/AppLoader";

const List = ({ order }) => {
  const [_date, _setDate] = useState();

  const router = useRouter();

  useEffect(() => {
    _setDate(new Date(order.createdAt));
  }, [order.createdAt]);

  return (
    <div className="order-item">
      <div className="order-row-item">
        <div>
          {_date &&
            _date.getDate() +
              "." +
              (_date.getMonth() < 10 ? "0" : "") +
              _date.getMonth() +
              "." +
              _date.getFullYear()}
        </div>
      </div>
      <div className="order-row-item">
        <div>{order.id}</div>
      </div>
      <div className="order-row-item">
        <div>{order.status}</div>
      </div>
      <div className="order-row-item">
        <div>€ {order.total}</div>
      </div>
      <div
        className="button-row order-row-item"
        onClick={() => router.push(ORDER_LIST + `/${order.id}`)}
      >
        <a className="button w-button">Details</a>
      </div>
    </div>
  );
};

const OrdersList = () => {
  const { customer } = useSelector((state) => state.customer);

  const [_orders, _setOrders] = useState([]);
  const { user } = useSelector((state) => state.user);

  const [loadingOrders, setLoadingOrders] = useState(false);

  useEffect(async () => {
    getOrders();
  }, [customer]);

  const getOrders = async () => {
    setLoadingOrders(true);
    const orders = await getAllOrders({ customerId: user._id });
    _setOrders(orders);
    setLoadingOrders(false);
  };

  return (
    <div className="dynamic-content">
      <div className="heading-wrapper mb-40">
        <h2>Order History</h2>
      </div>
      <div className="order-wrapper">
        {loadingOrders && <AppLoader />}
        {!_orders.length && "You have not placed any orders as of yet."}
        {_orders &&
          _orders.length > 0 &&
          _orders.map((order) => <Order order={order} getOrders={getOrders} />)}
      </div>
    </div>
  );
};

export default OrdersList;
