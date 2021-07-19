import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { getProduct } from "controllers/product";
import DetailsPane from "./DetailsPane";
import Slider from "./Slider";

import Nav from "shared/Nav";
import Select from "shared/Select";

const ProductDetail = () => {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState("");
  const [product, setProduct] = useState({});

  const [data, setData] = useState({});

  useEffect(async () => {
    const { id } = router.query;

    if (id) {
      const product = await getProduct(id);
      setProduct(product);
    }
  }, [router]);

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setActiveImage(product.images[0].url);
    }
  }, [product]);

  return (
    <>
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
            <div className="item-product-price mb-40">€ {product.price}</div>

            <div>
              <div className="button secondary small">
                <div>Text</div>
              </div>
              <div className="button secondary small">
                <div>More text</div>
              </div>
              <div className="button secondary small">
                <div>less text</div>
              </div>
              <div className="button secondary small">
                <div>Text</div>
              </div>
              <div className="button secondary small">
                <div>different text</div>
              </div>
              <div className="button secondary small">
                <div>Text</div>
              </div>
            </div>
            <div className="mb-80 w-form">
              <Select
                choices={["S", "M", "L", "XL", "XXL"]}
                value={data.size}
                setValue={(v) => setData({ ...v, size: data.size })}
                width={48}
              />

              <span href="#" className="button icon orange w-inline-block">
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
                  src="images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 1279px) 31vw, 384px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a href="#" className="potw-name w-inline-block">
                  <div>Mustershop</div>
                  <img
                    src="images/expand-more-black-24-dp.svg"
                    loading="lazy"
                    alt="Next"
                  />
                </a>
                <a href="#" className="potw-like w-inline-block">
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
              </div>
            </div>
            <div className="flex-child-32">
              <div className="potw-item">
                <img
                  src="images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 1279px) 31vw, 384px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a href="#" className="potw-name w-inline-block">
                  <div>Mustershop</div>
                  <img
                    src="images/expand-more-black-24-dp.svg"
                    loading="lazy"
                    alt="Next"
                  />
                </a>
                <a href="#" className="potw-like active w-inline-block">
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
              </div>
            </div>
            <div className="flex-child-32">
              <div className="potw-item">
                <img
                  src="images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 1279px) 31vw, 384px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a href="#" className="potw-name w-inline-block">
                  <div>Mustershop</div>
                  <img
                    src="images/expand-more-black-24-dp.svg"
                    loading="lazy"
                    alt="Next"
                  />
                </a>
                <a href="#" className="potw-like w-inline-block">
                  <img
                    src="images/favorite-border-black-24-dp-2.svg"
                    loading="lazy"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
