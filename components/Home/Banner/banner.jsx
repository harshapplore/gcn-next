import { useState } from "react";
import Image from "next/image";

import SignIn from "./SignIn";
import Register from "./Register";

import UpIcon from "assets/images/up-icon.svg";

const Banner = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  console.log(showSignIn, showRegister);

  return (
    <div className="page-section banner">
      <img
        src="images/bild-header2x.jpg"
        loading="lazy"
        sizes="100vw"
        srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
        alt="Handcrafted stuff"
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
            onClick={() => setShowSignIn(true)}
          >
            <div className="button-icon w-embed">
              <img src={UpIcon.src} alt="" />
            </div>
            <div className="text-block">Sell products</div>
          </div>
        </div>
      </div>
      {showSignIn && (
        <SignIn
          close={() => setShowSignIn(false)}
          showRegister={() => {
            setShowSignIn(false);
            setShowRegister(true);
          }}
        />
      )}
      {showRegister && <Register close={() => setShowRegister(false)} />}
    </div>
  );
};

export default Banner;
