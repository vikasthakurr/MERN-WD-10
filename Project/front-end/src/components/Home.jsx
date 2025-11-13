import React, { useState, useMemo } from "react";
import Card from "./Card.jsx";
import products from "../product-api/product.js";
import { useSearch } from "../context/SearchContext.jsx";
import { FiFilter } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import ProductModal from "./ProductModal.jsx";

const Home = () => {
  const { search } = useSearch();
  const [sortBy, setSortBy] = useState("relevance");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    rating: 0,
    priceRange: { min: 0, max: 3000 },
  });

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    []
  );
  const brands = useMemo(() => [...new Set(products.map((p) => p.brand))], []);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      if (filterType === "category" || filterType === "brand") {
        const newValues = prevFilters[filterType].includes(value)
          ? prevFilters[filterType].filter((item) => item !== value)
          : [...prevFilters[filterType], value];
        return { ...prevFilters, [filterType]: newValues };
      } else {
        return { ...prevFilters, [filterType]: value };
      }
    });
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      brand: [],
      rating: 0,
      priceRange: { min: 0, max: 3000 },
    });
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  let filteredProducts = products.filter((product) => {
    const searchMatch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const categoryMatch =
      filters.category.length === 0 ||
      filters.category.includes(product.category);
    const brandMatch =
      filters.brand.length === 0 || filters.brand.includes(product.brand);
    const ratingMatch = product.rating >= filters.rating;
    const priceMatch =
      product.price >= filters.priceRange.min &&
      product.price <= filters.priceRange.max;

    return (
      searchMatch && categoryMatch && brandMatch && ratingMatch && priceMatch
    );
  });

  if (sortBy) {
    filteredProducts.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating-desc":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${
            i <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="flex bg-blue-50 min-h-screen">
      <aside
        className={`fixed inset-y-0 left-0 w-72 bg-white shadow-xl p-6 transform ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">Filters</h2>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="text-gray-500 hover:text-blue-600"
          >
            <IoClose size={28} />
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-gray-800 text-lg">Category</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category}
                    value={category}
                    checked={filters.category.includes(category)}
                    onChange={() => handleFilterChange("category", category)}
                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={category}
                    className="ml-3 text-gray-700"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-gray-800 text-lg">Brand</h3>
            <div className="space-y-3">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    id={brand}
                    value={brand}
                    checked={filters.brand.includes(brand)}
                    onChange={() => handleFilterChange("brand", brand)}
                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={brand} className="ml-3 text-gray-700">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-gray-800 text-lg">
              Customer Rating
            </h3>
            <div className="space-y-3">
              {[4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center">
                  <input
                    type="radio"
                    id={`rating-${rating}`}
                    name="rating"
                    checked={filters.rating === rating}
                    onChange={() => handleFilterChange("rating", rating)}
                    className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    htmlFor={`rating-${rating}`}
                    className="ml-3 text-gray-700 flex items-center"
                  >
                    {renderStars(rating)}
                    <span className="ml-2 text-sm">& above</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-gray-800 text-lg">Price Range</h3>
            <div className="flex items-center">
              <input
                type="range"
                min="0"
                max="3000"
                value={filters.priceRange.max}
                onChange={(e) =>
                  handleFilterChange("priceRange", {
                    ...filters.priceRange,
                    max: Number(e.target.value),
                  })
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{ accentColor: '#3B82F6' }}
              />
            </div>
            <div className="text-center mt-3 text-gray-700 font-medium">
              ${filters.priceRange.min} - ${filters.priceRange.max}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            onClick={clearFilters}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-bold transition-colors duration-300 shadow-md"
          >
            Clear All Filters
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6 lg:p-10">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden mr-4 p-3 rounded-md bg-blue-500 text-white shadow-md"
            >
              <FiFilter size={22} />
            </button>
            <span className="text-xl text-gray-700">
              Showing {filteredProducts.length} of {products.length} products
            </span>
          </div>
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-3 text-gray-800 font-medium">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="relevance">Relevance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Top Rated</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              productObj={product}
              onQuickView={handleQuickView}
            />
          ))}
        </div>
      </main>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Home;
