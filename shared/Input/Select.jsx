export const Select = ({ choices, error, required, value, setValue, placeholder }) => {
  return (
    <>
      <select
        required={required}
        className={"text-field w-input" + (error ? " text-field--error" : "")}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {!value && <option value=""> {placeholder || "Select One"} </option>}
        {choices.map((choice, index) => (
          <option key={choice} value={index}>
            {choice}
          </option>
        ))}
      </select>

      {error && (
        <div class="input-error">
          Error:
          <span class="input-error__message"> {error} </span>
        </div>
      )}
    </>
  );
};

export default Select;
