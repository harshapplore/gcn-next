import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProgressBar from "./Utils/ProgressBar";

import { authAxios } from "@/setups/axios";
import { fetchSeller } from "@/slices/user";

import Message from "@/shared/Message";

const data = {
  heading: "Hello Thomas, let's get started!",
  subheading: "Seller Questionnaire",

  p1: `An environmental policy shows the company’s overall intentions and direction related to its environmental performance. It reflects the company’s commitment and is formally expressed by top management. It provides a framework for action, setting environmental objectives that take into account applicable legal and requirements and the company’s environmental impact of its operations, to decrease the environmental impact, saving resources and costs.`,
  p2: `An environmental management system enables a company, in a structured and preventive way, to work with its environmental performance and improve the environmental impact from its operations, products and services. Examples include developing a policy/direction; establishing objectives; subscribing to legal and other requirements; risk management; implementing working procedures to achieve continuous improvements to support environmental protection and reducing or preventing pollution.`,
  p3: `An energy management system is a systematic process for continually improving energy performance and maximizing energy savings.`,
};

const Seller_Environmental = ({ nextPage }) => {
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!seller.id) dispatch(fetchSeller());
  }, []);

  const [hasEnvironmentalPolicy, setHasEnvironmentalPolicy] = useState("");

  const [understandTheImpacts, setUnderstandTheImpacts] = useState("")
  const [isImpactMeasured, setIsImpactMeasured] = useState("")
  const [materialCauseLessDamage, setMaterialCauseLessDamage] = useState("")
  const [useLocalMaterial, setUseLocalMaterial] = useState("")
  const [useLocalMaterialPercentage, setUseLocalMaterialPercentage] = useState("")
  const [quantifyTheImpact, setQuantifyTheImpact] = useState("")
  const [percentageOfPlasticReduce, setPercentageOfPlasticReduce] = useState("")
  const [percentageOfRawMaterialReduce, setPercentageOfRawMaterialReduce] = useState("")
  const [percentageOfWaterReduce, setPercentageOfWaterReduce] = useState("")
  const [percentageOfEnergyReduce, setPercentageOfEnergyReduce] = useState("")
  const [percentageOfRenewableEnergyEmployed, setPercentageOfRenewableEnergyEmployed] = useState("")
  const [percentageOfGHGEmission, setPercentageOfGHGEmission] = useState("")
  const [recycleScrapMaterials, setRecycleScrapMaterials] = useState("")
  const [recyclePercentage, setRecyclePercentage] = useState("")
  const [recycleAfterUsePhase, setRecycleAfterUsePhase] = useState("")
  const [aimToReturnFaulty, setAimToReturnFaulty] = useState("")
  const [promotesCustomersUnderstanding, setPromotesCustomersUnderstanding] = useState("")
  const [dataAboutEnvironmentalPractices, setDataAboutEnvironmentalPractices] = useState("")
  const [customersDemandOnEnvironmentalPerfomance, setCustomersDemandOnEnvironmentalPerfomance] = useState("")
  const [alternativeForPlastic, setAlternativeForPlastic] = useState("")
  const [sustainableDeliveryProcess, setSustainableDeliveryProcess] = useState("")
  const [finalDestinationForWaste, setFinalDestinationForWaste] = useState("")
  const [selectiveWasteCollection, setSelectiveWasteCollection] = useState("")
  const [selectiveWasteCollectionPercent, setSelectiveWasteCollectionPercent] = useState("")
  const [savingPaperConsumption, setSavingPaperConsumption] = useState("")
  const [savingPaperConsumptionPercent, setSavingPaperConsumptionPercent] = useState("")
  const [reductionOfEnergyConsumption, setReductionOfEnergyConsumption] = useState("")
  const [reductionOfEnergyConsumptionPercent, setReductionOfEnergyConsumptionPercent] = useState("")
  const [useOfRenewableEnergy, setUseOfRenewableEnergy] = useState("")
  const [useOfRenewableEnergyPercent, setUseOfRenewableEnergyPercent] = useState("")
  const [reductionOfWaterConsumption, setReductionOfWaterConsumption] = useState("")
  const [reductionOfWaterConsumptionPercent, setReductionOfWaterConsumptionPercent] = useState("")
  const [environmentalBrief, setEnvironmentalBrief] = useState("")

  const checkBoxStyle = { opacity: 0, position: "absolute", zIndex: -1 };
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    if (seller.environmentalAnswers) {
      setHasEnvironmentalPolicy(
        seller.environmentalAnswers.hasEnvironmentalPolicy
      );
      setUnderstandTheImpacts(seller.environmentalAnswers.understandTheImpacts);
      setIsImpactMeasured(seller.environmentalAnswers.isImpactMeasured);
      setMaterialCauseLessDamage(
        seller.environmentalAnswers.materialCauseLessDamage
      );
      setUseLocalMaterial(seller.environmentalAnswers.useLocalMaterial);
      setUseLocalMaterialPercentage(
        seller.environmentalAnswers.useLocalMaterialPercentage
      );
      setQuantifyTheImpact(seller.environmentalAnswers.quantifyTheImpact);
      setPercentageOfPlasticReduce(
        seller.environmentalAnswers.percentageOfPlasticReduce
      );
      setPercentageOfRawMaterialReduce(
        seller.environmentalAnswers.percentageOfRawMaterialReduce
      );
      setPercentageOfWaterReduce(
        seller.environmentalAnswers.percentageOfWaterReduce
      );
      setPercentageOfEnergyReduce(
        seller.environmentalAnswers.percentageOfWaterReduce
      );
      setPercentageOfRenewableEnergyEmployed(
        seller.environmentalAnswers.percentageOfRenewableEnergyEmployed
      );
      setPercentageOfGHGEmission(
        seller.environmentalAnswers.setPercentageOfGHGEmission
      );
      setRecycleScrapMaterials(
        seller.environmentalAnswers.recycleScrapMaterials
      );
      setRecyclePercentage(seller.environmentalAnswers.recyclePercentage);
      setRecycleAfterUsePhase(seller.environmentalAnswers.recycleAfterUsePhase);
      setAimToReturnFaulty(seller.environmentalAnswers.aimToReturnFaulty);
      setPromotesCustomersUnderstanding(
        seller.environmentalAnswers.promotesCustomersUnderstanding
      );
      setDataAboutEnvironmentalPractices(
        seller.environmentalAnswers.dataAboutEnvironmentalPractices
      );
      setCustomersDemandOnEnvironmentalPerfomance(
        seller.environmentalAnswers.customersDemandOnEnvironmentalPerfomance
      );
      setAlternativeForPlastic(
        seller.environmentalAnswers.alternativeForPlastic
      );
      setSustainableDeliveryProcess(
        seller.environmentalAnswers.sustainableDeliveryProcess
      );
      setFinalDestinationForWaste(
        seller.environmentalAnswers.finalDestinationForWaste
      );
      setSelectiveWasteCollection(
        seller.environmentalAnswers.selectiveWasteCollection
      );
      setSelectiveWasteCollectionPercent(
        seller.environmentalAnswers.selectiveWasteCollectionPercent
      );
      setSavingPaperConsumption(
        seller.environmentalAnswers.savingPaperConsumption
      );
      setSavingPaperConsumptionPercent(
        seller.environmentalAnswers.savingPaperConsumptionPercent
      );
      setReductionOfEnergyConsumption(
        seller.environmentalAnswers.reductionOfEnergyConsumption
      );
      setReductionOfEnergyConsumptionPercent(
        seller.environmentalAnswers.reductionOfEnergyConsumptionPercent
      );
      setUseOfRenewableEnergy(seller.environmentalAnswers.useOfRenewableEnergy);
      setUseOfRenewableEnergyPercent(
        seller.environmentalAnswers.useOfRenewableEnergyPercent
      );
      setReductionOfWaterConsumption(
        seller.environmentalAnswers.reductionOfWaterConsumption
      );
      setReductionOfWaterConsumptionPercent(
        seller.environmentalAnswers.reductionOfWaterConsumptionPercent
      );
      setEnvironmentalBrief(seller.environmentalAnswers.environmentalBrief);
    }
  }, [seller]);

  const validate = () => {
    const err = [];
    !hasEnvironmentalPolicy ? err.push(`please select the value`) : ""
    !understandTheImpacts ? err.push(`please select the value`) : ""
    understandTheImpacts==="yes" && !isImpactMeasured ? err.push(`please enter the value`) : ""
    !materialCauseLessDamage ? err.push(`please select the value`) : ""
    !useLocalMaterial ? err.push(`please select the value`) : ""
    useLocalMaterial === "yes" && !useLocalMaterialPercentage ? err.push(`please enter the value`) : ""
    !quantifyTheImpact ? err.push(`please select the value`) : ""
    quantifyTheImpact ==="yes" && !percentageOfPlasticReduce ? err.push(`please enter the value`) : ""
    quantifyTheImpact ==="yes" && !percentageOfRawMaterialReduce ? err.push(`please enter the value`) : ""
    quantifyTheImpact ==="yes" && !percentageOfWaterReduce ? err.push(`please enter the value`) : ""
    quantifyTheImpact ==="yes" && !percentageOfEnergyReduce ? err.push(`please enter the value`) : ""
    quantifyTheImpact ==="yes" && !percentageOfRenewableEnergyEmployed ? err.push(`please enter the value`) : ""
    quantifyTheImpact ==="yes" && !percentageOfGHGEmission ? err.push(`please enter the value`) : ""
    !recycleScrapMaterials ? err.push(`please select the value`) : ""
    recycleScrapMaterials === "yes" && !recyclePercentage ? err.push(`please enter the value`) : ""
    !recycleAfterUsePhase ? err.push(`please select the value`) : ""
    !aimToReturnFaulty ? err.push(`please select the value`) : ""
    !promotesCustomersUnderstanding ? err.push(`please select the value`) : ""
    !dataAboutEnvironmentalPractices ? err.push(`please select the value`) : ""
    !customersDemandOnEnvironmentalPerfomance ? err.push(`please select the value`) : ""
    !alternativeForPlastic ? err.push(`please select the value`) : ""
    !sustainableDeliveryProcess ? err.push(`please select the value`) : ""
    !finalDestinationForWaste ? err.push(`please select the value`) : ""
    !selectiveWasteCollection ? err.push(`please select the value`) : ""
    selectiveWasteCollection ==="yes" && !selectiveWasteCollectionPercent ? err.push(`please enter the value`) : ""
    !savingPaperConsumption ? err.push(`please select the value`) : ""
    savingPaperConsumption ==="yes" && !savingPaperConsumptionPercent ? err.push(`please enter the value`) : ""
    !reductionOfEnergyConsumption ? err.push(`please select the value`) : ""
    reductionOfEnergyConsumption === "yes" && !reductionOfEnergyConsumptionPercent ? err.push(`please enter the value`) : ""
    !useOfRenewableEnergy ? err.push(`please select the value`) : ""
    useOfRenewableEnergy ==="yes" && !useOfRenewableEnergyPercent ? err.push(`please select the value`) : ""
    !reductionOfWaterConsumption ? err.push(`please select the value`) : ""
    reductionOfWaterConsumption ==="yes" && !reductionOfWaterConsumptionPercent ? err.push(`please select the value`) : ""
    // !environmentalBrief ? err.push(`please enter the value`) : ""
    
    setErrors(err);

    if (err.length) return false;

    return true;
  };

  const submit = async (e) => {
    e.preventDefault();

    console.log(errors);
    if (!validate()) return;

    const data = {
      hasEnvironmentalPolicy,
      understandTheImpacts,
      isImpactMeasured,
      materialCauseLessDamage,
      useLocalMaterial,
      useLocalMaterialPercentage,
      quantifyTheImpact,
      percentageOfPlasticReduce,
      percentageOfRawMaterialReduce,
      percentageOfWaterReduce,
      percentageOfEnergyReduce,
      percentageOfRenewableEnergyEmployed,
      percentageOfGHGEmission,
      recycleScrapMaterials,
      recyclePercentage,
      recycleAfterUsePhase,
      aimToReturnFaulty,
      promotesCustomersUnderstanding,
      dataAboutEnvironmentalPractices,
      customersDemandOnEnvironmentalPerfomance,
      alternativeForPlastic,
      sustainableDeliveryProcess,
      finalDestinationForWaste,
      selectiveWasteCollection,
      selectiveWasteCollectionPercent,
      savingPaperConsumption,
      savingPaperConsumptionPercent,
      reductionOfEnergyConsumption,
      reductionOfEnergyConsumptionPercent,
      useOfRenewableEnergy,
      useOfRenewableEnergyPercent,
      reductionOfWaterConsumption,
      reductionOfWaterConsumptionPercent,
      environmentalBrief,
    };

    const response = await authAxios()({
      url: `sellers/${seller.id}`,
      method: "PUT",
      data: {
        onboardStatus: 1,
        environmentalAnswers: data,
        qaStatus: "pending"
      },
    });
    if (response.data.environmentalAnswers) {
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
          <h1 className="headline-2 mb-10"> {data.heading} </h1>
          <div className="overline-text mb-40">{data.subheading}</div>

          <div className=" mb-40  w-richtext">
            <p>{data.p1}</p>
            <p>{data.p2}</p>
            <p>{data.p3}</p>
          </div>
          <ProgressBar />
          <div className="settings-block">
            <h3 className="headline-5 mb-50">5. Environmental</h3>
            <div className="w-form">
              <form
                id="email-form-7"
                name="email-form-7"
                data-name="Email Form 7"
              >
                <div className="single-choice-row headline">
                  <div className="subtitle-2">The company</div>
                  <div className="center">Yes</div>
                  <div className="center">No</div>
                  <div className="center">
                    Considering or planning to implement
                  </div>
                  <div className="center">Not applicable</div>
                </div>
                <div className="assessment-spacer"></div>
                <div className="single-choice-row">
                  <div>Has an environmental policy</div>

                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        hasEnvironmentalPolicy === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setHasEnvironmentalPolicy("yes")}
                      value={hasEnvironmentalPolicy}
                      checked={hasEnvironmentalPolicy === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        hasEnvironmentalPolicy === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setHasEnvironmentalPolicy("no")}
                      value={hasEnvironmentalPolicy}
                      checked={hasEnvironmentalPolicy === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        hasEnvironmentalPolicy === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setHasEnvironmentalPolicy("considering or planning")
                      }
                      value={hasEnvironmentalPolicy}
                      checked={
                        hasEnvironmentalPolicy === "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        hasEnvironmentalPolicy === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setHasEnvironmentalPolicy("not applicable")
                      }
                      value={hasEnvironmentalPolicy}
                      checked={hasEnvironmentalPolicy === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                <div className="single-choice-row">
                  <div>
                    Knows and understands the impacts of its activities on the
                    environment (such as emission of pollutants, soil erosion,
                    consumption of raw material, energy, water, fuel, among
                    others).
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        understandTheImpacts === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setUnderstandTheImpacts("yes")}
                      value={understandTheImpacts}
                      checked={understandTheImpacts === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        understandTheImpacts === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setUnderstandTheImpacts("no")}
                      value={understandTheImpacts}
                      checked={understandTheImpacts === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        understandTheImpacts === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setUnderstandTheImpacts("considering or planning")
                      }
                      value={understandTheImpacts}
                      checked={
                        understandTheImpacts === "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        understandTheImpacts === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setUnderstandTheImpacts("not applicable")}
                      value={understandTheImpacts}
                      checked={understandTheImpacts === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                {understandTheImpacts === "yes" && (
                  <div className="single-choice-row">
                    <div>If so, are these impacts measured and managed?</div>
                    <label
                      className="vision-checkbox-field w-clearfix w-radio"
                      style={{ marginLeft: "30px" }}
                    >
                      <div
                        className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                          isImpactMeasured === "yes"
                            ? " w--redirected-checked"
                            : ""
                        }`}
                      ></div>
                      <input
                        type="radio"
                        onChange={() => setIsImpactMeasured("yes")}
                        value={isImpactMeasured}
                        checked={isImpactMeasured === "yes"}
                        style={checkBoxStyle}
                      />
                      <span htmlFor="Yes-5" className="hidden w-form-label">
                        Yes
                      </span>
                    </label>
                    <label
                      className="vision-checkbox-field w-clearfix w-radio"
                      style={{ marginLeft: "30px" }}
                    >
                      <div
                        className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                          isImpactMeasured === "no"
                            ? " w--redirected-checked"
                            : ""
                        }`}
                      ></div>
                      <input
                        type="radio"
                        onChange={() => setIsImpactMeasured("no")}
                        value={isImpactMeasured}
                        checked={isImpactMeasured === "no"}
                        style={checkBoxStyle}
                      />
                      <span htmlFor="Yes-5" className="hidden w-form-label">
                        Yes
                      </span>
                    </label>
                    <label
                      className="vision-checkbox-field w-clearfix w-radio"
                      style={{ marginLeft: "30px" }}
                    >
                      <div
                        className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                          isImpactMeasured === "considering or planning"
                            ? " w--redirected-checked"
                            : ""
                        }`}
                      ></div>
                      <input
                        type="radio"
                        onChange={() =>
                          setIsImpactMeasured("considering or planning")
                        }
                        value={isImpactMeasured}
                        checked={isImpactMeasured === "considering or planning"}
                        style={checkBoxStyle}
                      />
                      <span htmlFor="Yes-5" className="hidden w-form-label">
                        considering or planning
                      </span>
                    </label>
                    <label
                      className="vision-checkbox-field w-clearfix w-radio"
                      style={{ marginLeft: "30px" }}
                    >
                      <div
                        className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                          isImpactMeasured === "not applicable"
                            ? " w--redirected-checked"
                            : ""
                        }`}
                      ></div>
                      <input
                        type="radio"
                        onChange={() => setIsImpactMeasured("not applicable")}
                        value={isImpactMeasured}
                        checked={isImpactMeasured === "not applicable"}
                        style={checkBoxStyle}
                      />
                      <span htmlFor="Yes-5" className="hidden w-form-label">
                        not applicable
                      </span>
                    </label>
                  </div>
                )}
                <div className="single-choice-row">
                  <div>
                    Seeks to use materials or processes that cause less damage
                    to the environment.
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        materialCauseLessDamage === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setMaterialCauseLessDamage("yes")}
                      value={materialCauseLessDamage}
                      checked={materialCauseLessDamage === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        materialCauseLessDamage === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setMaterialCauseLessDamage("no")}
                      value={materialCauseLessDamage}
                      checked={materialCauseLessDamage === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        materialCauseLessDamage === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setMaterialCauseLessDamage("considering or planning")
                      }
                      value={materialCauseLessDamage}
                      checked={
                        materialCauseLessDamage === "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        materialCauseLessDamage === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setMaterialCauseLessDamage("not applicable")
                      }
                      value={materialCauseLessDamage}
                      checked={materialCauseLessDamage === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                <div className="single-choice-row">
                  <div>
                    Seeks to use local material(s) and service(s) for its
                    operation
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        useLocalMaterial === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setUseLocalMaterial("yes")}
                      value={useLocalMaterial}
                      checked={useLocalMaterial === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        useLocalMaterial === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setUseLocalMaterial("no")}
                      value={useLocalMaterial}
                      checked={useLocalMaterial === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        useLocalMaterial === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setUseLocalMaterial("considering or planning")
                      }
                      value={useLocalMaterial}
                      checked={useLocalMaterial === "considering or planning"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        useLocalMaterial === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setUseLocalMaterial("not applicable")}
                      value={useLocalMaterial}
                      checked={useLocalMaterial === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                {useLocalMaterial === "yes" && (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>If so, to what extent (%)</div>
                    <input
                      type="text"
                      onChange={(e) =>
                        setUseLocalMaterialPercentage(e.target.value)
                      }
                      value={useLocalMaterialPercentage}
                      placeholder=" % *"
                      style={{
                        width: "45%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}
                <div className="single-choice-row">
                  <div>
                    Is able to identify and quantify the environmental impacts
                    it is avoiding when compared to a traditional
                    production/service offering process.{" "}
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        quantifyTheImpact === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setQuantifyTheImpact("yes")}
                      value={quantifyTheImpact}
                      checked={quantifyTheImpact === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        quantifyTheImpact === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setQuantifyTheImpact("no")}
                      value={quantifyTheImpact}
                      checked={quantifyTheImpact === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        quantifyTheImpact === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setQuantifyTheImpact("considering or planning")
                      }
                      value={quantifyTheImpact}
                      checked={quantifyTheImpact === "considering or planning"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        quantifyTheImpact === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setQuantifyTheImpact("not applicable")}
                      value={quantifyTheImpact}
                      checked={quantifyTheImpact === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                {quantifyTheImpact === "yes" && (
                  <div
                    className="mb-20"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      {" "}
                      If so, to what extent (% and kg/unit) is the use <br /> of
                      plastic reduced?
                    </div>
                    <input
                      type="text"
                      onChange={(e) =>
                        setPercentageOfPlasticReduce(e.target.value)
                      }
                      value={percentageOfPlasticReduce}
                      placeholder=" % *"
                      style={{
                        width: "45%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}
                {quantifyTheImpact === "yes" && (
                  <div
                    className="mb-20"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      {" "}
                      If so, to what extent (% and kg/unit) is the use <br /> of
                      raw material reduced?
                    </div>
                    <input
                      type="text"
                      onChange={(e) =>
                        setPercentageOfRawMaterialReduce(e.target.value)
                      }
                      value={percentageOfRawMaterialReduce}
                      placeholder=" % *"
                      style={{
                        width: "45%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}
                {quantifyTheImpact === "yes" && (
                  <div
                    className="mb-20"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      {" "}
                      If so, to what extent (% and m3/unit) is the use <br />
                      of water reduced?
                    </div>
                    <input
                      type="text"
                      onChange={(e) =>
                        setPercentageOfWaterReduce(e.target.value)
                      }
                      value={percentageOfWaterReduce}
                      placeholder=" % *"
                      style={{
                        width: "45%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}
                {quantifyTheImpact === "yes" && (
                  <div
                    className="mb-20"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      {" "}
                      If so, to what extent (% and kWh/unit) is the use <br />{" "}
                      of energy reduced?
                    </div>
                    <input
                      type="text"
                      onChange={(e) =>
                        setPercentageOfEnergyReduce(e.target.value)
                      }
                      value={percentageOfEnergyReduce}
                      placeholder=" % *"
                      style={{
                        width: "45%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}
                {quantifyTheImpact === "yes" && (
                  <div
                    className="mb-20"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      {" "}
                      If so, to what extent (% and kWh/unit) is the use <br />{" "}
                      of renewable energy employed in?
                    </div>
                    <input
                      type="text"
                      onChange={(e) =>
                        setPercentageOfRenewableEnergyEmployed(e.target.value)
                      }
                      value={percentageOfRenewableEnergyEmployed}
                      placeholder=" % *"
                      style={{
                        width: "45%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}
                {quantifyTheImpact === "yes" && (
                  <div
                    className="mb-20"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      {" "}
                      If so, to what extent (% and kgCO2 eq/unit) is
                      <br /> the GHG emission reduced?
                    </div>
                    <input
                      type="text"
                      onChange={(e) =>
                        setPercentageOfGHGEmission(e.target.value)
                      }
                      value={percentageOfGHGEmission}
                      placeholder=" % *"
                      style={{
                        width: "45%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}

                <div className="single-choice-row">
                  <div>
                    Recycles or reuses scrap materials from its production
                    processes.
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        recycleScrapMaterials === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setRecycleScrapMaterials("yes")}
                      value={recycleScrapMaterials}
                      checked={recycleScrapMaterials === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        recycleScrapMaterials === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setRecycleScrapMaterials("no")}
                      value={recycleScrapMaterials}
                      checked={recycleScrapMaterials === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        recycleScrapMaterials === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setRecycleScrapMaterials("considering or planning")
                      }
                      value={recycleScrapMaterials}
                      checked={
                        recycleScrapMaterials === "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        recycleScrapMaterials === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setRecycleScrapMaterials("not applicable")
                      }
                      value={recycleScrapMaterials}
                      checked={recycleScrapMaterials === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                {recycleScrapMaterials === "yes" && (
                  <div
                    className="mb-20"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      {" "}
                      If so, to what extent (% and kgCO2 eq/unit) is <br /> the
                      GHG emission reduced?
                    </div>
                    <input
                      type="text"
                      onChange={(e) => setRecyclePercentage(e.target.value)}
                      value={recyclePercentage}
                      placeholder=" % *"
                      style={{
                        width: "45%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}
                <div className="single-choice-row">
                  <div>
                    Manufactures product(s) that after use phase can be
                    recyclable or be reused for other purposes
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        recycleAfterUsePhase === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setRecycleAfterUsePhase("yes")}
                      value={recycleAfterUsePhase}
                      checked={recycleAfterUsePhase === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        recycleAfterUsePhase === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setRecycleAfterUsePhase("no")}
                      value={recycleAfterUsePhase}
                      checked={recycleAfterUsePhase === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        recycleAfterUsePhase === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setRecycleAfterUsePhase("considering or planning")
                      }
                      value={recycleAfterUsePhase}
                      checked={
                        recycleAfterUsePhase === "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        recycleAfterUsePhase === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setRecycleAfterUsePhase("not applicable")}
                      value={recycleAfterUsePhase}
                      checked={recycleAfterUsePhase === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                <div className="single-choice-row">
                  <div>
                    Discuss partnerships with suppliers aiming to return to the
                    manufacturer of discarded materials (such as expired
                    products, used tires, batteries, etc.).
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        aimToReturnFaulty === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setAimToReturnFaulty("yes")}
                      value={aimToReturnFaulty}
                      checked={aimToReturnFaulty === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        aimToReturnFaulty === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setAimToReturnFaulty("no")}
                      value={aimToReturnFaulty}
                      checked={aimToReturnFaulty === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        aimToReturnFaulty === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setAimToReturnFaulty("considering or planning")
                      }
                      value={aimToReturnFaulty}
                      checked={aimToReturnFaulty === "considering or planning"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        aimToReturnFaulty === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setAimToReturnFaulty("not applicable")}
                      value={aimToReturnFaulty}
                      checked={aimToReturnFaulty === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                <div className="single-choice-row">
                  <div>
                    - Promotes customers' understanding of business-related
                    environmental issue(s) through promotional or educational
                    activities.
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        promotesCustomersUnderstanding === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setPromotesCustomersUnderstanding("yes")}
                      value={promotesCustomersUnderstanding}
                      checked={promotesCustomersUnderstanding === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        promotesCustomersUnderstanding === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setPromotesCustomersUnderstanding("no")}
                      value={promotesCustomersUnderstanding}
                      checked={promotesCustomersUnderstanding === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        promotesCustomersUnderstanding ===
                        "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setPromotesCustomersUnderstanding(
                          "considering or planning"
                        )
                      }
                      value={promotesCustomersUnderstanding}
                      checked={
                        promotesCustomersUnderstanding ===
                        "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        promotesCustomersUnderstanding === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setPromotesCustomersUnderstanding("not applicable")
                      }
                      value={promotesCustomersUnderstanding}
                      checked={
                        promotesCustomersUnderstanding === "not applicable"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                <div className="single-choice-row">
                  <div>
                    Requires suppliers and service providers to provide
                    comprehensive information and data about their environmental
                    practices.
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        dataAboutEnvironmentalPractices === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setDataAboutEnvironmentalPractices("yes")}
                      value={dataAboutEnvironmentalPractices}
                      checked={dataAboutEnvironmentalPractices === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        dataAboutEnvironmentalPractices === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setDataAboutEnvironmentalPractices("no")}
                      value={dataAboutEnvironmentalPractices}
                      checked={dataAboutEnvironmentalPractices === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        dataAboutEnvironmentalPractices ===
                        "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setDataAboutEnvironmentalPractices(
                          "considering or planning"
                        )
                      }
                      value={dataAboutEnvironmentalPractices}
                      checked={
                        dataAboutEnvironmentalPractices ===
                        "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        dataAboutEnvironmentalPractices === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setDataAboutEnvironmentalPractices("not applicable")
                      }
                      value={dataAboutEnvironmentalPractices}
                      checked={
                        dataAboutEnvironmentalPractices === "not applicable"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                <div className="single-choice-row">
                  <div>
                    Communicate and share knowledge with suppliers on customers'
                    demands and expectation on environmental performance.
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        customersDemandOnEnvironmentalPerfomance === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setCustomersDemandOnEnvironmentalPerfomance("yes")
                      }
                      value={customersDemandOnEnvironmentalPerfomance}
                      checked={
                        customersDemandOnEnvironmentalPerfomance === "yes"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        customersDemandOnEnvironmentalPerfomance === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setCustomersDemandOnEnvironmentalPerfomance("no")
                      }
                      value={customersDemandOnEnvironmentalPerfomance}
                      checked={
                        customersDemandOnEnvironmentalPerfomance === "no"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        customersDemandOnEnvironmentalPerfomance ===
                        "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setCustomersDemandOnEnvironmentalPerfomance(
                          "considering or planning"
                        )
                      }
                      value={customersDemandOnEnvironmentalPerfomance}
                      checked={
                        customersDemandOnEnvironmentalPerfomance ===
                        "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        customersDemandOnEnvironmentalPerfomance ===
                        "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setCustomersDemandOnEnvironmentalPerfomance(
                          "not applicable"
                        )
                      }
                      value={customersDemandOnEnvironmentalPerfomance}
                      checked={
                        customersDemandOnEnvironmentalPerfomance ===
                        "not applicable"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                <div className="single-choice-row">
                  <div>
                    Use some alternative for plastic packaging, giving
                    preference to biodegradable, reusable or recyclable
                    materials.
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        alternativeForPlastic === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setAlternativeForPlastic("yes")}
                      value={alternativeForPlastic}
                      checked={alternativeForPlastic === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        alternativeForPlastic === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setAlternativeForPlastic("no")}
                      value={alternativeForPlastic}
                      checked={alternativeForPlastic === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        alternativeForPlastic === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setAlternativeForPlastic("considering or planning")
                      }
                      value={alternativeForPlastic}
                      checked={
                        alternativeForPlastic === "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        alternativeForPlastic === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setAlternativeForPlastic("not applicable")
                      }
                      value={alternativeForPlastic}
                      checked={alternativeForPlastic === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                <div className="single-choice-row">
                  <div>
                    Uses a sustainable delivery process (e.g., uses bicycles,
                    electric vehicles, shipping software for efficient package
                    settings or offsets shipping emissions)
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        sustainableDeliveryProcess === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setSustainableDeliveryProcess("yes")}
                      value={sustainableDeliveryProcess}
                      checked={sustainableDeliveryProcess === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        sustainableDeliveryProcess === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setSustainableDeliveryProcess("no")}
                      value={sustainableDeliveryProcess}
                      checked={sustainableDeliveryProcess === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        sustainableDeliveryProcess === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setSustainableDeliveryProcess("considering or planning")
                      }
                      value={sustainableDeliveryProcess}
                      checked={
                        sustainableDeliveryProcess === "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        sustainableDeliveryProcess === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setSustainableDeliveryProcess("not applicable")
                      }
                      value={sustainableDeliveryProcess}
                      checked={sustainableDeliveryProcess === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                <div className="single-choice-row">
                  <div>
                    Gives appropriate final destination for waste that requires
                    specific treatment, such as batteries, oils, tires and
                    hospital waste, among others.
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        finalDestinationForWaste === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setFinalDestinationForWaste("yes")}
                      value={finalDestinationForWaste}
                      checked={finalDestinationForWaste === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        finalDestinationForWaste === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setFinalDestinationForWaste("no")}
                      value={finalDestinationForWaste}
                      checked={finalDestinationForWaste === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        finalDestinationForWaste === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setFinalDestinationForWaste("considering or planning")
                      }
                      value={finalDestinationForWaste}
                      checked={
                        finalDestinationForWaste === "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        finalDestinationForWaste === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setFinalDestinationForWaste("not applicable")
                      }
                      value={finalDestinationForWaste}
                      checked={finalDestinationForWaste === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                <div className="single-choice-row">
                  <div>Practices on its facilities:</div>
                </div>
                <div className="single-choice-row">
                  <div>
                    Selective waste collection (e.g., labeled containers for
                    paper, glass, metal, plastic and organic material)
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        selectiveWasteCollection === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setSelectiveWasteCollection("yes")}
                      value={selectiveWasteCollection}
                      checked={selectiveWasteCollection === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        selectiveWasteCollection === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setSelectiveWasteCollection("no")}
                      value={selectiveWasteCollection}
                      checked={selectiveWasteCollection === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        selectiveWasteCollection === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setSelectiveWasteCollection("considering or planning")
                      }
                      value={selectiveWasteCollection}
                      checked={
                        selectiveWasteCollection === "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        selectiveWasteCollection === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setSelectiveWasteCollection("not applicable")
                      }
                      value={selectiveWasteCollection}
                      checked={selectiveWasteCollection === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                {selectiveWasteCollection === "yes" && (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div> If so, to what extent (%)?</div>
                    <input
                      type="text"
                      onChange={(e) =>
                        setSelectiveWasteCollectionPercent(e.target.value)
                      }
                      value={selectiveWasteCollectionPercent}
                      placeholder=" % *"
                      style={{
                        width: "45%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}
                <div className="single-choice-row">
                  <div>
                    Savings on paper consumption (such as using the front and
                    back of sheets).
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        savingPaperConsumption === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setSavingPaperConsumption("yes")}
                      value={savingPaperConsumption}
                      checked={savingPaperConsumption === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        savingPaperConsumption === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setSavingPaperConsumption("no")}
                      value={savingPaperConsumption}
                      checked={savingPaperConsumption === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        savingPaperConsumption === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setSavingPaperConsumption("considering or planning")
                      }
                      value={savingPaperConsumption}
                      checked={
                        savingPaperConsumption === "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        savingPaperConsumption === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setSavingPaperConsumption("not applicable")
                      }
                      value={savingPaperConsumption}
                      checked={savingPaperConsumption === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                {savingPaperConsumption === "yes" && (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div> If so, to what extent (%)?</div>
                    <input
                      type="text"
                      onChange={(e) =>
                        setSavingPaperConsumptionPercent(e.target.value)
                      }
                      value={savingPaperConsumptionPercent}
                      placeholder=" % *"
                      style={{
                        width: "45%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}
                <div className="single-choice-row">
                  <div>
                    Reduction of energy consumption (through, for example,
                    improved daylighting, lower energy consumption electronics,
                    device to cut power when the device is not in use, etc.).
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        reductionOfEnergyConsumption === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setReductionOfEnergyConsumption("yes")}
                      value={reductionOfEnergyConsumption}
                      checked={reductionOfEnergyConsumption === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        reductionOfEnergyConsumption === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setReductionOfEnergyConsumption("no")}
                      value={reductionOfEnergyConsumption}
                      checked={reductionOfEnergyConsumption === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        reductionOfEnergyConsumption ===
                        "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setReductionOfEnergyConsumption(
                          "considering or planning"
                        )
                      }
                      value={reductionOfEnergyConsumption}
                      checked={
                        reductionOfEnergyConsumption ===
                        "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        reductionOfEnergyConsumption === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setReductionOfEnergyConsumption("not applicable")
                      }
                      value={reductionOfEnergyConsumption}
                      checked={
                        reductionOfEnergyConsumption === "not applicable"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                {reductionOfEnergyConsumption === "yes" && (
                  <div
                    className="mb-20"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>If so, to what extent (%)?</div>
                    <input
                      type="text"
                      onChange={(e) =>
                        setReductionOfEnergyConsumptionPercent(e.target.value)
                      }
                      value={reductionOfEnergyConsumptionPercent}
                      placeholder=" % *"
                      style={{
                        width: "45%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}

                <div className="single-choice-row">
                  <div>The use of some renewable energy source</div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        useOfRenewableEnergy === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setUseOfRenewableEnergy("yes")}
                      value={useOfRenewableEnergy}
                      checked={useOfRenewableEnergy === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        useOfRenewableEnergy === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setUseOfRenewableEnergy("no")}
                      value={useOfRenewableEnergy}
                      checked={useOfRenewableEnergy === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        useOfRenewableEnergy === "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setUseOfRenewableEnergy("considering or planning")
                      }
                      value={useOfRenewableEnergy}
                      checked={
                        useOfRenewableEnergy === "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        useOfRenewableEnergy === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setUseOfRenewableEnergy("not applicable")}
                      value={useOfRenewableEnergy}
                      checked={useOfRenewableEnergy === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                {useOfRenewableEnergy === "yes" && (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>If so, to what extent (%)?</div>
                    <input
                      type="text"
                      onChange={(e) =>
                        setUseOfRenewableEnergyPercent(e.target.value)
                      }
                      value={useOfRenewableEnergyPercent}
                      placeholder=" % *"
                      style={{
                        width: "45%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}
                <div className="single-choice-row">
                  <div>
                    Reduction of water consumption (by installing faucets with
                    automatic closing and discharges with reduced flow, by using
                    rainwater for industrial activities, etc.).
                  </div>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        reductionOfWaterConsumption === "yes"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setReductionOfWaterConsumption("yes")}
                      value={reductionOfWaterConsumption}
                      checked={reductionOfWaterConsumption === "yes"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        reductionOfWaterConsumption === "no"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() => setReductionOfWaterConsumption("no")}
                      value={reductionOfWaterConsumption}
                      checked={reductionOfWaterConsumption === "no"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      Yes
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        reductionOfWaterConsumption ===
                        "considering or planning"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setReductionOfWaterConsumption(
                          "considering or planning"
                        )
                      }
                      value={reductionOfWaterConsumption}
                      checked={
                        reductionOfWaterConsumption ===
                        "considering or planning"
                      }
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      considering or planning
                    </span>
                  </label>
                  <label
                    className="vision-checkbox-field w-clearfix w-radio"
                    style={{ marginLeft: "30px" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${
                        reductionOfWaterConsumption === "not applicable"
                          ? " w--redirected-checked"
                          : ""
                      }`}
                    ></div>
                    <input
                      type="radio"
                      onChange={() =>
                        setReductionOfWaterConsumption("not applicable")
                      }
                      value={reductionOfWaterConsumption}
                      checked={reductionOfWaterConsumption === "not applicable"}
                      style={checkBoxStyle}
                    />
                    <span htmlFor="Yes-5" className="hidden w-form-label">
                      not applicable
                    </span>
                  </label>
                </div>
                {reductionOfWaterConsumption === "yes" && (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>If so, to what extent (%)?</div>
                    <input
                      type="text"
                      onChange={(e) =>
                        setReductionOfWaterConsumptionPercent(e.target.value)
                      }
                      value={reductionOfWaterConsumptionPercent}
                      placeholder=" % *"
                      style={{
                        width: "45%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                )}

                <textarea
                  value={environmentalBrief}
                  onChange={(e) => setEnvironmentalBrief(e.target.value)}
                  placeholder="(If any) Use this space to briefly tell us the principal environmental impacts arising from your company's activities. How are environmental issues are included in the company's strategic decisions? What does make your product/service more environmentally friendly? What actions does the company take to mitigate/minimize its footprints?"
                  maxLength="5000"
                  className="input-x input-x--text-area vision-notes w-input"
                ></textarea>

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

export default Seller_Environmental;
