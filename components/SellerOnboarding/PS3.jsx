import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { fetchUser, fetchSeller } from "slices/user";
import authAxios from "setups/axios";

import Select from "shared/Select";
import { data } from "browserslist";

const PS3 = ({ next }) => {
  const { seller } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [shop, setShop] = useState(seller.shop || {});
  const [errors, setErrors] = useState([]);

  console.log(shop);

  useEffect(() => {
    if (!seller || !seller.id) {
      dispatch(fetchSeller());
    }
  }, [seller]);

  const validate = () => {
    const errs = [];

    if (!shop.name) errs.push("Shop Name Cannot be empty");
    if (!shop.streetAddress) errs.push("Street Address cannot be empty.");
    if (!shop.city) errs.push("City cannot be empty. Please fill in.");
    if (!shop.country) errs.push("Country cannot be empty.");
    if (!shop.vat) errs.push("Please fill in your VAT details.");
    if (!shop.defaultLanguage) errs.push("Please select a default language.");
    if (!shop.currency) errs.push("Please choose your preffered currency.");
    if (!shop.serviceableCountries)
      errs.push("Please choose Serviceable Countries");

    setErrors(errs);

    if (errs.length) return false;

    return true;
  };

  const submit = async (e) => {
    e.preventDefault();

    console.log("--", seller);

    if (!validate()) return;

    if (!seller.shop) {
      const resShop = await authAxios()({
        url: "/shops",
        method: "POST",
        data: shop,
      });

      if (resShop) {
        const resSeller = await authAxios()({
          url: `/sellers/${seller.id}`,
          method: "PUT",
          data: {
            onboardStatus: 3,
            shop: shop.data.id,
          },
        });

        if (resSeller) {
          dispatch(fetchSeller());
          next();
        }
      }
      return;
    }

    const resShop = await authAxios()({
      url: `/shops/${seller.shop.id}`,
      method: "PUT",
      data: shop,
    });

    if (resShop && resShop.data) {
      next();
    }
  };

  const updateShopData = (key, value) => {
    const newShop = { ...shop };
    newShop[key] = value;
    setShop(newShop);

    console.log(newShop);
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>Shop Information</h1>
        </div>
        <div className="w-form">
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
            <div className="flex mb-40">
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                name="field-5"
                data-name="Field 5"
                placeholder="Full Company name*"
                value={shop.name || ""}
                onChange={(e) => updateShopData("name", e.target.value)}
                required
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                placeholder="Street address*"
                required
                value={shop.streetAddress || ""}
                onChange={(e) =>
                  updateShopData("streetAddress", e.target.value)
                }
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={10}
                placeholder="Postal code*"
                required
                value={shop.postalCode || ""}
                onChange={(e) => updateShopData("postalCode", e.target.value)}
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={100}
                placeholder="City*"
                required
                value={shop.city || ""}
                onChange={(e) => updateShopData("city", e.target.value)}
              />
              <Select
                defaultValue={shop.country || "Country"}
                choices={[
                  "Germany",
                  "USA",
                  "France",
                  "Italy",
                  "India",
                  "England",
                  "Greece",
                ]}
                value={data.country}
                setValue={(value) => updateShopData("country", value)}
              />

              <input
                type="text"
                maxLength={256}
                placeholder="VAT"
                className="text-field w-input"
                value={shop.vat || ""}
                onChange={(e) => updateShopData("vat", e.target.value)}
              />

              <Select
                defaultValue={shop.defaultLanguage || "Select Language"}
                choices={["English", "German"]}
                value={data.defaultLanguage}
                setValue={(value) => updateShopData("defaultLanguage", value)}
              />

              <Select
                defaultValue={shop.currency || "Currency"}
                choices={[
                  "Euro",
                  "Second Choice",
                  "Third Choice",
                  "Fourth Choice",
                ]}
                value={data.currency}
                setValue={(value) => updateShopData("currency", value)}
              />

              <Select
                defaultValue={ shop.serviceableCountries || "Serviceable Countries" }
                choices={[
                  "First Choice",
                  "Second Choice",
                  "Third Choice",
                  "Fourth Choice",
                ]}
                value={data.serviceableCountries}
                setValue={(value) =>
                  updateShopData("serviceableCountries", value)
                }
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

export default PS3;
