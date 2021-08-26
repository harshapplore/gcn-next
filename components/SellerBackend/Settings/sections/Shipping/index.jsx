import { useState, useEffect, useContext } from "react";

import { authAxios } from "@/setups/axios";
import { fetchSeller } from "@/slices/user";

import Radio from "@/shared/Input/Radio";
import CheckBox from "@/shared/Input/Checkbox";
import Select from "@/shared/Input/Select";
import TextInput from "@/shared/Input/Text";
import Button, { OutlinedButton } from "@/shared/Button";

import styles from "@/components/SellerBackend/backend.module.scss";
import ShippingContext from "./shipping.context";

/* Dropdown Data */
import countriesList from "@/_data/countries.json";
import currenciesList from "@/_data/currencies.json";
import deliveryTimes from "@/_data/deliveryTimes.json";

import { updateShop } from "@/_controllers/shop";

const ShipWeight = ({ weight, setWeight }) => {
  const [error, setError] = useState("");

  const cost = (value) => {
    if (isNaN(value)) return 0;
    return value;
  };

  return (
    <div className="delivery-cost">
      <div className="delivery-cost-kg">{weight.category}</div>
      <TextInput
        placeholder="Delivery Cost*"
        value={weight.cost}
        setValue={(value) => setWeight({ ...weight, cost: cost(value) })}
      />

      <Select
        choices={currenciesList}
        value={""}
        setValue={(index) =>
          setWeight({ ...weight, currency: currenciesList[index] })
        }
        placeholder={weight.currency || "Currency"}
        width="200px"
      />

      {/* <Select
        choices={[]}
        value=""
        setValue={(index) => setWeight({ ...weight, serviceProvider: "" })}
        placeholder="Shipping Service Provider"
      /> */}

      <Select
        choices={deliveryTimes}
        value=""
        setValue={(index) =>
          setWeight({ ...weight, deliveryTime: deliveryTimes[index] })
        }
        placeholder={weight.deliveryTime || "Delivery Time*"}
      />
    </div>
  );
};

const Ship = ({ country, weights, updateCountry, deleteCountry, save }) => {
  const [shippingCost, setShippingCost] = useContext(ShippingContext);

  return (
    <div className="dynamic-content">
      <div className="delivery-country">
        <div className="delivery-country-text">{country} #1</div>
        <div className="show-details">
          <div>Show Details</div>
          <img
            src="/images/expand-more-black-24-dp-copy-6.svg"
            loading="lazy"
            alt="expand"
          />
        </div>
      </div>
      <div>
        <div className="delivery-cost-text">Delivery cost by weight</div>

        {weights &&
          weights.length &&
          weights.map((weight, index) => {
            return (
              <ShipWeight
                weight={weight}
                setWeight={(weight) =>
                  updateCountry({
                    country,
                    weights: [
                      ...weights.slice(0, index),
                      weight,
                      ...weights.slice(index + 1),
                    ],
                  })
                }
              />
            );
          })}

        <div className="delivery-cost-button-wrapper">
          <a className="button blue mr-10" onClick={save}>
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

  return (
    <div className={styles["shipping-add-ctr"]}>
      <Select
        choices={countriesList}
        value={""}
        placeholder={country}
        setValue={(index) => {
          setCountry(countriesList[index]);
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

const Shipping = ({ shop }) => {
  const [shippingCost, setShippingCost] = useState([]);
  const [shippingOptions, setShippingOptions] = useState({});

  const value = { shippingCost, setShippingCost };

  const [showAddCountry, setShowAddCountry] = useState(false);

  useEffect(() => {
    if (!shop.shipping) {
      setShippingCost([]);
      setShippingOptions({});
      return;
    }

    const { shippingCost, ...options } = shop.shipping;

    setShippingCost(shippingCost);
    setShippingOptions(options);
  }, [shop.shipping]);

  const updateShipping = async (id) => {
    const shop = await updateShop(id, {
      shipping: { shippingCost, ...shippingOptions },
    });
  };

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
                      save={() => updateShipping(shop.id)}
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
              <div className={styles["ship-options"]}>
                <div className={styles["ship-checkbox"]}>
                  <CheckBox
                    text="Free Shipping from"
                    value={shippingOptions.freeDelivery}
                    setValue={(value) =>
                      setShippingOptions({
                        ...shippingOptions,
                        freeDelivery: value,
                      })
                    }
                  />
                </div>
                <div className={styles["ship-input"]}>
                  <TextInput
                    placeholder={100}
                    value={shippingOptions.freeDeliveryAmount}
                    setValue={(value) =>
                      setShippingOptions({
                        ...shippingOptions,
                        freeDeliveryAmount: value,
                      })
                    }
                  />
                </div>
                <div className={styles["ship-input"]}>
                  <Select
                    choices={currenciesList}
                    value=""
                    placeholder={shippingOptions.freeDeliveryCurrency}
                    setValue={(index) =>
                      setShippingOptions({
                        ...shippingOptions,
                        freeDeliveryCurrency: currenciesList[index],
                      })
                    }
                  />
                </div>
              </div>
              <div className="shipping-general-options">
                <CheckBox
                  text="Allow Shipping to packing station"
                  value={shippingOptions.pickUp}
                  setValue={(value) =>
                    setShippingOptions({ ...shippingOptions, pickUp: value })
                  }
                />
              </div>
              <div className="shipping-general-options">
                <CheckBox
                  text="CO2 Neutral Local Delivery"
                  value={shippingOptions.co2NeutralDelivery}
                  setValue={(value) =>
                    setShippingOptions({
                      ...shippingOptions,
                      co2NeutralDelivery: value,
                    })
                  }
                />
              </div>
              <div
                className="delivery-cost-button-wrapper moved-up"
                onClick={() => updateShipping(shop.id)}
              >
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
