import { useState, useContext } from "react";
import CartContext from "./cart.context";

import Radio from "@/shared/Input/Radio";

const CompensationChoices = () => {
  const { co2Compensation } = useContext(CartContext);

  const [choice, setChoice] = useState();

  return (
    <div className="page-section wf-section remove-border">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h2>For a greener Environment</h2>
        </div>
        <div className="product-add-block pb-120">
          <p className="lead-text accent mb-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <div className="w-form">
            <form
              id="email-form-3"
              name="email-form-3"
              data-name="Email Form 3"
            >
              <div className="certificate-item">
                <div>
                  <img
                    src="images/fill-2.svg"
                    loading="lazy"
                    alt="Green Cloud Nine Logo"
                    className="cert-img"
                  />
                </div>
                <div className="cert-text">
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </div>
                </div>
                <div className="div-block-2">
                  <Radio
                    text="Choose"
                    value={choice === "plan-1"}
                    setValue={(value) => setChoice(value ? "plan-1" : null)}
                  />
                </div>
              </div>
              <div className="certificate-item">
                <div>
                  <img
                    src="images/fill-2.svg"
                    loading="lazy"
                    alt="Green Cloud Nine Logo"
                    className="cert-img"
                  />
                </div>
                <div className="cert-text">
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </div>
                </div>
                <div>
                  <Radio
                    text="Choose"
                    value={choice === "plan-2"}
                    setValue={(value) => setChoice(value ? "plan-2" : null)}
                  />
                </div>
              </div>
              <div className="cert-footer">
                <div className="cert-footer-box left">
                  <div>
                    Contribute <strong>1% of your total sum</strong> to your
                    prefered non-profit and help us safe the planet!
                  </div>
                </div>
                <div className="cert-footer-box">
                  <div className="inline">
                    <div className="cert-price">€ {co2Compensation},-</div>
                    <div className="small accent">to total sum</div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompensationChoices;
