const ErrorInput = ({ message }) => {
  return (
    <div className="input-error success">
        Success:
      <span className="input-error__message success"> {message} </span>
    </div>
  );
};

export default ErrorInput;