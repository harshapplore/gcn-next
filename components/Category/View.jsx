import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "@/slices/categories";
import { fetchFavoriteItems, fetchFavoriteShops } from "@/slices/favorites";

import { Select3 } from "@/shared/Select";
import { getProducts } from "@/controllers/product";
import customer from "@/slices/customer";

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
  const { user } = useSelector((state) => state.user);

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
    if (!favorites) return;

    if (favorites.inclues(product.id)) _setIsFavorite(true);
    else _setIsFavorite(false);
  }, [favorites]);

  const toggleFavorites = (e) => {
    e.stopPropagation();

    if (!_isFavorite) {
    }
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
        <a className="potw-like active w-inline-block">
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
  const { categories } = useSelector((state) => state.categories);
  const { favoriteItems, favoriteShops } = useSelector(
    (state) => state.favorites
  );

  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(async () => {
    const { id } = router.query;
    const products = await getProducts({ category: id });

    if (products && products.length) setProducts(products);
  }, [router.query]);

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [router.query]);

  useEffect(() => {
    if (!customer || !customer.id) return;

    if (!favoriteItems || !favoriteItems.length)
      dispatch(fetchFavoriteItems(customer.id));

    if (!favoriteShops || !favoriteShops.length)
      dispatch(fetchFavoriteShops(customer.id));
  }, [customer]);

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
        <div className="flex">
          <div className="shop-filter popup-mobile mt-40">
            <div className="scroll-y">
              <div className="filter-mobile-block w-form">
                <form className="flex">
                  <Select3
                    placeholder="Sustainability"
                    choices={["First Choice", "Second Choice", "Third Choice"]}
                    value={filters.sustainability}
                    setValue={(value) =>
                      setFilters({ ...filters, sustainability: value })
                    }
                  />

                  <Select3
                    placeholder="Price"
                    choices={["First Choice", "Second Choice", "Third Choice"]}
                    value={filters.price}
                    setValue={(value) =>
                      setFilters({ ...filters, price: value })
                    }
                  />

                  <select
                    id="field-5"
                    name="field-5"
                    data-name="Field 5"
                    className="text-field select width-24 w-select"
                  >
                    <option value>Colour</option>
                    <option value="First">First Choice</option>
                    <option value="Second">Second Choice</option>
                    <option value="Third">Third Choice</option>
                  </select>
                  <select
                    id="field-4"
                    name="field-4"
                    data-name="Field 4"
                    className="text-field select width-24 w-select"
                  >
                    <option value>Price</option>
                    <option value="First">First Choice</option>
                    <option value="Second">Second Choice</option>
                    <option value="Third">Third Choice</option>
                  </select>
                  <select
                    id="field-3"
                    name="field-3"
                    data-name="Field 3"
                    className="text-field select width-24 w-select"
                  >
                    <option value>Sale</option>
                    <option value="First">First Choice</option>
                    <option value="Second">Second Choice</option>
                    <option value="Third">Third Choice</option>
                  </select>
                  <select
                    id="field-2"
                    name="field-2"
                    data-name="Field 2"
                    className="text-field select width-24 w-select"
                  >
                    <option value>Sort by</option>
                    <option value="First">First Choice</option>
                    <option value="Second">Second Choice</option>
                    <option value="Third">Third Choice</option>
                  </select>
                </form>
              
              </div>

              <div>
                <div className="w-form">
                  <form id="email-form-4">
                    <div className="shop-select-text first">Delivers to:</div>
                    <select
                      name="field-7"
                      className="text-field select w-select"
                    >
                      <option value>Select one...</option>
                      <option value="First">First Choice</option>
                      <option value="Second">Second Choice</option>
                      <option value="Third">Third Choice</option>
                    </select>
                    <div className="shop-select-text">Search within:</div>
                    <select
                      id="field-7"
                      name="field-7"
                      className="text-field select w-select"
                    >
                      <option value>Select one...</option>
                      <option value="First">First Choice</option>
                      <option value="Second">Second Choice</option>
                      <option value="Third">Third Choice</option>
                    </select>
                    <div className="shop-select-text">Shop location</div>
                    <select
                      id="field-7"
                      name="field-7"
                      className="text-field select w-select"
                    >
                      <option value>Select one...</option>
                      <option value="First">First Choice</option>
                      <option value="Second">Second Choice</option>
                      <option value="Third">Third Choice</option>
                    </select>
                    <div className="shop-select-text">Delivery time:</div>
                    <select
                      id="field-7"
                      name="field-7"
                      className="text-field select w-select"
                    >
                      <option value>Select one...</option>
                      <option value="First">First Choice</option>
                      <option value="Second">Second Choice</option>
                      <option value="Third">Third Choice</option>
                    </select>
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pick-up-wrapper mb-40 w-clearfix">
              <a className="pickup-switch-wrapper active w-inline-block">
                <div className="switch-switcher" />
              </a>
              <div className="pickup-text">Pick up available</div>
            </div>

            <div className="mobile-only">
              <div className="center">
                <a className="button gray w-inline-block">
                  <div className="text-block">Clear</div>
                </a>
                <a className="button orange mx-10 w-inline-block">
                  <div className="text-block">Apply</div>
                </a>
              </div>
            </div>
            <a className="shop-delete mobile-only w-inline-block">
              <img
                src="images/clear-black-24-dp.svg"
                loading="lazy"
                width={24}
                alt="Close"
              />
            </a>
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
            <div className="hide-mobile">
              <div>
                <div className="w-form">
                  <form id="email-form-3" className="flex left-4">
                    <Select3
                      placeholder="Sustainability"
                      choices={["First", "Second", "Third"]}
                      value={filters.sustainability}
                      setValue={(value) =>
                        setFilters({ ...filters, sustainability: value })
                      }
                    />

                    <Select3
                      placeholder="Brand"
                      choices={["First", "Second", "Third"]}
                      value={filters.brand}
                      setValue={(value) =>
                        setFilters({ ...filters, brand: value })
                      }
                    />

                    <Select3
                      placeholder="Price"
                      choices={["First", "Second", "Third"]}
                      value={filters.price}
                      setValue={(value) =>
                        setFilters({ ...filters, price: value })
                      }
                    />

                    <Select3
                      placeholder="Colour"
                      choices={["First", "Second", "Third"]}
                      value={filters.color}
                      setValue={(value) =>
                        setFilters({ ...filters, color: value })
                      }
                    />

                    <Select3
                      placeholder="Sale"
                      choices={["First", "Second", "Third"]}
                      value={filters.sale}
                      setValue={(value) =>
                        setFilters({ ...filters, sale: value })
                      }
                    />

                    <Select3
                      placeholder="Sort By"
                      choices={["First", "Second", "Third"]}
                      value={filters.sortBy}
                      setValue={(value) =>
                        setFilters({ ...filters, sortBy: value })
                      }
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="flex left-4">
              {/* { Items list here} */}

              {products &&
                products.length > 0 &&
                products.map((product, index) => (
                  <ShopItem key={"pro" + index} product={product} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
