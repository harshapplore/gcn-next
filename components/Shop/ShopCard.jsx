const ShopCard = ({name, description}) => {
  return (
    <div className="hide-mobile">
      <div className="heading-wrapper mb-40">
        <h1>{name}</h1>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ShopCard;
