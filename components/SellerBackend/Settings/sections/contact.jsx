import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import TextInput from "@/shared/Input/Text";
import { _data } from "cheerio/lib/api/attributes";

const Contact = () => {
  const { user } = useSelector((state) => state.user);
  const { seller } = useSelector((state) => state.seller);

  const [_joinDate, _setJoinDate] = useState();
  const [_data, _setDaa] = useState({});

  useEffect(() => {
    if (!user.id) return;

    _setJoinDate(new Date(user.createdAt));
  }, []);

  return (
    <div className="settings-block">
      <h3 className="headline-5 mb-30">About me</h3>
      <div className="account-current-_data">
        <div>
          <div className="label">Current Name</div>
          <div>{user.name}</div>
        </div>
        <div>
          <div className="label">Current Phone Number</div>
          <div>{seller.phone}</div>
        </div>
        <div>
          <div className="label">Membership since</div>
          <div>
            {_joinDate &&
              _joinDate.getDate() +
                "/" +
                _joinDate.getMonth() +
                "/" +
                _joinDate.getFullYear()}
          </div>
        </div>
      </div>
      <h4 className="subtitle-2 mb-10">Change Contact Information</h4>
      <div className="w-form">
        <div className="account-form-1">
          <TextInput
            placeholder={user.name || "Name"}
            value={_data.name}
            setValue={(value) => _setDaa({ ..._data, name: value })}
          />

          <TextInput
            placeholder={seller.phone || "Phone Number"}
            value={_data.phone}
            setValue={(value) => _setDaa({ ..._data, phone: value })}
          />

          <TextInput
            placeholder={seller.contactEmail || "Email Contact Person"}
            value={_data.contactEmail}
            setValue={(value) => _setDaa({ ..._data, contactEmail: value })}
          />

          <TextInput
            placeholder={seller.orderMangementEmail || "Email Order Management"}
            value={_data.orderMangementEmail}
            setValue={(value) =>
              _setDaa({ ..._data, orderManagementEmail: value })
            }
          />

          <TextInput
            placeholder={seller.returnsEmail || "Email Returns"}
            value={_data.returnsEmail}
            setValue={(value) => _setDaa({ ..._data, returnsEmail: value })}
          />

          <TextInput
            placeholder={
              seller.customerServiceEmail || "Email Customer Service"
            }
            value={_data.customerServiceEmail}
            setValue={(value) =>
              _setDaa({ ..._data, customerServiceEmail: value })
            }
          />
        </div>
        <a className="button blue mr-10">Save Changes</a>
      </div>
    </div>
  );
};

export default Contact;
