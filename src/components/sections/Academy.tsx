"use client";

import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";
import { motion } from "framer-motion";

type SpineVariant = "cream" | "dark" | "gold";

interface Module {
  num: string;
  titleEn: string;
  titleEs: string;
  subtitleEn: string;
  subtitleEs: string;
  variant: SpineVariant;
}

const modules: Module[] = [
  {
    num: "01",
    titleEn: "NEO Car",
    titleEs: "NEO Car",
    subtitleEn: "Neural Business Advisor",
    subtitleEs: "Asesor Neuronal Business",
    variant: "cream",
  },
  {
    num: "02",
    titleEn: "Where is my downpayment?",
    titleEs: "¿Dónde está mi downpayment?",
    subtitleEn: "Avoid dealer scams",
    subtitleEs: "Evita estafas en el dealer",
    variant: "dark",
  },
  {
    num: "03",
    titleEn: "Contexts & Strategies",
    titleEs: "Contextos y Estrategias",
    subtitleEn: "That you never knew",
    subtitleEs: "Que no conocías",
    variant: "cream",
  },
  {
    num: "04",
    titleEn: "Contract Analysis",
    titleEs: "Interpretación de Contrato",
    subtitleEn: "Reading & analyzing every clause",
    subtitleEs: "Lectura y análisis profundo",
    variant: "cream",
  },
  {
    num: "05",
    titleEn: "Here I am",
    titleEs: "Estoy, soy yo",
    subtitleEn: "My testimony, my truth, my transformation",
    subtitleEs: "Mi testimonio, mi verdad, mi transformación",
    variant: "dark",
  },
  {
    num: "06",
    titleEn: "Thank You",
    titleEs: "Gracias",
    subtitleEn: "To each one of you",
    subtitleEs: "A cada uno de ustedes",
    variant: "gold",
  },
  {
    num: "07",
    titleEn: "Letters at your door",
    titleEs: "Cartas en tu casa",
    subtitleEn: "Refinancing letters explained",
    subtitleEs: "Cartas para refinanciar",
    variant: "cream",
  },
  {
    num: "08",
    titleEn: "Pros & Cons",
    titleEs: "Pros & Contras",
    subtitleEn: "Toyota credit card",
    subtitleEs: "Credit card Toyota",
    variant: "cream",
  },
  {
    num: "09",
    titleEn: "Pre-Owned Cars",
    titleEs: "Auto Usados",
    subtitleEn: "Best buying strategy",
    subtitleEs: "Mejor estrategia de compra",
    variant: "cream",
  },
  {
    num: "10",
    titleEn: "Your contract on a USB",
    titleEs: "Tu contrato en un pendrive",
    subtitleEn: "Take it with you, every clause",
    subtitleEs: "Llévalo contigo, cada cláusula",
    variant: "cream",
  },
  {
    num: "11",
    titleEn: "SPOT",
    titleEs: "SPOT",
    subtitleEn: "What it is and how it works",
    subtitleEs: "En qué consiste y cómo",
    variant: "cream",
  },
  {
    num: "12",
    titleEn: "Bankruptcy?",
    titleEs: "¿Banca Rota?",
    subtitleEn: "Understand the risk before it's too late",
    subtitleEs: "Comprende el riesgo antes de que sea tarde",
    variant: "gold",
  },
];

function getSpineClasses(variant: SpineVariant): {
  bg: string;
  fg: string;
  accent: string;
  footer: string;
  border: string;
} {
  switch (variant) {
    case "dark":
      return {
        bg: "bg-[#0a0908]",
        fg: "text-ink",
        accent: "text-gold",
        footer: "text-ink/40",
        border: "border-ink/15",
      };
    case "gold":
      return {
        bg: "bg-gold",
        fg: "text-paper",
        accent: "text-paper",
        footer: "text-paper/60",
        border: "border-paper/20",
      };
    case "cream":
    default:
      return {
        bg: "bg-ink",
        fg: "text-paper",
        accent: "text-gold",
        footer: "text-paper/45",
        border: "border-paper/15",
      };
  }
}

export function Academy() {
  return (
    <section
      id="academy"
      className="relative overflow-hidden border-y border-rule bg-paper"
    >
      {/* HEADER */}
      <div className="px-6 py-24 text-center md:px-10 md:py-32">
        <FadeUp>
          <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
            — THE ACADEMY
          </div>
          <div className="mt-2 font-mono text-[10px] italic tracking-[0.3em] text-muted">
            La academia
          </div>
        </FadeUp>

        {/* Script handle */}
        <FadeUp delay={0.15} className="mt-10">
          <div
            className="text-gold"
            style={{
              fontFamily: "'Brush Script MT', 'Apple Chancery', cursive",
              fontStyle: "italic",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.01em",
            }}
          >
            @byjonathanlopez
          </div>
        </FadeUp>

        {/* Monumental ACADEMY title */}
        <h2 className="display mt-8 text-[22vw] leading-[0.85] tracking-tightest md:text-[14vw]">
          <SplitText mode="char" variant="mask" duration={1.2} stagger={0.04}>
            ACADEMY
          </SplitText>
        </h2>

        {/* Integrity System line — hairline borders left & right */}
        <FadeUp delay={0.4} className="mt-6">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <div className="h-px w-12 bg-gold md:w-24" />
            <span className="font-mono text-[12px] font-bold tracking-[0.4em] text-gold md:text-[14px]">
              INTEGRITY&nbsp;SYSTEM
            </span>
            <div className="h-px w-12 bg-gold md:w-24" />
          </div>
        </FadeUp>

        {/* Pitch */}
        <div className="mx-auto mt-12 max-w-2xl">
          <FadeUp delay={0.55}>
            <p className="display text-[5vw] leading-[1.1] text-ink md:text-[2vw]">
              Negotiate and build like a professional.
            </p>
            <p className="mt-2 text-[3vw] italic leading-[1.2] text-muted md:text-[1.3vw]">
              Negocia y emprende como un profesional.
            </p>
          </FadeUp>
          <FadeUp delay={0.7} className="mt-8">
            <div className="font-mono text-[10px] tracking-[0.4em] text-gold md:text-[11px]">
              CAR BUSINESS &nbsp;·&nbsp; BUSINESS TRAINING
            </div>
            <div className="mt-1 font-mono text-[9px] italic tracking-[0.4em] text-muted">
              Online
            </div>
          </FadeUp>
        </div>
      </div>

      {/* BOOK SPINES — 12 modules */}
      <div className="px-4 pb-24 md:px-8 md:pb-32">
        <div className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6 xl:grid-cols-12">
          {modules.map((m, i) => {
            const s = getSpineClasses(m.variant);
            return (
              <FadeUp key={m.num} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className={`group relative flex aspect-[1/3] flex-col items-stretch overflow-hidden border ${s.bg} ${s.border} cursor-default`}
                >
                  {/* Top: module number */}
                  <div className="flex items-start justify-between p-3 md:p-4">
                    <span
                      className={`font-mono text-[9px] tracking-[0.3em] ${s.accent} md:text-[10px]`}
                    >
                      {m.num}
                    </span>
                    {/* Tiny decorative crown for the gold/dark headline spines */}
                    {(m.variant === "gold" || m.variant === "dark") && (
                      <span className={`text-[10px] ${s.accent}`}>♔</span>
                    )}
                  </div>

                  {/* Middle: vertical title */}
                  <div className="flex flex-1 items-center justify-center px-2">
                    <div
                      className="flex flex-col items-center gap-2"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      <div
                        className={`display text-center text-[14px] leading-[1.05] tracking-tight ${s.fg} md:text-[15px] lg:text-[14px] xl:text-[13px]`}
                      >
                        {m.titleEn}
                      </div>
                      <div
                        className={`text-center text-[9px] italic leading-[1.1] tracking-tight ${s.fg} opacity-60 md:text-[10px] lg:text-[9px]`}
                      >
                        {m.titleEs}
                      </div>
                    </div>
                  </div>

                  {/* Bottom: author tag */}
                  <div className="border-t border-current/10 p-3 text-center md:p-4">
                    <div
                      className={`font-mono text-[7px] tracking-[0.3em] ${s.fg} md:text-[8px]`}
                    >
                      JONATHAN LÓPEZ
                    </div>
                    <div
                      className={`mt-0.5 font-mono text-[6px] tracking-[0.3em] ${s.footer} md:text-[7px]`}
                    >
                      INTEGRITY SYSTEM
                    </div>
                  </div>

                  {/* Hover line — gold sweeps in from bottom */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
                  />
                </motion.div>

                {/* Subtitle hint under each spine */}
                <div className="mt-3 hidden text-center md:block">
                  <div className="text-[10px] font-bold leading-tight tracking-tight text-ink md:text-[11px]">
                    {m.subtitleEn}
                  </div>
                  <div className="mt-0.5 text-[9px] italic leading-tight tracking-tight text-muted md:text-[10px]">
                    {m.subtitleEs}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* CTA */}
        <FadeUp delay={0.4} className="mt-16 text-center md:mt-20">
          <motion.a
            href="/coming-soon"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group inline-flex flex-col items-center gap-1 bg-gold px-10 py-5 text-paper transition-colors duration-300 hover:bg-goldBright"
          >
            <span className="font-mono text-[11px] tracking-[0.3em]">
              JOIN THE ACADEMY →
            </span>
            <span className="font-mono text-[9px] italic tracking-[0.3em] opacity-75">
              Únete a la academia
            </span>
          </motion.a>
          <FadeUp delay={0.6} className="mt-8">
            <p className="mx-auto max-w-md text-[12px] leading-[1.5] tracking-tight text-muted md:text-[13px]">
              12 modules · One integrity system · Built from the buyer&apos;s side.
            </p>
            <p className="mt-1 text-[10px] italic leading-[1.5] tracking-tight text-muted/70 md:text-[11px]">
              12 módulos · Un sistema de integridad · Construido del lado del comprador.
            </p>
          </FadeUp>
        </FadeUp>
      </div>
    </section>
  );
}
