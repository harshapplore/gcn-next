const Text = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
      <textarea
        placeholder="Your answer here"
        className="text-field area mb-40 w-input"
      />
    </div>
  );
};

export default Text;
