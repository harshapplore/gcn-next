import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavoriteItems } from "@/slices/favorites";
import { getLatestProducts } from "@/_controllers/product";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const { customer } = useSelector((state) => state.customer);
  const { favorites } = useSelector((state) => state.favorites);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!favorites || !favorites.length) dispatch(fetchFavoriteItems());
  }, [customer]);

  useEffect(() => {
    if (!favorites || !favorites.length) return;

    const index = favorites.findIndex((fav) => fav.id === product.id);

    if (index === -1) {
      setIsFavorite(false);
      return;
    }

    if (index >= 0) setIsFavorite(true);
  }, [favorites]);

  return (
    <div className="flex-child-24">
      <div className="potw-item">
        <img
          src={product.images[0] && product.images[0].url}
          loading="lazy"
          sizes="(max-width: 479px) 22vw, (max-width: 1279px) 23vw, 288px"
          alt={product.name}
          className="back-img"
        />

        <a className="potw-name w-inline-block">
          <div>{product.name}</div>
          <img
            src="images/expand-more-black-24-dp.svg"
            loading="lazy"
            alt="Next"
          />
        </a>

        {customer.id && (
          <a
            className={"potw-like w-inline-block" + (isFavorite ? " active" : "")}
          >
            <img
              src="images/favorite-border-black-24-dp-2.svg"
              loading="lazy"
              width={25}
              alt="Like"
              className="orange-heart"
            />
            <img
              src="images/favorite-border-black-24-dp_1.svg"
              loading="lazy"
              alt="Like"
              className="heart"
            />
          </a>
        )}
      </div>
    </div>
  );
};

const PageSection = () => {
  const [_products, _setProducts] = useState([]);

  useEffect(async () => {
    const products = await getLatestProducts();

    if (products && products.length > 0) _setProducts(products);
  }, []);

  return (
    <div className="page-section border-bottom">
      <div className="container">
        <div className="heading-wrapper mb-60">
          <h1>Discover new products</h1>
        </div>
        <div className="flex wrap">
          {_products &&
            _products.length >= 0 &&
            _products.map((product) => {
              return <Product product={product} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default PageSection;
