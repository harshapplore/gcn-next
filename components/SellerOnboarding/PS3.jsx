import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import authAxios from "@/setups/axios";
import Select from "@/shared/Select";

const PS3 = ({ next }) => {
  const { seller } = useSelector((state) => state.user);

  const [shop, setShop] = useState(seller.shop || {});
  const [errors, setErrors] = useState([]);

  useEffect(() =>{
    if(seller.shop) setShop(seller.shop);
  }, [seller])

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
            shop: resShop.data.id,
          },
        });

        if (resSeller) {
          next();
        }
      }
      return;
    }

    if (seller.shop) {
      const resShop = await authAxios()({
        url: `/shops/${seller.shop.id}`,
        method: "PUT",
        data: shop,
      });

      if (resShop && resShop.data) {
        next();
      }
    }
  };

  const updateShopData = (key, value) => {
    const newShop = { ...shop };
    newShop[key] = value;
    setShop(newShop);
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
                value={shop.country}
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
                value={shop.defaultLanguage}
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
                value={shop.currency}
                setValue={(value) => updateShopData("currency", value)}
              />

              <Select
                defaultValue={
                  shop.serviceableCountries || "Serviceable Countries"
                }
                choices={[
                  "First Choice",
                  "Second Choice",
                  "Third Choice",
                  "Fourth Choice",
                ]}
                value={shop.serviceableCountries}
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

          {errors &&
            errors.length > 0 &&
            errors.map((err) => <Message text={err} status={-1} />)}
        </div>
      </div>
    </div>
  );
};

export default PS3;
