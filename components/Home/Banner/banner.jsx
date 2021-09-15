import { useState } from "react";
import router from "next/router";
import Image from "next/image";

import UpIcon from "@/assets/images/up-icon.svg";
import GreenCloudNineBanner from "@/assets/images/gcn-banner.png";

import { BagIcon, TagIcon } from "@/assets/icons";

const Banner = () => {
  return (
    <div className="page-section banner">
      <img
        src={GreenCloudNineBanner.src}
        loading="lazy"
        alt="Green Cloud Nine - Banner"
        className="back-img"
      />
      <div className="container">
        <div className="home-banner-content">
          <div
            className="button icon orange green-2 mb-10 w-inline-block"
            onClick={() => router.push("/products")}
          >
            <div className="button-icon w-embed">
              <BagIcon />
            </div>
            <div className="text-block">Discover products</div>
          </div>
          {/* <div className="vspacer-20 spacer-20" /> */}
          <div
            className="button icon mb-10 ml-10 green-2 blue-2 w-inline-block"
            onClick={() => router.push("/seller-info")}
          >
            <div className="button-icon w-embed">
              <TagIcon />
            </div>
            <div className="text-block">Sell products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
