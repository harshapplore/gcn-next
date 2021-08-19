import { useState } from "react";
import { v4 } from "uuid";
import router, { useRouter } from "next/router";

import { UPDATE_ROLE_URL } from "@/config/constants";

import { axios } from "@/setups/axios";

import Select from "@/shared/Input/Select";
import Message from "@/shared/Message";
import CheckBox from "@/shared/Input/Checkbox";
import TextInput from "@/shared/Input/Text";

const Register = ({ close }) => {
  const router = useRouter();

  const [data, setData] = useState({ type: "seller" });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const err = {};

    if (!data.email) err.email = "Email cannot be empty.";
    if (!data.password) err.password = "Password cannot be empty.";
    if (!data.name) err.name = "Name cannot be empty.";

    if (!data.region) err.region = "Please Select a region";
    if (!data.terms) err.terms = "Please Accept Terms before proceeding";

    setErrors(err);

    console.log((Object.keys(err).length));

    if ((Object.keys(err).length)) return false;

    return true;
  };

  const submit = async (value) => {
    value.preventDefault();

    if (!validate()) {
      return;
    }

    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      type: data.type,
      role: data.type,
      username:
        data.name.split(" ")[0].slice(0, 5) +
        "-" +
        v4().split("-").pop().slice(0, 4),
      newsletter: data.newsletter || false,
      termsAndConditions: data.terms || false,
    };

    const response = await axios()({
      url: "/auth/local/register",
      method: "POST",
      data: userData,
    }).catch((error) => {
      console.log(error, error.response);
    });

    if (response) {
      const { jwt, user } = response.data;
      localStorage.setItem("token", jwt);
      localStorage.setItem("data", user);

      const res = await axios()({
        url: UPDATE_ROLE_URL,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        data: {
          role: data.type,
        },

        if(res) {
          if (user.type === "seller") router.push("/seller-onboarding");
          else router.push("/");
        },
      }).catch((error) => {
        setErrors(["Error occured while updating role."]);
        console.log(error, error.response);
      });

      if (res) {
        setSuccess(true);
        if (data.type === "seller")
          setTimeout(() => router.push("/seller-onboarding"), 2000);
        if (data.type === "customer") setTimeout(() => router.push("/"), 2000);
      }
    }
  };

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

                  <Select
                    choices={["Europe"]}
                    defaultValue="Region"
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
                    <div className="mb-20">or</div>
                    <div
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
                    </div>
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
