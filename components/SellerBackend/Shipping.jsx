import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { authAxios } from "@/setups/axios";
import { fetchSeller } from "@/slices/user";

import styles from "./backend.module.scss";

import Radio from "@/shared/Input/Radio";
import CheckBox from "@/shared/Input/Checkbox";
import Select from "@/shared/Input/Select";

const WeightInput = ({ data, setData, currencies }) => {
  const updateValues = (index, key, value) => {
    const newData = {
      ...data,
    };
    newData[key] = value;
    setData(data.slice(0, index), newData, data.slice(index + 1));
  };

  console.log("Data", data);

  return (
    <>
      {data &&
        data.length &&
        data.map((d, index) => {
          return (
            <div className={styles["weight-input-ctr"]}>
              <span className={styles["weight-category"]}>
                <span> {d.category} </span> Kg
              </span>
              <input
                type="text"
                value={data.cost}
                placeholder="Delivery Cost*"
                onChange={(e) => updateValues(index, "cost", e.target.value)}
              />
              <Select
                choices={currencies}
                placeholder="Currency"
                value={d.currency}
                setValue={(value) => updateValues(index, "currency", value)}
              />
            </div>
          );
        })}
    </>
  );
};

const Shipping = () => {
  const [_deliveryByCountry, _setDeliveryByCountry] = useState(false);
  const [_deliveryByWeight, _setDeliveryByWeight] = useState(false);

  const [_countryDelivery, _setCountryDelivery] = useState();
  const [_weightDelivery, _setWeightDelivery] = useState();

  const countryCost = {
    country: "",
    cost: "",
    currency: "",
    timeRequired: "",
  };

  const weightCost = {
    category: "",
    cost: "",
    currency: "",
    deliveryTime: "",
  };

  const countries = ["Austria"];
  const currencies = ["Euro"];

  useEffect(() => {
    _setDeliveryByCountry({ ...countryCost });

    const weightCosts = [];
    const weightCategories = ["0-1", "1-5", "5-10", "10+"];
    for (let i = 0; i < weightCategories.length; i++) {
      weightCosts.push({ ...weightCost, category: weightCategories[i] });
    }
    _setWeightDelivery(weightCosts);
  }, []);

  console.log(_weightDelivery);

  return (
    <div className="dynamic-content">
      <div className="heading-wrapper mb-40">
        <h2>Shipping</h2>
      </div>

      <div className="w-form">
        <div className={styles["delivery-ctr"]}>
          <h3>
            <CheckBox
              value={_deliveryByCountry}
              setValue={(value) => _setDeliveryByCountry(value)}
            />
            Delivery Cost By Country
          </h3>

          {_deliveryByCountry && (
            <div className={styles["input-ctr"]}>This is input Container</div>
          )}
        </div>
        <div className={styles["delivery-ctr"]}>
          <h3>
            <CheckBox
              value={_deliveryByWeight}
              setValue={(value) => _setDeliveryByWeight(value)}
            />
            Delivery Cost By Weight
          </h3>

          {_deliveryByWeight && (
            <div className={styles["input-ctr"]}>
              <WeightInput
                data={_weightDelivery}
                setData={_setWeightDelivery}
                currencies={currencies}
              />
            </div>
          )}
        </div>
      </div>

      {/* <div className="w-form">
        <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
          <div className="product-add-block">
            <label className="checkbox-field w-clearfix w-radio">
              <span className="checkbox-label w-form-label">
                Delivery cost by country
              </span>
            </label>
            <div>
              <div className="flex mb-40">
                <input
                  type="text"
                  className="text-field grow w-input"
                  maxLength={256}
                  name="field-5"
                  data-name="Field 5"
                  placeholder="Product name*"
                  id="field-5"
                  required
                />
                <div className="select-wrapper">
                  <select
                    name="Select-6"
                    data-name="Select 6"
                    id="Select-6"
                    required
                    className="text-field select w-select"
                  >
                    <option value>Select one...</option>
                    <option value="First">First Choice</option>
                    <option value="Second">Second Choice</option>
                    <option value="Third">Third Choice</option>
                  </select>
                </div>
                <div className="select-wrapper">
                  <select
                    name="Select-3"
                    data-name="Select 3"
                    id="Select-3"
                    required
                    className="text-field pills w-select"
                  >
                    <option value>Select one...</option>
                    <option value="First">First Choice</option>
                    <option value="Second">Second Choice</option>
                    <option value="Third">Third Choice</option>
                  </select>
                </div>
              </div>
            </div>
            <label className="checkbox-field w-clearfix w-radio">
              <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input" />
              <input
                type="radio"
                data-name="Radio 3"
                id="radio-3"
                name="radio"
                defaultValue="Radio"
                required
                style={{ opacity: 0, position: "absolute", zIndex: -1 }}
              />
              <span className="checkbox-label w-form-label">
                Delivery cost by weight
              </span>
            </label>
            <div>
              <div className="flex mb-40">
                <input
                  type="text"
                  className="text-field grow w-input"
                  maxLength={256}
                  name="field-5"
                  data-name="Field 5"
                  placeholder="Product name*"
                  id="field-5"
                  required
                />
                <div className="select-wrapper">
                  <select
                    name="Select-6"
                    data-name="Select 6"
                    id="Select-6"
                    required
                    className="text-field select w-select"
                  >
                    <option value>Select one...</option>
                    <option value="First">First Choice</option>
                    <option value="Second">Second Choice</option>
                    <option value="Third">Third Choice</option>
                  </select>
                </div>
                <div className="select-wrapper">
                  <select
                    name="Select-3"
                    data-name="Select 3"
                    id="Select-3"
                    required
                    className="text-field pills w-select"
                  >
                    <option value>Select one...</option>
                    <option value="First">First Choice</option>
                    <option value="Second">Second Choice</option>
                    <option value="Third">Third Choice</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label className="w-checkbox checkbox-field">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                <input
                  type="checkbox"
                  id="checkbox-6"
                  name="checkbox-6"
                  data-name="Checkbox 6"
                  style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                />
                <span className="checkbox-label w-form-label">
                  Sample Answer
                </span>
              </label>
            </div>
            <div>
              <label className="w-checkbox checkbox-field">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                <input
                  type="checkbox"
                  style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                />
                <span className="checkbox-label w-form-label">
                  Sample Answer
                </span>
              </label>
            </div>
            <div>
              <label className="w-checkbox checkbox-field">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                <input
                  type="checkbox"
                  id="checkbox-6"
                  name="checkbox-6"
                  data-name="Checkbox 6"
                  style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                />
                <span className="checkbox-label w-form-label">
                  Sample Answer
                </span>
              </label>
            </div>
          </div>
          <input
            type="submit"
            defaultValue="Save"
            data-wait="Please wait..."
            className="button blue mr-10 w-button"
          />
        </form>
      </div> */}
    </div>
  );
};

export default Shipping;
