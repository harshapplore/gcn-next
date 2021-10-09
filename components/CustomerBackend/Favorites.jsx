import { useState, useEffect } from "react";
import router, { useRouter } from "next/router";
import { useSelector } from "react-redux";

import {
  getFavoriteItems,
  getFavoriteShops,
  deleteFavorite,
} from "@/_controllers/customer";
import shop from "@/slices/shop";
import AppLoader from "@/utils/AppLoader/AppLoader";
import EmptyComp from "@/utils/EmptyComp/EmptyComp";

const FavProduct = ({ product, favId, fetchProducts }) => {
  const router = useRouter();

  const removeNReload = async (e) => {
    e.stopPropagation();

    await deleteFavorite(favId);
    fetchProducts();
  };
  if (!product) {
    return null;
  }
  return (
    <div className="flex-child-32">
      <div className="potw-item">
        <img
          src={(product.images[0] && product.images[0].url) || ""}
          alt={product.name}
          className="back-img"
        />
        <a
          className="potw-name w-inline-block"
          onClick={() => router.push(`/product/${product.id}`)}
        >
          <div>{product.name}</div>
          <img
            src="/images/expand-more-black-24-dp.svg"
            loading="lazy"
            alt="Next"
          />
        </a>
        <a
          className="potw-like active w-inline-block cursor"
          onClick={removeNReload}
        >
          <img
            src="/images/favorite-border-black-24-dp-2.svg"
            loading="lazy"
            width={25}
            alt="Like"
            className="orange-heart"
          />
          <img
            src="/images/favorite-border-black-24-dp_1.svg"
            loading="lazy"
            alt="Like"
            className="heart"
          />
        </a>
      </div>
    </div>
  );
};

export const FavShop = ({ shop, favId, fetchShops }) => {
  const image = shop.images.length > 0 ? shop.images[0].url : "";
  const removeNReload = async (e) => {
    e.stopPropagation();

    await deleteFavorite(favId);
    fetchShops();
  };

  return (
    <div className="flex-child-32">
      <div className="potw-item">
        <img
          src={image}
          loading="lazy"
          sizes="(max-width: 479px) 92vw, (max-width: 767px) 46vw, (max-width: 991px) 35vw, (max-width: 1279px) 23vw, 291.1875px"
          //   srcSet="/images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
          alt="Handcrafted stuff"
          className="back-img"
        />
        <a
          className="potw-name w-inline-block"
          onClick={() =>
            router.push(
              `/shop/${shop._id}?fiters={"shopName": "${shop?.name}"}`
            )
          }
        >
          <div>{shop?.name}</div>
          <img
            src="/images/expand-more-black-24-dp.svg"
            loading="lazy"
            alt="Next"
          />
        </a>
        <a
          className="potw-like active w-inline-block cursor"
          onClick={removeNReload}
        >
          <img
            src="/images/favorite-border-black-24-dp-2.svg"
            loading="lazy"
            width={25}
            alt="Like"
            className="orange-heart"
          />
          <img
            src="/images/favorite-border-black-24-dp_1.svg"
            loading="lazy"
            alt="Like"
            className="heart"
          />
        </a>
      </div>
    </div>
  );
};

const Favorites = () => {
  const { customer } = useSelector((state) => state.customer);
  const [_shops, _setShops] = useState([]);
  const [_products, _setProducts] = useState([]);

  useEffect(async () => {
    if (!customer.id) return;

    fetchProducts();
    fetchShops();
  }, [customer]);

  const fetchProducts = async () => {
    if (!customer.id) {
      _setProducts([]);
      return;
    }

    const favoriteItems = await getFavoriteItems({
      customerId: customer.id,
    });

    _setProducts(
      favoriteItems &&
        favoriteItems.map((item) => {
          const { _id, product } = item;
          return { favId: _id, product };
        })
    );
  };
  const fetchShops = async () => {
    if (!customer.id) {
      _setShops([]);
      return;
    }

    const favoriteShops = await getFavoriteShops({
      customerId: customer.id,
    });

    _setShops(
      favoriteShops &&
        favoriteShops.map((items) => {
          return items;
        })
    );
  };
  return (
    <div className="dynamic-content">
      <div className="mb-60">
        <div className="heading-wrapper">
          <h2>Favorite Items</h2>
        </div>

        <div className="flex left-3">
          {!_products && <AppLoader />}
          {_products && _products.length > 0 ? (
            _products.map((product) => (
              <FavProduct
                product={product.product}
                favId={product.favId}
                fetchProducts={fetchProducts}
              />
            ))
          ) : (
            <EmptyComp title="No Products found" />
          )}
        </div>
      </div>

      <div>
        <div className="heading-wrapper">
          <h2>Favorite Brands</h2>
        </div>
        <div className="flex left-3">
          {!_shops && <AppLoader />}

          {_shops && _shops.length > 0 ? (
            _shops.map((shop) => (
              <FavShop
                shop={shop.shop}
                favId={shop._id}
                fetchShops={fetchShops}
              />
            ))
          ) : (
            <EmptyComp title="No Brands found" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
