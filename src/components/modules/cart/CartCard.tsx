import { Button } from "@/components/ui/button";
import { ICartProduct } from "@/redux/features/cartToOrder/cartToOrderSlice";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

const CartCard = ({product}:{product:ICartProduct}) => {
    return (
         <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                   <Image src={product.imageUrls[0]} fill alt="product image"/>
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {product.description}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                       {product.category.name}
                      </p>
                    </div>
                    
                    {/* Remove Button */}
                    <Button variant={"ghost"} className="p-2 cursor-pointer  rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4 text-red-700 " />
                    </Button>
                  </div>

                  {/* Color and Quantity Controls */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Color:</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-4 bg-black rounded-full border border-gray-300"></div>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <Button variant={"outline"} className="h-8 w-8 border cursor-pointer  rounded-lg flex items-center justify-center ">
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="text-sm font-medium w-8 text-center">
                        {product.quantity}
                      </span>
                      
                      <Button variant="outline" className="h-8 w-8 border cursor-pointer rounded-lg flex items-center justify-center ">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-gray-900">
                      {product.price}
                      </span>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                       {product.offerPrice}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default CartCard;