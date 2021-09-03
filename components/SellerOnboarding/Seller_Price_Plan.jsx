import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ProgressBar from "./Utils/ProgressBar";


const Seller_Price_Plan = ({ nextPage }) => {
    const { seller } = useSelector((state) => state.user);
    const [errors, setErrors] = useState([]);
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

        // if (response) {
        nextPage();
        // }
    };

    return (
        <div className="page-section pricing wf-section">
        <div className="container">
          <div className="heading-wrapper mb-50">
            <h1 className="headline-2 mb-10">Choose your pricing plan</h1>
          </div>
          <div className="pricing-plan-wrapper">
            <div className="pricing-item">
              <h2 className="pricing-heading">Bonsai</h2>
              <div className="pricing-commision">12% commission fee on<br/>all transactions<br/></div>
              <div className="pricing-listing">€ 0,20 listing fee <br/>per item<br/></div>
              <div className="pricing-items">(max 15 items)<br/></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
            </div>
            <div className="pricing-item selected">
              <h2 className="pricing-heading">Oak</h2>
              <div className="pricing-commision">12% commission fee on<br/>all transactions<br/></div>
              <div className="pricing-listing">€ 29,- per month</div>
              <div className="pricing-items">(Unlimited listings)</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
            </div>
          </div>
          <a href="#" className="button blue mb-60">Continue with Oak</a>
          <div className="div-block-3">
            <div className="headline-5 mr-40">Not sure yet? Try our beta version</div>
            <a href="#" className="button orange">Try Beta Version</a>
          </div>
        </div>
      </div>
    );
};

export default Seller_Price_Plan;