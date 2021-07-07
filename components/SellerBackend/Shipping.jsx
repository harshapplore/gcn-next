import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { authAxios } from "setups/axios";
import { fetchSeller } from "slices/user";

const Shipping = () => {
  const [] = useState();

  return (
    <div className="dynamic-content">
      <div className="heading-wrapper mb-40">
        <h2>Shipping</h2>
        <div className="overline-text">30 Products</div>
      </div>
      <div className="w-form">
        <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
          <div className="product-add-block">
            <label className="checkbox-field w-clearfix w-radio">
              <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input" />
              <input
                type="radio"
                data-name="Radio 2"
                id="radio-2"
                name="radio"
                defaultValue="Radio"
                required
                style={{
                  opacity: 0,
                  position: "absolute",
                  zIndex: -1,
                }}
              />
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
                style={{
                  opacity: 0,
                  position: "absolute",
                  zIndex: -1,
                }}
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
                  style={{
                    opacity: 0,
                    position: "absolute",
                    zIndex: -1,
                  }}
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
                  style={{
                    opacity: 0,
                    position: "absolute",
                    zIndex: -1,
                  }}
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
                  style={{
                    opacity: 0,
                    position: "absolute",
                    zIndex: -1,
                  }}
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
        <div className="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
