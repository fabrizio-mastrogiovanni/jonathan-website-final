"use client";

import { FrameSequence } from "@/components/FrameSequence";
import { SplitText } from "@/components/SplitText";
import { Scrambler } from "@/components/Scrambler";
import { motion } from "framer-motion";

/**
 * Opening section — Cadillac Escalade V exploded view.
 * Hard-coded dark overlays (not the swapped tokens) because the frames are
 * already a dark image and need light text/HUD elements on top.
 */
export function Opening() {
  return (
    <section
      id="top"
      className="relative bg-[#0a0908]"
      style={{
        backgroundImage: "url(/frames/frame-001.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <FrameSequence
        total={121}
        pathPrefix="/frames/frame-"
        ext="webp"
        scrollLength={4}
        bgClassName="bg-[#0a0908]"
      >
        {(p) => (
          <>
            {/* Dark gradient veil — TOP — so the HUD text stays readable
                over bright frames (concrete bunker / golden hour highlights) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[40vh]"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 25%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)",
              }}
            />

            {/* Dark gradient veil — BOTTOM — for the headline + caption area */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[45vh]"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)",
              }}
            />

            {/* Progress hairline — top, gold-tinted */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-px bg-white/10">
              <div
                className="h-full bg-[#C9A84C]"
                style={{ width: `${p * 100}%` }}
              />
            </div>

            {/* Top-left model label — shorter on mobile to avoid overlap */}
            <div className="pointer-events-none absolute left-6 top-24 z-20 font-mono text-[9px] tracking-[0.3em] text-white md:left-10 md:top-28 md:text-[10px]">
              {/* Mobile: shorter label */}
              <span className="md:hidden">
                <Scrambler text="JL · STRATEGY · 2026" />
              </span>
              {/* Desktop: full label */}
              <span className="hidden md:inline">
                <Scrambler text="JL · AUTOMOTIVE STRATEGY · 2026" />
              </span>
              <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-white/65">
                Estrategia automotriz
              </div>
            </div>

            {/* Top-right live frame counter — hidden on mobile to prevent overlap */}
            <div className="pointer-events-none absolute right-6 top-24 z-20 hidden font-mono text-[10px] tracking-[0.3em] text-white sm:block md:right-10 md:top-28">
              FRAME {String(Math.round(p * 120) + 1).padStart(3, "0")} / 121
            </div>

            {/* Bottom-left intro tag — only at the very start */}
            <motion.div
              initial={false}
              animate={{ opacity: p < 0.05 ? 1 : 0, y: p < 0.05 ? 0 : 10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute bottom-10 left-6 z-20 max-w-sm text-white/90 md:bottom-14 md:left-10"
            >
              <div className="font-mono text-[10px] tracking-[0.3em] text-[#C9A84C]">
                — SCROLL TO EXPLORE
              </div>
              <div className="mt-0.5 font-mono text-[9px] italic tracking-[0.3em] text-white/45">
                Haz scroll para explorar
              </div>
              <p className="mt-4 text-[14px] leading-[1.35] tracking-tight">
                Every car has a thousand parts. I know each one — and I know
                the fair price it&apos;s worth.
              </p>
              <p className="mt-2 text-[11px] italic leading-[1.4] tracking-tight text-white/55">
                Cada auto tiene mil piezas. Yo conozco cada una — y conozco el
                precio justo que vale.
              </p>
            </motion.div>

            {/* Mid-scroll labels — disassembly stages, bilingual */}
            <Stage
              active={p >= 0.05 && p < 0.25}
              en="01 · ANATOMY EXPOSED"
              es="Anatomía expuesta"
            />
            <Stage
              active={p >= 0.25 && p < 0.5}
              en="02 · CABIN REVEALED"
              es="Cabina revelada"
            />
            <Stage
              active={p >= 0.5 && p < 0.75}
              en="03 · CHASSIS UNCOVERED"
              es="Chasis descubierto"
            />
            <Stage
              active={p >= 0.75 && p < 0.92}
              en="04 · POWERTRAIN OUT"
              es="Motor al descubierto"
            />

            {/* Final reveal: monumental title */}
            <motion.div
              initial={false}
              animate={{
                opacity: p >= 0.88 ? 1 : 0,
                y: p >= 0.88 ? 0 : 30,
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-6 pb-16 md:px-10 md:pb-24"
            >
              <div className="font-mono text-[10px] tracking-[0.3em] text-[#C9A84C]">
                {p >= 0.9 && (
                  <SplitText mode="char" stagger={0.018} duration={0.6}>
                    05 · JONATHAN LÓPEZ · MIAMI
                  </SplitText>
                )}
              </div>
              <h1 className="display display-tight mt-3 text-[12vw] leading-[0.88] text-white md:text-[9vw]">
                {p >= 0.9 && (
                  <>
                    <span className="block">
                      <SplitText
                        mode="word"
                        variant="mask"
                        duration={1.0}
                        stagger={0.04}
                      >
                        I don&apos;t sell cars.
                      </SplitText>
                    </span>
                    <span className="block text-[#C9A84C]">
                      <SplitText
                        mode="word"
                        variant="mask"
                        duration={1.0}
                        stagger={0.04}
                        delay={0.35}
                      >
                        I buy them for you.
                      </SplitText>
                    </span>
                  </>
                )}
              </h1>
              {p >= 0.95 && (
                <motion.div
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="mt-4 text-[2.5vw] italic leading-[1.1] text-white/55 md:text-[1.5vw]"
                >
                  Yo no vendo autos. Los compro por ti.
                </motion.div>
              )}
            </motion.div>

            {/* Bottom-right continue cue */}
            <motion.div
              initial={false}
              animate={{ opacity: p >= 0.95 ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute bottom-6 right-6 z-20 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-white/70 md:bottom-10 md:right-10"
            >
              <span>CONTINUE / CONTINÚA</span>
              <motion.span
                aria-hidden
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ↓
              </motion.span>
            </motion.div>
          </>
        )}
      </FrameSequence>
    </section>
  );
}

function Stage({
  active,
  en,
  es,
}: {
  active: boolean;
  en: string;
  es: string;
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: active ? 1 : 0,
        y: active ? 0 : 12,
        filter: active ? "blur(0px)" : "blur(6px)",
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute bottom-10 left-6 z-20 md:bottom-14 md:left-10"
    >
      <div className="font-mono text-[10px] tracking-[0.3em] text-[#C9A84C]">
        {en}
      </div>
      <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-white/50">
        {es}
      </div>
    </motion.div>
  );
}
