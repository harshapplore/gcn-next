const Message = ({ text, status }) => {
  return (
    <>
      {status === -1 && (
        <div className="w-form-fail">
          <div> {text} </div>
        </div>
      )}

      {status === 1 && (
        <div className="w-form-done">
          <div> {text} </div>
        </div>
      )}
    </>
  );
};

export default Message;
