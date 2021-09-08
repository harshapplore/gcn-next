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
        <div className="heading-wrapper mb-40">
          <h2 className="mb-10"> Payouts </h2>
          <p>
            This page contains information about how you will be paid. Please
            confirm this information, since this would be used to process your
            sales proceedss.
          </p>
        </div>
        <div className="product-add-block mb-40">
          <h3 className="mb-20"> Basic Information </h3>
          <div className="flex left-2 mb-40 flex-wrap">
            <TextInput placeholder="Legal Business Name*" />
            <TextInput placeholder="Company Website" />
            <TextInput placeholder="Email*" />
            <TextInput placeholder="Phone*" />
          </div>

          <div className="spacer-40" />

          <h3 className="mb-20"> Address </h3>
          <div className="flex left-2 mb-40 flex-wrap">
            <TextInput placeholder="Street Address*" />
            <TextInput placeholder="City*" />
            <TextInput placeholder="Postal Code*" />
            <TextInput placeholder="Country*" />
          </div>
        </div>

        <div className="spacer-60" />

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
