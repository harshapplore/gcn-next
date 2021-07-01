const Select = ({ choices, required, value, setValue, defaultValue }) => {
  return (
    <div className="select-wrapper">
      <select
        required={required}
        className="text-field pills w-select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value> {defaultValue || "Select One"} </option>
        {choices.map((choice) => (
          <option key={choice} value={choice}>
            {choice}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
