const Option = ({text}) => {
  return <div className="ob-row">
    <div className="ob-name">
      <div>{text}</div>
    </div>
    <div className="ob-radio">
      <label className="checkbox-field w-clearfix w-radio">
        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input" />
        <input
          type="radio"
          data-name="vision"
          id="Yes"
          name="vision"
          defaultValue="Yes"
          required
          style={{
            opacity: 0,
            position: "absolute",
            zIndex: -1,
          }}
        />
        <span htmlFor="Yes" className="checkbox-label w-form-label">
          Yes
        </span>
      </label>
    </div>
    <div className="ob-radio">
      <label className="checkbox-field w-clearfix w-radio">
        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input" />
        <input
          type="radio"
          data-name="vision"
          id="No"
          name="vision"
          defaultValue="No"
          required
          style={{
            opacity: 0,
            position: "absolute",
            zIndex: -1,
          }}
        />
        <span htmlFor="No" className="checkbox-label w-form-label">
          No
        </span>
      </label>
    </div>
    <div className="ob-radio">
      <label className="checkbox-field w-clearfix w-radio">
        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input" />
        <input
          type="radio"
          data-name="vision"
          id="Planned"
          name="vision"
          defaultValue="Planned"
          required
          style={{
            opacity: 0,
            position: "absolute",
            zIndex: -1,
          }}
        />
        <span htmlFor="Planned" className="checkbox-label w-form-label">
          Planned
        </span>
      </label>
    </div>
    <div className="ob-radio">
      <label className="checkbox-field w-clearfix w-radio">
        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input" />
        <input
          type="radio"
          data-name="vision"
          id="NA"
          name="vision"
          defaultValue="NA"
          required
          style={{
            opacity: 0,
            position: "absolute",
            zIndex: -1,
          }}
        />
        <span htmlFor="NA" className="checkbox-label w-form-label">
          N/A
        </span>
      </label>
    </div>
  </div>;
};

export default Option;