import React from 'react'

const Governance_Management_Law = ({
    licenseAndPermit,
    setLicenseAndPermit,
    instructedToKnowLaw,
    setInstructedToKnowLaw,
    finedForLaw,
    setFinedForLaw,
    finedForLabourLaw,
    setFinedForLabourLaw,
    finedForEnvironmentalLaw,
    setFinedForEnvironmentalLaw,
    finedForHealthLaw,
    setFinedForHealthLaw,
    lawBrief,
    setLawBrief,
    checkBoxStyle,
    data,
}) => {
    return (
        <>
            <div className="single-choice-row headline">
                <div className="subtitle-2">3.5 Compliance with labor, tax and environmental laws</div>
            </div>
            <p>{data.p13}</p>
            <p>{data.p14}</p>
            <p>{data.p15}</p>
            <p>{data.p16}</p>
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
                <div>Has the necessary licenses and permits for its operation.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${licenseAndPermit === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setLicenseAndPermit("yes")}
                        value={licenseAndPermit}
                        checked={licenseAndPermit === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${licenseAndPermit === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setLicenseAndPermit("no")}
                        value={licenseAndPermit}
                        checked={licenseAndPermit === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${licenseAndPermit === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setLicenseAndPermit("considering or planning")}
                        value={licenseAndPermit}
                        checked={licenseAndPermit === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${licenseAndPermit === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setLicenseAndPermit("not applicable")}
                        value={licenseAndPermit}
                        checked={licenseAndPermit === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Instructs its employees to know the laws they must comply with.</div>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${instructedToKnowLaw === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setInstructedToKnowLaw("yes")}
                        value={instructedToKnowLaw}
                        checked={instructedToKnowLaw === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${instructedToKnowLaw === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setInstructedToKnowLaw("no")}
                        value={instructedToKnowLaw}
                        checked={instructedToKnowLaw === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${instructedToKnowLaw === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setInstructedToKnowLaw("considering or planning")}
                        value={instructedToKnowLaw}
                        checked={instructedToKnowLaw === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${instructedToKnowLaw === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setInstructedToKnowLaw("not applicable")}
                        value={instructedToKnowLaw}
                        checked={instructedToKnowLaw === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Was fined for some type of non-compliance with tax laws or regulations.</div>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForLaw === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForLaw("yes")}
                        value={finedForLaw}
                        checked={finedForLaw === "yes"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForLaw === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForLaw("no")}
                        value={finedForLaw}
                        checked={finedForLaw === "no"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForLaw === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForLaw("considering or planning")}
                        value={finedForLaw}
                        checked={finedForLaw === "considering or planning"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForLaw === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForLaw("not applicable")}
                        value={finedForLaw}
                        checked={finedForLaw === "not applicable"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Was fined for some type of non-compliance with labor laws or regulations.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForLabourLaw === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForLabourLaw("yes")}
                        value={finedForLabourLaw}
                        checked={finedForLabourLaw === "Mr."}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForLabourLaw === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForLabourLaw("no")}
                        value={finedForLabourLaw}
                        checked={finedForLabourLaw === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForLabourLaw === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForLabourLaw("considering or planning")}
                        value={finedForLabourLaw}
                        checked={finedForLabourLaw === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForLabourLaw === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForLabourLaw("not applicable")}
                        value={finedForLabourLaw}
                        checked={finedForLabourLaw === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Was fined for some type of non-compliance with environmental laws or regulations.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForEnvironmentalLaw === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForEnvironmentalLaw("yes")}
                        value={finedForEnvironmentalLaw}
                        checked={finedForEnvironmentalLaw === "Mr."}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForEnvironmentalLaw === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForEnvironmentalLaw("no")}
                        value={finedForEnvironmentalLaw}
                        checked={finedForEnvironmentalLaw === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForEnvironmentalLaw === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForEnvironmentalLaw("considering or planning")}
                        value={finedForEnvironmentalLaw}
                        checked={finedForEnvironmentalLaw === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForEnvironmentalLaw === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForEnvironmentalLaw("not applicable")}
                        value={finedForEnvironmentalLaw}
                        checked={finedForEnvironmentalLaw === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Was fined for some type of non-compliance with health laws or regulations.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForHealthLaw === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForHealthLaw("yes")}
                        value={finedForHealthLaw}
                        checked={finedForHealthLaw === "Mr."}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForHealthLaw === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForHealthLaw("no")}
                        value={finedForHealthLaw}
                        checked={finedForHealthLaw === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForHealthLaw === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForHealthLaw("considering or planning")}
                        value={finedForHealthLaw}
                        checked={finedForHealthLaw === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${finedForHealthLaw === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setFinedForHealthLaw("not applicable")}
                        value={finedForHealthLaw}
                        checked={finedForHealthLaw === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <textarea
                value={lawBrief}
                onChange={(e) => setLawBrief(e.target.value)}
                placeholder="(If any) Use this space to briefly tell us if your company needs license/permits to work, what is the period for renewal of the main licenses/permits and how this process takes place. Clarify the reasons why (by law) your company could be exempt from licenses/permits."
                maxlength="5000"
                className="input-x input-x--text-area vision-notes w-input" />
        </>
    )
}

export default Governance_Management_Law
