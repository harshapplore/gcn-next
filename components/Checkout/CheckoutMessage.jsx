import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const CheckoutMessage = () => {
  const router = useRouter();

  useEffect(() => {
    const { orderId } = router.query;
  }, [router.query]);

  return (
    <div className="page-section blue-gradient wf-section">
      <div className="container">
        <div className="_40-wrapper">
          <h2 className="jumbo">Thank you for your purchase!</h2>
          <p className="mb-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
            pretium tempor. Ut eget imperdiet neque. In volutpat ante semper
            diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet,
            molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat
            eget semper id, viverra eget nibh.
          </p>
          <a
            className="button mr-20"
            onClick={() => {
              router.push("/");
            }}
          >
            Explore more
          </a>
          <a className="button secondary">View Order</a>
          <div className="frog-wrapper">
            <img
              src="images/bitmap.png"
              loading="lazy"
              alt="Frog in nature"
              className="frog-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutMessage;
