"use client";

import { motion } from "framer-motion";
import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";
import Link from "next/link";

export default function MerchandiseComingSoonPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-paper text-ink">
      {/* Top nav — minimal */}
      <header className="flex items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-ink transition-opacity hover:opacity-60"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
          JONATHAN LÓPEZ
        </Link>
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[0.3em] text-ink transition-opacity hover:opacity-60"
        >
          ← BACK / VOLVER
        </Link>
      </header>

      {/* Hero */}
      <div className="flex flex-1 items-center justify-center px-6 py-20 md:px-10">
        <div className="w-full max-w-5xl text-center">
          {/* Eyebrow */}
          <FadeUp>
            <div className="font-mono text-[11px] tracking-[0.3em] text-gold">
              — JL · MERCHANDISE
            </div>
            <div className="mt-2 font-mono text-[10px] italic tracking-[0.3em] text-muted">
              Mercancía oficial · JL
            </div>
          </FadeUp>

          {/* Pulsing dot */}
          <motion.div
            className="mx-auto mt-14 h-3 w-3 rounded-full bg-gold"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Headline */}
          <h1 className="display mt-14 text-[18vw] leading-[0.88] md:text-[10vw]">
            <span className="block">
              <SplitText
                mode="word"
                variant="mask"
                duration={1.2}
                stagger={0.07}
              >
                Coming
              </SplitText>
            </span>
            <span className="block text-gold">
              <SplitText
                mode="word"
                variant="mask"
                duration={1.2}
                stagger={0.07}
                delay={0.3}
              >
                soon.
              </SplitText>
            </span>
          </h1>
          <FadeUp delay={0.8} className="mt-6">
            <div className="text-[4vw] italic leading-[1.1] text-muted md:text-[2vw]">
              Próximamente.
            </div>
          </FadeUp>

          {/* Description */}
          <div className="mx-auto mt-16 max-w-xl">
            <FadeUp delay={1.0}>
              <p className="text-[16px] leading-[1.55] tracking-tight text-ink md:text-[18px]">
                Limited-edition apparel and accessories — designed for those
                who negotiate on their own terms. The drop is being prepared.
              </p>
              <p className="mt-4 text-[13px] italic leading-[1.55] tracking-tight text-muted md:text-[14px]">
                Ropa y accesorios de edición limitada — diseñados para quienes
                negocian en sus propios términos. El drop se está preparando.
              </p>
            </FadeUp>
          </div>

          {/* Loading bar animation */}
          <FadeUp delay={1.3} className="mx-auto mt-16 max-w-md">
            <div className="font-mono text-[10px] tracking-[0.3em] text-muted">
              FIRST DROP · 2026
            </div>
            <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted/70">
              Primer drop · 2026
            </div>
            <div className="relative mt-5 h-px w-full overflow-hidden bg-rule">
              <motion.div
                className="absolute left-0 top-0 h-full w-1/3 bg-gold"
                animate={{
                  x: ["-100%", "300%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </FadeUp>

          {/* CTA back to main */}
          <FadeUp delay={1.6} className="mt-16">
            <Link
              href="/"
              className="group inline-flex flex-col items-center gap-1 border border-ink/30 px-10 py-5 text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <span className="font-mono text-[11px] tracking-[0.3em]">
                EXPLORE THE SITE →
              </span>
              <span className="font-mono text-[9px] italic tracking-[0.3em] opacity-70">
                Explora el sitio
              </span>
            </Link>
          </FadeUp>

          {/* Notify row */}
          <FadeUp delay={1.9} className="mt-14">
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted">
              FOLLOW FOR UPDATES
            </p>
            <p className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted/70">
              Sigue para actualizaciones
            </p>
            <div className="mt-4 flex items-center justify-center gap-6 font-mono text-[10px] tracking-[0.3em]">
              <a
                href="https://wa.me/13053551234"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink transition-colors hover:text-gold"
              >
                WHATSAPP →
              </a>
              <a
                href="https://www.instagram.com/byjonathanlopez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink transition-colors hover:text-gold"
              >
                INSTAGRAM →
              </a>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Subtle bottom hairline */}
      <div className="border-t border-rule px-6 py-6 text-center font-mono text-[10px] tracking-[0.3em] text-muted md:px-10">
        <span>© 2026 — JONATHAN LÓPEZ · MERCHANDISE</span>
      </div>
    </main>
  );
}
