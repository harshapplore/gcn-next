import { useState, useContext } from "react";
import CartContext from "./cart.context";

import Radio from "@/shared/Input/Radio";
import CheckBox from "@/shared/Input/Checkbox";

const CompensationChoices = ({}) => {
  const { co2Compensation } = useContext(CartContext);

  const [choice, setChoice] = useState();

  return (
    <div>
      <div className="container mb-40">
        <div className="flex">
          <div className="shop-product-price medium mt30">
            Shipping CO2 offsetting (1%):
          </div>
          <div className="shop-product-price medium mt30">€ 0,04</div>
        </div>
        <div className="greyborder pd40">
          <div>
            From the € 50,40 goes to the vendor and 40 cents go to the project
            you choose:
          </div>
          <div className="flex mt30">
            <div className="flex50 flex flexleft">
              <img
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                loading="lazy"
                width={170}
                height={50}
                alt=""
                className="greybg flexauto mr-20"
              />
              <div className="shop-product-price medium mb0">Project X</div>
            </div>
            <div className="flex50">
              <CheckBox
                text="I want to support this project"
                value={choice === 0}
                setValue={(value) => setChoice(0)}
              />
            </div>
          </div>
        </div>
        {/* <div className="flex flexleft flextop spacebetween mt30">
          <div>
            <div className="shop-product-price medium mt30 infotext">
              Your Green Points:
            </div>
          </div>
          <div className="infobox infobox_left">
            <div className="small">
              THIS&nbsp;INFOBOX&nbsp;SHOULD&nbsp;ONLY&nbsp;
              <br />
              APPEAR ON&nbsp;HOVER&nbsp;OVER&nbsp;THE&nbsp;"i"...
            </div>
          </div>
          <div className="checkout-switch-wrapper mt20 mlauto">
            <div>
              <div className="shop-product-price medium mt30 mlauto mb0">
                10
              </div>
              <div className="checkout-switch-wrapper greenpoint_discount_checkbox w-clearfix">
                <a
                  href="#"
                  className="pickup-switch-wrapper active w-inline-block"
                >
                  <div className="switch-switcher" />
                </a>
                <div className="checkout-switch-text">
                  Use green points as discount
                </div>
              </div>
              <div className="shop-product-price medium mt30 mlauto mb0 orange">
                - € 0,1
              </div>
            </div>
          </div>
        </div>
      
       */}
      </div>
      <div className="container greenborder mt30 mb-40">
        <div className="flex baseline mb-40">
          <div>
            <div className="text-block-5 fontnow bigger mb-10">
              Final amount incl. VAT
            </div>
            <div className="text-block-5 fontnow bigger mb-10">
              CO2 compensation
            </div>
          </div>
          <div>
            <div className="text-block-5 fontnow bigger mb-10 mt20">
              € 115,00
            </div>
            <div className="text-block-5 fontnow bigger mb-10 mt20">€ 0,40</div>
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
              € 115,04
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompensationChoices;
