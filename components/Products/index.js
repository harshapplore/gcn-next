import { useDispatch } from "react-redux";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";
import Fetcher from "@/shared/Fetcher";


import { fetchFavoriteItems } from "@/slices/favorites";

import View from "./View";
import { useEffect } from "react";

const ProductsView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteItems());
  }, []);

  return (
    <>
      <Header nav={<Nav />} />
      <Fetcher />
      <br />
      <View />
      <Footer />
    </>
  );
};

export default ProductsView;
