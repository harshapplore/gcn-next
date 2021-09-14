const Description = ({ description }) => {
  return (
    <div className="container">
      <div className="product-description w-richtext">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Description;