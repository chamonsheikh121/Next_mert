// components/FlashSale.tsx
import { TProduct } from '@/types/product';
import FeaturedProductCard from '../featuredProduct/FeaturedProductCard';

const FlashSale = ({products}:{products:TProduct[]}) => {


  return (
    <section className="py-20relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            LIMITED TIME OFFER
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {/* {product?.name} */}
            <span className="block text-red-600 text-3xl md:text-4xl mt-2">
              Up to 50% Off
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            {"subtitle"}
          </p>

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
        <div className="text-center mt-12">
          <button className="group px-12 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center">
            View All Flash Deals
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

// Countdown Timer Component
const CountdownTimer = ({ endDate }: { endDate: Date }) => {
  const calculateTimeLeft = () => {
    const difference = +endDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return null;
    }

    return (
      <div key={interval} className="flex flex-col items-center mx-2">
        <div className="bg-white rounded-lg shadow-lg px-4 py-3 min-w-[60px]">
          <span className="text-2xl font-bold text-red-600 block">
            {timeLeft[interval as keyof typeof timeLeft]}
          </span>
        </div>
        <span className="text-sm text-gray-600 mt-2 uppercase font-semibold">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center mb-8">
      <span className="text-lg font-semibold text-gray-700 mr-4">Ends in:</span>
      <div className="flex">
        {timerComponents.length ? timerComponents : <span className="text-red-600 font-bold">Sale Ended!</span>}
      </div>
    </div>
  );
};

export default FlashSale;