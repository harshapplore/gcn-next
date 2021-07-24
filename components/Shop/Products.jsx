import { useState, useEffect } from "react";

import { getProducts } from "@/controllers/product";
import { useRouter } from "next/router";

import {
  ShopCard,
  ShopSidebar,
  Filters,
  ShopProduct,
} from "./Products.modules";

const Products = () => {
  const router = useRouter();

  const [products, setProducts] = useState([]);

  console.log(router);

  useEffect(async () => {
    const { id, category } = router.query;

    if (id) {
      const qFilter = {
        shop: id,
        category,
      };

      const products = await getProducts(id, qFilter);
      setProducts(products);

      console.log(products);
    }
  }, [router]);

  return (
    <div className="flex">
      {/*  */}
      <ShopSidebar />

      <div className="shop-content">
        {/* Filter for Mobile View */}
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
          <a className="button icon secondary small tag w-inline-block">
            <div className="button-icon tag w-embed">
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
          <a className="button icon secondary small tag w-inline-block">
            <div className="button-icon tag w-embed">
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
            <div className="text-block">0-100€</div>
          </a>
          <a className="button icon secondary small tag w-inline-block">
            <div className="button-icon tag w-embed">
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
            <div className="text-block">0-100€</div>
          </a>
        </div>

        <ShopCard name="GC9 Shop" />
        <Filters />

        <div className="flex">
          {/* Shop Items */}

          {products &&
            products.length > 0 &&
            products.map((product, index) => (
              <ShopProduct
                key={product.name+index}
                id={product.id}
                name={product.name}
                seller={product.seller && product.seller.firstName}
                price={product.price}
                image={product.images.length > 0 && product.images[0].url || ""}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
