import { useState } from "react";
import { v4 } from "uuid";
import router, { useRouter } from "next/router";

import { UPDATE_ROLE_URL } from "@/config/constants";

import { axios } from "@/setups/axios";

import Select from "@/shared/Select";
import Message from "@/shared/Message";
import CheckBox from "@/shared/Checkbox";

const Register = ({ close }) => {
  const router = useRouter();

  const [data, setData] = useState({ type: "seller" });

  const [errors, setErrors] = useState();
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const err = [];

    if (!data.email) err.push("Email cannot be empty.");
    if (!data.password) err.push("Password cannot be empty.");
    if (!data.name) err.push("Name cannot be empty.");

    setErrors(err);

    if (err.length) return false;

    return true;
  };

  const submit = async (e) => {
    e.preventDefault();

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

  const updateData = (key, value) => {
    const newData = { ...data };
    newData[key] = value;
    setData(newData);
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
                  <form>
                    <input
                      type="text"
                      className="text-field w-input"
                      placeholder="Name"
                      value={data.name}
                      onChange={(e) => updateData("name", e.target.value)}
                    />

                    <input
                      type="text"
                      className="text-field w-input"
                      placeholder="Email Address"
                      value={data.email || ""}
                      onChange={(e) => updateData("email", e.target.value)}
                    />

                    <input
                      type="password"
                      className="text-field w-input"
                      placeholder="Password"
                      value={data.password || ""}
                      onChange={(e) => updateData("password", e.target.value)}
                    />

                    <Select
                      choices={[
                        "First Choice",
                        "Second Choice",
                        "Third Choice",
                      ]}
                      defaultValue="Region"
                      value={data.choice}
                      setValue={(value) => updateData("choice", value)}
                    />

                    <div className="flex mb-20">
                      <CheckBox
                        text="Newsletter"
                        value={data.newsletter}
                        setValue={(value) => updateData("newsletter", value)}
                      />
                    </div>
                    <div className="flex mb-20">
                      <CheckBox
                        text={"Accept Terms & Conditions and Privacy Policy"}
                        value={data.terms}
                        setValue={(value) => updateData("terms", value)}
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
                  </form>
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
