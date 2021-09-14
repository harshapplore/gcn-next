import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import qS from "query-string";

import Rating from "@/shared/Rating";

import { BASE_ROUTE, PRODUCTS, ADD_ACTION, EDIT_ACTION } from "../routes";

import { fetchShopProducts } from "@/slices/shop";
import { addProduct, deleteProduct, putProduct } from "@/_controllers/product";

const ProductCard = ({id, product }) => {
  const router = useRouter();

  const [_openContext, _setOpenContext] = useState(false);

  const duplicateProduct = async (prod) => {
    const { _id, id, ...productDetails } = prod;

    const product = await addProduct(productDetails);

    location.reload();
    return product;
  };

  const delProduct = async () => {
    const product = await deleteProduct(id);
    location.reload();
  };

  const updateStock = async (e, prod) => {
    e.stopPropagation();

    const { _id, filters } = prod;

    const product = await putProduct(_id, {
      stock: !prod.stock,
    });

    location.reload();
  };

  return (
    <div
      className="shop-product-item"
      onClick={() =>
        router.push(
          BASE_ROUTE +
            PRODUCTS +
            `?${qS.stringify({
              action: "edit",
              id,
            })}`
        )
      }
    >
      <a className="shop-product-img w-inline-block">
        <img
          src={product.main && product.main.url}
          loading="lazy"
          sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 17vw, 218.40000915527344px"
          alt={product.name}
          className="back-img"
        />
      </a>
      <div className="check-floater" onClick={(e) => updateStock(e, product)}>
        <img
          src={
            product.stock
              ? "/images/check-circle-black-24-dp.svg"
              : "/images/cancel-black-24-dp-2.svg"
          }
          alt=""
        />
      </div>
      <div
        className="potw-like"
        onClick={(e) => {
          e.stopPropagation();
          _setOpenContext(!_openContext);
        }}
      >
        <img
          src={
            _openContext
              ? "/images/expand-more-black-24-dp.svg"
              : "/images/expand-more-black-24-dp-copy-6.svg"
          }
          loading="lazy"
          alt=""
          className="heart"
        />
        {_openContext && (
          <div className="product-context-menu">
            <a
              className="context-link"
              onClick={() => router.push(`/product/${id}`)}
            >
              View
            </a>
            <a
              className="context-link"
              onClick={() =>
                router.push(BASE_ROUTE + PRODUCTS + EDIT_ACTION(id))
              }
            >
              Edit
            </a>
            <a
              className="context-link"
              onClick={() => duplicateProduct(product)}
            >
              Duplicate
            </a>
            <a className="context-link" onClick={delProduct}>
              Delete
            </a>
          </div>
        )}
      </div>

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

const ProductListItem = ({ product }) => {
  const router = useRouter();

  const [_openContext, _setOpenContext] = useState(false);

  const duplicateProduct = async (prod) => {
    const { _id, ...productDetails } = prod;

    const product = await addProduct(productDetails);

    location.reload();
    return product;
  };

  const delProduct = async (id) => {
    const product = await deleteProduct(id);
    location.reload();
  };

  const updateStock = async (e, prod) => {
    e.stopPropagation();

    const { _id, stock } = prod;

    const product = await putProduct(_id, {
      stock: !stock,
    });

    console.log(product);

    location.reload();
  };

  return (
    <div
      className="shop-product-list-item cursor"
      onClick={() =>
        router.push(
          BASE_ROUTE +
            PRODUCTS +
            `?${qS.stringify({
              action: "edit",
              id: product.id,
            })}`
        )
      }
    >
      <a className="shop-product-list-img w-inline-block">
        <img
          src={product.main && product.main.url}
          loading="lazy"
          sizes="(max-width: 479px) 25vw, 60px"
          alt={product.name}
          className="back-img"
        />
      </a>
      <a className="link shop-product-list-link">{product.name}</a>
      <div className="shop-product-list-price">€ {product.price}</div>
      <div className="shop-product-list-stock">
        <span
          className={
            "shop-product-list-stock-amount" +
            (!product.stockCount ? " low" : "")
          }
        >
          {product.stockCount || 0}
        </span>{" "}
        in Stock
      </div>
      <a
        className="shop-product-list-status w-inline-block"
        onClick={(e) => updateStock(e, product)}
      >
        <img
          src={
            product.stock
              ? "/images/check-circle-black-24-dp.svg"
              : "/images/cancel-black-24-dp-2.svg"
          }
          loading="lazy"
          width={24}
          height={24}
          alt="checked"
        />
      </a>
      <a
        className="shop-product-list-menu w-inline-block cursor"
        onClick={(e) => {
          e.stopPropagation();
          _setOpenContext(!_openContext);
        }}
      >
        <img
          src="/images/expand-more-black-24-dp-copy-6.svg"
          loading="lazy"
          width={24}
          height={24}
          alt="expand"
        />
      </a>

      {_openContext && (
        <div className="product-context-menu">
          <a
            className="context-link"
            onClick={() => router.push(`/product/${product.id}`)}
          >
            View
          </a>
          <a
            className="context-link"
            onClick={() => router.push(BASE_ROUTE + PRODUCTS + EDIT_ACTION(product.id))}
          >
            Edit
          </a>
          <a
            className="context-link"
            onClick={(e) => {
              e.stopPropagation();
              duplicateProduct(product);
            }}
          >
            Duplicate
          </a>
          <a
            className="context-link"
            onClick={(e) => {
              e.stopPropagation();
              delProduct(product.id);
            }}
          >
            Delete
          </a>
        </div>
      )}
    </div>
  );
};

const Products = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.shop);

  const [view, setView] = useState("card");

  useEffect(() => {
    if (seller.id && seller.shop && !products.length)
      dispatch(fetchShopProducts(seller.shop.id));
  }, [seller]);

  return (
    <div className="dynamic-content">
      <div className="shop-filter-bar">
        <div className="shop-search-wrapper w-form">
          <form
            id="email-form-2"
            name="email-form-2"
            data-name="Email Form 2"
            className="search-bar-wrapper"
          >
            <input
              type="text"
              className="text-field mb-0 text-field-search w-input"
              maxLength={256}
              name="Searchbar-2"
              data-name="Searchbar 2"
              placeholder="I'm searching for"
              id="Searchbar-2"
              required
            />
            <img
              src="/images/search-black-24-dp.svg"
              loading="lazy"
              alt="search"
              className="search-icon"
            />
          </form>
        </div>
        <div className="mb-0 mr-7 w-form">
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
            <select
              id="field-2"
              name="field-2"
              data-name="Field 2"
              className="text-field select width-24 mb-0 w-select"
            >
              <option value>Sort by</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
          </form>
        </div>
        <a
          className="shop-view current w-inline-block cursor"
          onClick={() => setView("card")}
        >
          <div className="icon-24 w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              width="24px"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <g>
                <rect fill="none" height={24} width={24} />
              </g>
              <g>
                <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z" />
              </g>
            </svg>
          </div>
        </a>
        <a
          className="shop-view w-inline-block cursor"
          onClick={() => setView("list")}
        >
          <div className="icon-24 w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              width="24px"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <g>
                <rect fill="none" height={24} width={24} />
              </g>
              <g>
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
              </g>
            </svg>
          </div>
        </a>
      </div>

      {view === "card" && (
        <div className="flex left-4">
          <>
            <a
              className="shop-product-add w-inline-block"
              onClick={() => router.push(BASE_ROUTE + PRODUCTS + ADD_ACTION)}
            >
              <div className="shop-product-add-container cursor no-select">
                <img
                  src="/images/add-black-24-dp.svg"
                  loading="lazy"
                  width={58}
                  height={58}
                  alt="Add"
                />
                <div>Add product</div>
              </div>
            </a>

            {products &&
              products.length > 0 &&
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.images[0]}
                  name={product.name}
                  id={product.id}
                  product={product}
                />
              ))}
          </>
        </div>
      )}

      {view === "list" && (
        <div className="shop-product-list mb-40">
          {products &&
            products.length > 0 &&
            products.map((product, index) => (
              <ProductListItem key={"product-" + index} product={product} />
            ))}
        </div>
      )}

      <a className="button icon blue w-inline-block">
        <div className="button-icon w-embed">
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
        <div className="text-block">Upload CSV</div>
      </a>
    </div>
  );
};

export default Products;
