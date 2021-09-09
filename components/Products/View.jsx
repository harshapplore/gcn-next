import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import QS from "query-string";

import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "@/slices/categories";
import { fetchFavoriteItems, fetchFavoriteShops } from "@/slices/favorites";

import TopFilter from "@/shared/Shop2/Filters/Top";
import SideFilter from "@/shared/Shop2/Filters/Side";

import { getProducts } from "@/_controllers/product";
import { addToFavorites, deleteFavorite } from "@/_controllers/customer";

import { urqlClient } from "@/setups/urql";
import { filterQuery, filterConverter } from "@/_methods/filters";

const Rating = ({ rating }) => {
  let filled = rating;
  let empty = 5 - rating;

  const ele = [];

  while (filled > 0) {
    ele.push(
      <img
        key={"filled-" + filled}
        src="/images/star-black-24-dp-copy-4.svg"
        loading="lazy"
        alt="Filled Star"
        className="shop-product-star"
      />
    );

    filled--;
  }

  while (empty > 0) {
    ele.push(
      <img
        key={"empty-" + empty}
        src="/images/star-black-24-dp-copy.svg"
        loading="lazy"
        alt="Empty star"
        className="shop-product-star"
      />
    );
    empty--;
  }

  return <div>{ele}</div>;
};

const ShopItem = ({ product, favorites }) => {
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

const View = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.customer);
  const { categories } = useSelector((state) => state.categories);
  const { favoriteItems, favoriteShops } = useSelector(
    (state) => state.favorites
  );

  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {}, [])

  useEffect(async () => {
    const products = await getProducts();

    if (router.query.filters) {
      const _filters = JSON.parse(decodeURIComponent(router.query.filters));

      console.log("filters",_filters);

      if(JSON.stringify(_filters) !== JSON.stringify(filters))
        setFilters(_filters);

      if (Object.keys(filters)) {
        const data = filterConverter(_filters);
        const results = await urqlClient.query(filterQuery, data).toPromise();

        console.log(results);

        setProducts(results.data && results.data.products);
        return;
      }
    }

    setProducts(products);
  }, [router.query]);

  useEffect(() => {
    if (Object.keys(filters))
      router.push("/products?filters=" + JSON.stringify(filters));
  }, [JSON.stringify(filters)]);

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [router.query]);

  useEffect(() => {
    if (!customer.id) return;

    if (!favoriteItems || !favoriteItems.length)
      dispatch(fetchFavoriteItems(customer.id));

    if (!favoriteShops || !favoriteShops.length)
      dispatch(fetchFavoriteShops(customer.id));
  }, [customer.id]);

  return (
    <div className="page-section pt-0 wf-section">
      <div className="container">
        <div className="breadcrumbs-wrapper">
          <a href="index.html" className="overline-text">
            Shop
          </a>
          <div className="overline-text divider">&gt;</div>
          <div className="overline-text">Green Fashion Shop</div>
        </div>
      </div>

      <div className="container">
        <div className="flex-2">
          <div className="shop-filter popup-mobile mt-40">
            <div className="scroll-y">
              <div>
                <SideFilter filters={filters} setFilters={setFilters} />
              </div>
            </div>
          </div>
          <div className="shop-content">
            <div className="mobile-only mb-20">
              <div className="center mb-10">
                <a className="button icon orange block w-inline-block">
                  <div className="button-icon static w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="currentColor"
                    >
                      <g>
                        <rect fill="none" height={24} width={24} />
                      </g>
                      <g>
                        <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" />
                      </g>
                    </svg>
                  </div>
                  <div className="text-block">Filter (3)</div>
                </a>
              </div>
              <a className="tag filter w-inline-block">
                <div className="button-icon filter w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M0 0L24 0 24 24 0 24z"
                        transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
                      />
                      <path
                        fill="currentColor"
                        fillRule="nonzero"
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="text-block">Upcycled</div>
              </a>
              <a className="tag filter w-inline-block">
                <div className="button-icon filter w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M0 0L24 0 24 24 0 24z"
                        transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
                      />
                      <path
                        fill="currentColor"
                        fillRule="nonzero"
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="text-block">Green</div>
              </a>
              <a className="tag filter w-inline-block">
                <div className="button-icon filter w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M0 0L24 0 24 24 0 24z"
                        transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
                      />
                      <path
                        fill="currentColor"
                        fillRule="nonzero"
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="text-block">50-150€</div>
              </a>
            </div>
            {/* className="hide-mobile" */}
            <div>
              <div className="flex flex-justify-start flex-gap-10 flex-1 mb-40">
                <TopFilter filters={filters} setFilters={setFilters} />
              </div>
            </div>
            <div className="flex left-4">
              {/* { Items list here} */}

              {products &&
                products.length > 0 &&
                products.map((product, index) => (
                  <ShopItem
                    key={"pro" + index}
                    product={product}
                    favorites={favoriteItems}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
