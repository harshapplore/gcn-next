import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { triggerInput } from "libs/upload";

import { fetchSeller } from "@/slices/user";
import { authAxios } from "@/setups/axios";

import styled from "styled-components";
import { OutlinedButton } from "../Button";

const BannerContainer = styled.div`
  height: 527px;
  background: ${({ cover }) =>
    cover ? `url('${cover}')` : "var(--background)"};

  background-repeat: no-repeat;
  background-size: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px){
    display: none;
  }
`;

const ShopBanner = ({ cover, edit }) => {
  const dispatch = useDispatch();
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
    <BannerContainer cover={(cover && cover.url) || (shop.cover && shop.cover.url)}>
      <input
        ref={inputRef}
        type="file"
        className="hidden-input"
        onChange={(e) =>
          upload(e, {
            field: "cover",
            path: "/shop/cover",
          })
        }
      />

      {edit && <OutlinedButton
        type="secondary"
        name="Add Cover"
        action={() => triggerInput(inputRef)}
      />}
    </BannerContainer>
  );
};

export default ShopBanner;
