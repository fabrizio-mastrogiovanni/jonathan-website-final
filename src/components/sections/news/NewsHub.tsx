"use client";

import { useMemo, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import {
  CATEGORIES,
  type NewsCategory,
  type NewsFeed,
  type NewsItem,
} from "@/lib/news";

/* Rise-with-soft-overshoot ("bounce") reveal — the motion Jonathan asked for. */
const RISE_EASE = [0.34, 1.3, 0.5, 1] as const;

function Rise({
  children,
  delay = 0,
  className,
  y = 32,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: RISE_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function formatDate(iso: string): string {
  return new Date(iso)
    .toLocaleDateString("es-US", { day: "2-digit", month: "short" })
    .replace(".", "");
}

function formatUpdated(iso: string): string {
  return new Date(iso).toLocaleString("es-US", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function NewsHub({ feed }: { feed: NewsFeed }) {
  const [cat, setCat] = useState<NewsCategory | "all">("all");
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const lead = useMemo(
    () => feed.items.find((i) => i.lead) ?? feed.items[0],
    [feed.items],
  );
  const rest = useMemo(
    () => feed.items.filter((i) => i.id !== lead?.id),
    [feed.items, lead],
  );
  const visible = useMemo(
    () => (cat === "all" ? rest : rest.filter((i) => i.category === cat)),
    [rest, cat],
  );

  return (
    <main className="relative flex min-h-screen flex-col bg-paper text-ink">
      {/* Top bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-rule bg-paper/85 px-6 py-4 backdrop-blur md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] transition-opacity hover:opacity-60"
        >
          <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-gold">
            {!reduce && (
              <motion.span
                className="absolute inset-0 rounded-full bg-gold"
                animate={{ scale: [0.6, 2.4], opacity: [0.55, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              />
            )}
          </span>
          JONATHAN&nbsp;LÓPEZ
        </Link>
        <span className="hidden font-mono text-[10px] tracking-[0.28em] text-muted md:inline">
          THE BRIEF · CAR BUSINESS INTELLIGENCE
        </span>
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[0.3em] transition-opacity hover:opacity-60"
        >
          ← VOLVER / BACK
        </Link>
      </header>

      {/* Preview notice — only while showing seed data (no live feed yet) */}
      {feed.preview && (
        <div className="border-b border-gold/30 bg-gold/10 px-6 py-2.5 text-center font-mono text-[9px] uppercase tracking-[0.24em] text-gold md:px-10">
          Vista previa · contenido de ejemplo — el feed en vivo se activa con el
          pipeline diario
        </div>
      )}

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative flex min-h-[86vh] items-end overflow-hidden border-b border-rule"
      >
        <motion.div
          aria-hidden
          style={{
            y: reduce ? 0 : portraitY,
            backgroundImage: "url('/portrait/jonathan.jpg')",
          }}
          className="absolute inset-x-0 -top-[8%] bottom-[-8%] scale-105 bg-cover bg-[72%_18%] grayscale-[0.25]"
        />
        {/* Veil */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,#0A0908 6%,rgba(10,9,8,.86) 38%,rgba(10,9,8,.42) 68%,rgba(10,9,8,.72) 100%),linear-gradient(0deg,#0A0908 3%,rgba(10,9,8,0) 46%,rgba(10,9,8,.35) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 md:px-10">
          <Rise>
            <div className="font-mono text-[10px] tracking-[0.34em] text-gold">
              — EN VIVO · ACTUALIZADO HOY
            </div>
            <div className="mt-1 font-mono text-[9px] italic tracking-[0.34em] text-muted">
              Live · updated today
            </div>
          </Rise>

          <motion.h1
            className="display mt-6 text-[13vw] leading-[0.86] md:text-[7vw]"
            initial={reduce ? false : { opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.15, ease: RISE_EASE }}
          >
            Todo el car business.
            <br />
            Cada día<span className="text-gold">.</span>
          </motion.h1>

          <Rise delay={0.15} className="mt-5">
            <p className="max-w-[34ch] text-[4vw] italic leading-[1.2] text-muted md:text-[1.5vw]">
              The Brief — everything moving the car business, every day.
            </p>
          </Rise>

          <Rise delay={0.25} className="mt-9">
            <div className="flex max-w-3xl flex-wrap gap-x-9 gap-y-5 border-t border-rule pt-6">
              <MetaCell
                k="Actualizado / Updated"
                v={formatUpdated(feed.updatedAt)}
              />
              <MetaCell
                k="En portada / Live now"
                v={`${feed.items.length}`}
                sub="historias"
              />
              <MetaCell
                k="Se recicla / Auto-refresh"
                v="Diario"
                sub="· lo viejo cae solo"
              />
            </div>
          </Rise>
        </div>
      </section>

      {/* FILTERS */}
      <nav
        aria-label="Categorías"
        className="sticky top-[49px] z-40 border-b border-rule bg-paper/90 backdrop-blur"
      >
        <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-6 py-3 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((c) => {
            const active = c.key === cat;
            return (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={`flex-none rounded-[2px] border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                  active
                    ? "border-gold bg-gold text-paper"
                    : "border-rule text-muted hover:border-muted hover:text-ink"
                }`}
              >
                {c.es}
                {c.key !== "all" && (
                  <span className="ml-1.5 opacity-50">· {c.en}</span>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* FEED */}
      <section className="mx-auto w-full max-w-5xl px-6 py-14 md:px-10">
        {/* Lead */}
        {lead && (
          <>
            <Rise>
              <SectionLabel n="01" t="Lo más importante hoy · Today's lead" />
            </Rise>
            <Rise>
              <LeadStory item={lead} />
            </Rise>
          </>
        )}

        {/* Board */}
        <Rise className="mt-14">
          <SectionLabel n="02" t="El resto del tablero · The board" />
        </Rise>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-rule bg-rule sm:grid-cols-2 md:grid-cols-3">
          {visible.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>
        {visible.length === 0 && (
          <p className="py-16 text-center font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Sin noticias en esta categoría por ahora · Nothing here right now
          </p>
        )}

        {/* Recycle strip */}
        <Rise className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-8 border-t border-rule py-11">
            <div className="max-w-[60ch]">
              <h4 className="display text-[6vw] leading-[1] md:text-[1.8vw]">
                Siempre fresco. Sin mantenimiento.
              </h4>
              <div className="mt-2 text-[13px] italic text-muted">
                Always fresh. Zero upkeep.
              </div>
              <p className="mt-4 text-[14px] leading-[1.6] text-muted">
                Cada mañana el sistema busca lo nuevo en el car business, lo
                resume en tus dos idiomas y lo publica solo. Las noticias
                vencidas —como un especial de financiamiento que caducó a fin de
                mes— se retiran automáticamente. Tú no tocas nada.
              </p>
            </div>
          </div>
        </Rise>

        {/* CTA */}
        <Rise className="border-t border-rule py-20 text-center md:py-24">
          <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
            — EL ÚNICO LUGAR
          </div>
          <h3 className="display mx-auto mt-5 max-w-[18ch] text-[8vw] leading-[1.02] md:text-[3.4vw]">
            Para estar al día del car business, tienes que estar aquí.
          </h3>
          <p className="mt-4 text-[4vw] italic text-muted md:text-[1.4vw]">
            And when it&apos;s time to buy, Jonathan negotiates for you.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mt-9 inline-block"
          >
            <a
              href="https://square.link/u/o2e9grla?src=news"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col items-center gap-1 bg-gold px-10 py-5 text-paper transition-colors hover:bg-goldBright"
            >
              <span className="font-mono text-[11px] tracking-[0.3em]">
                CONTRATAR A JONATHAN →
              </span>
              <span className="font-mono text-[9px] italic tracking-[0.3em] opacity-75">
                Work with the strategist
              </span>
            </a>
          </motion.div>
        </Rise>
      </section>

      <div className="border-t border-rule px-6 py-6 text-center font-mono text-[10px] tracking-[0.3em] text-muted md:px-10">
        © 2026 — JONATHAN LÓPEZ · THE BRIEF · CAR BUSINESS INTELLIGENCE
      </div>
    </main>
  );
}

function MetaCell({ k, v, sub }: { k: string; v: string; sub?: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold">
        {k}
      </div>
      <div className="mt-1.5 text-[14px] font-bold tabular-nums tracking-tight">
        {v}
        {sub && <span className="ml-1 font-normal text-muted">{sub}</span>}
      </div>
    </div>
  );
}

function SectionLabel({ n, t }: { n: string; t: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-3.5">
      <span className="font-mono text-[11px] tracking-[0.3em] text-gold">
        {n}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
        {t}
      </span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[2px] border border-gold/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.26em] text-gold">
      {children}
    </span>
  );
}

function NewBadge() {
  return (
    <span className="rounded-[2px] bg-goldBright px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-paper">
      Nuevo
    </span>
  );
}

function DateTag({ iso }: { iso: string }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
      {formatDate(iso)}
    </span>
  );
}

function LeadStory({ item }: { item: NewsItem }) {
  return (
    <article className="grid grid-cols-1 gap-10 border-y border-rule py-9 md:grid-cols-[1.15fr_0.85fr]">
      <div>
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <Tag>{item.categoryLabel}</Tag>
          {item.isNew && <NewBadge />}
          <DateTag iso={item.publishedAt} />
        </div>
        <h2 className="display text-[8vw] leading-[1.02] md:text-[3.4vw]">
          {item.titleEs}
        </h2>
        <p className="mt-3 text-[4vw] italic leading-[1.25] text-muted md:text-[1.35vw]">
          {item.titleEn}
        </p>
        <div className="mt-6 border-l-2 border-gold pl-4">
          <div className="font-mono text-[9px] uppercase tracking-[0.26em] text-gold">
            Por qué te importa · Why it matters
          </div>
          <p className="mt-2 text-[15px] leading-[1.6]">{item.whyEs}</p>
        </div>
      </div>
      <div className="flex flex-col justify-end gap-5">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-gold"
        >
          Fuente: {item.source} →
        </a>
        <a
          href="https://square.link/u/o2e9grla?src=news-lead"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col gap-0.5 self-start bg-gold px-6 py-4 text-paper transition-colors hover:bg-goldBright"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.24em]">
            Habla con Jonathan →
          </span>
          <span className="font-mono text-[9px] italic uppercase tracking-[0.24em] opacity-80">
            Talk to Jonathan
          </span>
        </a>
      </div>
    </article>
  );
}

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.85, delay: (index % 3) * 0.06, ease: RISE_EASE }}
      className="flex min-h-[268px] flex-col bg-paper p-6 transition-colors hover:bg-mist"
    >
      <div className="mb-4 flex flex-wrap items-center gap-2.5">
        <Tag>{item.categoryLabel}</Tag>
        {item.isNew && <NewBadge />}
        <DateTag iso={item.publishedAt} />
      </div>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <h3 className="text-[20px] font-bold leading-[1.14] tracking-tight transition-colors group-hover:text-gold">
          {item.titleEs}
        </h3>
        <p className="mt-2.5 text-[13.5px] italic leading-[1.4] text-muted">
          {item.titleEn}
        </p>
      </a>
      <div className="mt-auto pt-5">
        <p className="border-l border-gold pl-3 text-[12.5px] leading-[1.5] text-ink/85">
          {item.whyEs}
        </p>
        <div className="mt-3.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
          Fuente: {item.source}
        </div>
      </div>
    </motion.article>
  );
}
