import SellerOnboarding from "@/components/SellerOnboarding";

import Auth from "@/shared/Auth/Auth";

const SellerOnboardingPage = () => {
  return (
    <Auth>
      <SellerOnboarding />
    </Auth>
  );
};

export default SellerOnboardingPage;
