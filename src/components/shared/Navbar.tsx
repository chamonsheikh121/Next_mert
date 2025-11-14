"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Search, Heart, ShoppingCart, User, Edit } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/authService";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/constants";

export function Navbar() {
  const { user, setIsLoading, isLoading, logOutFomUserContext } = useUser();

  const pathname = usePathname();

  const handleLogout = () => {
    logOutFomUserContext(pathname);
  };

  const navbarItems = [
    { label: "Dashboard", href: "/user/dashboard" },
    { label: "Profile", href: "/profile" },
  ];

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

          {user ? (
            <>
              <Link href={"/createShop"}>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <Edit className="h-5 w-5" />
                  <span>Create Store</span>
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    {navbarItems?.map((item, idx) => (
                      <Link key={idx} href={item.href}>
                        <DropdownMenuItem>{item.label}</DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuGroup>
                  {/* <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>Email</DropdownMenuItem>
                          <DropdownMenuItem>Message</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>More...</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      New Team
                      
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuItem disabled>API</DropdownMenuItem> */}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Button
                      onClick={handleLogout}
                      className="w-full  bg-red-100 text-red-600  hover:bg-red-200 hover:text-red-600 hover:outline-none"
                      variant={"outline"}
                    >
                      Log out
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href={"/signin"}>
              <Button variant="outline" className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Login</span>
              </Button>
            </Link>
          )}
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
            <Input type="text" placeholder="Search..." className="w-full" />
          </div>
          <Button size="icon" className="bg-[#f0b100] hover:bg-[#d89e00]">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
