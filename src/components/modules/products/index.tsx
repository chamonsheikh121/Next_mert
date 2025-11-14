"use client"
import { TProduct } from "@/types";
import ProductCard from "../home/featuredProduct/ProductCard";
import ProductFilterSidebar from "./ProductFilterSidebar";
import { useState } from "react";


interface ProductFilters {
  priceRange: [number, number];
  categories: string[];
  brands: string[];
  ratings: number[];
  availability: 'inStock' | 'outOfStock' | 'all';
}

const Products = ({ products }: { products: TProduct[] }) => {
  const [filters, setFilters] = useState<ProductFilters>({
    priceRange: [0, 1000],
    categories: [],
    brands: [],
    ratings: [],
    availability: "all",
  });

  const brands = ["Nike", "Adidas", "Apple", "Samsung", "Sony", "LG"];
  const categories = [
    "Electronics",
    "Clothing",
    "Shoes",
    "Accessories",
    "Home",
    "Sports",
  ];
  const handleFilterChange = (newFilters: ProductFilters) => {
    setFilters(newFilters);
    // Here you would typically filter your products based on the new filters
    console.log("Applied filters:", newFilters);
  };

  return (
    <div>
      <div className="flex gap-6 justify-between mt-10">
        <div className="flex-1">
          <ProductFilterSidebar
            onFilterChange={handleFilterChange}
            brands={brands}
            categories={categories}
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {products?.length ? (
            products.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))
          ) : (
            <h1>no products found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
