import CommonBanner from "@/components/ui/core/commonBanner/CommonBanner";
import { getProduct } from "@/services/product";
import Image from "next/image";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const { productId } = await params;
  const { data: product } = await getProduct(productId);


console.log( product);

  return (
    <div className="bg-gray-50">
<CommonBanner heading="View Product" subHeading="Explore the product details here"/>
<div className="min-h-screen  py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 ">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <div className="flex items-center">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    Home
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href="#"
                    className="ml-4 text-gray-400 hover:text-gray-500"
                  >
                    Products
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-4 text-gray-500">{product?.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Main Product Section */}
        <div className=" rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images Section - Left Side */}
            <div>
              {/* Main Image */}
              <div className="bg-gray-100 border shadow-sm rounded-2xl relative aspect-square mb-4 flex items-center justify-center">
                <div className="text-center border   border-black">
                  {product?.imageUrls[0] ? (
                    <Image
                      src={product?.imageUrls[0]}
                      fill
                      alt={product?.name}
                    />
                  ) : (
                    <span>No image available</span>
                  )}
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
              
                    {product?.imageUrls?.length ? (
                      product?.imageUrls?.map((url, idx) => (
                        <Image key={idx} src={url} width={100} height={100} alt={"images"} />
                      ))
                    ) : (
                      <span className="text-gray-400 text-sm">
                        Thumb
                      </span>
                    )}

              </div>
            </div>

            {/* Product Details Section - Right Side */}
            <div className="flex flex-col">
              {/* Product Title and Basic Info */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product?.name}
                </h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {/* Star Rating */}
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600">(128 reviews)</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  ${product?.price}
                </div>
              </div>

              {/* Product Description */}
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {product?.description}
                </p>
              </div>

              {/* Key Features */}
              {product?.keyFeatures && product.keyFeatures.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.keyFeatures.slice(0, 3).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Add to Cart Section */}
              <div className="mt-auto space-y-4">
                {/* Quantity Selector */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 font-medium">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
                      -
                    </button>
                    <span className="px-4 py-2 border-l border-r border-gray-300">
                      1
                    </span>
                    <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Add to Cart
                  </button>
                  <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Stock Status */}
                <div className="flex items-center text-sm text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {product?.stock && product.stock > 0
                    ? `In Stock (${product.stock} available)`
                    : "Out of Stock"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Section - At Bottom */}
        <div className="mt-12">
          {/* You can add tabs for Description, Specifications, Reviews etc. here */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {["Description", "Specifications", "Reviews", "Shipping"].map(
                  (tab) => (
                    <button
                      key={tab}
                      className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap font-medium"
                    >
                      {tab}
                    </button>
                  )
                )}
              </nav>
            </div>

            {/* Tab Content Area */}
            <div className="py-6">
              <div className="text-gray-600">
                {/* This is where additional product content will go */}
                <p>
                  Additional product information, specifications, reviews, etc.
                  will be displayed here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default ProductDetails;
