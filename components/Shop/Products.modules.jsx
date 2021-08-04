import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Link from "next/link";
import QS from "query-string";

import { fetchCategories } from "@/slices/categories";

import Select from "@/shared/Select";
import Toggle from "@/shared/Toggle";

const TabLink = ({ name, active, onClick }) => {
  return (
    <a
      className={"tab-link-shop w-inline-block" + (active ? " current" : "")}
      onClick={onClick}
    >
      <div>{name}</div>
    </a>
  );
};

const Rating = ({ rating }) => {
  let filled = rating;
  let empty = 5 - rating;

  const ele = [];

  while (filled > 0) {
    ele.push(
      <img
        key={"filled-" + filled}
        src="/images/star-black-24-dp-copy-4.svg"
        loading="lazy"
        alt="Filled Star"
        className="shop-product-star"
      />
    );

    filled--;
  }

  while (empty > 0) {
    ele.push(
      <img
        key={"empty-" + empty}
        src="/images/star-black-24-dp-copy.svg"
        loading="lazy"
        alt="Empty star"
        className="shop-product-star"
      />
    );
    empty--;
  }

  return <div>{ele}</div>;
};

export const ShopProduct = ({ id, name, seller, price, image }) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="shop-product-item">
        <a className="shop-product-img w-inline-block">
          <img
            src={image}
            loading="lazy"
            sizes="(max-width: 479px) 83vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, (max-width: 1279px) 17vw, 218.40000915527344px"
            alt={name}
            className="back-img"
          />
        </a>
        <a className="potw-like active w-inline-block">
          <img
            src="/images/favorite-border-black-24-dp-2.svg"
            loading="lazy"
            width={25}  
            className="orange-heart"
          />
          <img
            src="/images/favorite-border-black-24-dp_1.svg"
            loading="lazy"
            className="heart"
          />
        </a>
        <div className="shop-product-info">
          <a className="link">{name}</a>
          <div className="by-seller">By {seller}</div>
          <div className="shop-product-price">€ {price}</div>
          <Rating rating={3} />
        </div>
      </div>
    </Link>
  );
};

export const ShopCard = ({ name, description }) => {
  return (
    <div className="hide-mobile">
      <div className="heading-wrapper mb-40">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export const Filters = () => {
  return (
    <div className="hide-mobile">
      <div>
        <div className="w-form">
          <form className="flex">
            <select className="text-field select width-24 w-select">
              <option value>Sustainability</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
            <select
              id="field-6"
              name="field-6"
              data-name="Field 6"
              className="text-field select width-24 w-select"
            >
              <option value>Price</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
            <select
              id="field-5"
              name="field-5"
              data-name="Field 5"
              className="text-field select width-24 w-select"
            >
              <option value>Colour</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
            <select
              id="field-4"
              name="field-4"
              data-name="Field 4"
              className="text-field select width-24 w-select"
            >
              <option value>Price</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
            <select
              id="field-3"
              name="field-3"
              data-name="Field 3"
              className="text-field select width-24 w-select"
            >
              <option value>Sale</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
            <select
              id="field-2"
              name="field-2"
              data-name="Field 2"
              className="text-field select width-24 w-select"
            >
              <option value>Sort by</option>
              <option value="First">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export const ShopSidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [filters, setFilters] = useState({});
  const { categories } = useSelector((state) => state.categories);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    if (!categories || !categories.length) {
      dispatch(fetchCategories());
    }
  }, []);

  useEffect(() => {
    const { category } = router.query;
    setActiveCategory(category);
  }, [router]);

  const onCategoryClick = (categoryId) => {
    const { query } = router;
    const { id, ...rest } = query;
    const newQ = { ...rest, category: categoryId };

    router.push(`/shop/${id}?${QS.stringify(newQ)}`);
  };

  return (
    <div className="shop-filter popup-mobile">
      <div className="scroll-y">
        <div className="mb-80">
          {categories.map((category, index) => (
            <TabLink
              name={category.name}
              key={"cat-" + index}
              onClick={() => onCategoryClick(category.id)}
              active={activeCategory === category.id}
            />
          ))}
        </div>
        <div>
          <div className="w-form">
            <form
              id="email-form-4"
              name="email-form-4"
              data-name="Email Form 4"
            >
              <div className="shop-select-text first">Delivers to:</div>
              <Select
                choices={["Choice One", "Choice Two", "Choice Three"]}
                defaultValue="Delivers To"
                value={filters.deliversTo || ""}
                setValue={(value) =>
                  setFilters({ ...filters, deliversTo: value })
                }
              />

              <div className="shop-select-text">Search within:</div>
              <Select
                choices={["Choice One", "Choice Two", "Choice Three"]}
                defaultValue="Search Within"
                value={filters.searchWithin || ""}
                setValue={(value) =>
                  setFilters({ ...filters, searchWithin: value })
                }
              />

              <div className="shop-select-text">Shop location</div>
              <Select
                choices={["Choice One", "Choice Two", "Choice Three"]}
                defaultValue="Shop Location"
                value={filters.shopLocation || ""}
                setValue={(value) =>
                  setFilters({ ...filters, shopLocation: value })
                }
              />

              <div className="shop-select-text">Delivery time:</div>
              <Select
                choices={["Choice One", "Choice Two", "Choice Three"]}
                defaultValue="Delivery Time"
                value={filters.deliveryTime || ""}
                setValue={(value) =>
                  setFilters({ ...filters, deliveryTime: value })
                }
              />
            </form>
          </div>
        </div>
      </div>

      <Toggle
        value={filters.pickUpAvailable || false}
        setValue={(value) => setFilters({ ...filters, pickUpAvailable: value })}
        name="Pick Up Available"
      />

      <div className="mobile-only">
        <div className="center">
          <a className="button gray w-inline-block">
            <div className="text-block">Clear</div>
          </a>
          <a className="button orange mx-10 w-inline-block">
            <div className="text-block">Apply</div>
          </a>
        </div>
      </div>
    </div>
  );
};
