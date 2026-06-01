"use client";

import { FadeUp } from "@/components/FadeUp";
import { SplitText } from "@/components/SplitText";

interface Participation {
  numEn: string;
  numEs: string;
  titleEn: string;
  titleEs: string;
  contextEn?: string;
  contextEs?: string;
}

const participations: Participation[] = [
  {
    numEn: "01",
    numEs: "01",
    titleEn: "World Leaders Congress",
    titleEs: "Congreso Mundial de Líderes",
    contextEn: "Held at Harvard University",
    contextEs: "Realizado en la Universidad de Harvard",
  },
  {
    numEn: "02",
    numEs: "02",
    titleEn: "Univision & Telemundo Interviews",
    titleEs: "Entrevistas en Univisión y Telemundo",
    contextEn:
      "Multiple appearances earned by industry authority and proven results",
    contextEs:
      "Múltiples apariciones, fruto de autoridad labrada y resultados conseguidos",
  },
  {
    numEn: "03",
    numEs: "03",
    titleEn: "Latino Conference · Wall Street",
    titleEs: "Conferencia Latino · Wall Street",
    contextEn:
      "Personal Finance & Strategy — Seminole Hard Rock, Miami, Florida",
    contextEs:
      "Finanzas Personales y Estrategias — Seminole Hard Rock, Miami, Florida",
  },
  {
    numEn: "04",
    numEs: "04",
    titleEn: "Public Recognition · City of Doral",
    titleEs: "Reconocimiento público de la ciudad de Doral",
    contextEn: "Civic recognition by the City of Doral",
    contextEs: "Reconocimiento cívico otorgado por la Alcaldía del Doral",
  },
  {
    numEn: "05",
    numEs: "05",
    titleEn: "Expology Recognition · Doral",
    titleEs: "Reconocimiento de Expology · Doral",
    contextEn: "Recognized at the Expology event in the City of Doral",
    contextEs: "Reconocido en el evento Expology en la ciudad de Doral",
  },
  {
    numEn: "06",
    numEs: "06",
    titleEn: "Executive Producer & Director",
    titleEs: "Productor Ejecutivo y Director",
    contextEn: '"The Truth Behind Auto Financing" — Documentary',
    contextEs: '"La Verdad Detrás del Financiamiento de Auto" — Documental',
  },
  {
    numEn: "07",
    numEs: "07",
    titleEn: "Emmy Nominee · Suncoast Chapter",
    titleEs: "Nominado al Emmy · Capítulo Suncoast",
    contextEn:
      "Documentary currently nominated for the Suncoast Regional Emmy Awards",
    contextEs:
      "Documental actualmente postulado a los Premios Emmy Regionales Suncoast",
  },
];

export function Participations() {
  return (
    <section
      id="participations"
      className="relative border-t border-rule bg-paper"
    >
      {/* Eyebrow + title */}
      <div className="border-b border-rule px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <FadeUp>
              <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                — PARTICIPATIONS
              </div>
              <div className="mt-1 font-mono text-[10px] italic tracking-[0.3em] text-muted">
                Participaciones
              </div>
            </FadeUp>
          </div>
          <h2 className="col-span-12 md:col-span-8">
            <span className="display block text-[10vw] leading-[0.9] md:text-[5.5vw]">
              <SplitText
                mode="word"
                variant="mask"
                duration={1.0}
                stagger={0.05}
              >
                Where his voice has been heard.
              </SplitText>
            </span>
            <FadeUp delay={0.5} className="mt-5">
              <p className="text-[3vw] italic leading-[1.2] tracking-normal text-muted md:text-[1.4vw]">
                Donde su voz ha sido escuchada.
              </p>
            </FadeUp>
          </h2>
        </div>
      </div>

      {/* Items list */}
      <div className="divide-y divide-rule">
        {participations.map((p, i) => (
          <FadeUp
            key={p.numEn}
            delay={i * 0.06}
            className="group px-6 py-10 transition-colors duration-500 hover:bg-mist md:px-10 md:py-12"
          >
            <div className="grid grid-cols-12 items-baseline gap-6">
              {/* Number */}
              <div className="col-span-2 md:col-span-1">
                <div className="font-mono text-[14px] tracking-[0.3em] text-gold md:text-[15px]">
                  {p.numEn}
                </div>
              </div>

              {/* Title */}
              <div className="col-span-10 md:col-span-6">
                <h3 className="display text-[6vw] leading-[1.05] tracking-tight md:text-[2.4vw]">
                  {p.titleEn}
                </h3>
                <div className="mt-1 text-[3vw] italic leading-[1.15] text-muted md:text-[1.2vw]">
                  {p.titleEs}
                </div>
              </div>

              {/* Context */}
              <div className="col-span-12 md:col-span-5">
                {p.contextEn && (
                  <>
                    <p className="text-[13px] leading-[1.5] tracking-tight text-ink md:text-[14px]">
                      {p.contextEn}
                    </p>
                    <p className="mt-1 text-[11px] italic leading-[1.5] tracking-tight text-muted md:text-[12px]">
                      {p.contextEs}
                    </p>
                  </>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
