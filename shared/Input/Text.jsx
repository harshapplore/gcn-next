const TextInput = ({ value, placeholder, setValue, error }) => {

  return (
    <div class="input-wrapper">
      <input
        type="text"
        class={"text-field w-input" + (error ? " text-field--error" : "")}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />

      {error && (
        <div class="input-error">
          Error: 
          <span class="input-error__message"> {error} </span>
        </div>
      )}
    </div>
  );
};

export default TextInput;
