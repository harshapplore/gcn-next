import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from "@/slices/user";
import { changeEmail, changeName, changePassword } from '@/_controllers/customer';
const Settings = () => {
    const { customer: { user } } = useSelector((state) => state.customer);
    const dispatch = useDispatch()
    const [name, setName] = React.useState('');
    const [confirmName, setConfirmName] = React.useState('');

    const [email, setEmail] = React.useState('');
    const [confirmEmail, setConfirmEmail] = React.useState('');

    const [currPassword, setCurrPassword] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const attemptNameChange = () => {
        if (name === confirmName) {
            changeName(user.id, {
                name: name
            }).then(res => {
                console.log(res);
                dispatch(fetchUser())
            })
        }
    }
    const attemptEmailChange = () => {
        if (email === confirmEmail) {
            changeEmail(user.id, {
                email: email
            }).then(res => {
                console.log(res);
                dispatch(fetchUser())
            })
        }
    }
    const attemptPasswordChange = () => {
        if (password === confirmPassword) {
            changePassword(currPassword, password)
                .then(res => {
                    console.log(res);
                    dispatch(fetchUser())
                })
        }
    }

    return (
        <>
            <div className="flex">
                <h2 className="headline-4 mb-30">My Account Settings</h2>
                <div className="settings-nav">
                    <a href="#" className="settings-link current orange"> Password &amp; E-Mail</a>
                    <a href="#" className="settings-link">Billing &amp; Delivery Adress</a>
                    <a href="#" className="settings-link">Payment &amp; Preferences</a>
                    <a href="#" className="settings-link">Delete Account</a>
                </div>
            </div>

            <div className="settings-block">
                <h3 className="headline-5 mb-30">About me</h3>
                <div className="account-form-2">
                    <div>
                        <div className="label">Current Name</div>
                        <div>{user.name}</div>
                        <div className="label mgt-20">Membership since</div>
                        <div>01.01.2021</div>
                    </div>
                    <div className="w-form">
                        <form id="wf-form-Change-Password" name="wf-form-Change-Password" data-name="Change Password">
                            <h4 className="subtitle-2 mb-10">Change my name</h4><input type="text" className="input-x mb-15 w-input" maxLength="256" name="Current-Name-2" data-name="Current Name 2" placeholder="Current Name *" id="Current-Name" required="" />
                            <div className="input-x input-x--flex mb-15"><input type="text" className="input-x__input-field w-input" maxLength="256" name="New-Name" data-name="New Name" placeholder="New Name *" id="New-Name" required="" value={name} onChange={(e) => setName(e.target.value)} />

                            </div>
                            <div className="input-x input-x--flex mb-30"><input type="text" className="input-x__input-field w-input" maxLength="256" name="Confirm-New-Name" data-name="Confirm New Name" placeholder="Confirm New Name *" id="Confirm-New-Name" required="" value={confirmName} onChange={(e) => setConfirmName(e.target.value)} />

                            </div>
                            <div onClick={() => attemptNameChange()} className="button blue mr-10 orange">Save Changes</div>
                        </form>
                        <div className="w-form-done"></div>
                        <div className="w-form-fail"></div>
                    </div>
                </div>
            </div>
            <div className="settings-block">
                <h3 className="headline-5 mb-30">Password</h3>
                <div className="account-form-2">
                    <div>
                        <div className="label">Last Changed</div>
                        <div>01.01.2021</div>
                    </div>
                    <div className="w-form">
                        <form id="wf-form-Change-Password" name="wf-form-Change-Password" data-name="Change Password">
                            <h4 className="subtitle-2 mb-10">Change Password</h4><input type="password" className="input-x mb-15 w-input" maxLength={256} name="Current-Password" data-name="Current Password" placeholder="Current Password *" id="Current-Password" required value={currPassword} onChange={(e) => setCurrPassword(e.target.value)} />
                            <div className="input-x input-x--flex mb-15"><input type="password" className="input-x__input-field w-input" maxLength={256} name="New-Password" data-name="New Password" placeholder="New Password *" id="New-Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                <a href="#" className="input-ext__show">Show</a>
                            </div>
                            <div className="input-x input-x--flex mb-30"><input type="password" className="input-x__input-field w-input" maxLength={256} name="Confirm-New-Password" data-name="Confirm New Password" placeholder="Confirm New Password *" id="Confirm-New-Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                <a href="#" className="input-ext__show">Show</a>
                            </div>
                            <div onClick={() => attemptPasswordChange()} className="button blue mr-10 orange">Save Changes</div>
                        </form>
                        <div className="w-form-done" />
                        <div className="w-form-fail" />
                    </div>
                </div>
            </div>
            <div className="settings-block">
                <h3 className="headline-5 mb-30">My E-Mail Adress</h3>
                <div className="account-form-2">
                    <div>
                        <div className="label">Current E-Mail Adress</div>
                        <div>{user.email}</div>
                        <div className="label mgt-20">Status</div>
                        <div>{user.confirmed ? "Confirmed" : "Unconfirmed"}</div>
                    </div>
                    <div className="w-form">
                        <form id="wf-form-Change-Password" name="wf-form-Change-Password" data-name="Change Password">
                            <h4 className="subtitle-2 mb-10">Change E-Mail Adress</h4><input type="text" className="input-x mb-15 w-input" maxLength={256} name="Current-E-Mail-Adress" data-name="Current E-Mail Adress" placeholder="Current E-Mail *" id="Current-E-Mail-Adress" required />
                            <div className="input-x input-x--flex mb-15"><input type="text" className="input-x__input-field w-input" maxLength={256} name="New-Mail-2" data-name="New Mail 2" placeholder="New E-Mail *" id="New-Mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-x input-x--flex mb-30"><input type="text" className="input-x__input-field w-input" maxLength={256} name="Confirm-New-mail" data-name="Confirm New mail" placeholder="Confirm New E-Mail *" id="Confirm-New-mail" required value={confirmEmail} onChange={() => setConfirmEmail(e.target.value)} />
                            </div>
                            <div onClick={() => attemptEmailChange} className="button blue mr-10 orange">Save Changes</div>
                        </form>
                        <div className="w-form-done" />
                        <div className="w-form-fail" />
                    </div>
                </div>
            </div>

            <div className="settings-block">
                <h3 className="headline-5 mb-30">Delivery &nbsp;Adress</h3>
                <div className="account-current-data">
                    <div>
                        <div className="uppercase">BILLING&nbsp;ADRESS #1</div>
                    </div>
                    <div className="small bolder arrowup">Show Details</div>
                </div>
                <div className="w-form">
                    <form id="wf-form-Change-Shop-Information" name="wf-form-Change-Shop-Information" data-name="Change Shop Information">
                        <div className="account-form-1">
                            <div className="input-x input-x--flex"><input type="text" className="input-x__input-field dark w-input" maxLength={256} name="First-Name-2" data-name="First Name 2" placeholder="First Name" id="First-Name-2" />
                                <div className="input-x__change">
                                    <div>Change</div><img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                </div>
                            </div>
                            <div id="w-node-_67795e38-907f-2326-d21b-0f5a7a3c1b34-6fa6f585" className="input-x input-x--flex"><input type="text" className="input-x__input-field dark w-input" maxLength={256} name="Last-Name-2" data-name="Last Name 2" placeholder="Last Name" id="Last-Name-2" />
                                <div className="input-x__change">
                                    <div>Change</div><img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                </div>
                                <div className="input-x__error">Error: <span className="input-error__message">Shop Name is already taken</span></div>
                            </div>
                            <div className="input-x input-x--flex"><input type="text" className="input-x__input-field dark w-input" maxLength={256} name="Company-2" data-name="Company 2" placeholder="Company" id="Company-2" />
                                <div className="input-x__change">
                                    <div>Change</div><img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                </div>
                            </div>
                            <div className="input-x input-x--flex"><input type="email" className="input-x__input-field dark w-input" maxLength={256} name="Street-adress-4" data-name="Street Adress 4" placeholder="Street adress" id="Street-adress-4" />
                                <div className="input-x__change">
                                    <div>Change</div><img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                </div>
                            </div>
                            <div className="input-x input-x--flex"><input type="email" className="input-x__input-field dark w-input" maxLength={256} name="City-4" data-name="City 4" placeholder="City" id="City-4" />
                                <div className="input-x__change">
                                    <div>Change</div><img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                </div>
                            </div>
                            <div className="input-x input-x--flex"><input type="email" className="input-x__input-field dark w-input" maxLength={256} name="Postal-2" data-name="Postal 2" placeholder="Postal Code" id="Postal-2" />
                                <div className="input-x__change">
                                    <div>Change</div><img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                </div>
                            </div>
                            <div id="w-node-_67795e38-907f-2326-d21b-0f5a7a3c1b56-6fa6f585" className="input-x input-x--flex align-top"><input type="email" className="input-x__input-field dark w-input" maxLength={256} name="VAT-3" data-name="VAT 3" placeholder="VAT" id="VAT-3" />
                                <div className="input-x__change">
                                    <div>Change</div><img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                </div>
                            </div>
                            <div className="checkboxwrapper"><label className="w-checkbox checkbox-field mb-0">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked" /><input type="checkbox" id="First Cjoice" name="First-Cjoice" data-name="First Cjoice" defaultChecked style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span htmlFor="First Cjoice-2" className="checkbox-label small bold w-form-label">First Choice</span>
                            </label><label className="w-checkbox checkbox-field mb-0">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked" /><input type="checkbox" id="First Cjoice" name="First-Cjoice" data-name="First Cjoice" defaultChecked style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span htmlFor="First Cjoice-2" className="checkbox-label small w-form-label">First Choice</span>
                                </label><label className="w-checkbox checkbox-field mb-0">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked" /><input type="checkbox" id="First Cjoice" name="First-Cjoice" data-name="First Cjoice" defaultChecked style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span htmlFor="First Cjoice-2" className="checkbox-label small w-form-label">First Choice</span>
                                </label>
                                <div className="flex mgt-30 buttonwrapper">
                                    <a href="#" className="button blue mr-10 orange">Save Changes</a>
                                    <a href="#" className="button blue mr-10 secondary orange nobg">Dele Adress</a>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="w-form-done" />
                    <div className="w-form-fail" />
                </div>
                <div className="settings-spacer" />
                <div className="account-current-data">
                    <div>
                        <div className="uppercase">BILLING&nbsp;ADRESS #2</div>
                    </div>
                    <div className="small bolder">Show Details</div>
                </div>
                <div className="settings-spacer" />
                <div className="greybg flex">
                    <div className="text-block-4 bigtext mgr20">+</div>
                    <div className="bigger">Add Billing Adress</div>
                </div>
            </div>
            <div className="settings-block">
                <h3 className="headline-5 mb-30">Payment Preference</h3>
                <div className="flex flexleft mb-20"><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" width={60} height={30} alt="" className="image" />
                    <div className="uppercase ml15">Payment Method</div>
                    <div className="small bolder arrowup">Show Details</div>
                </div>
                <div className="flex">
                    <div className="flex40">
                        <div className="text-block-3">Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit </div>
                        <div className="paymentdefault_checkbox w-form">
                            <form id="email-form-6" name="email-form-6" data-name="Email Form 6"><label className="w-checkbox checkbox-field mb-0 mt20">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox w--redirected-checked" /><input type="checkbox" id="Free shipping" name="Free-shipping" data-name="Free shipping" defaultChecked style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span htmlFor="Free shipping" className="checkbox-label medium w-form-label">Set as default payment method</span>
                            </label></form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex50">
                        <div className="w-form">
                            <form id="email-form-5" name="email-form-5" data-name="Email Form 5">
                                <div className="input-x-2 input-x--flex mb-10 flex60"><input type="text" className="input-x__input-field-2 dark w-input" maxLength={256} name="Card-Number-3" data-name="Card Number 3" placeholder="Card Number" id="Card-Number-3" />
                                    <div className="input-x__change">
                                        <div>Change</div><img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                    </div>
                                </div>
                                <div className="input-x-2 input-x--flex mb-10 flex60"><input type="text" className="input-x__input-field-2 dark w-input" maxLength={256} name="Name-on-Card-3" data-name="Name On Card 3" placeholder="Name on Card" id="Name-on-Card-3" />
                                    <div className="input-x__change">
                                        <div>Change</div><img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                    </div>
                                </div>
                                <div className="input_datewrapper flex"><label htmlFor="day" className="datewrapper_item datewrapper_label">Expitation date</label><select name="Currency-10" data-name="Currency 10" id="Currency-10" required className="input-x input-x--select datewrapper-day bold w-select">
                                    <option value={1}>01</option>
                                    <option value={2}>02</option>
                                </select><select name="Currency-10" data-name="Currency 10" id="Currency-10" required className="input-x input-x--select bold w-select">
                                        <option value={2022}>2021</option>
                                        <option value="USD">USD</option>
                                    </select></div>
                            </form>
                            <div className="button_datewrapper fle">
                                <a href="#" className="button blue mr-10 ml-auto lowercase flex50 orange">Save Changes</a>
                                <a href="#" className="button blue mr-10 ml-auto lowercase secondary flex50 nobgimage orange">Delete Adress</a>
                            </div>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="assessment-spacer" />
                <div className="flex flexleft mb-20"><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" width={60} height={30} alt="" className="image" />
                    <div className="uppercase ml15">Payment Method</div>
                    <div className="small bolder">Show Details</div>
                </div>
                <div className="assessment-spacer" />
                <div className="greybg flex">
                    <div className="text-block-4 bigtext mgr20">+</div>
                    <div className="bigger">Add Payment Method</div>
                </div>
            </div>
            <div className="settings-block">
                <h3 className="headline-5 mb-30">Preferences</h3>
                <div className="w-form">
                    <form id="wf-form-Change-Contact-Information" name="wf-form-Change-Contact-Information" data-name="Change Contact Information">
                        <div className="account-form-1 pref_form"><select name="Language" data-name="Language" id="Language" required className="input-x input-x--select w-select">
                            <option value>Select a Language</option>
                            <option value="de">Deutsch</option>
                            <option value="en">English</option>
                        </select><select name="Currency" data-name="Currency" id="Currency-9" required className="input-x input-x--select w-select">
                                <option value>Select a Currency</option>
                                <option value="EUR">€ (EUR)</option>
                                <option value="USD">$ (USD)</option>
                            </select><select name="Region" data-name="Region" id="Region" required className="input-x input-x--select w-select">
                                <option value>Select a Region</option>
                                <option value="Europe">Europe</option>
                                <option value="North America">North America</option>
                            </select></div>
                        <a href="#" className="button blue mr-10 orange">Save Changes</a>
                    </form>
                    <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
            </div>
            <div className="settings-block">
                <h3 className="headline-5 mb-30">Delete Account</h3>
                <div className="delete-question">What happens to my Account if I delete it?</div>
                <div className="delete-account">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    <a id="w-node-c0542385-d9c9-0675-543c-203b23cb8fd4-6fa6f585" href="#" className="button blue secondary orange nobg bold uppercase">Delete my Account</a>
                </div>
            </div>
        </>
    );
}

export default Settings;