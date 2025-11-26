import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { ADMIN_COOKIE_NAME, verifyAdminToken } from "./lib/auth"

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Protect /admin routes except login
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value
    const valid = await verifyAdminToken(token)
    if (!valid) {
      const loginUrl = req.nextUrl.clone()
      loginUrl.pathname = "/admin/login"
      loginUrl.search = ""
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}