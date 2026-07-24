# The Brief — Car Business Intelligence · Pipeline runbook

A self-updating bilingual news hub at **`/news`**. The site never scrapes news at
request time: a daily **n8n** workflow curates → summarizes → translates → writes a
single JSON document to **Vercel Blob**, and the page reads that document with ISR.
Expired items retire automatically. Zero manual upkeep.

```
FUENTES ──▶ n8n (cron diario) ──▶ Claude (curar/traducir) ──▶ Vercel Blob (feed.json)
                                                                      │
                                    /api/revalidate-news  ◀───────────┘
                                            │
                                    /news (Next.js ISR)  ──▶  visitante
```

---

## 1. What's already built (in this repo)

| Piece | File |
| --- | --- |
| Data types + fetch/normalize (drop expired, sort, cap, NEW flag) | `src/lib/news.ts` |
| Seed data (fallback + preview) | `src/data/news.seed.json` |
| The hub UI (bilingual, filters, motion, portrait bg) | `src/components/sections/news/NewsHub.tsx` |
| Route (ISR, 15-min) | `src/app/news/page.tsx` |
| On-demand revalidation webhook | `src/app/api/revalidate-news/route.ts` |
| Nav + Footer links | `Nav.tsx`, `Footer.tsx` |

Until `NEWS_FEED_URL` is set, `/news` renders the seed data and shows a discreet
**"Vista previa · contenido de ejemplo"** ribbon so fabricated sample news never
poses as real. The ribbon disappears automatically once the live feed is wired.

---

## 2. Environment variables (Vercel → Project → Settings → Environment Variables)

| Var | Value | Used by |
| --- | --- | --- |
| `NEWS_FEED_URL` | Public Blob URL of `feed.json` (step 3 gives it to you) | `src/lib/news.ts` |
| `REVALIDATE_SECRET` | Any long random string | `/api/revalidate-news` |
| `BLOB_READ_WRITE_TOKEN` | From Vercel Blob store (step 3) | **n8n only**, not the site |

After setting `NEWS_FEED_URL`, redeploy once so it takes effect.

---

## 3. Vercel Blob store (one-time)

1. Vercel dashboard → **Storage → Create → Blob**. Attach it to the project.
2. Copy the **Read/Write token** → this is `BLOB_READ_WRITE_TOKEN` (goes in n8n).
3. The feed lives at a **stable** pathname `news/feed.json`. Its public URL is:
   `https://<STORE_ID>.public.blob.vercel-storage.com/news/feed.json`
   You get the exact `<STORE_ID>` after the first upload (step 4). Put that full URL
   in `NEWS_FEED_URL`.

Upload with a **stable** name (no random suffix) so the URL never changes:

```
PUT https://blob.vercel-storage.com/news/feed.json
Authorization: Bearer <BLOB_READ_WRITE_TOKEN>
x-content-type: application/json
x-add-random-suffix: 0
Body: <the NewsFeed JSON>
```

The response `url` field is the public URL — use it as `NEWS_FEED_URL`.

---

## 4. The n8n workflow (`n8n/the-brief-daily.workflow.json`)

Import it into your n8n (self-hosted v2.15). Nodes:

1. **Schedule Trigger** — daily, e.g. 06:30 ET.
2. **HTTP Request (×N) / RSS Read** — one per source (see list below). Google News
   RSS is the easiest universal source: `https://news.google.com/rss/search?q=<QUERY>&hl=en-US&gl=US&ceid=US:en`.
3. **Merge + Code (dedupe)** — dedupe by title/URL; keep the last ~40 candidates.
4. **AI Agent / Anthropic node (Claude)** — the curation brain. Prompt in §5.
   Output **must** be an array of `NewsItem` objects (strict JSON).
5. **Code (assemble feed)** — wrap items as `{ "updatedAt": <ISO now>, "items": [...] }`,
   sort newest-first, cap 30, set `expiresAt` (financing → end of month; regulation/IRS
   → +90 days), pick one `lead: true`.
6. **HTTP Request (upload)** — PUT to Vercel Blob (step 3).
7. **HTTP Request (revalidate)** — `POST https://www.jonathanlopez.com/api/revalidate-news?secret=<REVALIDATE_SECRET>`.

### Suggested sources
- **Regulación:** FTC RSS (`https://www.ftc.gov/feeds/press-release.xml`), CFPB newsroom, IRS Newsroom RSS.
- **Industria:** NADA, NIADA, Cox Automotive / Edmunds / Cars.com industry feeds.
- **Financiamiento por marca (Google News RSS queries):** `Jeep financing offer`,
  `RAM 1500 APR incentive`, `Chevrolet Silverado APR`, `Ford financing offer`,
  `Toyota RAV4 APR`, `Honda CR-V APR`, `Acura lease deal`, `credit union auto loan rate`.

---

## 5. Claude curation prompt (paste into the AI node)

> You are the editor of "The Brief," Jonathan López's car-business news desk. From the
> raw headlines below, keep ONLY items useful to a U.S. car buyer or the car business
> (financing specials by brand, credit-union/bank rates, FTC/CFPB/IRS regulation,
> market trends). Discard opinion, ads, and duplicates.
>
> For each kept item output an object with EXACTLY these fields:
> `id` (kebab slug), `category` (one of: financiamiento, marcas, regulacion, irs,
> bancos, mercado), `categoryLabel` (short display label, e.g. "Regulación · FTC"),
> `titleEs` (Spanish headline), `titleEn` (English headline), `whyEs` (one sentence,
> Spanish, "por qué te importa" — tie it to negotiating a better deal), `source`
> (publisher name), `url` (original link), `publishedAt` (ISO).
>
> Rules: SUMMARIZE, never copy article text. Do NOT invent specific numbers, APRs, or
> prices — only report figures explicitly present in the source. If a figure isn't in
> the source, describe it qualitatively. Return a JSON array only, 8–14 items.

**Accuracy guardrail (per the fully-automatic decision):** because there's no human
approval gate, the prompt forbids inventing figures and every item keeps a `url` back
to the source. This protects Jonathan's "Integrity System" brand and matches the
disclaimers already in `/terms` (no guaranteed rates/prices).

---

## 6. Go-live checklist

- [ ] Create Blob store, copy `BLOB_READ_WRITE_TOKEN`.
- [ ] Import + configure the n8n workflow; run it once manually.
- [ ] Confirm `feed.json` uploaded; copy its public URL.
- [ ] Set `NEWS_FEED_URL` + `REVALIDATE_SECRET` in Vercel; redeploy.
- [ ] Load `/news` — the preview ribbon should be gone and real news showing.
- [ ] Merge the `feature/news-hub` branch to `main` to publish on the live domain.

---

## 7. Data contract (reference)

```jsonc
{
  "updatedAt": "2026-07-24T10:40:00-04:00",
  "items": [
    {
      "id": "ftc-cars-rule-2026-07",
      "category": "regulacion",
      "categoryLabel": "Regulación · FTC",
      "titleEs": "…",              // Spanish headline (shown on top)
      "titleEn": "…",              // English headline (shown underneath)
      "whyEs": "…",                // one-line "por qué te importa"
      "source": "Federal Trade Commission",
      "url": "https://…",
      "publishedAt": "2026-07-24T08:10:00-04:00",
      "expiresAt": "2026-10-31T23:59:00-04:00",  // optional; auto-retire
      "lead": true                                // optional; one per feed
    }
  ]
}
```
