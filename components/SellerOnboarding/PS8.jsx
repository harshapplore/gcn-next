import { useEffect, useState } from "react";
import styles from "./onboarding.module.scss";

import { useSelector } from "react-redux";
import authAxios from "@/setups/axios";

import { getShopByFilter } from "@/_controllers/shop";

import Message from "@/shared/Message";
import Button from "@/shared/Button";

const PS8 = ({ next }) => {
  const { seller } = useSelector((state) => state.user);

  const [shop, setShop] = useState(seller.shop || "");

  const [error, setError] = useState("");
  const [available, setAvailable] = useState();

  useEffect(() => {
    if (seller.shop && seller.shop.id) setShop(seller.shop);
  }, [seller]);

  useEffect(() => { setAvailable(null); }, [shop.name])

  const checkAvailability = async () => {
    setAvailable(null);

    const shops = await getShopByFilter({
      name: shop && shop.name,
    });

    if (!shops.length) {
      setAvailable("available");
      return true;
    }

    if (shops.length) {
      setAvailable("not-available");
      return false;
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    setError("");

    if (seller.shop && seller.shop.name === shop.name) {
      next();
      return;
    }

    if (!await checkAvailability()) {
      return;
    }

    if (!shop.name) {
      setError("Shop Name cannot be empty");
      return;
    }

    const res = await authAxios()({
      url: `/shops/${seller.shop.id}`,
      method: "PUT",
      data: {
        name: shop.name,
      },
    });

    if (res) next();
  };

  return (
    <div className={styles["shop-name-ctr"]}>
      <h1> Name your Shop </h1>
      <div className={styles["text-ctr"]}>
        <div className={styles["input-ctr"]}>
          <input
            type="text"
            value={shop.name || ""}
            placeholder="Thomas' Soap Shop"
            onChange={(e) => setShop({ ...shop, name: e.target.value })}
          />
        </div>

        {available && available === "not-available" && (
          <div className={styles["not-available"]}>
            "{shop.name}" is not available. Please try a different name.
          </div>
        )}

        <Button type="secondary" name="Save & Continue" action={submit} />
      </div>

      {error && error.length>0 && <Message text={error} status={-1} />}
    </div>
  );
};

export default PS8;
