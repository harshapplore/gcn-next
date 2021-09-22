import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { axios } from "@/setups/axios";
import QS from "query-string";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";

import styles from "./social.module.scss";

import { getUser, putRole } from "@/_controllers/auth";

const Social = () => {
  const router = useRouter();

  const [provider, setProvider] = useState("");
  const [user, setUser] = useState({});
  const [token, setToken] = useState({});

  useEffect(async () => {
    const { provider, ...params } = router.query;
    if (!provider) return;

    setProvider(provider);

    const url = `/users/googleAuth?${QS.stringify(params)}`;
    const res = await axios()({
      url,
      method: "GET",
    });

    if (res.data) {
      localStorage.setItem("token", res.data.jwt);

      setToken(res.data.jwt);

      const user = await getUser(res.data.jwt);
      setUser(user);
    }
  }, [router.query]);

  useEffect(() => {
    if (!user || !user.type) return;

    localStorage.setItem("data", JSON.stringify(user));

    if (user.type === "seller") router.push("/seller");
    if (user.type === "customer") router.push("/customer");
  }, [user]);

  const updateRole = async (role) => {
    const user = await putRole(token, role);

    localStorage.setItem("data", JSON.stringify(user));

    if (user.type === "seller") router.push("/seller-onboarding");
    if (user.type === "customer") router.push("/customer");
  };
  
  return (
    <>
      <Head> {provider} Login | Green Cloud Nine </Head>
      <Header nav={<Nav />} />
      <div className={styles["provider-container"]}>
        {user.type && "Authenticating... Please wait!"}
        {user.id && !user.type && (
          <>
            <h2 className="center">Please choose a role</h2>
            <div className={styles["input-blocks-ctr"]}>
              <div
                className={styles.block}
                onClick={() => updateRole("customer")}
              >
                Customer
              </div>

              <div
                className={styles.block}
                onClick={() => updateRole("seller")}
              >
                Seller
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Social;
