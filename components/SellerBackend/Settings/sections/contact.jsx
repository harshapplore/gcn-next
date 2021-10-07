import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TextInput from "@/shared/Input/Text";
import Button from "@/shared/Button";

import { fetchSeller, fetchUser } from "@/slices/user";

import { putSeller } from "@/_controllers/seller";
import { putUser } from "@/_controllers/user";
import { isEmail } from "@/utils/validators";

const Contact = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { seller } = useSelector((state) => state.seller);

  const [_joinDate, _setJoinDate] = useState();
  const [_data, _setData] = useState({
    name: "",
    phone:"",
    contactEmail: ""  ,
    orderManagementEmail: "",
    returnsEmail: "",
    customerServiceEmail:""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user.id) return;

    _setJoinDate(new Date(user.createdAt));
  }, []);
  useEffect(() => {
    if (seller && user ) {
      _setData({
        name: user.name,
        phone:seller.phone ? seller.phone : (seller.basicInformationAnswers ? seller.basicInformationAnswers.mobile :""),
        contactEmail:seller.shop ? seller.shop.contactEmail : ""  ,
        orderManagementEmail:seller.shop ? seller.shop.orderManagementEmail : "",
        returnsEmail:seller.shop ? seller.shop.returnsEmail : "",
        customerServiceEmail:seller.shop ? seller.shop.customerServiceEmail : ""
      })
    }
    
  }, [seller,user]);
  console.log(seller)
  console.log(user)


  const validate = () => {
    const {
      contactEmail,
      orderManagementEmail,
      returnsEmail,
      customerServiceEmail,
    } = _data;

    const errors = {};

    if (contactEmail && !isEmail(contactEmail))
      errors.contactEmail = "Please provide a valid contact email.";

    if (orderManagementEmail && !isEmail(orderManagementEmail))
      errors.orderManagementEmail = "Please provide a valid email.";

    if (returnsEmail && !isEmail(returnsEmail))
      errors.returnsEmail = "Please provide valid email.";

    if (customerServiceEmail && !isEmail(customerServiceEmail))
      errors.customerServiceEmail = "Please provide customer service email.";

    setErrors(errors);

    if (Object.keys(errors).length) return false;

    return true;
  };

  const updateSellerData = async ({ sellerId, userId }) => {
    if (!validate()) return;

    setLoading(true);

    console.log(_data)

    const seller = await putSeller(sellerId, _data);

    const user = await putUser(userId, _data);

    dispatch(fetchSeller());
    dispatch(fetchUser());
    _setData({});

    setLoading(false);

    return { seller, user };
  };

  return (
    <div className="settings-block">
      <h3 className="headline-5 mb-30">About me</h3>
      <div className="account-current-data">
        <div>
          <div className="label">Current Name</div>
          <div>{user.name}</div>
        </div>
        <div>
          <div className="label">Current Phone Number</div>
          <div>{seller.phone || _data.phone}</div>
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
            setValue={(value) => _setData({ ..._data, name: value })}
            error={errors.name}
          />

          <TextInput
            placeholder={seller.phone || "Phone Number"}
            value={_data.phone}
            setValue={(value) => _setData({ ..._data, phone: value })}
            error={errors.phone}
          />

          <TextInput
            placeholder={seller.contactEmail || "Email Contact Person"}
            value={_data.contactEmail}
            setValue={(value) => _setData({ ..._data, contactEmail: value })}
            error={errors.contactEmail}
          />

          <TextInput
            placeholder={
              seller.orderManagementEmail || "Email Order Management"
            }
            value={_data.orderManagementEmail}
            setValue={(value) =>
              _setData({ ..._data, orderManagementEmail: value })
            }
            error={errors.orderManagementEmail}
          />

          <TextInput
            placeholder={seller.returnsEmail || "Email Returns"}
            value={_data.returnsEmail}
            setValue={(value) => _setData({ ..._data, returnsEmail: value })}
            error={errors.returnsEmail}
          />

          <TextInput
            placeholder={
              seller.customerServiceEmail || "Email Customer Service"
            }
            value={_data.customerServiceEmail}
            setValue={(value) =>
              _setData({ ..._data, customerServiceEmail: value })
            }
            error={errors.customerServiceEmail}
          />
        </div>

        <Button
          type="secondary"
          name="Save Changes"
          loading={loading}
          caps={true}
          action={() =>
            updateSellerData({ sellerId: seller.id, userId: user.id })
          }
        />
      </div>
    </div>
  );
};

export default Contact;
