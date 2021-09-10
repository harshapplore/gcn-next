const TermsNConditions = ({returnsAndRefunds, privacyPolicy, generalConditions}) => {
  return (
    <div className="mt-100">
      <div className="heading-wrapper mb-40">
        <h2>Terms &amp; Conditions</h2>
      </div>
      <div className="w-richtext">
        <h3>General Conditions</h3>
        <p className="mb-60">
          {generalConditions}
        </p>
        <h3 clasName="mb-20">Returns And Refunds</h3>
        <p className="mb-60">
          {returnsAndRefunds}
        </p>
        <h3 clasName="mb-20">Privacy Policy</h3>
        <p className="mb-60">
          {privacyPolicy}
        </p>
      </div>
    </div>
  );
};

export default TermsNConditions;