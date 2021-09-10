import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { addToFavorites, deleteFavorite } from "@/_controllers/customer";
import { fetchFavoriteItems } from "@/slices/favorites";

import Rating from "./Rating";

const ProductCard = ({ product, favorites }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { customer } = useSelector((state) => state.customer);

  const [showFavButton, setShowFavButton] = useState(false);
  const [_isFavorite, _setIsFavorite] = useState(null);

  useEffect(async () => {
    if (!user || !user.id) {
      setShowFavButton(false); 
    }

    if (user.id && user.type === "seller") {
      setShowFavButton(false);
    }

    if (user.id && user.type === "customer") {
      setShowFavButton(true);
    }
  }, [user]);

  useEffect(async () => {
    if (!favorites || !favorites.length > 0) return;

    const index = favorites.findIndex((fav) => fav.productId === product.id);
    console.log(favorites, index);

    if (index >= 0) _setIsFavorite(true);
    if (index === -1) _setIsFavorite(false);
  }, [favorites, product]);

  const toggleFavorites = async (e) => {
    e.stopPropagation();

    if (!_isFavorite) {
      const updated = await addToFavorites({
        customerId: customer.id,
        userId: user.id,
        product: product.id,
        type: "Product",
      });
    } else {
      const index = favorites.findIndex((fav) => fav.productId === product.id);

      await deleteFavorite(favorites[index].favId);
    }

    dispatch(fetchFavoriteItems(customer.id));
  };

  return (
    <div
      className="shop-product-item"
      onClick={() => router.push(`/product/${product.id}`)}
    >
      <a className="shop-product-img w-inline-block">
        <img
          src={product.images && product.images[0] && product.images[0].url}
          loading="lazy"
          sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 17vw, 218.40000915527344px"
          alt={product.name}
          className="back-img"
        />
      </a>

      {showFavButton && (
        <a
          className="potw-like active w-inline-block"
          onClick={toggleFavorites}
        >
          {_isFavorite && (
            <img
              src="/images/favorite-border-black-24-dp-2.svg"
              loading="lazy"
              width={25}
              alt="Like"
              className="orange-heart"
            />
          )}
          <img
            src="/images/favorite-border-black-24-dp_1.svg"
            loading="lazy"
            alt="Like"
            className="heart"
          />
        </a>
      )}
      <div className="shop-product-info">
        <a className="link">{product.name}</a>
        <div
          className="by-seller"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/shop/${product.shop && product.shop.id}`);
          }}
        >
          By {product.shop && product.shop.name}
        </div>
        <div className="shop-product-price">€ {product.price}</div>
        <div>
          <Rating rating={product.rating || 0} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;