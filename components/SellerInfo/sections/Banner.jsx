import { useState } from "react";
import AuthForm from "@/shared/Auth/AuthForm";

const Banner = () => {
  const [showAuth, setShowAuth] = useState();

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
        <div className="home-banner-content" onClick={() => setShowAuth(true)}>
          <a className="button blue w-button">Start selling now</a>
        </div>
      </div>
      {showAuth && <AuthForm close={() => setShowAuth(false)} />}
    </div>
  );
};

export default Banner;
