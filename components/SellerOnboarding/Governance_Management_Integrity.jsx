import React from 'react'

const Governance_Management_Integrity = ({
    directorAct,
    setDirectorAct,
    responsibleForIrregularities,
    setResponsibleForIrregularities,
    principleOfBusinessConduct,
    setPrincipleOfBusinessConduct,
    channelForEmployee,
    setChannelForEmployee,
    integrityBrief,
    setIntegrityBrief,
    checkBoxStyle
}) => {
    return (
        <>
            <div className="single-choice-row headline">
                <div className="subtitle-2">3.1 Integrity Program</div>
                <div className="center">Yes</div>
                <div className="center">No</div>
                <div className="center">Considering or planning to implement</div>
                <div className="center">Not applicable</div>
            </div>
            <div className="assessment-spacer"></div>
            <div className="single-choice-row">
                <div>The company's directors and managers act directly in creating a culture of integrity.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${directorAct === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setDirectorAct("yes")}
                        value={directorAct}
                        checked={directorAct === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${directorAct === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setDirectorAct("no")}
                        value={directorAct}
                        checked={directorAct === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${directorAct === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setDirectorAct("considering or planning")}
                        value={directorAct}
                        checked={directorAct === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${directorAct === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setDirectorAct("not applicable")}
                        value={directorAct}
                        checked={directorAct === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>There is constant updating of the assessment of your exposure to the risk of being held responsible for irregularities or unlawful acts against the public administration.</div>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${responsibleForIrregularities === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setResponsibleForIrregularities("yes")}
                        value={responsibleForIrregularities}
                        checked={responsibleForIrregularities === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${responsibleForIrregularities === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setResponsibleForIrregularities("no")}
                        value={responsibleForIrregularities}
                        checked={responsibleForIrregularities === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${responsibleForIrregularities === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setResponsibleForIrregularities("considering or planning")}
                        value={responsibleForIrregularities}
                        checked={responsibleForIrregularities === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${responsibleForIrregularities === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setResponsibleForIrregularities("not applicable")}
                        value={responsibleForIrregularities}
                        checked={responsibleForIrregularities === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>The company sets out principles of business conduct expected from employees</div>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${principleOfBusinessConduct === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setPrincipleOfBusinessConduct("yes")}
                        value={principleOfBusinessConduct}
                        checked={principleOfBusinessConduct === "yes"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${principleOfBusinessConduct === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setPrincipleOfBusinessConduct("no")}
                        value={principleOfBusinessConduct}
                        checked={principleOfBusinessConduct === "no"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${principleOfBusinessConduct === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setPrincipleOfBusinessConduct("considering or planning")}
                        value={principleOfBusinessConduct}
                        checked={principleOfBusinessConduct === "considering or planning"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${principleOfBusinessConduct === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setPrincipleOfBusinessConduct("not applicable")}
                        value={principleOfBusinessConduct}
                        checked={principleOfBusinessConduct === "not applicable"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>There are whistleblowing channels for employees to report suspicious, illegal or dishonest behavior in business without fear of punishment and retribution.</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${channelForEmployee === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setChannelForEmployee("yes")}
                        value={channelForEmployee}
                        checked={channelForEmployee === "Mr."}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${channelForEmployee === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setChannelForEmployee("no")}
                        value={channelForEmployee}
                        checked={channelForEmployee === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${channelForEmployee === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setChannelForEmployee("considering or planning")}
                        value={channelForEmployee}
                        checked={channelForEmployee === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${channelForEmployee === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="radio"
                        onChange={() => setChannelForEmployee("not applicable")}
                        value={channelForEmployee}
                        checked={channelForEmployee === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <textarea
                value={integrityBrief}
                onChange={(e) => setIntegrityBrief(e.target.value)}
                placeholder="(If any) Use this space to briefly tell us what mechanisms the company uses to ensure a culture of integrity."
                maxlength="5000"
                className="input-x input-x--text-area vision-notes w-input" />
        </>
    )
}

export default Governance_Management_Integrity
