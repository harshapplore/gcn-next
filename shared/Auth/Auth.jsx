import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loader from "react-loader-spinner";

import { useRouter } from "next/router";

import { fetchUser } from "@/slices/user";

import AuthForm from "./AuthForm";

const routes = {
  "/seller-onboarding": {
    auth: true,
    type: "seller",
  },
  "/seller-onboarding/[section]": {
    auth: true,
    type: "seller",
  },
  "/seller": {
    auth: true,
    type: "seller",
  },
  "/seller/[section]": {
    auth: true,
    type: "seller",
  },
  "/customer": {
    auth: true,
    type: "customer",
  },
  "/customer/[section]": {
    auth: true,
    type: "customer",
  },
  "/customer/[section]/[orderId]": {
    auth: true,
    type: "customer",
  },
  "/cart": {
    auth: true,
    type: "customer",
  },
};

const Auth = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { authenticating, isLoggedIn, user } = useSelector(
    (state) => state.user
  );

  const [activeRoute, setActiveRoute] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const getUser = useCallback(() => dispatch(fetchUser()), [dispatch]);

  useEffect(() => {
    if (!localStorage.getItem("token")) return;

    if (!user._id) getUser();
  }, []);

  useEffect(() => {
    const { route } = router;
    setActiveRoute(routes[route] || {});
  }, [router]);

  useEffect(() => {
    if (authenticating) setIsLoading(true);

    if (!router.isReady) setIsLoading(true);

    if (router.isReady && !authenticating) setIsLoading(false);
  }, [authenticating, router.isReady]);

  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <Loader
            type="BallTriangle"
            color="#808800"
            height={100}
            width={100}
          />
        </div>
      )}

      {!isLoading && (
        <>
          {!activeRoute.auth && children}

          {!isLoggedIn && <AuthForm />}

          {isLoggedIn && !activeRoute.type && children}

          {isLoggedIn && activeRoute.type === user.type && children}

          {isLoggedIn &&
            activeRoute.type !== user.type &&
            "Forbidden: Access Denied."}
        </>
      )}
    </>
  );
};

export default Auth;
