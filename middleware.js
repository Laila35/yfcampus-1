import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;
  const payload = token ? await verifyToken(token) : null;
  const role = payload?.role;

  // Redirect rule
  if (pathname === "/find-a-tutor") {
    return NextResponse.redirect(new URL("/our-tutors", request.url));
  }

  // Clone headers
  const requestHeaders = new Headers(request.headers);

  // ✅ Set lowercase header key (important)
  if (pathname.startsWith("/uk")) {
    requestHeaders.set("x-special-page", "true");
  } else {
    requestHeaders.set("x-special-page", "false");
  }

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Dashboard protection
  if (pathname.startsWith("/dashboard")) {
    if (!token || !payload) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 1800,
    });
  }

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|images|favicon.ico).*)",
};
