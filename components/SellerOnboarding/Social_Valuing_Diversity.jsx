import React from "react"

const Social_Valuing_Diversity = ({
    diversityCriteria,
    setDiversityCriteria,
    salaryRangeAndEligibily,
    setSalaryRangeAndEligibily,
    grievanceChannels,
    setGrievanceChannels,
    checkBoxStyle,
    diversityBrief,
    setDiversityBrief
}) => {
    return (
        <>
            <div className="single-choice-row headline">
                <div className="subtitle-2">4.1 Valuing diversity</div>
                <div className="center">Yes</div>
                <div className="center">No</div>
                <div className="center">Considering or planning to implement</div>
                <div className="center">Not applicable</div>
            </div>
            <div className="assessment-spacer"></div>
            <div className="single-choice-row">
                <div>4.1.1 - Recruits and promotes based NOT only on the individual’s ability, experience and performance, but also takes into consideration diversity criteria like their gender, age, religion, ethnicity or disabilities.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${diversityCriteria === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setDiversityCriteria("yes")}
                        value={diversityCriteria}
                        checked={diversityCriteria === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${diversityCriteria === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setDiversityCriteria("no")}
                        value={diversityCriteria}
                        checked={diversityCriteria === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${diversityCriteria === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setDiversityCriteria("considering or planning")}
                        value={diversityCriteria}
                        checked={diversityCriteria === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${diversityCriteria === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setDiversityCriteria("not applicable")}
                        value={diversityCriteria}
                        checked={diversityCriteria === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>4.1.2 - Applies the same salary range and eligibility to benefits and allowances for work of equal value, regardless of the employee’s personal attributes</div>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${salaryRangeAndEligibily === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSalaryRangeAndEligibily("yes")}
                        value={salaryRangeAndEligibily}
                        checked={salaryRangeAndEligibily === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${salaryRangeAndEligibily === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSalaryRangeAndEligibily("no")}
                        value={salaryRangeAndEligibily}
                        checked={salaryRangeAndEligibily === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${salaryRangeAndEligibily === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSalaryRangeAndEligibily("considering or planning")}
                        value={salaryRangeAndEligibily}
                        checked={salaryRangeAndEligibily === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${salaryRangeAndEligibily === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSalaryRangeAndEligibily("not applicable")}
                        value={salaryRangeAndEligibily}
                        checked={salaryRangeAndEligibily === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>4.1.3 - Provides grievance channels or regular occasions for employees to give their opinions and voice out their concerns</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${grievanceChannels === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setGrievanceChannels("yes")}
                        value={grievanceChannels}
                        checked={grievanceChannels === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${grievanceChannels === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setGrievanceChannels("no")}
                        value={grievanceChannels}
                        checked={grievanceChannels === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${grievanceChannels === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setGrievanceChannels("considering or planning")}
                        value={grievanceChannels}
                        checked={grievanceChannels === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${grievanceChannels === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setGrievanceChannels("not applicable")}
                        value={grievanceChannels}
                        checked={grievanceChannels === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <textarea
                value={diversityBrief}
                onChange={(e) => setDiversityBrief(e.target.value)}
                placeholder="(If any) Use this space to briefly tell us what strategies the company adopts to ensure equity in the hiring process and equal internal treatment."
                maxLength="5000" className="input-x input-x--text-area vision-notes w-input" />

        </>
    )
}

export default Social_Valuing_Diversity
