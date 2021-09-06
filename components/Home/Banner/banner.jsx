import { useState } from "react";
import router from "next/router";
import Image from "next/image";

import UpIcon from "@/assets/images/up-icon.svg";
import GreenCloudNineBanner from "@/assets/images/gcn-banner.png";

const Banner = () => {
  return (
    <div className="page-section banner">
      <img
        src={GreenCloudNineBanner.src}
        loading="lazy"
        sizes="100vw"
        alt="Green Cloud Nine - Banner"
        className="back-img"
      />
      <div className="container">
        <div className="home-banner-content">
          <div className="button icon orange mx-10 w-inline-block">
            <div className="button-icon w-embed">
              <Image {...UpIcon} alt="" />
            </div>
            <div className="text-block">Discover products</div>
          </div>
          <div
            className="button icon blue mx-10 w-inline-block"
            onClick={() => router.push("/seller-info")}
          >
            <div className="button-icon w-embed">
              <img src={UpIcon.src} alt="" />
            </div>
            <div className="text-block">Sell products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
