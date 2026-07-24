import type { Metadata } from "next";
import { getNews } from "@/lib/news";
import { NewsHub } from "@/components/sections/news/NewsHub";

// Incremental Static Regeneration: rebuild at most every 15 min. The daily n8n
// workflow also hits /api/revalidate-news to refresh on demand the moment it
// publishes new items.
export const revalidate = 900;

export const metadata: Metadata = {
  title: "The Brief · Car Business Intelligence — Jonathan López",
  description:
    "Últimas noticias del car business: especiales de financiamiento por marca, credit unions, bancos, regulaciones de la FTC e IRS. Actualizado cada día. The latest in the car business, every day.",
  openGraph: {
    title: "The Brief · Car Business Intelligence — Jonathan López",
    description:
      "Todo lo que mueve el car business, cada día. Financiamiento, marcas, FTC, IRS, bancos y credit unions.",
    type: "website",
  },
};

export default async function NewsPage() {
  const feed = await getNews();
  return <NewsHub feed={feed} />;
}
