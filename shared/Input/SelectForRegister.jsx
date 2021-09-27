export const SelectForRegister = ({
  choices,
  error,
  required,
  value,
  setValue,
  placeholder,
}) => {
  return (
    <div className="input-wrapper">
      <select
        required={required}
        className={"text-field w-input" + (error ? " text-field--error" : "")}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value={placeholder}> {placeholder} </option>
        {choices.map((choice, index) => (
          <option key={choice} value={index}>
            {choice}
          </option>
        ))}
      </select>

      {error && (
        <div className="input-error">
          Error:
          <span className="input-error__message"> {error} </span>
        </div>
      )}
    </div>
  );
};

export default SelectForRegister;
