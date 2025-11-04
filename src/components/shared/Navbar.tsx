import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Navbar() {
  return (
    <nav className=" sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" container flex mx-auto h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0b100]">
            <span className="text-lg font-bold text-white">S</span>
          </div>
          <span className="text-xl font-bold">ShopHub</span>
        </div>

        {/* Search Bar with Category Selection */}
        <div className="hidden flex-1 max-w-2xl mx-8 md:flex">
          <div className="flex w-full items-center space-x-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="home">Home & Garden</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="books">Books</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search for products..."
                className="w-full"
              />
            </div>
            <Button size="icon" className="bg-[#f0b100] hover:bg-[#d89e00]">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f0b100] text-xs text-white">
              3
            </span>
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f0b100] text-xs text-white">
              5
            </span>
          </Button>

          <Button variant="ghost" className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span>Login</span>
          </Button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="container pb-4 md:hidden">
        <div className="flex items-center space-x-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="home">Home</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full"
            />
          </div>
          <Button size="icon" className="bg-[#f0b100] hover:bg-[#d89e00]">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}