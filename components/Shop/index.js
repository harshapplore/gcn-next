import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Fetcher from "@/shared/Fetcher";
import Footer from "@/shared/Footer";

import ShopBanner from "@/shared/Shop2/Banner";
import ShopNav from "@/shared/Shop2/Nav";

import ShopNavBlocks from "./ShopNav";

import ProductsView from "./ProductsView";
import Certifications from "./Certifications";
import TermsNConditions from "./TNC";
import AboutUs from "./AboutUs";

import { getShop } from "@/_controllers/shop";
import MoreShops from "./MoreShops";

const Shop = () => {
    const router = useRouter();

    const { query } = router;

    const [shop, setShop] = useState({});

    useEffect(async () => {
        const { id } = router.query;

        if (!id) return;

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
            <Fetcher />
            <div className="page-section pt-0">
                <ShopBanner cover={shop.cover} />
                <ShopNav
                    name={shop.name}
                    shopId={shop.id}
                    logo={shop.logo && shop.logo.url}
                    description={shop.description}
                >
                    <ShopNavBlocks />
                </ShopNav>

                <div className="container">
                    {(!query.tab || query.tab === "products") && (
                        <ProductsView shop={shop} />
                    )}

                    {query.tab === "certificates" && <Certifications />}

                    {query.tab === "terms-n-conditions" && (
                        <TermsNConditions
                            generalConditions={shop.generalConditions}
                            privacyPolicy={shop.privacyPolicy}
                            returnsAndRefunds={shop.returnsAndRefunds}
                        />
                    )}

                    {query.tab === "about-us" && <AboutUs />}
                </div>
            </div>

            <div className="container">
                <div className="spacer-20" />
                <div className="heading-wrapper mb-40">
                    <h2>Similar shops</h2>
                </div>
                <MoreShops shopId={shop.id}/>
            </div>
            <Footer />
        </>
    );
};

export default Shop;
