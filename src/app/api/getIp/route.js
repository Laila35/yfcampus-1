// src/app/api/getIp/route.js
export const runtime = "nodejs"; // optional but safer for Node access

export async function GET(req) {
  // Next.js provides headers() for this
  const forwardedFor = req.headers.get("x-forwarded-for");

  // Use only the first IP (there may be multiple comma-separated)
  const ip = forwardedFor?.split(",")[0]?.trim() || "0.0.0.0";

  return new Response(
    JSON.stringify({ ip }),
    { headers: { "Content-Type": "application/json" } }
  );
}
