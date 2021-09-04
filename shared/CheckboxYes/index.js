const CheckBoxYes = ({ text, value, setValue }) => {
    const checkboxStyle = { opacity: 0, position: "absolute", zIndex: -1 };
    return (
        //     <label className="vision-checkbox-field w-clearfix w-radio" style={{marginLeft:"30px"}}>
        //     <div
        //       className={
        //         "w-checkbox-input w-checkbox-input--inputType-custom checkbox" +
        //         (value ? " w--redirected-checked" : "")
        //       }
        //       onClick={() => setValue(!value? true : false)}
        //     />
        //     <span className="checkbox-label w-form-label">{text}</span>
        //   </label>

        <label className="vision-checkbox-field w-clearfix w-radio" style={{ marginLeft: "30px" }}>
            <div
                className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input  ${value==="yes" ? " w--redirected-checked" : ""}`}></div>
            <input
                type="radio"
                onChange={() => setValue()}
                value={value}
                checked={value==="yes"}
                style={checkboxStyle} 
            />
            <span htmlFor="Yes-5" className="hidden w-form-label">{text}</span>
        </label>
    );
};

export default CheckBox;
