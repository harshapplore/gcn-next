import { useState, useEffect } from "react";

import TextInput from "@/shared/Input/Text";
import { validate } from "uuid";
import error from "@/slices/error";

const Password = () => {
  const [_data, _setData] = useState({});

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!_data.currentPassword)
      errors.currentPassword = "Current Password cannot be empty.";

    if (!_data.password) errors.password = "New Password cannot be empty.";

    if (!_data.confirmPassword)
      errors.confirmPassword = "Please re-enter your new password";

    if (_data.confirmPassword && !(_data.password === _data.confirmPassword))
      errors.confirmPassword = "Passwords do not match. Please re-renter your new password.";

    setErrors(errors);

    if (Object.keys(errors).length) return false;

    return true;
  };

  const changePasswordHandler = () => {
    if (!validate()) return;
  };

  console.log(errors);

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
            value={_data.currentPassword}
            setValue={(value) => _setData({ ..._data, currentPassword: value })}
            error={errors.currentPassword}
          />

          <TextInput
            placeholder="New Password*"
            value={_data.password}
            setValue={(value) => _setData({ ..._data, password: value })}
            error={errors.password}
          />

          <TextInput
            placeholder="Confirm New Password*"
            value={_data.confirmPassword}
            setValue={(value) => _setData({ ..._data, confirmPassword: value })}
            error={errors.confirmPassword}
          />
          <a className="button blue mr-10" onClick={changePasswordHandler}>
            Save Changes
          </a>
        </div>
      </div>
    </div>
  );
};

export default Password;
