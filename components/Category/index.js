import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";
import Fetcher from "@/shared/Fetcher";

import View from "./View";

const CategoryView = () => {
  return (
    <>
      <Header nav={<Nav />} />
      <Fetcher />
      <View />
      <Footer />
    </>
  );
};

export default CategoryView;
