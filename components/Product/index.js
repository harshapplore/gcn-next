import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { getProduct } from "@/_controllers/product";
import DetailsPane from "./DetailsPane";
import Slider from "./Slider";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Select from "@/shared/Select";
import Fetcher from "@/shared/Fetcher";
import AuthForm from "@/shared/Auth/AuthForm";

import Button from "@/shared/Button";

import { addToCart } from "@/_methods/cart";

const ProductDetail = () => {
  const router = useRouter();
  const { customer } = useSelector((state) => state.customer);

  const [showAuth, setShowAuth] = useState(false);

  const [product, setProduct] = useState({});

  const [data, setData] = useState({});

  const tags = [
    "Tag One",
    "Tag Two",
    "Random Tag",
    "Four Tag",
    "Tag Five",
    "Just Tag",
  ];

  useEffect(async () => {
    const { id } = router.query;

    if (id) {
      const product = await getProduct(id);
      setProduct(product);
    }
  }, [router]);

  const addToCartHandler = async () => {
    const res = await addToCart({
      ...product,
      quantity: 1,
    });

    setTimeout(() => {
      router.push("/cart");
    }, 1000);
  };

  return (
    <>
      {showAuth && <AuthForm close={() => setShowAuth(false)} />}
      <Fetcher />
      <Head>
        <title> {product.name} | Green Cloud Nine</title>
      </Head>
      <Header nav={<Nav />} />
      <div className="page-section">
        <div className="container w-clearfix">
          <div className="product-image-wrapper">
            <Slider images={product.images} />
          </div>

          <div className="product-info-wrapper">
            <div className="mb-20">
              <h1 className="item-heading">{product.name}</h1>
              <div
                className="overline-text cursor"
                onClick={() => {
                  router.push(`/shop/${product.shop && product.shop.id}`);
                }}
              >
                By {product.shop && product.shop.name}
              </div>
            </div>
            <div className="item-product-price mb-40">€ {product.price}</div>

            <div>
              {tags.map((tag, index) => (
                <div className="tag-spacer" key={"tag" + index}>
                  <div className="tag">{tag}</div>
                </div>
              ))}
            </div>

            <div className="mb-80 w-form">
              <Select
                choices={["S", "M", "L", "XL", "XXL"]}
                defaultValue="Size"
                value={data.size}
                setValue={(v) => setData({ ...v, size: data.size })}
                width={100}
              />

              <Button
                name="Add to Cart"
                caps={true}
                action={addToCartHandler}
              />
            </div>
            <div className="mb-10">
              <img
                src="/images/done-black-24-dp.svg"
                loading="lazy"
                alt="Checkmark"
              />
              <div className="item-additional-info">
                In Stock, Delivery time: 2 – 5 days
              </div>
            </div>
            <div>
              <img
                src="/images/share-black-24-dp.svg"
                loading="lazy"
                alt="Share"
              />
              <div className="item-additional-info">Share</div>
            </div>
          </div>
        </div>
      </div>

      <DetailsPane description={product.description} />

      <div className="page-section">
        <div className="container">
          <div className="heading-wrapper mb-40">
            <h2>You may also like ...</h2>
          </div>
          <div className="flex">
            <div className="flex-child-32">
              <div className="potw-item">
                <img
                  src="/images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 1279px) 31vw, 384px"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a className="potw-name w-inline-block">
                  <div>Mustershop</div>
                  <img
                    src="/images/expand-more-black-24-dp.svg"
                    loading="lazy"
                    alt="Next"
                  />
                </a>
                <a className="potw-like w-inline-block">
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
            <div className="flex-child-32">
              <div className="potw-item">
                <img
                  src="/images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 1279px) 31vw, 384px"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a className="potw-name w-inline-block">
                  <div>Mustershop</div>
                  <img
                    src="/images/expand-more-black-24-dp.svg"
                    loading="lazy"
                    alt="Next"
                  />
                </a>
                <a className="potw-like active w-inline-block">
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
            <div className="flex-child-32">
              <div className="potw-item">
                <img
                  src="/images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 1279px) 31vw, 384px"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a className="potw-name w-inline-block">
                  <div>Mustershop</div>
                  <img
                    src="/images/expand-more-black-24-dp.svg"
                    loading="lazy"
                    alt="Next"
                  />
                </a>
                <a className="potw-like w-inline-block">
                  <img
                    src="/images/favorite-border-black-24-dp-2.svg"
                    loading="lazy"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
