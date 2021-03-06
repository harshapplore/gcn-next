import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useRouter } from "next/router";

import { triggerInput } from "libs/upload";
import { authAxios } from "@/setups/axios";
import user, { fetchSeller } from "@/slices/user";

import styled from "styled-components";
import { OutlinedButton } from "../Button";

import { addToFavorites, deleteFavorite } from "_controllers/customer";
import { fetchFavoriteShops } from "@/slices/favorites";

const ShopNavContainer = styled.div`
  display: flex;

  .left-container {
    width: 300px;
    padding-left: 24px;

    .image-container {
      width: 200px;
      height: 200px;

      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      background: ${({ logo }) =>
        logo ? `url("${logo}")` : "var(--background)"};
      border-radius: 50%;

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border: 0.5px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.35);

      transform: translateY(-30%);
      @media screen and (max-width: 479px) {
        right: -60px;
        display: block;
        position: relative;
        top: 100px;
    }
    }

    .edit-logo-button {
      color: var(--primary);
      transform: translateX(85px);

      display: flex;
      align-items: center;
      gap: 5px;
      @media screen and (max-width: 479px) {

      display: block;
        position: absolute;
        top: 220px;
        left: -50px;
      }
    }
  }

  .right-container {
    flex: 1;

    .shop-name-container {
      padding-inline: 24px;
      padding-top: 24px;
      @media screen and (max-width: 479px) {
        padding-inline: 24px;
        padding-top: 24px;
        position: absolute;
        top: 310px;
        left: 75px;
    }
      .name {
        display: flex;
        align-items: center;
        gap: 24px;
      }

      .edit-button-ctr {
        > div {
          padding: 6px 12px;
        }
      }
    }

    .shop-like-ctr {
      > * {
        position: relative;
      }
    }

    .signout-button-ctr {
      padding-inline: 24px;
      cursor: pointer;

      font-size: 18px;
      transition: 0.5s all ease-in;

      &:hover {
        color: var(--secondary);
      }
    }
  }
`;

const ShopNav = ({ name, logo, description, edit, children, isSellerPage,shopId }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { seller } = useSelector((state) => state.user);
    const { customer } = useSelector((state) => state.customer);
    const { favoriteShops } = useSelector((state) => state.favorites);

    const inputRef = useRef();
    const [shop, setShop] = useState({});

    const [_isFavorite, _setIsFavorite] = useState(false);
    const [favId, setFavId] = useState("");

    useEffect(() => { 
        if (seller && seller.shop) setShop(seller.shop);
    }, [seller]);

    useEffect(() => {
        if (customer.id && !favoriteShops?.length)
            dispatch(fetchFavoriteShops(customer._id));
    }, [customer]);

    useEffect(() => { 
        const isFav = favoriteShops && favoriteShops.filter((fav) => fav.shopId === shopId);

        _setIsFavorite(isFav?.length > 0 ? true : false);
        isFav && setFavId(isFav[0]);
    }, [favoriteShops, shop]);

    const upload = async (e, data) => {
        e.preventDefault();

        const file = e.target.files[0];

        if (!file) return;

        const extension = file.name.split(".").pop();

        const formData = new FormData();

        formData.append("files", e.target.files[0], seller.id + `.${extension}`);
        formData.append("path", data.path);
        formData.append("field", data.field);

        formData.append("ref", "shop");
        formData.append("refId", data.id || seller.shop.id);

        const res = await authAxios()({
            url: "/upload",
            method: "POST",
            data: formData,
        });

        if (res) {
            dispatch(fetchSeller());
        }
    };

    const toggleFavorites = async () => {
        const { id } = router.query;

        if (!_isFavorite) {
            await addToFavorites({
                customerId: customer.id,
                userId: user.id,
                type: "Shop",
                shop: shopId,
            });
        } else {
            await deleteFavorite(favId.favId);
        }

        dispatch(fetchFavoriteShops(customer._id));
    };

    console.log(_isFavorite);

    console.log(shop)

    return (
        <ShopNavContainer logo={logo || (shop.logo && shop.logo.url)}>
            <input
                ref={inputRef}
                type="file"
                className="hidden-input"
                onChange={(e) =>
                    upload(e, {
                        field: "logo",
                        path: "/shop/logo",
                    })
                }
            />
            <div className="left-container">
                <div className="image-container">
                    {edit && (
                        <div
                            className="edit-logo-button cursor"
                            onClick={() => triggerInput(inputRef)}
                        >
                            <img src="/icons/edit-icon.svg" alt="edit-icon" />
                            <span> Change Logo </span>
                        </div>
                    )}
                </div>
            </div>
            <div className="right-container">
                {children}
                <div className="shop-name-container">
                    <div className="name mb-10">
                        <h1> {name || shop.name || null}</h1>

                        {customer.id && (
                            <div className="shop-like-ctr cursor">
                                <a
                                    className="potw-like active w-inline-block"
                                    onClick={toggleFavorites}
                                >
                                    {_isFavorite && (
                                        <img
                                            src="/images/favorite-border-black-24-dp-2.svg"
                                            loading="lazy"
                                            width={25}
                                            alt="Like"
                                            className="orange-heart"
                                        />
                                    )}
                                    <img
                                        src="/images/favorite-border-black-24-dp_1.svg"
                                        loading="lazy"
                                        alt="Like"
                                        className="heart"
                                    />
                                </a>
                            </div>
                        )}
                    </div>
                    {!isSellerPage && <p className="mb-20 ml-10"> {description}</p>}
                </div>
            </div>
        </ShopNavContainer>
    );
};

export default ShopNav;
