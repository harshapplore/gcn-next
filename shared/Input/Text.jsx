const TextInput = ({ value, placeholder, setValue, error }) => {
  return (
    <div class="input-wrapper">
      <inputs
        type="text"
        class="text-field text-field--error w-input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />

      {error && (
        <div class="input-error">
          Error:
          <span class="input-error__message">{error}</span>
        </div>
      )}
    </div>
  );
};

export default TextInput;
