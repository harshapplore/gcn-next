import { useQuery } from "urql";

import CheckDropdown from "@/shared/Input/CheckDropdown";
import FilterDropdown from "@/shared/Input/FilterDropdown";

import __filters from "@/_data/filters.json";

const ShopsQuery = `
  query {
    shops {
      name,
      _id,
      id
    }
  }
`;

const TopFilter = ({ filters, setFilters, shopView }) => {
  const [result, reexecuteQuery] = useQuery({
    query: ShopsQuery,
  });

  const { data: shopsData, fetching, error } = result;

  return (
    <>
      <CheckDropdown
        choices={__filters.sustainability}
        placeholder="Sustainability"
        value={filters.sustainability || []}
        setValue={(value) => setFilters({ ...filters, sustainability: value })}
      />

      {!shopView && <FilterDropdown
        choices={(shopsData && shopsData.shops.map((shop) => shop.name)) || []}
        placeholder="Shop"
        value={filters.brand}
        width="200px"
        setValue={(value) => setFilters({ ...filters, brand: value })}
      /> }

      <CheckDropdown
        choices={__filters.price}
        placeholder="Price"
        value={filters.price || []}
        width="170px"
        setValue={(value) => setFilters({ ...filters, price: value })}
      />

      <CheckDropdown
        choices={__filters.colors}
        placeholder="Color"
        value={filters.colors || []}
        setValue={(value) => setFilters({ ...filters, colors: value })}
      />

      <FilterDropdown
        choices={__filters.sortBy}
        placeholder="Sort By"
        value={filters.sortBy}
        setValue={(value) => setFilters({ ...filters, sortBy: value })}
      />
    </>
  );
};

export default TopFilter;
