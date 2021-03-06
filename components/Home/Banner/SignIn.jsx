import { useState } from "react";

import { axios } from "@/setups/axios";
import CheckBox from "@/shared/Checkbox";

import Message from "@/shared/Message";

const SignIn = ({ close, showRegister }) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  const updateData = (key, value) => {
    const newData = { ...data };
    newData[key] = value;
    setData(newData);
  };

  const validate = () => {
    const errors = [];

    if (!data.email) errors.push("Email cannot be empty.");
    if (!data.password) errors.push("Password cannot be empty.");

    if (
      data.email &&
      !data.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    )
      errors.push("Please input a valid email.");

    if (errors.length) {
      setErrors(errors);
      return false;
    }

    return true;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      console.log(errors);
      return;
    }

    const response = await axios()({
      url: "/auth/local",
      method: "POST",
      data: {
        identifier: data.email,
        password: data.password,
      },
    }).catch((error) => {
      console.log(error, error.response);
      return;
    });

    if (response) {
      const user = response.data;
      localStorage.setItem("token", response.data.jwt);

      localStorage.setItem("data", JSON.stringify(user));

      setErrors([]);
      setSuccess("You have logged in successfully");

      return response.data;
    }
  };

  return (
    <div className="popup-wrapper sign-in">
      <div className="overlay" onClick={close} />
      <div className="sign-in-popup">
        <h2>Sign In</h2>
        <div className="scroll-y">
          <div className="w-form">
            <form>
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                placeholder="Email Address"
                value={data.email || ""}
                onChange={(e) => updateData("email", e.target.value)}
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                placeholder="Password"
                required
                value={data.password || ""}
                onChange={(e) => updateData("password", e.target.value)}
              />

              <div className="flex mb-20">
                <CheckBox
                  text="Stay Signed In"
                  value={data.staySignedIn}
                  setValue={(value) => updateData("staySignedIn", value)}
                />
                <div className="forgot-password">Forgot password?</div>
              </div>
              <div className="center">
                <input
                  type="submit"
                  value="Login"
                  className="button blue w-button"
                  onClick={submit}
                />
              </div>
            </form>

            {errors &&
              errors.length > 0 &&
              errors.map((err) => <Message text={err} status={-1} />)}

            {success && <Message text={success} status={1} />}
          </div>
          <div className="center">
            <div className="mb-20">or</div>
            {/* <div className="mb-10">
              <div className="button secondary w-button">
                Continue with google
              </div>
            </div>
            <div className="mb-10">
              <div className="button secondary w-button">
                Continue with facebook
              </div>
            </div>
            <div className="mb-20">
              <div className="button secondary w-button">
                Continue with apple
              </div>
            </div> */}
            <div className="mb-10">Don't have an account?</div>
            <div>
              <div className="button w-button" onClick={showRegister}>
                Register
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default SignIn;
