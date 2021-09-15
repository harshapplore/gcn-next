import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Seller_Payouts from "./Seller_Payouts";

import ProgressBar from "./Utils/ProgressBar";
import { authAxios } from "@/setups/axios";
import Message from "@/shared/Message";




const Seller_Price_Billing = ({ nextPage }) => {
  const { seller } = useSelector((state) => state.user);
  const [errors, setErrors] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [VAT, setVAT] = useState("");

  useEffect(() => {
    if (seller.shop) 
    {
      setCompanyName(seller.shop.companyName)
      setStreetAddress(seller.shop.streetAddress)
      setPostalCode(seller.shop.postalCode)
      setCity(seller.shop.city)
      setVAT(seller.shop.vat)
     
    }
  }, [seller]);

  const checkBoxStyle = { opacity: 0, position: "absolute", zIndex: -1 }

  console.log(seller)

  const validate = () => {
    const err = [];

    !companyName ? err.push(`please enter the organization name`) : ""
    !streetAddress  ? err.push(`please enter the street`) : ""
    !postalCode  ? err.push(`please enter the postal code`) : ""
    !city  ? err.push(`please enter the city`) : ""
    !VAT  ? err.push(`please enter VAT`) : ""
    setErrors(err);

    if (err.length) return false;

    return true;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const data = {
      companyName,
      streetAddress,
      postalCode,
      city,
      vat: VAT,
    }


    const response = await authAxios()({
      url: `shops/`,
      method: "POST",
      data
    })
     
    
    if (response.data) {

      const sellerRes = await authAxios()({
        url: `sellers/${seller.id}`,
        method: "PUT",
        data: {
            // onboardStatus: 1,
            shop:response.data.id,
        }
      });
      nextPage();
    }

  };

  return (
    <div className="page-section wf-section">
      <div className="container">
        <div className="heading-wrapper">
          <h1 className="headline-2 mb-50">Billing Settings</h1>
          <div className="settings-block">
            <div className="w-form">
              <form id="wf-form-Plan-Billing" className="wf-form-Plan-Billing" data-name="Plan Billing">
                <h2 className="headline-5 mb-30">Your billing details</h2>
                <input
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                  type="text"
                  className="input-x mb-15 w-input"
                  maxLength="256"
                  placeholder="Name or Company Name *"
                  required=""
                />
                <div className="account-form-1">
                  <input
                    onChange={(e) => setStreetAddress(e.target.value)}
                    value={streetAddress}
                    type="tel"
                    className="input-x w-input"
                    maxLength="256"
                    placeholder="Street Name *"
                    id="Street-Name" required=""
                  />
                  <input
                    onChange={(e) => setPostalCode(e.target.value)}
                    value={postalCode}
                    type="number"
                    className="input-x w-input"
                    maxLength="256"
                    placeholder="Postal Code *"
                    required=""
                  />
                  <input
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    type="text"
                    className="input-x w-input"
                    maxLength="256"
                    placeholder="City *"
                    required="" />
                  <input
                    onChange={(e) => setVAT(e.target.value)}
                    value={VAT}
                    type="number"
                    className="input-x w-input"
                    maxLength="256"
                    placeholder="VAT *"
                    required=""
                  />
                </div>
                <div className="settings-spacer"></div>
                {errors && errors.length > 0 && errors.map(error =>
                  <Message text={error} status={-1} />)
                }
                <div className="button blue" style={{ marginTop: "20px" }} onClick={submit}> Save & Continue </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller_Price_Billing;