import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { getOrder } from "@/_controllers/customer";
import { getShop } from "@/_controllers/shop";

const Product = ({ product, shopName }) => {
  return (
    <div className="flex mb-20">
      <div className="flex">
        <div className="checkout-shop-item-img">
          <img
            src={product.images[0] && product.images[0].url}
            loading="lazy"
            alt="Handcrafted stuff"
            className="back-img"
          />
        </div>
        <div className="checkout-product-info">
          <h3>{product.name}</h3>
          <div className="overline-text pull-up">By {shopName}</div>
          <div>Size: {product.size}</div>
        </div>
      </div>
      <div className="pt-20">
        <div>Shipped</div>
      </div>
      <div className="pt-30">
        <div className="shop-product-price">€ {product.price}</div>
      </div>
    </div>
  );
};

const Shop = ({ shop, subTotal }) => {
  const [_shop, _setShop] = useState({});

  useEffect(async () => {
    const s = await getShop(shop.shopId);

    _setShop(s);
  }, [shop.shopId]);

  return (
    <div className="shop-list mb-60">
      <div className="flex mb-40">
        <h2>{_shop.name}</h2>
      </div>

      {shop.products &&
        shop.products.length > 0 &&
        shop.products.map((product) => (
          <Product product={product} shopName={_shop.name} />
        ))}

      <div className="subtotal-wrapper">
        <div className="medium">Subtotal: {subTotal.price}</div>
        <div>Delivery: € {subTotal.delivery}</div>
        <div>2-3 days</div>
      </div>
    </div>
  );
};

const Order = () => {
  const router = useRouter();

  const [_order, _setOrder] = useState({});
  const [_snap, _setSnap] = useState({});

  useEffect(async () => {
    const { orderId } = router.query;
    const order = await getOrder(orderId);
    _setOrder(order);
    _setSnap(order.snapshot);
  }, [router.query]);

  return (
    <div className="dynamic-content">
      <div className="heading-wrapper mb-40">
        <h2>Order {_order.id}</h2>
      </div>

      {_snap.shops &&
        _snap.shops.length > 0 &&
        _snap.shops.map((shop, index) => (
          <Shop shop={shop} subTotal={_snap.subTotals[index]} />
        ))}

      <div className="flex">
        <div />
        <div className="total-wrapper">
          <div className="medium">
            Total Price: € {_snap.subTotals && _snap.subTotals.reduce((a, c) => a + c.price, 0)}
          </div>
          <div>Delivery: € {_order.totalDelivery || 0}</div>
          <div>CO2 compensation (345)km: € {_order.co2Compensation}</div>
          <div>Total: € {_order.total}</div>

        </div>
      </div>
    </div>
  );
};

export default Order;
