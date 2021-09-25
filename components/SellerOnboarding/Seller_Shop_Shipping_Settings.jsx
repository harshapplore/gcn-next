import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { authAxios } from "@/setups/axios";

import ShopProgressBar from "./Utils/ShopProgressBar";
import countries from "../../_data/countries.json"
import Select from "@/shared/Select";
import Message from "@/shared/Message";
import router from "next/router";


const Seller_Shop_Shipping_Settings = ({ nextPage }) => {
    const { seller } = useSelector((state) => state.user);
    const sellerInfo = useSelector((state) => state.seller);


    const [errors, setErrors] = useState([]);
    const [showCountryDetails, setShowCountryDetails] = useState(true);
    const [interNational, setInterNational] = useState(false);
    // const [country, setCountry] = useState("");
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
    const [freeShippingStart, setFreeShippingStart] = useState("");
    const [freeShippingCurrency, setFreeShippingCurrency] = useState("");

    const [cost0to1KgInt, setCost0to1KgInt] = useState("");
    const [editCost0to1KgInt, setEditCost0to1KgInt] = useState(false);
    const [cost1to5KgInt, setCost1to5KgInt] = useState("");
    const [editCost1to5KgInt, setEditCost1to5KgInt] = useState(false);
    const [cost5to10KgInt, setCost5to10KgInt] = useState("");
    const [editCost5to10KgInt, setEditCost5to10KgInt] = useState(false);
    const [costMoreThan10KgInt, setcostMoreThan10KgInt] = useState("");
    const [editcostMoreThan10KgInt, setEditcostMoreThan10KgInt] = useState(false);
    const [currency, setCurrency] = useState("");
    const [currencyInt, setCurrencyInt] = useState("");
    const [interNationalShippingMessage, setInterNationalShippingMessage] = useState("");
    const [nationalShippingMessage, setNationalShippingMessage] = useState("");
    const [freeDeliveryAmount, setFreeDeliveryAmount] = useState(0);
    const [freeDeliveryCurrency, setFreeDeliveryCurrency] = useState(0);
    const [loading,setLoading] = useState(false)
 
    // const [shippingService, setShippingService] = useState("");
    // const [deliveryTime, setDeliveryTime] = useState("");
    const currencyOptions = ["EUR", "USD"]
    // const serviceProviderOptions = ["Choice 1", "Choice 2"]
    // const deliveryTimeOptions = ["Choice 1", "Choice 2"]

    const checkBoxStyle = { opacity: 0, position: "absolute", zIndex: -1 }

    useEffect(() => {
        if (sellerInfo && sellerInfo.seller && sellerInfo.seller.qaStatus && sellerInfo.seller.qaStatus != "approved") {
            router.push("/")
        }
    }, [sellerInfo])

    const validate = () => {
        const err = [];

        // !country ? err.push(`Please select country`) : "";
        // !cost0to1Kg ? err.push(`Please enter 0 and 1 kg category`) : "";
        // !cost1to5Kg ? err.push(`Please enter 1 and 5 kg category`) : "";
        // !cost5to10Kg ? err.push(`Please enter 6 and 10 kg category`) : "";
        // !costMoreThan10Kg ? err.push(`Please enter more than 10Kg category`) : "";
        // !cost0to1KgInt ? err.push(`Please enter 0 and 1 kg category`) : "";
        // !cost1to5KgInt ? err.push(`Please enter 1 and 5 kg category`) : "";
        // !cost5to10KgInt ? err.push(`Please enter 6 and 10 kg category`) : "";
        // !costMoreThan10KgInt ? err.push(`Please enter more than 10Kg category`) : "";
        // !freeShippingFrom ? err.push(`Please select free shipping from option`) : "";
        // freeShippingFrom && !freeShippingStart ? err.push(`Please select free shipping from option`) : "";
        // freeShippingFrom && !freeShippingCurrency ? err.push(`Please select free shipping from option`) : "";
        // !currency ? err.push(`Please select the currency`) : "";
        // !currencyInt ? err.push(`Please select the currency`) : "";
        // !shippingService ? err.push(`Please select shipping service`) : "";
        // !deliveryTime ? err.push(`Please select delivery time`) : "";

        setErrors(err);

        if (err.length) return false;

        return true;
    };

    const nationalShipping = async (e) => {
        e.preventDefault();

        const data = {
            country: "National",
            weights:
                [{
                    category: "0 to 1Kg",
                    cost: cost0to1Kg,
                    currency,
                },
                {
                    category: "1 to 5Kg",
                    cost: cost1to5Kg,
                    currency,
                }, {
                    category: "5 to 10Kg",
                    cost: cost5to10Kg,
                    currency,
                }, {
                    category: "More than 10Kg",
                    cost: costMoreThan10Kg,
                    currency,
                }
                ]
        }
        const res = await authAxios()({
            url: `/shops/${seller.shop.id} `,
            method: "PUT",
            data: { shipping: [data] }
        });
        console.log(res.data)
        if (res.data)
            setNationalShippingMessage("National shipping details updated successfully")

    }
    const interNationalShipping = async (e) => {
        e.preventDefault();

        const data = {
            country: "interNational",
            weights:
                [{
                    category: "0 to 1Kg",
                    cost: cost0to1KgInt,
                    currency,
                },
                {
                    category: "1 to 5Kg",
                    cost: cost1to5KgInt,
                    currency,
                }, {
                    category: "5 to 10Kg",
                    cost: cost5to10KgInt,
                    currency,
                }, {
                    category: "More than 10Kg",
                    cost: costMoreThan10KgInt,
                    currency,
                }
                ]
        }
        const res = await authAxios()({
            url: `/shops/${seller.shop.id} `,
            method: "PUT",
            data: { internationalShipping: [data] }
        });
        console.log(res.data)
        if (res.data)
            setInterNationalShippingMessage("International shipping details updated successfully")

    }
    const submit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true)

        const data = {
            freeDelivery: freeShippingFrom,
            pickUp: allowShippingToPackingStation,
            co2NeutralDelivery: CO2Neutral,
            freeDeliveryAmount: freeShippingStart,
            freeDeliveryCurrency: freeShippingCurrency
        }

        const res = await authAxios()({
            url: `/shops/${seller.shop.id} `,
            method: "PUT",
            data: data
        });
        setLoading(false)
        if (res) {
            nextPage();
        }
    };
  // console.log(seller);


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
                                <div role="list" style={{ listStyle: "none" }} className="assessment-list assessment-list--3">
                                    <div>
                                        <div className="subtitle-2">Country Delivery Options</div>
                                        <div className="assessment-list-content">
                                            <div className="assessment-spacer"></div>
                                            <div className="dynamic-content">
                                                <div className="delivery-country">
                                                    <div className="delivery-country-text">
                                                        <div>NATIONAL</div>
                                                    </div>
                                                    <div className="show-details">
                                                        <div htmlFor="show-details">Show Details</div>
                                                        <img id="show-details" src="/images/expand-more-black-24-dp-copy-6.svg" loading="lazy" alt="expand" onClick={() => setShowCountryDetails(!showCountryDetails)} style={{ cursor: "pointer" }} />

                                                    </div>
                                                </div>
                                                <br />
                                                {/* {showCountryDetails &&
                    <select
                      onChange={(e) => setCountry(e.target.value)}
                      className="input-x input-x--select w-select">
                      <option value="">Austria</option>
                      {countries.length && countries.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>} */}
                                                {showCountryDetails && <div>
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
                                                                <img src="/images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                            </div>
                                                        </div>

                                                        <select
                                                            onChange={(e) => setCurrency(e.target.value)}
                                                            className="input-x input-x--select w-select">
                                                            <option value="EUR">EUR</option>
                                                            {currencyOptions && currencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
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
                                                                <img src="/images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                            </div>
                                                        </div>

                                                        <select
                                                            onChange={(e) => setCurrency(e.target.value)}
                                                            className="input-x input-x--select w-select">
                                                            <option value="EUR">EUR</option>
                                                            {currencyOptions && currencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
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
                                                                <img src="/images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                            </div>
                                                        </div>
                                                        <select
                                                            onChange={(e) => setCurrency(e.target.value)}
                                                            className="input-x input-x--select w-select">
                                                            <option value="EUR">EUR</option>
                                                            {currencyOptions && currencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
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
                                                                <img src="/images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                            </div>
                                                        </div>

                                                        <select
                                                            onChange={(e) => setCurrency(e.target.value)}
                                                            className="input-x input-x--select w-select">
                                                            <option value="EUR">EUR</option>
                                                            {currencyOptions && currencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
                                                        </select>

                                                    </div>
                                                    {nationalShippingMessage && <h5>{nationalShippingMessage}</h5>}

                                                    <div className="delivery-cost-button-wrapper">
                                                        <div onClick={nationalShipping} className="button blue mr-10">Save Changes</div>
                                                        <div className="button blue secondary">Delete</div>
                                                    </div>
                                                </div>}
                                                <div className="delivery-country">
                                                    <div className="delivery-country-text">
                                                        <div>INTERNATIONAL</div>
                                                    </div>
                                                    <div className="show-details">
                                                        <div htmlFor="show-details">Show Details</div>
                                                        <img id="show-details" src="/images/expand-more-black-24-dp-copy-6.svg" loading="lazy" alt="expand" onClick={() => setInterNational(!interNational)} style={{ cursor: "pointer" }} />

                                                    </div>
                                                </div>
                                                <br />
                                                {interNational && <div>
                                                    <div className="delivery-cost-text">Delivery cost by weight</div>
                                                    <div className="delivery-cost">
                                                        <div className="delivery-cost-kg">0 – 1 kg</div>
                                                        <div className="input-x input-x--flex">
                                                            {!editCost0to1KgInt ? <div className={`${!editCost0to1KgInt ? "" : " hidden"}`}>{cost0to1KgInt ? cost0to1KgInt : "Delivery cost"}</div> :
                                                                <input
                                                                    onChange={(e) => setCost0to1KgInt(e.target.value)}
                                                                    value={cost0to1KgInt}
                                                                    type="text"
                                                                    className="input-x-edit w-input"
                                                                    maxLength="256"
                                                                    placeholder="Delivery cost *"
                                                                    required=""
                                                                />}
                                                            <div className="input-x__change">
                                                                <div style={{ cursor: "pointer" }} onClick={() => setEditCost0to1KgInt(!editCost0to1KgInt)}>Change</div>
                                                                <img src="/images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                            </div>
                                                        </div>

                                                        <select
                                                            onChange={(e) => setCurrencyInt(e.target.value)}
                                                            className="input-x input-x--select w-select">
                                                            <option value="EUR">EUR</option>
                                                            {currencyOptions && currencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
                                                        </select>

                                                    </div>
                                                    <div className="delivery-cost">
                                                        <div className="delivery-cost-kg">1 – 5 kg</div>
                                                        <div className="input-x input-x--flex">
                                                            {!editCost1to5KgInt ? <div className={`${!editCost1to5KgInt ? "" : " hidden"}`}>{cost1to5KgInt ? cost1to5KgInt : "Delivery cost"}</div> :
                                                                <input
                                                                    onChange={(e) => setCost1to5KgInt(e.target.value)}
                                                                    value={cost1to5KgInt}
                                                                    type="text"
                                                                    className="input-x-edit w-input"
                                                                    maxLength="256"
                                                                    placeholder="Delivery cost *"
                                                                    required=""
                                                                />}
                                                            <div className="input-x__change">
                                                                <div style={{ cursor: "pointer" }} onClick={() => setEditCost1to5KgInt(!editCost1to5KgInt)}>Change</div>
                                                                <img src="/images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                            </div>
                                                        </div>

                                                        <select
                                                            onChange={(e) => setCurrencyInt(e.target.value)}
                                                            className="input-x input-x--select w-select">
                                                            <option value="EUR">EUR</option>
                                                            {currencyOptions && currencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
                                                        </select>

                                                    </div>
                                                    <div className="delivery-cost">
                                                        <div className="delivery-cost-kg">5 – 10 kg</div>
                                                        <div className="input-x input-x--flex">
                                                            {!editCost5to10KgInt ? <div className={`${!editCost5to10KgInt ? "" : " hidden"}`}>{cost5to10KgInt ? cost5to10KgInt : "Delivery cost"}</div> :
                                                                <input
                                                                    onChange={(e) => setCost5to10KgInt(e.target.value)}
                                                                    value={cost5to10KgInt}
                                                                    type="text"
                                                                    className="input-x-edit w-input"
                                                                    maxLength="256"
                                                                    placeholder="Delivery cost *"
                                                                    required=""
                                                                />}
                                                            <div className="input-x__change">
                                                                <div style={{ cursor: "pointer" }} onClick={() => setEditCost5to10KgInt(!editCost5to10KgInt)}>Change</div>
                                                                <img src="/images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                            </div>
                                                        </div>
                                                        <select
                                                            onChange={(e) => setCurrencyInt(e.target.value)}
                                                            className="input-x input-x--select w-select">
                                                            <option value="EUR">EUR</option>
                                                            {currencyOptions && currencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
                                                        </select>

                                                    </div>
                                                    <div className="delivery-cost">
                                                        <div className="delivery-cost-kg">&gt; 10 kg</div>
                                                        <div className="input-x input-x--flex">
                                                            {!editcostMoreThan10KgInt ? <div className={`${!editcostMoreThan10KgInt ? "" : " hidden"}`}>{costMoreThan10KgInt ? costMoreThan10KgInt : "Delivery cost"}</div> :
                                                                <input
                                                                    onChange={(e) => setcostMoreThan10KgInt(e.target.value)}
                                                                    value={costMoreThan10KgInt}
                                                                    type="text"
                                                                    className="input-x-edit w-input"
                                                                    maxLength="256"
                                                                    placeholder="Delivery cost *"
                                                                    required=""
                                                                />}
                                                            <div className="input-x__change">
                                                                <div style={{ cursor: "pointer" }} onClick={() => setEditcostMoreThan10KgInt(!editcostMoreThan10KgInt)}>Change</div>
                                                                <img src="/images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                            </div>
                                                        </div>

                                                        <select
                                                            onChange={(e) => setCurrencyInt(e.target.value)}
                                                            className="input-x input-x--select w-select">
                                                            <option value="EUR">EUR</option>
                                                            {currencyOptions && currencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
                                                        </select>

                                                    </div>
                                                    {interNationalShippingMessage && <h5>{interNationalShippingMessage}</h5>}
                                                    <div className="delivery-cost-button-wrapper">
                                                        <div onClick={interNationalShipping} className="button blue mr-10">Save Changes</div>
                                                        <div href="#" className="button blue secondary">Delete</div>
                                                    </div>
                                                </div>}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
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
                                    </div>
                                </div>
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