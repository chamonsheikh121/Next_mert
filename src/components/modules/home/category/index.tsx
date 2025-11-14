
import CategoryCard from "./CategroyCard";
import { TCategory } from "@/types";



const Categories = async ({categories}:{categories:TCategory[]}) => {
 

  if (!categories || categories.length === 0) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Categories Found</h2>
            <p className="text-gray-600">Check back later for our product categories.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg mb-2 block">
            Shop by Category
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated categories to find exactly what you&apos;re looking for. 
            From trending styles to timeless classics.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {Array(12).fill(categories[1]).map((category:TCategory, idx) => (
            <CategoryCard 
              key={idx} 
              category={category} 
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Our collection is constantly updated with new arrivals and exclusive pieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Contact Our Stylists
            </button>
            <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
              Browse All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;