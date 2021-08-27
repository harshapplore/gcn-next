import { useState, useEffect } from "react";

import TextArea from "@/shared/Input/TextArea";

const TermsAndConditions = () => {
  const [_data, _setData] = useState({});

  return (
    <div className="settings-block">
      <h3 className="headline-5 mb-30">Terms &amp; Conditions</h3>
      <div className="w-form">
        <div className="terms-headline mb-20">
          <h4 className="subtitle-1 subtitle-1--blue">Returns and Refunds</h4>
        </div>

        <TextArea
          placeholder="Type in here..."
          value={_data.returnsAndRefunds}
          setValue={(value) => _setData({ ..._data, returnsAndRefunds: value })}
        />

        <div className="settings-spacer" />
        <div className="terms-headline mb-20">
          <h4 className="subtitle-1 subtitle-1--blue">General Conditions</h4>
        </div>

        <TextArea
          placeholder="General Conditions"
          value={_data.generalConditions}
          setValue={(value) => _setData({ ..._data, generalConditions: value })}
        />
        <div className="settings-spacer" />
        <h4 className="subtitle-1 subtitle-1--blue mb-20">Privacy Policy</h4>

        <TextArea
          placeholder="Privacy Policy"
          value={_data.privacyPolicy}
          setValue={(value) => _setData({ ..._data, privacyPolicy: value })}
        />

        <div className="settings-spacer" />

        <a className="button blue mr-10">Save and Continue</a>
      </div>
    </div>
  );
};

export default TermsAndConditions;
