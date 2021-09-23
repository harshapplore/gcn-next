import React from 'react'

const Governance_Management_Relationship = ({
    communicationChannel,
    setCommunicationChannel,
    answerReceived,
    setAnswerReceived,
    goalAndDeadline,
    setGoalAndDeadline,
    doubtAnalysis,
    setDoubtAnalysis,
    productInfo,
    setProductInfo,
    satisfactionSurvey,
    setSatisfactionSurvey,
    supplierDetails,
    setSupplierDetails,
    criticalSupplySurvey,
    setCriticalSupplySurvey,
    alternateDeliveryOption,
    setAlternateDeliveryOption,
    priorityOfLocalSupplier,
    setPriorityOfLocalSupplier,
    priorityOfLocalSupplierPercentage,
    setpriorityOfLocalSupplierPercentage,
    purchaseCriteria,
    setPurchaseCriteria,
    contractWithSupplier,
    setContractWithSupllier,
    labour,
    setLabour,
    tax,
    setTax,
    sanitary,
    setSanitary,
    environmental,
    setEnvironmental,
    relationshipBrief,
    setRelationshipBrief,
    checkBoxStyle,
    data
}) => {
    return (
        <>
            <div className="single-choice-row headline">
                <div className="subtitle-2">3.4 Relationship and management of suppliers and customers.</div>
            </div>
            <p>{data.p11}</p>
            <p>{data.p12}</p>
            <br />
            <div className="single-choice-row headline">
                <div className="subtitle-2">The company :</div>
                <div className="center">Yes</div>
                <div className="center">No</div>
                <div className="center">Considering or planning to implement</div>
                <div className="center">Not applicable</div>
            </div>
            <div className="assessment-spacer"></div>


            <div className="single-choice-row">
                <div>Has a formal communication channel with its customers and suppliers, such as a suggestion box, phone number or e-mail to manage questions or complaints.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${communicationChannel === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setCommunicationChannel("yes")}
                        value={communicationChannel}
                        checked={communicationChannel === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${communicationChannel === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setCommunicationChannel("no")}
                        value={communicationChannel}
                        checked={communicationChannel === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${communicationChannel === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setCommunicationChannel("considering or planning")}
                        value={communicationChannel}
                        checked={communicationChannel === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${communicationChannel === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setCommunicationChannel("not applicable")}
                        value={communicationChannel}
                        checked={communicationChannel === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            {communicationChannel === "yes" && <div className="single-choice-row">
                <div>Answers or clarifies the questions received.</div>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${answerReceived === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setAnswerReceived("yes")}
                        value={answerReceived}
                        checked={answerReceived === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${answerReceived === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setAnswerReceived("no")}
                        value={answerReceived}
                        checked={answerReceived === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${answerReceived === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setAnswerReceived("considering or planning")}
                        value={answerReceived}
                        checked={answerReceived === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${answerReceived === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setAnswerReceived("not applicable")}
                        value={answerReceived}
                        checked={answerReceived === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>}
            {communicationChannel === "yes" && <div className="single-choice-row">
                <div>Stipulates goals and deadlines to solve the identified problems.</div>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${goalAndDeadline === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setGoalAndDeadline("yes")}
                        value={goalAndDeadline}
                        checked={goalAndDeadline === "yes"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${goalAndDeadline === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setGoalAndDeadline("no")}
                        value={goalAndDeadline}
                        checked={goalAndDeadline === "no"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${goalAndDeadline === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setGoalAndDeadline("considering or planning")}
                        value={goalAndDeadline}
                        checked={goalAndDeadline === "considering or planning"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${goalAndDeadline === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setGoalAndDeadline("not applicable")}
                        value={goalAndDeadline}
                        checked={goalAndDeadline === "not applicable"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>}
            {communicationChannel === "yes" && <div className="single-choice-row">
                <div>Analyzes the doubts, suggestions and complaints received and uses them as a tool to improve its activities.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${doubtAnalysis === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setDoubtAnalysis("yes")}
                        value={doubtAnalysis}
                        checked={doubtAnalysis === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${doubtAnalysis === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setDoubtAnalysis("no")}
                        value={doubtAnalysis}
                        checked={doubtAnalysis === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${doubtAnalysis === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setDoubtAnalysis("considering or planning")}
                        value={doubtAnalysis}
                        checked={doubtAnalysis === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${doubtAnalysis === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setDoubtAnalysis("not applicable")}
                        value={doubtAnalysis}
                        checked={doubtAnalysis === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>}
            <div className="single-choice-row">
                <div>The products or communication materials always contain clear instructions on how to contact the company, such as a mailing address, telephone number, website or e-mail.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${productInfo === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setProductInfo("yes")}
                        value={productInfo}
                        checked={productInfo === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${productInfo === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setProductInfo("no")}
                        value={productInfo}
                        checked={productInfo === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${productInfo === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setProductInfo("considering or planning")}
                        value={productInfo}
                        checked={productInfo === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${productInfo === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setProductInfo("not applicable")}
                        value={productInfo}
                        checked={productInfo === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Carries out a satisfaction survey among its customers at regular intervals to, based on the results, implement improvements in its products/services, including pre- and post-sales services, with transparency and ethics in relations.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${satisfactionSurvey === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSatisfactionSurvey("yes")}
                        value={satisfactionSurvey}
                        checked={satisfactionSurvey === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${satisfactionSurvey === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSatisfactionSurvey("no")}
                        value={satisfactionSurvey}
                        checked={satisfactionSurvey === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${satisfactionSurvey === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSatisfactionSurvey("considering or planning")}
                        value={satisfactionSurvey}
                        checked={satisfactionSurvey === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${satisfactionSurvey === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSatisfactionSurvey("not applicable")}
                        value={satisfactionSurvey}
                        checked={satisfactionSurvey === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>The company knows who its main suppliers are.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${supplierDetails === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSupplierDetails("yes")}
                        value={supplierDetails}
                        checked={supplierDetails === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${supplierDetails === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSupplierDetails("no")}
                        value={supplierDetails}
                        checked={supplierDetails === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${supplierDetails === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSupplierDetails("considering or planning")}
                        value={supplierDetails}
                        checked={supplierDetails === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${supplierDetails === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSupplierDetails("not applicable")}
                        value={supplierDetails}
                        checked={supplierDetails === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            {supplierDetails === "yes" && <div className="single-choice-row">
                <div>If so, does the company make a survey of critical suppliers, considering a possible impact on the interruption of its own products or services?</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${criticalSupplySurvey === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setCriticalSupplySurvey("yes")}
                        value={criticalSupplySurvey}
                        checked={criticalSupplySurvey === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${criticalSupplySurvey === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setCriticalSupplySurvey("no")}
                        value={criticalSupplySurvey}
                        checked={criticalSupplySurvey === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${criticalSupplySurvey === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setCriticalSupplySurvey("considering or planning")}
                        value={criticalSupplySurvey}
                        checked={criticalSupplySurvey === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${criticalSupplySurvey === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setCriticalSupplySurvey("not applicable")}
                        value={criticalSupplySurvey}
                        checked={criticalSupplySurvey === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>}
            {supplierDetails === "yes" && <div className="single-choice-row">
                <div>If so, does the company have alternatives to keep its deliveries or services even if there is an interruption by a supplier?</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${alternateDeliveryOption === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setAlternateDeliveryOption("yes")}
                        value={alternateDeliveryOption}
                        checked={alternateDeliveryOption === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${alternateDeliveryOption === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setAlternateDeliveryOption("no")}
                        value={alternateDeliveryOption}
                        checked={alternateDeliveryOption === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${alternateDeliveryOption === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setAlternateDeliveryOption("considering or planning")}
                        value={alternateDeliveryOption}
                        checked={alternateDeliveryOption === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${alternateDeliveryOption === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setAlternateDeliveryOption("not applicable")}
                        value={alternateDeliveryOption}
                        checked={alternateDeliveryOption === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>}
            <div className="single-choice-row">
                <div>Prioritizes purchasing from local suppliers (within 150 km radius).</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${priorityOfLocalSupplier === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setPriorityOfLocalSupplier("yes")}
                        value={priorityOfLocalSupplier}
                        checked={priorityOfLocalSupplier === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${priorityOfLocalSupplier === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setPriorityOfLocalSupplier("no")}
                        value={priorityOfLocalSupplier}
                        checked={priorityOfLocalSupplier === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${priorityOfLocalSupplier === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setPriorityOfLocalSupplier("considering or planning")}
                        value={priorityOfLocalSupplier}
                        checked={priorityOfLocalSupplier === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${priorityOfLocalSupplier === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setPriorityOfLocalSupplier("not applicable")}
                        value={priorityOfLocalSupplier}
                        checked={priorityOfLocalSupplier === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            {priorityOfLocalSupplier === "yes" &&
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>If so, to what extent (%)</div>
                    <input type="text"
                        onChange={(e => setpriorityOfLocalSupplierPercentage(e.target.value))}
                        value={priorityOfLocalSupplierPercentage}
                        placeholder=" % *"
                        style={{ width: "45%", padding: "10px", borderRadius: "5px" }}
                    />

                </div>}

            <div className="single-choice-row">
                <div>The company adopts purchase criteria that take into account the guarantee of origin, ensuring environmentally correct and socially fair production.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${purchaseCriteria === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setPurchaseCriteria("yes")}
                        value={purchaseCriteria}
                        checked={purchaseCriteria === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${purchaseCriteria === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setPurchaseCriteria("no")}
                        value={purchaseCriteria}
                        checked={purchaseCriteria === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${purchaseCriteria === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setPurchaseCriteria("considering or planning")}
                        value={purchaseCriteria}
                        checked={purchaseCriteria === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${purchaseCriteria === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setPurchaseCriteria("not applicable")}
                        value={purchaseCriteria}
                        checked={purchaseCriteria === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Establishes in its contracts with suppliers' clauses that require compliance with laws and regulations:</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${contractWithSupplier === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setContractWithSupllier("yes")}
                        value={contractWithSupplier}
                        checked={contractWithSupplier === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${contractWithSupplier === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setContractWithSupllier("no")}
                        value={contractWithSupplier}
                        checked={contractWithSupplier === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${contractWithSupplier === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setContractWithSupllier("considering or planning")}
                        value={contractWithSupplier}
                        checked={contractWithSupplier === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${contractWithSupplier === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setContractWithSupllier("not applicable")}
                        value={contractWithSupplier}
                        checked={contractWithSupplier === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            {contractWithSupplier === "yes" && <div className="single-choice-row">
                <div>Labour</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${labour === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setLabour("yes")}
                        value={labour}
                        checked={labour === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${labour === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setLabour("no")}
                        value={labour}
                        checked={labour === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${labour === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setLabour("considering or planning")}
                        value={labour}
                        checked={labour === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${labour === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setLabour("not applicable")}
                        value={labour}
                        checked={labour === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>}
            {contractWithSupplier === "yes" && <div className="single-choice-row">
                <div>Tax</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${tax === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setTax("yes")}
                        value={tax}
                        checked={tax === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${tax === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setTax("no")}
                        value={tax}
                        checked={tax === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${tax === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setTax("considering or planning")}
                        value={tax}
                        checked={tax === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${tax === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setTax("not applicable")}
                        value={tax}
                        checked={tax === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>}
            {contractWithSupplier === "yes" && <div className="single-choice-row">
                <div>Sanitary</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${sanitary === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSanitary("yes")}
                        value={sanitary}
                        checked={sanitary === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${sanitary === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSanitary("no")}
                        value={sanitary}
                        checked={sanitary === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${sanitary === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSanitary("considering or planning")}
                        value={sanitary}
                        checked={sanitary === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${sanitary === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSanitary("not applicable")}
                        value={sanitary}
                        checked={sanitary === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>}
            {contractWithSupplier === "yes" && <div className="single-choice-row">
                <div>Environmental</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${environmental === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setEnvironmental("yes")}
                        value={environmental}
                        checked={environmental === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${environmental === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setEnvironmental("no")}
                        value={environmental}
                        checked={environmental === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${environmental === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setEnvironmental("considering or planning")}
                        value={environmental}
                        checked={environmental === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${environmental === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setEnvironmental("not applicable")}
                        value={environmental}
                        checked={environmental === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>}
            <textarea
                value={relationshipBrief}
                onChange={(e) => setRelationshipBrief(e.target.value)}
                placeholder="(If any) Use this space to briefly tell us how the company relates to its suppliers and customers. Describe the channels of communication with and support to customers and criteria for selecting suppliers."
                maxLength="5000"
                className="input-x input-x--text-area vision-notes w-input" />
        </>
    )
}

export default Governance_Management_Relationship
