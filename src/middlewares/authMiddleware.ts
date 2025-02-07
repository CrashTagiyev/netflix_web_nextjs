import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "./types";
import { jwtDecode } from "jwt-decode";
const publicRoutes = ["/auth/login", "auth/register", "/landing"];
const protectedRoutes = ["/", "/home"];

export const authMiddleware = (next) => {
  return async (req: NextRequest, _next: NextFetchEvent) => {
    const { pathname } = req.nextUrl;

    const locale = req.cookies.get("locale")?.value || "en";
    if (pathname.startsWith("/_next") || pathname.startsWith("/favicon.ico")) {
      return NextResponse.next();
    }

    const response = await next(req, _next);

    const shortPathName = "/" + pathname.split("/").slice(2)[0];
    console.log(`pathname`, shortPathName);
    if (protectedRoutes.includes(shortPathName)) {
      const token = req.cookies.get("token");
      if (token) {
        const decodedToken: any = jwtDecode(token.value);
        if (decodedToken && decodedToken.userId) {
          return response;
        } else {
          return NextResponse.redirect(new URL("/en/auth/login", req.nextUrl));
        }
      } else {
        return NextResponse.redirect(new URL("/en/auth/login", req.nextUrl));
      }
    }
    return response;
  };
};

export const config = {
  matcher: [],
};
