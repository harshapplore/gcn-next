const CheckBox = ({ type, text, error, value, setValue }) => {
  return (
    <>
      <label
        className={
          "w-checkbox" +
          (type === "secondary" ? " check-main" : " checkbox-field")
        }
      >
        <div
          className={
            "w-checkbox-input w-checkbox-input--inputType-custom" +
            (type === "secondary" ? " checkbox-product-img" : " checkbox") +
            (value ? " w--redirected-checked" : "") +
            (error ? " checkbox-error" : "")
          }
          onClick={() => setValue(!value ? true : false)}
        />
        <span className={"checkbox-label w-form-label"}>{text}</span>
      </label>
      {error && (
        <div className="input-error">
          Error:
          <span className="input-error__message"> {error} </span>
        </div>
      )}
    </>
  );
};

export default CheckBox;
