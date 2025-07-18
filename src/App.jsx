import { useEffect, useState } from "react";
import productsData from "./data/products";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";

const DEFAULT_FILTERS = {
  category: "",
  brand: "",
  minPrice: 0,
  maxPrice: 2000,
};

function App() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [filtered, setFiltered] = useState(productsData);

  const categories = [...new Set(productsData.map(p => p.category))];
  const brands = [...new Set(productsData.map(p => p.brand))];

  useEffect(() => {
    let result = [...productsData];
    if (filters.category) result = result.filter(p => p.category === filters.category);
    if (filters.brand) result = result.filter(p => p.brand === filters.brand);
    result = result.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);
    setFiltered(result);
  }, [filters]);

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product Filter</h1>
      <Filters
        filters={filters}
        
        setFilters={setFilters}
        resetFilters={resetFilters}
        categories={categories}
        brands={brands}
      />
      <ProductList products={filtered} />
    </div>
  );
}

export default App;
