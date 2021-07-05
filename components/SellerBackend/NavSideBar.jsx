const NavSidebar = () => {
  return (
    <div className="shop-filter popup-mobile">
      <div className="scroll-y">
        <div>
          <a href="#" className="tab-link-shop current w-inline-block">
            <div>Basic Information</div>
          </a>
          <a href="#" className="tab-link-shop w-inline-block">
            <div>Billing</div>
          </a>
          <a href="#" className="tab-link-shop w-inline-block">
            <div>Terms &amp; Conditions</div>
          </a>
          <a href="#" className="tab-link-shop w-inline-block">
            <div>Products</div>
          </a>
          <a href="#" className="tab-link-shop w-inline-block">
            <div>Shipping</div>
          </a>
          <a href="#" className="tab-link-shop w-inline-block">
            <div>Order History</div>
          </a>
        </div>
      </div>
      <div className="mobile-only">
        <div className="center">
          <a href="#" className="button gray w-inline-block">
            <div className="text-block">Clear</div>
          </a>
          <a href="#" className="button orange mx-10 w-inline-block">
            <div className="text-block">Apply</div>
          </a>
        </div>
      </div>
      <a href="#" className="shop-delete mobile-only w-inline-block">
        <img
          src="images/clear-black-24-dp.svg"
          loading="lazy"
          width={24}
          alt="Close"
        />
      </a>
    </div>
  );
};

export default NavSidebar;
