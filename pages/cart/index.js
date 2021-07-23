import Cart from "components/Checkout";
import Auth from "shared/Auth/Auth";

const CartPage = () => {
  return (
    <>
      <Auth>
        <Cart />
      </Auth>
    </>
  );
};

export default CartPage;  
