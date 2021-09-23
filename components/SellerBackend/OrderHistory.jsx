import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAxios } from "@/setups/axios";

import { fetchOrder } from "@/slices/order";
import { fetchSeller } from "@/slices/user";



const OrderHistory = () => {
  const { seller } = useSelector((state) => state.seller);
  const { orders } = useSelector((state) => state.order);

  const [showOrder, setShowOrder] = useState(false)
  const [editTrackingNo, setEditTrackingNo] = useState(false)
  const [editCarrier, setEditCarrier] = useState(false)

  // const [od, setOd] = useState([])
  const [ordersArray, setOrdersArray] = useState([])

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrder());
  }, []);
  console.log(orders)
  if(orders.length>0){
    const orderedProducts = orders.map(r=>r.products.map(product=> product.seller))

    console.log(orderedProducts);
  }
  console.log(seller)
  // if(orders.length > 0){
  //   const filterOrders =  orders.filter(od => od.products[0].seller.id === seller.id )
  //   console.log(filterOrders)
  // }
  // console.log(filterOrders)
  // useEffect(() => {
  //   if(!ordersArray)
  //   setOrdersArray(() => orders.filter(od => od.products[0].seller.shop === seller.shop.id))
  // }, [ordersArray])
  // console.log(ordersArray)
  // useEffect(() => {

  //   setOrdersArray(() => od.filter(order => order.products.map(product => product.seller.id === seller.id)))
  //   console.log(ordersArray)
  //   return () => {
  //   }

  // }, [])
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  // useEffect(() => {
  //   sellerOrders()
  // }, [od])
  // const getOrders = async () => {
  //   await authAxios()({
  //     url: `orders`,
  //     method: "GET",
  //   })
  //   .then(res => setOd(res.data))
  //   .then(() => {
  //     console.log(od)
  // setOrdersArray(() => od.filter(order => order.products.map(product => product.seller.id === seller.id)))})
  //   .catch(err => console.log(err.message))
  // }
  // console.log(od)
  // console.log(ordersArray)
  // console.log(od[8].products[0].seller._id)

  // const sellerOrders = () => {
  //   if (od) {
  //     // console.log(seller)
  //     // const odArray = od.filter(order => order.products[0] )
  //     // console.log(odArray)
  //     setOrdersArray(() => od.filter(order => order.products.map(product => product.seller.id === seller.id))
  //     )
  //   }
  //   console.log(ordersArray)
  // }

  return (
    <div className="dynamic-content">
      <div className="heading-wrapper mb-40">
        <h2>Order History</h2>
      </div>
      <div className="greybg flex pd25 accordiontrigger open pr15">
        <div className="flexitem">
          <div className="light">Order placed</div>
          <div className="rubik">01.01.2021</div>
        </div>
        <div className="flexitem">
          <div className="light">Total</div>
          <div className="rubik">€ 120,00</div>
        </div>
        <div className="flexitem">
          <div className="light">Status</div>
          <div className="rubik">Partially shipped</div>
        </div>
        <div className="flexitem">
          <div className="light">Order #00000000</div>
          <div className="rubik alignright">Order Details</div>
        </div>
        <div className="accordionarrow flex cursor" onClick={() => setShowOrder(!showOrder)}>
          <img src="../images/expand-more-black-24-dp-copy-6.svg" loading="lazy" alt="expand" className="accarrowimage open" />
        </div>
      </div>
      {showOrder && <div className="settings-block accordion-body">
        <div className="flex mb-20 pr15">
          <div>
            <div className="mb-30">
              <div className="light">Number of Items</div>
              <div className="rubik">4 Articles</div>
            </div>
            <div>
              <div className="light">Delivered to</div>
              <div className="rubik">Name, Street, City, Postal Code, Country</div>
            </div>
            <div className="light mgt50 mb-10">Items</div>
            <div className="w-layout-grid grid-2">
              <div id="w-node-_52c1b1cd-06cb-9a62-8d38-43ed2fc21b97-b2bb390a" className="smaller bolder">Article Name</div>

              <div id="w-node-_52c1b1cd-06cb-9a62-8d38-43ed2fc21b9f-b2bb390a" className="smaller">Size</div>

              <div id="w-node-_52c1b1cd-06cb-9a62-8d38-43ed2fc21ba7-b2bb390a" className="smaller">Price</div>

              <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" width="61" height="61" alt="" />

            </div>
          </div>
          <div className="flex60">
            <div className="flex50 flex">
              <div className="flex flex100 mb-30">
                <div className="mgr90">
                  <div className="light">Order placed</div>
                  <div className="rubik">01.01.2021</div>
                </div>
                <div>
                  <div className="light">Payment Method</div>
                  <div className="rubik">Credit Card</div>
                </div>
              </div>
              <div className="w-form">
                <form id="email-form" name="email-form" data-name="Email Form" className="flex">
                  <div className="flex40">
                    <label htmlFor="name" className="light">Order sent</label>
                    <select required="" className="input-x input-x--select bold mb30 input-x-regular w-select">
                      <option value="01.01.2021">01.01.2021</option>
                      <option value="01.02.2021">01.02.2021</option>
                    </select>
                    <label htmlFor="name" className="light">Tracking Number</label>
                    <div className="input-x input-x--flex flex40 mb-30 input-x-regular">
                      <input type="text" className="input-x__input-field dark normalweight input-x-regular w-input" maxLength="256" placeholder="000000" disabled={editTrackingNo} />
                      <div className="input-x__change" onClick={() => setEditTrackingNo(!editTrackingNo)}>
                        <img src="../images/edit-black-24-dp.svg" loading="lazy" alt="Edit" className="change__img" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="name" className="light">Order sent</label>
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
                    </div>
                  </div>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
                <div className="flex">
                  <a href="#" className="button blue lowercase flexbutton w-button">Contact Customer</a>
                  <a href="#" className="secondarywithimage blue secondaryflex w-button">Download Order Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mb-40 pr15"></div>
        <div className="assessment-spacer"></div>
      </div>}
    </div>
  );
};

export default OrderHistory;
