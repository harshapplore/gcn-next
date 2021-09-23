import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllOrders } from "@/_controllers/seller";
import AppLoader from "@/utils/AppLoader/AppLoader";
import { dateFormatter } from "@/_hooks/dateFormatter";
import { usePriceFormatter } from "@/_hooks/usePriceFormatter";
import { cancelOrder } from "@/_controllers/customer";

const OrderHistory = () => {
    const [orders, setOrders] = useState(false);
    const { seller } = useSelector((state) => state.seller);

    useEffect(async () => {
        getOrders()
    }, [seller])

    const getOrders = async () => {
        let data = await getAllOrders(seller?.shop?.id)
        setOrders(data)
        setLoading(false)
        console.log(data)
    }
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [status, setStatus] = React.useState(false);

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
                                                <div className="rubik">{billingAddress?.name}, {billingAddress?.streetAddress}, {billingAddress?.city}, {billingAddress?.postalCode}, {billingAddress?.country}</div>
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
                                                <div className="w-form" style={{ width: "100%" }}>
                                                    <div id="email-form" name="email-form" data-name="Email Form" className="flex" >
                                                        <div className="flex40">
                                                            <label htmlFor="name" className="light">Order Status</label>
                                                            <select required="" className="input-x input-x--select bold mb30 input-x-regular w-select"
                                                                value={status || snaps.Status}
                                                                onChange={e => {
                                                                    setStatus(e.target.value)
                                                                }}
                                                            >
                                                                <option value="Processing">"Processing"</option>
                                                                <option value="Shipped">Shipped</option>
                                                                <option value="Out for delivery">Out for delivery</option>
                                                                <option value="Cancelled">Cancelled</option>
                                                            </select>
                                                            {loading
                                                                    ?
                                                                <button className="secondarywithimage blue secondaryflex w-button cursor">Loading</button>
                                                                    :
                                                                <button className="secondarywithimage blue secondaryflex w-button cursor"
                                                                    onClick={() => {
                                                                        if(status) {
                                                                            setLoading(true)
                                                                            cancelOrder({
                                                                                orderId: order?._id,
                                                                                shopId: seller?.shop?.id,
                                                                                Status: status
                                                                            })
                                                                            setTimeout(() => {
                                                                                getOrders();
                                                                                setStatus(false)
                                                                            }, 1000);
                                                                        }
                                                                    }}
                                                                >Update Status</button>}
                                                        </div>
                                                        <div>
                                                            {/* <label htmlFor="name" className="light">Order sent</label>
                                                    <select required="" className="input-x input-x--select bold mb-30 input-x-regular w-select">
                                                        <option value="Shipped">Shipped</option>
                                                        <option value="not shipped">Not  shipped</option>
                                                    </select>
                                                    <label htmlFor="name" className="light">Carrier / Delivery Company</label>
                                                    <div className="input-x input-x--flex flex40 mb-30">
                                                        <input type="text" className="input-x__input-field dark normalweight input-x-regular w-input" maxLength="256" placeholder="DHL" disabled={editCarrier} />
                                                        <div className="input-x__change" onClick={() => setEditCarrier(!editCarrier)}>
                                                            <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                                                        </div>
                                                    </div> */}
                                                        </div>
                                                    </div>
                                                    {/* <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                            <div className="flex">
                                                <a href="#" className="button blue lowercase flexbutton w-button">Contact Customer</a>
                                                <a href="#" className="secondarywithimage blue secondaryflex w-button">Download Order Details</a>
                                            </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }})}
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
