import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "@/slices/categories";
import { fetchFavoriteItems, fetchFavoriteShops } from "@/slices/favorites";

import TopFilter from "@/shared/Shop2/Filters/Top";
import SideFilter from "@/shared/Shop2/Filters/Side";
import { getProducts } from "@/_controllers/product";

import { urqlClient } from "@/setups/urql";
import { filterQuery, filterConverter } from "@/_methods/filters";

import ProductView from "@/shared/Shop2/Product/View";

const View = ({shop}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.customer);
  const { categories } = useSelector((state) => state.categories);
  const { favoriteItems, favoriteShops } = useSelector(
    (state) => state.favorites
  );

  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    if(!shop.name) return;

    setFilters({...filters, shopName: shop.name})
  }, [shop.name])

  useEffect(async () => {
    if (router.query.filters) {
      const _filters = JSON.parse(decodeURIComponent(router.query.filters));

      console.log("filters", _filters);

      if (JSON.stringify(_filters) !== JSON.stringify(filters))
        setFilters(_filters);

      if (Object.keys(filters)) {
        const data = filterConverter(_filters);
        const results = await urqlClient.query(filterQuery, data).toPromise();

        setProducts(results.data && results.data.products);
        return;
      }
    }

    setProducts(products);
  }, [router.query]);

  useEffect(() => {
    if (Object.keys(filters).length)
      if(shop.id) router.push(`/shop/${shop.id}?filters=${JSON.stringify(filters)}`);
  }, [JSON.stringify(filters)]);

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [router.query, shop]);

  useEffect(() => {
    if (!customer.id) return;

    if (!favoriteItems || !favoriteItems.length)
      dispatch(fetchFavoriteItems(customer.id));

    if (!favoriteShops || !favoriteShops.length)
      dispatch(fetchFavoriteShops(customer.id));
  }, [customer.id]);

  return (
    <>
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
                <SideFilter filters={filters} setFilters={setFilters} shopView={true}/>
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
                <TopFilter filters={filters} setFilters={setFilters} shopView={true}/>
              </div>
            </div>
            <ProductView products={products} favoriteItems={favoriteItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
