const CheckBox = ({ type, text, error, value, setValue }) => {
  return (
    <>
      <label
        className={
          "w-checkbox" +
          (type === "secondary" ? " check-main" : " checkbox-field")
        }
        onClick={() => setValue(!value ? true : false)}
      >
        <div
          className={
            "w-checkbox-input w-checkbox-input--inputType-custom cursor" +
            (type === "secondary" ? " checkbox-product-img" : " checkbox") +
            (value ? " w--redirected-checked" : "") +
            (error ? " checkbox-error" : "")
          }
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
