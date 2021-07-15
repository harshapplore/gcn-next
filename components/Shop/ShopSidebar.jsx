import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import QS from "query-string";

import { fetchCategories } from "slices/categories";

import Select from "shared/Select";
import Toggle from "shared/Toggle";

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

const ShopSidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  console.log(router);

  const [filters, setFilters] = useState({});
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    if (!categories || !categories.length) {
      dispatch(fetchCategories());
    }
  }, []);

  const onCategoryClick = (categoryId) => {
    const { query } = router;
    const { id, ...rest } = query;
    const newQ = { ...rest, categoryId };

    router.push(`/shop/${id}?${QS.stringify(newQ)}`);
  };

  return (
    <div className="shop-filter popup-mobile">
      <div className="scroll-y">
        <div className="mb-80">
          {categories.map((category) => (
            <TabLink
              name={category.name}
              onClick={() => onCategoryClick(category.id)}
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

export default ShopSidebar;
