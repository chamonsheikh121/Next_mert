import CreateShopForm from "@/components/modules/auth/shop/createShop/CreateShopForm";
import { Store } from "lucide-react";


const CreateShop = () => {


  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* Card Container */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200/60 overflow-hidden">
          {/* Premium Header */}
          <div className="relative p-8 text-center bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="absolute inset-0 bg-white/10"></div>
            <div className="relative flex justify-center items-center gap-3">
              <div className="flex items-center justify-center space-x-3">
                <div className="p-3 bg-white/30 rounded-xl backdrop-blur-sm border border-white/40">
                  <Store className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  Create Your Shop
                </h1>
                <p className="text-white/90 text-sm">
                  Set up your business profile in minutes
                </p>
              </div>
            </div>
          </div>

         <CreateShopForm/>
        </div>
      </div>
    </div>
  );
};

export default CreateShop;
