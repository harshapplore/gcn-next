import { useState, useEffect } from "react";

import TextInput from "@/shared/Input/Text";

const Password = () => {
  const [_data, _setData] = useState({});

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
          />

          <TextInput
            placeholder="New Password*"
            value={_data.password}
            setValue={(value) => setData({ ..._data, currentPassword: value })}
          />

          <TextInput
            placeholder="Confirm New Password*"
            value={_data.confirmPassword}
            setValue={(value) => _setDate({ ..._data, confirmPassword: value })}
          />
          <a className="button blue mr-10">Save Changes</a>
        </div>
      </div>
    </div>
  );
};

export default Password;
