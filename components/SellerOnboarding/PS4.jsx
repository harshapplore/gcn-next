import { useState } from "react";
import { useSelector } from "react-redux";

import authAxios from "@/setups/axios";
import Message from "@/shared/Message";
import Button from "@/shared/Button";

import { isEmail } from "@/utils/validators";

const PS4 = ({ next }) => {
  const { seller } = useSelector((state) => state.user);

  const [contact, setContact] = useState(seller || {});
  const [errors, setErrors] = useState([]);

  const updateContact = (key, value) => {
    const newContact = { ...contact };
    newContact[key] = value;
    setContact(newContact);
  };

  const validate = () => {
    const errors = [];

    if (!contact.firstName) errors.push("Field First Name cannot be empty");
    if (!contact.lastName) errors.push("Field Last Name cannot be empty");
    if (!contact.phone) errors.push("Please enter a phone number");

    if (!contact.contactEmail) errors.push("Please enter a phone number");
    if (!contact.orderManagementEmail)
      errors.push("Order Management Email cannot be empty.");
    if (!contact.customerServiceEmail)
      errors.push("Customer Service email cannot be empty.");
    if (!contact.returnsEmail) errors.push("Returns email cannot be empty.");

    if (contact.contactEmail && !isEmail(contact.contactEmail))
      errors.push("Please input a valid contact email");
    if (contact.orderManagementEmail && !isEmail(contact.orderManagementEmail))
      errors.push("Please input a valid Order Management Email.");
    if (contact.customerServiceEmail && !isEmail(contact.customerServiceEmail))
      errors.push("Please enter a valid Customer Service Email.");
    if (contact.required && !isEmail(contact.returnsEmail))
      errors.push("Please input a valid returns email.");

    setErrors(errors);
    if (errors.length) return false;

    return true;
  };

  const submit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const res = authAxios()({
      url: `/sellers/${seller.id}`,
      method: "PUT",
      data: contact,
    });

    if (res) next();
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>Contact Information</h1>
        </div>
        <div className="w-form">
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
            <div className="flex mb-40">
              <input
                type="text"
                className="text-field w-input"
                maxLength={80}
                placeholder="First name*"
                required
                value={contact.firstName || ""}
                onChange={(e) => updateContact("firstName", e.target.value)}
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={80}
                placeholder="Last name*"
                required
                value={contact.lastName || ""}
                onChange={(e) => updateContact("lastName", e.target.value)}
              />
              <input
                type="tel"
                className="text-field w-input"
                maxLength={20}
                placeholder="Phone number*"
                required
                value={contact.phone || ""}
                onChange={(e) => updateContact("phone", e.target.value)}
              />
              <input
                type="email"
                className="text-field w-input"
                maxLength={80}
                placeholder="Email contact person*"
                required
                value={contact.contactEmail || ""}
                onChange={(e) => updateContact("contactEmail", e.target.value)}
              />
              <input
                type="email"
                className="text-field w-input"
                maxLength={80}
                data-name
                placeholder="Email order management*"
                required
                value={contact.orderManagementEmail || ""}
                onChange={(e) =>
                  updateContact("orderManagementEmail", e.target.value)
                }
              />
              <input
                type="email"
                className="text-field w-input"
                maxLength={80}
                placeholder="Email customer service*"
                required
                value={contact.customerServiceEmail || ""}
                onChange={(e) =>
                  updateContact("customerServiceEmail", e.target.value)
                }
              />
              <input
                type="email"
                className="text-field w-input"
                maxLength={256}
                placeholder="Email returns*"
                required
                value={contact.returnsEmail || ""}
                onChange={(e) => updateContact("returnsEmail", e.target.value)}
              />
            </div>
            <div className="center">
              <Button type="secondary" action={submit} name="Save & Continue" />
            </div>
          </form>

          {errors &&
            errors.length > 0 &&
            errors.map((error) => <Message text={error} status={-1} />)}
        </div>
      </div>
    </div>
  );
};

export default PS4;
