import { useState, useEffect } from "react";

import CheckBox from "@/shared/Input/Checkbox";
import Select from "@/shared/Input/Select";
import Message from "@/shared/Message";
import Button from "@/shared/Button";

import { isEmail, isPhone, isPostalCode } from "@/utils/validators";

const Input = ({ data, setData, errors }) => {
  return (
    <>
      <div className="w-form">
        <form id="email-form-6" name="email-form-6" data-name="Email Form 6">
          <input
            type="text"
            className="text-field w-input"
            placeholder="Full name*"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Company"
            className="text-field w-input"
            value={data.company}
            onChange={(e) => setData({ ...data, company: e.target.value })}
          />
          <input
            type="text"
            className="text-field w-input"
            placeholder="Street address*"
            value={data.streetAddress}
            onChange={(e) =>
              setData({ ...data, streetAddress: e.target.value })
            }
          />
          <input
            type="text"
            className="text-field w-input"
            placeholder="Postal code*"
            value={data.postalCode}
            onChange={(e) => setData({ ...data, postalCode: e.target.value })}
          />
          <input
            type="text"
            className="text-field w-input"
            placeholder="City*"
            value={data.city}
            onChange={(e) => setData({ ...data, city: e.target.value })}
          />

          <Select
            choices={["Austria"]}
            placeholder="Country"
            value={data.country}
            setValue={(value) => setData({ ...data, country: value })}
          />

          <input
            type="text"
            className="text-field w-input"
            placeholder="Email*"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <input
            type="text"
            placeholder="Phone"
            className="text-field w-input"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </form>
        <div>
          {errors &&
            errors.length > 0 &&
            errors.map((error, index) => (
              <Message key={"err" + index} text={error} status={-1} />
            ))}
        </div>
      </div>
    </>
  );
};

const Shipping = ({ data, setData, checkout }) => {
  const [sameShipping, setSameShipping] = useState(true);

  const [shipping, setShipping] = useState({});
  const [billing, setBilling] = useState({});

  const [err, setErrors] = useState({
    billing: [],
    shipping: [],
  });

  const validate = (data, key) => {
    const errors = [];

    if (!data.name) errors.push("Name cannot be empty.");
    if (!data.email) errors.push("Email cannot be empty");
    if (!data.phone) errors.push("Phone cannot be empty");
    if (!data.streetAddress) errors.push("Street Address cannot be empty");
    if (!data.postalCode) errors.push("Postal Code cannot be empty");
    if (!data.city) errors.push("City cannot be empty");
    if (!data.country) errors.push("Country cannot be empty");

    if (data.email && !isEmail(data.email))
      errors.push("Please input a valid email.");

    if (data.phone && !isPhone(data.phone))
      errors.push("Please provide a valid phone number.");

    if (data.postalCode && !isPostalCode(data.postalCode))
      errors.push("Please provide a valid postal code.");

    const errorList = { ...err };

    errorList[key] = errors;

    setErrors(errorList);

    if (errors.length) return true;

    return false;
  };

  const next = () => {
    if (validate(billing, "billing")) return;

    if (!sameShipping && validate(shipping, "shipping")) return;

    setData({ ...data, billing, shipping: sameShipping ? billing : shipping });

    checkout();
  };

  return (
    <div className="container">
      <div className="heading-wrapper mb-40">
        <h2>Shipping</h2>
      </div>
      <div className="flex mb-40">
        <div className="flex-child-45">
          <h3>Billing Address</h3>
          <Input
            name="Billing Address"
            data={billing}
            setData={setBilling}
            errors={err.billing || []}
          />
        </div>
        <div className="flex-child-45">
          <h3>Delivery Address</h3>
          <CheckBox
            text="Use same address for delivery."
            value={sameShipping}
            setValue={(value) => setSameShipping(value)}
          />
          {!sameShipping && (
            <Input
              name="Delivery Address"
              data={shipping}
              setData={setShipping}
              errors={err.shipping || []}
            />
          )}
        </div>

        <Button type="secondary" name="Checkout" action={next} />
      </div>
    </div>
  );
};

export default Shipping;
