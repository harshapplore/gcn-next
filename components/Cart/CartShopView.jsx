import { useState, useEffect } from "react";
import { getCart } from "@/controllers/customer";
import { getShop } from "@/controllers/shop";
import shop from "@/slices/shop";

import { Toggle2 } from "@/shared/Toggle";
import NumberInput from "@/shared/Input/Number";

import styles from "./cart.module.scss";

const CartItem = ({ item, shop, qty, setQty }) => {
  return (
    <div className="flex mb-20">
      <div className="flex">
        <div className="checkout-shop-item-img">
          <img
            src={
              item.product &&
              item.product.images[0] &&
              item.product.images[0].formats.thumbnail.url
            }
            loading="lazy"
            sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 120px"
            alt="Handcrafted stuff"
            className="back-img"
          />
        </div>
        <div className="checkout-product-info">
          <h3>{item.product.name}</h3>
          <div className="overline-text pull-up">By {shop.name}</div>
          <div>Size: {item.size || ""}</div>
        </div>
      </div>
      <div className="pt-20">
        <img
          src="/images/done-black-24-dp.svg"
          loading="lazy"
          alt="Checkmark"
        />
        <div className="item-additional-info">
          {item.product.filters.inStock ? "In Stock" : "Currently Unavailable"}
        </div>
        <NumberInput value={qty} setValue={(value) => setQty(value)} />
      </div>
      <div className="pt-30">
        <div className="shop-product-price">€ {item.product.price}</div>
      </div>
    </div>
  );
};

const CartShop = ({ cart, subtotal, setCart }) => {
  const [_shop, _setShop] = useState({});
  const [_products, _setProducts] = useState([]);

  useEffect(async () => {
    if (cart && cart.shop && !_shop.id) {
      const _shopData = await getShop(cart.shop);
      _setShop(_shopData);
    }

    if (cart) _setProducts(cart.products);
  }, [cart]);

  return (
    <div className="shop-list mb-60">
      <div className="flex mb-20">
        <h2> {_shop.name} </h2>
        <div className="hide-mobile">
          <div className="button secondary">
            <div>Terms & Conditions</div>
          </div>
        </div>
      </div>

      {_products &&
        _products.map((product, index) => (
          <CartItem
            key={"name" + index}
            item={product}
            shop={_shop}
            qty={product.quantity}
            setQty={(value) =>
              _setProducts([
                ..._products.slice(0, index),
                { ...product, quantity: value },
                ..._products.slice(index + 1),
              ])
            }
          />
        ))}

      <div className="subtotal-wrapper">
        <div className="medium">Subtotal: € {subtotal.prices} </div>
        <div>Delivery: € {subtotal.delivery} </div>
        <div>2-3 days</div>
      </div>
    </div>
  );
};

const CartShopView = ({ data, setData, goToShipping }) => {
  const [items, setItems] = useState([]);
  const [subtotals, setSubtotals] = useState([]);
  const [toggles, setToggles] = useState({});

  const subtotalCalc = (cart) => {
    if (!cart) return;

    const subtotals = [];

    cart.map((item) => {
      let prices = 0;
      let delivery = 0;
      item.products.map((product) => {
        prices += product.price * product.quantity;
        delivery += product.delivery || 0;
      });
      subtotals.push({ prices, delivery });
    });

    return subtotals;
  };

  useEffect(async () => {
    const items = await getCart();

    if (items) {
      setItems(items.data);
      const subtotal = subtotalCalc(items.data);
      setSubtotals(subtotal);
    }
  }, []);

  // useEffect(() => {
  //   if (items) {
  //     setItems(items.data);
  //     const subtotal = subtotalCalc(items.data);
  //     setSubtotals(subtotal);
  //   }
  // }, [items]);

  useEffect(() => {
    const totalPrice = subtotals.reduce((a, c) => (a += c.prices), 0);
    const totalDelivery = subtotals.reduce((a, c) => a + c.delivery, 0);
    let co2Compensation;

    if (toggles.co2Compensation) {
      co2Compensation = Math.round((totalPrice + totalDelivery) / 100);
    } else {
      co2Compensation = 0;
    }

    const total = totalPrice + totalDelivery + co2Compensation;

    setData({
      ...data,
      totalPrice,
      totalDelivery,
      co2Compensation,
      total,
      order: items,
    });
  }, [subtotals, toggles.co2Compensation]);

  return (
    <>
      {/* Cart Shop View */}

      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>
            {items.reduce((a, c) => a + c.products.length, 0)} items in your
            cart
          </h1>
        </div>

        {items &&
          items.map((item, index) => (
            <CartShop
              cart={item}
              subtotal={subtotals[index] || {}}
              // setCart={setItems}
            />
          ))}
      </div>

      {/* Order Info & Proceed */}
      <div className="container">
        <div className="flex mb-40">
          <div className="checkout-additional">
            <Toggle2
              name="CO2 Compensation"
              value={toggles.co2Compensation}
              setValue={(value) =>
                setToggles({ ...toggles, co2Compensation: value })
              }
            />
            <Toggle2
              name="Pick up"
              value={data.pickUp}
              setValue={(value) => setData({ ...data, pickUp: value })}
            />
            <Toggle2
              name="This order is a gift."
              value={toggles.isGift}
              setValue={(value) => setToggles({ ...toggles, isGift: value })}
            />

            {toggles.isGift && (
              <div className="w-form">
                <form>
                  <textarea
                    placeholder="Add text"
                    className="text-field area w-input"
                    value={data.giftMessage}
                    onChange={(e) =>
                      setData({ ...data, giftMessage: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    className="text-field w-input"
                    placeholder="Coupon Code"
                    value={data.coupon}
                    onChange={(e) =>
                      setData({ ...data, coupon: e.target.value })
                    }
                  />
                </form>
              </div>
            )}
          </div>
          <div className="total-wrapper">
            <div className="medium">Total: € {data.totalPrice}</div>
            <div>Delivery: € {data.totalDelivery}</div>
            {data.co2Compensation && (
              <div>CO2 compensation (345)km: € {data.co2Compensation}</div>
            )}
          </div>
        </div>

        <div className="center">
          <div className={styles["total-display"]}>
            Order Total: € {data.total}
          </div>
          <div className="button blue secondary mx-10" onClick={goToShipping}>
            <div>Proceed to Shipping</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartShopView;
