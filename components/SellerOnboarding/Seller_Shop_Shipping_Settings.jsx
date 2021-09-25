import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { authAxios } from "@/setups/axios";

import ShopProgressBar from "./Utils/ShopProgressBar";
import countries from "../../_data/countries.json"
import Select from "@/shared/Select";
import Message from "@/shared/Message";


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
    const [freeShippingStart, setFreeShippingStart] = useState(false);
    const [freeShippingCurrency, setFreeShippingCurrency] = useState(false);

    const [currency, setCurrency] = useState("");
    // const [shippingService, setShippingService] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const currencyOptions = ["EUR", "USD"]
    // const serviceProviderOptions = ["Choice 1", "Choice 2"]
    const deliveryTimeOptions = ["Choice 1", "Choice 2"]

    const checkBoxStyle = { opacity: 0, position: "absolute", zIndex: -1 }

    const [loading,setLoading] = useState(false)

    const validate = () => {
        const err = [];

        !country ? err.push(`Please select country`) : "";
        !cost0to1Kg ? err.push(`Please enter 0 and 1 kg category`) : "";
        !cost1to5Kg ? err.push(`Please enter 1 and 5 kg category`) : "";
        !cost5to10Kg ? err.push(`Please enter 6 and 10 kg category`) : "";
        !costMoreThan10Kg ? err.push(`Please enter more than 10Kg category`) : "";
        // !freeShippingFrom ? err.push(`Please select free shipping from option`) : "";
        freeShippingFrom && !freeShippingStart ? err.push(`Please select free shipping from option`) : "";
        freeShippingFrom && !freeShippingCurrency ? err.push(`Please select free shipping from option`) : "";
        !currency ? err.push(`Please select the currency`) : "";
        // !shippingService ? err.push(`Please select shipping service`) : "";
        !deliveryTime ? err.push(`Please select delivery time`) : "";

        setErrors(err);

        if (err.length) return false;

        return true;
    };

    const submit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true)
        const data = {
            country,
            weights:
                [{
                    category: "0 to 1Kg",
                    cost: cost0to1Kg,
                    currency,
                    // serviceProvider: shippingService,
                    deliveryTime
                },
                {
                    category: "1 to 5Kg",
                    cost: cost1to5Kg,
                    currency,
                    // serviceProvider: shippingService,
                    deliveryTime
                }, {
                    category: "5 to 10Kg",
                    cost: cost5to10Kg,
                    currency,
                    // serviceProvider: shippingService,
                    deliveryTime
                }, {
                    category: "More than 10Kg",
                    cost: costMoreThan10Kg,
                    currency,
                    // serviceProvider: shippingService,
                    deliveryTime
                }
                ],

            freeShippingFrom,
            allowShippingToPackingStation,
            CO2Neutral
        }

    const res = await authAxios()({
      url: `/shops/${seller.shop.id} `,
      method: "PUT",
      data: {shipping : [...prevData,data]}
    });

        setLoading(false);
        nextPage();
    };
    console.log(seller);

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
                                                    <select
                                                        onChange={(e) => setCountry(e.target.value)}
                                                        className="input-x input-x--select w-select">
                                                        <option value="">Austria</option>
                                                        {countries.length && countries.map(option => <option key={option} value={option}>{option}</option>)}
                                                    </select>}
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
                                                        {/* <select
                              onChange={(e) => setShippingService(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="">Shipping Service Providers *</option>
                              {serviceProviderOptions && serviceProviderOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select> */}
                                                        <select
                                                            onChange={(e) => setDeliveryTime(e.target.value)}
                                                            className="input-x input-x--select w-select">
                                                            <option value="">Delivery time *</option>
                                                            {deliveryTimeOptions && deliveryTimeOptions.map(option => <option key={option} value={option}>{option}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="delivery-cost">
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
                                                        {/* <select
                              onChange={(e) => setShippingService(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="">Shipping Service Providers *</option>
                              {serviceProviderOptions && serviceProviderOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select> */}
                                                        <select
                                                            onChange={(e) => setDeliveryTime(e.target.value)}
                                                            className="input-x input-x--select w-select">
                                                            <option value="">Delivery time *</option>
                                                            {deliveryTimeOptions && deliveryTimeOptions.map(option => <option key={option} value={option}>{option}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="delivery-cost">
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
                                                        {/* <select
                              onChange={(e) => setShippingService(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="">Shipping Service Providers *</option>
                              {serviceProviderOptions && serviceProviderOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select> */}
                                                        <select
                                                            onChange={(e) => setDeliveryTime(e.target.value)}
                                                            className="input-x input-x--select w-select">
                                                            <option value="">Delivery time *</option>
                                                            {deliveryTimeOptions && deliveryTimeOptions.map(option => <option key={option} value={option}>{option}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="delivery-cost">
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
                                                        {/* <select
                              onChange={(e) => setShippingService(e.target.value)}
                              className="input-x input-x--select w-select">
                              <option value="">Shipping Service Providers *</option>
                              {serviceProviderOptions && serviceProviderOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select> */}
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
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle-2">General Delivery Options</div>
                                        <div className="assessment-list-content">
                                            <div className="assessment-spacer"></div>
                                            <div className="shipping-general-options">
                                                <label className="w-checkbox checkbox-field mb-0">
                                                    <div className={`w-checkbox-input w-checkbox-input--inputType-custom checkbox ${freeShippingFrom && "w--redirected-checked"}`}></div>
                                                    <input type="checkbox" id="Free shipping" checked={freeShippingFrom} style={{ opacity: 0, position: "absolute", zIndex: -1 }} onChange={() => setFreeShippingFrom(!freeShippingFrom)} />
                                                    <span htmlFor="Free shipping" className="checkbox-label medium w-form-label">Free Shipping from</span>
                                                </label>
                                                {freeShippingFrom && <> <input type="number" className="input-x input-x--number input-x--free-shipping w-input" onChange={(e) => setFreeShippingStart(e.target.value)} value={freeShippingStart} maxLength="256" placeholder="100" />
                                                    <select id="Currency" onChange={(e) => setFreeShippingCurrency(e.target.value)} className="input-x input-x--select input-x--eur w-select">
                                                        <option value="EUR">EUR</option>
                                                        <option value="USD">USD</option>
                                                    </select></>}
                                            </div>
                                            <div className="shipping-general-options">
                                                <label className="w-checkbox checkbox-field mb-0">
                                                    <div className={`w-checkbox-input w-checkbox-input--inputType-custom checkbox ${allowShippingToPackingStation && "w--redirected-checked"}`}></div>
                                                    <input type="checkbox" id="Allow packing station" checked={allowShippingToPackingStation} style={{ opacity: 0, position: "absolute", zIndex: -1 }} onChange={() => setAllowShippingToPackingStation(!allowShippingToPackingStation)} />
                                                    <span htmlFor="Allow packing station" className="checkbox-label w-form-label">Allow shipping to packing station</span>
                                                </label>
                                            </div>
                                            <div className="shipping-general-options">
                                                <label className="w-checkbox checkbox-field mb-0">
                                                    <div className={`w-checkbox-input w-checkbox-input--inputType-custom checkbox 
                        ${CO2Neutral && "w--redirected-checked"}`}></div>
                                                    <input type="checkbox" id="CO2-neutral" checked={CO2Neutral}
                                                        onChange={() => setCO2Neutral(!CO2Neutral)} style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                                                    <span htmlFor="CO2-neutral" className="checkbox-label w-form-label">CO2-neutral local delivery</span>
                                                </label>
                                            </div>
                                            {/* <div className="delivery-cost-button-wrapper moved-up">
                      <a href="#" className="button blue">Save Changes</a>
                    </div> */}
                                        </div>
                                    </li>
                                </ol>
                                {errors && errors.length > 0 && errors.map(error =>
                                    <Message text={error} status={-1} />)
                                }

                                {loading
                                    ?
                                    <button className="button blue mr-10">Loading....</button>
                                    :
                                    <div onClick={submit} className="button blue mr-10">Save and Continue</div>}
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