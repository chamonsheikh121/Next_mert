import { ShieldCheck } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

const CheckoutOrderSummary = () => {
    return (
        <div>
               <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>

              {/* Order Items */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">asus XPS 15 Laptop12</h4>
                    <p className="text-sm text-gray-600">Qty: 2 × $9.48</p>
                  </div>
                  <span className="font-semibold text-gray-900">$18.96</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">Wireless Gaming Mouse</h4>
                    <p className="text-sm text-gray-600">Qty: 1 × $29.99</p>
                  </div>
                  <span className="font-semibold text-gray-900">$29.99</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
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
                
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">$47.57</span>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Shipping to</h4>
                <p className="text-sm text-gray-600">
                  House #123, Road #45, Gulshan 1<br />
                  Dhaka, Bangladesh<br />
                  Phone: +880 1304-100074
                </p>
              </div>

              {/* Place Order Button */}
              <Button className="w-full mt-6 cursor-pointer py-3 px-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center">
                <ShieldCheck className="mr-2 h-5 w-5" />
                Place Order
              </Button>

              {/* Security Badge */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  <span>Secure SSL Encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default CheckoutOrderSummary;