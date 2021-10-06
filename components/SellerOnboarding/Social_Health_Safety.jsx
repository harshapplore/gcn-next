import React from "react"

const Social_Health_Safety = ({
    pleasantEnvironment,
    setPleasantEnvironment,
    uptodateDocs,
    setUptodateDocs,
    accidentPreventions,
    setAccidentPreventions,
    useOfPPE,
    setUseOfPPE,
    moralHarrasmentPrevention,
    setMoralHarrasmentPrevention,
    sexualHarrasmentPrevention,
    setSexualHarrasmentPrevention,
    teamForEmployeeWellness,
    setTeamForEmployeeWellness,
    friendlyWorkEnvironment,
    setFriendlyWorkEnvironment,
    safetyBrief,
    setSafetyBrief,
    checkBoxStyle,
    data,

}) => {
    return (
        <>
            <div className=" mb-40  w-richtext">
                <div className="subtitle-2">4.3 Employee health and safety</div>
                <br />
                <p>{data.p6}</p>
                <p>{data.p7}</p>
            </div>

            <div className="single-choice-row headline">
                <div className="subtitle-2">4.3 Employee health and safety</div>
                <div className="center">Yes</div>
                <div className="center">No</div>
                <div className="center">Considering or planning to implement</div>
                <div className="center">Not applicable</div>
            </div>
            <div className="assessment-spacer"></div>
            <div className="single-choice-row">
                <div>4.3.1 - Offers to its employees a pleasant and safe physical environment, encouraging hygiene and health care.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${pleasantEnvironment === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setPleasantEnvironment("yes")}
                        value={pleasantEnvironment}
                        checked={pleasantEnvironment === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${pleasantEnvironment === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setPleasantEnvironment("no")}
                        value={pleasantEnvironment}
                        checked={pleasantEnvironment === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${pleasantEnvironment === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setPleasantEnvironment("considering or planning")}
                        value={pleasantEnvironment}
                        checked={pleasantEnvironment === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${pleasantEnvironment === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setPleasantEnvironment("not applicable")}
                        value={pleasantEnvironment}
                        checked={pleasantEnvironment === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>4.3.2 - Keeps all legal documents related to occupational health and safety up-to-date and complete, such as environmental risk analysis and incident and accident reports, among others.</div>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${uptodateDocs === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setUptodateDocs("yes")}
                        value={uptodateDocs}
                        checked={uptodateDocs === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${uptodateDocs === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setUptodateDocs("no")}
                        value={uptodateDocs}
                        checked={uptodateDocs === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${uptodateDocs === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setUptodateDocs("considering or planning")}
                        value={uptodateDocs}
                        checked={uptodateDocs === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${uptodateDocs === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setUptodateDocs("not applicable")}
                        value={uptodateDocs}
                        checked={uptodateDocs === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>4.3.3 - Trains and makes employees aware of accident or fire prevention.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${accidentPreventions === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setAccidentPreventions("yes")}
                        value={accidentPreventions}
                        checked={accidentPreventions === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${accidentPreventions === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setAccidentPreventions("no")}
                        value={accidentPreventions}
                        checked={accidentPreventions === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${accidentPreventions === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setAccidentPreventions("considering or planning")}
                        value={accidentPreventions}
                        checked={accidentPreventions === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${accidentPreventions === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setAccidentPreventions("not applicable")}
                        value={accidentPreventions}
                        checked={accidentPreventions === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>4.3.4 - Provides, trains, and raises awareness regarding the use of personal protective equipment (PPE)</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${useOfPPE === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setUseOfPPE("yes")}
                        value={useOfPPE}
                        checked={useOfPPE === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${useOfPPE === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setUseOfPPE("no")}
                        value={useOfPPE}
                        checked={useOfPPE === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${useOfPPE === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setUseOfPPE("considering or planning")}
                        value={useOfPPE}
                        checked={useOfPPE === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${useOfPPE === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setUseOfPPE("not applicable")}
                        value={useOfPPE}
                        checked={useOfPPE === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>4.3.5 - Has mechanisms to prevent and combat moral harassment.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${moralHarrasmentPrevention === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setMoralHarrasmentPrevention("yes")}
                        value={moralHarrasmentPrevention}
                        checked={moralHarrasmentPrevention === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${moralHarrasmentPrevention === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setMoralHarrasmentPrevention("no")}
                        value={moralHarrasmentPrevention}
                        checked={moralHarrasmentPrevention === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${moralHarrasmentPrevention === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setMoralHarrasmentPrevention("considering or planning")}
                        value={moralHarrasmentPrevention}
                        checked={moralHarrasmentPrevention === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${moralHarrasmentPrevention === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setMoralHarrasmentPrevention("not applicable")}
                        value={moralHarrasmentPrevention}
                        checked={moralHarrasmentPrevention === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>4.3.6 - Has mechanisms to prevent and combat sexual harassment.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${sexualHarrasmentPrevention === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSexualHarrasmentPrevention("yes")}
                        value={sexualHarrasmentPrevention}
                        checked={sexualHarrasmentPrevention === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${sexualHarrasmentPrevention === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSexualHarrasmentPrevention("no")}
                        value={sexualHarrasmentPrevention}
                        checked={sexualHarrasmentPrevention === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${sexualHarrasmentPrevention === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSexualHarrasmentPrevention("considering or planning")}
                        value={sexualHarrasmentPrevention}
                        checked={sexualHarrasmentPrevention === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${sexualHarrasmentPrevention === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setSexualHarrasmentPrevention("not applicable")}
                        value={sexualHarrasmentPrevention}
                        checked={sexualHarrasmentPrevention === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>4.3.7 - Has dedicated personnel or team(s) to oversee employee’s wellness</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${teamForEmployeeWellness === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setTeamForEmployeeWellness("yes")}
                        value={teamForEmployeeWellness}
                        checked={teamForEmployeeWellness === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${teamForEmployeeWellness === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setTeamForEmployeeWellness("no")}
                        value={teamForEmployeeWellness}
                        checked={teamForEmployeeWellness === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${teamForEmployeeWellness === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setTeamForEmployeeWellness("considering or planning")}
                        value={teamForEmployeeWellness}
                        checked={teamForEmployeeWellness === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${teamForEmployeeWellness === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setTeamForEmployeeWellness("not applicable")}
                        value={teamForEmployeeWellness}
                        checked={teamForEmployeeWellness === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>4.3.8 - Develops program(s) or provide resource(s) to create family-friendly work environment</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${friendlyWorkEnvironment === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setFriendlyWorkEnvironment("yes")}
                        value={friendlyWorkEnvironment}
                        checked={friendlyWorkEnvironment === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${friendlyWorkEnvironment === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setFriendlyWorkEnvironment("no")}
                        value={friendlyWorkEnvironment}
                        checked={friendlyWorkEnvironment === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${friendlyWorkEnvironment === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setFriendlyWorkEnvironment("considering or planning")}
                        value={friendlyWorkEnvironment}
                        checked={friendlyWorkEnvironment === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${friendlyWorkEnvironment === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setFriendlyWorkEnvironment("not applicable")}
                        value={friendlyWorkEnvironment}
                        checked={friendlyWorkEnvironment === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <textarea
                value={safetyBrief}
                onChange={(e) => setSafetyBrief(e.target.value)}
                placeholder="(If any) Use this space to briefly tell us what working environment conditions the company offers its employees. Is the use of PPE necessary/mandatory/encouraged? What strategies have been adopted to prevent harassment situations?"
                maxLength="5000" className="input-x input-x--text-area vision-notes w-input" />


        </>
    )
}

export default Social_Health_Safety
