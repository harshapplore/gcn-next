import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ShopProgressBar from "./Utils/ShopProgressBar";
import countries from "../../_data/countries.json"
import Select from "@/shared/Select";

const Seller_Shop_Shipping_Settings = ({ nextPage }) => {
  const { seller } = useSelector((state) => state.user);
  const [errors, setErrors] = useState([]);
  const [showCountryDetails, setShowCountryDetails] = useState(false);
  const [country, setCountry] = useState("");
  const [cost0to1Kg, setCost0to1Kg] = useState("");
  const [editCost0to1Kg, setEditCost0to1Kg] = useState(false);
  const [cost1to5Kg, setCost1to5Kg] = useState("");
  const [editCost1to5Kg, setEditCost1to5Kg] = useState(false);
  const [cost5to10Kg, setCost5to10Kg] = useState("");
  const [editCost5to10Kg, setEditCost5to10Kg] = useState(false);
  const [costMoreThan10Kg, setcostMoreThan10Kg] = useState("");
  const [editcostMoreThan10Kg, setEditcostMoreThan10Kg] = useState(false);
  const [freeShippingFrom, setFreeShippingFrom] = useState(false);
  const [allowShippingToPackingStation, setAllowShippingToPackingStation] = useState(false);
  const [CO2Neutral, setCO2Neutral] = useState(false);

  const [currency, setCurrency] = useState("");
  const [shippingService, setShippingService] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  // const [applePay, setApplePay] = useState(false);
  // const [stripe, setStripe] = useState(false);
  // const [paypal, setPaypal] = useState(false);
  // const [creditCard, setCreditCard] = useState(false);

  const currencyOptions = ["EUR", "USD"]
  const serviceProviderOptions = ["Choice 1", "Choice 2"]
  const deliveryTimeOptions = ["Choice 1", "Choice 2"]


  const [editName, setEditName] = useState(false);
  const [name, setName] = useState("");
  const [editCEO, setEditCEO] = useState(false);
  const [CEO, setCEO] = useState("");
  const [editPhone, setEditPhone] = useState(false);
  const [phone, setPhone] = useState("");
  const [editEmail, setEditEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [editCardNumber, setEditCardNumber] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [editNameOnCard, setEditNameOnCard] = useState(false);
  const [nameOnCard, setNameOnCard] = useState("");
  const [region, setRegion] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  // console.log(seller)
  // useEffect(() => {
  //   if (seller.questionaire) setInitials(seller.questionaire);
  // }, [seller]);

  const checkBoxStyle = { opacity: 0, position: "absolute", zIndex: -1 }



  const validate = () => {
    const err = [];


    setErrors(err);

    if (err.length) return false;

    return true;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!validate()) return;


    // const response = await authAxios()({
    //   url: `sellers/${seller.id}`,
    //   method: "PUT",
    //   data: {
    //     onboardStatus: 1,
    //     questionaire: answers,
    //   },
    // });

    // if (cardConfirmation) {
    nextPage();
    // }
  };

  return (
    <div className="page-section wf-section">
      <div className="container">
        <div className="heading-wrapper">
          <h1 className="headline-2 mb-30">Create your Shop</h1>
          <br />
          <ShopProgressBar />
          <div className="settings-block">
            <h3 className="headline-5 mb-30">Shipping Settings</h3>
            <div className="w-form">
              <form>
                <ol role="list" className="assessment-list assessment-list--3">
                  <li>
                    <div className="subtitle-2">Country Delivery Options</div>
                    <div className="assessment-list-content">
                      <div className="assessment-spacer"></div>
                      <div className="dynamic-content">
                        <div className="delivery-country">
                          <div className="delivery-country-text">
                            <div> {country ? country : "Austria"}</div>
                          </div>
                          <div className="show-details">
                            <div htmlFor="show-details">Show Details</div>
                            <img id="show-details" src="../images/expand-more-black-24-dp-copy-6.svg" loading="lazy" alt="expand" onClick={() => setShowCountryDetails(!showCountryDetails)} style={{ cursor: "pointer" }} />

                          </div>
                        </div>
                        <br />
                        {showCountryDetails &&
                          countries.length && <Select choices={countries} required={true} value={countries} setValue={countries} defaultValue="Austria" width="100%" />}
                        {/* <Select choices={currencyOptions} required={true} value={currencyOptions} setValue={currencyOptions} defaultValue="EUD" />
                                                        <Select choices={serviceProviderOptions} required={true} value={serviceProviderOptions} setValue={serviceProviderOptions} defaultValue="Choice 1" width="inherit" />
                                                        <Select choices={deliveryTimeOptions} required={true} value={deliveryTimeOptions} setValue={deliveryTimeOptions} defaultValue="Choice 1" /> */}
                        <div>
                          <div className="delivery-cost-text">Delivery cost by weight</div>
                          <div className="delivery-cost">
                            <div className="delivery-cost-kg">0 – 1 kg</div>
                            <div className="input-x input-x--flex">
                              {!editCost0to1Kg ? <div className={`${!editCost0to1Kg ? "" : " hidden"}`}>{cost0to1Kg ? cost0to1Kg : "Delivery cost"}</div> :
                                <input
                                  onChange={(e) => setCost0to1Kg(e.target.value)}
                                  value={cost0to1Kg}
                                  type="text"
                                  className="input-x-edit w-input"
                                  maxLength="256"
                                  placeholder="Delivery cost *"
                                  required=""
                                />}
                              <div className="input-x__change">
                                <div style={{ cursor: "pointer" }} onClick={() => setEditCost0to1Kg(!editCost0to1Kg)}>Change</div>
                                <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                              </div>
                            </div>

                            <select
                              onChange={(e) => setCurrency(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="EUR">EUR</option>
                              {currencyOptions && currencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                            <select
                              onChange={(e) => setShippingService(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="">Shipping Serveice Providers *</option>
                              {serviceProviderOptions && serviceProviderOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                            <select
                              onChange={(e) => setDeliveryTime(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="">Delivery time *</option>
                              {deliveryTimeOptions && deliveryTimeOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>

                            <div className="delivery-cost-kg">1 – 5 kg</div>
                            <div className="input-x input-x--flex">
                              {!editCost1to5Kg ? <div className={`${!editCost1to5Kg ? "" : " hidden"}`}>{cost1to5Kg ? cost1to5Kg : "Delivery cost"}</div> :
                                <input
                                  onChange={(e) => setCost1to5Kg(e.target.value)}
                                  value={cost1to5Kg}
                                  type="text"
                                  className="input-x-edit w-input"
                                  maxLength="256"
                                  placeholder="Delivery cost *"
                                  required=""
                                />}
                              <div className="input-x__change">
                                <div style={{ cursor: "pointer" }} onClick={() => setEditCost1to5Kg(!editCost1to5Kg)}>Change</div>
                                <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                              </div>
                            </div>

                            <select
                              onChange={(e) => setCurrency(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="EUR">EUR</option>
                              {currencyOptions && currencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                            <select
                              onChange={(e) => setShippingService(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="">Shipping Serveice Providers *</option>
                              {serviceProviderOptions && serviceProviderOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                            <select
                              onChange={(e) => setDeliveryTime(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="">Delivery time *</option>
                              {deliveryTimeOptions && deliveryTimeOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>

                            <div className="delivery-cost-kg">5 – 10 kg</div>
                            <div className="input-x input-x--flex">
                              {!editCost5to10Kg ? <div className={`${!editCost5to10Kg ? "" : " hidden"}`}>{cost5to10Kg ? cost5to10Kg : "Delivery cost"}</div> :
                                <input
                                  onChange={(e) => setCost5to10Kg(e.target.value)}
                                  value={cost5to10Kg}
                                  type="text"
                                  className="input-x-edit w-input"
                                  maxLength="256"
                                  placeholder="Delivery cost *"
                                  required=""
                                />}
                              <div className="input-x__change">
                                <div style={{ cursor: "pointer" }} onClick={() => setEditCost5to10Kg(!editCost5to10Kg)}>Change</div>
                                <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                              </div>
                            </div>

                            <select
                              onChange={(e) => setCurrency(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="EUR">EUR</option>
                              {currencyOptions && currencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                            <select
                              onChange={(e) => setShippingService(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="">Shipping Serveice Providers *</option>
                              {serviceProviderOptions && serviceProviderOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                            <select
                              onChange={(e) => setDeliveryTime(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="">Delivery time *</option>
                              {deliveryTimeOptions && deliveryTimeOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>

                            <div className="delivery-cost-kg">&gt; 10 kg</div>
                            <div className="input-x input-x--flex">
                              {!editcostMoreThan10Kg ? <div className={`${!editcostMoreThan10Kg ? "" : " hidden"}`}>{costMoreThan10Kg ? costMoreThan10Kg : "Delivery cost"}</div> :
                                <input
                                  onChange={(e) => setcostMoreThan10Kg(e.target.value)}
                                  value={costMoreThan10Kg}
                                  type="text"
                                  className="input-x-edit w-input"
                                  maxLength="256"
                                  placeholder="Delivery cost *"
                                  required=""
                                />}
                              <div className="input-x__change">
                                <div style={{ cursor: "pointer" }} onClick={() => setEditcostMoreThan10Kg(!editcostMoreThan10Kg)}>Change</div>
                                <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                              </div>
                            </div>

                            <select
                              onChange={(e) => setCurrency(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="EUR">EUR</option>
                              {currencyOptions && currencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                            <select
                              onChange={(e) => setShippingService(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="">Shipping Serveice Providers *</option>
                              {serviceProviderOptions && serviceProviderOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                            <select
                              onChange={(e) => setDeliveryTime(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="">Delivery time *</option>
                              {deliveryTimeOptions && deliveryTimeOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                          </div>
                          <div className="delivery-cost-button-wrapper">
                            <a href="#" className="button blue mr-10">Save Changes</a>
                            <a href="#" className="button blue secondary">Delete Country</a>
                          </div>
                        </div>
                      </div>
                      <div className="add-element">
                        <img src="../images/add-black-24-dp.svg" loading="lazy" width="24" height="24" alt="Add" className="shop-product-list-add-icon" />
                        <div className="delivery-country-text">Add Country</div>
                      </div>
                      <div className="add-country">
                        <select className="input-x input-x--select input-x--add-country w-select">
                          <option value="">Country</option>
                        </select>
                        <img src="../images/add-black-24-dp.svg" loading="lazy" width="24" height="24" alt="Add" className="add-country__icon" />
                        <a href="#" className="add-country__button">Add Country</a>
                      </div>
                    </div>
                  </li>
                  <li>
                  <div class="subtitle-2">General Delivery Options</div>
                  <div class="assessment-list-content">
                    <div class="assessment-spacer"></div>
                    <div class="shipping-general-options">
                      <label class="w-checkbox checkbox-field mb-0">
                        <div class={`w-checkbox-input w-checkbox-input--inputType-custom checkbox ${freeShippingFrom && "w--redirected-checked"}`}></div>
                        <input type="checkbox" id="Free shipping" checked={freeShippingFrom} style={{opacity:0,position:"absolute",zIndex:-1}} onChange={()=>setFreeShippingFrom(!freeShippingFrom)} />
                          <span for="Free shipping" class="checkbox-label medium w-form-label">Free Shipping from</span>
                      </label>
                     {freeShippingFrom && <> <input type="number" class="input-x input-x--number input-x--free-shipping w-input" maxLength="256" placeholder="100"/>
                        <select id="Currency" class="input-x input-x--select input-x--eur w-select">
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                      </select></>}
                      </div>
                    <div class="shipping-general-options">
                      <label class="w-checkbox checkbox-field mb-0">
                        <div class={`w-checkbox-input w-checkbox-input--inputType-custom checkbox ${allowShippingToPackingStation && "w--redirected-checked"}`}></div>
                        <input type="checkbox" id="Allow packing station" checked={allowShippingToPackingStation} style={{opacity:0,position:"absolute",zIndex:-1}} onChange={()=>setAllowShippingToPackingStation(!allowShippingToPackingStation)}/>
                          <span for="Allow packing station" class="checkbox-label w-form-label">Allow shipping to packing station</span>
                      </label>
                      </div>
                    <div class="shipping-general-options">
                      <label class="w-checkbox checkbox-field mb-0">
                        <div class={`w-checkbox-input w-checkbox-input--inputType-custom checkbox 
                        ${CO2Neutral && "w--redirected-checked"}`}></div>
                        <input type="checkbox" id="CO2-neutral" checked={CO2Neutral} 
                        onChange={()=>setCO2Neutral(!CO2Neutral)}  style={{opacity:0,position:"absolute",zIndex:-1}}/>
                          <span for="CO2-neutral" class="checkbox-label w-form-label">CO2-neutral local delivery</span>
                      </label>
                      </div>
                    <div class="delivery-cost-button-wrapper moved-up">
                      <a href="#" class="button blue">Save Changes</a>
                    </div>
                  </div>
                </li>
                </ol>
                <div onClick={submit} className="button blue mr-10">Save and Continue</div>
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
      </div>
    </div >
  );
};

export default Seller_Shop_Shipping_Settings;