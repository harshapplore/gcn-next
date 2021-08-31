const ErrorInput = ({ message }) => {
  return (
    <div className="input-error">
      Error:
      <span className="input-error__message"> {message} </span>
    </div>
  );
};

export default ErrorInput;
