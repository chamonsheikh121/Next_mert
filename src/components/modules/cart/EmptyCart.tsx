
import { ShoppingCart } from 'lucide-react';

export function EmptyCart() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <ShoppingCart className="mx-auto h-24 w-24 text-gray-300" />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-600">Start shopping to add items to your cart</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}