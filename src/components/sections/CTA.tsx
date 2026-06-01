"use client";

import { SplitText } from "@/components/SplitText";
import { Marquee } from "@/components/Marquee";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/FadeUp";

export function CTA() {
  return (
    <section id="cta" className="relative bg-paper">
      <div className="border-y border-rule py-6">
        <Marquee
          items={[
            "BOOK TODAY",
            "LIMITED SPOTS",
            "BUYER-SIDE ONLY",
            "MIAMI · FLORIDA",
          ]}
          speed={45}
          reverse
          itemClassName="font-bold"
        />
      </div>

      <div className="px-6 py-32 md:px-10 md:py-48">
        <div className="text-center">
          <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
            — START TODAY
          </div>
          <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
            Comienza hoy
          </div>
          <h2 className="display mt-8 text-[12vw] leading-[0.88] md:text-[7vw]">
            <SplitText mode="word" variant="mask" duration={1.0} stagger={0.05}>
              Your next chapter
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
                begins here.
              </SplitText>
            </span>
          </h2>
          <FadeUp delay={0.7} className="mt-5">
            <p className="text-[3vw] italic leading-[1.1] text-muted md:text-[1.5vw]">
              Tu próximo capítulo comienza aquí.
            </p>
          </FadeUp>
          <p className="mx-auto mt-10 max-w-xl text-[15px] leading-[1.55] tracking-tight text-ink md:text-[17px]">
            <SplitText mode="word" variant="rise" duration={0.8} stagger={0.04}>
              Join a select group of clients who experience automotive
              acquisition at its highest level.
            </SplitText>
          </p>
          <FadeUp delay={0.8} className="mt-3">
            <p className="mx-auto max-w-xl text-[12px] italic leading-[1.55] tracking-tight text-muted md:text-[13px]">
              Únete a un grupo selecto de clientes que experimentan la
              adquisición automotriz en su más alto nivel.
            </p>
          </FadeUp>
        </div>

        {/* Guarantees row */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-px border-y border-rule bg-rule md:grid-cols-3">
          <Guarantee
            value="48h"
            en="GUARANTEED RESPONSE"
            es="Respuesta garantizada"
          />
          <Guarantee
            value="1:1"
            en="PERSONAL ATTENTION"
            es="Atención personal"
          />
          <Guarantee
            value="100%"
            en="ON THE BUYER'S SIDE"
            es="Del lado del comprador"
          />
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <motion.a
            href="https://square.link/u/o2e9grla?src=sheet"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group inline-flex flex-col items-center gap-1 bg-gold px-10 py-5 text-paper transition-colors duration-300 hover:bg-goldBright"
          >
            <span className="font-mono text-[11px] tracking-[0.3em]">
              BOOK ADVISORY — $999.99
            </span>
            <span className="font-mono text-[9px] italic tracking-[0.3em] opacity-75">
              Reservar asesoría
            </span>
          </motion.a>
          <motion.a
            href="https://neo.jonathanlopez.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group inline-flex flex-col items-center gap-1 border border-ink/30 px-10 py-5 text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            <span className="font-mono text-[11px] tracking-[0.3em]">
              NEO ADVISOR — $99/YEAR
            </span>
            <span className="font-mono text-[9px] italic tracking-[0.3em] opacity-75">
              $99 por año
            </span>
          </motion.a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-1 font-mono text-[10px] tracking-[0.3em] text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#25D366]" />
            LIMITED SPOTS THIS MONTH
          </span>
          <span className="text-[9px] italic text-muted/70">
            Cupos limitados este mes
          </span>
        </div>
      </div>
    </section>
  );
}

function Guarantee({
  value,
  en,
  es,
}: {
  value: string;
  en: string;
  es: string;
}) {
  return (
    <div className="bg-paper p-8 text-center md:p-12">
      <div className="display text-[14vw] leading-none text-gold md:text-[5vw]">
        {value}
      </div>
      <div className="mt-4 font-mono text-[10px] tracking-[0.3em] text-muted">
        {en}
      </div>
      <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted/70">
        {es}
      </div>
    </div>
  );
}
