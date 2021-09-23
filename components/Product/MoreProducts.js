import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { fetchFavoriteItems, fetchFavoriteShops } from "@/slices/favorites";
import { ShopItem } from '../Products/View'
import { getProducts } from "@/_controllers/product";
import { filterQuery, filterConverter } from "@/_methods/filters";
import { urqlClient } from "@/setups/urql";

const MoreProducts = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { customer } = useSelector((state) => state.customer);
    const { favoriteItems, favoriteShops } = useSelector(
        (state) => state.favorites
    );

    const [products, setProducts] = useState([]);

    useEffect(async () => { 
        let filters = JSON.stringify({ "brand": props.shop })
        console.log(props)
        const _filters = JSON.parse(decodeURIComponent(filters));
        if (Object.keys(filters)) {
            const data = filterConverter(_filters);
            const results = await urqlClient.query(filterQuery, data).toPromise();

            setProducts(results.data && results.data.products);
            return;
        } 
    }, [router.query]);


    useEffect(() => {
        if (!customer.id) return;

        if (!favoriteItems || !favoriteItems.length)
            dispatch(fetchFavoriteItems(customer.id));

        if (!favoriteShops || !favoriteShops.length)
            dispatch(fetchFavoriteShops(customer.id));
    }, [customer.id]);

    return (
        <div className="flex-container-more-products">
            {products && products.length > 0 && products.map((product, index) => {
                if(index < 4) 
                return (
                    <ShopItem
                        key={"pro" + index}
                        product={product}
                        favorites={favoriteItems}
                    />
                )
            })}
        </div>
    );
};

export default MoreProducts;
