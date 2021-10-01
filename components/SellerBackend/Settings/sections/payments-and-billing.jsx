import { authAxios } from "@/setups/axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { uploadFiles } from "_controllers/product"
import Message from "@/shared/Message";




const Payments = () => {
  const { seller } = useSelector((state) => state.user);
  console.log(seller)
  const [IBAN, setIBAN] = useState(seller ? seller.iban :"");
  const [idFront, setIdFront] = useState(seller ? seller.identityFrontView && seller.identityFrontView.formats.small.url : "");
  const [idBack, setIdBack] = useState(seller ? seller.identityBackView && seller.identityBackView.formats.small.url : "");
  const [addressFront, setAddressFront] = useState(seller ? seller.proofOfAddressFrontView && seller.proofOfAddressFrontView.formats.small.url : "");
  const [addressBack, setAddressBack] = useState(seller ? seller.proofOfAddressBackView && seller.proofOfAddressBackView.formats.small.url : "");
  const [companyName, setCompanyName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [VAT, setVAT] = useState("");
  const [errors, setErrors] = useState([]);
  const [updateMessage, setUpdateMessage] = useState([]);

  useEffect(() => {
    if (seller) 
    {
      // setIBAN(seller.iban)
      // setIdFront(seller.identityFrontView.)
      // setIdBack(seller.identityBackView)
      // setAddressFront(seller.proofOfAddressFrontView)
      // setAddressBack(seller.proofOfAddressBackView)

      if (seller.shop) {
        setCompanyName(seller.shop.companyName)
        setStreetAddress(seller.shop.streetAddress)
        setPostalCode(seller.shop.postalCode)
        setCity(seller.shop.city)
        setVAT(seller.shop.vat)
      }
    }

  }, [seller]);

  const validate = () => {
    const err = [];

    !companyName ? err.push(`please enter the organization name`) : ""
    !streetAddress ? err.push(`please enter the street`) : ""
    !postalCode ? err.push(`please enter the postal code`) : ""
    !city ? err.push(`please enter the city`) : ""
    !VAT ? err.push(`please enter VAT`) : ""
    !IBAN.length === 22 ? err.push(`please enter valid IBAN No.`) : ""
    setErrors(err);

    if (err.length) return false;

    return true;
  };


  const identityFrontView = []
  idFront && identityFrontView.push(idFront)
  const identityBackView = []
  const proofOfAddressFrontView = []
  const proofOfAddressBackView = []

  idBack && identityBackView.push(idBack)
  addressFront && proofOfAddressFrontView.push(addressFront)
  addressBack && proofOfAddressBackView.push(addressBack)
  const imgStyle = { display: "flex", justifyContent: "space-between" }

  const submit = async (e) => {

    e.preventDefault();

    if (!validate()) return;

    const idf = typeof(idFront) !== "string"  && identityFrontView ? await uploadFiles(identityFrontView) : []
    const idb = typeof(idBack) !== "string"  && identityBackView ? await uploadFiles(identityBackView) : []
    const af = typeof(addressFront) !== "string"  && proofOfAddressFrontView ? await uploadFiles(proofOfAddressFrontView) : []
    const ab = typeof(addressBack) !== "string"  && proofOfAddressBackView ? await uploadFiles(proofOfAddressBackView) : []

    const ibankData = {
      iban: IBAN,
      identityFrontView: idf,
      identityBackView: idb,
      proofOfAddressFrontView: af,
      proofOfAddressBackView: ab
    }
    const sellerResponse = await authAxios()({
      url: `sellers/${seller.id}`,
      method: "PUT",
      data: ibankData,
    });
    console.log("updated")
    setUpdateMessage("updated successfully")
  }

  return (
    <>
      <div className="settings-block">
        <h3 className="headline-5 mb-20">How you will get paid</h3>
        <div className="subtitle-2">How you will get paid</div>
        <div className="product-add-block">
          <p className="mb-20"> IBAN </p>
          <div className="mb-40 flex left-2">
            <input
              onChange={(e) => setIBAN(e.target.value)}
              value={IBAN}
              type="text"
              className="input-x w-input"
              maxLength="256"
              placeholder="IBAN *"
              required="" />
            <div />
          </div>

          <input type="file" onChange={(e) => setIdFront(e.target.files[0])} style={{ display: "none" }} id="id-frontview" />
          <input type="file" onChange={(e) => setIdBack(e.target.files[0])} style={{ display: "none" }} id="id-backview" />
          <input type="file" onChange={(e) => setAddressFront(e.target.files[0])} style={{ display: "none" }} id="address-frontview" />
          <input type="file" style={{ display: "none" }} onChange={(e) => setAddressBack(e.target.files[0])} id="address-backview" />

          <p className="mb-20"> Identity Documents</p>

          <div className="order-card-content" >
            {idFront && <img className="mb-20" loading="lazy" width="220" height="240" src={typeof(idFront) === "string" ? idFront : URL.createObjectURL(idFront)} alt="id-front" style={{ borderRadius: "10px" }} />}
            {idBack && <img className="mb-20" loading="lazy" width="220" height="240" src={typeof(idBack) === "string" ? idBack : URL.createObjectURL(idBack)} alt="id-back" style={{ borderRadius: "10px" }} />}
          </div>
          <div className="order-card-content" >

            <label className="button" htmlFor="id-frontview" >Upload Front View</label  >

            <label className="button" htmlFor="id-backview" >Upload Back View</label  >
          </div>

          <div className="spacer-40" />
          <p className="mb-20"> Proof Of Address Documents</p>
          <div  className="order-card-content" >
            {addressFront && <img className="mb-20" loading="lazy" width="220" height="240" src={typeof(addressFront) === "string" ? addressFront : URL.createObjectURL(addressFront)} style={{ borderRadius: "10px" }} alt="address - front" />}
            {addressBack && <img className="mb-20" loading="lazy" width="220" height="240" src={typeof(addressBack) === "string" ? addressBack : URL.createObjectURL(addressBack)} style={{ borderRadius: "10px" }} alt="address-back" />}
          </div>

          <div className="order-card-content">
            <label className="button" htmlFor="address-frontview" >Upload Front View</label  >
            <label className="button" htmlFor="address-backview" >Upload Back View</label  >
          </div>
        </div>
      </div>
      <div className="settings-block">
        <h3 className="headline-5 mb-30">Plan and Billing</h3>
        <div className="business-plan">
          <div>
            <h4 className="subtitle-1 subtitle-1--blue mb-20">Business Plan</h4>
            <div>
              <div className="label">Current Business Plan</div>
              <div>Bonsai</div>
            </div>
          </div>
          <div className="plan-details w-richtext">
            <p>
              <strong>Details</strong>
            </p>
            <ul role="list">
              <li>12% commission fee on all transactions</li>
              <li>€ 0,20 listing fee per item</li>
              <li>max. 15 items</li>
            </ul>
          </div>
          <a
            id="w-node-f58e9903-c090-0e6b-e66d-899582061220-0db831b0"
            className="button blue"
            style={{height:"50px"}}
          >
            Change my plan
          </a>
        </div>
        <div className="settings-spacer" />
        <h4 className="subtitle-1 subtitle-1--blue mb-20">Billing Details</h4>
        <div className="billing-details">
          <div>
            <div className="mb-20">
              <div className="label">Last Invoice</div>
              <div>01.01.2021</div>
            </div>
            <div>
              <div className="label">Next Invoice</div>
              <div>01.02.2021</div>
            </div>
          </div>
        </div>
        <div className="account-form-1">

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
        </div>
        <div className="settings-spacer" />
        <h4 className="subtitle-1 subtitle-1--blue mb-20">Invoices</h4>
        <div className="invoice-headline">
          <div className="label">Date</div>
          <div className="label">Plan</div>
          <div className="label">Comission Fee</div>
          <div className="label">Subscription</div>
          <div
            id="w-node-f58e9903-c090-0e6b-e66d-899582061264-0db831b0"
            className="label"
          >
            Download
          </div>
        </div>
        <div className="invoice-spacer" />
        <div>
          <div className="invoice">
            <div>01.01.2021</div>
            <div>Bonsai</div>
            <div>70 EUR</div>
            <div>70 EUR</div>
            <a
              id="w-node-f58e9903-c090-0e6b-e66d-899582061271-0db831b0"
              className="invoice-download w-inline-block"
            >
              <div className="icon-24 w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                  <g transform="rotate(-90,12,12)" fill="currentcolor">
                    <path d="M 0,0 H 24 V 24 H 0 Z" fill="none" />
                    <path d="M 13,8 14.41,9.41 12.83,11 H 21 v 2 H 12.83 L 14.41,14.58 13,16 9,12 Z" />
                    <path d="m 5,5 h 7 V 3 H 5 C 3.9,3 3,3.9 3,5 v 14 c 0,1.1 0.9,2 2,2 h 7 V 19 H 5 Z" />
                  </g>
                </svg>
              </div>
            </a>
          </div>
          <div className="invoice">
            <div>01.02.2021</div>
            <div>Bonsai</div>
            <div>70 EUR</div>
            <div>70 EUR</div>
            <a
              id="w-node-f58e9903-c090-0e6b-e66d-89958206127c-0db831b0"
              className="invoice-download w-inline-block"
            >
              <div className="icon-24 w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                  <g transform="rotate(-90,12,12)" fill="currentcolor">
                    <path d="M 0,0 H 24 V 24 H 0 Z" fill="none" />
                    <path d="M 13,8 14.41,9.41 12.83,11 H 21 v 2 H 12.83 L 14.41,14.58 13,16 9,12 Z" />
                    <path d="m 5,5 h 7 V 3 H 5 C 3.9,3 3,3.9 3,5 v 14 c 0,1.1 0.9,2 2,2 h 7 V 19 H 5 Z" />
                  </g>
                </svg>
              </div>
            </a>
          </div>
          <div className="invoice">
            <div>01.03.2021</div>
            <div>Bonsai</div>
            <div>70 EUR</div>
            <div>70 EUR</div>
            <a
              id="w-node-f58e9903-c090-0e6b-e66d-899582061287-0db831b0"
              className="invoice-download w-inline-block"
            >
              <div className="icon-24 w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                  <g transform="rotate(-90,12,12)" fill="currentcolor">
                    <path d="M 0,0 H 24 V 24 H 0 Z" fill="none" />
                    <path d="M 13,8 14.41,9.41 12.83,11 H 21 v 2 H 12.83 L 14.41,14.58 13,16 9,12 Z" />
                    <path d="m 5,5 h 7 V 3 H 5 C 3.9,3 3,3.9 3,5 v 14 c 0,1.1 0.9,2 2,2 h 7 V 19 H 5 Z" />
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="invoice-button-wrapper">
          <a className="button blue">See more</a>
        </div>
        <div className="settings-spacer" />
        {errors && errors.length > 0 && errors.map(error =>
          <Message text={error} status={-1} />)
        }

        <div className="payment-button-wrapper">
          <div onClick={submit} className="button blue mr-10">Save Changes</div>
        </div>
      </div>
    </>
  );
};

export default Payments;
