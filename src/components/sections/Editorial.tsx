"use client";

import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";
import { NumberCounter } from "@/components/NumberCounter";

const stats = [
  { value: 4500, suffix: "+", label: "CLIENTES ASESORADOS" },
  { value: 9, prefix: "$", suffix: "M+", label: "AHORRADOS A CLIENTES" },
  { value: 15, suffix: "+", label: "AÑOS EN LA INDUSTRIA" },
];

export function Editorial() {
  return (
    <section id="sobre" className="relative bg-paper">
      {/* Eyebrow row */}
      <div className="grid grid-cols-12 gap-6 border-b border-rule px-6 py-10 md:px-10">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
            <FadeUp>03 · SOBRE JONATHAN</FadeUp>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 font-mono text-[10px] tracking-[0.3em] text-muted">
          <FadeUp delay={0.1}>— EST. 2018 · MIAMI, FLORIDA</FadeUp>
        </div>
      </div>

      {/* Monumental statement */}
      <div className="px-6 py-32 md:px-10 md:py-48">
        <h2 className="display text-[10vw] leading-[0.92] md:text-[6.5vw]">
          <SplitText mode="word" variant="mask" duration={1.0} stagger={0.05}>
            15 años convirtiendo la compra de un auto
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
              en una negociación estructurada
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
              — no una transacción improvisada.
            </SplitText>
          </span>
        </h2>
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
              {s.label}
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Three-column editorial bio */}
      <div className="grid grid-cols-12 gap-6 px-6 py-24 md:px-10 md:py-32">
        <div className="col-span-12 md:col-span-4">
          <FadeUp>
            <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
              I · ORIGEN
            </div>
            <p className="mt-6 text-[15px] leading-[1.55] tracking-tight text-ink">
              Comenzó su carrera en Venezuela en 2009. En 2019 llega a Estados
              Unidos, y a inicios del 2020 se integra a{" "}
              <strong className="text-muted">
                Airport Chrysler Dodge Jeep Ram
              </strong>{" "}
              en Miami — donde en su primer año se posiciona como{" "}
              <strong className="text-muted">Novato del Año</strong>.
            </p>
          </FadeUp>
        </div>
        <div className="col-span-12 md:col-span-4">
          <FadeUp delay={0.15}>
            <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
              II · MÉTODO
            </div>
            <p className="mt-6 text-[15px] leading-[1.55] tracking-tight text-ink">
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
              III · HOY
            </div>
            <p className="mt-6 text-[15px] leading-[1.55] tracking-tight text-ink">
              Su metodología se escala a través del proyecto{" "}
              <strong className="text-gold">NEO Negotiator</strong> — un asesor
              neuronal con IA sintética que pone al alcance de cualquiera el
              mismo nivel de representación que tradicionalmente solo recibían
              compradores de vehículos de lujo.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Closing quote */}
      <div className="border-t border-rule px-6 py-32 md:px-10 md:py-48">
        <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
          <FadeUp>— FILOSOFÍA</FadeUp>
        </div>
        <p className="display mt-8 max-w-[16ch] text-[12vw] leading-[0.95] md:text-[7vw]">
          <SplitText mode="word" variant="blur" duration={1.0} stagger={0.05}>
            No vendo autos. Los compro por ti — al precio correcto.
          </SplitText>
        </p>
      </div>
    </section>
  );
}
