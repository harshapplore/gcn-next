import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./onboarding.module.scss";

import { pages } from "./router";

const Seller_Nav = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const { section } = router.query;

        if (!section) {
            setActiveTab(0);
            return;
        }
        const index = pages.findIndex((page) => page === section);

        if (index === -1) setActiveTab(0);

        if (index >= 2 && index < 6) {
            setActiveTab(2);
        } else if (index >= 7) {
            setActiveTab(7);
        } else {
            setActiveTab(index);
        }
    }, []);

    const aboutCurrent = router.query.section === "get-started" && "basic-info" || "vision-strategy" || "governance-and-management" || "social" || "environment" ? "progress__step--current" : ""
    const priceCurrent = router.query.section === "pricing-intro" ||"pricing-plan" || "pricing-billing" ? "progress__step--current" : ""
    const shopCurrent = router.query.section === "shop-info" ||"terms-and-conditions" || "shipping-details" || "shop-details" ? "progress__step--current": ""
    return (
        <>
            <div className="progress-bar">
                <div className="container container--progress">
                    <div className={`progress__step ${aboutCurrent}`}>About you</div>
                    <div className="icon-24 icon-24--progress"><img src="../images/expand-more-black-24-dp_1.svg" loading="lazy" width="9" height="13" alt="Next" /></div>
                    <div className={`progress__step ${priceCurrent}`}>Pricing plan</div>
                    <div className="icon-24 icon-24--progress"><img src="../images/expand-more-black-24-dp_1.svg" loading="lazy" width="9" height="13" alt="Next" />
                    </div>
                    <div className={`progress__step ${shopCurrent}`} >Create Shop</div>
                </div>
            </div>
        </>
    );
};

export default Seller_Nav;
