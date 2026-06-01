"use client";

import { Marquee } from "@/components/Marquee";
import { FadeUp } from "@/components/FadeUp";
import { credentials } from "@/components/CredentialIcons";

export function Credentials() {
  return (
    <section
      id="credenciales"
      className="relative border-y border-rule bg-paper"
    >
      {/* Eyebrow header */}
      <div className="px-6 py-14 md:px-10 md:py-16">
        <FadeUp>
          <div className="text-center font-mono text-[10px] tracking-[0.3em] text-gold">
            — INTERNATIONALLY RECOGNIZED
          </div>
          <div className="mt-2 text-center font-mono text-[10px] italic tracking-[0.3em] text-muted">
            Reconocido internacionalmente
          </div>
        </FadeUp>
      </div>

      {/* Logo grid */}
      <div className="grid grid-cols-2 gap-px border-y border-rule bg-rule md:grid-cols-3 lg:grid-cols-6">
        {credentials.map((c, i) => (
          <FadeUp
            key={c.en}
            delay={i * 0.06}
            className="group relative flex flex-col items-center justify-center gap-4 bg-paper px-4 py-10 transition-colors duration-500 hover:bg-mist md:px-6 md:py-14"
          >
            <c.Icon className="h-12 w-12 text-ink transition-colors duration-300 group-hover:text-gold md:h-14 md:w-14" />
            <div className="text-center">
              <div className="text-[10px] font-bold tracking-tight text-ink md:text-[11px]">
                {c.en}
              </div>
              <div className="mt-1 font-mono text-[9px] italic tracking-tight text-muted">
                {c.es}
              </div>
              <div className="mt-2 font-mono text-[9px] tracking-[0.3em] text-gold/70">
                {c.context}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Marquee underneath */}
      <Marquee
        items={credentials.map((c) => c.en.toUpperCase())}
        speed={40}
        className="border-b border-rule py-6"
        itemClassName="font-bold text-ink"
      />
    </section>
  );
}
