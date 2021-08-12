import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { axios } from "@/setups/axios";
import QS from "query-string";

const Social = () => {
  const router = useRouter();

  useEffect(async () => {
    const { provider, ...params } = router.query;

    const res = await axios()({
      url: `/connect/${provider}/callback?${QS.stringify(...params)}`,
      method: "GET",
    });

    console.log("Reponse Data", res.data);

    if (res.data) {
      localStorage.setItem("token", res.data.jwt);

      // Get user details
    }
  }, [router.query]);

  console.log("RQ", router.query);

  return (
    <div className="register-login-message">
      Authenticating... Please wait!!
    </div>
  );
};

export default Register;
