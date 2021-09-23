import React from 'react'

const Governance_Management_Financial = ({
    financialPlan,
    setFinancialPlan,
    financialPerformance,
    setFinancialPerformance,
    monitoringManagement,
    setMonitoringManagement,
    discloseInfo,
    setDiscloseInfo,
    financialBrief,
    setFinancialBrief,
    checkBoxStyle,
    data,
}) => {
    return (
        <>
            <div className="single-choice-row headline">
                <div className="subtitle-2">3.2 Financial Management and Business Administration</div>
            </div>
            <p><strong>{data.q1}</strong></p>
            <p>{data.p6}</p>
            <p>{data.p7}</p>
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
                <div>Makes its financial planning and provides alternatives for the maintenance of its activities in times of falling demand for its products or services</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${financialPlan === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinancialPlan("yes")}
                        value={financialPlan}
                        checked={financialPlan === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${financialPlan === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinancialPlan("no")}
                        value={financialPlan}
                        checked={financialPlan === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${financialPlan === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinancialPlan("considering or planning")}
                        value={financialPlan}
                        checked={financialPlan === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${financialPlan === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinancialPlan("not applicable")}
                        value={financialPlan}
                        checked={financialPlan === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Manage its financial performance with control tools such as budget reviews, sales price and cash flow analysis.</div>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${financialPerformance === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinancialPerformance("yes")}
                        value={financialPerformance}
                        checked={financialPerformance === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${financialPerformance === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinancialPerformance("no")}
                        value={financialPerformance}
                        checked={financialPerformance === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${financialPerformance === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinancialPerformance("considering or planning")}
                        value={financialPerformance}
                        checked={financialPerformance === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${financialPerformance === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinancialPerformance("not applicable")}
                        value={financialPerformance}
                        checked={financialPerformance === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>It monitors its management through indicators from its different areas, such as Human Resources and Sales, among others.</div>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${monitoringManagement === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setMonitoringManagement("yes")}
                        value={monitoringManagement}
                        checked={monitoringManagement === "yes"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${monitoringManagement === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setMonitoringManagement("no")}
                        value={monitoringManagement}
                        checked={monitoringManagement === "no"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${monitoringManagement === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setMonitoringManagement("considering or planning")}
                        value={monitoringManagement}
                        checked={monitoringManagement === "considering or planning"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${monitoringManagement === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setMonitoringManagement("not applicable")}
                        value={monitoringManagement}
                        checked={monitoringManagement === "not applicable"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Discloses information about its management, presenting financial and non-financial information</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${discloseInfo === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setDiscloseInfo("yes")}
                        value={discloseInfo}
                        checked={discloseInfo === "Mr."}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${discloseInfo === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setDiscloseInfo("no")}
                        value={discloseInfo}
                        checked={discloseInfo === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${discloseInfo === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setDiscloseInfo("considering or planning")}
                        value={discloseInfo}
                        checked={discloseInfo === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${discloseInfo === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setDiscloseInfo("not applicable")}
                        value={discloseInfo}
                        checked={discloseInfo === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <textarea
                value={financialBrief}
                onChange={(e) => setFinancialBrief(e.target.value)}
                placeholder="(If any) Use this space to briefly tell us what strategy the company adopts for its financial management and to ensure transparency in communication with stakeholders."
                maxLength="5000"
                className="input-x input-x--text-area vision-notes w-input" />

        </>
    )
}

export default Governance_Management_Financial
