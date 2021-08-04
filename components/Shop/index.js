import { useRouter } from "next/router";
import Head from "next/head";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer2";

import ShopBanner from "@/shared/Shop2/Banner";
import ShopNav from "@/shared/Shop2/Nav";
import ShopHeading from "@/shared/Shop/Heading";

import ShopNavBlocks from "./ShopNav";

import Certifications from "./Certifications";
import TermsNConditions from "./TNC";
import AboutUs from "./AboutUs";
import Products from "./Products";
import { useState, useEffect } from "react";

import { getShop } from "@/controllers/shop";

const Shop = () => {
  const router = useRouter();

  const { query } = router;

  const [shop, setShop] = useState({});

  useEffect(async () => {
    const { id } = router.query;

    const shop = await getShop(id);

    setShop(shop);
  }, [router.query]);

  console.log(shop);

  return (
    <>
      <Head>
        <title> {shop.name} | Green Cloud Nine </title>
      </Head>
      <Header nav={<Nav />} />
      <div className="page-section pt-0">
        <ShopBanner cover={shop.cover} />
        <ShopNav name={shop.name} logo={shop.logo && shop.logo.url}>
          <ShopNavBlocks />
        </ShopNav>

        <div className="container">
          {(!query.tab || query.tab === "products") && <Products />}

          {query.tab === "certificates" && <Certifications />}

          {query.tab === "terms-n-conditions" && <TermsNConditions />}

          {query.tab === "about-us" && <AboutUs />}
        </div>
      </div>

      {/* Similar Shops */}
      <div className="page-section">
        <div className="container">
          <div className="heading-wrapper mb-40">
            <h2>Similar shops</h2>
          </div>
          <div className="flex">
            <div className="flex-child-32">
              <div className="potw-item">
                <img
                  src="images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 83vw, (max-width: 991px) 46vw, (max-width: 1279px) 31vw, 384px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a className="potw-name w-inline-block">
                  <div>Mustershop</div>
                  <img
                    src="images/expand-more-black-24-dp.svg"
                    loading="lazy"
                    alt="Next"
                  />
                </a>
              </div>
            </div>
            <div className="flex-child-32">
              <div className="potw-item">
                <img
                  src="images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 83vw, (max-width: 991px) 46vw, (max-width: 1279px) 31vw, 384px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a className="potw-name w-inline-block">
                  <div>Mustershop</div>
                  <img
                    src="images/expand-more-black-24-dp.svg"
                    loading="lazy"
                    alt="Next"
                  />
                </a>
              </div>
            </div>
            <div className="flex-child-32">
              <div className="potw-item">
                <img
                  src="images/bild-header2x.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 83vw, (max-width: 991px) 46vw, (max-width: 1279px) 31vw, 384px"
                  srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                  alt="Handcrafted stuff"
                  className="back-img"
                />
                <a className="potw-name w-inline-block">
                  <div>Mustershop</div>
                  <img
                    src="images/expand-more-black-24-dp.svg"
                    loading="lazy"
                    alt="Next"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
