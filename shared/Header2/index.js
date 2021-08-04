const Header = ({ nav }) => {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="brand-wrapper">
          <a href="index.html" className="brand w-inline-block w--current">
            <img src="images/fill-2.svg" alt="Green Cloud Nine Logo" />
          </a>
        </div>
        <div className="form-search w-form">
          <form
            id="search-form"
            name="search-form"
            data-name="Search Form"
            className="search-bar-wrapper"
          >
            <input
              type="text"
              className="search-bar w-input"
              maxLength={256}
              name="Searchbar"
              data-name="Searchbar"
              placeholder="I'm searching for"
              id="Searchbar"
              required
            />
            <img
              src="images/search-black-24-dp.svg"
              alt="search"
              className="search-icon"
            />
          </form>
        </div>
        <div className="clearfix" />
        <div className="right-icon-nav">
          <a href="#" className="icon-nav w-inline-block">
            <img
              src="images/favorite-border-black-24-dp.svg"
              loading="lazy"
              alt
            />
          </a>
          <a href="#" className="icon-nav w-inline-block">
            <img
              src="images/account-circle-black-24-dp.svg"
              loading="lazy"
              alt="Account"
            />
          </a>
          <a href="#" className="icon-nav w-inline-block">
            <img
              src="images/local-mall-black-24-dp.svg"
              loading="lazy"
              alt="Shopping Cart"
            />
          </a>
        </div>
        <a href="#" className="menu-button w-inline-block">
          <div className="burger">
            <div className="line top" />
            <div className="line mid" />
            <div className="line bot" />
          </div>
        </a>
      </div>
      {nav}
    </div>
  );
};

export default Header;
