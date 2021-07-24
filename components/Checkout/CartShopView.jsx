import { useState, useEffect } from "react";
import { getCart } from "@/controllers/customer";
import { getShop } from "@/controllers/shop";
import shop from "@/slices/shop";

import { Toggle2 } from "@/shared/Toggle";

const CartItem = ({ item, shop }) => {
  return (
    <div className="flex mb-20">
      <div className="flex">
        <div className="checkout-shop-item-img">
          <img
            src={item.product && item.product.images[0].formats.thumbnail.url}
            loading="lazy"
            sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 120px"
            alt="Handcrafted stuff"
            className="back-img"
          />
        </div>
        <div className="checkout-product-info">
          <h3>{item.product.name}</h3>
          <div className="overline-text pull-up">By {shop}</div>
          <div>Size: {item.size || ""}</div>
        </div>
      </div>
      <div className="pt-20">
        <img src="/images/done-black-24-dp.svg" loading="lazy" alt="Checkmark" />
        <div className="item-additional-info">
          {item.product.filters.inStock ? "In Stock" : "Currently Unavailable"}
        </div>
        <div className="form-block w-form">
          <form>
            <select className="text-field select cart w-select">
              <option value>1</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
          </form>
        </div>
      </div>
      <div className="pt-30">
        <div className="shop-product-price">€ {item.product.price}</div>
      </div>
    </div>
  );
};

const CartShop = ({ cart, subtotal }) => {
  const [_shop, _setShop] = useState({});
  const [_products, _setProducts] = useState([]);

  useEffect(async () => {
    if (cart && cart.shop && !_shop.id) {
      console.log("Getting Shop");
      const _shopData = await getShop(cart.shop);
      _setShop(_shopData);
    }

    if (cart) _setProducts(cart.products);
  }, [cart]);

  // console.log(_shop, _products);

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
        _products.map((product) => (
          <CartItem item={product} shop={shop.name} />
        ))}

      <div className="subtotal-wrapper">
        <div className="medium">Subtotal: € {subtotal.prices} </div>
        <div>Delivery: € {subtotal.delivery} </div>
        <div>2-3 days</div>
      </div>
    </div>
  );
};

const CartShopView = () => {
  const [items, setItems] = useState([]);
  const [subtotals, setSubtotals] = useState([]);
  const [toggles, setToggles] = useState({});
  const [data, setData] = useState({});

  const subtotalCalc = (cart) => {
    if (!cart) return;

    const subtotals = [];

    cart.map((item) => {
      let prices = 0;
      let delivery = 0;
      item.products.map((product) => {
        prices += product.price;
        delivery += product.delivery || 0;
      });
      subtotals.push({ prices, delivery });
    });

    return subtotals;
  };

  useEffect(async () => {
    const items = await getCart();

    console.log(items);

    if (items) {
      setItems(items.data);
      const subtotal = subtotalCalc(items.data);
      setSubtotals(subtotal);
    }
  }, []);

  return (
    <>
      {/* Cart Shop View */}

      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>3 items in your cart</h1>
        </div>

        {items &&
          items.map((item, index) => (
            <CartShop cart={item} subtotal={subtotals[index] || {}} />
          ))}
      </div>

      {/* Order Info & Proceed */}
      <div className="container">
        <div className="flex mb-40">
          <div className="checkout-additional">
            <Toggle2
              name="CO2 Compensation"
              value={toggles.CO2Compensation}
              setValue={(value) =>
                setToggles({ ...toggles, CO2Compensation: value })
              }
            />
            <Toggle2
              name="Pick up"
              value={toggles.pickUp}
              setValue={(value) => setToggles({ ...toggles, pickUp: value })}
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
            <div className="medium">
              Total: € {subtotals.reduce((a, c) => (a += c.prices), 0)}
            </div>
            <div>
              Delivery: € {subtotals.reduce((a, c) => a + c.delivery, 0)}
            </div>
            <div>CO2 compensation (345)km: € 4,80</div>
          </div>
        </div>
        <div className="center">
          <div className="button mx-10">
            <div>Continue as guest</div>
          </div>
          <div className="button blue secondary mx-10">
            <div>Sign in</div>
          </div>
        </div>
      </div>
    </> 
  );
};

export default CartShopView;
