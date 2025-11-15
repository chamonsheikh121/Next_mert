"use client"
import Image from "next/image";
import Link from "next/link";
import { TProduct } from "@/types/product";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/redux/features/cartToOrder/cartToOrderSlice";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: TProduct }) => {
  const mainImage = product.imageUrls[0] || "/images/product-placeholder.jpg";
  const isOutOfStock = product.stock === 0;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
    toast.success("Product added to the cart !")
  };

  return (
    <div className="group relative h-fit bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative h-50 overflow-hidden">
        <Link href={`/products/${product?._id}`}>
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </Link>

        {/* Overlay & Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Stock Badge */}
        {isOutOfStock ? (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Out of Stock
          </div>
        ) : product.stock < 10 ? (
          <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
            Low Stock
          </div>
        ) : null}

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-10 h-10 cursor-pointer bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
            <svg
              className="w-5 h-5 text-gray-700"
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
          <Link href={`/products/${product?._id}`}>
            <Button className="w-10 cursor-pointer h-10  backdrop-blur-sm rounded-full flex items-center justify-center transition-colors shadow-lg">
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </Button>
          </Link>
        </div>

        {/* Add to Cart Button */}
        {!isOutOfStock && (
          <Button
            onClick={handleAddToCart}
            className="absolute w-20 cursor-pointer bottom-4 left-1/2 transform -translate-x-1/2  rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
          >
            <ShoppingCart size={30} />
          </Button>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Brand */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500 font-medium">
            {product.category?.name}
          </span>
          <span className="text-sm text-blue-600 font-semibold">
            {product.brand?.name}
          </span>
        </div>

        {/* Product Name */}
        <Link href={`/products/${product._id}`}>
          <h3 className="text-lg font-bold text-gray-600 mb-2 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Key Features */}
        {product.keyFeatures && product.keyFeatures.length > 0 && (
          <ul className="mb-4 space-y-1">
            {product.keyFeatures.slice(0, 2).map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-gray-500"
              >
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Price & Actions */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div>
              {product.offerPrice ? (
                <div className="flex  gap-2 items-center">
                  <span className="text-xl font-bold text-gray-600">
                    $
                    {parseInt(`
                ${product.offerPrice}
         `)}
                  </span>
                  <del className="text-xl font-bold text-gray-600">
                    ${product.price}
                  </del>
                </div>
              ) : (
                <span className="text-xl font-bold text-gray-600">
                  {product.price}
                </span>
              )}
            </div>
            {product.weight && (
              <span className="text-sm text-gray-500">
                Weight: {product.weight}kg
              </span>
            )}
          </div>

          {/* Available Colors */}
          {product.availableColors && product.availableColors.length > 0 && (
            <div className="flex items-center space-x-1">
              {product.availableColors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
              {product.availableColors.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{product.availableColors.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
