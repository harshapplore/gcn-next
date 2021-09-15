import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ProgressBar from "./Utils/ProgressBar";

import { authAxios } from "@/setups/axios";

// import Select from "@/shared/Select";
// import CheckBox from "@/shared/Checkbox";
import Message from "@/shared/Message";
import Social_Valuing_Diversity from "./Social_Valuing_Diversity";
import Social_Professional_Developement from "./Social_Professional_Developement";
import Social_Health_Safety from "./Social_Health_Safety";
import Social_StackHolders_relationship from "./Social_StackHolders_relationship";
// import Button from "@/shared/Button";


const data = {
    heading: "Hello Thomas, let's get started!",
    subheading: "Seller Questionnaire",

    p1: `All business segments face, in their own way, the impacts of globalization and the cultural and demographic changes of societies.`,
    p2: `For many companies, the adoption of diversity in the workforce, in addition to being an ethical commitment, has proven to be a path to competitiveness. To this end, companies have invested in actions to attract, maintain, and encourage an increasingly diversified staff, considering issues such as the socioeconomic status of employees, work style, opinion, age, nationality, marital status, sexual orientation, identity in gender, physical or mental disability and health conditions, among other differences. They are also becoming more inclusive, creating work environments that are receptive to traditionally discriminated workers, stigmatized or marginalized.`,
    p3: `Practicing and valuing diversity are actions that translate into combating prejudice and discrimination. However, even if it is easy to accept the premise that prejudice must be fought, it is complex to convert this proposition into effective changes in cultures, behaviours, habits, and routines.`,
    p4: `Investing in professional development does not have to break the bank. Nowadays, companies can establish partnerships with educational institutions that offer discounts or scholarships for courses that can improve the staff's technical knowledge. Online training has also become very affordable.`,
    p5: `When this is not possible, the company can opt for other alternatives such as recognize the employees who train themselves by reclassifying their position and salary or offering some type of reward, to obtain satisfactory results for both parties.`,
    p6: `The importance of an employee being happy when working for a company is increasingly recognized. And this satisfaction does not depend only on remuneration – it is also given by the recognition of its results, by offering benefits and by promoting healthy spaces for coexistence.`,
    p7: ` By investing in quality-of-life actions, the employer policies can impact several aspects of the health of the company, which in turn, can positively influence its performance in the market.`,
    p8: `“Community” refers to people or groups of people from “residential or social settlements located in a geographic area that has physical proximity to an organization's facilities or that is within an organization's areas of impact. The area and community members affected by an organization's impacts will vary according to the context and, most importantly, according to the size and nature of those impacts. However, in general, the term community can also be understood as a group of people who have common characteristics, such as, for example, a 'virtual' community related to a particular issue”.`,
    p9: `They are individuals or groups that may affect the company, through their opinions or actions. Also, those that can be affected by the company: employees, suppliers, consumers, community, government, and funders, among others.`,
    p10: `There is an increasing tendency to deem stakeholder those who consider themselves as such and, in each situation, the company should seek to map the stakeholders involved.`,
    q1: `What are stakeholders?`

};

const Seller_Social = ({ nextPage }) => {
    const { seller } = useSelector((state) => state.user);

    const [diversityCriteria, setDiversityCriteria] = useState("");
    const [salaryRangeAndEligibily, setSalaryRangeAndEligibily] = useState("")
    const [grievanceChannels, setGrievanceChannels] = useState("")
    const [diversityBrief, setDiversityBrief] = useState("")

    const [trainingToEmployee, setTrainingToEmployee] = useState("");
    const [valuesAndEncourages, setValuesAndEncourages] = useState("")
    const [subsidizeCourse, setSubsidizeCourse] = useState("")
    const [incentiveRelated, setIncentiveRelated] = useState("")
    const [degreeOfSatisfaction, setDegreeOfSatisfaction] = useState("")
    const [adminsSoftSkills, setAdminsSoftSkills] = useState("")
    const [professionalBrief, setProfessionalBrief] = useState("")

    const [pleasantEnvironment, setPleasantEnvironment] = useState("")
    const [uptodateDocs, setUptodateDocs] = useState("")
    const [accidentPreventions, setAccidentPreventions] = useState("")
    const [useOfPPE, setUseOfPPE] = useState("")
    const [moralHarrasmentPrevention, setMoralHarrasmentPrevention] = useState("")
    const [sexualHarrasmentPrevention, setSexualHarrasmentPrevention] = useState("")
    const [teamForEmployeeWellness, setTeamForEmployeeWellness] = useState("")
    const [friendlyWorkEnvironment, setFriendlyWorkEnvironment] = useState("")
    const [safetyBrief, setSafetyBrief] = useState("")

    const [dialogChannel, setDialogChannel] = useState("")
    const [encouragingValunteer, setEncouragingValunteer] = useState("")
    const [investInSocialProject, setInvestInSocialProject] = useState("")
    const [investPercentage, setInvestPercentage] = useState("")
    const [obtainedBenifits, setObtainedBenifits] = useState("")
    const [stackHoldersBrief, setStackHoldersBrief] = useState("")

    const checkBoxStyle = { opacity: 0, position: "absolute", zIndex: -1 }

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (seller.socialAnswers) {
            setDiversityCriteria(seller.socialAnswers.diversityCriteria)
            setSalaryRangeAndEligibily(seller.socialAnswers.salaryRangeAndEligibily)
            setGrievanceChannels(seller.socialAnswers.grievanceChannels)
            setDiversityBrief(seller.socialAnswers.diversityBrief)
            setTrainingToEmployee(seller.socialAnswers.trainingToEmployee)
            setValuesAndEncourages(seller.socialAnswers.valuesAndEncourages)
            setSubsidizeCourse(seller.socialAnswers.subsidizeCourse)
            setIncentiveRelated(seller.socialAnswers.incentiveRelated)
            setDegreeOfSatisfaction(seller.socialAnswers.degreeOfSatisfaction)
            setAdminsSoftSkills(seller.socialAnswers.adminsSoftSkills)
            setProfessionalBrief(seller.socialAnswers.professionalBrief)
            setPleasantEnvironment(seller.socialAnswers.pleasantEnvironment)
            setUptodateDocs(seller.socialAnswers.uptodateDocs)
            setAccidentPreventions(seller.socialAnswers.accidentPreventions)
            setUseOfPPE(seller.socialAnswers.useOfPPE)
            setMoralHarrasmentPrevention(seller.socialAnswers.moralHarrasmentPrevention)
            setSexualHarrasmentPrevention(seller.socialAnswers.sexualHarrasmentPrevention)
            setTeamForEmployeeWellness(seller.socialAnswers.teamForEmployeeWellness)
            setFriendlyWorkEnvironment(seller.socialAnswers.friendlyWorkEnvironment)
            setSafetyBrief(seller.socialAnswers.safetyBrief)
            setDialogChannel(seller.socialAnswers.dialogChannel)
            setEncouragingValunteer(seller.socialAnswers.encouragingValunteer)
            setInvestInSocialProject(seller.socialAnswers.investInSocialProject)
            setInvestPercentage(seller.socialAnswers.investPercentage)
            setObtainedBenifits(seller.socialAnswers.obtainedBenifits)
            setStackHoldersBrief(seller.socialAnswers.stackHoldersBrief)
        }
    }, [seller]);



    const validate = () => {
        const err = [];
        !diversityCriteria ? err.push(`please select the value`) : ""
        !salaryRangeAndEligibily ? err.push(`please select the value`) : ""
        !grievanceChannels ? err.push(`please select the value`) : ""
        !checkBoxStyle ? err.push(`please select the value`) : ""
        !diversityBrief ? err.push(`please select the value`) : ""
        !pleasantEnvironment ? err.push(`please select the value`) : ""
        !uptodateDocs ? err.push(`please select the value`) : ""
        !accidentPreventions ? err.push(`please select the value`) : ""
        !useOfPPE ? err.push(`please select the value`) : ""
        !moralHarrasmentPrevention ? err.push(`please select the value`) : ""
        !sexualHarrasmentPrevention ? err.push(`please select the value`) : ""
        !teamForEmployeeWellness ? err.push(`please select the value`) : ""
        !friendlyWorkEnvironment ? err.push(`please select the value`) : ""
        !safetyBrief ? err.push(`please select the value`) : ""
        !trainingToEmployee ? err.push(`please select the value`) : ""
        !valuesAndEncourages ? err.push(`please select the value`) : ""
        !subsidizeCourse ? err.push(`please select the value`) : ""
        !incentiveRelated ? err.push(`please select the value`) : ""
        !degreeOfSatisfaction ? err.push(`please select the value`) : ""
        !adminsSoftSkills ? err.push(`please select the value`) : ""
        !professionalBrief ? err.push(`please select the value`) : ""
        !dialogChannel ? err.push(`please select the value`) : ""
        !encouragingValunteer ? err.push(`please select the value`) : ""
        !investInSocialProject ? err.push(`please select the value`) : ""
        investInSocialProject === "yes" && !investPercentage ? err.push(`please enter the value`) : ""
        !obtainedBenifits ? err.push(`please select the value`) : ""
        !stackHoldersBrief ? err.push(`please enter the value`) : ""
        setErrors(err);
        if (err.length) return false;
        return true;
    };

    const submit = async (e) => {
        e.preventDefault();

        console.log(errors)
        if (!validate()) return;


        const data = {
            diversityCriteria,
            salaryRangeAndEligibily,
            grievanceChannels,
            checkBoxStyle,
            diversityBrief,
            pleasantEnvironment,
            uptodateDocs,
            accidentPreventions,
            useOfPPE,
            moralHarrasmentPrevention,
            sexualHarrasmentPrevention,
            teamForEmployeeWellness,
            friendlyWorkEnvironment,
            safetyBrief,
            trainingToEmployee,
            valuesAndEncourages,
            subsidizeCourse,
            incentiveRelated,
            degreeOfSatisfaction,
            adminsSoftSkills,
            professionalBrief,
            dialogChannel,
            encouragingValunteer,
            investInSocialProject,
            investPercentage,
            obtainedBenifits,
            stackHoldersBrief,
        }
        const response = await authAxios()({
            url: `sellers/${seller.id}`,
            method: "PUT",
            data: {
                socialAnswers: data,
            },
        });
        if (response.data.socialAnswers) {
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
                        <h3 className="headline-5 mb-50">4. Social</h3>
                        <div className="w-form">
                            <form id="email-form-7" name="email-form-7" data-name="Email Form 7">
                                <Social_Valuing_Diversity
                                    diversityCriteria={diversityCriteria}
                                    setDiversityCriteria={setDiversityCriteria}
                                    salaryRangeAndEligibily={salaryRangeAndEligibily}
                                    setSalaryRangeAndEligibily={setSalaryRangeAndEligibily}
                                    grievanceChannels={grievanceChannels}
                                    setGrievanceChannels={setGrievanceChannels}
                                    diversityBrief={diversityBrief}
                                    setDiversityBrief={setDiversityBrief}
                                    checkBoxStyle={checkBoxStyle}
                                />
                                <Social_Professional_Developement
                                    trainingToEmployee={trainingToEmployee}
                                    setTrainingToEmployee={setTrainingToEmployee}
                                    valuesAndEncourages={valuesAndEncourages}
                                    setValuesAndEncourages={setValuesAndEncourages}
                                    subsidizeCourse={subsidizeCourse}
                                    setSubsidizeCourse={setSubsidizeCourse}
                                    incentiveRelated={incentiveRelated}
                                    setIncentiveRelated={setIncentiveRelated}
                                    degreeOfSatisfaction={degreeOfSatisfaction}
                                    setDegreeOfSatisfaction={setDegreeOfSatisfaction}
                                    adminsSoftSkills={adminsSoftSkills}
                                    setAdminsSoftSkills={setAdminsSoftSkills}
                                    professionalBrief={professionalBrief}
                                    setProfessionalBrief={setProfessionalBrief}
                                    checkBoxStyle={checkBoxStyle}
                                    data={data}
                                />

                                <Social_Health_Safety
                                    pleasantEnvironment={pleasantEnvironment}
                                    setPleasantEnvironment={setPleasantEnvironment}
                                    uptodateDocs={uptodateDocs}
                                    setUptodateDocs={setUptodateDocs}
                                    accidentPreventions={accidentPreventions}
                                    setAccidentPreventions={setAccidentPreventions}
                                    useOfPPE={useOfPPE}
                                    setUseOfPPE={setUseOfPPE}
                                    moralHarrasmentPrevention={moralHarrasmentPrevention}
                                    setMoralHarrasmentPrevention={setMoralHarrasmentPrevention}
                                    sexualHarrasmentPrevention={sexualHarrasmentPrevention}
                                    setSexualHarrasmentPrevention={setSexualHarrasmentPrevention}
                                    teamForEmployeeWellness={teamForEmployeeWellness}
                                    setTeamForEmployeeWellness={setTeamForEmployeeWellness}
                                    friendlyWorkEnvironment={friendlyWorkEnvironment}
                                    setFriendlyWorkEnvironment={setFriendlyWorkEnvironment}
                                    safetyBrief={safetyBrief}
                                    setSafetyBrief={setSafetyBrief}
                                    checkBoxStyle={checkBoxStyle}
                                    data={data}
                                />

                                <Social_StackHolders_relationship
                                    dialogChannel={dialogChannel}
                                    setDialogChannel={setDialogChannel}
                                    encouragingValunteer={encouragingValunteer}
                                    setEncouragingValunteer={setEncouragingValunteer}
                                    investInSocialProject={investInSocialProject}
                                    setInvestInSocialProject={setInvestInSocialProject}
                                    investPercentage={investPercentage}
                                    setInvestPercentage={setInvestPercentage}
                                    obtainedBenifits={obtainedBenifits}
                                    setObtainedBenifits={setObtainedBenifits}
                                    stackHoldersBrief={stackHoldersBrief}
                                    setStackHoldersBrief={setStackHoldersBrief}
                                    checkBoxStyle={checkBoxStyle}
                                    data={data}
                                />

                                {errors && errors.length > 0 && errors.map(error =>
                                    <Message text={error} status={-1} />)
                                }
                                <div className="button blue" style={{ marginTop: "20px" }} onClick={submit}>Continue</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seller_Social;