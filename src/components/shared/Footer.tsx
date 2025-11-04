import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  CreditCard,
  Shield,
  Truck,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0b100]">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <span className="text-xl font-bold">ShopHub</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your one-stop destination for all your shopping needs. Quality products, best prices, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-[#f0b100] cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-[#f0b100] cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-[#f0b100] cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-[#f0b100] cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-[#f0b100] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#f0b100] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#f0b100] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#f0b100] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#f0b100] transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-[#f0b100] transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-[#f0b100] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#f0b100] transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-[#f0b100] transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-[#f0b100] transition-colors">Wishlist</a></li>
              <li><a href="#" className="hover:text-[#f0b100] transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#f0b100] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-[#f0b100] transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#f0b100]" />
                <span>123 Commerce Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#f0b100]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#f0b100]" />
                <span>support@shophub.com</span>
              </div>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="space-y-2">
              <h4 className="font-medium">Newsletter</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-[#f0b100]"
                />
                <button className="px-4 py-2 bg-[#f0b100] text-gray-900 rounded-lg font-medium hover:bg-[#d89e00] transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 text-sm">
              <Truck className="h-5 w-5 text-[#f0b100]" />
              <span>Free Shipping Over $50</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="h-5 w-5 text-[#f0b100]" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <CreditCard className="h-5 w-5 text-[#f0b100]" />
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 ShopHub. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#f0b100] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#f0b100] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#f0b100] transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">We accept:</span>
              <div className="flex space-x-2">
                <div className="h-6 w-10 bg-gray-700 rounded flex items-center justify-center text-xs">Visa</div>
                <div className="h-6 w-10 bg-gray-700 rounded flex items-center justify-center text-xs">MC</div>
                <div className="h-6 w-10 bg-gray-700 rounded flex items-center justify-center text-xs">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}