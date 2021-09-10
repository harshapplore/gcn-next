import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ShopProgressBar from "./Utils/ShopProgressBar";


const Seller_Shop_Terms = ({ nextPage }) => {
    const { seller } = useSelector((state) => state.user);
    const [errors, setErrors] = useState([]);

    const [returnAndRefund, setReturnAndRefund] = useState("");
    const [generalCondition, setGeneralCondition] = useState("");
    const [privacyPolicy, setPrivacyPolicy] = useState("");
    // const [termLanguage, setTermLanguage] = useState("english");

    // console.log(seller)
    // useEffect(() => {
    //   if (seller.questionaire) setInitials(seller.questionaire);
    // }, [seller]);




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
                        <div className="w-form">
                            <form >
                                <div className="terms-headline mb-20">
                                    <h4 className="headline-5">Returns and Refungs</h4>
                                </div>
                                <textarea
                                    onChange={(e) => setReturnAndRefund(e.target.value)}
                                    placeholder="Type in here…"
                                    maxLength="5000"
                                    className="input-x input-x--text-area w-input"></textarea>
                                <div className="settings-spacer"></div>
                                <div className="terms-headline mb-20">
                                    <h4 className="headline-5">General Conditions</h4>
                                </div>
                                <textarea
                                    onChange={(e) => setGeneralCondition(e.target.value)}
                                    placeholder="Type in here…"
                                    maxLength="5000"
                                    className="input-x input-x--text-area w-input"></textarea>
                                <div className="settings-spacer"></div>
                                <h4 className="headline-5 mb-20">Privacy Policy</h4>
                                <textarea
                                    onChange={(e) => setPrivacyPolicy(e.target.value)}
                                    placeholder="Type in here…"
                                    maxLength="5000"
                                    className="input-x input-x--text-area mb-30 w-input"></textarea>
                                <div className="button blue" onClick={submit}>Save and Continue</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Seller_Shop_Terms;