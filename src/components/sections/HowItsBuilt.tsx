"use client";

import { FadeUp } from "@/components/FadeUp";
import { SplitText } from "@/components/SplitText";
import { Scrambler } from "@/components/Scrambler";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Veinte años comprando vehículos de lujo. Nada se ha acercado a esta experiencia. Jonathan gestionó cada detalle antes de que yo lo pensara. El asistente con IA respondió cada pregunta que tuve a medianoche, antes de mi entrega.",
    name: "Sofía C.",
    role: "DESARROLLADORA INMOBILIARIA",
    featured: true,
  },
  {
    quote:
      "Jonathan convirtió lo que esperaba que fuera estresante en algo de lo que hablaré por años. Cada detalle estaba resuelto antes de que yo lo solicitara.",
    name: "Michael R.",
    role: "MIAMI, FL",
  },
  {
    quote:
      "Desde la primera reunión hasta la entrega en mi casa — impecable. Jonathan opera en un nivel completamente diferente. Ya referí a tres colegas.",
    name: "David T.",
    role: "EMPRESARIO",
  },
];

export function HowItsBuilt() {
  return (
    <section id="testimonios" className="bg-ink text-paper">
      <div className="px-6 py-32 md:px-10 md:py-48">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
              <FadeUp>
                <Scrambler text="04 · HISTORIAS DE CLIENTES" />
              </FadeUp>
            </div>
          </div>
          <h2 className="col-span-12 display text-[12vw] leading-[0.88] md:col-span-8 md:text-[7vw]">
            <SplitText mode="word" variant="mask" duration={1.0} stagger={0.06}>
              {"Lo que mis\nclientes dicen."}
            </SplitText>
          </h2>
        </div>

        {/* Featured testimonial */}
        {testimonials
          .filter((t) => t.featured)
          .map((t) => (
            <FadeUp key={t.name} delay={0.1} className="mt-24 md:mt-32">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-2 font-mono text-[10px] tracking-[0.3em] text-gold md:pt-4">
                  ★ FEATURED
                </div>
                <blockquote className="col-span-12 md:col-span-10">
                  <p className="display text-[6vw] leading-[1.15] tracking-tight md:text-[2.6vw]">
                    <SplitText
                      mode="word"
                      variant="mask"
                      duration={1.0}
                      stagger={0.025}
                    >
                      {`"${t.quote}"`}
                    </SplitText>
                  </p>
                  <footer className="mt-10 flex items-center gap-6">
                    <div className="h-px w-12 bg-gold" />
                    <div>
                      <div className="text-[16px] font-bold tracking-tight">
                        {t.name}
                      </div>
                      <div className="mt-1 font-mono text-[10px] tracking-[0.3em] text-paper/50">
                        {t.role}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </FadeUp>
          ))}

        {/* Secondary testimonials grid */}
        <div className="mt-24 grid grid-cols-1 gap-px border-y border-paper/15 bg-paper/15 md:grid-cols-2 md:mt-32">
          {testimonials
            .filter((t) => !t.featured)
            .map((t, i) => (
              <FadeUp
                key={t.name}
                delay={i * 0.12}
                className="bg-ink p-10 md:p-14"
              >
                <blockquote>
                  <p className="text-[16px] italic leading-[1.5] tracking-tight text-paper/90 md:text-[17px]">
                    “{t.quote}”
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <div className="h-px w-8 bg-gold" />
                    <div>
                      <div className="text-[14px] font-bold tracking-tight">
                        {t.name}
                      </div>
                      <div className="mt-0.5 font-mono text-[10px] tracking-[0.3em] text-paper/50">
                        {t.role}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </FadeUp>
            ))}
        </div>
      </div>
    </section>
  );
}
