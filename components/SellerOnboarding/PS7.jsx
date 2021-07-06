import { useState } from "react";
import { useSelector } from "react-redux";

import authAxios from "setups/axios";

const PS7 = ({ next }) => {
  const { seller } = useSelector((state) => state.user);

  const [legalities, setLegalities] = useState({});
  const [activeTab, setActiveTab] = useState({
    returnsNRefunds: 1,
    generalConditions: 1,
    privacyPolicy: 1,
  });

  const updateLegalities = (key, value) => {
    const newLegalities = { ...legalities };
    newLegalities[key] = value;
    setLegalities(newLegalities);
  };

  const submit = async (e) => {
    e.preventDefault();

    const res = await authAxios()({
      url: `/sellers/${seller.id}`,
      method: "PUT",
      data: {
        onboardStatus: 7,
        ...legalities,
      },
    });

    if (res) next();
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1>Terms &amp;&nbsp;Conditions</h1>
        </div>
        <div className="w-form">
          <form id="email-form-4" name="email-form-4" data-name="Email Form 4">
            <div className="mb-60">
              <h2 className="mb-20">
                Returns &amp;&nbsp;Refunds (Widerrufsbelehrung)
              </h2>
              <div
                data-duration-in={300}
                data-duration-out={100}
                className="w-tabs"
              >
                <div className="tabs-menu inline w-tab-menu">
                  <a
                    data-w-tab="Tab 1"
                    className={
                      "terms-lang w-inline-block w-tab-link" +
                      (activeTab.returnsNRefunds === 1 ? " w--current" : "")
                    }
                    onClick={() =>
                      setActiveTab({ ...activeTab, returnsNRefunds: 1 })
                    }
                  >
                    <div>English</div>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className={
                      "terms-lang w-inline-block w-tab-link" +
                      (activeTab.returnsNRefunds === 2 ? " w--current" : "")
                    }
                    onClick={() =>
                      setActiveTab({ ...activeTab, returnsNRefunds: 2 })
                    }
                  >
                    <div>German</div>
                  </a>
                </div>
                <div className="w-tab-content">
                  <div
                    data-w-tab="Tab 1"
                    className={
                      "w-tab-pane " +
                      (activeTab.returnsNRefunds === 1 ? " w--tab-active" : "")
                    }
                  >
                    <textarea
                      placeholder="Short Description (max. XX)"
                      maxLength={5000}
                      required
                      className="text-field area w-input"
                      value={legalities.returnsNRefunds || ""}
                      onChange={(e) =>
                        updateLegalities("returnsNRefunds", e.target.value)
                      }
                    />
                  </div>
                  <div
                    data-w-tab="Tab 2"
                    className={
                      "w-tab-pane " +
                      (activeTab.returnsNRefunds === 2 ? " w--tab-active" : "")
                    }
                  >
                    <textarea
                      placeholder="Kurze Beschreibung (max. XX)"
                      maxLength={5000}
                      className="text-field area w-input"
                      value={legalities.returnsNRefundsGerman || ""}
                      onChange={(e) =>
                        updateLegalities(
                          "returnsNRefundsGerman",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-60">
              <h2 className="mb-20">General Conditions (AGB)</h2>
              <div
                data-duration-in={300}
                data-duration-out={100}
                className="w-tabs"
              >
                <div className="tabs-menu inline w-tab-menu">
                  <a
                    data-w-tab="Tab 1"
                    className={
                      "terms-lang w-inline-block w-tab-link" +
                      (activeTab.generalConditions === 1 ? " w--current" : "")
                    }
                    onClick={() =>
                      setActiveTab({ ...activeTab, generalConditions: 1 })
                    }
                  >
                    <div>English</div>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className={
                      "terms-lang w-inline-block w-tab-link" +
                      (activeTab.generalConditions === 2 ? " w--current" : "")
                    }
                    onClick={() =>
                      setActiveTab({ ...activeTab, generalConditions: 2 })
                    }
                  >
                    <div>German</div>
                  </a>
                </div>
                <div className="w-tab-content">
                  <div
                    data-w-tab="Tab 1"
                    className={
                      "w-tab-pane " +
                      (activeTab.generalConditions === 1
                        ? " w--tab-active"
                        : "")
                    }
                  >
                    <textarea
                      placeholder="Short Description (max. XX)"
                      maxLength={5000}
                      required
                      className="text-field area w-input"
                      value={legalities.generalConditions || ""}
                      onChange={(e) =>
                        updateLegalities("generalConditions", e.target.value)
                      }
                    />
                  </div>
                  <div
                    data-w-tab="Tab 2"
                    className={
                      "w-tab-pane " +
                      (activeTab.generalConditions === 2
                        ? " w--tab-active"
                        : "")
                    }
                  >
                    <textarea
                      placeholder="Kurze Beschreibung (max. XX)"
                      maxLength={5000}
                      className="text-field area w-input"
                      value={legalities.generalConditionsGerman || ""}
                      onChange={(e) =>
                        updateLegalities(
                          "generalConditionsGerman",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-60">
              <h2 className="mb-20">Privacy Policy (Datenschutz)</h2>
              <div
                data-duration-in={300}
                data-duration-out={100}
                className="w-tabs"
              >
                <div className="tabs-menu inline w-tab-menu">
                  <a
                    data-w-tab="Tab 1"
                    className={
                      "terms-lang w-inline-block w-tab-link" +
                      (activeTab.privacyPolicy === 1 ? " w--current" : "")
                    }
                    onClick={() =>
                      setActiveTab({ ...activeTab, privacyPolicy: 1 })
                    }
                  >
                    <div>English</div>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className={
                      "terms-lang w-inline-block w-tab-link" +
                      (activeTab.privacyPolicy === 2 ? " w--current" : "")
                    }
                    onClick={() =>
                      setActiveTab({ ...activeTab, privacyPolicy: 2 })
                    }
                  >
                    <div>German</div>
                  </a>
                </div>
                <div className="w-tab-content">
                  <div
                    data-w-tab="Tab 1"
                    className={
                      "w-tab-pane " +
                      (activeTab.privacyPolicy === 1 ? " w--tab-active" : "")
                    }
                  >
                    <textarea
                      placeholder="Short Description (max. XX)"
                      maxLength={5000}
                      required
                      className="text-field area w-input"
                      value={legalities.privacyPolicy || ""}
                      onChange={(e) =>
                        updateLegalities("privacyPolicy", e.target.value)
                      }
                    />
                  </div>
                  <div
                    data-w-tab="Tab 2"
                    className={
                      "w-tab-pane " +
                      (activeTab.privacyPolicy === 2 ? " w--tab-active" : "")
                    }
                  >
                    <textarea
                      placeholder="Kurze Beschreibung (max. XX)"
                      maxLength={5000}
                      className="text-field area w-input"
                      value={legalities.privacyPolicyGerman || ""}
                      onChange={(e) =>
                        updateLegalities("privacyPolicyGerman", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="center">
              <input
                type="submit"
                defaultValue="Save & Continue"
                data-wait="Please wait..."
                className="button blue w-button"
                onClick={submit}
              />
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
  );
};

export default PS7;
