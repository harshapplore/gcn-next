import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ProgressBar from "./Utils/ProgressBar";


const Seller_Price_Intro = ({ nextPage }) => {
    const { seller } = useSelector((state) => state.user);
    const [errors, setErrors] = useState([]);
    



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

        // if (response) {
        nextPage();
        // }
    };

    return (
        <div className="page-section wf-section">
            <div className="container">
                <div className="_40-wrapper">
                    <h1 className="headline-1 overlap-right mb-40">Congratulations you have been approved to become a vendor on Green Cloud Nine</h1>
                    <p className="mb-40">Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id vitae erat. Nulla mollis sapien</p>
                    <div className="button blue" onClick={submit} >Continue with pricing plan</div>
                    <div className="frog-wrapper">
                        <img src="../images/banner-vendor.png" loading="lazy" alt="" className="frog-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seller_Price_Intro;