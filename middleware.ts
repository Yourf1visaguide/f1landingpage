// middleware.ts

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase();

  const url = request.nextUrl.clone();

  switch (host) {
    case "usa.yourf1visaguide.com":
      url.pathname = "/";
      return NextResponse.rewrite(url);

    case "netherlands.yourf1visaguide.com":
      url.pathname = "/netherlands";
      return NextResponse.rewrite(url);

    case "touristvisa.yourf1visaguide.com":
      url.pathname = "/tourist-visa";
      return NextResponse.rewrite(url);

    default:
      return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Exclude Next.js internals and static assets.
     */
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};