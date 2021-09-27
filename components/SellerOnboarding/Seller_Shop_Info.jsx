import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadFiles } from "_controllers/product"

import ShopProgressBar from "./Utils/ShopProgressBar";
import { authAxios } from "@/setups/axios";
import Message from "@/shared/Message";

import user, { fetchSeller } from "@/slices/user";
import router from "next/router";

const Seller_Shop_Info = ({ nextPage }) => {
    const { seller } = useSelector((state) => state.user);
    const sellerInfo = useSelector((state) => state.seller);

    const [errors, setErrors] = useState([]);

    const [initials, setInitials] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [orderEmail, setOrderEmail] = useState("");
    const [returnEmail, setReturnEmail] = useState("");
    const [customerServiceEmail, setCustomerServiceEmail] = useState("");
    const [editName, setEditName] = useState(false);
    const [name, setName] = useState("");
    const [editCEO, setEditCEO] = useState(false);
    const [CEO, setCEO] = useState("");
    const [editPhone, setEditPhone] = useState(false);
    const [phone, setPhone] = useState("");
    const [editEmail, setEditEmail] = useState(false);
    const [email, setEmail] = useState("");
    const [IBAN, setIBAN] = useState("");
    const [idFront, setIdFront] = useState("");
    const [idBack, setIdBack] = useState("");
    const [addressFront, setAddressFront] = useState("");
    const [addressBack, setAddressBack] = useState("");

    const [currency, setCurrency] = useState("");
    const [language, setLanguage] = useState("");
    const [region, setRegion] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("SELLER INFO")
        console.log(sellerInfo.seller.qaStatus)
        if (sellerInfo && sellerInfo.seller && sellerInfo.seller.qaStatus && sellerInfo.seller.qaStatus != "approved") {
            router.push("/")
        }
    }, [sellerInfo])
    useEffect(() => {
        if (seller.shop) {
            setOrganizationName(seller.shop.companyName)
            setName(seller.basicInformationAnswers.name)
            setCEO(seller.basicInformationAnswers.jobTitle)
            setPhone(seller.basicInformationAnswers.mobile)
            setEmail(seller.basicInformationAnswers.email)
            setInitials(seller.basicInformationAnswers.initials)
        }
    }, [seller]);

    const checkBoxStyle = { opacity: 0, position: "absolute", zIndex: -1 }

    // console.log(arr)

    const validate = () => {
        const err = [];
        !initials ? err.push(`Please Enter the Full name`) : "";
        !organizationName ? err.push(`Please Enter the organization name`) : "";
        !contactPhone ? err.push(`Please Enter contact phone`) : "";
        const validEmail = new RegExp(
            '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        !contactEmail ? err.push(`Please Enter contact email`) : "";
        !validEmail.test(contactEmail) ? err.push("Please enter valid contact email") : "";
        !orderEmail ? err.push(`Please Enter order email`) : "";
        !validEmail.test(orderEmail) ? err.push("Please enter valid order email") : "";
        !returnEmail ? err.push(`Please Enter return email`) : "";
        !validEmail.test(returnEmail) ? err.push("Please enter valid return email") : "";
        !customerServiceEmail ? err.push(`Please Enter customer service email`) : "";
        !validEmail.test(customerServiceEmail) ? err.push("Please enter valid service email") : "";
        !IBAN ? err.push(`Please Enter IBAN`) : "";
        !idFront ? err.push(`Please Enter identity front page`) : "";
        !idBack ? err.push(`Please Enter identity back page`) : "";
        !addressFront ? err.push(`Please Enter addressproof front page`) : "";
        !addressBack ? err.push(`Please Enter addressproof back page`) : "";

        setErrors(err);

        if (err.length) return false;

        return true;
    };
    const identityFrontView = []
    idFront && identityFrontView.push(idFront)
    const identityBackView = []
    const proofOfAddressFrontView = []
    const proofOfAddressBackView = []

    idBack && identityBackView.push(idBack)
    addressFront && proofOfAddressFrontView.push(addressFront)
    addressBack && proofOfAddressBackView.push(addressBack)
    const imgStyle = { display: "flex", justifyContent: "space-between" }

    const submit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true)
        const idf = identityFrontView ? await uploadFiles(identityFrontView) : []
        const idb = identityBackView ? await uploadFiles(identityBackView) : []
        const af = proofOfAddressFrontView ? await uploadFiles(proofOfAddressFrontView) : []
        const ab = proofOfAddressBackView ? await uploadFiles(proofOfAddressBackView) : []

        const ibankData = {
            iban: IBAN,
            identityFrontView: idf,
            identityBackView: idb,
            proofOfAddressFrontView: af,
            proofOfAddressBackView: ab
        }
        const sellerResponse = await authAxios()({
            url: `sellers/${seller.id}`,
            method: "PUT",
            data: ibankData,
        });
        const data = {
            phone: contactPhone,
            contactEmail,
            orderManagementEmail: orderEmail,
            returnsEmail: returnEmail,
            customerServiceEmail: customerServiceEmail,
            // iban: IBAN,
            language,
            currency,
            // images: response

        }
        const res = await authAxios()({
            url: `/shops`,
            method: "POST",
            data: data
        });
        const rs = await authAxios()({
            url: `/sellers/${seller.id}`,
            method: "PUT",
            data: {
                shop: res.data._id
            }
        })

        dispatch(fetchSeller())
        setLoading(false)

        if (res && sellerResponse) {
            nextPage();
        }
    };

    console.log("SELLLER NAME")
    console.log(seller)
    return (
        <div className="page-section wf-section">
            <div className="container">
                <div className="heading-wrapper">
                    <h1 className="headline-2 mb-30">Create your Shop</h1>
                    <br />
                    <ShopProgressBar />
                    <div className="settings-block">
                        <h3 className="headline-5 mb-50">Basic Information</h3>
                        <div className="w-form">
                            <form id="email-form-7" encType="multipart/form-data" name="email-form-7" data-name="Email Form 7">
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
                                                {!editName ? <div className={`${!editName ? "" : " hidden"}`}>{name ? name : "Name"}</div> :
                                                    <input
                                                        onChange={(e) => setName(e.target.value)}
                                                        value={name}
                                                        type="text"
                                                        className="input-x-edit w-input"
                                                        maxLength="256"
                                                        placeholder="Name *"
                                                        required=""
                                                    />}
                                                <div className="input-x__change">
                                                    <div style={{ cursor: "pointer" }} onClick={() => setEditName(!editName)}>Change</div>
                                                    <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                </div>
                                            </div>
                                            <div className="input-x input-x--flex">
                                                {!editCEO ? <div className={`${!editCEO ? "" : " hidden"}`}>{CEO ? CEO : "CEO"}</div> :
                                                    <input
                                                        onChange={(e) => setCEO(e.target.value)}
                                                        value={CEO}
                                                        type="text"
                                                        className="input-x-edit w-input"
                                                        maxLength="256"
                                                        placeholder="CEO *"
                                                        required=""
                                                    />}
                                                <div className="input-x__change">
                                                    <div style={{ cursor: "pointer" }} onClick={() => setEditCEO(!editCEO)}>Change</div>
                                                    <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                </div>
                                            </div>
                                            <div className="input-x input-x--flex">
                                                {!editPhone ? <div className={`${!editPhone ? "" : " hidden"}`}>{phone ? phone : "2-(056)634-6566"}</div> :
                                                    <input
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        value={phone}
                                                        type="text"
                                                        className="input-x-edit w-input"
                                                        maxLength="256"
                                                        placeholder="Phone number *"
                                                        required=""
                                                    />}
                                                <div className="input-x__change">
                                                    <div style={{ cursor: "pointer" }} onClick={() => setEditPhone(!editPhone)}>Change</div>
                                                    <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                </div>
                                            </div>
                                            <div className="input-x input-x--flex">
                                                {!editEmail ? <div className={`${!editEmail ? "" : " hidden"}`}>{email ? email : "name"}</div> :
                                                    <input
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        value={email}
                                                        type="text"
                                                        className="input-x-edit w-input"
                                                        maxLength="256"
                                                        placeholder="Email *"
                                                        required=""
                                                    />}
                                                <div className="input-x__change">
                                                    <div style={{ cursor: "pointer" }} onClick={() => setEditEmail(!editEmail)}>Change</div>
                                                    <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <br />
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
                                                    type="number"
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
                                        <div className="product-add-block">
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
                                            <input type="file" style={{ display: "none" }} onChange={(e) => setAddressBack(e.target.files[0])} id="address-backview" />

                                            <p className="mb-20"> Identity Documents</p>

                                            <div style={imgStyle} >
                                                {idFront && <img className="mb-20" loading="lazy" width="220" height="240" src={URL.createObjectURL(idFront)} alt="id-front" style={{ borderRadius: "10px" }} />}
                                                {idBack && <img className="mb-20" loading="lazy" width="220" height="240" src={URL.createObjectURL(idBack)} alt="id-back" style={{ borderRadius: "10px" }} />}
                                            </div>
                                            <div className="" style={{ display: "flex", justifyContent: "space-between" }} >

                                                <label className="button" htmlFor="id-frontview" >Upload Front View</label  >

                                                <label className="button" htmlFor="id-backview" >Upload Back View</label  >
                                            </div>

                                            <div className="spacer-40" />
                                            <p className="mb-20"> Proof Of Address Documents</p>
                                            <div style={imgStyle} >
                                                {addressFront && <img className="mb-20" loading="lazy" width="220" height="240" src={URL.createObjectURL(addressFront)} style={{ borderRadius: "10px" }} alt="address - front" />}
                                                {addressBack && <img className="mb-20" loading="lazy" width="220" height="240" src={URL.createObjectURL(addressBack)} style={{ borderRadius: "10px" }} alt="address-back" />}
                                            </div>

                                            <div className="" style={{ display: "flex", justifyContent: "space-between" }}>
                                                <label className="button" htmlFor="address-frontview" >Upload Front View</label  >
                                                <label className="button" htmlFor="address-backview" >Upload Back View</label  >
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
                                {errors && errors.length > 0 && errors.map(error =>
                                    <Message text={error} status={-1} />)
                                }

                                {loading
                                    ?
                                    <button className="button blue mr-10">Loading....</button>
                                    :
                                    <div onClick={submit} className="button blue mr-10">Save and Continue</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Seller_Shop_Info;