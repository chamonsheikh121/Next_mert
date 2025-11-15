import CartProducts from "@/components/modules/cart/CartProducts";
import OrderSummary from "@/components/modules/cart/OrderSummary";
import CommonBanner from "@/components/ui/core/commonBanner/CommonBanner";

export default function CartPage() {
  return (
    <div>
      <CommonBanner
        heading="Cart page"
        subHeading="View your cart products and go to the checkout"
      />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <div className="text-sm text-gray-600">2 items</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CartProducts />
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
