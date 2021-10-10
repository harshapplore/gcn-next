import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import FilterDropdown from "@/shared/Input/FilterDropdown";
import Toggle from "@/shared/Input/Toggle";

import CheckBox from "@/shared/Input/Checkbox";
import CheckDropdown from "@/shared/Input/CheckDropdown";

import __countries from "@/_data/countries.json";
import __deliveryTimes from "@/_data/deliveryTimes.json";

const Sidebar = ({ filters, setFilters, shopView }) => {
  const router = useRouter();
  const { categories } = useSelector((state) => state.categories);

  const [activeIndex, setActiveIndex] = useState();

  useEffect(() => {
    const { filters } = router.query;

    if (!filters) return;

    const _filters = JSON.parse(decodeURIComponent(filters));

    if (!_filters.category) {
      setActiveIndex(null);
      return;
    }

    if (_filters.category) {
      const index = categories.findIndex((cat) => cat.id === _filters.category);

      setActiveIndex(index);
    }
  }, [router.query.filters, categories]);

  const updateTags = (value, tag) => {
    if (value) setFilters({ ...filters, tags: [...(filters.tags || []), tag] });
    else {
      const tags = filters.tags.filter((tagg) => tagg != tag);

      console.log(tags)

      setFilters({ ...filters, tags });
    }
  };

  return (
    <>
      {shopView && (
        <div className="mb-20 hide-mobile">
          {categories &&
            categories.length > 0 &&
            categories.map((category, index) => {
              return (
                <div
                  key={"catg" + index}
                  className={
                    "tab-link-shop cursor w-inline-block" +
                    (activeIndex === index ? " current" : "")
                  }
                  onClick={() =>
                    setFilters({ ...filters, category: category.id })
                  }
                >
                  <div>{category.name}</div>
                </div>
              );
            })}
        </div>
      )}
    
      <div className="resetButton">
          Reset All:

          <button 
            onClick={() => router.push("/products")}
          >Reset</button>
      </div>
      <br />
      <div className="shop-select-text first">Delivers to:</div>
      <div className="mb-20">
        <CheckDropdown
          placeholder="Countries  "
          choices={__countries}
          value={filters.deliversTo || []}
          setValue={(value) => setFilters({ ...filters, deliversTo: value })}
        />
      </div>
      <div className="spacer-20" />
      <div className="shop-select-text first">Shop Location:</div>
      <div className="mb-20">
        <FilterDropdown
          placeholder="Country"
          choices={__countries}
          value={filters.shopLocation}
          setValue={(value) => setFilters({ ...filters, shopLocation: value })}
        />
      </div>
      <div className="spacer-20" />
      <div className="shop-select-text first">Delivery Time</div>
      <div className="mb-40">
        <FilterDropdown
          choices={__deliveryTimes}
          value={filters.deliveryTime}
          setValue={(value) => setFilters({ ...filters, deliveryTime: value })}
        />
      </div>

      <div className="shop-select-text first ">Filters</div>
      <div className="spacer-10" />
      <div className="mb-40">
        <div className="mb-20">
          <CheckBox
            text="For him"
            value={filters.tags && filters.tags.includes("for-him")}
            setValue={(value) => updateTags(value, "for-him")}
          />
        </div>

        <div className="mb-20">
          <CheckBox
            text="For her "
            value={filters.tags && filters.tags.includes("for-her")}
            setValue={(value) => updateTags(value, "for-her")}
          />
        </div>

        <div className="mb-20">
          <CheckBox
            text="For Children"
            value={filters.tags && filters.tags.includes("for-children")}
            setValue={(value) => updateTags(value, "for-children")}
          />
        </div>

        <div className="mb-20">
          <CheckBox
            text="For Babies"
            value={filters.tags && filters.tags.includes("for-babies")}
            setValue={(value) => updateTags(value, "for-babies")}
          />
        </div>
      </div>

      <div className="mb-20">
        <Toggle
          name="Pick up Available"
          value={filters.pickUp}
          setValue={(value) => setFilters({ ...filters, pickUp: value })}
        />
      </div>
      <div className="mb-20">
        <Toggle
          name="Free Delivery"
          value={filters.freeDelivery}
          setValue={(value) => setFilters({ ...filters, freeDelivery: value })}
        />
      </div>
      <div className="mb-20">
        <Toggle
          name="Sale"
          value={filters.sale}
          setValue={(value) => setFilters({ ...filters, sale: value })}
        />
      </div>
    </>
  );
};

export default Sidebar;
