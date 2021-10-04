import router from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

import { SELLER_MAIN, CUSTOMER_MAIN } from "@/config/constants";

const redirectUrl = (type, qaStatus) => {
    if(type === "customer") return `/customer`;
    
    if(type==="seller" && qaStatus === "approved") return `/seller/products`;
    
    return `/`;
  }
const UserPopup = () => {
    const { user } = useSelector((state) => state.user);
    const { seller } = useSelector((state) => state.seller);
    const [openPopup, setOpenPopup] = useState(false);

    console.log(seller)
    return (
        <div className="icon-nav-wrapper" onClick={() => setOpenPopup(!openPopup)}>
            <a className="icon-nav w-inline-block">
                <div className={openPopup ? "icon-nav-account" : ""}>
                    <img
                        src="/images/account-circle-black-24-dp.svg"
                        loading="eager"
                        alt="Account"
                        className={openPopup ? "icon-nav-account-active" : ""}
                    />
                </div>
            </a>
            {openPopup && (
                <div className="icon-nav-popup account">
                    <div className="icon-nav-popup-card">
                        <div className="icon-nav-popup-account">
                            <img
                                src="/images/account-img.jpg"
                                loading="lazy"
                                alt=""
                                className="icon-nav-popup-img"
                            />
                            <div>{user.name}</div>
                        </div>
                        <div className="icon-nav-popup-spacer" />

                        {(user.type === "customer") || (user.type === "seller" && user.qaStatus==="approved")  &&                             <a
                                className="nav-link account w-inline-block cursor"
                                onClick={() => router.push(redirectUrl(user.type, seller.qaStatus))}
                            >
                                <img
                                    src="/images/person-black-24-dp.svg"
                                    loading="eager"
                                    alt="View profile"
                                    className="button-icon"
                                />
                                <div className="text-block">View profile</div>
                            </a>}
                        <a
                            className="nav-link account w-inline-block cursor"
                            onClick={() => {
                                localStorage.clear();
                                location.assign("/");
                            }}
                        >
                            <img
                                src="/images/logout-black-24-dp.svg"
                                loading="eager"
                                alt="Log out"
                                className="button-icon"
                            />
                            <div className="text-block">Log out</div>
                        </a>
                    </div>
                    <div className="icon-nav-popup-arrow" />
                </div>
            )}
        </div>
    );
};

export default UserPopup;
