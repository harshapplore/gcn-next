import ProductCard from "./Card";

const ProductView = ({ products, favoriteItems }) => {
  return (
    <div className="flex left-4">
      {products &&
        products.length > 0 &&
        products.map((product, index) => (
          <ProductCard
            key={"pro" + index}
            product={product}
            favorites={favoriteItems}
          />
        ))}
    </div>
  );
};

export default ProductView;
