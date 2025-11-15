
import ManageCheckout from '@/components/checkout';
import CommonBanner from '@/components/ui/core/commonBanner/CommonBanner';


export default function CheckoutPage() {
  return (
 <div>
    <CommonBanner heading="Checkout" subHeading="Complete your purchase with secure payment"/>
       <div className="min-h-screen  py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  
       <ManageCheckout/>
      </div>
    </div>
 </div>
  );
}