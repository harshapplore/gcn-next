import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { triggerInput } from "libs/upload";

import { fetchSeller } from "@/slices/user";
import { authAxios } from "@/setups/axios";

import Loader from "react-loader-spinner";

import styled from "styled-components";

const BannerContainer = styled.div`
  height: ${({ height }) => (height ? height : "350px")};
  background: ${({ cover }) =>
    cover ? `url('${cover}')` : "var(--background)"};

  background-repeat: no-repeat;
  background-size: 100vw;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  .cover-edit-button {
    background: var(--primary);
    color: #fff;
    margin: 20px;
    padding: 10px 25px;
    border-radius: 25px;

    &:hover {
      box-shadow: 1px 1px 2px -5px rgba(0, 0, 0, 0.25);
    }

    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const ShopBanner = ({ cover, edit, height }) => {
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.user);
  const inputRef = useRef();

  const [shop, setShop] = useState({});

  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    const res = await authAxios()({
      url: "/upload",
      method: "POST",
      data: formData,
    });

    if (res) {
      dispatch(fetchSeller());
    }

    setLoading(false);
  };

  return (
    <BannerContainer
      cover={(cover && cover.url) || (shop.cover && shop.cover.url)}
      height={height}
    >
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

      {edit && (
        <div
          className="cover-edit-button cursor"
          onClick={() => triggerInput(inputRef)}
        >
          {loading &&
          <div className="loader-conatiner">
              <Loader type="Oval" color="#fff" height={18} width={18} />
          </div> }
          <span> Change Cover </span>
        </div>
      )}
    </BannerContainer>
  );
};

export default ShopBanner;
