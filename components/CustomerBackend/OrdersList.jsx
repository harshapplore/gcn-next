import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { getAllOrders } from "@/controllers/customer";

import { ORDER_LIST } from "./routes";

const List = ({ order }) => {
  const [_date, _setDate] = useState();

  const router = useRouter();

  useEffect(() => {
    _setDate(new Date(order.createdAt));
  }, [order.createdAt]);

  return (
    <div className="order-item">
      <div className="date-row">
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
      <div className="id-row">
        <div>{order.id}</div>
      </div>
      <div className="state-row">
        <div>{order.status}</div>
      </div>
      <div className="price-row">
        <div>€ {order.total}</div>
      </div>
      <div
        className="button-row"
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

  useEffect(async () => {
    const orders = await getAllOrders({ customerId: customer.id });

    _setOrders(orders);
  }, [customer]);

  return (
    <div className="dynamic-content">
      <div className="heading-wrapper mb-40">
        <h2>Order History</h2>
      </div>
      <div className="order-wrapper">
        {_orders &&
          _orders.length > 0 &&
          _orders.map((order) => <List order={order} />)}
        </div>
    </div>
  );
};

export default OrdersList;
