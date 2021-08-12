import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { axios } from "@/setups/axios";

const Register = () => {
  const router = useRouter();

  useEffect(async () => {
    const { authType, id_token, access_token } = router.query;

    const res = await axios()({
      url: `/connect/${authType}/callback?id_token=${id_token}`,
      method: "GET",
    });

    console.log("Auth Type", authType, "id_token", id_token);
    console.log("Reponse Data", res.data);

    if (res.data) {
      localStorage.setItem("token", res.data.jwt);

      // Get user details
    }
  }, []);

  console.log("RQ", router.query);

  return (
    <div className="register-login-message">
      Authenticating... Please wait!!
    </div>
  );
};

export default Register;
