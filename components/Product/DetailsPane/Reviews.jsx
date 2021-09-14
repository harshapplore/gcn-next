import { useState, useEffect } from "react";

import Rating from "@/shared/Shop2/Product/Rating";

import RatingInput from "@/shared/Input/Rating";
import TextArea from "@/shared/Input/TextArea";
import Button from "@/shared/Button";

const Reviews = () => {
  const [review, setReview] = useState({});

  return (
    <div className="container narrow-container">
      <div className="flex mt30 mb-70">
        <div className="flex flex50 flexleft">
          <h3 className="mt0 mb0">600 Reviews</h3>
          <div className="starcontainer flex">
            <Rating rating={2} />
          </div>
        </div>
        <div className="div-block-11 flex">
          <div className="text-block-6 border-right-grey cursor no-select">
            Product Reviews
          </div>
          <div className="text-block-7 text-block-6 bold cursor no-select">
            Shop Reviews
          </div>
        </div>
      </div>
      <div className="reviewcontainer flex flexleft">
        <div className="aligntop">
          <img
            src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
            loading="lazy"
            width={32}
            height={32}
            alt=""
            className="image-3"
          />
        </div>
        <div className="flexitem flexwide ml15">
          <div className="flex flexleft">
            <div className="text-block-8">Megan Brooks</div>
            <div className="starcontainer flex">
              <Rating rating={2} />
            </div>
            <div className="text-block-8 align-right greyfont normal">
              01.01.2021
            </div>
          </div>
          <div className="product-description mt20 w-richtext">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>

      <div className="reviewcontainers">
        <div className="starcontainer">
          <h3> Review this product </h3>
        </div>
        <div className="spacer-40">
          <RatingInput
            rating={review.rating}
            setRating={(rating) => setReview({ ...review, rating })}
          />
        </div>
        <div>
          <TextArea
            placeholder="Write your review here"
            value={review.review}
            setValue={(review) => setReview({ ...review, review })}
          />
        </div>
      </div>
      <div className="spacer-20" />
      <Button name="Add Review" type="secondary" action={() => {}} />
    </div>
  );
};

export default Reviews;
