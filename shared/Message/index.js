const Message = ({ text, status }) => {
  return (
    <>
      {status === -1 && (
        <div className="w-form-fail-border show">
          <div> {text} </div>
        </div>
      )}

      {status === 1 && (
        <div className="w-form-done show">
          <div> {text} </div>
        </div>
      )}
    </>
  );
};

export default Message;
