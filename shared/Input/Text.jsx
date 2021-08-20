const TextInput = ({ type, value, placeholder, setValue, error }) => {
  return (
    <div className="input-wrapper">
      <input
        type={type ? type : "text"}
        className={"text-field w-input" + (error ? " text-field--error" : "")}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />

      {error && (
        <div className="input-error">
          Error:
          <span className="input-error__message"> {error} </span>
        </div>
      )}
    </div>
  );
};

export default TextInput;
