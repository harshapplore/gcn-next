import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Nav from "./Nav";
import Description from "./Description";
import TermsAndConditions from "./TermsAndConditions";
import Reviews from "./Reviews";

const DetailsPane = ({ product }) => {
  const { query } = useRouter();

  return (
    <>
      <div className="page-section pt-0 wf-section">
        <Nav />
        {(!query.tab || query.tab === "description") && (
          <Description description={product.description} />
        )}

        {query.tab === "terms-n-conditions" && (
          <TermsAndConditions
            generalConditions={product.shop.generalConditions}
            privacyPolicy={product.shop.privacyPolicy}
            returnsAndRefunds={product.shop.returnsAndRefunds}
          />
        )}

        {
          query.tab === "reviews" && <Reviews />
        }
      </div>
    </>
  );
};

export default DetailsPane;
