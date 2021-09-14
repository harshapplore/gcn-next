const TermsAndConditions = ({
  returnsAndRefunds,
  generalConditions,
  privacyPolicy,
}) => {
  return (
    <div className="container">
      <h3 className="mb-20"> General Conditions </h3>
      <p className="mb-40"> {generalConditions}</p>

      <h3 className="mb-20"> Returns And Refunds </h3>
      <p className="mb-40"> {returnsAndRefunds}</p>

      <h3 className="mb-20"> Privacy Policy </h3>
      <p className="mb-40"> {privacyPolicy}</p>
    </div>
  );
};

export default TermsAndConditions;
