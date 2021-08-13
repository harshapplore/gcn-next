import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { axios } from "@/setups/axios";
import QS from "query-string";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";

import styles from "./social.module.scss";

const Social = () => {
  const router = useRouter();

  const [provider, setProvider] = useState("");

  useEffect(async () => {
    const { provider, ...params } = router.query;

    if (!provider) return;

    setProvider(provider);

    const url = `/auth/${provider}/callback?${QS.stringify(params)}`;
    console.log(url);

    const res = await axios()({
      url,
      method: "GET",
    });

    console.log("Reponse Data", res.data);

    if (res.data) {
      localStorage.setItem("token", res.data.jwt);

      console.log(res.data.jwt);

      // Get user details
    }
  }, [router.query]);

  console.log("RQ", router.query);

  return (
    <>
      <Head> {provider} Login | Green Cloud Nine </Head>
      <Header nav={<Nav />} />
      <div className={styles["provider-container"]}>
        Authenticating... Please wait!!
        {/* <div className={styles["input-blocks-ctr"]}>
          <div className={styles.block}>Customer</div>

          <div className={styles.block}>Seller</div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Social;