"use client";

import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";
import { Marquee } from "@/components/Marquee";
import { motion } from "framer-motion";

type TierKey = "bronze" | "gold" | "diamond";

interface Tier {
  key: TierKey;
  labelEn: string;
  labelEs: string;
  nameEn: string;
  nameEs: string;
  badge?: string;
  badgeEs?: string;
  price: string;
  durationEn: string;
  durationEs: string;
  benefits: { en: string; es: string }[];
  ctaEn: string;
  ctaEs: string;
  href: string;
  featured?: boolean;
}

const tiers: Tier[] = [
  {
    key: "bronze",
    labelEn: "BRONZE TIER",
    labelEs: "Nivel Bronce",
    nameEn: "Bronze",
    nameEs: "Bronce",
    price: "$799",
    durationEn: "VALID FOR 3 MONTHS",
    durationEs: "Válida por 3 meses",
    benefits: [
      {
        en: "25-minute pre-negotiation advisory",
        es: "Asesoría 25 minutos previa a la negociación",
      },
      {
        en: "Negotiation until you buy the car",
        es: "Negociación hasta que se compre el auto",
      },
    ],
    ctaEn: "GET BRONZE →",
    ctaEs: "Obtener Bronce",
    href: "https://square.link/u/OEYHtbV1?src=sheet",
  },
  {
    key: "gold",
    labelEn: "GOLD TIER",
    labelEs: "Nivel Oro",
    nameEn: "Gold",
    nameEs: "Oro",
    price: "$999",
    durationEn: "VALID FOR 1 YEAR",
    durationEs: "Válida por 1 año",
    benefits: [
      {
        en: "Negotiation until you buy the car",
        es: "Negociación hasta que compres el auto",
      },
      { en: "Unlimited advisory", es: "Asesoría ilimitada" },
      { en: "Academy access", es: "Acceso a la academia" },
      {
        en: "NEO Chatbot: 500 credits included",
        es: "Chatbot NEO: 500 créditos incluidos",
      },
    ],
    ctaEn: "GET GOLD →",
    ctaEs: "Obtener Oro",
    href: "https://square.link/u/PUEzZv2x?src=sheet",
    featured: true,
  },
  {
    key: "diamond",
    labelEn: "DIAMOND TIER",
    labelEs: "Nivel Diamante",
    nameEn: "Diamond",
    nameEs: "Diamante",
    badge: "THE BEST OF ALL SERVICES",
    badgeEs: "El mejor de todos mis servicios",
    price: "$1,499",
    durationEn: "VALID FOR 1 YEAR",
    durationEs: "Válida por 1 año",
    benefits: [
      { en: "Academy for 1 year", es: "Academia por 1 año" },
      {
        en: "Unlimited advisory (buying strategies, upside down & more)",
        es: "Asesoría ilimitada (estrategias de compra, upside down y otros)",
      },
      {
        en: "Negotiation until you buy the car",
        es: "Negociación hasta que compres el auto",
      },
      { en: "Tax structuring", es: "Estructuración tributaria" },
      { en: "Company creation", es: "Creación de compañía" },
      { en: "Credit analysis", es: "Análisis de crédito" },
      { en: "Credit restructuring", es: "Estructuración de crédito" },
      { en: "Refinancing", es: "Refinanciación" },
      {
        en: "NEO Chatbot: 500 credits included first month",
        es: "Chatbot NEO: 500 créditos incluidos el primer mes",
      },
    ],
    ctaEn: "GET DIAMOND →",
    ctaEs: "Obtener Diamante",
    href: "https://square.link/u/cMzoTJp3?src=sheet",
  },
];

/* ---------------- Visual book cover (real PNG render) ---------------- */
function TierCover({ tier }: { tier: Tier }) {
  return (
    <div className="relative aspect-[2/3] w-full overflow-hidden">
      <img
        src={`/coaching/${tier.key === "bronze" ? "bronce" : tier.key === "gold" ? "oro" : "diamante"}.png`}
        alt={`Membresía ${tier.nameEs} — ${tier.price}`}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

/* ---------------- Tier card (book cover + details) ---------------- */
function TierCard({ tier, index }: { tier: Tier; index: number }) {
  const isFeatured = tier.featured;

  return (
    <FadeUp
      delay={index * 0.15}
      className={
        isFeatured
          ? "group relative bg-mist p-6 transition-all duration-500 md:p-8"
          : "group relative bg-paper p-6 transition-all duration-500 hover:bg-mist md:p-8"
      }
    >
      {isFeatured && (
        <div className="pointer-events-none absolute inset-0 border-2 border-gold/40" />
      )}
      {tier.key === "diamond" && (
        <div className="pointer-events-none absolute inset-0 border border-gold/30 [box-shadow:inset_0_0_60px_rgba(201,168,76,0.08)]" />
      )}

      {/* Featured badge */}
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
          <div className="bg-gold px-4 py-1.5 font-mono text-[10px] font-bold tracking-[0.3em] text-paper">
            {tier.badge}
          </div>
        </div>
      )}

      {/* Book cover image */}
      <motion.div
        whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
        className="mx-auto max-w-[280px] [box-shadow:0_20px_60px_-15px_rgba(0,0,0,0.4)]"
      >
        <TierCover tier={tier} />
      </motion.div>

      {/* Card body */}
      <div className="mt-8 text-center">
        {/* Tier label */}
        <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
          {tier.labelEn}
        </div>
        <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
          {tier.labelEs}
        </div>

        {/* Price */}
        <div className="mt-6 flex items-baseline justify-center gap-2">
          <span className="display text-[14vw] leading-none text-gold md:text-[3.5vw]">
            {tier.price}
          </span>
        </div>
        <div className="mt-3 font-mono text-[10px] tracking-[0.3em] text-muted">
          {tier.durationEn}
        </div>
        <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted/70">
          {tier.durationEs}
        </div>

        {/* Badge note (for diamond) */}
        {tier.key === "diamond" && tier.badgeEs && (
          <div className="mx-auto mt-4 max-w-[18ch] font-mono text-[9px] italic tracking-tight text-gold">
            {tier.badgeEs}
          </div>
        )}

        {/* Benefits list */}
        <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
          {tier.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-1.5 inline-block h-1 w-3 flex-shrink-0 bg-gold"
              />
              <div className="flex-1">
                <div className="text-[13px] font-bold leading-[1.4] tracking-tight text-ink md:text-[14px]">
                  {b.en}
                </div>
                <div className="mt-0.5 text-[11px] italic leading-[1.4] tracking-tight text-muted md:text-[12px]">
                  {b.es}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10">
          <motion.a
            href={tier.href}
            target={tier.href.startsWith("http") ? "_blank" : undefined}
            rel={tier.href.startsWith("http") ? "noopener noreferrer" : undefined}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={
              tier.key === "gold"
                ? "inline-flex w-full flex-col items-center gap-1 bg-gold px-7 py-4 text-paper transition-colors hover:bg-goldBright"
                : "inline-flex w-full flex-col items-center gap-1 border border-ink/40 px-7 py-4 text-ink transition-colors hover:border-gold hover:text-gold"
            }
          >
            <span className="font-mono text-[11px] tracking-[0.3em]">
              {tier.ctaEn}
            </span>
            <span className="font-mono text-[9px] italic tracking-[0.3em] opacity-75">
              {tier.ctaEs}
            </span>
          </motion.a>

          {/* Terms & Conditions link — subtle */}
          <a
            href="/membership-terms"
            className="mt-5 inline-block font-mono text-[10px] tracking-[0.3em] text-muted/70 transition-colors hover:text-gold"
          >
            TERMS &amp; CONDITIONS →
            <span className="ml-1.5 font-mono text-[9px] italic tracking-[0.3em] opacity-70">
              Términos y Condiciones
            </span>
          </a>
        </div>
      </div>
    </FadeUp>
  );
}

/* ---------------- Section ---------------- */
export function PersonalCoaching() {
  return (
    <section
      id="personal-coaching"
      className="relative overflow-hidden border-y border-rule bg-paper"
    >
      {/* HEADER */}
      <div className="px-6 pt-24 md:px-10 md:pt-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <FadeUp>
              <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                — PERSONAL COACHING
              </div>
              <div className="mt-1 font-mono text-[10px] italic tracking-[0.3em] text-muted">
                Coaching personal
              </div>
            </FadeUp>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="display text-[12vw] leading-[0.9] md:text-[7vw]">
              <SplitText
                mode="word"
                variant="mask"
                duration={1.0}
                stagger={0.05}
              >
                Three tiers. One mission:
              </SplitText>
              <br />
              <span className="text-gold">
                <SplitText
                  mode="word"
                  variant="mask"
                  duration={1.0}
                  stagger={0.05}
                  delay={0.3}
                >
                  your best deal.
                </SplitText>
              </span>
            </h2>
            <FadeUp delay={0.65} className="mt-5">
              <p className="text-[3vw] italic leading-[1.2] tracking-normal text-muted md:text-[1.4vw]">
                Tres niveles. Una misión: tu mejor negocio.
              </p>
            </FadeUp>
            <FadeUp delay={0.85} className="mt-8">
              <div className="font-mono text-[10px] tracking-[0.3em] text-gold md:text-[11px]">
                CAR BUSINESS ADVISOR &nbsp;·&nbsp; CORPORATE BUSINESS COACHING
              </div>
              <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
                Asesor de negocios automotrices y coaching corporativo
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* TIER CARDS */}
      <div className="px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
        <div className="grid grid-cols-1 gap-px bg-rule md:grid-cols-3">
          {tiers.map((t, i) => (
            <TierCard key={t.key} tier={t} index={i} />
          ))}
        </div>

        {/* TAGLINE */}
        <FadeUp delay={0.3} className="mt-24 text-center md:mt-32">
          <p className="display text-[6vw] leading-[1.1] text-gold md:text-[2.6vw]">
            <SplitText mode="word" variant="mask" duration={1.0} stagger={0.04}>
              &quot;He who doesn&apos;t understand the game
            </SplitText>
            <br />
            <SplitText
              mode="word"
              variant="mask"
              duration={1.0}
              stagger={0.04}
              delay={0.3}
            >
              always ends up being the pawn.&quot;
            </SplitText>
          </p>
          <FadeUp delay={0.85} className="mt-6">
            <p className="text-[3vw] italic leading-[1.2] text-muted md:text-[1.4vw]">
              &quot;El que no entiende el juego siempre termina siendo la ficha.&quot;
            </p>
          </FadeUp>
          <FadeUp delay={1.0} className="mt-8">
            <div className="font-mono text-[10px] tracking-[0.3em] text-muted">
              — JONATHAN LÓPEZ
            </div>
            <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted/60">
              INTEGRITY SYSTEM
            </div>
          </FadeUp>
        </FadeUp>
      </div>

      {/* MARQUEE */}
      <Marquee
        items={[
          "PERSONAL COACHING",
          "BRONCE",
          "ORO",
          "DIAMANTE",
          "INTEGRITY SYSTEM",
          "CAR BUSINESS",
          "NEGOTIATION",
          "ACADEMY",
        ]}
        speed={45}
        className="border-y border-rule py-6"
        itemClassName="font-bold text-ink"
      />
    </section>
  );
}
