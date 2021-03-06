import { useState, useEffect, useContext } from "react";

import styles from "./cart.module.scss";

import CheckBox from "@/shared/Input/Checkbox";
import Select from "@/shared/Input/Select";
import Message from "@/shared/Message";
import Button from "@/shared/Button";
import TextInput from "@/shared/Input/Text";

import { isEmail, isPhone, isPostalCode } from "@/utils/validators";

import cartContext, { CartContext } from "./cart.context";

import { getCart, loadAddress, saveAddress } from "@/_methods/cart";
import countries from "@/_data/countries.json";
import { sendEmail, sendEmailReg } from "@/_controllers/customer";
import authAxios, { axios } from "@/setups/axios";
import { useSelector } from "react-redux";

const Input = ({ data, setData, errors, shipping }) => {
  return (
    <>
      <div className="w-form">
        <TextInput
          placeholder="Full Name *"
          value={data.name}
          setValue={(value) => setData({ ...data, name: value })}
          error={errors.name}
        />

        <TextInput
          type="text"
          placeholder="Company"
          className="text-field w-input"
          value={data.company}
          setValue={(value) => setData({ ...data, company: value })}
          error={errors.company}
        />

        <TextInput
          type="text"
          className="text-field w-input"
          placeholder="Street address*"
          value={data.streetAddress}
          setValue={(value) => setData({ ...data, streetAddress: value })}
          error={errors.streetAddress}
        />

        <TextInput
          type="text"
          placeholder="Postal code*"
          value={data.postalCode}
          setValue={(value) => setData({ ...data, postalCode: value })}
          error={errors.postalCode}
        />

        <TextInput
          type="text"
          placeholder="City*"
          value={data.city}
          setValue={(value) => setData({ ...data, city: value })}
          error={errors.city}
        />

        <TextInput
          // choices={countries}
          placeholder={data?.country}
          value={data?.country}
          disabled
          setValue={(value) => {}}
        />

        <TextInput
          type="text"
          placeholder="Email *"
          value={data.email}
          setValue={(value) => setData({ ...data, email: value })}
          error={errors.email}
        />

        <TextInput
          type="text"
          placeholder="Phone"
          value={data.phone}
          setValue={(value) => setData({ ...data, phone: value })}
          error={errors.phone}
        />
      </div>
    </>
  );
};

const Shipping = ({ checkout, loading }) => {
  const { customer } = useSelector((state) => state.customer);

  const { shipping, billing, setShipping, setBilling } =
    useContext(cartContext);

  const [billingErrors, setBillingErrors] = useState({});
  const [shippingErrors, setShippingErrors] = useState({});

  useEffect(() => {
    const billing = loadAddress("billing");
    let newShipping = loadAddress("shipping");

    if (!Object.keys(shipping).length) shipping = { sameAsBilling: true };

    setBilling({
      ...billing,
      country: shipping.country,
    });
    setShipping({
      ...newShipping,
      country: shipping.country,
    });
  }, []);

  useEffect(() => {
    if (!billing) return;

    if (!Object.keys(billing).length) return;

    saveAddress("billing", billing);
  }, [billing]);

  useEffect(() => {
    if (!shipping) return;

    if (!Object.keys(shipping).length) return;

    saveAddress("shipping", shipping);
  }, [shipping]);

  const validate = async (data, key) => {
    const err = {};

    if (!data.name) err.name = "Name cannot be empty.";
    if (!data.email) err.email = "Email cannot be empty";
    if (!data.phone) err.phone = "Phone cannot be empty";
    if (!data.streetAddress)
      err.streetAddress = "Street Address cannot be empty";
    if (!data.postalCode) err.postalCode = "Postal Code cannot be empty";
    if (!data.city) err.city = "City cannot be empty";
    // if (!data.country) err.country = "Country cannot be empty";

    if (data.email && !isEmail(data.email))
      err.email = "Please input a valid email.";

    if (data.phone && !isPhone(data.phone))
      err.phone = "Please provide a valid phone number.";

    if (data.postalCode && !isPostalCode(data.postalCode))
      err.postalCode = "Please provide a valid postal code.";

    if (key === "billing") setBillingErrors(err);
    if (key === "shipping") setShippingErrors(err);

    if (Object.keys(err).length) return false;

    return true;
  };

  const next = async () => {
    const billValid = await validate(billing, "billing");

    const shipValid =
      shipping.sameAsBilling || (await validate(shipping, "shipping"));

    if (!billValid || !shipValid) return;

    setShipping({ ...billing, ...shipping });

    checkout();
  };

  return (
    <div className="container">
      <div className="heading-wrapper mb-40">
        <h2>Shipping</h2>
      </div>
      <div className="flex mb-40 align-items-start">
        <div className="flex-child-45">
          <h3>Billing Address</h3>
          <Input
            name="Billing Address"
            data={billing}
            setData={setBilling}
            shipping={shipping}
            errors={billingErrors || {}}
          />
        </div>
        <div className="flex-child-45">
          <h3>Delivery Address</h3>
          <CheckBox
            text="Use same address for delivery."
            value={shipping.sameAsBilling}
            setValue={(value) => setShipping({ sameAsBilling: value })}
          />
          {!shipping.sameAsBilling && (
            <Input
              name="Delivery Address"
              data={shipping}
              setData={setShipping}
              shipping={shipping}
              errors={shippingErrors || {}}
            />
          )}
        </div>
      </div>
      <div className={styles["cart-cta-buttons-ctr"]}>
        <Button
          type="secondary"
          name="Checkout"
          action={next}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Shipping;
