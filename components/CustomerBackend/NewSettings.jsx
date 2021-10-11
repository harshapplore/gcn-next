import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from "@/slices/user";
import SuccessInput from "@/shared/Input/SuccessInput";
import { changeEmail, changeName, changePassword } from '@/_controllers/customer';
import authAxios, { axios } from '@/setups/axios';
import router from "next/router";
import ErrorInput from "@/shared/Input/Error";
import countries from '../../_data/countries.json'



import { saveAddress } from '@/_methods/cart';
import { fetchCustomer } from '@/slices/customer';
import Password from '../SellerBackend/Settings/sections/password';
import { scrollToElement } from '@/utils/scroll';

//settings

const Settings = () => {
    const { customer } = useSelector((state) => state.customer);
    console.log(customer)
    // const { user } = useSelector((state) => state.user);
    // const { customer: { user } } = useSelector((state) => state.customer);
    const dispatch = useDispatch()
    const [name, setName] = React.useState('');
    const [confirmName, setConfirmName] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [regionLoading, setRegionLoading] = React.useState(false);
    const [passwordLoading, setPasswordLoading] = React.useState(false);
    const [success, setSuccess] = React.useState("");
    const [deliveryDetMessage, setDeliveryDetMessage] = React.useState("");
    const [regionMessage, setRegionMessage] = React.useState("");


    const [email, setEmail] = React.useState('');
    const [confirmEmail, setConfirmEmail] = React.useState('');
    const [nameMessage, setNameMessage] = React.useState('');
    const [emailMessage, setEmailMessage] = React.useState('');
    const [passwordMessage, setPasswordMessage] = React.useState('');

    const [currPassword, setCurrPassword] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [fName, setfName] = React.useState('');
    const [lName, setlName] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [streetAddress, setStreetAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [postalCode, setPostalCode] = React.useState('');
    // const [vat, setvat] = React.useState("");
    const [billingEmail, setBillingEmail] = React.useState("");
    const [billingPhone, setBillingPhone] = React.useState("");
    const [billingEmailDel, setBillingEmailDel] = React.useState("");
    const [billingPhoneDel, setBillingPhoneDel] = React.useState("");
    const [streetAddressDel, setStreetAddressDel] = React.useState('');
    const [cityDel, setCityDel] = React.useState('');
    const [postalCodeDel, setPostalCodeDel] = React.useState('');
    // const [vatDel, setvatDel] = React.useState(0);
    // const [ad,setAd]=React.useState([])
    const [deleteUser, setDeleteUser] = React.useState("");
    const [language, setLanguage] = React.useState("");
    const [region, setRegion] = React.useState("");
    const [currency, setCurrency] = React.useState("");
    const [errors, setErrors] = React.useState("");
    // const [passwordShow, setPassworShow] = React.useState(false);
    // const [cPasswordShow, setCPassworShow] = React.useState(false);



    useEffect(() => {
        dispatch(fetchCustomer())
        if (customer.user) {

            setfName(customer.user.addressAccount && customer.user.addressAccount[0].fName)
            setlName(customer.user.addressAccount && customer.user.addressAccount[0].lName)
            setCompany(customer.user.addressAccount && customer.user.addressAccount[0].company)
            setStreetAddress(customer.user.addressAccount && customer.user.addressAccount[0].streetAddress)
            setCity(customer.user.addressAccount && customer.user.addressAccount[0].city)
            setPostalCode(customer.user.addressAccount && customer.user.addressAccount[0].postalCode)
            // setvat(customer.user.addressAccount && customer.user.addressAccount[0].vat)
            setBillingEmail(customer.user.addressAccount && customer.user.addressAccount[0].billingEmail)
            setBillingPhone(customer.user.addressAccount && customer.user.addressAccount[0].billingPhone)
            setBillingEmailDel(customer.user.addressAccount && customer.user.addressAccount[1].billingEmailDel)
            setBillingPhoneDel(customer.user.addressAccount && customer.user.addressAccount[1].billingPhoneDel)
            setStreetAddressDel(customer.user.addressAccount && customer.user.addressAccount[1].streetAddressDel)
            setCityDel(customer.user.addressAccount && customer.user.addressAccount[1].cityDel)
            setPostalCodeDel(customer.user.addressAccount && customer.user.addressAccount[1].postalCodeDel)
            // setvatDel(customer.user.addressAccount && customer.user.addressAccount[1].vatDel)
            setLanguage(customer.user.language && customer.user.language)
            setRegion(customer.user.region && customer.user.region)
            setCurrency(customer.user.currency && customer.user.currency)
        }
    }, [])

    const nameValidate = () => {
        const errors = {};
        if (!name)
            errors.name = "Please provide name";
        if (!confirmName)
            errors.confirmName = "Please provide name to confirm";
        if (name !== confirmName)
            errors.nameMatch = "Name is not matching";
        setErrors(errors);
        return true;
    };
    const emailValidate = () => {
        const errors = {};
        if (!email)
            errors.email = "Please provide email";
        if (!confirmEmail)
            errors.confirmEmail = "Please provide email to confirm";
        if (email !== confirmEmail)
            errors.emailMatch = "email is not matching";
        setErrors(errors);
        return true;
    };
    const passwordValidate = () => {
        const errors = {};
        // if (!password)
        //     errors.password = "Please provide password";
        if (!currPassword)
            errors.password = "Please provide current password";

        // if (!confirmPassword)
        //     errors.confirmEmail = "Please provide password to confirm";
        // if (password !== confirmPassword)
        //     errors.passwordMatch = "Password is not matching";
        setErrors(errors);
        return true;
    };

    const attemptNameChange = async (e) => {

        e.preventDefault();
        if (!nameValidate()) {
            return
        }
        else {
            if (name === confirmName) {
                const data = {
                    name
                }
                const res = await authAxios()({
                    url: `/users/${customer.user.id}`,
                    method: "PUT",
                    data
                });
                dispatch(fetchUser())
                console.log(res)
                setNameMessage("Name updated successfully")
                // location.reload()
            }
        }
    }
    const attemptEmailChange = async (e) => {
        e.preventDefault();
        if (!emailValidate()) {
            return
        }
        else {
            if (email === confirmEmail) {
                const data = {
                    email
                }
                const res = await authAxios()({
                    url: `/users/${customer.user.id}`,
                    method: "PUT",
                    data
                });
                dispatch(fetchUser())
                console.log(res)
                setEmailMessage("Email updated successfully")
                // location.reload()
            }
        }

    }

    const saveRegion = async (e) => {
        e.preventDefault();
        setRegionLoading(true)
        const data = {
            language,
            currency,
            region
        }
        const response = await authAxios()({
            url: `/users/${customer.user.id}`,
            method: "PUT",
            data
        });
        console.log(response);
        setRegionMessage("Details Updated successfully")
        setRegionLoading(false)
    }
    const deleteAccount = (e) => {
        e.preventDefault()

        setTimeout(async () => {
            const deleteResponse = await authAxios()({
                url: `users/${customer.user.id}`,
                method: "DELETE",
            });

            if (deleteResponse) {
                localStorage.removeItem("token")
                localStorage.removeItem("data")
            }
        }, 2592000)

        setDeleteUser("processing, your account will be deactivated within 4 weeks")
        setTimeout(() => {
            router.push("/")
        }, 2000)
    }
    const attemptPasswordChange = async (e) => {
        e.preventDefault();
        // if (!currPassword) return
        if (!passwordValidate()) {
            return
        }
        let errors = {}
        console.log(currPassword)
        console.log(customer.user.email)
        const response = await axios()({
            url: "/auth/local",
            method: "POST",
            data: {
                identifier: customer.user.email,
                password: currPassword,
            }
        }).catch((error) => {
            console.log(error, error.response);
            // setErrors("Please enter correct password")
            // return;
        })
        console.log(response)
        if (!password && !confirmPassword || password !== confirmPassword) {
            errors.password = "Please provide password";

            errors.confirmEmail = "Please provide password to confirm";
            errors.passwordMatch = "Password is not matching";
            setErrors(errors)

        }
        if (response && response.data && response.data.jwt) {

            const res = await changePassword(currPassword, password);

            console.log("res", res);

            setSuccess(res.message);

            setTimeout(() => setSuccess(""), 2000);

        }
        else {
            errors.currPassword = "Please provide current password"
            setErrors(errors)
        }



        // if (password === confirmPassword) {
        //     changePassword(currPassword, password)
        //         .then(res => {
        //             console.log(res);
        //             dispatch(fetchUser())
        //         })
        // }
    }
    const saveBilingAddress = async (e) => {

        e.preventDefault()
        setLoading(true)
        const billData = {
            fName,
            lName,
            email: customer.user.email,
            company,
            streetAddress,
            city,
            postalCode,
            // vat,
            billingEmail,
            billingPhone,
            type: "Billing",
            user: customer.user.id
        }
        const deliveryData = {
            email: customer.user.email,
            streetAddressDel,
            cityDel,
            postalCodeDel,
            // vatDel,
            billingPhoneDel,
            billingEmailDel,
            type: "Delivery",
            user: customer.user.id
        }
        const response = await authAxios()({
            url: `/users/${customer.user.id}`,
            method: "PUT",
            data: {
                addressAccount: [billData, deliveryData]
            }

        });
        console.log(response);
        setDeliveryDetMessage("Details updated successfully")
        setLoading(false)
        // location.reload()
    }

    // const saveDeliveryAddress = async(e) => {
    //     e.preventDefault()
    //     const data = {
    //         email:customer.user.email,
    //         streetAddress,
    //         city,
    //         postalCode,
    //         vat,
    //         type:"Delivery",
    //         user:customer.user.id
    //     }
    //     const response = await authAxios()({
    //         url: `/addresses`,
    //         method: "POST",
    //         data
    //       }); 
    //       console.log(response);
    // }

    return (
        <>
            <div className="flex">
                <h2 className="headline-4 mb-30">My Account Settings</h2>
                <div className="settings-nav">
                    <div onClick={() => scrollToElement("#passwordAndEmail")} className="cursor settings-link current orange"> Password &amp; E-Mail</div>
                    <div onClick={() => scrollToElement("#billing")} className="cursor settings-link">Billing &amp; Delivery Address</div>
                    <div onClick={() => scrollToElement("#preferences")} className="cursor settings-link">Payment &amp; Preferences</div>
                    <div onClick={() => scrollToElement("#deleteAcct")} className="cursor settings-link">Delete Account</div>
                </div>
            </div>

            <div className="settings-block">
                <h3 className="headline-5 mb-30">About me</h3>
                <div className="account-form-2" id="passwordAndEmail">
                    <div>
                        <div className="label">Current Name</div>
                        <div>{customer.user?.name}</div>
                        <div className="label mgt-20">Member Since</div>
                        <div>
                            {new Date(customer.createdAt) &&
                                new Date(customer.createdAt).getDate() +
                                "." +
                                (new Date(customer.createdAt).getMonth() < 10 ? "0" : "") +
                                Number(new Date(customer.createdAt).getMonth()) +
                                "." +
                                new Date(customer.createdAt).getFullYear()}
                        </div>
                    </div>
                    <div className="w-form">
                        <form id="wf-form-Change-Password" name="wf-form-Change-Password" data-name="Change Password">
                            <h4 className="subtitle-2 mb-10">Change my name</h4>
                            <input
                                type="text"
                                className="input-x mb-15 w-input"
                                maxLength="256"
                                name="Current-Name-2"
                                data-name="Current Name 2"
                                placeholder="Current Name *"
                                id="Current-Name"
                                value={customer.user?.name || name}
                                required="" />
                            <div className="input-x input-x--flex mb-15">
                                <input type="text" className="input-x__input-field w-input" maxLength="256" name="New-Name" data-name="New Name" placeholder="New Name *" id="New-Name" required="" value={name} onChange={(e) => setName(e.target.value)} />

                            </div>
                            <div className="input-x input-x--flex mb-30"><input type="text" className="input-x__input-field w-input" maxLength="256" name="Confirm-New-Name" data-name="Confirm New Name" placeholder="Confirm New Name *" id="Confirm-New-Name" required="" value={confirmName} onChange={(e) => setConfirmName(e.target.value)} />

                            </div>
                            <div onClick={(e) => attemptNameChange(e)} className="button blue mr-10 orange">Save Changes</div>
                        </form>
                        {nameMessage && <div>{nameMessage}</div>}

                        {errors.name && <div style={{ marginTop: "20px" }} ><ErrorInput message={errors.name} /></div>}
                        {errors.confirmName && <div style={{ marginTop: "20px" }} ><ErrorInput message={errors.confirmName} /></div>}
                        {errors.nameMatch && <div style={{ marginTop: "20px" }} ><ErrorInput message={errors.nameMatch} /></div>}
                        <div className="w-form-done"></div>
                        <div className="w-form-fail"></div>
                    </div>
                </div>
            </div>
            <div className="settings-block" >
                <h3 className="headline-5 mb-30">Password</h3>
                <div className="account-form-2">
                    <div>
                        <div className="label">Last Changed</div>
                        <div>
                            {customer.user && new Date(customer.user.updatedAt) &&
                            new Date(customer.user.updatedAt).getDate() +
                            "." +
                            (new Date(customer.user.updatedAt).getMonth() < 10 ? "0" : "") +
                            Number(new Date(customer.user.updatedAt).getMonth()) +
                            "." +
                            new Date(customer.user.updatedAt).getFullYear()}</div>
                    </div>
                    <div className="w-form">
                        <form id="wf-form-Change-Password" name="wf-form-Change-Password" data-name="Change Password">
                            <h4 className="subtitle-2 mb-10">Change Password</h4>
                            <input type="password" className="input-x mb-15 w-input" maxLength={256} name="Current-Password" data-name="Current Password" placeholder="Current Password *" id="Current-Password" required value={currPassword} onChange={(e) => setCurrPassword(e.target.value)} />
                            {errors.currPassword && <div style={{ marginTop: "20px" }} ><ErrorInput message={errors.currPassword} /></div>}

                            <div className="input-x input-x--flex mb-15">
                                <input type="password" className="input-x__input-field w-input" maxLength={256} name="New-Password" data-name="New Password" placeholder="New Password *" id="New-Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                {/* <div onClick={setPassworShow(!passwordShow)}  className="input-ext__show">Show</div> */}
                            </div>
                            <div className="input-x input-x--flex mb-30">
                                <input type="password" className="input-x__input-field w-input" maxLength={256} name="Confirm-New-Password" data-name="Confirm New Password" placeholder="Confirm New Password *" id="Confirm-New-Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                {/* <div onClick={setCPassworShow(!cPasswordShow)}  className="input-ext__show">Show</div> */}
                            </div>
                            {/* {errors.passwordNotMatch && <div style={{ marginBottom: "20px" }}>{errors.passwordNotMatch}</div>} */}
                            {errors.password && <div style={{ marginTop: "20px" }} ><ErrorInput message={errors.password} /></div>}
                            {errors.confirmPassword && <div style={{ marginTop: "20px" }} ><ErrorInput message={errors.confirmPassword} /></div>}
                            {errors.passwordMatch && <div style={{ marginTop: "20px" }} ><ErrorInput message={errors.passwordMatch} /></div>}
                            {errors.notMatch && <div style={{ marginTop: "20px" }} ><ErrorInput message={errors.notMatch} /></div>}
                            <div>{success &&
                                <SuccessInput message={success} />}</div>
                            <div onClick={(e) => attemptPasswordChange(e)} className="button blue mr-10 orange">Save Changes</div>
                        </form>
                        <div className="w-form-done" />
                        <div className="w-form-fail" />
                    </div>
                </div>
            </div>
            <div className="settings-block">
                <h3 className="headline-5 mb-30">My E-Mail Address</h3>
                <div className="account-form-2">
                    <div>
                        <div className="label">Current E-Mail Address</div>
                        <div>{customer.user?.email}</div>
                        <div className="label mgt-20">Status</div>
                        <div>{customer.user?.confirmed ? "Confirmed" : "Unconfirmed"}</div>
                    </div>
                    <div className="w-form">
                        <form id="wf-form-Change-Password" name="wf-form-Change-Password" data-name="Change Password">
                            <h4 className="subtitle-2 mb-10">Change E-Mail Address</h4>
                            <input
                                type="text"
                                className="input-x mb-15 w-input"
                                maxLength={256}
                                name="Current-E-Mail-Address"
                                data-name="Current E-Mail Address"
                                placeholder="Current E-Mail *"
                                id="Current-E-Mail-Address"
                                value={customer.user?.email || email}
                                required />
                            <div className="input-x input-x--flex mb-15"><input type="text" className="input-x__input-field w-input" maxLength={256} name="New-Mail-2" data-name="New Mail 2" placeholder="New E-Mail *" id="New-Mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-x input-x--flex mb-30"><input type="text" className="input-x__input-field w-input" maxLength={256} name="Confirm-New-mail" data-name="Confirm New mail" placeholder="Confirm New E-Mail *" id="Confirm-New-mail" required value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
                            </div>
                            <div onClick={(e) => attemptEmailChange(e)} className="button blue mr-10 orange">Save Changes</div>
                        </form>
                        {emailMessage && <div>{emailMessage}</div>}

                        {errors.email && <div style={{ marginTop: "20px" }} ><ErrorInput message={errors.email} /></div>}
                        {errors.confirmEmail && <div style={{ marginTop: "20px" }} ><ErrorInput message={errors.confirmEmail} /></div>}
                        {errors.emailMatch && <div style={{ marginTop: "20px" }} ><ErrorInput message={errors.emailMatch} /></div>}
                        <div className="w-form-done" />
                        <div className="w-form-fail" />
                    </div>
                </div>
            </div>

            <div className="settings-block" id="billing">
                <div className="account-current-data">
                    <div>
                        <div className="uppercase">BILLING&nbsp;ADDRESS</div>
                    </div>
                    {/* <div className="small bolder arrowup">Show Details</div> */}
                </div>
                <div className="w-form">
                    <form id="wf-form-Change-Shop-Information" name="wf-form-Change-Shop-Information" data-name="Change Shop Information">
                        <div className="account-form-1">
                            <div className="input-x input-x--flex">
                                <input
                                    type="text"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    name="First-Name-2"
                                    value={fName}
                                    onChange={e => setfName(e.target.value)}
                                    data-name="First Name 2"
                                    placeholder="First Name"
                                    id="First-Name-2" />
                            </div>
                            <div id="w-node-_67795e38-907f-2326-d21b-0f5a7a3c1b34-6fa6f585" className="input-x input-x--flex">
                                <input
                                    type="text"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    name="Last-Name-2"
                                    value={lName}
                                    onChange={e => setlName(e.target.value)}
                                    data-name="Last Name 2"
                                    placeholder="Last Name"
                                    id="Last-Name-2" />

                                {/* <div className="input-x__error">Error: <span className="input-error__message">Shop Name is already taken</span></div> */}
                            </div>
                            <div className="input-x input-x--flex">
                                <input
                                    type="text"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    name="Company-2"
                                    value={company}
                                    onChange={e => setCompany(e.target.value)}
                                    data-name="Company 2"
                                    placeholder="Company"
                                    id="Company-2" />

                            </div>
                            <div className="input-x input-x--flex">
                                <input
                                    type="text"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    value={streetAddress}
                                    onChange={e => setStreetAddress(e.target.value)}
                                    name="Street-Address-4"
                                    data-name="Street Address 4"
                                    placeholder="Street Address"
                                    id="Street-Address-4" />

                            </div>
                            <div className="input-x input-x--flex">
                                <input
                                    type="text"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                    name="City-4"
                                    data-name="City 4"
                                    placeholder="City"
                                    id="City-4" />

                            </div>
                            <div className="input-x input-x--flex">
                                <input
                                    type="text"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    value={postalCode}
                                    onChange={e => setPostalCode(e.target.value)}
                                    name="Postal-2"
                                    data-name="Postal 2"
                                    placeholder="Postal Code"
                                    id="Postal-2" />

                            </div>
                            {/* <div id="w-node-_67795e38-907f-2326-d21b-0f5a7a3c1b56-6fa6f585" className="input-x input-x--flex align-top">
                                <input
                                    type="number"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    value={vat}
                                    onChange={e => setvat(e.target.value)}
                                    name="VAT-3"
                                    data-name="VAT 3"
                                    placeholder="VAT"
                                    id="VAT-3" />

                            </div> */}
                            <div id="w-node-_67795e38-907f-2326-d21b-0f5a7a3c1b56-6fa6f585" className="input-x input-x--flex align-top">
                                <input
                                    type="email"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    value={billingEmail}
                                    onChange={e => setBillingEmail(e.target.value)}
                                    name="VAT-3"
                                    data-name="VAT 3"
                                    placeholder="Billing Email"
                                    id="VAT-3" />

                            </div>
                            <div id="w-node-_67795e38-907f-2326-d21b-0f5a7a3c1b56-6fa6f585" className="input-x input-x--flex align-top">
                                <input
                                    type="number"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    value={billingPhone}
                                    onChange={e => setBillingPhone(e.target.value)}
                                    name="VAT-3"
                                    data-name="VAT 3"
                                    placeholder="Billing Phone"
                                    id="VAT-3" />

                            </div>
                            {/* <div className="checkboxwrapper">
                                <div className="flex mgt-30 buttonwrapper"> */}
                            {/* <div onClick={saveBilingAddress} className="button blue mr-10 orange">Save Changes</div> */}
                            {/* <a href="#" className="button blue mr-10 secondary orange nobg">Dele Address</a> */}
                            {/* </div> */}
                            {/* </div>  */}
                        </div>
                    </form>
                    <div className="w-form-done" />
                    <div className="w-form-fail" />
                </div>
                <div className="settings-spacer" />
            </div>
            <div className="settings-block">
                <div className="account-current-data">
                    <div>
                        <div className="uppercase"> DELIVERY ADDRESS</div>
                    </div>
                    {/* <div className="small bolder arrowup">Show Details</div> */}
                </div>
                <div className="w-form">
                    <form id="wf-form-Change-Shop-Information" name="wf-form-Change-Shop-Information" data-name="Change Shop Information">
                        <div className="account-form-1">
                            <div className="input-x input-x--flex">
                                <input
                                    type="text"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    value={streetAddressDel}
                                    onChange={e => setStreetAddressDel(e.target.value)}
                                    name="Street-Address-4"
                                    data-name="Street Address 4"
                                    placeholder="Street Address"
                                    id="Street-Address-4" />
                            </div>
                            <div className="input-x input-x--flex">
                                <input
                                    type="text"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    value={cityDel}
                                    onChange={e => setCityDel(e.target.value)}
                                    name="City-4"
                                    data-name="City 4"
                                    placeholder="City"
                                    id="City-4" />
                            </div>
                            <div className="input-x input-x--flex">
                                <input
                                    type="text"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    value={postalCodeDel}
                                    onChange={e => setPostalCodeDel(e.target.value)}
                                    name="Postal-2"
                                    data-name="Postal 2"
                                    placeholder="Postal Code"
                                    id="Postal-2" />
                            </div>
                            {/* <div  className="input-x input-x--flex align-top">
                                <input
                                    type="text"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    value={vatDel}
                                    onChange={e => setvatDel(e.target.value)}
                                    name="VAT-3"
                                    data-name="VAT 3"
                                    placeholder="VAT"
                                    id="VAT-3" />
                            </div> */}
                            <div className="input-x input-x--flex">
                                <input
                                    type="email"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    value={billingEmailDel}
                                    onChange={e => setBillingEmailDel(e.target.value)}
                                    name="VAT-3"
                                    data-name="VAT 3"
                                    placeholder="Delivery Email"
                                    id="VAT-3" />
                            </div>
                            <div className="input-x input-x--flex">
                                <input
                                    type="number"
                                    className="input-x__input-field dark w-input"
                                    maxLength={256}
                                    value={billingPhoneDel}
                                    onChange={e => setBillingPhoneDel(e.target.value)}
                                    name="VAT-3"
                                    data-name="VAT 3"
                                    placeholder="Delivery Phone"
                                    id="VAT-3" />
                            </div>
                        </div>
                            {deliveryDetMessage && <div><SuccessInput message={deliveryDetMessage} /></div>}
                            <div className="checkboxwrapper">
                                <div className="flex">

                                    {loading ? <div className="button blue mr-10 orange">Loading...</div> :
                                        <div onClick={saveBilingAddress} className="button blue mr-10 orange">Save Changes</div>}
                                    {/* <a href="#" className="button blue mr-10 secondary orange nobg">Dele Address</a> */}
                                </div>
                            </div>
                    </form>
                    <div className="w-form-done" />
                    <div className="w-form-fail" />
                </div>
                <div className="settings-spacer" />
            </div>

            <div className="settings-block" id="preferences">
                <h3 className="headline-5 mb-30" >Preferences</h3>
                <div className="w-form">
                    <form id="wf-form-Change-Contact-Information" name="wf-form-Change-Contact-Information" data-name="Change Contact Information">
                        <div className="account-form-1 pref_form">
                            <select name="Language" onChange={e => setLanguage(e.target.value)} data-name="Language" id="Language" required className="input-x input-x--select w-select">
                                <option value={language && language}>{language || "Select a Language"}</option>
                                <option value="de">Deutsch</option>
                                <option value="en">English</option>
                            </select>
                            <select name="Currency" onChange={e => setCurrency(e.target.value)} data-name="Currency" id="Currency-9" required className="input-x input-x--select w-select">
                                <option value={currency && currency}>{currency || "Select a Currency"}</option>
                                <option value="EUR">€ (EUR)</option>
                                <option value="USD">$ (USD)</option>
                            </select>
                            <select name="Region" onChange={e => setRegion(e.target.value)} data-name="Region" id="Region" required className="input-x input-x--select w-select">
                                <option value={region && region}>{region || "Select a Region"}</option>
                                {countries && countries.map(country=> <option key={country} value={country}>{country}</option>)}
                                
                                {/* <option value="North America">North America</option> */}
                            </select>
                        </div>
                        {regionMessage && <div><SuccessInput message={regionMessage} /></div>}
                        {regionLoading ? <div className="button blue mr-10 orange">loading...</div> :
                            <div onClick={saveRegion} className="button blue mr-10 orange">Save Changes</div>}
                    </form>
                    <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
            </div>
            <div className="settings-block" id="deleteAcct">
                <h3 className="headline-5 mb-30" >Delete Account</h3>
                <div className="delete-question">What happens to my Account if I delete it?</div>
                <div className="delete-account">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    {deleteUser && <div>{deleteUser}</div>}
                    <div onClick={deleteAccount} id="w-node-c0542385-d9c9-0675-543c-203b23cb8fd4-6fa6f585" href="#" className="button blue secondary orange nobg bold uppercase">Delete my Account</div>
                </div>
            </div>
        </>
    );
}

export default Settings;