// components/ProductFilterSidebar.tsx
'use client';

import { useState } from 'react';

interface FilterSidebarProps {
  onFilterChange: (filters: ProductFilters) => void;
  brands: string[];
  categories: string[];
}

export interface ProductFilters {
  priceRange: [number, number];
  categories: string[];
  brands: string[];
  ratings: number[];
  availability: 'inStock' | 'outOfStock' | 'all';
}

const ProductFilterSidebar = ({ onFilterChange, brands, categories }: FilterSidebarProps) => {
  const [filters, setFilters] = useState<ProductFilters>({
    priceRange: [0, 1000],
    categories: [],
    brands: [],
    ratings: [],
    availability: 'all'
  });

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const updateFilters = (newFilters: Partial<ProductFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handlePriceChange = (min: number, max: number) => {
    updateFilters({ priceRange: [min, max] });
  };

  const handleCategoryChange = (category: string) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    updateFilters({ categories: updatedCategories });
  };

  const handleBrandChange = (brand: string) => {
    const updatedBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    updateFilters({ brands: updatedBrands });
  };

  const handleRatingChange = (rating: number) => {
    const updatedRatings = filters.ratings.includes(rating)
      ? filters.ratings.filter(r => r !== rating)
      : [...filters.ratings, rating];
    updateFilters({ ratings: updatedRatings });
  };

  const handleAvailabilityChange = (availability: 'inStock' | 'outOfStock' | 'all') => {
    updateFilters({ availability });
  };

  const clearAllFilters = () => {
    const clearedFilters: ProductFilters = {
      priceRange: [0, 1000],
      categories: [],
      brands: [],
      ratings: [],
      availability: 'all'
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className='border rounded-md '>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
          </svg>
          Filter Products
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        bg-white rounded-xl shadow-lg border border-gray-200 p-6 h-fit sticky top-4
        ${isMobileOpen 
          ? 'fixed left-4 right-4 top-4 bottom-4 z-50 overflow-y-auto lg:static lg:z-0' 
          : 'hidden lg:block'
        }
      `}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Filters</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={clearAllFilters}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear All
            </button>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Price Range */}
          <div className="border-b border-gray-200 pb-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              Price Range
            </h4>
            <PriceRangeSlider
              min={0}
              max={1000}
              values={filters.priceRange}
              onChange={handlePriceChange}
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>

          {/* Categories */}
          <div className="border-b border-gray-200 pb-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Categories
            </h4>
            <div className="space-y-3">
              {categories.map((category) => (
                <CheckboxFilter
                  key={category}
                  label={category}
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="border-b border-gray-200 pb-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Brands
            </h4>
            <div className="space-y-3">
              {brands.map((brand) => (
                <CheckboxFilter
                  key={brand}
                  label={brand}
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
              ))}
            </div>
          </div>

          {/* Ratings */}
          <div className="border-b border-gray-200 pb-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Customer Ratings
            </h4>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <CheckboxFilter
                  key={rating}
                  label={
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-600">& Up</span>
                    </div>
                  }
                  checked={filters.ratings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                />
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Availability
            </h4>
            <div className="space-y-3">
              <RadioFilter
                label="In Stock"
                value="inStock"
                checked={filters.availability === 'inStock'}
                onChange={() => handleAvailabilityChange('inStock')}
              />
              <RadioFilter
                label="Out of Stock"
                value="outOfStock"
                checked={filters.availability === 'outOfStock'}
                onChange={() => handleAvailabilityChange('outOfStock')}
              />
              <RadioFilter
                label="Show All"
                value="all"
                checked={filters.availability === 'all'}
                onChange={() => handleAvailabilityChange('all')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Price Range Slider Component
const PriceRangeSlider = ({ min, max, values, onChange }: {
  min: number;
  max: number;
  values: [number, number];
  onChange: (min: number, max: number) => void;
}) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), values[1] - 10);
    onChange(newMin, values[1]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), values[0] + 10);
    onChange(values[0], newMax);
  };

  return (
    <div className="relative py-4">
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-2 bg-blue-600 rounded-full"
          style={{
            left: `${((values[0] - min) / (max - min)) * 100}%`,
            right: `${100 - ((values[1] - min) / (max - min)) * 100}%`
          }}
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={values[0]}
        onChange={handleMinChange}
        className="absolute top-4 w-full h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={values[1]}
        onChange={handleMaxChange}
        className="absolute top-4 w-full h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
      />
    </div>
  );
};

// Checkbox Filter Component
const CheckboxFilter = ({ label, checked, onChange }: {
  label: string | React.ReactNode;
  checked: boolean;
  onChange: () => void;
}) => (
  <label className="flex items-center cursor-pointer group">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
    />
    <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">
      {label}
    </span>
  </label>
);

// Radio Filter Component
const RadioFilter = ({ label, value, checked, onChange }: {
  label: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <label className="flex items-center cursor-pointer group">
    <input
      type="radio"
      name="availability"
      value={value}
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
    />
    <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">
      {label}
    </span>
  </label>
);

export default ProductFilterSidebar;