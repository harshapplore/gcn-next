import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllOrders } from "@/_controllers/seller";
import AppLoader from "@/utils/AppLoader/AppLoader";
import { dateFormatter } from "@/_hooks/dateFormatter";
import { usePriceFormatter } from "@/_hooks/usePriceFormatter";
import { cancelOrder, sendEmail } from "@/_controllers/customer";
import { authAxios } from "@/setups/axios";
import order from "@/slices/order";


const OrderHistory = () => {
  const [orders, setOrders] = useState("");
  const { seller } = useSelector((state) => state.seller);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [carrier, setCarrier] = React.useState("");
  const [trackingNumber, setTrackingNumber] = React.useState("");
  const [estimatedDate, setEstimatedDate] = React.useState("");

  useEffect(async () => {
    getOrders()
  }, [seller])
  const getOrders = async () => {
    let data = await getAllOrders(seller?.shop?.id)
    setOrders(data)
    setLoading(false)
    console.log(orders)
  }
  const updateStatus = async (id) => {
    setLoading(true)

    if (status) {
      console.log(status)
      // const data = {
      //   carrier,
      //   status,
      //   trackingNumber,
      //   estimatedDate
      // }
      let data = {}
      if (carrier.length > 0) { data['carrier'] = carrier }
      if (status.length > 0) { data['status'] = status }
      if (trackingNumber.length > 0) { data['trackingNumber'] = trackingNumber }
      if (estimatedDate.length > 0) { data['estimatedDate'] = estimatedDate }

      console.log(data)
      const response = await authAxios()({
        url: `/orders/${id}`,
        method: "PUT",
        data
      });
      console.log(response)
      const sellerEmail = orders.map(item => item.user && item.user.email)
      console.log(sellerEmail)
      // sendEmail("testerapplore301@yopmail.com","User Registered Successfully", "User registerd")
      // sellerEmail.map(item => {
      //   sendEmail(item, "Order received", "order received ")

      // })
      // console.log(orders)

      // sendEmail(customer.user.email,"Order Placed Successfully", "order placed successfully")

      if (response.data.status === "Dispatched") {
        sellerEmail.map(item => {
          sendEmail(item, "Order Dipatched", "Order Dipatched ")
        })
        // sendEmail(response.user.email,"Order Dispatched Successfully", "Dispatched")
      }
      if (response.data.status === "Cancelled") {
        // sendEmail(response.user.email,"Order Cancelled ", "Cancelled")
        sellerEmail.map(item => {
          sendEmail(item, "Order Cancelled", "Order Cancelled ")
        })
      }
      if (response.data.status === "Out_For_Delivery") {
        sellerEmail.map(item => {
          sendEmail(item, "Order Out_For_Delivery", "Order Out_For_Delivery ")
        })
        // sendEmail(response.user.email,"out for delivery", "out for delivery")
      }
      if (response.data.status === "Delivered") {
        sellerEmail.map(item => {
          sendEmail(item, "Order Delivered", "Order Delivered")
        })
        // sendEmail(response.user.email,"Order delivered", "delivered successsfully")
      }
      setLoading(false)

      // setTimeout(() => {
      //     getOrders();
      //     setStatus(false)
      // }, 1000);
    }
  }

  // const sellerEmail =[]

  // orders.map(item=>{
  //   let data = 
  //   sellerEmail.push(data)

  // })
  console.log(orders)
  return (
    <div className="dynamic-content">
      <div className="heading-wrapper mb-40">
        <h2>Order History</h2>
      </div>
      {!orders && <AppLoader />}
      {orders && orders.map(order => {
        const billingAddress = order.billingAddress;
        const snapshot = order.snapshot;
        return (
          <React.Fragment>
            <div className="greybg flex pd25 accordiontrigger open pr15 mb-10">
              <div className="flexitem">
                <div className="light">Order placed</div>
                <div className="rubik">{dateFormatter(order.createdAt)}</div>
              </div>
              <div className="flexitem">
                <div className="light">Total</div>
                <div className="rubik">{usePriceFormatter(order.total)}</div>
              </div>
              <div className="flexitem">
                <div className="light">Status</div>
                <div className="rubik">{order.status}</div>
              </div>
              <div className="flexitem">
                <div className="light">Order #{order?._id.substr(-6)}</div>
                <div className="rubik alignright">Order Details</div>
              </div>
              <div className={`accordionarrow flex cursor close`} onClick={() => setOpen(open == order ? false : order)}>
                <img src="../images/expand-more-black-24-dp-copy-6.svg" loading="lazy" alt="expand" className={`accarrowimage ${open._id == order._id ? "open" : "close"}`} />
              </div>
            </div>

            {open._id == order._id && <div className="settings-block accordion-body">
              {snapshot?.shops?.map(snaps => {
                if (snaps.shopId == seller?.shop?.id) {
                  return (
                    <div className="flex mb-20 pr15">
                      <div>
                        <div className="mb-30">
                          <div className="light">Number of Items</div>
                          <div className="rubik">{order?.products.length} Articles</div>
                        </div>
                        <div>
                          <div className="light">Delivered to</div>
                          <div className="rubik">{billingAddress?.name}, {billingAddress?.streetAddress},<br/> {billingAddress?.city}, {billingAddress?.postalCode}, {billingAddress?.country}</div>
                        </div>
                        <div className="light mgt50 mb-10">Items</div>
                        {snaps?.products?.map(product => {
                          let image = product.images[0]?.url;
                          return (
                            <div className="w-layout-grid grid-2">
                              <div id="w-node-_52c1b1cd-06cb-9a62-8d38-43ed2fc21b97-b2bb390a" className="smaller bolder">{product?.name}</div>

                              <div id="w-node-_52c1b1cd-06cb-9a62-8d38-43ed2fc21b9f-b2bb390a" className="smaller">{product?.color}</div>

                              <div id="w-node-_52c1b1cd-06cb-9a62-8d38-43ed2fc21ba7-b2bb390a" className="smaller">{usePriceFormatter(product?.price)}</div>

                              <img src={image} loading="lazy" width="61" height="61" alt="" />

                            </div>
                          )
                        })}
                      </div>
                      <div className="flex60">
                        <div className="flex50 flex">
                          <div className="flex flex100 mb-30">
                            <div className="mgr90">
                              <div className="light">Order placed</div>
                              <div className="rubik">{new Date(order?.createdAt).toString().substr(0, 15)}</div>
                            </div>
                            <div>
                              <div className="light">Payment Method</div>
                              <div className="rubik">Credit Card</div>
                            </div>
                          </div>
                          <div className="flex flex100 mb-30">
                            <div className="mgr90">
                              <div className="light">Pick Up</div>
                              <div className="rubik">{order.pickUpOrder ? "Pickup Enabled" : "Not Applicable"}</div>
                            </div>
                            <div>
                              <div className="light">Gift</div>
                              <div className="rubik">{order.gift ? (order.giftMessage ? order.giftMessage : "No message") : "Not Applicable"}</div>
                            </div>
                          </div>
                          <div className="w-form" style={{ width: "100%" }}>
                            <div id="email-form" name="email-form" data-name="Email Form" className="flex-order" >
                              <div className="flex40">
                                <label htmlFor="name" className="light">Order Status</label>
                                <select required="" className="input-x input-x--select bold mb30 input-x-regular w-select"
                                  value={status || order.status}
                                  onChange={e => {
                                    setStatus(e.target.value)
                                  }}
                                >
                                  {/* {order.status && <option value={order.status}>{order.status}</option>} */}
                                  <option value={order.status === "Processing" ? order.status : "Processing"}>Processing</option>
                                  <option value={order.status === "Dispatched" ? order.status : "Dispatched"}>Dispatched</option>
                                  <option value={order.status === "Out_For_Delivery" ? order.status : "Out_For_Delivery"}>Out for delivery</option>
                                  <option value={order.status === "Delivered" ? order.status : "Delivered"}>Delivered</option>
                                  <option disabled={order.status === "Delivered"} value={order.status === "Cancelled" ? order.status : "Cancelled"}>Cancelled</option>
                                </select>

                              </div>
                              {status !== "Processing" && status !== "Cancelled" && <div>
                                <label htmlFor="name" className="light">Estimated Date</label>
                                <div className="input-x input-x--flex flex40 mb-30">

                                  {order.estimatedDate ?
                                    <input type="date"
                                      className="input-x__input-field dark mb-10 normalweight input-x-regular w-input"
                                      value={order.estimatedDate}
                                      onChange={(e) => order.estimatedDate ? setEstimatedDate(order.estimatedDate) : setEstimatedDate(e.target.value)}
                                    />
                                    :
                                    <input type="date"
                                      className="input-x__input-field dark mb-10 normalweight input-x-regular w-input"
                                      value={estimatedDate}
                                      onChange={(e) => order.estimatedDate ? setEstimatedDate(order.estimatedDate) : setEstimatedDate(e.target.value)}
                                    />
                                  }
                                </div>
                                <label htmlFor="name" className="light">Carrier / Delivery Company</label>
                                <div className="input-x input-x--flex flex40 mb-30">
                                  <input
                                    type="text"
                                    className="input-x__input-field dark normalweight input-x-regular w-input"
                                    placeholder="DHL"
                                    value={carrier || order.carrier}
                                    onChange={(e) => order.carrier ? setCarrier(order.carrier) : setCarrier(e.target.value)}
                                  />
                                  {/* <div className="input-x__change" >
                                                                        <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                                    </div> */}
                                </div>
                                <label htmlFor="name" className="light">Tracking No.</label>
                                <div className="input-x input-x--flex flex40 mb-30">
                                  <input
                                    type="text"
                                    className="input-x__input-field dark normalweight input-x-regular w-input"
                                    value={trackingNumber || order.trackingNumber}
                                    onChange={(e) => order.trackingNumber && setTrackingNumber(order.trackingNumber) || setTrackingNumber(e.target.value)}
                                    placeholder="00000000" />
                                  {/* <div className="input-x__change" >
                                                                        <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                                    </div> */}
                                </div>
                              </div>}
                            </div>
                            <div className="w-form-done">
                              <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                              <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                            {loading
                              ?
                              <button className=" secondarywithimage mb-20 blue secondaryflex w-button cursor">Loading...</button>
                              :
                              <button className="  secondarywithimage mb-20 blue secondaryflex w-button cursor"
                                onClick={() => updateStatus(order.id)}
                              >Update Status</button>}
                            <div className="flex">
                              <a href="#" className="button blue lowercase flexbutton w-button">Contact Customer</a>
                              <a href="#" className="secondarywithimage blue secondaryflex w-button">Download Order Details</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)
                }
              })}
              <div className="flex mb-40 pr15"></div>
              <div className="assessment-spacer"></div>
            </div>}
          </React.Fragment>
        )
      })}


    </div>
  );
};

export default OrderHistory;
