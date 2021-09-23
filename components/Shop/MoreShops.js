import { useState, useEffect } from "react";
import router, { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { fetchFavoriteShops } from "@/slices/favorites";
import { getShops } from "@/_controllers/shop";

import { addToFavorites, deleteFavorite } from "_controllers/customer";
import AppLoader from "@/utils/AppLoader/AppLoader";

const MoreShops = (props) => { 
    const dispatch = useDispatch();
    const { customer } = useSelector((state) => state.customer);
    const { favoriteShops } = useSelector(
        (state) => state.favorites
    );

    const [shops, setShops] = useState(false); 

    useEffect(async () => {
        fetchShops()
    }, []);

    const fetchShops = async () => {
        setShops(false)
        let data = await getShops();
        setShops(data)
    }

    useEffect(() => {
        if (!customer.id) return;

        if (!favoriteShops || !favoriteShops.length)
            dispatch(fetchFavoriteShops(customer.id));
    }, [customer.id]); 

    const toggleFavorites = async (shopId) => {
        let isFav = favoriteShops?.filter(val => val.shopId === shopId);
        if (!isFav.length > 0) {
            await addToFavorites({
                customerId: customer.id,
                userId: customer.id,
                type: "Shop",
                shop: shopId,
            });
        } else {
            await deleteFavorite(isFav[0].favId);
        }

        dispatch(fetchFavoriteShops(customer._id));
    }; 
    let count = 0;
    return (
        <div className="flex-container-more-products">

            {!shops && <AppLoader />}
            {shops && shops.length > 0 && shops.map((shop, index) => {
                let isFav = favoriteShops?.filter(val => val.shopId === shop._id).length > 0;
                const image = shop.images.length > 0 ? shop.images[0].url : "";
                if (count < 4 && shop._id != props.shopId)  {
                    count++;
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
                                <a className="potw-name w-inline-block cursor" onClick={() => router.push(`/shop/${shop._id}?fiters={"shopName": "${shop?.name}"}`)}>
                                    <div>{shop?.name}</div>
                                    <img
                                        src="/images/expand-more-black-24-dp.svg"
                                        loading="lazy"
                                        alt="Next"
                                    />
                                </a>
                                <a className="potw-like active w-inline-block cursor" onClick={() => toggleFavorites(shop._id)}>
                                    {isFav && <img
                                        src="/images/favorite-border-black-24-dp-2.svg"
                                        loading="lazy"
                                        width={25}
                                        alt="Like"
                                        className="orange-heart"
                                    />} 
                                    <img
                                        src="/images/favorite-border-black-24-dp_1.svg"
                                        loading="lazy"
                                        alt="Like"
                                        className="heart"
                                    />
                                </a>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default MoreShops;
