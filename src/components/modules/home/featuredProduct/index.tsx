// components/FeaturedProducts.tsx
import { TProduct } from '@/types/product';
import FeaturedProductCard from './FeaturedProductCard';


interface FeaturedProductsProps {
  products: TProduct[];
  title?: string;
  subtitle?: string;
}

const FeaturedProducts = ({ 
  products, 
  title = "Featured Products", 
  subtitle = "Discover our handpicked selection of premium items"
}: FeaturedProductsProps) => {
  if (!products || products.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">No Featured Products</h2>
          <p className="text-gray-600">Check back later for featured items.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg mb-4 block tracking-wider uppercase">
            Premium Selection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, idx) => 
            <FeaturedProductCard key={product?._id} product={product} />
          )}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center">
            View All Products
            <svg 
              className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;