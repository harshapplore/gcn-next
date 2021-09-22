import { useState, useEffect, useContext } from "react";

import styles from "./cart.module.scss";

import CheckBox from "@/shared/Input/Checkbox";
import Select from "@/shared/Input/Select";
import Message from "@/shared/Message";
import Button from "@/shared/Button";
import TextInput from "@/shared/Input/Text";

import { isEmail, isPhone, isPostalCode } from "@/utils/validators";

import cartContext, { CartContext } from "./cart.context";

import { loadAddress, saveAddress } from "@/_methods/cart";
import countries from '@/_data/countries.json'

const Input = ({ data, setData, errors }) => {
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

                <Select
                    choices={countries}
                    placeholder="Country"
                    value={data.country}
                    setValue={(value) => setData({ ...data, country: value })}
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

const Shipping = ({ checkout,loading }) => {
    const { shipping, billing, setShipping, setBilling } =
        useContext(cartContext);

    const [errors, setErrors] = useState({
        billing: {},
        shipping: {},
    });

    useEffect(() => {
        const billing = loadAddress("billing");
        let shipping = loadAddress("shipping");

        if (!Object.keys(shipping).length) shipping = { sameAsBilling: true };

        setBilling(billing);
        setShipping(shipping);
    }, []);

    const validate = (data, key) => {
        const err = {};

        if (!data.name) err.name = "Name cannot be empty.";
        if (!data.email) err.email = "Email cannot be empty";
        if (!data.phone) err.phone = "Phone cannot be empty";
        if (!data.streetAddress)
            err.streetAddress = "Street Address cannot be empty";
        if (!data.postalCode) err.postalCode = "Postal Code cannot be empty";
        if (!data.city) err.city = "City cannot be empty";
        if (!data.country) err.country = "Country cannot be empty";

        if (data.email && !isEmail(data.email))
            err.email = "Please input a valid email.";

        if (data.phone && !isPhone(data.phone))
            err.phone = "Please provide a valid phone number.";

        if (data.postalCode && !isPostalCode(data.postalCode))
            err.postalCode = "Please provide a valid postal code.";

        const errorList = { ...errors };

        errorList[key] = err;

        setErrors(errorList);

        console.log(key, err, errorList);
        console.log(billing, shipping);

        if (Object.keys(errorList[key]).length) return false;

        return true;
    };

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

    const next = () => {
        const billValid = validate(billing, "billing");

        const shipValid = shipping.sameAsBilling || validate(shipping, "shipping");

        if (!billValid || !shipValid) return;

        setShipping({ ...billing, ...shipping });

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
                        errors={errors.billing || []}
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
                            errors={errors.shipping || []}
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
