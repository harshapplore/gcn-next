export const Select = ({
  choices,
  required,
  value,
  setValue,
  placeholder,
}) => {
  return (
    <>
      <select
        required={required}
        className="text-field select width-24 w-select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {!value && <option value="" > {placeholder || "Select One"} </option>}
        {choices.map((choice, index) => (
          <option key={choice} value={index}>
            {choice}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
