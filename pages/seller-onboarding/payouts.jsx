import { useState, useEffect } from "react";
import router from "next/router";

import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Fetcher from "@/shared/Fetcher";
import Footer from "@/shared/Footer";


import { useImageInput } from "@/_hooks";

import TextInput from "@/shared/Input/Text";
import { Button, OutlinedButton } from "@/shared/Button";

const Payouts = () => {

  const [data, setData] = useState({});

  return (
    <>
      <Header nav={<Nav />} />
      <Fetcher />
      <div className="container">
        <div className="product-add-block">
          <h3 className="mb-20"> IBAN </h3>
          <div className="mb-40 flex left-2">
            <TextInput placeholder="IBAN Number" />
            <div />
          </div>

          {/* <div className="spacer-20" /> */}

          <h3 className="mb-20"> Identity Documents</h3>

          <div className="flex left-4 flex-wrap">
            <div className="product-add-block">
              <OutlinedButton name="Upload Front View" />
            </div>
            <div className="product-add-block">
              <OutlinedButton name="Upload Back View" />
            </div>
          </div>

          <div className="spacer-40" />

          <h3 className="mb-20"> Proof Of Address Documents</h3>

          <div className="flex left-4 flex-wrap">
            <div className="product-add-block">
              <OutlinedButton name="Upload Front View" />
            </div>
            <div className="product-add-block">
              <OutlinedButton name="Upload Back View" />
            </div>
          </div>
        </div>

        <div className="spacer-20" />
        <Button type="secondary" name="Save" caps={true}/>
        <div className="spacer-40" />
      </div>

      <Footer />
    </>
  );
};

export default Payouts;
