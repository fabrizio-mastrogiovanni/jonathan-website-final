"use client";

import { SplitText } from "@/components/SplitText";
import { motion } from "framer-motion";

interface BilingualHeadingProps {
  en: string;
  es: string;
  /** Tailwind class for the English (primary) line — e.g. "display text-[8vw] leading-[0.88]" */
  enClassName?: string;
  /** Tailwind class for the Spanish (subtitle) line — defaults to small muted italic */
  esClassName?: string;
  /** Color override for the English line. Optional. */
  enColor?: string;
  /** Animation variant for the SplitText reveal */
  variant?: "mask" | "blur" | "rise" | "skew";
  /** Animation timings */
  duration?: number;
  stagger?: number;
  delay?: number;
  /** Word or char mode */
  mode?: "word" | "char";
}

/**
 * Headline with English (primary) and Spanish (smaller subtitle) — both animate together.
 * The Spanish line starts ~0.3s after the English so they feel synchronized but layered.
 */
export function BilingualHeading({
  en,
  es,
  enClassName = "",
  esClassName = "mt-3 text-[3vw] italic text-muted leading-[1.1] md:text-[1.3vw]",
  enColor,
  variant = "mask",
  duration = 1.0,
  stagger = 0.05,
  delay = 0,
  mode = "word",
}: BilingualHeadingProps) {
  return (
    <span className="block">
      <span className={`block ${enClassName}`} style={enColor ? { color: enColor } : undefined}>
        <SplitText
          mode={mode}
          variant={variant}
          duration={duration}
          stagger={stagger}
          delay={delay}
        >
          {en}
        </SplitText>
      </span>
      <motion.span
        className={`block ${esClassName}`}
        initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
          delay: delay + 0.35,
        }}
      >
        {es}
      </motion.span>
    </span>
  );
}

interface BilingualCopyProps {
  en: string;
  es: string;
  className?: string;
  esClassName?: string;
  delay?: number;
}

/**
 * Body text with English paragraph and Spanish subtitle paragraph beneath.
 */
export function BilingualCopy({
  en,
  es,
  className = "text-[15px] leading-[1.55] tracking-tight",
  esClassName = "mt-3 text-[12px] italic leading-[1.55] tracking-tight text-muted",
  delay = 0,
}: BilingualCopyProps) {
  return (
    <div>
      <motion.p
        className={className}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {en}
      </motion.p>
      <motion.p
        className={esClassName}
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: delay + 0.25,
        }}
      >
        {es}
      </motion.p>
    </div>
  );
}

interface BilingualLabelProps {
  en: string;
  es: string;
  className?: string;
}

/**
 * Inline bilingual label — used for short labels like buttons, eyebrows, etc.
 * Renders as: EN / ES on the same line, or stacked if vertical.
 */
export function BilingualLabel({
  en,
  es,
  className = "",
}: BilingualLabelProps) {
  return (
    <span className={className}>
      <span>{en}</span>
      <span className="ml-2 text-muted opacity-60">/ {es}</span>
    </span>
  );
}
