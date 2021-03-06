import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProgressBar from "./Utils/ProgressBar";

import { authAxios } from "@/setups/axios";
import { scrollToElement } from "@/utils/scroll";
import governanceAndManagementIntegrity from "../../_data/governanceAndManagementIntegrity.json"
import governanceAndManagementFinancial from "../../_data/governanceAndManagementFinancial.json"
import governanceAndManagementInnovation from "../../_data/governanceAndManagementInnovation.json"
import governanceAndManagementRelationship from "../../_data/governanceAndManagementRelationship.json"
import governanceAndManagementComplianceWithLaws from "../../_data/governanceAndManagementComplianceWithLaws.json"



import { fetchSeller } from "@/slices/user";

import Message from "@/shared/Message";
import Governance_Management_Integrity from "./Governance_Management_Integrity";
import Governance_Management_Financial from "./Governance_Management_Financial";
import Governance_Management_Innovation from "./Governance_Management_Innovation";
import Governance_Management_Relationship from "./Governance_Management_Relationship";
import Governance_Management_Law from "./Governance_Management_Law";

const data = {
  heading: "Hello Thomas, let's get started!",
  subheading: "Seller Questionnaire",

  p1: `The performance of the leadership is key to the success of actions that promote the company's integrity. It is important that human and, if necessary, financial resources are allocated to the planning and development of an integrity program. In addition, it is essential that the company's management lead by example, using and recommending the use of a code of ethics to solve dilemmas, that they encourage and participate in training on this topic and praise the integrity and ethical posture of employees.`,
  p2: `The code of conduct is an instrument that brings together guidelines and standards that express people's expectations of behavior, reducing the risk of subjective interpretations of moral and ethical aspects at the time of difficult and/or relevant decision-making, of conflicts of interest of the company and among its employees.`,
  p3: `To be a tool for promoting integrity, the code of conduct needs to reflect the reality of your business and be a constant source of reference for managers (e.g., partners, owners, directors, etc.). For this, it is important to define the content, considering the type of culture the company wants to create, its values, the main conflicts of interest and risks, and indicate the rules and penalties to which those who do not follow the expected behavior will be subject.`,
  p4: `The company should consider, for example, rules on the offering of gifts and giveaways to public officials, payment of entertainment expenses for customers and business partners, travel expenses, charitable donations and sponsorships, participation in bids and execution of contracts with the public administration and the prohibition of offering or accepting to pay bribes to public officials.`,
  p5: `If your company does not have a Code of Conduct today, you can use Green Cloud Nine???s as reference. As part of your onboarding with us, you will be asked to acknowledge it as it is the framework that governs our behaviour and our relationships with all our stakeholders.`,
  q1: `Why disclose information (financial and non-financial) about management?`,

  p6: `In the business environment, the sustainability report is the instrument that aims to support companies in providing greater transparency to society about their economic-financial, environmental, social and governance performance.`,
  p7: `Based on a process of engagement with stakeholders, the company communicates among others, how its relationships with the various audiences occur and what is the positive and negative impact of its activities and actions, taking a stand in relation to the challenges in which is inserted.`,
  p8: `???Innovation happens when we adopt a product or service because we realize that it improves our experiences, makes us more productive and makes us feel better.`,
  p9: `Some companies get stuck on the road, focused on what they know and without keeping up with changes in customer behavior and expectations.`,
  p10: `Innovation is the process of transforming a differentiated idea into a real offer, priced, communicated and made available to the target audience, meeting the needs of customers with greater perceived value in relation to existing alternatives. At the same time, of course, it brings results for the company.???`,
  p11: `The search of service excellence and the satisfaction of their consumers is a requirement that is already widespread among businesses. The quality of customer service is an important reference in this regard, indicating the company's ability to adapt to the needs and demands of its customers. The strategic use of information obtained from customer service and the continuous improvement of processes based on them is the company's way of increasing and retaining their audience.`,
  p12: `A specific Supplier Code of Conduct can be established to promote healthy working conditions and environmental responsibility, enforcing sustainability requirements in the entire supply chain.`,
  p13: `Although everyone's understanding that the laws must be complied with is tacit, the entrepreneur may sometimes be unaware of the legislation to which he/she is subject.`,

  p14: `We highlight here the importance of the company knowing the main instruments for regulating individual and collective labor relations applied in their contexts.`,

  p15: `It is also important that the company knows what taxation rules it is subject to and collects taxes correctly.`,

  p16: `If the company's activity causes an environmental impact, it is important that it pays attention to the licenses necessary for its performance, obtaining certificates of regularity from the competent bodies and the conduct it must have in order not to be fined and suffer infractions or sanctions.
    `,
};

const Seller_Governance_Management = ({ nextPage }) => {
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!seller.id) dispatch(fetchSeller());
  }, []);

  const [directorAct, setDirectorAct] = useState("");
  const [responsibleForIrregularities, setResponsibleForIrregularities] =
    useState("");
  const [principleOfBusinessConduct, setPrincipleOfBusinessConduct] =
    useState("");
  const [channelForEmployee, setChannelForEmployee] = useState("");
  const [integrityBrief, setIntegrityBrief] = useState("");


  governanceAndManagementIntegrity[0].answer = directorAct
  governanceAndManagementIntegrity[1].answer = responsibleForIrregularities
  governanceAndManagementIntegrity[2].answer = principleOfBusinessConduct
  governanceAndManagementIntegrity[3].answer = channelForEmployee
  governanceAndManagementIntegrity[4].answer = integrityBrief

  const [financialPlan, setFinancialPlan] = useState("");
  const [financialPerformance, setFinancialPerformance] = useState("");
  const [monitoringManagement, setMonitoringManagement] = useState("");
  const [discloseInfo, setDiscloseInfo] = useState("");
  const [financialBrief, setFinancialBrief] = useState("");
  const checkBoxStyle = { opacity: 0, position: "absolute", zIndex: -1 };

  governanceAndManagementFinancial[0].answer = financialPlan
  governanceAndManagementFinancial[1].answer = financialPerformance
  governanceAndManagementFinancial[2].answer = monitoringManagement
  governanceAndManagementFinancial[3].answer = discloseInfo
  governanceAndManagementFinancial[4].answer = financialBrief

  const [efficiency, setEfficiency] = useState("");
  const [qualityOfProduct, setQualityOfProduct] = useState("");
  const [improvedProtfolio, setImprovedProtfolio] = useState("");
  const [benefitInItsDimensions, setBenefitInItsDimensions] = useState("");
  const [RND, setRND] = useState("");
  const [involvingCustomers, setInvolvingCustomers] = useState("");
  const [innovationBrief, setInnovationBrief] = useState("");

  governanceAndManagementInnovation[0].answer = efficiency
  governanceAndManagementInnovation[1].answer = qualityOfProduct
  governanceAndManagementInnovation[2].answer = improvedProtfolio
  governanceAndManagementInnovation[3].answer = benefitInItsDimensions
  governanceAndManagementInnovation[4].answer = RND
  governanceAndManagementInnovation[5].answer = involvingCustomers
  governanceAndManagementInnovation[6].answer = innovationBrief

  const [communicationChannel, setCommunicationChannel] = useState("");
  const [answerReceived, setAnswerReceived] = useState("");
  const [goalAndDeadline, setGoalAndDeadline] = useState("");
  const [doubtAnalysis, setDoubtAnalysis] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [satisfactionSurvey, setSatisfactionSurvey] = useState("");
  const [supplierDetails, setSupplierDetails] = useState("");
  const [criticalSupplySurvey, setCriticalSupplySurvey] = useState("");
  const [alternateDeliveryOption, setAlternateDeliveryOption] = useState("");
  const [priorityOfLocalSupplier, setPriorityOfLocalSupplier] = useState("");
  const [
    priorityOfLocalSupplierPercentage,
    setpriorityOfLocalSupplierPercentage,
  ] = useState("");
  const [purchaseCriteria, setPurchaseCriteria] = useState("");
  const [contractWithSupplier, setContractWithSupllier] = useState("");
  const [labour, setLabour] = useState("");
  const [tax, setTax] = useState("");
  const [sanitary, setSanitary] = useState("");
  const [environmental, setEnvironmental] = useState("");
  const [relationshipBrief, setRelationshipBrief] = useState("");

  governanceAndManagementRelationship[0].answer = communicationChannel
  governanceAndManagementRelationship[1].answer = answerReceived
  governanceAndManagementRelationship[2].answer = goalAndDeadline
  governanceAndManagementRelationship[3].answer = doubtAnalysis
  governanceAndManagementRelationship[4].answer = productInfo
  governanceAndManagementRelationship[5].answer = satisfactionSurvey
  governanceAndManagementRelationship[6].answer = supplierDetails
  governanceAndManagementRelationship[7].answer = criticalSupplySurvey
  governanceAndManagementRelationship[8].answer = alternateDeliveryOption
  governanceAndManagementRelationship[9].answer = priorityOfLocalSupplier
  governanceAndManagementRelationship[10].answer = priorityOfLocalSupplierPercentage
  governanceAndManagementRelationship[11].answer = purchaseCriteria
  governanceAndManagementRelationship[12].answer = contractWithSupplier
  governanceAndManagementRelationship[12].answer = labour
  governanceAndManagementRelationship[13].answer = tax
  governanceAndManagementRelationship[14].answer = sanitary
  governanceAndManagementRelationship[15].answer = environmental
  governanceAndManagementRelationship[16].answer = relationshipBrief




  const [licenseAndPermit, setLicenseAndPermit] = useState("");
  const [instructedToKnowLaw, setInstructedToKnowLaw] = useState("");
  const [finedForLaw, setFinedForLaw] = useState("");
  const [finedForLabourLaw, setFinedForLabourLaw] = useState("");
  const [finedForEnvironmentalLaw, setFinedForEnvironmentalLaw] = useState("");
  const [finedForHealthLaw, setFinedForHealthLaw] = useState("");
  const [lawBrief, setLawBrief] = useState("");

  governanceAndManagementComplianceWithLaws[0].answer = licenseAndPermit
  governanceAndManagementComplianceWithLaws[1].answer = instructedToKnowLaw
  governanceAndManagementComplianceWithLaws[2].answer = finedForLaw
  governanceAndManagementComplianceWithLaws[3].answer = finedForLabourLaw
  governanceAndManagementComplianceWithLaws[4].answer = finedForEnvironmentalLaw
  governanceAndManagementComplianceWithLaws[5].answer = finedForHealthLaw
  governanceAndManagementComplianceWithLaws[6].answer = lawBrief

  const [sellerName, setSellerName] = useState("")
  const [topError, setTopErrors] = useState("");

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (seller.governanceAndManagementAnswers) {
      setDirectorAct(seller.governanceAndManagementAnswers.directorAct);
      setResponsibleForIrregularities(
        seller.governanceAndManagementAnswers.responsibleForIrregularities
      );
      setPrincipleOfBusinessConduct(
        seller.governanceAndManagementAnswers.principleOfBusinessConduct
      );
      setChannelForEmployee(
        seller.governanceAndManagementAnswers.channelForEmployee
      );
      setIntegrityBrief(seller.governanceAndManagementAnswers.innovationBrief);
      setFinancialPlan(seller.governanceAndManagementAnswers.financialPlan);
      setFinancialPerformance(
        seller.governanceAndManagementAnswers.financialPerformance
      );
      setMonitoringManagement(
        seller.governanceAndManagementAnswers.monitoringManagement
      );
      setDiscloseInfo(seller.governanceAndManagementAnswers.discloseInfo);
      setFinancialBrief(seller.governanceAndManagementAnswers.financialBrief);
      setEfficiency(seller.governanceAndManagementAnswers.efficiency);
      setQualityOfProduct(
        seller.governanceAndManagementAnswers.qualityOfProduct
      );
      setImprovedProtfolio(
        seller.governanceAndManagementAnswers.improvedProtfolio
      );
      setBenefitInItsDimensions(
        seller.governanceAndManagementAnswers.benefitInItsDimensions
      );
      setRND(seller.governanceAndManagementAnswers.RND);
      setInvolvingCustomers(
        seller.governanceAndManagementAnswers.involvingCustomers
      );
      setInnovationBrief(seller.governanceAndManagementAnswers.innovationBrief);
      setCommunicationChannel(
        seller.governanceAndManagementAnswers.communicationChannel
      );
      setAnswerReceived(seller.governanceAndManagementAnswers.answerReceived);
      setGoalAndDeadline(seller.governanceAndManagementAnswers.goalAndDeadline);
      setDoubtAnalysis(seller.governanceAndManagementAnswers.doubtAnalysis);
      setProductInfo(seller.governanceAndManagementAnswers.productInfo);
      setSatisfactionSurvey(
        seller.governanceAndManagementAnswers.satisfactionSurvey
      );
      setSupplierDetails(seller.governanceAndManagementAnswers.supplierDetails);
      setCriticalSupplySurvey(
        seller.governanceAndManagementAnswers.criticalSupplySurvey
      );
      setAlternateDeliveryOption(
        seller.governanceAndManagementAnswers.alternateDeliveryOption
      );
      setPriorityOfLocalSupplier(
        seller.governanceAndManagementAnswers.priorityOfLocalSupplier
      );
      setpriorityOfLocalSupplierPercentage(
        seller.governanceAndManagementAnswers.priorityOfLocalSupplierPercentage
      );
      setPurchaseCriteria(
        seller.governanceAndManagementAnswers.purchaseCriteria
      );
      setContractWithSupllier(
        seller.governanceAndManagementAnswers.contractWithSupplier
      );
      setLabour(seller.governanceAndManagementAnswers.labour);
      setTax(seller.governanceAndManagementAnswers.tax);
      setSanitary(seller.governanceAndManagementAnswers.sanitary);
      setEnvironmental(seller.governanceAndManagementAnswers.environmental);
      setRelationshipBrief(
        seller.governanceAndManagementAnswers.relationshipBrief
      );
      setLicenseAndPermit(
        seller.governanceAndManagementAnswers.licenseAndPermit
      );
      setInstructedToKnowLaw(
        seller.governanceAndManagementAnswers.instructedToKnowLaw
      );
      setFinedForLaw(seller.governanceAndManagementAnswers.finedForLaw);
      setFinedForLabourLaw(
        seller.governanceAndManagementAnswers.finedForLabourLaw
      );
      setFinedForEnvironmentalLaw(
        seller.governanceAndManagementAnswers.finedForEnvironmentalLaw
      );
      setFinedForHealthLaw(
        seller.governanceAndManagementAnswers.finedForHealthLaw
      );
      setLawBrief(seller.governanceAndManagementAnswers.lawBrief);
    }
    if (seller.user)
      setSellerName(seller.user.name)
  }, [seller]);

  const validate = () => {
    const err = [];

    !financialPlan ? err.push(`please select the value`) : "";
    !financialPerformance ? err.push(`Please select the value`) : "";
    !monitoringManagement ? err.push(`please select the value`) : "";
    !discloseInfo ? err.push(`please select the value`) : "";
    // !financialBrief ? err.push(`please select the value`) : ""
    !efficiency ? err.push(`please select the value`) : "";
    !qualityOfProduct ? err.push(`please select the value`) : "";
    !improvedProtfolio ? err.push(`please select the value`) : "";
    !benefitInItsDimensions ? err.push(`please select the value`) : "";
    !RND ? err.push(`please select the value`) : "";
    !involvingCustomers ? err.push(`please select the value`) : "";
    // !innovationBrief ? err.push(`please select the value`) : ""
    !directorAct ? err.push(`please select the value`) : "";
    !responsibleForIrregularities ? err.push(`please select the value`) : "";
    !principleOfBusinessConduct ? err.push(`please select the value`) : "";
    !channelForEmployee ? err.push(`please select the value`) : "";
    // !integrityBrief ? err.push(`please select the value`) : ""
    !licenseAndPermit ? err.push(`please select the value`) : "";
    !instructedToKnowLaw ? err.push(`please select the value`) : "";
    !finedForLaw ? err.push(`please select the value`) : "";
    !finedForLabourLaw ? err.push(`please select the value`) : "";
    !finedForEnvironmentalLaw ? err.push(`please select the value`) : "";
    !finedForHealthLaw ? err.push(`please select the value`) : "";
    // !lawBrief ? err.push(`please select the value`) : ""
    !communicationChannel ? err.push(`please select the value`) : "";
    communicationChannel === "yes" && !answerReceived
      ? err.push(`please select the value`)
      : "";
    communicationChannel === "yes" && !goalAndDeadline
      ? err.push(`please select the value`)
      : "";
    communicationChannel === "yes" && !doubtAnalysis
      ? err.push(`please select the value`)
      : "";
    !productInfo ? err.push(`please select the value`) : "";
    !satisfactionSurvey ? err.push(`please select the value`) : "";
    !supplierDetails ? err.push(`please select the value`) : "";
    supplierDetails === "yes" && !criticalSupplySurvey
      ? err.push(`please select the value`)
      : "";
    supplierDetails === "yes" && !alternateDeliveryOption
      ? err.push(`please select the value`)
      : "";
    !priorityOfLocalSupplier ? err.push(`please select the value`) : "";
    priorityOfLocalSupplier === "yes" && !priorityOfLocalSupplierPercentage
      ? err.push(`please enter the value`)
      : "";
    !purchaseCriteria ? err.push(`please select the value`) : "";
    !contractWithSupplier ? err.push(`please select the value`) : "";
    contractWithSupplier === "yes" && !labour
      ? err.push(`please select the value`)
      : "";
    contractWithSupplier === "yes" && !tax
      ? err.push(`please select the value`)
      : "";
    contractWithSupplier === "yes" && !sanitary
      ? err.push(`please select the value`)
      : "";
    contractWithSupplier === "yes" && !environmental
      ? err.push(`please select the value`)
      : "";
    // !relationshipBrief ? err.push(`please select the value`) : ""
    // !licenseAndPermit ? err.push(`please select the value`) : ""
    // !instructedToKnowLaw ? err.push(`please select the value`) : ""
    // !finedForLaw ? err.push(`please select the value`) : ""
    // !finedForLabourLaw ? err.push(`please select the value`) : ""
    // !finedForEnvironmentalLaw ? err.push(`please select the value`) : ""
    // !finedForHealthLaw ? err.push(`please select the value`) : ""
    // !lawBrief ? err.push(`please select the value`) : ""
    setErrors(err);
    if (err.length) return false;
    return true;
  };
  // const errCheck =()=>{
  //   if(errors && errors.length>0){
  //     const firstErr = errors.filter(err=>err.)
  //   }
  // }
  // if (search) {
  //   filteredProducts = products.filter((product) =>
  //     product.name.toLowerCase().includes(search) || product.description.toLowerCase().includes(search)
  //   );
  // }

  const submit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setTopErrors("Please fill all the values")
      scrollToElement("#governance")
      return;
    }

    const data = {
      governanceAndManagementIntegrity,
      governanceAndManagementFinancial,
      governanceAndManagementInnovation,
      governanceAndManagementRelationship,
      governanceAndManagementComplianceWithLaws,
    };

    const response = await authAxios()({
      url: `sellers/${seller.id}`,
      method: "PUT",
      data: {
        governanceAndManagementAnswers: data,
        qaStatus: "pending"
      },
    });
    console.log(response);

    if (response) {
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
          <h1 className="headline-2 mb-10">Hello {sellerName} , let's get started!</h1>
          <div className="overline-text mb-40">{data.subheading}</div>
          <ProgressBar />
          <div className="single-choice-row headline">
            <div className="subtitle-2"> 3.1 Integrity Program</div>
          </div>
          <div className=" mb-40  w-richtext">
            <p>{data.p1}</p>
            <p>{data.p2}</p>
            <p>{data.p3}</p>
            <p>{data.p4}</p>
            <p>{data.p5}</p>
          </div>

          <div className="settings-block" id="governance">
            <h3 className="headline-5 mb-50">Governance and Management</h3>
            <div className="w-form">
              {topError && <Message text={topError} status={-1} />}
              {topError && <br />}
              <form>
                <Governance_Management_Integrity
                  directorAct={directorAct}
                  setDirectorAct={setDirectorAct}
                  responsibleForIrregularities={responsibleForIrregularities}
                  setResponsibleForIrregularities={
                    setResponsibleForIrregularities
                  }
                  principleOfBusinessConduct={principleOfBusinessConduct}
                  setPrincipleOfBusinessConduct={setPrincipleOfBusinessConduct}
                  channelForEmployee={channelForEmployee}
                  setChannelForEmployee={setChannelForEmployee}
                  integrityBrief={integrityBrief}
                  setIntegrityBrief={setIntegrityBrief}
                  checkBoxStyle={checkBoxStyle}
                  data={data}
                />

                <Governance_Management_Financial
                  financialPlan={financialPlan}
                  setFinancialPlan={setFinancialPlan}
                  financialPerformance={financialPerformance}
                  setFinancialPerformance={setFinancialPerformance}
                  monitoringManagement={monitoringManagement}
                  setMonitoringManagement={setMonitoringManagement}
                  discloseInfo={discloseInfo}
                  setDiscloseInfo={setDiscloseInfo}
                  financialBrief={financialBrief}
                  setFinancialBrief={setFinancialBrief}
                  checkBoxStyle={checkBoxStyle}
                  data={data}
                />

                <Governance_Management_Innovation
                  efficiency={efficiency}
                  setEfficiency={setEfficiency}
                  qualityOfProduct={qualityOfProduct}
                  setQualityOfProduct={setQualityOfProduct}
                  improvedProtfolio={improvedProtfolio}
                  setImprovedProtfolio={setImprovedProtfolio}
                  benefitInItsDimensions={benefitInItsDimensions}
                  setBenefitInItsDimensions={setBenefitInItsDimensions}
                  RND={RND}
                  setRND={setRND}
                  involvingCustomers={involvingCustomers}
                  setInvolvingCustomers={setInvolvingCustomers}
                  innovationBrief={innovationBrief}
                  setInnovationBrief={setInnovationBrief}
                  checkBoxStyle={checkBoxStyle}
                  data={data}
                />

                <Governance_Management_Relationship
                  communicationChannel={communicationChannel}
                  setCommunicationChannel={setCommunicationChannel}
                  answerReceived={answerReceived}
                  setAnswerReceived={setAnswerReceived}
                  goalAndDeadline={goalAndDeadline}
                  setGoalAndDeadline={setGoalAndDeadline}
                  doubtAnalysis={doubtAnalysis}
                  setDoubtAnalysis={setDoubtAnalysis}
                  productInfo={productInfo}
                  setProductInfo={setProductInfo}
                  satisfactionSurvey={satisfactionSurvey}
                  setSatisfactionSurvey={setSatisfactionSurvey}
                  supplierDetails={supplierDetails}
                  setSupplierDetails={setSupplierDetails}
                  criticalSupplySurvey={criticalSupplySurvey}
                  setCriticalSupplySurvey={setCriticalSupplySurvey}
                  alternateDeliveryOption={alternateDeliveryOption}
                  setAlternateDeliveryOption={setAlternateDeliveryOption}
                  priorityOfLocalSupplier={priorityOfLocalSupplier}
                  setPriorityOfLocalSupplier={setPriorityOfLocalSupplier}
                  priorityOfLocalSupplierPercentage={
                    priorityOfLocalSupplierPercentage
                  }
                  setpriorityOfLocalSupplierPercentage={
                    setpriorityOfLocalSupplierPercentage
                  }
                  purchaseCriteria={purchaseCriteria}
                  setPurchaseCriteria={setPurchaseCriteria}
                  contractWithSupplier={contractWithSupplier}
                  setContractWithSupllier={setContractWithSupllier}
                  labour={labour}
                  setLabour={setLabour}
                  tax={tax}
                  setTax={setTax}
                  sanitary={sanitary}
                  setSanitary={setSanitary}
                  environmental={environmental}
                  setEnvironmental={setEnvironmental}
                  relationshipBrief={relationshipBrief}
                  setRelationshipBrief={setRelationshipBrief}
                  checkBoxStyle={checkBoxStyle}
                  data={data}
                />

                <Governance_Management_Law
                  licenseAndPermit={licenseAndPermit}
                  setLicenseAndPermit={setLicenseAndPermit}
                  instructedToKnowLaw={instructedToKnowLaw}
                  setInstructedToKnowLaw={setInstructedToKnowLaw}
                  finedForLaw={finedForLaw}
                  setFinedForLaw={setFinedForLaw}
                  finedForLabourLaw={finedForLabourLaw}
                  setFinedForLabourLaw={setFinedForLabourLaw}
                  finedForEnvironmentalLaw={finedForEnvironmentalLaw}
                  setFinedForEnvironmentalLaw={setFinedForEnvironmentalLaw}
                  finedForHealthLaw={finedForHealthLaw}
                  setFinedForHealthLaw={setFinedForHealthLaw}
                  lawBrief={lawBrief}
                  setLawBrief={setLawBrief}
                  checkBoxStyle={checkBoxStyle}
                  data={data}
                />
                <br />
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
export default Seller_Governance_Management;
