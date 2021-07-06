import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { triggerInput, constructUploader } from "libs/upload";

import { fetchSeller } from "slices/user";
import { authAxios } from "setups/axios";

const ShopBanner = () => {
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
    <div className="relative hide-mobile">
      <img
        src={(shop.cover && shop.cover.url) || "/images/bild-header2x.jpg"}
        loading="lazy"
        sizes="100vw"
        // srcSet="/images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
        className="shop-banner-img"
      />
      <div className="shop-img-link floating w-inline-block">
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
        <div className="new-img-wrapper" onClick={() => triggerInput(inputRef)}>
          <img
            src="/images/expand-more-black-24-dp.svg"
            loading="lazy"
            alt="x-10"
            className="mb-10"
            alt=""
          />
          <div>Add image</div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
