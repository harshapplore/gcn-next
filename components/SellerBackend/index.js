import Nav from "shared/Nav";
import { useRouter } from "next/router";

import ShopBanner from "./ShopBanner";
import TopNav from "./TopNav";
import NavSidebar from "./NavSideBar";
import ShopHeading from "./ShopHeading";

const SellerBackend = () => {
  const router = useRouter();

  return (
    <>
      <Nav />
      <div className="page-section pt-0">
        <ShopBanner />
        <TopNav />

        <div className="container">
          <div className="flex top">
            <NavSidebar />
            <div className="shop-content">
              <ShopHeading />

              {/* <!-- Add here --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerBackend;
