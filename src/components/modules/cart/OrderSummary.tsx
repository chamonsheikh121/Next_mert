import { Button } from "@/components/ui/button";
import { ArrowRight,Shield, Truck } from "lucide-react";
import Link from "next/link";

const OrderSummay = () => {
    return (
        <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>

              {/* Coupon Section */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Apply Coupon</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button className="px-4 py-2 transition-colors">
                    Apply
                  </Button>
                </div>
                
                {/* Applied Coupon */}
                <div className="mt-3 flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-green-700 font-medium">
                      Coupon SUMMER25 applied
                    </span>
                    <span className="text-green-600 text-sm">(10% off)</span>
                  </div>
                  <Button className=" text-sm font-medium">
                    Remove
                  </Button>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">$48.95</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-green-600">Discount</span>
                  <span className="text-green-600">-$4.90</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">Free</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">$3.52</span>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">$47.57</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
             <Link href="/checkout"> 
             <Button className="w-full cursor-pointer py-3 px-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button></Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-around text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Truck className="h-4 w-4" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    <span>Secure Payment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};

export default OrderSummay;