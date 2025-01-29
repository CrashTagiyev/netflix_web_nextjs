"use server";

import { NextResponse, NextRequest} from "next/server";

const languages = ["en", "ru"];

export const localizationMiddleware = (next: any) => {
  return async (req: NextRequest, _next: any) => {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/_next") || pathname.startsWith("/favicon.ico")) {
      return NextResponse.next();
    }
    
    const lang = pathname.split("/")[1];
    console.log(`lang`,lang)
    const response = await next(req, _next);

    if (languages.includes(lang.toLowerCase())) {
      response.cookies.set("locale", lang.toLowerCase());
      return response;
    } 
  };
};

export const config = {
  matcher: [],
};
