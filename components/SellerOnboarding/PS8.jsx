import { useEffect, useState } from "react";
import styles from "./onboarding.module.scss";

import { useSelector } from "react-redux";
import authAxios from "@/setups/axios";

import {} from "@/controllers/shop";

import Message from "@/shared/Message";
import Button from "@/shared/Button";

const PS8 = ({ next }) => {
  const { seller } = useSelector((state) => state.user);

  const [shop, setShop] = useState(seller.shop || "");

  const [err, setErr] = useState("");
  const [availablility, setAvailability] = useState();

  useEffect(() => {
    if (seller.shop && seller.shop.id) setShop(seller.shop);
  }, [seller]);

  const checkAvailability = async () => {
    setAvailability(null);

    const res = await 

  }

  const submit = async (e) => {
    e.preventDefault();

    if (!shop.name) {
      setErr("Shop Name cannot be empty");
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

        {availablility && }
        
        <Button type="secondary" name="Save & Continue" action={submit} />
      </div>
    </div>
  );
};

export default PS8;
