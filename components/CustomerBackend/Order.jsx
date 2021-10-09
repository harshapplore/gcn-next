import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styles from "./style.module.css";

import { getOrder, sendEmail } from "@/_controllers/customer";
import { getShop } from "@/_controllers/shop";
import { dateFormatter } from "@/_hooks/dateFormatter";
import { usePriceFormatter } from "@/_hooks/usePriceFormatter";
import { cancelOrder, reviewOrder } from "@/_controllers/customer";

import RatingInput from "@/shared/Input/Rating";
import TextArea from "@/shared/Input/TextArea";
import Button from "@/shared/Button";
import Modal from "react-modal";

const Product = ({ product, shopName }) => {
  return (
    <div className="flex mb-20">
      <div className="flex">
        <div className="checkout-shop-item-img">
          <img
            src={product.images[0] && product.images[0].url}
            loading="lazy"
            alt="Handcrafted stuff"
            className="back-img"
          />
        </div>
        <div className="checkout-product-info">
          <h3>{product.name}</h3>
          <div className="overline-text pull-up">By {shopName}</div>
          <div>Size: {product.size}</div>
        </div>
      </div>
      <div className="pt-20">
        <div>Shipped</div>
      </div>
      <div className="pt-30">
        <div className="shop-product-price">€ {product.price}</div>
      </div>
    </div>
  );
};

const Shop = ({ shop, subTotal }) => {
  const [_shop, _setShop] = useState({});

  useEffect(async () => {
    const s = await getShop(shop.shopId);

    _setShop(s);
  }, [shop.shopId]);

  return (
    <div className="shop-list mb-60">
      <div className="flex mb-40">
        <h2>{_shop.name}</h2>
      </div>

      {shop.products &&
        shop.products.length > 0 &&
        shop.products.map((product) => (
          <Product product={product} shopName={_shop.name} />
        ))}

      <div className="subtotal-wrapper">
        <div className="medium">Subtotal: {subTotal?.price}</div>
        <div>Delivery: € {subTotal?.delivery}</div>
        <div>2-3 days</div>
      </div>
    </div>
  );
};

const Order = (props) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [_order, _setOrder] = useState({});
  const [_snap, _setSnap] = useState({});
  const [loading, setLoading] = useState(false);
  const [addReview, setAddReview] = useState(false);

  React.useEffect(() => {
    setLoading(false);
  }, [props.order]);
  const order = props.order;
  const billingAddress = props.order.billingAddress;
  const snapshot = props.order.snapshot;
  return (
    <div className="accordian-container">
      <div className="greybg flex pd25 accordiontrigger open pr15">
        <div className="flexitem">
          <div className="light">Order placed</div>
          <div className="rubik">{dateFormatter(order?.createdAt)}</div>
        </div>
        <div className="flexitem">
          <div className="light">Total</div>
          <div className="rubik">{usePriceFormatter(order?.total)}</div>
        </div>
        <div className="flexitem">
          <div className="light">CO2 Compensation</div>
          <div className="rubik">
            {usePriceFormatter(order?.co2Compensation)}
          </div>
        </div>
        <div className="flexitem">
          <div className="light">Status</div>
          <div className="rubik">{order?.status}</div>
        </div>
        <div className="flexitem">
          <div className="light">Order #{order?._id.substr(-6)}</div>
          <div className="rubik">Order Details</div>
        </div>
        <div
          className="accordionarrow d-flex align-items-center"
          onClick={() => setOpen(!open)}
        >
          <img
            src="../images/expand-more-black-24-dp-copy-6.svg"
            loading="lazy"
            alt="expand"
            className={`accarrowimage ${open ? "open" : "close"}`}
          />
        </div>
      </div>
      {open && (
        <div className="settings-block accordion-body fade">
          <div className="flex mb-20 pr15">
            <div className="flex50">
              <div className="light">Number of Items</div>
              <div className="rubik">{order?.products.length} Articles</div>
            </div>
            <div className="flex50">
              <div className="light">Order placed</div>
              <div className="rubik">
                {new Date(order?.createdAt).toString().substr(0, 15)}
              </div>
            </div>
          </div>
          <div className="flex mb-40 pr15">
            <div className="flex50">
              <div className="light">Delivered to</div>
              <div className="rubik">
                {billingAddress?.name}, {billingAddress?.streetAddress},
                {billingAddress?.city}, {billingAddress?.postalCode},
                {billingAddress?.country}
              </div>
            </div>
            <div className="flex50 flex">
              <div>
                <div className="light">VAT</div>
                <div className="rubik">{order?.vat}</div>
              </div>
            </div>
            {/* <div className="flex50 flex">
                            <div>
                                <div className="light">Payment Method</div>
                                <div className="rubik">Credit Card</div>
                            </div>
                        </div> */}
          </div>

          <div className="flex mb-20 pr15">
            {order?.trackingNumber && (
              <div className="flex50 flex">
                <div>
                  <div className="light">Tracking Number</div>
                  <div className="rubik">{order?.trackingNumber}</div>
                </div>
              </div>
            )}

            {order?.carrier && (
              <div className="flex50 flex">
                <div>
                  <div className="light">Carrier</div>
                  <div className="rubik">{order?.carrier}</div>
                </div>
              </div>
            )}
          </div>
          <div className="flex mb-20 pr15">
            {order?.estimatedDate && (
              <div className="flex50 flex">
                <div>
                  <div className="light">Estimated Date</div>
                  <div className="rubik">{order?.estimatedDate}</div>
                </div>
              </div>
            )}
            {order?.payment && (
              <div className="flex50 flex">
                <div>
                  <div className="light">Payment Status</div>
                  <div className="rubik">{order?.payment}</div>
                </div>
              </div>
            )}
          </div>
          <div className="assessment-spacer" />
          {snapshot?.shops?.map((snaps) => {
            return (
              <React.Fragment>
                <div className="flex pr15">
                  <div className="flex50">
                    <div className="orange bigger mb-30">
                      {snaps?.shop?.companyName}
                    </div>

                    <div className="w-layout">
                      {snaps?.products?.map((product) => {
                        let image = product.images[0]?.url;
                        return (
                          <React.Fragment>
                            <div className="order-card-content">
                              <img
                                src={image}
                                loading="lazy"
                                width={61}
                                height={61}
                                alt=""
                              />
                              <div className="smaller bolder">
                                {product?.name}
                              </div>
                              <div className="smaller ">{product?.color}</div>
                              <div className="smaller ">
                                {usePriceFormatter(product?.price)}
                              </div>
                            </div>
                            <br />
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex50 flex">
                    <div className="flex50">
                      <div className="light">Status</div>
                      <div className="rubik mb-10">{order?.status}</div>

                      {/* <div className="light">Estimated time of arrival</div>
                                            <div className="rubik mb-10">01.02.2021</div>
                                            <div className="light">Tracking number</div>
                                            <div className="rubik mb-10">#00000000</div>
                                            <div className="light">Carrier / Delivery Company</div>
                                            <div className="rubik">DHL</div> */}
                    </div>
                    <div className="flex50">
                      <a
                        href="#"
                        className="button lowercase mb-10 block w-button color-white"
                        onClick={() => {
                          router.push(`/shop/${snaps?.shop?._id}?tab=about-us`);
                        }}
                      >
                        Contact Seller
                      </a>
                      {snaps.Status == "Delivered" && (
                        <a
                          href="#"
                          className="button lowercase mb-10 block w-button color-white"
                          onClick={() => setAddReview(true)}
                        >
                          Add Review
                        </a>
                      )}

                      {snaps.Status != "Cancelled" &&
                        snaps.Status != "Delivered" &&
                        snaps.Status != "Product Reviewed" && (
                          <React.Fragment>
                            {loading == snaps?.shop._id ? (
                              <button
                                href="#"
                                className="button red lowercase block w-button"
                              >
                                Loading...
                              </button>
                            ) : (
                              <button
                                href="#"
                                className="button red lowercase block w-button"
                                onClick={() => {
                                  setLoading(snaps?.shop._id);
                                  cancelOrder({
                                    orderId: order?._id,
                                    shopId: snaps?.shop._id,
                                    Status: "Cancelled",
                                  });
                                  setTimeout(() => {
                                    props.getOrders();
                                  }, 1000);
                                }}
                              >
                                Cancel Order
                              </button>
                            )}
                          </React.Fragment>
                        )}
                    </div>
                  </div>
                </div>
                {addReview && (
                  <AddReview
                    product={snaps?.products[0]}
                    orderId={order?._id}
                    shopId={snaps?.shop._id}
                    onClose={() => {
                      setAddReview(false);
                      props.getOrders();
                    }}
                  />
                )}
                <div className="assessment-spacer" />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Order;

// if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#review');

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};
const AddReview = (props) => {
  const { customer } = useSelector((state) => state.customer);
  const { user } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState({
    review: false,
    rating: false,
  });

  const validate = () => {
    let value = true;
    let err = { review: false, rating: false };
    setError({ ...err });
    if (review == "") {
      value = false;
      err.review = "Field cannot be empty";
    }
    if (rating == "") {
      value = false;
      err.rating = "Field cannot be empty";
    }
    setError({ ...err });
    return value;
  };
  const onSubmit = async () => {
    if (validate()) {
      setLoading(true);

      await reviewOrder({
        ...props,
        text: review,
        rating,
        user: user.id,
        customer: customer.id,
      });
      // setLoading(false)
      setTimeout(() => {
        props.onClose();
      }, 500);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="reviewcontainers">
          <div className="starcontainer">
            <h3> Review this product </h3>
          </div>
          <div className="spacer-40">
            <RatingInput
              rating={rating}
              setRating={(rating) => setRating(rating)}
            />
            <br />
            {error.rating && (
              <span style={{ color: "#b00020", fontSize: 12, marginLeft: 20 }}>
                Error:Field cannot be empty
              </span>
            )}
          </div>
          <div>
            <TextArea
              placeholder="Write your review here"
              value={review}
              setValue={(review) => setReview(review)}
              error={error.review}
            />
          </div>
        </div>
        <div className="spacer-20" />
        <Button
          name="Add Review"
          type="secondary"
          loading={loading}
          action={onSubmit}
        />
      </div>
    </div>
  );
};
