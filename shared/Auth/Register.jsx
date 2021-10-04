import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Select from "@/shared/Input/Select";
import CheckBox from "@/shared/Input/Checkbox";
import TextInput from "@/shared/Input/Text";
import Message from "@/shared/Message";

import { registerUser } from "@/_controllers/auth";
import SelectForRegister from "../Input/SelectForRegister";

import countries from '../../_data/countries.json'
import { sendEmail } from "@/_controllers/customer";

const Register = ({ close }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [data, setData] = useState({ type: "seller", region: "Europe" });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const err = {};

        if (!data.email) err.email = "Email cannot be empty.";

        var uppercase = /[A-Z]/;
        var lowercase = /[a-z]/;
        var number = /[0-9]/;
        var special = /[\W]{1,}/;

        if(!uppercase.test(data.password))  err.password = "Password should contain atleast one Uppercase"
        if(!lowercase.test(data.password))  err.password = "Password should contain atleast one lowercase"
        if(!number.test(data.password))  err.password = "Password should contain atleast one number"
        if(!special.test(data.password))  err.password = "Password should contain atleast one special character"
        if (!data.password) err.password = "Password cannot be empty.";
        if (data.password && data.password.length < 6) err.password = "Password length must be atleast 6 characters";
        
        if (!data.name) err.name = "Name cannot be empty.";

        if (!data.region) err.region = "Please Select a region";
        if (!data.terms) err.terms = "Please Accept Terms before proceeding";

        setErrors(err);

        if (Object.keys(err).length) return false;

        return true;
    };

    const submit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        const res = await registerUser(data, data.type, dispatch);
        console.log(res)
        if (res) {
            setSuccess(true);
            if (data.type === "seller") {
                setTimeout(() => {
                    router.push("/seller-onboarding")
                }, 1500);
                sendEmail(res.email,"Seller Registered Successfully", "seller registered")
            }
            if (data.type === "customer") {
                setTimeout(() => router.push("/"), 1500);
                location.reload();
                sendEmail(res.email,"User Registered Successfully", "User registerd")

            }
        }
    };
    // testerapplore301@yopmail.com
    const updateType = (type) => {
        setData({ ...data, type });
    };

    return (
        <div className="popup-wrapper register">
            <div className="overlay" onClick={close} />
            <div className="sign-in-popup">
                <h2>Register</h2>

                <div className="scroll-y">
                    <div className="w-tabs">
                        <div className="tab-menu-register w-tab-menu">
                            <a
                                data-w-tab="Tab 1"
                                className={
                                    "tab-register w-inline-block w-tab-link" +
                                    (data.type === "customer" ? " w--current" : "")
                                }
                                onClick={() => updateType("customer")}
                            >
                                <div>Customer</div>
                            </a>

                            <a
                                data-w-tab="Tab 2"
                                className={
                                    "tab-register w-inline-block w-tab-link" +
                                    (data.type === "seller" ? " w--current" : "")
                                }
                                onClick={() => updateType("seller")}
                            >
                                <div>Seller</div>
                            </a>
                        </div>

                        <div className="w-tab-content">
                            <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                                <div className="w-form">
                                    <TextInput
                                        type="text"
                                        className="text-field w-input"
                                        placeholder="Name"
                                        value={data.name}
                                        setValue={(value) => setData({ ...data, name: value })}
                                        error={errors.name}
                                    />

                                    <TextInput
                                        type="text"
                                        className="text-field w-input"
                                        placeholder="Email Address"
                                        value={data.email || ""}
                                        setValue={(value) => setData({ ...data, email: value })}
                                        error={errors.email}
                                    />

                                    <TextInput
                                        type="password"
                                        className="text-field w-input"
                                        placeholder="Password"
                                        value={data.password || ""}
                                        setValue={(value) => setData({ ...data, password: value })}
                                        error={errors.password}
                                    />

                                    {/* <select onChange={(e) => setData({ ...data, region: e.target.value })} className="text-field w-input">
                                        <option value="Europe">Europe</option>
                                        {countries && countries.map((country) =>
                                            <option key={country} value={country}>{country}</option>
                                        )}
                                    </select>
                                    {errors.region && (
                                        <div className="input-error">
                                            Error:
                                            <span className="input-error__message"> {errors.region} </span>
                                        </div>
                                    )} */}
                                    <SelectForRegister
                                        choices={countries}
                                        placeholder="Europe"
                                        value={data.region}
                                        setValue={(value) => setData({ ...data, region: value })}
                                        error={errors.region}
                                    />

                                    <div className="flex mb-20">
                                        <CheckBox
                                            text="Newsletter"
                                            value={data.newsletter}
                                            setValue={(value) =>
                                                setData({ ...data, newsletter: value })
                                            }
                                        />
                                    </div>
                                    <div className="flex mb-20">
                                        <CheckBox
                                            text={"Accept Terms & Conditions and Privacy Policy"}
                                            value={data.terms}
                                            setValue={(value) => setData({ ...data, terms: value })}
                                            error={errors.terms}
                                        />
                                    </div>
                                    <div className="center">
                                        <input
                                            type="submit"
                                            value="Register"
                                            className="button blue w-button"
                                            onClick={submit}
                                        />
                                    </div>
                                </div>

                                {errors &&
                                    errors.length > 0 &&
                                    errors.map((err) => (
                                        <Message key={err} text={err} status={-1} />
                                    ))}

                                {success && (
                                    <Message
                                        text={`${data.name} has been registered successfully.`}
                                        status={1}
                                    />
                                )}

                                {data.type === "customer" && (
                                    <div className="center">
                                        {/* <div className="mb-20">or</div> */}
                                        {/* <div
                                            className="mb-20"
                                            onClick={() =>
                                                router.push(
                                                    "https://test.greencloudnine.com/connect/google"
                                                )
                                            }
                                        >
                                            <a className="button secondary w-button">
                                                Continue with Google
                                            </a>
                                        </div>
                                        <div
                                            className="mb-20"
                                            onClick={() =>
                                                router.push(
                                                    "https://test.greencloudnine.com/connect/facebook"
                                                )
                                            }
                                        >
                                            <a className="button secondary w-button">
                                                Continue with Facebook
                                            </a>
                                        </div>
                                        <div className="mb-50">
                                            <a className="button secondary w-button">
                                                Continue with Apple
                                            </a>
                                        </div> */}
                                    </div>
                                )}

                                {data.type === "seller" && (
                                    <div
                                        className="sell"
                                        onClick={() => router.push("/seller-info")}
                                    >
                                        <div className="mb-20">Sell on Green Cloud Nine</div>
                                        <a
                                            href="/seller-info"
                                            className="button secondary w-button"
                                        >
                                            How it works
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
