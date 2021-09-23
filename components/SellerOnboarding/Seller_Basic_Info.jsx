import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { scrollToElement,divReload } from "@/utils/scroll";

import ProgressBar from "./Utils/ProgressBar";
import { uploadFiles } from "_controllers/product";

import { authAxios } from "@/setups/axios";

import Message from "@/shared/Message";

import { isEmail, isPhone } from "@/utils/validators";

const data = {
  heading: "Hello Thomas, let's get started!",
  subheading: "Seller Questionnaire",

  p1: `This self-check questionnaire is a simplified model of the most robust and used sustainability assessment methods available in the market. Its purpose is to support SMEs to evaluate their status quo regarding sustainability and to insert environmental, social, and governance (ESG) aspects into their business strategies.`,
  p2: `Primarily, we will use this questionnaire as a preliminary evaluation of your company’s performance on business sustainability and ESG. By completing the questionnaire, we will be able to grasp how well your company is managing sustainability in the overall value chain - a key factor htmlFor the inclusion of your business in the Green Cloud Nine platform. Also, if applicable, it may serve as the ground htmlFor further improvements.`,
  initials: ["Mr.", "Mrs.", "Ms.", "Miss"],
};

const Seller_Basic_Info = ({ nextPage }) => {
  const { seller, user } = useSelector((state) => state.user);
  const [sellerName, setSellerName] = useState("")
  const [initials, setInitials] = useState("");
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [rawMaterialDetails, setRawMaterialDetails] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [certificate, setCertificate] = useState("");
  const [certificateOne, setCertificateOne] = useState("");
  const [certificateTwo, setCertificateTwo] = useState("");
  const [certificateOneName, setCertificateOneName] = useState("");
  const [certificateTwoName, setCertificateTwoName] = useState("");
  const [addCertificates, setAddCertificate] = useState(false);

  const [semiFinishedGoods, setSemiFinishedGoods] = useState("");
  const [finishedGoods, setFinishedGoods] = useState("");
  const [distributor, setDistributor] = useState("");
  const [retailer, setRetailer] = useState("");
  const [serviceProvider, setServiceProvider] = useState("");
  const [moreThanOneBussiness, setMoreThanOneBussiness] = useState("");

  const imgStyle = { display: "flex", justifyContent: "space-between" }

  const [errors, setErrors] = useState([]);
  const [topError, setTopErrors] = useState("");

  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    if (seller.basicInformationAnswers) {
      setInitials(seller.basicInformationAnswers.initials);
      setName(seller.basicInformationAnswers.name);
      setJobTitle(seller.basicInformationAnswers.jobTitle);
      setOrganizationName(seller.basicInformationAnswers.organizationName);
      setEmail(seller.basicInformationAnswers.email);
      setMobile(seller.basicInformationAnswers.mobile);
      setProductInfo(seller.basicInformationAnswers.productInfo);
      setRawMaterialDetails(seller.basicInformationAnswers.rawMaterialDetails);
      setCompanySize(seller.basicInformationAnswers.companySize);
      setCertificate(seller.basicInformationAnswers.certificate);
      setSemiFinishedGoods(seller.basicInformationAnswers.semiFinishedGoods)
      setFinishedGoods(seller.basicInformationAnswers.finishedGoods)
      setDistributor(seller.basicInformationAnswers.distributor)
      setRetailer(seller.basicInformationAnswers.retailer)
      setServiceProvider(seller.basicInformationAnswers.serviceProvider)
      setMoreThanOneBussiness(seller.basicInformationAnswers.moreThanOneBussiness)
      if (seller.basicInformationAnswers.certificates[0])
        setCertificateOneName(seller.basicInformationAnswers.certificates[0].name)
      // if (seller.basicInformationAnswers.certificates[0])
      //   setCertificateOne(seller.basicInformationAnswers.certificates[0])
      // if (seller.basicInformationAnswers.certificates[1])
      //   setCertificateTwo(seller.basicInformationAnswers.certificates[1])
      if (seller.basicInformationAnswers.certificates[1])
        setCertificateTwoName(seller.basicInformationAnswers.certificates[1].name)
    }
    if (seller.user)
      setSellerName(seller.user.name)
  }, [seller]);

  const validate = () => {
    const err = [];

    !jobTitle ? err.push(`Please Enter the Job Title`) : "";
    !organizationName ? err.push(`Please Enter the Organization Name`) : "";

    !mobile && !isPhone(mobile)
      ? err.push(`Please enter a valid Phone number`)
      : "";
    !productInfo ? err.push(`Please enter the product information`) : "";
    !companySize ? err.push(`Please enter the company size`) : "";
    !certificate ? err.push(`Please select the option`) : "";
    certificate === "yes" && !certificateOneName
      ? err.push(`Please select the certificate`)
      : "";
    addCertificates && !certificateTwoName
      ? err.push(`Please select the certificate`)
      : "";

    !initials ? err.push(`The credential "initial"  is missing.`) : "";

    setErrors(err);

    if (err.length) return false;

    return true;
  };
  const arr = [];
  certificateOne && arr.push(certificateOne);
  certificateTwo && arr.push(certificateTwo);
  const submit = async (e) => {
    e.preventDefault();

    console.log(errors);
    if (!validate()) {
      setTopErrors("Please fill all the values")
      scrollToElement("#environment")
      return;
    }
    const certs = arr.length > 0 ? await uploadFiles(arr) : [];

    const sellerData = {
      initials,
      name,
      jobTitle,
      organizationName,
      email,
      mobile,
      productInfo,
      rawMaterialDetails,
      semiFinishedGoods,
      finishedGoods,
      distributor,
      retailer,
      serviceProvider,
      moreThanOneBussiness,
      companySize,
      certificate,
      // certificateName,
      certificates: certs.length > 0 ? certs : [],
    };

    const response = await authAxios()({
      url: `sellers/${seller.id}`,
      method: "PUT",
      data: {
        basicInformationAnswers: sellerData,
      },
    });
    console.log(response);
    if (response) {
      nextPage();
    }
  };

  const addCertificate = () => {
    setAddCertificate(true);
  };
  return (
    <div className="page-section wf-section">
      <div className="container">
        <div className="heading-wrapper">
          <br />
          <br />
          <h1 className="headline-2 mb-10">Hello {sellerName} , let's get started! </h1>
          <div className="overline-text mb-40">{data.subheading}</div>

          <h3 className="headline-5 mb-50">Please fill out the entire form in one session, since progress will be lost otherwise.</h3>

          <div className=" mb-40  w-richtext">
            <p>{data.p1}</p>
            <p>{data.p2}</p>
          </div>
          <ProgressBar />
          <div className="settings-block" id="basicInfo">
            <h3 className="headline-5 mb-50">Basic Information</h3>
            <div className="w-form">
              <form encType="multipart/form-data">
                {topError && <Message text={topError} status={-1} />}
                {topError && <br />}
                <ol role="list" className="assessment-list assessment-list--1">
                  <li>
                    <div className="subtitle-2">Contact information</div>
                    <div className="assessment-list-content">
                      <div className="assessment-spacer"></div>
                      <div className="assessment-radios">
                        <label className="checkbox-field mb-0 w-clearfix w-radio">
                          <div
                            className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${initials === "Mr." ? " w--redirected-checked" : ""
                              }`}
                          ></div>
                          <input
                            type="checkbox"
                            onChange={() => setInitials("Mr.")}
                            className=""
                            value={initials}
                            checked={initials === "Mr."}
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span className="checkbox-label w-form-label">
                            Mr.
                          </span>
                        </label>
                        <label className="checkbox-field mb-0 w-clearfix w-radio">
                          <div
                            className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${initials === "Mrs."
                              ? " w--redirected-checked"
                              : ""
                              }`}
                          ></div>
                          <input
                            type="checkbox"
                            onChange={() => setInitials("Mrs.")}
                            value={initials}
                            checked={initials === "Mrs."}
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span className="checkbox-label w-form-label">
                            Mrs.
                          </span>
                        </label>
                        <label className="checkbox-field mb-0 w-clearfix w-radio">
                          <div
                            className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${initials === "Ms." ? " w--redirected-checked" : ""
                              }`}
                          ></div>
                          <input
                            type="checkbox"
                            onChange={() => setInitials("Ms.")}
                            value={initials}
                            checked={initials === "Ms."}
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span className="checkbox-label w-form-label">
                            Ms.
                          </span>
                        </label>
                        <label className="checkbox-field mb-0 w-clearfix w-radio">
                          <div
                            className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${initials === "Miss"
                              ? " w--redirected-checked"
                              : ""
                              }`}
                          ></div>
                          <input
                            type="checkbox"
                            onChange={() => setInitials("Miss")}
                            value={initials}
                            checked={initials === "Miss"}
                          />
                          <span className="checkbox-label w-form-label">
                            Miss
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="account-form-1 mb-10">
                      <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={user.name}
                        disabled
                        className="input-x w-input"
                        maxLength="256"
                        name="Full-Name-5"
                        data-name="Full Name 5"
                        placeholder="Full Name *"
                        id="Full-Name-5"
                        required=""
                      />
                      <input
                        type="text"
                        onChange={(e) => setJobTitle(e.target.value)}
                        value={jobTitle}
                        className="input-x w-input"
                        maxLength="256"
                        name="Job-Title-2"
                        data-name="Job Title 2"
                        placeholder="Job Title *"
                        id="Job-Title-2"
                      />
                      <input
                        type="text"
                        onChange={(e) => setOrganizationName(e.target.value)}
                        value={organizationName}
                        className="input-x w-input"
                        maxLength="256"
                        name="Organisation-Name-3"
                        data-name="Organisation Name 3"
                        placeholder="Organisation Name *"
                        id="Organisation-Name-3"
                        required=""
                      />
                      <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={user.email}
                        disabled
                        className="input-x w-input"
                        maxLength="256"
                        name="E-Mail-Adress-2"
                        data-name="E Mail Adress 2"
                        placeholder="E-Mail Adress *"
                        id="E-Mail-Adress-2"
                        required=""
                      />
                      <input
                        type="text"
                        onChange={(e) => setMobile(e.target.value)}
                        value={mobile}
                        className="input-x w-input"
                        maxLength="256"
                        name="Phone-Number-3"
                        data-name="Phone Number 3"
                        placeholder="Phone Number *"
                        id="Phone-Number-3"
                        required=""
                      />
                    </div>
                  </li>
                  <li>
                    <div className="subtitle-2">
                      Please determine which business section your company
                      belongs to and specify the activity. If your company has
                      multiple businesses, please identify and specify them:
                    </div>
                    <div className="assessment-list-content mb-10">
                      <div className="assessment-spacer"></div>
                      <label className="checkbox-field w-clearfix w-radio">
                        <div
                          className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${productInfo === "Producer of raw materials"
                            ? " w--redirected-checked"
                            : ""
                            }`}
                        ></div>
                        <input
                          type="checkbox"
                          value={productInfo}
                          checked={productInfo === "Producer of raw materials"}
                          onChange={() =>
                            setProductInfo("Producer of raw materials")
                          }
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span className="checkbox-label w-form-label">
                          Producer of raw materials
                        </span>
                      </label>

                      {productInfo === "Producer of raw materials" && (
                        <textarea
                          disabled={productInfo !== "Producer of raw materials"}
                          onChange={(e) =>
                            setRawMaterialDetails(e.target.value)
                          }
                          value={rawMaterialDetails}
                          placeholder="Please specifiy here…"
                          className="input-x input-x--text-area sct w-input"
                        ></textarea>
                      )}
                      <label className="checkbox-field w-clearfix w-radio">
                        <div
                          className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${productInfo ===
                            "Producer of components / semi-finished goods"
                            ? " w--redirected-checked"
                            : ""
                            }`}
                        ></div>
                        <input
                          type="checkbox"
                          value={productInfo}
                          checked={
                            productInfo ===
                            "Producer of components / semi-finished goods"
                          }
                          onChange={() =>
                            setProductInfo(
                              "Producer of components / semi-finished goods"
                            )
                          }
                          data-name="Business Section"
                          id="Producer of components / semi-finished goods-2"
                          name="Business-Section"
                          required=""
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span className="checkbox-label w-form-label">
                          Producer of components / semi-finished goods
                        </span>
                      </label>
                      {productInfo === "Producer of components / semi-finished goods" && (
                        <textarea
                          disabled={productInfo !== "Producer of components / semi-finished goods"}
                          onChange={(e) =>
                            setSemiFinishedGoods(e.target.value)
                          }
                          value={semiFinishedGoods}
                          placeholder="Please specifiy here…"
                          className="input-x input-x--text-area sct w-input"
                        ></textarea>
                      )}
                      <label className="checkbox-field w-clearfix w-radio">
                        <div
                          className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${productInfo === "Producer of finished goods"
                            ? " w--redirected-checked"
                            : ""
                            }`}
                        ></div>
                        <input
                          type="checkbox"
                          value={productInfo}
                          checked={productInfo === "Producer of finished goods"}
                          onChange={() =>
                            setProductInfo("Producer of finished goods")
                          }
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                          s
                        />
                        <span
                          htmlFor="Producer of finished goods-2"
                          className="checkbox-label w-form-label"
                        >
                          Producer of finished goods
                        </span>
                      </label>
                      {productInfo === "Producer of finished goods" && (
                        <textarea
                          disabled={productInfo !== "Producer of finished goods"}
                          onChange={(e) =>
                            setFinishedGoods(e.target.value)
                          }
                          value={finishedGoods}
                          placeholder="Please specifiy here…"
                          className="input-x input-x--text-area sct w-input"
                        ></textarea>
                      )}
                      <label className="checkbox-field w-clearfix w-radio">
                        <div
                          className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${productInfo === "Distributor"
                            ? " w--redirected-checked"
                            : ""
                            }`}
                        ></div>
                        <input
                          type="checkbox"
                          value={productInfo}
                          checked={productInfo === "Distributor"}
                          onChange={() => setProductInfo("Distributor")}
                          data-name="Business Section"
                          id="Distributor-2"
                          name="Business-Section"
                          required=""
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span
                          htmlFor="Distributor-2"
                          className="checkbox-label w-form-label"
                        >
                          Distributor
                        </span>
                      </label>
                      {productInfo === "Distributor" && (
                        <textarea
                          disabled={productInfo !== "Distributor"}
                          onChange={(e) =>
                            setDistributor(e.target.value)
                          }
                          value={distributor}
                          placeholder="Please specifiy here…"
                          className="input-x input-x--text-area sct w-input"
                        ></textarea>
                      )}
                      <label className="checkbox-field w-clearfix w-radio">
                        <div
                          className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${productInfo === "Retailer"
                            ? " w--redirected-checked"
                            : ""
                            }`}
                        ></div>
                        <input
                          type="checkbox"
                          value={productInfo}
                          checked={productInfo === "Retailer"}
                          onChange={() => setProductInfo("Retailer")}
                          data-name="Business Section"
                          id="Retailer-2"
                          name="Business-Section"
                          required=""
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span
                          htmlFor="Retailer-2"
                          className="checkbox-label w-form-label"
                        >
                          Retailer
                        </span>
                      </label>
                      {productInfo === "Retailer" && (
                        <textarea
                          disabled={productInfo !== "Retailer"}
                          onChange={(e) =>
                            setRetailer(e.target.value)
                          }
                          value={retailer}
                          placeholder="Please specifiy here…"
                          className="input-x input-x--text-area sct w-input"
                        ></textarea>
                      )}
                      <label className="checkbox-field w-clearfix w-radio">
                        <div
                          className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${productInfo === "Service provider"
                            ? " w--redirected-checked"
                            : ""
                            }`}
                        ></div>
                        <input
                          type="checkbox"
                          value={productInfo}
                          checked={productInfo === "Service provider"}
                          onChange={() => setProductInfo("Service provider")}
                          data-name="Business Section"
                          id="Service provider-2"
                          name="Business-Section"
                          required=""
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span
                          htmlFor="Service provider-2"
                          className="checkbox-label w-form-label"
                        >
                          Service provider
                        </span>
                      </label>
                      {productInfo === "Service provider" && (
                        <textarea
                          disabled={productInfo !== "Service provider"}
                          onChange={(e) =>
                            setServiceProvider(e.target.value)
                          }
                          value={serviceProvider}
                          placeholder="Please specifiy here…"
                          className="input-x input-x--text-area sct w-input"
                        ></textarea>
                      )}
                      <label className="checkbox-field w-clearfix w-radio">
                        <div
                          className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${productInfo === "More than one business"
                            ? " w--redirected-checked"
                            : ""
                            }`}
                        ></div>
                        <input
                          type="checkbox"
                          value={productInfo}
                          checked={productInfo === "More than one business"}
                          onChange={() =>
                            setProductInfo("More than one business")
                          }
                          data-name="Business Section"
                          id="More than one business-2"
                          name="Business-Section"
                          required=""
                          style={{
                            opacity: 0,
                            position: "absolute",
                            zIndex: -1,
                          }}
                        />
                        <span
                          htmlFor="More than one business-2"
                          className="checkbox-label w-form-label"
                        >
                          More than one business
                        </span>
                      </label>
                      {productInfo === "More than one business" && (
                        <textarea
                          disabled={productInfo !== "More than one business"}
                          onChange={(e) =>
                            setMoreThanOneBussiness(e.target.value)
                          }
                          value={moreThanOneBussiness}
                          placeholder="Please specifiy here…"
                          className="input-x input-x--text-area sct w-input"
                        ></textarea>
                      )}
                    </div>
                  </li>
                  <li>
                    <div className="subtitle-2">Company Size</div>
                    <div className="assessment-list-content">
                      <div className="assessment-spacer"></div>
                      <div className="assessment-radios">
                        <label className="checkbox-field mb-0 w-clearfix w-radio">
                          <div
                            className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${companySize === "Less than 10"
                              ? " w--redirected-checked"
                              : ""
                              }`}
                          ></div>
                          <input
                            type="checkbox"
                            value={companySize}
                            checked={companySize === "Less than 10"}
                            onChange={() => setCompanySize("Less than 10")}
                            data-name="Company Size"
                            id="Less than 10"
                            name="Company-Size"
                            value={companySize}
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            htmlFor="Less than 10"
                            className="checkbox-label w-form-label"
                          >
                            Less than 10 employees
                          </span>
                        </label>
                        <label className="checkbox-field mb-0 w-clearfix w-radio">
                          <div
                            className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${companySize === "10-49 employees"
                              ? " w--redirected-checked"
                              : ""
                              }`}
                          ></div>
                          <input
                            type="checkbox"
                            value={companySize}
                            checked={companySize === "10-49 employees"}
                            onChange={() => setCompanySize("10-49 employees")}
                            data-name="Company Size"
                            id="10"
                            name="Company-Size"
                            value={companySize}
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            htmlFor="node-5"
                            className="checkbox-label w-form-label"
                          >
                            10-49 employees
                          </span>
                        </label>
                        <label className="checkbox-field mb-0 w-clearfix w-radio">
                          <div
                            className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${companySize === "50-249 employees"
                              ? " w--redirected-checked"
                              : ""
                              }`}
                          ></div>
                          <input
                            type="checkbox"
                            value={companySize}
                            checked={companySize === "50-249 employees"}
                            onChange={() => setCompanySize("50-249 employees")}
                            data-name="Company Size"
                            id="50"
                            name="Company-Size"
                            value={companySize}
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            htmlFor="node-5"
                            className="checkbox-label w-form-label"
                          >
                            50-249 employees
                          </span>
                        </label>
                        <label className="checkbox-field mb-0 w-clearfix w-radio">
                          <div
                            className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${companySize === "More than 250 employees"
                              ? " w--redirected-checked"
                              : ""
                              }`}
                          ></div>
                          <input
                            type="checkbox"
                            value={companySize}
                            checked={companySize === "More than 250 employees"}
                            onChange={() =>
                              setCompanySize("More than 250 employees")
                            }
                            data-name="Company Size"
                            id="&gt;-51"
                            name="Company-Size"
                            value={companySize}
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            htmlFor="&gt;-52"
                            className="checkbox-label w-form-label"
                          >
                            More than 250 employees
                          </span>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="subtitle-2">The Company</div>
                    <div className="assessment-list-content">
                      <div className="assessment-spacer"></div>
                      <div className="mb-20">
                        Has any type of quality/environmental/social/integrated
                        management label or certification?
                      </div>
                      <div className="assessment-radios">
                        <label className="checkbox-field mb-0 w-clearfix w-radio">
                          <div
                            className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${certificate === "yes"
                              ? " w--redirected-checked"
                              : ""
                              }`}
                          ></div>
                          <input
                            value={certificate}
                            checked={certificate === "yes"}
                            onChange={() => setCertificate("yes")}
                            type="checkbox"
                            data-name="Label/Certification"
                            id="Yes-4"
                            name="Label-Certification"
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            htmlFor="Yes-4"
                            className="checkbox-label w-form-label"
                          >
                            Yes
                          </span>
                        </label>
                        <label className="checkbox-field mb-0 w-clearfix w-radio">
                          <div
                            className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${certificate === "no"
                              ? " w--redirected-checked"
                              : ""
                              }`}
                          ></div>
                          <input
                            value={certificate}
                            checked={certificate === "no"}
                            onChange={() => setCertificate("no")}
                            type="checkbox"
                            data-name="Label/Certification"
                            id="No-4"
                            name="Label-Certification"
                            required=""
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span
                            htmlFor="No-4"
                            className="checkbox-label w-form-label"
                          >
                            No
                          </span>
                        </label>
                      </div>

                      {certificate === "yes" && (
                        <>
                          <div className="mb-20">
                            <strong>If yes, please upload it here:</strong>
                          </div>
                          <div style={imgStyle} >
                            {certificateOne && <div style={{position:"relative"}}>
                              <img className="mb-20" loading="lazy" width="100%" height="240" src={URL.createObjectURL(certificateOne)} alt="id-front" style={{ borderRadius: "10px" }} />

                              <a className="shop-delete w-inline-block cursor" onClick={() => {
                                setCertificateOneName("")
                                setCertificateOne("")
                                location.reload()
                                // document.getElementById("cert-image").onload(window.location.href + "cert-image" );
                                // divReload("#cert-image")                                
                              }}>
                                <img className="" src="/images/clear-black-24-dp.svg" loading="lazy" alt="Close" />
                              </a>
                            </div>
                            }
                            {/* {certificateTwo && 
                            <div  style={{position:"relative"}}>
                            <img className="mb-20" loading="lazy" width="100%" height="240" src={URL.createObjectURL(certificateTwo)} alt="id-back" style={{ borderRadius: "10px" }} />
                            <a className="shop-delete w-inline-block cursor" onClick={() => {
                                setCertificateTwoName("")
                                setCertificateTwo("")
                              }}>
                                <img className="" src="/images/clear-black-24-dp.svg" loading="lazy" alt="Close" />
                              </a>
                            </div>
                            } */}
                          </div>

                          <div className="account-form-1" id="cert-image">
                            <input
                              type="text"
                              className="input-x w-input"
                              htmlFor="256"
                              value={certificateOneName}
                              name="Name-Certificate"
                              data-name="Name Certificate"
                              onChange={(e) =>
                                setCertificateOneName(
                                  e.target.value
                                )
                              }
                              placeholder="Name Certificate *"
                              id="Name-Certificate-2"
                              required=""
                            />
                            <label htmlFor="certificates" className="button icon blue w-inline-block">
                              <div className="button-icon w-embed">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                >
                                  <g fill="currentcolor" fillRule="evenodd">
                                    <path
                                      d="M 0,0 H 24 V 24 H 0 Z"
                                      fill="none"
                                    ></path>
                                    <path
                                      d="M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"
                                      transform="rotate(-90 12 12)"
                                    ></path>
                                  </g>
                                </svg>
                              </div>

                              <div >
                                Upload Certificate (png., jpg., pdf.)
                              </div>
                            </label>
                            
                          </div>
                          <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={(e) =>
                              setCertificateOne(e.target.files[0])
                            }
                            id="certificates"
                          />
                          {/* <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={(e) =>
                              setCertificateTwo(e.target.files[0])
                            }
                            id="certificatetwo"
                          />
                          {addCertificates && (
                            <div className="account-form-1">
                              <input
                                type="text"
                                className="input-x w-input"
                                htmlFor="256"
                                value={certificateTwoName}
                                name="Name-Certificate"
                                data-name="Name Certificate"
                                onChange={(e) =>
                                  setCertificateTwoName(
                                    e.target.value
                                  )
                                }
                                placeholder="Name Certificate *"
                                id="Name-Certificate-2"
                                required=""
                              />
                              <label htmlFor="certificatetwo" className="button cursor icon blue w-inline-block">
                                <div className="button-icon w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                  >
                                    <g fill="currentcolor" fillRule="evenodd">
                                      <path
                                        d="M 0,0 H 24 V 24 H 0 Z"
                                        fill="none"
                                      ></path>
                                      <path
                                        d="M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"
                                        transform="rotate(-90 12 12)"
                                      ></path>
                                    </g>
                                  </svg>
                                </div>

                                <div className="cursor">
                                  Upload Certificate (png., jpg., pdf.)
                                </div>
                              </label>
                              <a className="shop-delete w-inline-block cursor" onClick={() => {
                                setCertificateTwoName("")
                                setCertificateTwo("")
                              }}>
                                <img src="/images/clear-black-24-dp.svg" loading="lazy" alt="Close" />
                              </a>
                            </div>
                          )}
                          <label
                            className="add-element"
                            htmlFor="certificatetwo"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src="../images/add-black-24-dp.svg"
                              loading="lazy"
                              width="24"
                              height="24"
                              alt="Add"
                              className="shop-product-list-add-icon"
                            />
                            <div
                              className="delivery-country-text"
                              onClick={addCertificate}
                            >
                              Add Certificate
                            </div>
                          </label> */}
                        </>
                      )}
                    </div>
                  </li>
                </ol>
                {errors &&
                  errors.length > 0 &&
                  errors.map((error) => <Message text={error} status={-1} />)}
                <div
                  className="button blue"
                  style={{ marginTop: "20px" }}
                  onClick={submit}
                >
                  Continue
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller_Basic_Info;
