import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ShopProgressBar from "./Utils/ShopProgressBar";


const Seller_Price_Billing = ({ nextPage }) => {
    const { seller } = useSelector((state) => state.user);
    const [errors, setErrors] = useState([]);

    const [initials, setInitials] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [orderEmail, setOrderEmail] = useState("");
    const [returnEmail, setReturnEmail] = useState("");
    const [customerServiceEmail, setCustomerServiceEmail] = useState("");
    const [applePay, setApplePay] = useState(false);
    const [stripe, setStripe] = useState(false);
    const [paypal, setPaypal] = useState(false);
    const [creditCard, setCreditCard] = useState(false);
    
    const [language, setLanguage] = useState("");
    const [currency, setCurrency] = useState("");
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
                    <ShopProgressBar />
                    <div className="settings-block">
                        <h3 className="headline-5 mb-50">Basic Information</h3>
                        <div className="w-form">
                            <form id="email-form-7" name="email-form-7" data-name="Email Form 7">
                                <ol role="list" className="assessment-list assessment-list--1">
                                    <li>
                                        <div className="subtitle-2">About you</div>
                                        <div className="assessment-list-content">
                                            <div className="assessment-spacer"></div>
                                            <div className="assessment-radios">
                                                <label className="checkbox-field mb-0 w-clearfix w-radio">
                                                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${initials === "Mr." ? " w--redirected-checked" : ""}`}></div>
                                                    <input type="radio" onChange={() => setInitials("Mr.")} data-name="title" id="Mr.-2" name="title" className="" value={initials} checked={initials === "Mr."} required="" style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                                                    <span htmlFor="Mr.-3" className="checkbox-label w-form-label">Mr.</span>
                                                </label>
                                                <label className="checkbox-field mb-0 w-clearfix w-radio">
                                                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${initials === "Mrs." ? " w--redirected-checked" : ""}`}></div>
                                                    <input type="radio" onChange={() => setInitials("Mrs.")} data-name="title" id="Mrs.-2" name="title" value={initials} checked={initials === "Mrs."} required="" style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                                                    <span htmlFor="Mrs.-3" className="checkbox-label w-form-label">Mrs.</span>
                                                </label>
                                                <label className="checkbox-field mb-0 w-clearfix w-radio">
                                                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${initials === "Ms." ? " w--redirected-checked" : ""}`}></div>
                                                    <input type="radio" onChange={() => setInitials("Ms.")} data-name="title" id="Ms.-2" name="title" value={initials} checked={initials === "Ms."} required="" style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                                                    <span htmlFor="Ms.-3" className="checkbox-label w-form-label">Ms.</span>
                                                </label>
                                                <label className="checkbox-field mb-0 w-clearfix w-radio">
                                                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${initials === "Miss" ? " w--redirected-checked" : ""}`}></div>
                                                    <input type="radio" onChange={() => setInitials("Miss")} data-name="title" id="Miss-2" name="title" value={initials} checked={initials === "Miss"} required="" style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                                                    <span htmlFor="Miss-3" className="checkbox-label w-form-label">Miss</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="account-form-1 mb-0">
                                            <div className="input-x input-x--flex ">
                                                <div>Thomas Martin</div>
                                                <div className="input-x__change">
                                                    <div>Change</div>
                                                    <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                </div>
                                            </div>
                                            <div className="input-x input-x--flex">
                                                <div>CEO</div>
                                                <div className="input-x__change">
                                                    <div>Change</div>
                                                    <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                </div>
                                            </div>
                                            <div className="input-x input-x--flex">
                                                <div>2-(056)634-6566</div>
                                                <div className="input-x__change">
                                                    <div>Change</div>
                                                    <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                </div>
                                            </div>
                                            <div className="input-x input-x--flex">
                                                <div>thomas.martin@gmail.com</div>
                                                <div className="input-x__change">
                                                    <div>Change</div>
                                                    <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle-2">About your Shop</div>
                                        <div className="assessment-list-content">
                                            <div className="assessment-spacer"></div>
                                            <div className="account-form-1 mb-0">
                                                <input
                                                    type="text"
                                                    onChange={(e => setOrganizationName(e.target.value))}
                                                    value={organizationName}
                                                    className="input-x w-input"
                                                    maxLength="256"
                                                    placeholder="Organization Name *"
                                                />
                                                <input
                                                    type="text"
                                                    onChange={(e => setContactPhone(e.target.value))}
                                                    value={contactPhone}
                                                    className="input-x w-input"
                                                    maxLength="256"
                                                    placeholder="Contact Phone Number *"
                                                />
                                                <input
                                                    type="text"
                                                    onChange={(e => setContactEmail(e.target.value))}
                                                    value={contactEmail}
                                                    className="input-x w-input"
                                                    maxLength="256"
                                                    placeholder="Email Contact Person *"
                                                />
                                                <input
                                                    type="email"
                                                    onChange={(e => setOrderEmail(e.target.value))}
                                                    value={orderEmail}
                                                    className="input-x w-input"
                                                    maxLength="256"
                                                    placeholder="E-Mail Order Management *"
                                                    required="" />
                                                <input
                                                    type="tel"
                                                    onChange={(e => setReturnEmail(e.target.value))}
                                                    value={returnEmail}
                                                    className="input-x w-input"
                                                    maxLength="256"
                                                    placeholder="Email Returns *"
                                                    required="" />
                                                <input
                                                    type="tel"
                                                    onChange={(e => setCustomerServiceEmail(e.target.value))}
                                                    value={customerServiceEmail}
                                                    className="input-x w-input"
                                                    maxLength="256"
                                                    placeholder="Email Customer Service *"
                                                    required="" />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle-2">How you will get paid</div>
                                        <div className="assessment-list-content">
                                            <div className="assessment-spacer"></div>
                                            <div className="payment-form-1">
                                                <div className="payment-form-2">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                                                </div>
                                                <div>
                                                    <div className="input-x input-x--flex mb-15">
                                                        <div>Card Number</div>
                                                        <div className="input-x__change">
                                                            <div>Change</div>
                                                            <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                        </div>
                                                    </div>
                                                    <div className="input-x input-x--flex mb-15">
                                                        <div>Name on Card</div>
                                                        <div className="input-x__change">
                                                            <div>Change</div>
                                                            <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                        </div>
                                                    </div>
                                                    <div className="payment-expiration">
                                                        <div className="subtitle-2">Expiration date</div>
                                                        <select onChange={(e) => setExpiryMonth(e.target.value)} className="input-x input-x--select w-select">
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
                                                        <select onChange={(e) => setExpiryYear(e.target.value)} className="input-x input-x--select w-select">
                                                            <option value="2021">2021</option>
                                                            <option value="2022">2022</option>
                                                            <option value="2023">2023</option>
                                                            <option value="2024">2024</option>
                                                            <option value="2025">2025</option>
                                                            <option value="2026">2026</option>
                                                            <option value="2027">2027</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="payment-button-wrapper">
                                                <a href="#" className="button blue mr-10">Save Changes</a>
                                                <a href="#" className="button blue secondary">Delete Adress</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle-2">Which payment methods do you accept?</div>
                                        <div className="assessment-list-content">
                                            <div className="assessment-spacer"></div>
                                            <div class="account-form-1 mb-50">
                                                <div class="payment-method-option">
                                                    <img src="../images/about-1.jpg" loading="lazy" width="135" height="71" alt="" class="payment-method-option-img" />
                                                    <label class="w-checkbox checkbox-field mb-0">
                                                        <div class={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${creditCard ? " w--redirected-checked" : ""}`}></div>
                                                        <input
                                                            onChange={() => setCreditCard(!creditCard)}
                                                            value={creditCard}
                                                            type="checkbox"
                                                            id="Payment Method 3"
                                                            style={checkBoxStyle}
                                                        />
                                                        <span for="Payment Method " class="checkbox-label w-form-label">Credit card</span>
                                                    </label>
                                                </div>
                                                <div class="payment-method-option">
                                                    <img src="../images/about-1.jpg" loading="lazy" width="135" height="71" alt="" class="payment-method-option-img" />
                                                    <label class="w-checkbox checkbox-field mb-0">
                                                        <div class={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${stripe ? " w--redirected-checked" : ""}`}></div>
                                                        <input
                                                            onChange={() => setStripe(!stripe)}
                                                            value={stripe}
                                                            type="checkbox"
                                                            id="Payment Method 3"
                                                            style={checkBoxStyle}
                                                        />
                                                        <span for="Payment Method " class="checkbox-label w-form-label">Stripe</span>
                                                    </label>
                                                </div>
                                                <div class="payment-method-option">
                                                    <img src="../images/about-1.jpg" loading="lazy" width="135" height="71" alt="" class="payment-method-option-img" />
                                                    <label class="w-checkbox checkbox-field mb-0">
                                                        <div class={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${applePay ? " w--redirected-checked" : ""}`}></div>
                                                        <input
                                                            onChange={() => setApplePay(!applePay)}
                                                            value={applePay}
                                                            type="checkbox"
                                                            id="Payment Method 2"
                                                            style={checkBoxStyle} />
                                                        <span for="Payment Method " class="checkbox-label w-form-label">Apple Pay</span>
                                                    </label>
                                                </div>
                                                <div class="payment-method-option">
                                                    <img src="../images/about-1.jpg" loading="lazy" width="135" height="71" alt="" class="payment-method-option-img" />
                                                    <label class="w-checkbox checkbox-field mb-0">
                                                        <div class={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${paypal ? " w--redirected-checked" : ""}`}></div>
                                                        <input
                                                            onChange={() => setPaypal(!paypal)}
                                                            value={applePay}
                                                            type="checkbox"
                                                            id="Payment Method 4"
                                                            style={checkBoxStyle}
                                                        />
                                                        <span for="Payment Method " class="checkbox-label w-form-label">Paypal</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle-2">Preferences</div>
                                        <div className="assessment-list-content">
                                            <div className="assessment-spacer"></div>
                                            <div className="account-form-1">
                                                <select onChange={(e) => setLanguage(e.target.value)} className="input-x input-x--select w-select">
                                                    <option value="">Select a Language</option>
                                                    <option value="de">Deutsch</option>
                                                    <option value="en">English</option>
                                                </select>
                                                <select onChange={(e) => setCurrency(e.target.value)} className="input-x input-x--select w-select">
                                                    <option value="">Select a Currency</option>
                                                    <option value="EUR">€ (EUR)</option>
                                                    <option value="USD">$ (USD)</option>
                                                </select>
                                                <select onChange={(e) => setRegion(e.target.value)} className="input-x input-x--select w-select">
                                                    <option value="">Select a Region</option>
                                                    <option value="Europe">Europe</option>
                                                    <option value="North America">North America</option>
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                                <a href="#" className="button blue">Save and Continue</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Seller_Price_Billing;