import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "@/controllers/customer";

import { getProduct } from "@/controllers/product";
import DetailsPane from "./DetailsPane";
import Slider from "./Slider";

import Nav from "@/shared/Nav";
import Select from "@/shared/Select";
import Fetcher from "@/shared/Fetcher";

const ProductDetail = () => {
  const router = useRouter();
  const { customer } = useSelector((state) => state.customer);
  const { seller } = useSelector((state) => state.seller);

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

  return (
    <>
      <Fetcher />
      <Head>
        <title> {product.name} | Green Cloud Nine</title>
      </Head>
      <Nav />
      <div className="page-section">
        <div className="container w-clearfix">
          <div className="product-image-wrapper">
            <Slider images={product.images} />
          </div>

          <div className="product-info-wrapper">
            <div className="mb-20">
              <h1 className="item-heading">{product.name}</h1>
              <div className="overline-text">
                By {product.shop && product.shop.name}
              </div>
            </div>
            <div className="item-produc t-price mb-40">€ {product.price}</div>

            <div>
              {tags.map((tag) => (
                <div className="button secondary small">
                  <div>{tag}</div>
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

              <span
                className="button icon orange w-inline-block"
                onClick={async () => {
                  const res = await addToCart({
                    productId: product.id,
                    quantity: 1,
                  });

                  console.log(res);

                  setTimeout(() => {
                    router.push("/customer/cart");
                  }, 2000);
                }}
              >
                <div className="text-block">Add To Cart</div>
              </span>
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
