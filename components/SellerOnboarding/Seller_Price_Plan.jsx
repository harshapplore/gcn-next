import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ProgressBar from "./Utils/ProgressBar";
import { authAxios } from "@/setups/axios";


const Seller_Price_Plan = ({ nextPage }) => {
    const { seller } = useSelector((state) => state.user);
    const [errors, setErrors] = useState([]);
    const [plan, setPlan] = useState("bonsai");
    const [planType,setPlanType] = useState("")

    const validate = () => {
        const err = [];


        setErrors(err);

        if (err.length) return false;

        return true;
    };
    console.log(seller)

    const submit = async (e) => {
        e.preventDefault();
  
        
        const response = await authAxios()({
          url: `sellers/${seller.id}`,
          method: "PUT",
          data: {
              planType: "beta",
          },
      });
      console.log(response)
      if(response)
      nextPage();
    
    };
    // const submit = async (e) => {
    //     e.preventDefault();
        
    //     plan === "bonsai" && setPlanType("bonsai") 
    //     plan === "oak" && setPlanType("oak")
    //     if (!validate()) return;
    //     if(planType !== ""){
    //     const response = await authAxios()({
    //       url: `sellers/${seller.id}`,
    //       method: "PUT",
    //       data: {
    //           planType,
    //       },
    //   });
    //   console.log(response)
    //   if(response)
    //   nextPage();
    // }
    // };
    

    return (
        <div className="page-section pricing wf-section">
        <div className="container">
          <div className="heading-wrapper mb-50">
            <h1 className="headline-2 mb-10">Choose your pricing plan</h1>
          </div>
          <div className="plan-blur pricing-plan-wrapper">
          
            <div className={`pricing-item ${plan==="bonsai" ? "selected" : ""}`}>
              <h2 className="pricing-heading" onClick={()=> setPlan("bonsai")}>Bonsai</h2>
              <div className="pricing-commision">12% commission fee on<br/>all transactions<br/></div>
              <div className="pricing-listing">€ 0,20 listing fee <br/>per item<br/></div>
              <div className="pricing-items">(max 15 items)<br/></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
            </div>
            <div className={`pricing-item ${plan==="oak" ? "selected" : ""}`}>
              <h2 className="pricing-heading" onClick={()=> setPlan("oak") }>Oak</h2>
              <div className="pricing-commision">12% commission fee on<br/>all transactions<br/></div>
              <div className="pricing-listing">€ 29,- per month</div>
              <div className="pricing-items">(Unlimited listings)</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
            </div>
          </div>
          <div style={{marginRight:"40px"}} className=" plan-blur button blue mr-40  mb-60" onClick={submit}>Continue </div>                            
                                      
          <div className="div-block-3">
            <div className="headline-5 mr-40">We are launching soon! Thank you for taking part in our beta test!</div>
            <div onClick={submit}  className="button orange">Try Beta Version</div>
          </div>
        </div>
      </div>
    );
};

export default Seller_Price_Plan;