"use client";

import { Marquee } from "@/components/Marquee";
import { FadeUp } from "@/components/FadeUp";

interface Credential {
  // Either an image path OR an inline render function
  logo?: string;
  CustomLogo?: () => JSX.Element;
  en: string;
  es: string;
  context: string;
  href?: string;
  /** Optional col-span overrides for layout */
  spanClass?: string;
}

/** Forbes México — red background with white serif "Forbes" + small "MÉXICO" tag */
function ForbesMexicoLogo() {
  return (
    <svg
      viewBox="0 0 200 100"
      className="h-full w-auto max-h-20 md:max-h-24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Forbes México"
    >
      <rect width="200" height="100" fill="#A30000" rx="2" />
      <text
        x="100"
        y="68"
        textAnchor="middle"
        fill="white"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        fontWeight="900"
        fontSize="48"
      >
        Forbes
      </text>
      <text
        x="184"
        y="28"
        textAnchor="end"
        fill="white"
        fontFamily="Arial, sans-serif"
        fontSize="11"
        letterSpacing="2"
      >
        MÉXICO
      </text>
    </svg>
  );
}

/** Univision — stylized italic wordmark */
function UnivisionLogo() {
  return (
    <svg
      viewBox="0 0 200 70"
      className="h-full w-auto max-h-14 md:max-h-16"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Univision"
    >
      <text
        x="100"
        y="48"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontStyle="italic"
        fontWeight="900"
        fontSize="40"
        letterSpacing="-2"
      >
        univision
      </text>
    </svg>
  );
}

const credentials: Credential[] = [
  {
    logo: "/logos/telemundo.png",
    en: "Telemundo · La Mesa Caliente",
    es: "Telemundo · La Mesa Caliente",
    context: "FEATURED GUEST",
    href: "https://www.instagram.com/reel/DOgHP8ljb4G/?igsh=OW11ZmRydmI5NnBt",
  },
  {
    CustomLogo: UnivisionLogo,
    en: "Univision · Featured Interview",
    es: "Univisión · Entrevista destacada",
    context: "TV APPEARANCE",
    href: "https://www.instagram.com/reel/DXPOo39Eqeu/?igsh=MWt5MXVrcTd4NzhnMw==",
  },
  {
    logo: "/logos/guinness.png",
    en: "Guinness World Record · Zennit Summit 2026",
    es: "Récord Guinness · Zennit Summit 2026",
    context: "RECORD HOLDER",
    href: "https://www.instagram.com/p/DXvCkOAiVBv/?img_index=2&igsh=ejdtZTZjdDNodWI1",
  },
  {
    logo: "/logos/doral.png",
    en: "Recognized by the City of Doral",
    es: "Reconocido por la Alcaldía del Doral",
    context: "CIVIC RECOGNITION",
  },
  {
    logo: "/logos/harvard.png",
    en: "Harvard Business School",
    es: "Harvard Business School",
    context: "EXECUTIVE PROGRAM",
  },
  {
    logo: "/logos/emmy.png",
    en: "EMMY Social Documentary submitted • Suncoast chapter",
    es: "Documental social sometido al Emmy capítulo suncoast",
    context: "MEDIA APPEARANCE",
    href: "https://www.instagram.com/reel/DYJKqf5sU7J/?igsh=ZHNxanEwcGg4eTFr",
  },
  {
    CustomLogo: ForbesMexicoLogo,
    en: "Forbes México · Featured Article",
    es: "Forbes México · Artículo destacado",
    context: "PRESS FEATURE",
    href: "https://forbes.com.mx/patrocinado-claves-de-jonathan-lopez-para-que-las-pymes-crezcan-sin-grandes-inversiones/",
    // Wide on mobile + md so the 7-item grid stays clean on every breakpoint
    spanClass: "col-span-2 md:col-span-3 lg:col-span-1",
  },
];

const marqueeItems = [
  "TELEMUNDO",
  "UNIVISION",
  "FORBES MÉXICO",
  "GUINNESS WORLD RECORDS",
  "CITY OF DORAL",
  "HARVARD BUSINESS SCHOOL",
  "EMMY AWARDS",
  "MESA DE LÍDERES",
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

      {/* Logo grid — 7 items, clean on every breakpoint via col-span trick on last item */}
      <div className="grid grid-cols-2 gap-px border-y border-rule bg-rule md:grid-cols-3 lg:grid-cols-7">
        {credentials.map((c, i) => {
          const inner = (
            <>
              <div className="flex h-20 w-full items-center justify-center md:h-24">
                {c.CustomLogo ? (
                  <c.CustomLogo />
                ) : (
                  <img
                    src={c.logo}
                    alt={c.en}
                    className="max-h-full max-w-[80%] object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ filter: "brightness(1.05) contrast(1.05)" }}
                  />
                )}
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
            </>
          );

          const sharedClassName =
            "group relative flex h-full flex-col items-center justify-center gap-5 bg-paper px-4 py-12 transition-colors duration-500 hover:bg-mist md:px-6 md:py-14";

          return (
            <FadeUp key={c.en} delay={i * 0.06} className={c.spanClass ?? ""}>
              {c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sharedClassName + " hover:text-gold"}
                >
                  {inner}
                </a>
              ) : (
                <div className={sharedClassName}>{inner}</div>
              )}
            </FadeUp>
          );
        })}
      </div>

      <Marquee
        items={marqueeItems}
        speed={40}
        className="border-b border-rule py-6"
        itemClassName="font-bold text-ink"
      />
    </section>
  );
}
