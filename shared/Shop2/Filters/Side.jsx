import FilterDropdown from "@/shared/Input/FilterDropdown";
import Toggle from "@/shared/Input/Toggle";
import CheckDropdown from "@/shared/Input/CheckDropdown";

import __countries from "@/_data/countries.json";
import __deliveryTimes from "@/_data/deliveryTimes.json";

const Sidebar = ({ filters, setFilters }) => {
  return (
    <>
      <div className="shop-select-text first">Delivers to:</div>
      <div className="mb-20">
        <CheckDropdown
          placeholder="Countries  "
          choices={__countries}
          value={filters.deliversTo || []}
          setValue={(value) => setFilters({ ...filters, deliversTo: value })}
        />
      </div>
      <div className="shop-select-text first">Shop Location:</div>
      <div className="mb-20">
        <CheckDropdown
          placeholder="Countries"
          choices={__countries}
          value={filters.shopLocation || []}
          setValue={(value) => setFilters({ ...filters, shopLocation: value })}
        />
      </div>
      <div className="shop-select-text first">Delivery Time</div>
      <div className="mb-20">
        <FilterDropdown
          choices={__deliveryTimes}
          value={filters.deliveryTime}
          setValue={(value) => setFilters({ ...filters, deliveryTime: value })}
        />
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
