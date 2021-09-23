import React from "react"

const Social_StackHolders_relationship = ({
    dialogChannel,
    setDialogChannel,
    encouragingValunteer,
    setEncouragingValunteer,
    investInSocialProject,
    setInvestInSocialProject,
    investPercentage,
    setInvestPercentage,
    obtainedBenifits,
    setObtainedBenifits,
    stackHoldersBrief,
    setStackHoldersBrief,
    checkBoxStyle,
    data,

}) => {
    return (
        <>
            <div className=" mb-40  w-richtext">
                <div className="subtitle-2">4.4 Community and other stakeholders’ relationships</div>
                <br />
                <p>{data.p8}</p>
                <p><strong>{data.q1}</strong></p>
                <p>{data.p9}</p>
                <p>{data.p10}</p>
            </div>

            <div className="single-choice-row headline">
                <div className="subtitle-2">4.4 Community and other stakeholders’ relationships</div>
                <div className="center">Yes</div>
                <div className="center">No</div>
                <div className="center">Considering or planning to implement</div>
                <div className="center">Not applicable</div>
            </div>
            <div className="assessment-spacer"></div>
            <div className="single-choice-row">
                <div>Has a dialogue channel with the community, such as a suggestion box, telephone number or email.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${dialogChannel === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setDialogChannel("yes")}
                        value={dialogChannel}
                        checked={dialogChannel === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${dialogChannel === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setDialogChannel("no")}
                        value={dialogChannel}
                        checked={dialogChannel === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${dialogChannel === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setDialogChannel("considering or planning")}
                        value={dialogChannel}
                        checked={dialogChannel === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${dialogChannel === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setDialogChannel("not applicable")}
                        value={dialogChannel}
                        checked={dialogChannel === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Encourages volunteer work by its employees.</div>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${encouragingValunteer === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setEncouragingValunteer("yes")}
                        value={encouragingValunteer}
                        checked={encouragingValunteer === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${encouragingValunteer === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setEncouragingValunteer("no")}
                        value={encouragingValunteer}
                        checked={encouragingValunteer === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${encouragingValunteer === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setEncouragingValunteer("considering or planning")}
                        value={encouragingValunteer}
                        checked={encouragingValunteer === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${encouragingValunteer === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setEncouragingValunteer("not applicable")}
                        value={encouragingValunteer}
                        checked={encouragingValunteer === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Invests part of its profit in social projects</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${investInSocialProject === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setInvestInSocialProject("yes")}
                        value={investInSocialProject}
                        checked={investInSocialProject === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${investInSocialProject === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setInvestInSocialProject("no")}
                        value={investInSocialProject}
                        checked={investInSocialProject === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${investInSocialProject === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setInvestInSocialProject("considering or planning")}
                        value={investInSocialProject}
                        checked={investInSocialProject === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${investInSocialProject === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setInvestInSocialProject("not applicable")}
                        value={investInSocialProject}
                        checked={investInSocialProject === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            {investInSocialProject === "yes" &&
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>If so, to what extent (%)</div>
                    <input type="text"
                        onChange={(e => setInvestPercentage(e.target.value))}
                        value={investPercentage}
                        placeholder=" % *"
                        style={{ width: "45%", padding: "10px", borderRadius: "5px" }}
                    />

                </div>}

            <div className="single-choice-row">
                <div>As a result of its activity in the community, the company believes that it has obtained benefits for the business, such as increased sales, improved relations with suppliers, the acquisition of new contacts or customers or lower staff turnover, among others.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${obtainedBenifits === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setObtainedBenifits("yes")}
                        value={obtainedBenifits}
                        checked={obtainedBenifits === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${obtainedBenifits === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setObtainedBenifits("no")}
                        value={obtainedBenifits}
                        checked={obtainedBenifits === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${obtainedBenifits === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setObtainedBenifits("considering or planning")}
                        value={obtainedBenifits}
                        checked={obtainedBenifits === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${obtainedBenifits === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setObtainedBenifits("not applicable")}
                        value={obtainedBenifits}
                        checked={obtainedBenifits === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <textarea
                value={stackHoldersBrief}
                onChange={(e) => setStackHoldersBrief(e.target.value)}
                placeholder="(If any) Use this space to briefly tell us what actions the company practices and/or encourages with the community. What strategies the company adopts for communication and relationship with its stakeholders."
                maxLength="5000" className="input-x input-x--text-area vision-notes w-input" />

        </>
    )
}

export default Social_StackHolders_relationship
