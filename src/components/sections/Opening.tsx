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
        backgroundImage: "url(/frames/frame-001.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <FrameSequence
        total={121}
        pathPrefix="/frames/frame-"
        ext="jpg"
        scrollLength={4}
        bgClassName="bg-[#0a0908]"
      >
        {(p) => (
          <>
            {/* Progress hairline — top, gold-tinted */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-px bg-white/10">
              <div
                className="h-full bg-[#C9A84C]"
                style={{ width: `${p * 100}%` }}
              />
            </div>

            {/* Top-left model label */}
            <div className="pointer-events-none absolute left-6 top-24 z-20 font-mono text-[10px] tracking-[0.3em] text-white/80 md:left-10 md:top-28">
              <Scrambler text="JL · ESTRATEGIA AUTOMOTRIZ · 2026" />
            </div>

            {/* Top-right live frame counter */}
            <div className="pointer-events-none absolute right-6 top-24 z-20 font-mono text-[10px] tracking-[0.3em] text-white/80 md:right-10 md:top-28">
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
                — HAZ SCROLL PARA EXPLORAR
              </div>
              <p className="mt-3 text-[14px] leading-[1.35] tracking-tight">
                Cada auto tiene mil piezas. Yo conozco cada una — y conozco el
                precio justo que vale.
              </p>
            </motion.div>

            {/* Mid-scroll labels — disassembly stages, Spanish */}
            <Stage active={p >= 0.05 && p < 0.25} label="01 · ANATOMÍA EXPUESTA" />
            <Stage active={p >= 0.25 && p < 0.5} label="02 · CABINA REVELADA" />
            <Stage active={p >= 0.5 && p < 0.75} label="03 · CHASIS DESCUBIERTO" />
            <Stage active={p >= 0.75 && p < 0.92} label="04 · MOTOR AL DESCUBIERTO" />

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
              <h1 className="display display-tight mt-3 text-[14vw] leading-[0.88] text-white md:text-[10vw]">
                {p >= 0.9 && (
                  <>
                    <span className="block">
                      <SplitText
                        mode="word"
                        variant="mask"
                        duration={1.0}
                        stagger={0.04}
                      >
                        Yo no vendo autos.
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
                        Los compro por ti.
                      </SplitText>
                    </span>
                  </>
                )}
              </h1>
            </motion.div>

            {/* Bottom-right continue cue */}
            <motion.div
              initial={false}
              animate={{ opacity: p >= 0.95 ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute bottom-6 right-6 z-20 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-white/70 md:bottom-10 md:right-10"
            >
              <span>CONTINÚA</span>
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

function Stage({ active, label }: { active: boolean; label: string }) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: active ? 1 : 0,
        y: active ? 0 : 12,
        filter: active ? "blur(0px)" : "blur(6px)",
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute bottom-10 left-6 z-20 font-mono text-[10px] tracking-[0.3em] text-[#C9A84C] md:bottom-14 md:left-10"
    >
      {label}
    </motion.div>
  );
}
