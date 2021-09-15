import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { authAxios } from "@/setups/axios";


import ShopProgressBar from "./Utils/ShopProgressBar";


const Seller_Shop_Terms = ({ nextPage }) => {
    const { seller } = useSelector((state) => state.user);
    const [errors, setErrors] = useState([]);

    const [returnAndRefund, setReturnAndRefund] = useState("");
    const [generalCondition, setGeneralCondition] = useState("");
    const [privacyPolicy, setPrivacyPolicy] = useState("");

    useEffect(() => {
        if (seller.shop) 
        {
            setReturnAndRefund(seller.shop.returnsAndRefunds)
            setGeneralCondition(seller.shop.generalConditions)
            setPrivacyPolicy(seller.shop.privacyPolicy)
        }
      }, []);
      
      const validate = () => {
        const err = [];


        setErrors(err);

        if (err.length) return false;
        
        return true;
    };
    
    const submit = async (e) => {
        e.preventDefault();
        
        if (!validate()) return;
        
        const data = {
            returnsAndRefunds:returnAndRefund,
            generalConditions:generalCondition,
            privacyPolicy
        }
        const res = await authAxios()({
            url: `/shops/${seller.shop.id} `,
            method: "PUT",
            data:data
          });
        console.log(res)

        if (res) {
        nextPage();
        }
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
                                    <h4 className="headline-5">Returns and Refunds</h4>
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