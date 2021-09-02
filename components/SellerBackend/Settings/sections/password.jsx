import { useState, useEffect } from "react";

import TextInput from "@/shared/Input/Text";
import Button from "@/shared/Button";
import SuccessInput from "@/shared/Input/SuccessInput";

import { changePassword } from "@/_controllers/user";
import error from "@/slices/error";

const Password = () => {
  const [_data, _setData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = () => {
    const errors = {};

    if (!_data.currentPassword)
      errors.currentPassword = "Current Password cannot be empty.";

    if (!_data.password) errors.password = "New Password cannot be empty.";

    if (!_data.confirmPassword)
      errors.confirmPassword = "Please re-enter your new password";

    if (_data.confirmPassword && !(_data.password === _data.confirmPassword))
      errors.confirmPassword =
        "Passwords do not match. Please re-renter your new password.";

    setErrors(errors);

    if (Object.keys(errors).length) return false;

    return true;
  };

  const changePasswordHandler = async () => {
    if (!validate()) return;

    setLoading(true);

    const res = await changePassword(_data.currentPassword, _data.password);

    console.log("res", res);

    setSuccess(res.message);

    setTimeout(() => setSuccess(""), 2000);

    setLoading(false);
  };

  return (
    <div className="settings-block">
      <h3 className="headline-5 mb-30">Password</h3>
      <div className="account-form-2">
        <div>
          <div className="label"></div>
          <div></div>
        </div>
        <div className="w-form">
          <h4 className="subtitle-2 mb-10">Change Password</h4>

          <TextInput
            placeholder="Current Password *"
            type="password"
            value={_data.currentPassword}
            setValue={(value) => _setData({ ..._data, currentPassword: value })}
            error={errors.currentPassword}
          />

          <TextInput
            placeholder="New Password*"
            type="password"
            value={_data.password}
            setValue={(value) => _setData({ ..._data, password: value })}
            error={errors.password}
          />

          <TextInput
            type="password"
            placeholder="Confirm New Password*"
            value={_data.confirmPassword}
            setValue={(value) => _setData({ ..._data, confirmPassword: value })}
            error={errors.confirmPassword}
          />

          <div>{success && <SuccessInput message={success} />}</div>

          <Button
            type="secondary"
            loading={loading}
            action={changePasswordHandler}
            name="Save Changes"
          />
        </div>
      </div>
    </div>
  );
};

export default Password;
