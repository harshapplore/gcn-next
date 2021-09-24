import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "@/_controllers/product";

import { addToFavorites, deleteFavorite } from "@/_controllers/customer";
import router from "next/router";
import { fetchFavoriteItems } from "@/slices/favorites";

const ProductCard = ({ product, customerId }) => {
    let productId = product.id;
    const dispatch = useDispatch();


    const { user } = useSelector((state) => state.user);
    const { customer } = useSelector((state) => state.customer);
    const { favoriteItems } = useSelector((state) => state.favorites);

    const [isFavorite, setIsFavorite] = useState(false);
    const [favId, setFavId] = useState("");

    useEffect(() => {
        if (!customer.id) return;

        if (!favoriteItems || !favoriteItems.length)
            dispatch(fetchFavoriteItems(customer.id));
    }, [customer]);

    useEffect(() => {
        if (!favoriteItems || !favoriteItems.length) return;

        const index = favoriteItems.findIndex(
            (fav) => fav.productId === product.id
        );

        if (index === -1) {
            setIsFavorite(false);
            return;
        }

        if (index >= 0) {
            setIsFavorite(true);
            setFavId(favoriteItems[index].favId);
        }
    }, [favoriteItems]);

    const toggleFavorite = async (e) => {
        e.stopPropagation();

        if (isFavorite) {
            await deleteFavorite(favId);
        } else
            await addToFavorites({
                customerId: customer.id,
                userId: user.id,
                type: "Product",
                product: product.id,
            });

        dispatch(fetchFavoriteItems(customer.id));
    };
    return (
        // <Link href={`/product/${product.id}`}>
            <div className="flex-child-32 cursor">
                <div className="potw-item">
                    <img
                        src={product.main && product.main.url}
                        alt="Handcrafted stuff"
                        className="back-img"
                    />
                    <a className="potw-name w-inline-block cursor" onClick={() => router.push("/product/${product.id}")}>
                        <div>{product.name}</div>
                        <img
                            src="images/expand-more-black-24-dp.svg"
                            loading="lazy"
                            alt="Next"
                        />
                    </a>
                    {customerId && (
                    <a 
                        className={
                            "potw-like w-inline-block" + (isFavorite ? " active" : "")
                        }
                        onClick={toggleFavorite}
                        > 
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
                    )}
                </div>
            </div>
        // </Link>
    );
};

const PageSection = () => {
    const [_products, _setProducts] = useState();

    const { customer } = useSelector((state) => state.customer);
    const { user } = useSelector((state) => state.user);
    useEffect(async () => {
        const products = await getProducts({
            price_gt: 10,
            _sort: "name:asc",
            _limit: 6,
        });

        _setProducts(products);
    }, []);

    return (
        <div className="page-section border-bottom">
            <div className="container">
                <div className="flex center mb-60">
                    <h1>Products of the week</h1>
                    <a className="button w-button">More</a>
                </div>
                <div className="flex">
                    {_products &&
                        _products.length > 0 &&
                        _products.map((product, index) => { 
                            return  (
                                <ProductCard 
                                    key={"x" + index} 
                                    product={product} 
                                    customerId={customer.id}  
                                />
                            )
                    })}
                </div>
            </div>
        </div>
    );
};

export default PageSection;
