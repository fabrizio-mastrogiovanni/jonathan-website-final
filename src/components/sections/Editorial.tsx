"use client";

import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";
import { NumberCounter } from "@/components/NumberCounter";

const stats = [
  { value: 4500, suffix: "+", en: "CLIENTS ADVISED", es: "Clientes asesorados" },
  {
    value: 9,
    prefix: "$",
    suffix: "M+",
    en: "SAVED FOR CLIENTS",
    es: "Ahorrados a clientes",
  },
  {
    value: 15,
    suffix: "+",
    en: "YEARS IN THE INDUSTRY",
    es: "Años en la industria",
  },
];

export function Editorial() {
  return (
    <section id="sobre" className="relative bg-paper">
      {/* Eyebrow row */}
      <div className="grid grid-cols-12 gap-6 border-b border-rule px-6 py-10 md:px-10">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
            <FadeUp>03 · ABOUT JONATHAN</FadeUp>
          </div>
          <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
            <FadeUp delay={0.1}>Sobre Jonathan</FadeUp>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 font-mono text-[10px] tracking-[0.3em] text-muted">
          <FadeUp delay={0.15}>— EST. 2018 · MIAMI, FLORIDA</FadeUp>
        </div>
      </div>

      {/* Monumental statement */}
      <div className="px-6 py-32 md:px-10 md:py-48">
        <h2 className="display text-[10vw] leading-[0.92] md:text-[6.5vw]">
          <SplitText mode="word" variant="mask" duration={1.0} stagger={0.05}>
            15 years turning car buying
          </SplitText>
          <br />
          <span className="text-gold">
            <SplitText
              mode="word"
              variant="mask"
              duration={1.0}
              stagger={0.05}
              delay={0.25}
            >
              into a structured negotiation
            </SplitText>
          </span>
          <br />
          <span className="text-muted">
            <SplitText
              mode="word"
              variant="mask"
              duration={1.0}
              stagger={0.05}
              delay={0.5}
            >
              — not an improvised transaction.
            </SplitText>
          </span>
        </h2>
        <FadeUp delay={0.8} className="mt-8">
          <p className="text-[3vw] italic leading-[1.2] text-muted md:text-[1.8vw]">
            15 años convirtiendo la compra de un auto en una negociación
            estructurada — no una transacción improvisada.
          </p>
        </FadeUp>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-px border-y border-rule bg-rule md:grid-cols-3">
        {stats.map((s, i) => (
          <FadeUp
            key={i}
            delay={i * 0.1}
            className="group bg-paper p-10 transition-colors duration-500 hover:bg-mist md:p-16"
          >
            <div className="flex items-baseline text-gold">
              {s.prefix && (
                <span className="display text-[10vw] leading-none md:text-[5vw]">
                  {s.prefix}
                </span>
              )}
              <NumberCounter
                to={s.value}
                duration={1800}
                className="display text-[18vw] leading-none md:text-[8vw]"
              />
              <span className="display text-[10vw] leading-none md:text-[5vw]">
                {s.suffix}
              </span>
            </div>
            <div className="mt-6 font-mono text-[10px] tracking-[0.3em] text-muted">
              {s.en}
            </div>
            <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted/70">
              {s.es}
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Three-column editorial bio — bilingual */}
      <div className="grid grid-cols-12 gap-6 px-6 py-24 md:px-10 md:py-32">
        <div className="col-span-12 md:col-span-4">
          <FadeUp>
            <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
              I · ORIGIN
            </div>
            <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
              Origen
            </div>
            <p className="mt-6 text-[15px] leading-[1.55] tracking-tight text-ink">
              Started his career in Venezuela in 2009. In 2019 he arrives in
              the United States, and by early 2020 joins{" "}
              <strong className="text-muted">
                Airport Chrysler Dodge Jeep Ram
              </strong>{" "}
              in Miami — where in his first year he&apos;s named{" "}
              <strong className="text-muted">Rookie of the Year</strong>.
            </p>
            <p className="mt-3 text-[12px] italic leading-[1.55] tracking-tight text-muted">
              Comenzó su carrera en Venezuela en 2009. En 2019 llega a Estados
              Unidos, y a inicios del 2020 se integra a Airport Chrysler Dodge
              Jeep Ram en Miami — donde en su primer año se posiciona como
              Novato del Año.
            </p>
          </FadeUp>
        </div>
        <div className="col-span-12 md:col-span-4">
          <FadeUp delay={0.15}>
            <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
              II · METHOD
            </div>
            <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
              Método
            </div>
            <p className="mt-6 text-[15px] leading-[1.55] tracking-tight text-ink">
              His methodology combines contract analysis, financing
              structures, and the psychology of financial behavior. He
              doesn&apos;t just lower the price: he reconfigures the entire
              operation so you win from the signature on.
            </p>
            <p className="mt-3 text-[12px] italic leading-[1.55] tracking-tight text-muted">
              Su metodología combina análisis de contratos, estructuras de
              financiamiento y psicología del comportamiento financiero. No
              busca solo bajar el precio: reconfigura toda la operación para
              que ganes desde la firma.
            </p>
          </FadeUp>
        </div>
        <div className="col-span-12 md:col-span-4">
          <FadeUp delay={0.3}>
            <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
              III · TODAY
            </div>
            <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
              Hoy
            </div>
            <p className="mt-6 text-[15px] leading-[1.55] tracking-tight text-ink">
              His methodology scales through the{" "}
              <strong className="text-gold">NEO Negotiator</strong> project —
              a neural advisor with synthetic AI that brings to everyone the
              same level of representation traditionally reserved for luxury
              vehicle buyers.
            </p>
            <p className="mt-3 text-[12px] italic leading-[1.55] tracking-tight text-muted">
              Su metodología se escala a través del proyecto NEO Negotiator —
              un asesor neuronal con IA sintética que pone al alcance de
              cualquiera el mismo nivel de representación que tradicionalmente
              solo recibían compradores de vehículos de lujo.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Closing quote */}
      <div className="border-t border-rule px-6 py-32 md:px-10 md:py-48">
        <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
          <FadeUp>— PHILOSOPHY</FadeUp>
        </div>
        <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
          <FadeUp delay={0.1}>Filosofía</FadeUp>
        </div>
        <p className="display mt-8 max-w-[16ch] text-[12vw] leading-[0.95] md:text-[7vw]">
          <SplitText mode="word" variant="blur" duration={1.0} stagger={0.05}>
            I don&apos;t sell cars. I buy them for you — at the right price.
          </SplitText>
        </p>
        <FadeUp delay={0.6} className="mt-5">
          <p className="max-w-[28ch] text-[3vw] italic leading-[1.2] text-muted md:text-[1.5vw]">
            No vendo autos. Los compro por ti — al precio correcto.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
