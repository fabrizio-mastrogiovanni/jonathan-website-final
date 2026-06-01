"use client";

import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";
import { motion } from "framer-motion";
import Link from "next/link";

export function Merchandise() {
  return (
    <section id="merchandise" className="relative bg-paper">
      <div className="border-y border-rule px-6 py-32 md:px-10 md:py-40">
        <div className="grid grid-cols-12 gap-6">
          {/* Eyebrow */}
          <div className="col-span-12 md:col-span-4">
            <FadeUp>
              <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                — MERCHANDISE
              </div>
              <div className="mt-1 font-mono text-[10px] italic tracking-[0.3em] text-muted">
                Merchandise
              </div>
            </FadeUp>
          </div>

          {/* Title */}
          <div className="col-span-12 md:col-span-8">
            <h2 className="display text-[12vw] leading-[0.9] md:text-[6.5vw]">
              <SplitText
                mode="word"
                variant="mask"
                duration={1.0}
                stagger={0.05}
              >
                Wear the brand.
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
                  Carry the philosophy.
                </SplitText>
              </span>
            </h2>
            <FadeUp delay={0.7} className="mt-5">
              <p className="text-[3vw] italic leading-[1.2] tracking-normal text-muted md:text-[1.4vw]">
                Lleva la marca. Lleva la filosofía.
              </p>
            </FadeUp>

            <FadeUp delay={0.9} className="mt-10 max-w-2xl">
              <p className="text-[15px] leading-[1.55] tracking-tight text-ink md:text-[16px]">
                Limited-edition apparel and gear designed for those who
                negotiate on their own terms. Coming soon.
              </p>
              <p className="mt-3 text-[12px] italic leading-[1.55] tracking-tight text-muted md:text-[13px]">
                Ropa y accesorios de edición limitada, diseñados para quienes
                negocian en sus propios términos. Próximamente.
              </p>
            </FadeUp>

            <FadeUp delay={1.1} className="mt-10">
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href="/merchandise"
                  className="group inline-flex flex-col items-start gap-1 border border-ink/30 px-8 py-5 text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <span className="font-mono text-[11px] tracking-[0.3em]">
                    NOTIFY ME →
                  </span>
                  <span className="font-mono text-[9px] italic tracking-[0.3em] opacity-70">
                    Notifícame
                  </span>
                </Link>
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
