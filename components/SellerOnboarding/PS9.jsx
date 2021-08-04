import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { fetchSeller } from "@/slices/user";

import { authAxios } from "@/setups/axios";

import ShopBanner from "@/shared/Shop2";
import ShopNav from "@/shared/Shop2/Nav";
import { Button, OutlinedButton } from "@/shared/Button";

import styles from "./onboarding.module.scss";

const PS9 = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.user);

  const tabs = ["English", "German"];

  const [shop, setShop] = useState({});
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [data, setData] = useState({});

  const productImageRef = useRef();

  useEffect(() => {
    if (seller.shop) setShop(seller.shop);
  }, [seller]);

  const triggerInput = (ref) => {
    const input = ref.current;
    input.click();
  };

  const uploadMultiple = async (e, data) => {
    e.preventDefault();

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

    if (res) router.push("/seller-backend");
  };

  return (
    <div className="page-section">
      <ShopBanner cover={shop.cover} edit={true} />

      <ShopNav name={shop.name} edit={true} />

      <div className={styles["shop-container"]}>
        <div className={styles["left-container"]}>&nbsp;</div>
        <div className={styles["right-container"]}>
          <div className={styles["cover-images"]}>
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

            {shop.images &&
              shop.images.map((image, index) => (
                <div key={"img-" + index} className={styles["shop-image"]}>
                  <img
                    className={styles["image"]}
                    sizes="150px"
                    src={image.url}
                    alt="cover_image"
                  />
                </div>
              ))}
          </div>
          <OutlinedButton
            type="secondary"
            name="Add Shop Images"
            action={() => triggerInput(productImageRef)}
          />

          <div className={styles["description-container"]}>
            <div className={styles["input-tabs"]}>
              {tabs.map((tab, index) => {
                const classes = [styles.tab];

                if (activeTab === tab) classes.push(styles.active);

                return (
                  <div
                    className={classes.join(" ")}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </div>
                );
              })}
            </div>

            {activeTab === tabs[0] && (
              <div className={styles["textbox-container"]}>
                <textarea
                  value={data.description}
                  placeholder="Short Description"
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                />
              </div>
            )}

            {activeTab === tabs[1] && (
              <div className={styles["textbox-container"]}>
                <textarea
                  value={data.descriptionInGerman}
                  placeholder="Short Description (German)"
                  onChange={(e) =>
                    setData({ ...data, descriptionInGerman: e.target.value })
                  }
                />
              </div>
            )}
          </div>

          <Button type="secondary" name="Save & Continue" action={submit} />
        </div>
      </div>
    </div>
  );
};

export default PS9;
