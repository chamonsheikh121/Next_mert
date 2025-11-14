
// components/Header.tsx
import Image from 'next/image';
import headPhone from "./../../../../../public/images/headphone.png"
import style from "./Header.module.css"

const Header = () => {
  return (
    <header className={`${style.banner} min-h-screen flex flex-row-reverse items-center justify-center px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto w-full">
       

         
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             {/* Content Section */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Premium Collection
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Discover our exclusive range of high-quality products designed for modern living. Experience excellence in every detail.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                Shop Now
              </button>
              
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          {/* Product Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src={headPhone} // Add your product image path
                alt="Featured Product"
                width={500}
                height={500}
                className="object-cover rounded-2xl container"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
