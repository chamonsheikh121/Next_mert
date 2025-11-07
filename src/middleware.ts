import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/authService";

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/signup", "signin"];
const roleBasedPrivateRoutes = {
  user: [/^\/user/, /^\/createShop/],
  admin: [/^\/admin/],
};

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/signin?redirectPath=${pathname}`, req.url)
      );
    }
  }

  if (currentUser.role && roleBasedPrivateRoutes[currentUser.role as Role]) {
    const routes = roleBasedPrivateRoutes[currentUser.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", req.url))

};

export const config = {
  matcher: ["/createShop","/admin","/user","/admin:page","/user:page"],
};
