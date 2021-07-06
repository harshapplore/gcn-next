import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 } from "uuid";

import { fetchSeller } from "slices/user";

import { authAxios, axios } from "setups/axios";

const ProductImage = ({ url }) => {
  return (
    <div className="shop-img-link">
      <a className="shop-delete w-inline-block">
        <img
          src="/images/favorite-border-black-24-dp-2.svg"
          loading="lazy"
          alt="Like"
        />
      </a>
      <img
        src={url}
        loading="lazy"
        sizes="150px"
        // srcSet="/images/bild-header2x-p-500.jpeg 500w, /images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
        alt="Product Image"
        className="back-img"
      />
    </div>
  );
};

const PS9 = () => {
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.user);

  const [shop, setShop] = useState({});
  const [activeTab, setActiveTab] = useState(1);
  const [data, setData] = useState({});

  const coverInputRef = useRef();
  const profileRef = useRef();
  const productImageRef = useRef();

  useEffect(() => {
    if (seller.shop) setShop(seller.shop);
  }, [seller]);

  const triggerInput = (ref) => {
    const input = ref.current;
    input.click();
  };

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

  const uploadMultiple = async (e, data) => {
    e.preventDefault();

    const files = e.target.files;
    const formData = new FormData();

    formData.append("files", e.target.files[0], seller.id);
    formData.append("path", data.path);

    const res = await authAxios()({
      url: "/upload",
      method: "POST",
      data: formData,
    });

    if (res) {
      const newImages = (res.data && res.data.map((image) => image.id)) || [];

      const shopRes = authAxios()({
        url: `/shops/${seller.shop.id}`,
        method: "PUT",
        data: {
          images: [...seller.shop.images, ...newImages],
        },
      });

      if (shopRes) {
        dispatch(fetchSeller());
      }
    }
  };

  const submit = async (e, data) => {
    e.preventDefault();

    const res = await authAxios()({
      url: `/shops/${seller.shop.id}`,
      method: "PUT",
      data: data,
    });
  };

  return (
    <div className="page-section">
      <div>
        <input
          ref={coverInputRef}
          type="file"
          className="hidden-input"
          onChange={(e) =>
            upload(e, {
              path: "/shop/cover",
              field: "cover",
            })
          }
        />
        <img
          src={(shop.cover && shop.cover.url) || "/images/bild-header2x.jpg"}
          loading="lazy"
          sizes="100vw"
          // srcSet="/images/bild-header2x-p-500.jpeg 500w, /images/bild-header2x-p-800.jpeg 800w, /images/bild-header2x-p-2000.jpeg 2000w, /images/bild-header2x-p-2600.jpeg 2600w, /images/bild-header2x.jpg 2880w"
          alt="Upload Cover"
          className="shop-banner-img"
          onClick={() => triggerInput(coverInputRef)}
        />
      </div>
      <div className="container">
        <div className="flex">
          <div className="shop-filter">
            <input
              ref={profileRef}
              type="file"
              onChange={(e) =>
                upload(e, {
                  path: "shop/profile",
                  field: "logo",
                })
              }
              className="hidden-input"
            />
            <img
              src={(shop.logo && shop.logo.url) || "/images/bild-header2x.jpg"}
              loading="lazy"
              sizes="(max-width: 479px) 77vw, 200px"
              alt="Handcrafted stuff"
              className="logo-img"
              onClick={() => triggerInput(profileRef)}
            />
          </div>
          <div className="shop-content">
            <h1 className="mb-40"> {shop.name} </h1>
            <div className="flex left mb-40">
              {shop.images &&
                shop.images.map((image) => (
                  <ProductImage key={image.id} url={image.url} />
                ))}

              <div className="shop-img-link w-inline-block">
                <input
                  ref={productImageRef}
                  multiple={true}
                  type="file"
                  className="hidden-input"
                  onChange={(e) =>
                    uploadMultiple(e, {
                      path: "shop/images",
                    })
                  }
                />
                <div
                  className="new-img-wrapper"
                  onClick={() => triggerInput(productImageRef)}
                >
                  <img
                    src="/images/favorite-border-black-24-dp-2.svg"
                    loading="lazy"
                    alt="Like"
                    className="mb-10"
                  />
                  <div>Add image</div>
                </div>
              </div>
            </div>
            <div className="w-form">
              <form data-name="Email Form 5">
                <div className="mb-20 w-tabs">
                  <div className="tabs-menu w-tab-menu">
                    <a
                      data-w-tab="Tab 1"
                      className={
                        "terms-lang w-inline-block w-tab-link" +
                        (activeTab === 1 ? " w--current" : "")
                      }
                      onClick={() => setActiveTab(1)}
                    >
                      <div>English</div>
                    </a>
                    <a
                      data-w-tab="Tab 2"
                      className={
                        "terms-lang w-inline-block w-tab-link" +
                        (activeTab === 2 ? " w--current" : "")
                      }
                      onClick={() => setActiveTab(2)}
                    >
                      <div>German</div>
                    </a>
                  </div>
                  <div className="w-tab-content">
                    <div
                      className={
                        "w-tab-pane" + (activeTab === 1 ? " w--tab-active" : "")
                      }
                    >
                      <textarea
                        placeholder="Short Description (max. XX)"
                        maxLength={5000}
                        required
                        className="text-field area w-input"
                        onChange={(e) =>
                          setData({ ...data, description: e.target.value })
                        }
                      />
                    </div>
                    <div
                      className={
                        "w-tab-pane" + (activeTab === 2 ? " w--tab-active" : "")
                      }
                    >
                      <textarea
                        placeholder="Kurze Beschreibung (max. XX)"
                        maxLength={5000}
                        className="text-field area w-input"
                        onChange={(e) =>
                          setData({
                            ...data,
                            descriptionInGerman: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  className="button blue w-button"
                  onClick={submit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PS9;
