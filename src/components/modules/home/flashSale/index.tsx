// components/FlashSale.tsx
import { TProduct } from "@/types/product";
import FeaturedProductCard from "../featuredProduct/ProductCard";
import React from "react";
import Countdown from "./CountDown";

const FlashSale = ({ products }: { products: TProduct[] }) => {
  return (
    <section className="py-20relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="flex items-start px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
           <span className=" bg-red-600 text-white  flex items-center gap-4 p-2 rounded-full">
             <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            LIMITED TIME OFFER
           </span>
          </div>
          <div className="flex items-center justify-between  w-full">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ">
                Up to 50% Off
              </h2>
            </div>
            <Countdown />
            <div className="text-center">
              <button className="group px-7 py-2 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center">
                View All Flash Deals
              </button>
            </div>
          </div>

          {/* Countdown Timer */}
          {/* <CountdownTimer endDate={"endDate"} /> */}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <FeaturedProductCard key={idx} product={product} />
          ))}
        </div>

        {/* CTA Button */}
      </div>
    </section>
  );
};

export default FlashSale;
