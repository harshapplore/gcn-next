import { useSelector } from "react-redux";
import authAxios from "@/setups/axios";

import Button from "@/shared/Button";

import styles from "./onboarding.module.scss";


const PricingBlock = ({ name, text, action }) => {
  return (
    <div className={styles["pricing-block"]}>
      <div className="">
      <h3> {name}</h3>
      <p> {text} </p>
      </div>
      <Button type="secondary" action={action} name="Select" />
    </div>
  );
};

const PS2 = ({ nextPage }) => {
  const { seller } = useSelector((state) => state.user);

  const plans = [
    {
      name: "Plan One",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae ean fd rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      name: "Plan Two",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae ean fd rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      name: "Plan Three",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae ean fd rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ];

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
      nextPage();
    }
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>Pricing Plan</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>

        <div className={styles["pricing-container"]}>
          {plans.map((plan) => (
            <PricingBlock name={plan.name} text={plan.text} action={(e) => submit(e, plan.name)} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default PS2;
