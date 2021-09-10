import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavoriteItems } from "@/slices/favorites";
import { getLatestProducts, getProducts } from "@/_controllers/product";

import { addToFavorites, deleteFavorite } from "@/_controllers/customer";
import router from "next/router";

const ProductCard = ({ product, customerId }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex-child-32 cursor">
        <div className="potw-item">
          <img
            src={product.main && product.main.url}
            alt="Handcrafted stuff"
            className="back-img"
          />
          <a className="potw-name w-inline-block cursor">
            <div>{product.name}</div>
            <img
              src="images/expand-more-black-24-dp.svg"
              loading="lazy"
              alt="Next"
            />
          </a>
          {customerId && (
            <a className="potw-like w-inline-block">
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
    </Link>
  );
};

const PageSection = () => {
  const [_products, _setProducts] = useState();

  const { customer } = useSelector((state) => state.customer);

  useEffect(async () => {
    const products = await getProducts({
      price_gt: 10,
      _sort: "name:asc",
      _limit: 5,
    });

    _setProducts(products);
  }, []);

  return (
    <div className="page-section border-bottom">
      <div className="container">
        <div className="flex center mb-60">
          <h1>Products of the week</h1>
          <a className="button w-button">More</a>
        </div>
        <div className="flex">
          {_products &&
            _products.length > 0 &&
            _products.map((product) => (
              <ProductCard product={product} customerId={customer.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PageSection;
