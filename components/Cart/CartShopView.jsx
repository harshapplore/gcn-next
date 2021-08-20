import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import CompensationChoices from "./CompensationChoice";

import AuthForm from "@/shared/Auth/AuthForm";
import { Button, OutlinedButton } from "@/shared/Button";
import { Toggle2 } from "@/shared/Toggle";
import NumberInput from "@/shared/Input/Number";

import { loadCart } from "@/slices/cart";
import { getShop } from "@/_controllers/shop";
import { deleteFromCart } from "@/_methods/cart";

import styles from "./cart.module.scss";
import CartContext from "./cart.context";
import { getSubTotalPrice, getSubTotalDelivery } from "./cart.methods";

import DeleteIcon from "@/assets/icons/delete.svg";

const CartItem = ({ product, shop, qty, setQty }) => {
  const dispatch = useDispatch();
  const [showAuth, setShowAuth] = useState(false);

  const deleteItem = () => {
    deleteFromCart(product);
    dispatch(loadCart());
  };

  return (
    <div className="flex mb-20">
      <div className="flex">
        <div className="checkout-shop-item-img">
          <img
            src={
              product &&
              product.images[0] &&
              product.images[0].formats.thumbnail.url
            }
            loading="lazy"
            sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 120px"
            alt="Handcrafted stuff"
            className="back-img"
          />
        </div>
        <div className="checkout-product-info">
          <h3>{product.name}</h3>
          <div className="overline-text pull-up">By {shop.name}</div>
          <div>Size: {product.size || ""}</div>
        </div>
      </div>
      <div className="pt-20">
        <img
          src="/images/done-black-24-dp.svg"
          loading="lazy"
          alt="Checkmark"
        />
        <div className="item-additional-info">
          {product.filters.inStock ? "In Stock" : "Currently Unavailable"}
        </div>
        <NumberInput value={qty} setValue={(value) => setQty(value)} />
        <img
          src={DeleteIcon.src}
          className={styles["cart-delete"]}
          onClick={deleteItem}
        />
      </div>
      <div className="pt-30">
        <div className="shop-product-price">
          € {product.price * product.quantity}
        </div>
      </div>
    </div>
  );
};

/*
 * Caters to a particular shop in the view.
 */
const CartShop = ({ shopId, products, setProducts, subTotal }) => {
  const [_shop, _setShop] = useState({});

  useEffect(async () => {
    if (shopId && !_shop.id) {
      const shopData = await getShop(shopId);
      _setShop(shopData);
    }
  }, [shopId]);

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

      {products &&
        products.map((product, index) => (
          <CartItem
            key={"name" + index}
            product={product}
            shop={_shop}
            qty={product.quantity}
            setQty={(value) =>
              setProducts([
                ...products.slice(0, index),
                { ...product, quantity: value },
                ...products.slice(index + 1),
              ])
            }
          />
        ))}

      <div className="subtotal-wrapper">
        <Toggle2 name="Pick up from Shop?" />
        <div>
        <div className="medium">Subtotal: € {subTotal.price} </div>
        <div>Delivery: € {subTotal.delivery} </div>
        <div>2-3 days</div>
        </div>
      </div>
    </div>
  );
};

/**
 *  The main container component to display Cart
 * @param goToShipping - A high-order function to move to next step
 */
const CartShopView = ({ goToShipping }) => {
  const { customer } = useSelector((state) => state.customer);

  const [showAuth, setShowAuth] = useState(false);
  const [toggles, setToggles] = useState({});

  const {
    shops,
    setShops,
    subTotals,
    setSubTotals,
    totalPrice,
    totalDelivery,
    setTotalPrice,
    setTotalDelivery,
    co2Compensation,
    setCo2Compensation,
    gift,
    setGift,
    pickUpOrder,
    setPickUpOrder,
    total,
    setTotal,
  } = useContext(CartContext);

  /*
   * Recalculates subtotals w/ change in products
   */
  useEffect(() => {
    if (shops.length) {
      const subTotals = shops.map((shop) => {
        return {
          price: getSubTotalPrice(shop.products),
          delivery: getSubTotalDelivery(shop.products),
        };
      });

      setSubTotals(subTotals);
    }
  }, [shops]);

  /**
   * Recalculates total Price & Delivery as the subtotals change.
   * */
  useEffect(() => {
    const total = subTotals.reduce(
      (a, c) => {
        return {
          price: a.price + c.price,
          delivery: a.delivery + c.delivery,
        };
      },
      { price: 0, delivery: 0 }
    );

    setTotalPrice(total.price);
    setTotalDelivery(total.delivery);
  }, [subTotals]);

  useEffect(() => {
    if (!toggles.co2Compensation) {
      setCo2Compensation(0);
      return;
    }

    const compensation = Math.round(totalPrice + totalDelivery) / 100;

    setCo2Compensation(compensation);
  }, [toggles.co2Compensation]);

  useEffect(() => {
    setTotal(totalPrice + totalDelivery + co2Compensation);
  }, [totalPrice, totalDelivery, co2Compensation]);

  return (
    <>
      {/* Cart Shop View */}
      {showAuth && <AuthForm close={() => setShowAuth(false)} />}

      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>
            {shops.reduce((a, c) => a + c.products.length, 0)} items in your
            cart
          </h1>
        </div>

        {shops &&
          shops.map((shop, index) => (
            <CartShop
              key={"shop" + index}
              shopId={shop.shopId}
              products={shop.products}
              setProducts={(products) => {
                setShops([
                  ...shops.slice(0, index),
                  { ...shop, products },
                  ...shops.slice(index + 1),
                ]);
              }}
              subTotal={subTotals[index] || {}}
            />
          ))}
      </div>

      {/* Order Info & Proceed */}
      <div className="container">
        <div className="flex mb-40">
          {toggles.co2Compensation && <CompensationChoices />}

          <div className="checkout-additional">
            <Toggle2
              name="CO2 Compensation"
              value={toggles.co2Compensation}
              setValue={(value) =>
                setToggles({ ...toggles, co2Compensation: value })
              }
            />
            <Toggle2
              name="This order is a gift."
              value={gift.gift}
              setValue={(value) => setGift({ ...gift, gift: value })}
            />

            {gift.gift && (
              <div className="w-form">
                <form>
                  <textarea
                    placeholder="Add text"
                    className="text-field area w-input"
                    value={gift.giftMessage}
                    onChange={(e) =>
                      setGift({ ...gift, giftMessage: e.target.value })
                    }
                  />
                </form>
              </div>
            )}
          </div>
          <div className="total-wrapper">
            <div className="medium">Total Price: € {totalPrice}</div>
            <div>Delivery: € {totalDelivery}</div>
            {co2Compensation > 0 && (
              <div>CO2 compensation : € {co2Compensation}</div>
            )}
            <div>Order Total: € {total}</div>
          </div>
        </div>

        {shops.length > 0 && (
          <div className={styles["cart-cta-buttons-ctr"]}>
            <OutlinedButton
              type="secondary"
              name={customer.id ? "Proceed to Shipping" : "Continue as Guest"}
              action={goToShipping}
            />
            {!customer.id && (
              <Button
                type="secondary"
                name="Login / Register "
                action={() => setShowAuth(true)}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CartShopView;
