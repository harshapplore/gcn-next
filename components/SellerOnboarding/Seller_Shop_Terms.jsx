import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { authAxios } from "@/setups/axios";
import Message from "@/shared/Message";
import ShopProgressBar from "./Utils/ShopProgressBar";


const Seller_Shop_Terms = ({ nextPage }) => {
    const { seller } = useSelector((state) => state.user);
    const [errors, setErrors] = useState([]);

    const [returnAndRefund, setReturnAndRefund] = useState("");
    const [generalCondition, setGeneralCondition] = useState("");
    const [privacyPolicy, setPrivacyPolicy] = useState("");
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        if (seller.shop) {
            setReturnAndRefund(seller.shop.returnsAndRefunds)
            setGeneralCondition(seller.shop.generalConditions)
            setPrivacyPolicy(seller.shop.privacyPolicy)
        }
    }, []);

    const validate = () => {
        const err = [];

        !returnAndRefund ? err.push(`Please Enter return and refund`) : "";
        !generalCondition ? err.push(`Please Enter general conditons`) : "";
        !privacyPolicy ? err.push(`Please Enter privacy policy`) : "";

        setErrors(err);

        if (err.length) return false;

        return true;
    };

    const submit = async (e) => {
        e.preventDefault();

        if (!validate()) return;
        setLoading(true)
        const data = {
            returnsAndRefunds: returnAndRefund,
            generalConditions: generalCondition,
            privacyPolicy
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
                                    value={returnAndRefund}
                                    className="input-x input-x--text-area w-input"></textarea>
                                <div className="settings-spacer"></div>
                                <div className="terms-headline mb-20">
                                    <h4 className="headline-5">General Conditions</h4>
                                </div>
                                <textarea
                                    onChange={(e) => setGeneralCondition(e.target.value)}
                                    placeholder="Type in here…"
                                    maxLength="5000"
                                    value={generalCondition}
                                    className="input-x input-x--text-area w-input"></textarea>
                                <div className="settings-spacer"></div>
                                <h4 className="headline-5 mb-20">Privacy Policy</h4>
                                <textarea
                                    onChange={(e) => setPrivacyPolicy(e.target.value)}
                                    placeholder="Type in here…"
                                    maxLength="5000"
                                    value={privacyPolicy}
                                    className="input-x input-x--text-area mb-30 w-input"></textarea>

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

export default Seller_Shop_Terms;