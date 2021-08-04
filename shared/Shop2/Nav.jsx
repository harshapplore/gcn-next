import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useRouter } from "next/router";

import { triggerInput } from "libs/upload";
import { authAxios } from "@/setups/axios";
import { fetchSeller } from "@/slices/user";

import styled from "styled-components";
import { OutlinedButton } from "../Button";

const ShopNavContainer = styled.div`
  display: flex;

  .left-container {
    width: 300px;
    padding-left: 24px;

    .image-container {
      width: 200px;
      height: 200px;

      display: flex;
      justify-content: center;
      align-items: center;

      background: ${({ logo }) =>
        logo ? `url("${logo}")` : "var(--background)"};
      border-radius: 50%;

      background-repeat: no-repeat;
      background-size: cover;
      border: 0.5px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.35);

      transform: translateY(-30%);
    }
  }

  .right-container {
    .shop-name-container {
      padding-inline: 24px;
      padding-top: 24px;

      display: flex;
      align-items: center;
      gap: 24px;

      .edit-button-ctr {
        > div{
          padding: 6px 12px;
        }
      }
    }

    .signout-button-ctr {
      padding-inline: 24px;
      cursor: pointer;

      font-size: 18px;
      transition: 0.5s all ease-in;

      &:hover{
        color: var(--secondary);
      }
    }
  }
`;

const ShopNav = ({ name, logo, edit, children, isSellerPage }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { seller } = useSelector((state) => state.user);

  const inputRef = useRef();
  const [shop, setShop] = useState({});

  useEffect(() => {
    if (seller && seller.shop) setShop(seller.shop);
  }, [seller]);

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
      ;
      <div className="left-container">
        <div className="image-container">
          {edit && (
            <OutlinedButton
              type="secondary"
              name="Add Logo"
              action={() => triggerInput(inputRef)}
            />
          )}
        </div>
      </div>
      <div className="right-container">
        {children}
        <div className="shop-name-container">
          <h1> {name || shop.name || null}</h1>

          {isSellerPage && (
            <div className="edit-button-ctr">
              <OutlinedButton type="secondary" name="edit" action={() => router.push('/seller-onboarding/shop-details')}/>
            </div>
          )}
        </div>
        {isSellerPage && <div className="signout-button-ctr" onClick={() => {
          localStorage.clear();
          location.reload();
        }}>Sign Out</div>}
      </div>
    </ShopNavContainer>
  );
};

export default ShopNav;
