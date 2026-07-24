import seed from "@/data/news.seed.json";

/**
 * The Brief — Car Business Intelligence feed.
 *
 * The site NEVER hits news sources at request time. A daily n8n workflow curates,
 * summarizes, and translates the news, then writes a single JSON document to
 * Vercel Blob at a stable public URL (set as NEWS_FEED_URL). This module reads that
 * document with ISR caching and falls back to the committed seed when the env var is
 * absent or the fetch fails — so the page always renders.
 *
 * Data contract (what n8n must produce): see docs/news-pipeline.md.
 */

export type NewsCategory =
  | "financiamiento"
  | "marcas"
  | "regulacion"
  | "irs"
  | "bancos"
  | "mercado";

export interface NewsItem {
  /** Stable unique id (used for dedupe + React keys). */
  id: string;
  category: NewsCategory;
  /** Display label for the tag, e.g. "Regulación · FTC". */
  categoryLabel: string;
  /** Spanish headline — shown on top (primary). */
  titleEs: string;
  /** English headline — shown underneath (secondary). */
  titleEn: string;
  /** One-line "por qué te importa" angle in Spanish. */
  whyEs: string;
  /** Human-readable source name, e.g. "Federal Trade Commission". */
  source: string;
  /** Link to the original article. */
  url: string;
  /** ISO date the item was published/curated. */
  publishedAt: string;
  /** ISO date after which the item auto-retires to the archive. Optional. */
  expiresAt?: string;
  /** Marks the day's lead story. */
  lead?: boolean;
  /** Optional override; otherwise computed from publishedAt (<48h). */
  isNew?: boolean;
}

export interface NewsFeed {
  updatedAt: string;
  items: NewsItem[];
  /** True when the page is NOT showing the live feed (seed preview or awaiting). */
  preview?: boolean;
  /** True in production before the live feed exists — render the "activándose" state. */
  awaiting?: boolean;
}

export interface CategoryDef {
  key: NewsCategory | "all";
  es: string;
  en: string;
}

/** Filter chips, in display order. */
export const CATEGORIES: CategoryDef[] = [
  { key: "all", es: "Todo", en: "All" },
  { key: "financiamiento", es: "Financiamiento", en: "Financing" },
  { key: "marcas", es: "Marcas", en: "Brands" },
  { key: "regulacion", es: "Regulación · FTC", en: "Regulation" },
  { key: "irs", es: "IRS", en: "IRS" },
  { key: "bancos", es: "Bancos & Credit Unions", en: "Banks & CU" },
  { key: "mercado", es: "Mercado", en: "Market" },
];

const MAX_ITEMS = 30;
const NEW_WINDOW_MS = 48 * 60 * 60 * 1000;

/** Drop expired items, sort newest-first, cap, and compute the NEW flag. */
function normalize(feed: NewsFeed, preview: boolean): NewsFeed {
  const now = Date.now();
  const items = (feed.items ?? [])
    .filter((it) => !it.expiresAt || new Date(it.expiresAt).getTime() > now)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, MAX_ITEMS)
    .map((it) => ({
      ...it,
      isNew:
        it.isNew ?? now - new Date(it.publishedAt).getTime() < NEW_WINDOW_MS,
    }));
  return { updatedAt: feed.updatedAt, items, preview };
}

/**
 * Fetch the curated feed. Reads NEWS_FEED_URL (Vercel Blob) with 15-min ISR;
 * on any failure returns the committed seed so the page never breaks.
 */
export async function getNews(): Promise<NewsFeed> {
  const url = process.env.NEWS_FEED_URL;

  // 1) Live feed configured → use it (any environment).
  if (url) {
    try {
      const res = await fetch(url, { next: { revalidate: 900 } });
      if (res.ok) {
        return normalize((await res.json()) as NewsFeed, false);
      }
    } catch {
      // fall through to the no-feed handling below
    }
  }

  // 2) No live feed yet. In PRODUCTION we must never show fabricated sample news,
  //    so render a polished "activándose" state. In preview/dev we show the seed
  //    so the design can be reviewed populated.
  if (process.env.VERCEL_ENV === "production") {
    return {
      updatedAt: new Date().toISOString(),
      items: [],
      preview: true,
      awaiting: true,
    };
  }

  return normalize(seed as NewsFeed, true);
}
