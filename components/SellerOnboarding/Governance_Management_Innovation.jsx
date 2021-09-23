import React from 'react'

const Governance_Management_Innovation = ({
    efficiency,
    setEfficiency,
    qualityOfProduct,
    setQualityOfProduct,
    improvedProtfolio,
    setImprovedProtfolio,
    benefitInItsDimensions,
    setBenefitInItsDimensions,
    RND,
    setRND,
    involvingCustomers,
    setInvolvingCustomers,
    innovationBrief,
    setInnovationBrief,
    checkBoxStyle,
    data,
}) => {
    return (
        <>
            <div className="single-choice-row headline">
                <div className="subtitle-2">3.3 Innovation</div>
            </div>
            <p>{data.p8}</p>
            <p>{data.p9}</p>
            <p>{data.p10}</p>
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
                <div>Reviews its processes to ensure greater efficiency in delivering its products or services</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${efficiency === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setEfficiency("yes")}
                        value={efficiency}
                        checked={efficiency === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${efficiency === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setEfficiency("no")}
                        value={efficiency}
                        checked={efficiency === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${efficiency === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setEfficiency("considering or planning")}
                        value={efficiency}
                        checked={efficiency === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${efficiency === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setEfficiency("not applicable")}
                        value={efficiency}
                        checked={efficiency === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Establishes criteria to guarantee the quality of its products or services.</div>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${qualityOfProduct === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setQualityOfProduct("yes")}
                        value={qualityOfProduct}
                        checked={qualityOfProduct === "yes"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${qualityOfProduct === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setQualityOfProduct("no")}
                        value={qualityOfProduct}
                        checked={qualityOfProduct === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${qualityOfProduct === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setQualityOfProduct("considering or planning")}
                        value={qualityOfProduct}
                        checked={qualityOfProduct === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${qualityOfProduct === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setQualityOfProduct("not applicable")}
                        value={qualityOfProduct}
                        checked={qualityOfProduct === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Continuously improves its portfolio of products or services, aiming to increase consumer satisfaction.</div>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${improvedProtfolio === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setImprovedProtfolio("yes")}
                        value={improvedProtfolio}
                        checked={improvedProtfolio === "yes"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${improvedProtfolio === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setImprovedProtfolio("no")}
                        value={improvedProtfolio}
                        checked={improvedProtfolio === "no"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${improvedProtfolio === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setImprovedProtfolio("considering or planning")}
                        value={improvedProtfolio}
                        checked={improvedProtfolio === "considering or planning"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${improvedProtfolio === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setImprovedProtfolio("not applicable")}
                        value={improvedProtfolio}
                        checked={improvedProtfolio === "not applicable"}
                        data-name="If so, is it periodically revised?"
                        id="Yes-2" name="If-so-is-it-periodically-revised" required=""
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Innovates its product or service portfolio, increasing the share of items that have synergy with sustainability and that generate benefits in one of its dimensions (economic-financial, social, environmental or ethical).</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${benefitInItsDimensions === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setBenefitInItsDimensions("yes")}
                        value={benefitInItsDimensions}
                        checked={benefitInItsDimensions === "Mr."}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${benefitInItsDimensions === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setBenefitInItsDimensions("no")}
                        value={benefitInItsDimensions}
                        checked={benefitInItsDimensions === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${benefitInItsDimensions === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setBenefitInItsDimensions("considering or planning")}
                        value={benefitInItsDimensions}
                        checked={benefitInItsDimensions === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${benefitInItsDimensions === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setBenefitInItsDimensions("not applicable")}
                        value={benefitInItsDimensions}
                        checked={benefitInItsDimensions === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Has a dedicated research and development team to drive business innovation</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${RND === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setRND("yes")}
                        value={RND}
                        checked={RND === "Mr."}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${RND === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setRND("no")}
                        value={RND}
                        checked={RND === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${RND === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setRND("considering or planning")}
                        value={RND}
                        checked={RND === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${RND === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setRND("not applicable")}
                        value={RND}
                        checked={RND === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <div className="single-choice-row">
                <div>Somehow involves its customers in the design of its products/services</div>

                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${involvingCustomers === "yes" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setInvolvingCustomers("yes")}
                        value={involvingCustomers}
                        checked={involvingCustomers === "Mr."}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${involvingCustomers === "no" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setInvolvingCustomers("no")}
                        value={involvingCustomers}
                        checked={involvingCustomers === "no"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">Yes</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${involvingCustomers === "considering or planning" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setInvolvingCustomers("considering or planning")}
                        value={involvingCustomers}
                        checked={involvingCustomers === "considering or planning"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">considering or planning</span>
                </label>
                <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
                    <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${involvingCustomers === "not applicable" ? " w--redirected-checked" : ""}`}></div>
                    <input
                        type="checkbox"
                        onChange={() => setInvolvingCustomers("not applicable")}
                        value={involvingCustomers}
                        checked={involvingCustomers === "not applicable"}
                        style={checkBoxStyle} />
                    <span htmlFor="Yes-5" className="hidden w-form-label">not applicable</span>
                </label>
            </div>
            <textarea
                value={innovationBrief}
                onChange={(e) => setInnovationBrief(e.target.value)}
                placeholder="(If any) Use this space to briefly tell us which innovations (related to the sustainability) your business model brings. What makes your product different and what requirements does your product/service have so that we can consider it sustainable?"
                maxLength="5000"
                className="input-x input-x--text-area vision-notes w-input" />
        </>
    )
}

export default Governance_Management_Innovation
