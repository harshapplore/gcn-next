import Auth from "@/shared/Auth/Auth";
import Customer from "@/components/CustomerBackend";

const CartPage = () => {
  return (
    <>
      <Auth>
        <Customer />
      </Auth>
    </>
  );
};

export default CartPage;
