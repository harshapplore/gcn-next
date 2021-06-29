const Select = ({ choices, required, value, setValue }) => {
  return (
    <div className="select-wrapper">
      <select
        required={required}
        className="text-field pills w-select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value> Select One </option>
        {choices.map((choice) => (
          <option key={choice} value={choice}> {choice} </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
