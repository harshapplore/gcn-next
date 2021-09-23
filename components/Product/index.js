import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { getProduct } from "@/_controllers/product";
import DetailsPane from "./DetailsPane";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Fetcher from "@/shared/Fetcher";
import AuthForm from "@/shared/Auth/AuthForm";

import Button from "@/shared/Button";
import Dropdown from "@/shared/Input/Dropdown";
import ErrorInput from "@/shared/Input/Error";

import { addToCart } from "@/_methods/cart";

import ImagesWrapper from "./ImagesWrapper";
import MoreProducts from "./MoreProducts";

const ProductDetail = () => {
    const router = useRouter();
    const { customer } = useSelector((state) => state.customer);

    const [showAuth, setShowAuth] = useState(false);

    const [product, setProduct] = useState({});

    const [data, setData] = useState({});

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(async () => {
        const { id } = router.query;

        if (id) {
            const product = await getProduct(id);
            setProduct(product);
        }
    }, [router]);

    const validated = () => {
        let error = "";

        if (product.colors && !data.color)
            error = "Please select a color for this product.";

        if (product.sizes && product.sizes.length && !data.size)
            error = "Please select a size for this product.";

        setError(error);

        if (error) return false;

        return true;
    };

    const addToCartHandler = async () => {

        if (!product.stock) {
            setError("Sorry, this item is currently out of stock");
            return;
        }

        if (!validated()) return;
        setLoading(true);
        const res = await addToCart({
            ...product,
            ...data,
            quantity: 1,
        });
        setLoading(false);

        setTimeout(() => {
            router.push("/cart");
        }, 1000);
    };

    console.log(loading)
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
                    <ImagesWrapper images={product.images} />

                    <div className="product-info-wrapper">
                        <div className="mb-20">
                            <h1 className="item-heading no-select">{product.name}</h1>
                            <div
                                className="overline-text cursor"
                                onClick={() => {
                                    router.push(`/shop/${product.shop && product.shop.id}`);
                                }}
                            >
                                By {product.shop && product.shop.name}
                            </div>
                        </div>
                        <div className="item-product-price mb-40 no-select">
                            € {product.price}
                        </div>

                        <div>
                            {product.tags &&
                                product.tags.map((tag, index) => (
                                    <div className="tag-spacer" key={"tag" + index}>
                                        <div className="tag">{tag.replace("-", " ")}</div>
                                    </div>
                                ))}
                            {product.sustainability &&
                                product.sustainability.map((tag, index) => (
                                    <div className="tag-spacer" key={"tag" + index}>
                                        <div className="tag">{tag}</div>
                                    </div>
                                ))}
                        </div>

                        <div className="spacer-20" />

                        <div className="mb-40 w-form">
                            <div className="flex-2 flex-wrap flex-gap-20">
                                {product && product.sizes && (
                                    <Dropdown
                                        choices={product && product.sizes}
                                        placeholder="Size"
                                        value={data.size}
                                        setValue={(size) => setData({ ...data, size })}
                                        width="100px"
                                    />
                                )}

                                {product && product.colors && (
                                    <Dropdown
                                        choices={product && product.colors}
                                        placeholder="Color"
                                        value={data.color}
                                        setValue={(color) => setData({ ...data, color })}
                                        width="100px"
                                    />
                                )}
                            </div>

                            <div className="spacer-20" />

                            {error && (
                                <>
                                    {" "}
                                    <ErrorInput message={error} /> <div className="spacer-10" />
                                </>
                            )}

                            <Button
                                name="Add to Cart"
                                caps={true}
                                action={addToCartHandler}
                                loading={loading}
                            />
                        </div>
                        <div className="mb-10">
                            <img
                                src="/images/done-black-24-dp.svg"
                                loading="lazy"
                                alt="Checkmark"
                            />
                            <div className="item-additional-info">
                                {product.stock ? "In Stock" : "Currently Unavailable"}, Delivery
                                time: 2 – 5 days
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

            <DetailsPane product={product} />

            <div className="page-section">
                <div className="container">
                    <div className="heading-wrapper mb-40">
                        <h2>You may also like ...</h2>
                    </div>
                    {product.shop && <MoreProducts shop={product.shop && product.shop.name}/>}

                    {/* <div className="flex">
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
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
