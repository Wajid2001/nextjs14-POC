import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (!request.cookies.get("token")) {
    return NextResponse.redirect("/login");
  }

  return NextResponse.redirect(new URL("/", request.url));
}
