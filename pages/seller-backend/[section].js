import SellerBackend from "components/SellerBackend";

import Auth from "shared/Auth/Auth";

export default function SellerBackendPage() {
  return (
    <Auth>
      <SellerBackend />
    </Auth>
  );
}
