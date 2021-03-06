import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import router from "next/router";
import CompensationChoices from "./CompensationChoice";

import AuthForm from "@/shared/Auth/AuthForm";
import { Button, OutlinedButton } from "@/shared/Button";
import { Toggle2 } from "@/shared/Toggle";
import NumberInput from "@/shared/Input/Number";
import Dropdown from "@/shared/Input/Dropdown";

import { loadCart } from "@/slices/cart";
import { getShop } from "@/_controllers/shop";
import { deleteFromCart } from "@/_methods/cart";

import styles from "./cart.module.scss";
import CartContext from "./cart.context";
import {
  getSubTotalPrice,
  getSubTotalDelivery,
  calculateVat,
} from "./cart.methods";

import DeleteIcon from "@/assets/icons/delete.svg";
import countries from "@/_data/countriesList.json";
import { usePriceFormatter } from "@/_hooks/usePriceFormatter";
import { BILLING } from "../SellerBackend/routes";

const __countries = countries.map((val) => val.name);

const CartItem = ({ product, shop, qty, setQty }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    deleteFromCart(product);
    dispatch(loadCart());
  };

  return (
    <>
      <div className="flex mb-20 flex-align-center">
        <div className="flex flex-align-center">
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
          <div
            className="checkout-product-info cursor no-select"
            onClick={() => router.push(`/product/${product.id}`)}
          >
            <h3>{product.name}</h3>
            <div
              className="overline-text pull-up cursor no-select"
              onClick={() => router.push(`/shop/${shop.id}`)}
            >
              By {shop.name}
            </div>
            <br className="mobile-only" />
            <span>Size: {product.size || ""}</span> <span> | </span>
            <span> Color: {product.color} </span>
          </div>
        </div>
        <div className="pt-20 flex-grow-1 flex-2 flex-space-between flex-align-center">
          <div>
            <img
              src="/images/done-black-24-dp.svg"
              loading="lazy"
              alt="Checkmark"
            />
            <div className="item-additional-info" style={{ width: "100px" }}>
              {product.stock ? "In Stock" : "Currently Unavailable"}
            </div>
          </div>
          <div style={{ justifySelf: "flex-end" }}>
            <NumberInput value={qty} setValue={(value) => setQty(value)} />
            <img
              src={DeleteIcon.src}
              className={styles["cart-delete"]}
              onClick={deleteItem}
            />
          </div>
        </div>
        <div className="pt-30">
          <div className="shop-product-price">
            {usePriceFormatter(product.price * product.quantity)}
          </div>
        </div>
      </div>
      <div className="spacer-40" />
    </>
  );
};

/*
 * Caters to a particular shop in the view.
 */
const CartShop = ({ shopId, products, setProducts, shopMeta, setShopMeta }) => {
  const [_shop, _setShop] = useState({});

  useEffect(async () => {
    if (shopId && !_shop.id) {
      const shopData = await getShop(shopId);
      _setShop(shopData);
    }
  }, [shopId]);

  return (
    <div className="shop-list mb-60">
      <div className="flex mb-20 flex flex-wrap flex-align-center">
        <h2
          className="no-select cursor green"
          onClick={() => router.push(`/shop/${_shop.id}`)}
        >
          {_shop.name}
        </h2>
        <div className="hide-mobile">
          <div
            className="button secondary cursor no-select"
            onClick={() =>
              router.push(`/shop/${_shop.id}?tab=terms-n-conditions`)
            }
          >
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
        <Toggle2
          name="Pick up from Shop"
          value={shopMeta.pickUp}
          setValue={(value) => setShopMeta({ ...shopMeta, pickUp: value })}
        />
        <div>
            <div className="medium">Subtotal (excl. VAT): {usePriceFormatter(shopMeta.price)}</div>
            <div>Packaging &amp; Shipping: {usePriceFormatter(shopMeta.delivery)} </div>
          <div>VAT: {usePriceFormatter(shopMeta.vat)}</div>
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
    products,
    setShops,
    shopsMeta,
    setShopsMeta,
    totalPrice,
    totalDelivery,
    setTotalPrice,
    setTotalDelivery,
    co2Compensation,
    setCo2Compensation,
    vat,
    setVat,
    gift,
    setGift,
    total,
    setTotal,
    shipping,
    billing,
    setShipping,
    setBilling,
  } = useContext(CartContext);

  /*
   * Recalculates subtotals w/ change in products
   */
  useEffect(() => {
    if (shops.length) {
      const subTotals = shops.map((shop) => {
        return {
          shopId: shop.shopId,
          price: getSubTotalPrice(shop.products),
          delivery: getSubTotalDelivery(shop.products),
          vat: calculateVat({
            domesticCountry: shipping.country,
            destinationCountry: shop.shop.country,
            amount: getSubTotalPrice(shop.products),
          }),
        };
      });

      const meta = subTotals.map((st) => {
        const data = shopsMeta.filter((meta) => meta.shopId === st.shopId);
        return { ...data, ...st };
      });

      setShopsMeta(meta);
    }
  }, [JSON.stringify(shops), shipping.country]);

  /**
   * Recalculates total Price & Delivery as the subtotals change.
   * */
  useEffect(() => {
    const total = shopsMeta.reduce(
      (a, c) => {
        return {
          price: a.price + c.price,
          delivery: a.delivery + c.delivery,
          vat: a.vat + c.vat,
        };
      },
      { price: 0, delivery: 0, vat: 0 }
    );

    setTotalPrice(total.price);
    setTotalDelivery(total.delivery);
    setVat(total.vat);
  }, [shopsMeta]);

  useEffect(() => {
    if (!toggles.co2Compensation) {
      setCo2Compensation(0);
      return;
    }
    const compensation = (totalPrice + totalDelivery) / 100;
    setCo2Compensation(compensation);
  }, [toggles.co2Compensation, JSON.stringify(total)]);

  useEffect(() => {
    console.log(totalPrice, totalDelivery, co2Compensation, vat);
    const total =
      totalPrice + totalDelivery + co2Compensation + (vat ? vat : 0);

    setTotal(total);
  }, [totalPrice, totalDelivery, co2Compensation, vat]);

  const [charityCode, setCharityCode] = useState(false);
  const [charityError, setCharityError] = useState(false);
  const [shippingError, setShippingError] = useState(false);

  const validator = () => {
    setCharityError(false);
    setShippingError(false);
    if (!Object.keys(shipping).includes("country") || shipping.country == "") {
      setShippingError("Please select a country");
      router.push("/cart#select-country");
    } else if (toggles.co2Compensation && !charityCode) {
      setCharityError("Please select one charity project");
      router.push("/cart#charity-project");
    } else {
      goToShipping(charityCode);
    }
  };

  return (
    <div>
      {/* Cart Shop View */}
      {showAuth && <AuthForm close={() => setShowAuth(false)} />}

      <div className="container">
        <div className="mb-40 flex flex-align-center flex-space-between">
          <h1 id="select-country">
            {console.log(shops)}
            {shops.reduce(
              (a, c) => a + c.products?.reduce((a, c) => a + c.quantity, 0),
              0
            )}
            &nbsp;items in your cart.
          </h1>
          <div>
            <Dropdown
              placeholder="Ship To"
              choices={__countries}
              value={shipping.country}
              setValue={(country) => {
                setShipping({ ...shipping, country });
                setBilling({ ...billing, country });
              }}
            />
            {shippingError && (
              <span style={{ color: "red", marginTop: 5, fontSize: 12 }}>
                Select Country to proceed
              </span>
            )}
          </div>
        </div>

        {shops &&
          shops.map((shop, index) => {
            const metaIndex =
              shopsMeta &&
              shopsMeta.findIndex((meta) => meta.shopId === shop.shopId);

            return (
              <CartShop
                key={"shop" + index}
                shopId={shop.shopId}
                products={shop.products}
                shopMeta={(shopsMeta && shopsMeta[metaIndex]) || {}}
                setProducts={(products) => {
                  setShops([
                    ...shops.slice(0, index),
                    { ...shop, products },
                    ...shops.slice(index + 1),
                  ]);
                }}
                setShopMeta={(meta) => {
                  setShopsMeta([
                    ...shopsMeta.slice(0, metaIndex),
                    meta,
                    ...shopsMeta.slice(index + 1),
                  ]);
                }}
              />
            );
          })}
      </div>

      {/* Order Info & Proceed */}
      <div className="container">
        <div className="flex mb-40">
          <div className="checkout-additional">
            {products?.length > 0 && (
              <Toggle2
                name="This order is a gift."
                value={gift.gift}
                setValue={(value) => setGift({ ...gift, gift: value })}
              />
            )}

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
            <div className="medium">Total Price: {usePriceFormatter(totalPrice)}</div>
            <div>Packaging &amp; Shipping : {usePriceFormatter(totalDelivery)}</div>
            <div className="medium"> VAT :{usePriceFormatter(vat)}</div>
            {co2Compensation > 0 && (
                <div>CO2 compensation : {usePriceFormatter(co2Compensation)}</div>
            )}
            <div>Order Total: {usePriceFormatter(total)}</div>
          </div>
        </div>

        <div className="flex flexleft flextop spacebetween">
          <div>
            <h3 className="orange infoheader">Make your order CO2 neutral</h3>
          </div>

          <div className="checkout-switch-wrapper mt20">
            <Toggle2
              name="CO2 Compensation"
              value={toggles.co2Compensation}
              setValue={(value) =>
                setToggles({ ...toggles, co2Compensation: value })
              }
            />
          </div>
        </div>

        {toggles.co2Compensation && (
          <CompensationChoices
            total={total}
            co2CompensationPrice={co2Compensation}
            charityCode={charityCode}
            setCharityCode={setCharityCode}
            charityError={charityError}
          />
        )}

        {shops.length > 0 && (
          <div className={styles["cart-cta-buttons-ctr"]}>
            <Button
              name={customer.id ? "Proceed to Shipping" : "Continue as Guest"}
              action={validator}
            />
            {!customer.id && (
              <OutlinedButton
                type="secondary"
                name="Sign In"
                action={() => setShowAuth(true)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartShopView;
