const TextArea = ({ value, placeholder, setValue, error }) => {
  return (
    <div className="input-wrapper">
      <textarea
        placeholder={placeholder}
        className={
          "input-x input-x--text-area w-input" +
          (error ? " text-field--error" : "")
        }
        value={value}
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

export default TextArea;
