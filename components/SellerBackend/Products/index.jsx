import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import qS from "query-string";
import Loader from "react-loader-spinner";


import Rating from "@/shared/Rating";
import { authAxios } from "@/setups/axios";

import __filters from "@/_data/filters.json";
import { uploadFiles } from "_controllers/product";


import { BASE_ROUTE, PRODUCTS, ADD_ACTION, EDIT_ACTION } from "../routes";

import { fetchShopProducts } from "@/slices/shop";
import { addProduct, deleteProduct, putProduct } from "@/_controllers/product";
import { PRODUCT_SAMPLE_FILE } from "@/config/constants";

const ProductCard = ({ id, product }) => {
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
          src={product.images && product.images.length > 0 && product.images[0].url}
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
           {/* { product.stockCount || 0} */}
        </span>{" "}
        {product.stock ? "in Stock" : "Out of stock"}
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

const Products = ({ filters, setFilters }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.shop);

  const [view, setView] = useState(seller.view ? seller.view : "card");
  const [sorting, setSorting] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [CSV, setCSV] = useState("");
  const [message, setMessage] = useState("");


  var filteredProducts = products.slice()
  if (search) {
    filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search) || product.description.toLowerCase().includes(search)
    );
  }
  if (sorting && sorting === __filters.sortBy[1].toString()) {
    filteredProducts = filteredProducts.sort((a, b) => (-a.price + b.price))
  } else if (sorting && sorting === __filters.sortBy[0].toString()) {
    filteredProducts = filteredProducts.sort((a, b) => (a.price - b.price))
  } else if (sorting && sorting === __filters.sortBy[3].toString()) {
    filteredProducts = filteredProducts
  }

  // console.log(filteredProducts)

  useEffect(() => {

    if (seller.id && seller.shop && !products.length)
      dispatch(fetchShopProducts(seller.shop.id));
    if (seller.view) {
      setView(seller.view)
    }
  }, [seller]);

  const viewCard = async () => {
    setView("card")
    setLoading(true)
    const response = await authAxios()({
      url: `sellers/${seller.id}`,
      method: "PUT",
      data: {
        view: "card"
      },
    });
    setLoading(false)
  }
  const viewList = async () => {
    setView("list")
    setLoading(true)
    const response = await authAxios()({
      url: `sellers/${seller.id}`,
      method: "PUT",
      data: {
        view: "list"
      },
    });
    setLoading(false)
  }
  const uploadCSV = async () => {
    const arr = [];
    CSV && arr.push(CSV);
    const csvProduct = arr.length > 0 ? await uploadFiles(arr) : [];

    // const response = await authAxios()({
    //   url: `/upload`,
    //   method: "POST",
    //   data: CSV
    // });
    const data = {
      fileUrl: csvProduct[0].url,
      seller: seller.id,
      shop: seller.shop.id
    }
    const response = await authAxios()({
      url: `/products/bulkProductUpload`,
      method: "POST",
      data
    });
    if(response)
    setMessage("Uploaded successfully")

    location.reload()
  }

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
              onChange={(e) => setSearch(e.target.value)}
              required
            />
            <img
              src="/images/search-black-24-dp.svg"
              loading="lazy"
              alt="search"
              className="search-icon"
            // onClick={searchProducts}
            />
          </form>
        </div>
        <div className="mb-0 mr-7 w-form">
           
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
            <select
              id="field-2"
              onChange={e => setSorting(e.target.value)}
              className="text-field select width-24 mb-0 w-select"
            >
              <option value>Sort by</option>
              {__filters.sortBy && __filters.sortBy.map(choice => <option key={choice} value={choice}>{choice}</option>)}
            </select>
          </form>
        </div>
        <a
          className="shop-view current w-inline-block cursor"
          onClick={viewCard}
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
          onClick={viewList}
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


        <button style={{
            marginLeft: 10,
            padding: 12,
            borderRadius: 2
        }}
            onClick={() => window.open(PRODUCT_SAMPLE_FILE)}
        >Download Sample File</button>
      </div>



      {view === "card" && (
        <>
          {loading && (
            <span className="icon" style={{ textAlign: "center" }}>
              <Loader type="Oval" color="#1a689e" height={25} width={25} />
            </span>
          )}
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

              {!loading && filteredProducts.length > 0 ?
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.images[0]}
                    name={product.name}
                    id={product.id}
                    product={product}
                  />
                ))
                : products &&
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
        </>
      )}

      {view === "list" && (
        <div className="shop-product-list mb-40">
          {loading && (
            <span className="icon" style={{ textAlign: "center" }} >
              <Loader type="Oval" color="#1a689e" height={25} width={25} />
            </span>
          )}
          {!loading && filteredProducts.length > 0 ?
            filteredProducts.map((product, index) => (
              <ProductListItem key={"product-" + index} product={product} />
            ))
            : products &&
            products.length > 0 &&
            products.map((product, index) => (
              <ProductListItem key={"product-" + index} product={product} />
            ))}
        </div>
      )}
      {message && <h5 className="mb-20">{message}</h5>}
      {CSV && <h5 className="mb-20">{CSV.name}</h5>}
      <div>
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
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(e) =>
              setCSV(e.target.files[0])
            }
            id="uploadcsv"
          />
          <label htmlFor="uploadcsv" className="text-block"  >Upload CSV</label>
        </a>
        {CSV && <div onClick={uploadCSV} className="button blue" style={{ marginLeft: "40px" }}  >Add</div>}
      </div>
    </div>
  );
};

export default Products;
