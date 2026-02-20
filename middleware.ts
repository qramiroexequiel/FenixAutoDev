import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Rate limiting en memoria (por instancia Edge).
 * Para producción multi-instancia considerar Redis/Upstash.
 */
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60 * 1000; // 1 minuto
const API_MAX = 10; // máx. peticiones a /api/* por IP por ventana
const GENERAL_MAX = 80; // máx. peticiones al resto por IP por ventana

function getClientId(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(key: string, limit: number): boolean {
  const now = Date.now();
  const entry = rateLimit.get(key);
  if (!entry) {
    rateLimit.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (now > entry.resetAt) {
    rateLimit.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  if (entry.count > limit) return true;
  return false;
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const clientId = getClientId(request);
  const isApi = path.startsWith("/api/");

  const limit = isApi ? API_MAX : GENERAL_MAX;
  const key = `${clientId}:${isApi ? "api" : "gen"}`;
  if (isRateLimited(key, limit)) {
    return NextResponse.json(
      { error: "Demasiadas peticiones. Intentá de nuevo en un minuto." },
      {
        status: 429,
        headers: {
          "Retry-After": "60",
          "X-RateLimit-Limit": String(limit),
        },
      }
    );
  }

  const response = NextResponse.next();

  // Cabeceras de seguridad adicionales (refuerzan next.config)
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "origin-when-cross-origin");

  // Vercel: control de tráfico / caching (recomendadas)
  if (isApi) {
    response.headers.set("Cache-Control", "no-store, max-age=0");
  }

  return response;
}

export const config = {
  matcher: [
    "/api/:path*",
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
