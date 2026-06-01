"use client";

import { Marquee } from "@/components/Marquee";
import { FadeUp } from "@/components/FadeUp";

const credentials = [
  "MESA DE LÍDERES",
  "UNIVISIÓN NEWS CAFÉ",
  "TELEMUNDO · LA MESA CALIENTE",
  "RÉCORD GUINNESS · ZENNIT SUMMIT 2026",
  "RECONOCIDO POR LA ALCALDÍA DEL DORAL",
  "DOCUMENTAL NOMINABLE",
];

export function Credentials() {
  return (
    <section
      id="credenciales"
      className="relative border-y border-rule bg-paper"
    >
      <div className="px-6 py-10 md:px-10">
        <FadeUp>
          <div className="text-center font-mono text-[10px] tracking-[0.3em] text-gold">
            — RECONOCIDO INTERNACIONALMENTE
          </div>
        </FadeUp>
      </div>

      <Marquee
        items={credentials}
        speed={40}
        className="border-y border-rule py-8"
        itemClassName="font-bold text-ink"
      />
    </section>
  );
}
