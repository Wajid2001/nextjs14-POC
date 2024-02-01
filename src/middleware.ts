import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ROUTES } from "./utils/routes";

export function middleware(request: NextRequest) {
  if (!request.cookies.get("token") && !request.url.includes(ROUTES.BASE_NON_AUTH)) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
  }

  return NextResponse.next();
}
