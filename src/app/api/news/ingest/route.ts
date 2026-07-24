import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Ingest endpoint for the daily n8n workflow.
 *
 * n8n curates + translates the news, then POSTs the assembled feed here. This
 * route writes it to Vercel Blob at the stable path `news/feed.json` (using the
 * project's BLOB_READ_WRITE_TOKEN, injected automatically) and revalidates /news.
 * n8n never handles the blob token — it only needs the shared secret.
 *
 *   POST /api/news/ingest?secret=THE_SECRET
 *   body: { "updatedAt": "...", "items": [ ...NewsItem ] }   (or just [ ...NewsItem ])
 *
 * Returns { ok, url } where url is the public feed URL (== NEWS_FEED_URL).
 */
export const runtime = "nodejs";

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

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Body must be valid JSON." },
      { status: 400 },
    );
  }

  // Accept either a full feed object or a bare items array.
  const items = Array.isArray(payload)
    ? payload
    : (payload as { items?: unknown }).items;

  if (!Array.isArray(items)) {
    return NextResponse.json(
      { ok: false, message: "Expected an items array." },
      { status: 400 },
    );
  }

  const feed = {
    updatedAt:
      (typeof payload === "object" &&
        payload !== null &&
        (payload as { updatedAt?: string }).updatedAt) ||
      new Date().toISOString(),
    items,
  };

  const blob = await put("news/feed.json", JSON.stringify(feed), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60,
  });

  revalidatePath("/news");

  return NextResponse.json({ ok: true, url: blob.url, count: items.length });
}
