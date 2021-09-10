import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Seller_Payouts from "./Seller_Payouts";

import ProgressBar from "./Utils/ProgressBar";


const Seller_Price_Billing = ({ nextPage }) => {
  const { seller } = useSelector((state) => state.user);
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [VAT, setVAT] = useState("");
  const [IBAN, setIBAN] = useState("");
  const [idFront, setIdFront] = useState("");
  const [idBack, setIdBack] = useState("");
  const [addressFront, setAddressFront] = useState("");
  const [addressBack, setAddressBack] = useState("");
  // const [applePay, setApplePay] = useState(false);
  // const [stripe, setStripe] = useState(false);
  // const [paypal, setPaypal] = useState(false);
  // const [creditCard, setCreditCard] = useState(false);
  // const [cardNumber, setCardNumber] = useState("");
  // const [nameOnCard, setNameOnCard] = useState("");
  // const [expiryDate, setExpiryDate] = useState("");
  // const [expiryYear, setExpiryYear] = useState("");
  // const [expiryMonth, setExpiryMonth] = useState("");
  // const [cardConfirmation, setCardConfirmation] = useState("");
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

    nextPage();
  };

  return (
    <div className="page-section wf-section">
      <div className="container">
        <div className="heading-wrapper">
          <h1 className="headline-2 mb-50">Billing Settings</h1>
          <div className="settings-block">
            <div className="w-form">
              <form id="wf-form-Plan-Billing" name="wf-form-Plan-Billing" data-name="Plan Billing">
                <h2 className="headline-5 mb-30">Your billing details</h2>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  className="input-x mb-15 w-input"
                  maxLength="256"
                  placeholder="Name or Company Name *"
                  required=""
                />
                <div className="account-form-1">
                  <input
                    onChange={(e) => setStreet(e.target.value)}
                    value={street}
                    type="tel"
                    className="input-x w-input"
                    maxLength="256"
                    placeholder="Street Name *"
                    id="Street-Name" required=""
                  />
                  <input
                    onChange={(e) => setPostalCode(e.target.value)}
                    value={postalCode}
                    type="text"
                    className="input-x w-input"
                    maxLength="256"
                    placeholder="Postal Code *"
                    required=""
                  />
                  <input
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    type="text"
                    className="input-x w-input"
                    maxLength="256"
                    placeholder="City *"
                    required="" />
                  <input
                    onChange={(e) => setVAT(e.target.value)}
                    value={VAT}
                    type="text"
                    className="input-x w-input"
                    maxLength="256"
                    placeholder="VAT *"
                    required=""
                  />
                </div>
                <div className="settings-spacer"></div>
                <h2 className="headline-5 mb-30">How do you want to pay?</h2>
                <div className="product-add-block-bank">
                  <p className="mb-20"> IBAN </p>
                  <div className="mb-40 flex left-2">
                    <input
                      onChange={(e) => setIBAN(e.target.value)}
                      value={IBAN}
                      type="text"
                      className="input-x w-input"
                      maxLength="256"
                      placeholder="IBAN *"
                      required="" />
                    <div />
                  </div>

                  <input type="file" onChange={(e) => setIdFront(e.target.files[0])} style={{ display: "none" }} id="id-frontview" />
                  <input type="file" onChange={(e) => setIdBack(e.target.files[0])} style={{ display: "none" }} id="id-backview" />
                  <input type="file" onChange={(e) => setAddressFront(e.target.files[0])} style={{ display: "none" }} id="address-frontview" />
                  <input type="file" onChange={(e) => setAddressBack(e.target.files[0])} style={{ display: "none" }} id="address-backview" />
                  {/* <div className="spacer-20" /> */}

                  <p className="mb-20"> Identity Documents</p>

                  <div className="flex left-4 flex-wrap" >
                    <div className="product-add-block">
                      <label className="button" htmlFor="id-frontview" >Upload Front View</label  >

                      {/* <OutlinedButton id={id} name="Upload Front View" /> */}
                    </div>
                    <div className="product-add-block">
                      <label className="button" htmlFor="id-backview" >Upload Back View</label  >

                      {/* <OutlinedButton id={id} name="Upload Back View" /> */}
                    </div>
                  </div>

                  <div className="spacer-40" />
                  <p className="mb-20"> Proof Of Address Documents</p>

                  <div className="flex left-4 flex-wrap">
                    <div className="product-add-block">
                      <label className="button" htmlFor="address-frontview" >Upload Front View</label  >
                      {/* <OutlinedButton name="Upload Front View" /> */}
                    </div>
                    <div className="product-add-block">
                      <label className="button" htmlFor="address-backview" >Upload Back View</label  >
                      {/* <OutlinedButton name="Upload Back View" /> */}
                    </div>
                  </div>
                </div>

                {/* <Seller_Payouts id="id-proof" /> */}
                {/* <div className="account-form-1 mb-50">
                                    <div className="payment-method-option">
                                        <img src="../images/about-1.jpg" loading="lazy" width="135" height="71" alt="" className="payment-method-option-img" />
                                        <label className="w-checkbox checkbox-field mb-0">
                                            <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${creditCard ? " w--redirected-checked" : ""}`}></div>
                                            <input
                                                onChange={() => setCreditCard(!creditCard)}
                                                value={creditCard}
                                                type="checkbox"
                                                id="Payment Method 3"
                                                style={checkBoxStyle}
                                            />
                                            <span htmlFor="Payment Method " className="checkbox-label w-form-label">Credit card</span>
                                        </label>
                                    </div>
                                    <div className="payment-method-option">
                                        <img src="../images/about-1.jpg" loading="lazy" width="135" height="71" alt="" className="payment-method-option-img" />
                                        <label className="w-checkbox checkbox-field mb-0">
                                            <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${stripe ? " w--redirected-checked" : ""}`}></div>
                                            <input
                                                onChange={() => setStripe(!stripe)}
                                                value={stripe}
                                                type="checkbox"
                                                id="Payment Method 3"
                                                style={checkBoxStyle}
                                            />
                                            <span htmlFor="Payment Method " className="checkbox-label w-form-label">Stripe</span>
                                        </label>
                                    </div>
                                    <div className="payment-method-option">
                                        <img src="../images/about-1.jpg" loading="lazy" width="135" height="71" alt="" className="payment-method-option-img" />
                                        <label className="w-checkbox checkbox-field mb-0">
                                            <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${applePay ? " w--redirected-checked" : ""}`}></div>
                                            <input
                                                onChange={() => setApplePay(!applePay)}
                                                value={applePay}
                                                type="checkbox"
                                                id="Payment Method 2"
                                                style={checkBoxStyle} />
                                            <span htmlFor="Payment Method " className="checkbox-label w-form-label">Apple Pay</span>
                                        </label>
                                    </div>
                                    <div className="payment-method-option">
                                        <img src="../images/about-1.jpg" loading="lazy" width="135" height="71" alt="" className="payment-method-option-img" />
                                        <label className="w-checkbox checkbox-field mb-0">
                                            <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${paypal ? " w--redirected-checked" : ""}`}></div>
                                            <input
                                                onChange={() => setPaypal(!paypal)}
                                                value={applePay}
                                                type="checkbox"
                                                id="Payment Method 4"
                                                style={checkBoxStyle}
                                            />
                                            <span htmlFor="Payment Method " className="checkbox-label w-form-label">Paypal</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="account-form-1">
                                    <input
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        value={cardNumber}
                                        type="number"
                                        className="input-x w-input"
                                        maxLength="256"
                                        placeholder="Card Number *"
                                        required=""
                                    />
                                    <input
                                        onChange={(e) => setNameOnCard(e.target.value)}
                                        value={nameOnCard}
                                        type="text"
                                        className="input-x w-input"
                                        maxLength="256"
                                        placeholder="Name on Card *"
                                        required=""
                                    />
                                </div>
                                <div className="onboarding-payment-expiration">
                                    <div className="subtitle-2">Expiration date</div>
                                    <select required="" onChange={(e) => setExpiryDate(e.target.value)} className="input-x input-x--select w-select">
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                    <select required="" style={{width:"80px"}} onChange={(e) => setExpiryMonth(e.target.value)} className="input-x input-x--select w-select">
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    <select required="" style={{width:"100px"}} onChange={(e) => setExpiryYear(e.target.value)} className="input-x input-x--select w-select">
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                    </select>
                                    <span onClick={()=>setCardConfirmation(!cardConfirmation)} className="button blue secondary">Confirm Card Information</span>
                                </div> */}
                <div className="button blue" onClick={submit}> Save & Continue </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller_Price_Billing;