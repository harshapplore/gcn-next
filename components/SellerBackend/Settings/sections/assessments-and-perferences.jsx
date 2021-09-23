import router from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { authAxios } from "@/setups/axios";



const AssessmentsAndPrefernces = () => {
  const { seller } = useSelector((state) => state.user);


  const [currency, setCurrency] = useState("");
  const [language, setLanguage] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (seller.shop) {
      setCurrency(seller.shop.currency)
      setLanguage(seller.shop.language)
      setRegion(seller.shop.region)
    }
  }, [seller]);

  const submit =async (e)=>{
    e.preventDefault()
    setLoading(true)
    const data = {
      language,
      currency,
      region,
    }
  
    const res = await authAxios()({
      url: `/shops/${seller.shop.id} `,
      method: "PUT",
      data: data
    });
    setLoading(false)
  }

  const editAssessment = ()=>{
    if(seller.id){
      router.push("/seller-onboarding/vision-strategy")
    }
  }
  return (
    <>
      <div className="settings-block">
        <h3 className="headline-5 mb-30">My Assessments</h3>
        <div className="assessments">
          <div>
            <div className="mb-20">
              <div className="label">Vision and Strategy</div>
              <div>Completed</div>
            </div>
            <div>
              <div className="label">Social</div>
              <div>completed</div>
            </div>
          </div>
          <div>
            <div className="mb-20">
              <div className="label">Integrity</div>
              <div>completed</div>
            </div>
            <div>
              <div className="label">Environmental</div>
              <div>Completed</div>
            </div>
          </div>
          <a
            id="w-node-_200fd36d-f212-984d-feda-cfdbf1cccd27-0db831b0"
            className="button icon blue w-inline-block"
            style={{height:"50px"}}
          >
            <div className="button-icon w-embed">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <g fill="currentcolor" fillRule="evenodd">
                  <path d="M 0,0 H 24 V 24 H 0 Z" fill="none" />
                  <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
                </g>
              </svg>
            </div>
            <div onClick = {editAssessment}>Edit Assessments</div>
          </a>
        </div>
      </div>
      <div className="settings-block">
        <h3 className="headline-5 mb-30">Preferences</h3>
        <div className="w-form">
          <form
            id="wf-form-Change-Contact-Information"
            name="wf-form-Change-Contact-Information"
            data-name="Change Contact Information"
          >
            <div className="account-form-1">
              <select
                name="Language"
                data-name="Language"
                id="Language"
                required
                onChange={(e) => setLanguage(e.target.value)}
                className="input-x input-x--select w-select"
              >
                <option value={language}>{ language ? language : "Select a Language"}</option>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
              </select>
              <select
                name="Currency"
                data-name="Currency"
                id="Currency-9"
                onChange={(e) => setCurrency(e.target.value)}
                required
                className="input-x input-x--select w-select"
              >
                <option value={currency}>{currency ? currency : "Select a Currency" }</option>
                <option value="EUR">€ (EUR)</option>
                <option value="USD">$ (USD)</option>
              </select>
              <select
                name="Region"
                data-name="Region"
                id="Region"
                required
                onChange={(e) => setRegion(e.target.value)}
                className="input-x input-x--select w-select"
              >
                <option value={region}>{region ? region : "Select a Region"}</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
              </select>
            </div>
            <div className= "flex">
            <a onClick = {submit} className="button blue mr-10">Save Changes </a>
            {loading && 
              <Loader type="Oval" color="#1a689e" height={18} width={18} />
          }</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AssessmentsAndPrefernces;
