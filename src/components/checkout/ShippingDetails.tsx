import { Building, CreditCard, MapPin, Smartphone } from 'lucide-react';
import React from 'react';

const ShippingDetails = () => {
    return (
         <div className="lg:col-span-2 space-y-6">
            {/* Shipping Details */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-yellow-700" />
                <h2 className="text-xl font-semibold text-gray-900">Shipping Address</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="John Doe"
                    value="John Doe"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="+880 1XXX-XXXXXX"
                    value="+880 1304-100074"
                  />
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="john@example.com"
                    value="john@example.com"
                  />
                </div>

                {/* Division */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Division
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                    <option>Dhaka Division</option>
                    <option>Chittagong Division</option>
                    <option>Rajshahi Division</option>
                    <option>Khulna Division</option>
                  </select>
                </div>

                {/* District */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    District
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                    <option>Dhaka</option>
                    <option>Gazipur</option>
                    <option>Narayanganj</option>
                    <option>Tangail</option>
                  </select>
                </div>

                {/* Area/Thana */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Area/Thana
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                    <option>Gulshan</option>
                    <option>Banani</option>
                    <option>Dhanmondi</option>
                    <option>Mirpur</option>
                  </select>
                </div>

                {/* Zip Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="1212"
                    value="1212"
                  />
                </div>

                {/* Full Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Address
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                    rows={3}
                    placeholder="House #, Road #, Area details"
                    value="House #123, Road #45, Gulshan 1"
                  />
                </div>

                {/* Address Type */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address Type
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="addressType" className="mr-2" defaultChecked />
                      <span className="text-gray-700">Home</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="addressType" className="mr-2" />
                      <span className="text-gray-700">Office</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="addressType" className="mr-2" />
                      <span className="text-gray-700">Other</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-5 w-5 text-yellow-600" />
                <h2 className="text-xl font-semibold text-gray-900">Payment Method</h2>
              </div>

              {/* Payment Type Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Cash on Delivery */}
                <label className="relative">
                  <input type="radio" name="paymentType" className="sr-only peer" defaultChecked />
                  <div className="p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-yellow-500 peer-checked:border-yellow-500 peer-checked:bg-yellow-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full peer-checked:border-yellow-500 peer-checked:bg-yellow-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Cash on Delivery</h3>
                        <p className="text-sm text-gray-600">Pay when you receive the product</p>
                      </div>
                    </div>
                  </div>
                </label>

                {/* Online Payment */}
                <label className="relative">
                  <input type="radio" name="paymentType" className="sr-only peer" />
                  <div className="p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-yellow-500 peer-checked:border-yellow-500 peer-checked:bg-yellow-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full peer-checked:border-yellow-500 peer-checked:bg-yellow-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Online Payment</h3>
                        <p className="text-sm text-gray-600">Pay securely online</p>
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              {/* Online Payment Methods */}
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-3">Choose Payment Gateway</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {/* bKash */}
                  <label className="relative">
                    <input type="radio" name="gateway" className="sr-only peer" />
                    <div className="p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-green-500 peer-checked:border-green-500 peer-checked:bg-green-50 transition-colors">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-gray-900">bKash</span>
                      </div>
                    </div>
                  </label>

                  {/* SSL Commerz */}
                  <label className="relative">
                    <input type="radio" name="gateway" className="sr-only peer" />
                    <div className="p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-yellow-500 peer-checked:border-yellow-500 peer-checked:bg-yellow-50 transition-colors">
                      <div className="flex items-center gap-2">
                        <Building className="h-5 w-5 text-yellow-600" />
                        <span className="font-medium text-gray-900">SSL Commerz</span>
                      </div>
                    </div>
                  </label>

                  {/* Stripe */}
                  <label className="relative">
                    <input type="radio" name="gateway" className="sr-only peer" />
                    <div className="p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 peer-checked:border-purple-500 peer-checked:bg-purple-50 transition-colors">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-purple-600" />
                        <span className="font-medium text-gray-900">Stripe</span>
                      </div>
                    </div>
                  </label>
                </div>

                {/* bKash Payment Details */}
                <div className="mt-4 p-4 bg-white border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">bKash Payment Instructions</h4>
                  <ol className="text-sm text-green-700 space-y-1">
                    <li>1. Dial *247# from your bKash registered number</li>
                    <li>2. Choose &quot;Send Money&quot;</li>
                    <li>3. Enter Merchant Number: 017XXXXXXXX</li>
                    <li>4. Enter amount: $47.57</li>
                    <li>5. Enter reference: ORDER123</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
    );
};

export default ShippingDetails;