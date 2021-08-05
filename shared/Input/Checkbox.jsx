const CheckBox = ({ text, value, setValue }) => {
  return (
    <label className="w-checkbox checkbox-field">
      <div
        className={
          "w-checkbox-input w-checkbox-input--inputType-custom checkbox" +
          (value ? " w--redirected-checked" : "")
        }
        onClick={() => setValue(!value ? true : false)}
      />
      <span className="checkbox-label w-form-label">{text}</span>
    </label>
  );
};

export default CheckBox;