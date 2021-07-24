import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import authAxios from "@/setups/axios";

const PS4 = ({ next }) => {
  const { seller } = useSelector((state) => state.user);

  const [contact, setContact] = useState(seller || {});

  const updateContact = (key, value) => {
    const newContact = { ...contact };
    newContact[key] = value;
    setContact(newContact);
  };

  const submit = (e) => {
    e.preventDefault();

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
              <input
                type="submit"
                defaultValue="Save & Continue"
                data-wait="Please wait..."
                className="button blue w-button"
                onClick={submit}
              />
            </div>
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PS4;
