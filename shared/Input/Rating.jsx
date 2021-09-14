import { useState, useEffect } from "react";

const Rating = ({ rating, setRating }) => {
  return (
    <>
      {[0, 0, 0, 0, 0].map((_, index) => {
        return (
          <img
            key={"empty-" + index}
            src={
              rating >= index + 1
                ? "/images/star-black-24-dp-copy-4.svg"
                : "/images/star-black-24-dp-copy.svg"
            }
            loading="lazy"
            alt="Empty star"
            className="shop-product-star cursor"
            onClick={() => setRating(index + 1)}
          />
        );
      })}
    </>
  );
};

export default Rating;
