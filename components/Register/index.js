import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Register = () => {
  const router = useRouter();

  useEffect(async () => {
    const { authType, id_token } = router.query;

    const res = await axios()({
      url: `/connect/${authType}/callback?id_token=${id_token}`,
      method: "GET",
    });

    console.log(res.data);
  }, [router.query]);

  console.log(router.query);

  return (
    <div className="register-login-message">
      Authenticating... Please wait!!
    </div>
  );
};

export default Register;
