import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * On-demand revalidation for /news.
 *
 * The daily n8n workflow calls this AFTER it writes the fresh feed JSON to Vercel
 * Blob, so the live page updates within seconds instead of waiting for the 15-min
 * ISR window.
 *
 *   POST /api/revalidate-news?secret=THE_SECRET
 *   (or send the secret in the `x-revalidate-secret` header)
 *
 * Set REVALIDATE_SECRET in the Vercel project env. Requests without the correct
 * secret are rejected.
 */
export async function POST(req: NextRequest) {
  const secret =
    req.nextUrl.searchParams.get("secret") ??
    req.headers.get("x-revalidate-secret");

  const expected = process.env.REVALIDATE_SECRET;
  if (!expected || secret !== expected) {
    return NextResponse.json(
      { ok: false, message: "Invalid or missing secret." },
      { status: 401 },
    );
  }

  revalidatePath("/news");
  return NextResponse.json({ ok: true, revalidated: "/news" });
}
