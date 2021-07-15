import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { triggerInput } from "libs/upload";
import { authAxios } from "setups/axios";
import { fetchSeller } from "slices/user";

const ShopNav = ({ children }) => {
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
    <div className="nav-area">
      <div className="container">
        <div className="flex no-wrap">
          <div className="shop-filter">
            <div
              className="logo-floater"
              onClick={() => triggerInput(inputRef)}
            >
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
              <img
                src={
                  (shop.logo && shop.logo.url) || "/images/bild-header2x.jpg"
                }
                loading="lazy"
                sizes="(max-width: 479px) 46vw, (max-width: 767px) 29vw, 200px"
                // srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                alt="Shop Logo"
                className="logo-img"
              />
              <div className="mobile-title">
                <h1>Green Fashion Shop</h1>
                <div className="overline-text mb-40">30 Products</div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ShopNav;
