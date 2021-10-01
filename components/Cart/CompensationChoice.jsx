import { useState, useContext, useEffect } from "react";
import CartContext from "./cart.context";

import Radio from "@/shared/Input/Radio";
import CheckBox from "@/shared/Input/Checkbox";

import { getCharityProjects } from "@/_controllers/cart";
import AppLoader from "@/utils/AppLoader/AppLoader";
import { usePriceFormatter } from "@/_hooks/usePriceFormatter";


const CompensationChoices = ({ total, charityCode, setCharityCode, charityError, co2CompensationPrice }) => {
    const { co2Compensation } = useContext(CartContext);

    const [choice, setChoice] = useState();
    const [state, setState] = useState(false);


    useEffect(async () => {
        let data = await getCharityProjects();
        setState(data)
    }, [])
    const compPrice = co2CompensationPrice;
    const finalTotal = total;
    return (
        <div>
            <div className="container mb-40" id="charity-project">
                <div className="flex">
                    <div className="shop-product-price medium mt30">
                        Shipping CO2 offsetting (1%):
                    </div>
                    <div className="shop-product-price medium mt30">{usePriceFormatter(compPrice)}</div>
                </div>
                <div className="greyborder pd40">
                    {charityError && <span className="red" style={{ color: "red" }}>{charityError}</span>}
                    <div>
                        From the {usePriceFormatter(finalTotal)}, {usePriceFormatter(total - co2CompensationPrice)}  goes to the vendor and {usePriceFormatter(compPrice)} go to the project
                        you choose:
                    </div>

                    {!state && <AppLoader />}
                    {state && state.map(project => {
                        return (
                            <div className="flex-mobile mt30">
                                <div className="flex50 flex-mobile flexleft">
                                    <img
                                        src={project.images[0]?.url}
                                        loading="lazy"
                                        width={170}
                                        height={100}
                                        alt=""
                                        style={{ paddingTop: 0, objectFit: "cover" }}
                                        className="greybg flexauto mr-20"
                                    />
                                    <div className="shop-product-price medium mb0">{project.name}</div>
                                </div>
                                <div className="flex50">
                                    <CheckBox
                                        text="I want to support this project"
                                        value={charityCode === project._id}
                                        setValue={(value) => setCharityCode(project._id)}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="container greenborder mt30 mb-40">
                <div className="flex baseline mb-40">
                    <div>
                        <div className="text-block-5 fontnow bigger mb-10">
                            Final amount incl. VAT
                        </div>
                        <div className="text-block-5 fontnow bigger mb-10 mt20">
                            {usePriceFormatter(total)}
                        </div>
                       
                    </div>
                    <div>
                    <div className="text-block-5 fontnow bigger mb-10">
                            CO2 compensation
                        </div>
                        <div className="text-block-5 fontnow bigger mb-10 mt20">{usePriceFormatter(compPrice)}</div>
                    </div>
                </div>
                <div className="flex baseline">
                    <div>
                        <div className="text-block-5 fontnow bigger mb-10 bold">
                            To be paid incl. VAT
                        </div>
                    </div>
                    <div>
                        <div className="text-block-5 fontnow bigger mb-10 mt20 bold">
                            {usePriceFormatter(finalTotal)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompensationChoices;
