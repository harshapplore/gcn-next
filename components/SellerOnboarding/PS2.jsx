import { useSelector } from "react-redux";
import authAxios from "@/setups/axios";

const PS2 = ({ nextPage }) => {
  const { seller } = useSelector((state) => state.user);

  const submit = async (e, planType) => {
    e.preventDefault();

    const response = await authAxios()({
      url: `sellers/${seller.id}`,
      method: "PUT",
      data: {
        onboardStatus: 2,
        planType,
      },
    });

    if (response) {
      console.log(response);
      nextPage();
    }
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>Pricing Plan</h1>
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
            <form
              id="email-form-6"
              name="email-form-6"
              data-name="Email Form 6"
            >
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="pricing-item">
                      <div className="mb-40">
                        <h2>Pricing Option 1</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla, ut commodo diam libero vitae ean
                          fd rutrum lorem imperdiet. Nunc ut sem vitae risus
                          tristique posuere.
                        </p>
                      </div>
                      <div className="center">
                        <input
                          type="submit"
                          defaultValue="Select"
                          data-wait="Please wait..."
                          className="button blue w-button"
                          onClick={(e) => submit(e, "Plan A")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="pricing-item">
                      <div className="mb-40">
                        <h2>Pricing Option 2</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla, ut commodo diam libero vitae
                          erat. Aenean faucibus nibh et justo cursus id rutrum
                          lorem imperdiet. Nunc ut sem vitae risus tristique
                          posuere. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Suspendisse vim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla, ut commodo diam libero vitae
                          erat. Aenean faucibus nibh et justo cursus id rutrum
                          lorem imperdiet. Nunc ut sem vitae risus tristique
                          posuere.
                        </p>
                      </div>
                      <div className="center">
                        <input
                          type="submit"
                          defaultValue="Select"
                          data-wait="Please wait..."
                          className="button blue w-button"
                          onClick={(e) => submit(e, "Plan B")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="pricing-item">
                      <div className="mb-40">
                        <h2>Pricing Option 3</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla, ut commodo diam libero vitae
                          erat. Aenean fauci in eros elementum tristique. Duis
                          cursus, mi quis viverra ornare, eros dolor interdum
                          nulla, ut commodo diam libero vitae erat. Aenean
                          faucibus nibh et justo cursus id rutrum lorem
                          imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
                      </div>
                      <div className="center">
                        <input
                          type="submit"
                          defaultValue="Select"
                          data-wait="Please wait..."
                          className="button blue w-button"
                          onClick={(e) => submit(e, "Plan C")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PS2;
