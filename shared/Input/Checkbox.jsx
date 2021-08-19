const CheckBox = ({ text, error, value, setValue }) => {
  return (
    <>
      <label className="w-checkbox checkbox-field">
        <div
          className={
            "w-checkbox-input w-checkbox-input--inputType-custom checkbox" +
            (value ? " w--redirected-checked" : "") +
            (error ? " checkbox-error" : "")
          }
          onClick={() => setValue(!value ? true : false)}
        />
        <span
          className={
            "checkbox-label w-form-label"
          }
        >
          {text}
        </span>
      </label>
      {error && (
        <div class="input-error">
          Error:
          <span class="input-error__message"> {error} </span>
        </div>
      )}
    </>
  );
};

export default CheckBox;
