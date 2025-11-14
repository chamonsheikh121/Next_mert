// components/CategoryCard.tsx
import { TCategory } from '@/types';
import Image from 'next/image';
import Link from 'next/link';



interface CategoryCardProps {
  category: TCategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link 
      href={`/categories/${category._id}`}
      className="group relative bg-white rounded-md shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent"
    >
      {/* Image Container */}
      <div className="relative h-30 overflow-hidden">
        <Image
          src={category.icon || '/images/category-placeholder.jpg'}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
  </div>
      <div className="px-6 py-2">
        <h3 className="text-xl font-bold text-gray-600 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {category.name}
        </h3>
        
        {/* {category.description && (
          <p className="text-gray-600 line-clamp-2 mb-4">
            {category.description}
          </p>
        )} */}
        
        {/* View Products CTA */}
        <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
          Shop now
          <svg 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;