import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ProgressBar from "./Utils/ProgressBar";
import { scrollToElement } from "@/utils/scroll";

import { authAxios } from "@/setups/axios";

import Message from "@/shared/Message";


const data = {
  heading: "Hello Thomas, let's get started!",
  subheading: "Seller Questionnaire",
  q1: `Why should the company define its mission, vision and values statement?`,
  q2: `What are the benefits of developing strategic planning?`,
  q3: `Why analyze business risks?`,

  p1: `This statement aims to define the company's strategic direction in all its activities.`,
  p11: `MISSION: It is the purpose of the company to exist, its reason htmlFor being.`,
  p12: `VISION: It is the situation that the company wants to reach within a certain period.`,
  p13: `VALUES: These are the attitudes and behaviors expected by the company in its relations with employees, suppliers, customers and business partners.`,

  p2: `By establishing a strategic plan, your company will be more focused on its goals and will be able to assess its results more effectively. Strategic planning is a tool that helps in decision-making and, if absorbed by employees, can favor a culture of greater collaboration between teams.`,

  p3: `In order to include sustainability aspects in the objectives and goals of the strategic planning, we cite some examples: structuring or improving your integrity plan; know and establish a better relationship with their customers or suppliers; expand the diversity of the internal audience; and reduce impacts from the use of natural resources.`,

  p4: `The business environment often presents potential or unexpected risks that can interfere with their success. Risks are uncertain events or conditions that, if they occur, will have a positive or negative effect on the outcome of what was planned. Dealing with and managing risks is a good way to increase your chances of success. When analyzing risks, always consider the economic-financial, social, environmental, and ethical dimensions of the events.`,

};

const Seller_Vision_Strategy = ({ nextPage }) => {
  const { seller } = useSelector((state) => state.user);
  const [SMV, setSMV] = useState("");
  const [strategicPlan, setStrategicPlan] = useState("")
  const [isPeriodicallyRevised, setIsPeriodicallyRevised] = useState("")
  const [objectivesAndGoals, setObjectivesAndGoals] = useState("")
  const [objectivesAndGoalsSustainabilty, setobjectivesAndGoalsSustainabilty] = useState("")
  const [companyBrief, setCompanyBrief] = useState("")
  const [sellerName, setSellerName] = useState("")
  const [topError, setTopErrors] = useState("");



  console.log(seller)
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    if (seller.visionAndStrategyAnswers) 
    {
      setSMV(seller.visionAndStrategyAnswers.SMV);
      setIsPeriodicallyRevised(seller.visionAndStrategyAnswers.isPeriodicallyRevised);
      setCompanyBrief(seller.visionAndStrategyAnswers.companyBrief);
      setStrategicPlan(seller.visionAndStrategyAnswers.strategicPlan);
      setObjectivesAndGoals(seller.visionAndStrategyAnswers.objectivesAndGoals);
      setobjectivesAndGoalsSustainabilty(seller.visionAndStrategyAnswers.objectivesAndGoalsSustainabilty);
    }
    if(seller.user)
    setSellerName(seller.user.name)
  }, [seller]);



  const validate = () => {
    const err = [];

    !SMV ? err.push(`Please select strategy, mission & vision`) : "";
    !strategicPlan  ? err.push(`Please select the strategic plan`) : "";
    strategicPlan === "yes" && !isPeriodicallyRevised ? err.push(`Please select 'periodically revised'`) : "";
    isPeriodicallyRevised === "yes" && !objectivesAndGoals ? err.push(`Please select objectives and goals`) : "";
    objectivesAndGoals === "yes" && !objectivesAndGoalsSustainabilty ? err.push(`Please select the aspects of sustainability`) : "";

    setErrors(err);

    if (err.length) return false;

    return true;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setTopErrors("Please fill all the values")
      scrollToElement("#vision")
      return;
    } 


    const data = {
      SMV,
      strategicPlan,
      isPeriodicallyRevised,
      objectivesAndGoals,
      objectivesAndGoalsSustainabilty,
      companyBrief
    }
    const response = await authAxios()({
      url: `sellers/${seller.id}`,
      method: "PUT",
      data: {
        // onboardStatus: 1,
        visionAndStrategyAnswers: data,
      },
    });

    if (response.data.visionAndStrategyAnswers) {
      nextPage();
    }
  };

  return (
    <div className="page-section wf-section">
      <div className="container">
        <div className="heading-wrapper">
          <br />
          <br />
          {/* <br /> */}
          <h1 className="headline-2 mb-10"> Hello {sellerName} , let's get started! </h1>
          <div className="overline-text mb-40">{data.subheading}</div>

          <div className=" mb-40  w-richtext">
            <p><strong>{data.q1}</strong></p>
            <p>{data.p1}</p>
            <p>{data.p11}</p>
            <p>{data.p12}</p>
            <p>{data.p13}</p>
            <p><strong>{data.q2}</strong></p>
            <p>{data.p2}</p>
            <p>{data.p3}</p>
            <p><strong>{data.q3}</strong></p>
            <p>{data.p4}</p>
          </div>
          <ProgressBar />

          <div className="settings-block" id="vision">
            <h3 className="headline-5 mb-50">Vision and Strategy</h3>
            <div className="w-form">
            {topError && <Message text={topError} status={-1} />}
                {topError && <br />}
              <form id="email-form-7" name="email-form-7" data-name="Email Form 7">
                <div className="single-choice-row headline">
                  <div className="subtitle-2">2. The Company</div>
                  <div className="center">Yes</div>
                  <div className="center">No</div>
                  <div className="center">Considering or planning to implement</div>
                  <div className="center">Not applicable</div>
                </div>
                <div className="assessment-spacer"></div>
                
                <div className="single-choice-row">
                  <div>Prepares its strategic plan.</div>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${strategicPlan === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setStrategicPlan("yes")}
                      value={strategicPlan}
                      checked={strategicPlan === "yes"}
                      data-name="Prepares its strategic plan."
                      id="Yes-2" name="Prepares-its-strategic-plan" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${strategicPlan === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setStrategicPlan("no")}
                      value={strategicPlan}
                      checked={strategicPlan === "no"}
                      data-name="Prepares its strategic plan."
                      id="Yes-2" name="Prepares-its-strategic-plan" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${strategicPlan === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setStrategicPlan("considering or planning")}
                      value={strategicPlan}
                      checked={strategicPlan === "considering or planning"}
                      data-name="Prepares its strategic plan."
                      id="Yes-2" name="Prepares-its-strategic-plan" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${strategicPlan === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setStrategicPlan("not applicable")}
                      value={strategicPlan}
                      checked={strategicPlan === "not applicable"}
                      data-name="Prepares its strategic plan."
                      id="Yes-2" name="Prepares-its-strategic-plan" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                  </label>
                </div>
                {strategicPlan === "yes" && <div className="single-choice-row">
                  <div>If so, do the objectives and targets consider one or more aspects of sustainability?</div>

                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${SMV === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setSMV("yes")}
                      value={SMV}
                      checked={SMV === "yes"}
                      data-name="Has defined its mission statement, vision and values."
                      id="Yes-2" name="Has-defined-its-mission-statement-vision-and-values" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${SMV === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setSMV("no")}
                      value={SMV}
                      checked={SMV === "no"}
                      data-name="Has defined its mission statement, vision and values."
                      id="Yes-2" name="Has-defined-its-mission-statement-vision-and-values" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${SMV === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setSMV("considering or planning")}
                      value={SMV}
                      checked={SMV === "considering or planning"}
                      data-name="Has defined its mission statement, vision and values."
                      id="Yes-2" name="Has-defined-its-mission-statement-vision-and-values" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${SMV === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setSMV("not applicable")}
                      value={SMV}
                      checked={SMV === "not applicable"}
                      data-name="Has defined its mission statement, vision and values."
                      id="Yes-2" name="Has-defined-its-mission-statement-vision-and-values" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                  </label>
                </div>}
                {SMV === "yes" && <div className="single-choice-row">
                  <div>If so, is it periodically revised?</div>

                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${isPeriodicallyRevised === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setIsPeriodicallyRevised("yes")}
                      value={isPeriodicallyRevised}
                      checked={isPeriodicallyRevised === "yes"}
                      data-name="If so, is it periodically revised?"
                      id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${isPeriodicallyRevised === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setIsPeriodicallyRevised("no")}
                      value={isPeriodicallyRevised}
                      checked={isPeriodicallyRevised === "no"}
                      data-name="If so, is it periodically revised?"
                      id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${isPeriodicallyRevised === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setIsPeriodicallyRevised("considering or planning")}
                      value={isPeriodicallyRevised}
                      checked={isPeriodicallyRevised === "considering or planning"}
                      data-name="If so, is it periodically revised?"
                      id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${isPeriodicallyRevised === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setIsPeriodicallyRevised("not applicable")}
                      value={isPeriodicallyRevised}
                      checked={isPeriodicallyRevised === "not applicable"}
                      data-name="If so, is it periodically revised?"
                      id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                  </label>
                </div>}
                {isPeriodicallyRevised === "yes" && <div className="single-choice-row">
                  <div>If so, does it present objectives and goals?</div>

                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${objectivesAndGoals === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setObjectivesAndGoals("yes")}
                      value={objectivesAndGoals}
                      checked={objectivesAndGoals === "yes"}
                      data-name="If so, does it present objectives and goals?"
                      id="Yes-2" name="If-so-does-it-present-objectives-and-goals" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${objectivesAndGoals === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setObjectivesAndGoals("no")}
                      value={objectivesAndGoals}
                      checked={objectivesAndGoals === "no"}
                      data-name="If so, does it present objectives and goals?"
                      id="Yes-2" name="If-so-does-it-present-objectives-and-goals" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${objectivesAndGoals === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setObjectivesAndGoals("considering or planning")}
                      value={objectivesAndGoals}
                      checked={objectivesAndGoals === "considering or planning"}
                      data-name="If so, does it present objectives and goals?"
                      id="Yes-2" name="If-so-does-it-present-objectives-and-goals" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${objectivesAndGoals === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setObjectivesAndGoals("not applicable")}
                      value={objectivesAndGoals}
                      checked={objectivesAndGoals === "not applicable"}
                      data-name="If so, does it present objectives and goals?"
                      id="Yes-2" name="If-so-does-it-present-objectives-and-goals" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                  </label>
                </div>}
                {objectivesAndGoals === "yes" && <div className="single-choice-row">
                  <div>If so, do the objectives and targets consider one or more aspects of sustainability?</div>

                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${objectivesAndGoalsSustainabilty === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setobjectivesAndGoalsSustainabilty("yes")}
                      value={objectivesAndGoalsSustainabilty}
                      checked={objectivesAndGoalsSustainabilty === "yes"}
                      data-name="If so, do the objectives and targets consider one or more aspects of sustainability?"
                      id="Yes-2" name="If-so-do-the-objectives-and-targets-consider-one-or-more-aspects-of-sustainability" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${objectivesAndGoalsSustainabilty === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setobjectivesAndGoalsSustainabilty("no")}
                      value={objectivesAndGoalsSustainabilty}
                      checked={objectivesAndGoalsSustainabilty === "no"}
                      data-name="If so, do the objectives and targets consider one or more aspects of sustainability?"
                      id="Yes-2" name="If-so-do-the-objectives-and-targets-consider-one-or-more-aspects-of-sustainability" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${objectivesAndGoalsSustainabilty === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setobjectivesAndGoalsSustainabilty("considering or planning")}
                      value={objectivesAndGoalsSustainabilty}
                      checked={objectivesAndGoalsSustainabilty === "considering or planning"}
                      data-name="If so, do the objectives and targets consider one or more aspects of sustainability?"
                      id="Yes-2" name="If-so-do-the-objectives-and-targets-consider-one-or-more-aspects-of-sustainability" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                  </label>
                  <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${objectivesAndGoalsSustainabilty === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                      type="checkbox"
                      onChange={() => setobjectivesAndGoalsSustainabilty("not applicable")}
                      value={objectivesAndGoalsSustainabilty}
                      checked={objectivesAndGoalsSustainabilty === "not applicable"}
                      data-name="If so, do the objectives and targets consider one or more aspects of sustainability?"
                      id="Yes-2" name="If-so-do-the-objectives-and-targets-consider-one-or-more-aspects-of-sustainability" required=""
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                  </label>
                </div>}
                <textarea
                  value={companyBrief}
                  onChange={(e) => setCompanyBrief(e.target.value)}
                  placeholder="(If any) Use this space to briefly tell us how sustainability is embedded in your company's  strategic actions and decision-making."
                  maxLength="5000" id="If-any-Use-this-space-to-briefly-tell-us-how-sustainability-is-embedded-in-your-company-s-strategic-actions-and-decision-making" name="If-any-Use-this-space-to-briefly-tell-us-how-sustainability-is-embedded-in-your-company-s-strategic-actions-and-decision-making"
                  data-name="(If any) Use this space to briefly tell us how sustainability is embedded in your company's  strategic actions and decision-making." className="input-x input-x--text-area vision-notes w-input"></textarea>
                {errors && errors.length > 0 && errors.map(error =>
                  <Message text={error} status={-1} />)
                }
                <div className="button blue" onClick={submit}>Continue</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller_Vision_Strategy;