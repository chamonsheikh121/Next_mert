// components/TopBrands.tsx
"use client"
import Image from 'next/image';


const TopBrands = () => {

    const brands:string[] =["data:image/jpeg;base64,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"]

  if (!brands || brands.length === 0) {
    return null;
  }

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brands Grid - Logo Wall */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20  z-10" />
          
          {/* Scrolling Container */}
          <div className="flex overflow-x-hidden group">
            <div className="flex animate-scroll hover:pause-animation">
              {/* Double the array for seamless loop */}
              {Array(12).fill(brands[0]).map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <div className="w-40 h-30 relative">
                    <Image
                      src={brand}
                      alt={"image"}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TopBrands;