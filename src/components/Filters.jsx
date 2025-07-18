const Filters = ({ filters, setFilters, resetFilters, categories, brands }) => {
  return (
    <div className="filters p-4 bg-gray-100 rounded mb-4">
      <div className="mb-2">
        <label>Category:</label>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="ml-2"
        >
          <option value="">All</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label>Brand:</label>
        <select
          value={filters.brand}
          onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          className="ml-2"
        >
          <option value="">All</option>
          {brands.map((brand, i) => (
            <option key={i} value={brand}>{brand}</option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label>Price Range:</label>
        <input
          type="number"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
          className="ml-2 w-20"
          placeholder="Min"
        />
        <input
          type="number"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
          className="ml-2 w-20"
          placeholder="Max"
        />
      </div>
      <button onClick={resetFilters} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;
