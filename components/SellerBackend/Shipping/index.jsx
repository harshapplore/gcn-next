import { useState, useEffect, useContext } from "react";

import { authAxios } from "@/setups/axios";
import { fetchSeller } from "@/slices/user";

import Radio from "@/shared/Input/Radio";
import CheckBox from "@/shared/Input/Checkbox";
import Select from "@/shared/Input/Select";
import TextInput from "@/shared/Input/Text";
import Button, { OutlinedButton } from "@/shared/Button";

import styles from "./../backend.module.scss";
import ShippingContext from "./shipping.context";
import shippingContext from "./shipping.context";

const ShipWeight = ({ weight, setWeight }) => {
  return (
    <div className="delivery-cost">
      <div className="delivery-cost-kg">{weight.category}</div>
      <div className="text-field-2 text-field-2--flex">
        <div>{weight.cost}</div>
        <div className="change">
          <div>Change</div>
          <img
            src="images/edit-black-24-dp.svg"
            loading="lazy"
            alt="Edit"
            className="change-img"
          />
        </div>
      </div>

      <Select choices={["EUR", "USD"]} placeholder="" />

      <Select choices={[]} placeholder="Shipping Service Provider" />

      <Select choices={[]} placeholder="Delivery Time*" />
    </div>
  );
};

const Ship = ({ country, weights, updateCountry, deleteCountry }) => {
  console.log("Weights", weights);

  return (
    <div className="dynamic-content">
      <div className="delivery-country">
        <div className="delivery-country-text">{country} #1</div>
        <div className="show-details">
          <div>Show Details</div>
          <img
            src="images/expand-more-black-24-dp-copy-6.svg"
            loading="lazy"
            alt="expand"
          />
        </div>
      </div>
      <div>
        <div className="delivery-cost-text">Delivery cost by weight</div>

        {weights &&
          weights.length &&
          weights.map((weight) => {
            return <ShipWeight weight={weight} setWeight={() => {}} />;
          })}

        <div className="delivery-cost-button-wrapper">
          <a className="button blue mr-10" onClick={() => {}}>
            Save Changes
          </a>
          <a className="button blue secondary" onClick={deleteCountry}>
            Delete Country
          </a>
        </div>
      </div>
    </div>
  );
};

const AddCountry = ({ availableCountries, close }) => {
  const [country, setCountry] = useState("");
  const weights = [
    {
      category: "0-1 kg",
      cost: 0,
      currency: "",
      serviceProvider: "",
      deliveryTime: "",
    },
    {
      category: "1-5 kg",
      cost: 0,
      currency: "",
      serviceProvider: "",
      deliveryTime: "",
    },
    {
      category: "5-10 kg",
      cost: 0,
      currency: "",
      serviceProvider: "",
      deliveryTime: "",
    },
    {
      category: "> 10 kg",
      cost: 0,
      currency: "",
      serviceProvider: "",
      deliveryTime: "",
    },
  ];

  const { shippingCost, setShippingCost } = useContext(ShippingContext);
  const [error, setError] = useState("");

  const addCountry = () => {
    setError("");

    if (!country) {
      setError("Please select a country.");
      return;
    }

    setShippingCost([...shippingCost, { country, weights }]);

    close();
  };

  const countries = [
    "Austria",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Ukraine",
    "Poland",
    "Romania",
    "Netherlands",
    "Czech",
    "Portugal",
    "Sweden",
  ];

  return (
    <div className={styles["shipping-add-ctr"]}>
      <Select
        choices={countries}
        value={""}
        placeholder={country}
        setValue={(index) => {
          setCountry(countries[index]);
        }}
        error={error}
      />
      <div className={styles["action-buttons"]}>
        <Button name="Add" caps={true} action={addCountry} />
        <OutlinedButton
          name="Cancel"
          caps={true}
          type="secondary"
          action={close}
        />
      </div>
    </div>
  );
};

const Shipping = () => {
  const [availableCountries, setAvailableCountries] = useState([]);
  const [shippingCost, setShippingCost] = useState([]);

  const value = { shippingCost, setShippingCost };

  const [showAddCountry, setShowAddCountry] = useState(false);

  console.log(shippingCost);

  return (
    <ShippingContext.Provider value={value}>
      <div className="dynamic-content">
        <div className="heading-wrapper mb-40">
          <h2>Shipping</h2>
        </div>
        <div className="w-form">
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
            <div className="product-add-block">
              <h3 className="mb-30">Shipping Settings</h3>

              <h4 className="mb-20">Country Delivery Options</h4>

              {shippingCost &&
                shippingCost.length > 0 &&
                shippingCost.map((cost, index) => {
                  return (
                    <Ship
                      key={"ship" + index}
                      country={cost.country}
                      weights={cost.weights}
                      updateCountry={(update) => {
                        setShippingCost([
                          ...shippingCost.slice(0, index),
                          update,
                          ...shippingCost.slice(index + 1),
                        ]);
                      }}
                      deleteCountry={() => {
                        setShippingCost([
                          ...shippingCost.slice(0, index),
                          ...shippingCost.slice(index + 1),
                        ]);
                      }}
                    />
                  );
                })}

              <div
                className="add-country"
                onClick={() => setShowAddCountry(true)}
              >
                <div className="delivery-country-text">Add Country</div>
              </div>
              {showAddCountry && (
                <AddCountry close={() => setShowAddCountry(false)} />
              )}
              <div className="shipping-spacer" />
              <h4 className="mb-20">General Delivery Options</h4>
              <div className="shipping-general-options">
                <label className="w-checkbox checkbox-field mb-0">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked" />
                  <input
                    type="checkbox"
                    id="checkbox-3"
                    name="checkbox-3"
                    data-name="Checkbox 3"
                    defaultChecked
                    style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                  />
                  <span className="checkbox-label medium w-form-label">
                    Free Shipping from
                  </span>
                </label>
                <input
                  type="number"
                  className="text-field-2 text-field-2--price w-input"
                  maxLength={256}
                  name="Price"
                  data-name="Price"
                  placeholder={100}
                  id="Price"
                />
                <select
                  name="Currency-2"
                  data-name="Currency 2"
                  id="Currency-2"
                  required
                  className="text-field-2 text-field-2--eur w-select"
                >
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              <div className="shipping-general-options">
                <label className="w-checkbox checkbox-field mb-0">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked" />
                  <input
                    type="checkbox"
                    id="checkbox-3"
                    name="checkbox-3"
                    data-name="Checkbox 3"
                    defaultChecked
                    style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                  />
                  <span className="checkbox-label w-form-label">
                    Allow shipping to packing station
                  </span>
                </label>
              </div>
              <div className="shipping-general-options">
                <label className="w-checkbox checkbox-field mb-0">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked" />
                  <input
                    type="checkbox"
                    id="checkbox-3"
                    name="checkbox-3"
                    data-name="Checkbox 3"
                    defaultChecked
                    style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                  />
                  <span className="checkbox-label w-form-label">
                    CO2-neutral local delivery
                  </span>
                </label>
              </div>
              <div className="delivery-cost-button-wrapper moved-up">
                <a className="button blue">Save Changes</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ShippingContext.Provider>
  );
};

export default Shipping;
