import { useState } from "react";
import { putSeller } from "@/controllers/seller";

import { useSelector } from "react-redux";

const Pricing = ({ nextPage }) => {
  const { seller } = useSelector((state) => state.seller);

  const submit = async (e, plan) => {
    e.preventDefault();

    const res = await putSeller(seller.id, {
      onboardStatus: 2,
      plan,
    });

    if (res) nextPage();
  };

  return (
    <div className="page-section pricing wf-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>Choose your pricing Plan</h1>
          <div className="overline-text mb-40">Seller Questionaire</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="mb-60">
          <div className="w-form">
            <form>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="pricing-item">
                      <div className="mb-20">
                        <h2 className="pricing-heading">Bonsai</h2>
                        <div className="pricing-commision">
                          12% commission fee on
                          <br />
                          all transactions
                          <br />
                        </div>
                        <div className="pricing-listing">
                          € 0,20 listing fee <br />
                          per item
                          <br />
                        </div>
                        <div className="tag mb-10">
                          <div>max 15 items</div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.
                        </p>
                      </div>
                      <div className="center">
                        <input
                          type="submit"
                          value="Select"
                          className="button blue w-button"
                          onClick={(e) => submit(e, "Bonsai")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="pricing-item">
                      <div className="mb-20">
                        <h2 className="pricing-heading">Oak</h2>
                        <div className="pricing-commision">
                          12% commission fee on
                          <br />
                          all transactions
                          <br />
                        </div>
                        <div className="pricing-listing">
                          € 29,- per month
                          <br />
                        </div>
                        <div className="tag mb-10">
                          <div>Unlimited listings</div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.{" "}
                        </p>
                      </div>
                      <div className="center">
                        <input
                          type="submit"
                          value="Select"
                          data-wait="Please wait..."
                          className="button blue w-button"
                          onClick={(e) => submit(e, "Oak")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
