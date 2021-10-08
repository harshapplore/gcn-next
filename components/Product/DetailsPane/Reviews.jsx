import { useState, useEffect } from "react";

import Rating from "@/shared/Shop2/Product/Rating";

import RatingInput from "@/shared/Input/Rating";
import TextArea from "@/shared/Input/TextArea";
import Button from "@/shared/Button";
import authAxios, { axios } from "@/setups/axios";
import { stringify } from "query-string";
import { useSelector } from "react-redux";

const Reviews = ({ product }) => {
  const { customer } = useSelector((state) => state.customer);

  const [review, setReview] = useState({
    "product": "",
    "text": "",
    "rating": 0,
    "user": "",
    "customer": "",
  });
  const [productReview, setProductReview] = useState([]);

  console.log(product.reviews)

  const getReviews = async (filters) => {
    const res = await axios()({
      url: `/reviews?product=${product.id}`,
      method: "GET",
    });
    console.log(res.data)
    setProductReview(res.data)
    // return res.data;
  };

  useEffect(() => {
    getReviews()
  }, [])
  console.log(productReview)
console.log(product)
  const addReview=async ()=>{
    review.product = product.id
    review.user = product.seller.user
    review.customer = customer._id
    // console.log(review)
    const res = await authAxios()({
      url: `/reviews`,
      method: "POST",
      data:review
  });
  setReview({
    "product": "",
    "text": "",
    "rating": 0,
    "user": "",
    "customer": "",
  })
  }

  return (
    <div className="container narrow-container">
      <div className="flex mt30 mb-70">
        <div className="flex flex50 flexleft">
          <h3 className="mt0 mb0">{productReview ? productReview.length : 0} Reviews</h3>
          <div className="starcontainer flex">
            <Rating rating={0} />
          </div>
        </div>
        {/* <div className="div-block-11 flex">
          <div className="text-block-6 border-right-grey cursor no-select">
            Product Reviews
          </div> */}
          {/* <div className="text-block-7 text-block-6 bold cursor no-select">
            Shop Reviews
          </div> */}
        {/* </div> */}
      </div>
      {productReview && productReview.map(review =>
        <div key={review.id} className="reviewcontainer flex flexleft">
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
              <div className="text-block-8">{review.user.name}</div>
              <div className="starcontainer flex">
                <Rating rating={review.rating ? review.rating : 0} />
              </div>
              <div className="text-block-8 align-right greyfont normal">

                {/* {review.createdAt && review.createdAt} */}
                {new Date(review.createdAt) &&
                  new Date(review.createdAt).getDate() +
                  "." +
                  (new Date(review.createdAt).getMonth() < 10 ? "0" : "") +
                  new Date(review.createdAt).getMonth() +
                  "." +
                  new Date(review.createdAt).getFullYear()}
              </div>
            </div>
            <div className="product-description mt20 w-richtext">
              <p>
                {review.text ? review.text : "No reviews"}
              </p>
            </div>
          </div>
        </div>)}

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
            value={review.text}
            setValue={(text) => setReview({ ...review, text })}
          />
        </div>
      </div>
      <div className="spacer-20" />
      <Button name="Add Review" type="secondary" action={() => addReview()} />
    </div>
  );
};

export default Reviews;
