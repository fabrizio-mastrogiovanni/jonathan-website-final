"use client";

import { Marquee } from "@/components/Marquee";
import { FadeUp } from "@/components/FadeUp";

interface Credential {
  logo: string;
  en: string;
  es: string;
  context: string;
}

const credentials: Credential[] = [
  {
    logo: "/logos/telemundo.png",
    en: "Telemundo · La Mesa Caliente",
    es: "Telemundo · La Mesa Caliente",
    context: "FEATURED GUEST",
  },
  {
    logo: "/logos/doral.png",
    en: "Recognized by the City of Doral",
    es: "Reconocido por la Alcaldía del Doral",
    context: "CIVIC RECOGNITION",
  },
  {
    logo: "/logos/guinness.png",
    en: "Guinness World Record · Zennit Summit 2026",
    es: "Récord Guinness · Zennit Summit 2026",
    context: "RECORD HOLDER",
  },
  {
    logo: "/logos/harvard.png",
    en: "Harvard Business School",
    es: "Harvard Business School",
    context: "EXECUTIVE PROGRAM",
  },
  {
    logo: "/logos/emmy.png",
    en: "Emmy Award · Featured Subject",
    es: "Premio Emmy · Sujeto destacado",
    context: "MEDIA APPEARANCE",
  },
];

const marqueeItems = [
  "TELEMUNDO",
  "GUINNESS WORLD RECORDS",
  "CITY OF DORAL",
  "HARVARD BUSINESS SCHOOL",
  "EMMY AWARDS",
  "UNIVISION NEWS CAFÉ",
  "MESA DE LÍDERES",
  "DOCUMENTARY NOMINEE",
];

export function Credentials() {
  return (
    <section
      id="credenciales"
      className="relative border-y border-rule bg-paper"
    >
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

      {/* Logo grid — real brand logos */}
      <div className="grid grid-cols-2 gap-px border-y border-rule bg-rule md:grid-cols-3 lg:grid-cols-5">
        {credentials.map((c, i) => (
          <FadeUp
            key={c.en}
            delay={i * 0.08}
            className="group relative flex flex-col items-center justify-center gap-5 bg-paper px-4 py-12 transition-colors duration-500 hover:bg-mist md:px-6 md:py-16"
          >
            {/* Logo plate */}
            <div className="flex h-20 w-full items-center justify-center md:h-24">
              <img
                src={c.logo}
                alt={c.en}
                className="max-h-full max-w-[80%] object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  filter:
                    "brightness(1.05) contrast(1.05)",
                }}
              />
            </div>
            <div className="text-center">
              <div className="text-[10px] font-bold leading-tight tracking-tight text-ink md:text-[11px]">
                {c.en}
              </div>
              <div className="mt-1 font-mono text-[9px] italic leading-tight tracking-tight text-muted">
                {c.es}
              </div>
              <div className="mt-2 font-mono text-[8px] tracking-[0.3em] text-gold/80">
                {c.context}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Marquee underneath */}
      <Marquee
        items={marqueeItems}
        speed={40}
        className="border-b border-rule py-6"
        itemClassName="font-bold text-ink"
      />
    </section>
  );
}
