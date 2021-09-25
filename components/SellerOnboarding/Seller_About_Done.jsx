import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import router from "next/router";

import ProgressBar from "./Utils/ProgressBar";

const Seller_About_Done = ({ nextPage }) => {
  const { seller } = useSelector((state) => state.user);

  console.log(nextPage);

  // const validate = () => {
  //     const err = [];;

  //     setErrors(err);

  //     if (err.length) return false;

  //     return true;
  // };
  // const submit = async (e) => {
  //     e.preventDefault();

  //     // if (!validate()) return;
  //     nextPage();

  // };

  return (
    <div className="page-section blue-gradient wf-section position-relative">
      <div className="container ">
        <div className="_40-wrapper">
          <h1 className="headline-1 overlap-right mb-40">
            Thank you for choosing Green Cloud Nine!
          </h1>
          <p className="mb-40">
            Your answers and data will be reviewed by us. You’ll get an e-mail
            in the next 72 hours from us. Your answers and data will be reviewed
            by us. You’ll get an e-mail in the next 72 hours from us. Your
            answers and data will be reviewed by us. You’ll get an e-mail in the
            next 72 hours from us.
          </p>
         <div className="button" onClick={() => router.push("/")}>
            Explore Store
          </div>
        </div>
            <img
              src="../images/bitmap.png"
              loading="lazy"
              alt="Frog in nature"
              className="frog-img"
            />
      </div>
    </div>
  );
};

export default Seller_About_Done;
