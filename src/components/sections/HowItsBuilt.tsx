"use client";

import { FadeUp } from "@/components/FadeUp";
import { SplitText } from "@/components/SplitText";
import { Scrambler } from "@/components/Scrambler";

interface Testimonial {
  quoteEn: string;
  quoteEs: string;
  name: string;
  roleEn: string;
  roleEs: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quoteEn:
      "Twenty years buying luxury vehicles. Nothing has come close to this experience. Jonathan managed every detail before I even thought of it. The AI assistant answered every question I had at midnight, before my delivery.",
    quoteEs:
      "Veinte años comprando vehículos de lujo. Nada se ha acercado a esta experiencia. Jonathan gestionó cada detalle antes de que yo lo pensara. El asistente con IA respondió cada pregunta que tuve a medianoche, antes de mi entrega.",
    name: "Sofía C.",
    roleEn: "REAL ESTATE DEVELOPER",
    roleEs: "Desarrolladora inmobiliaria",
    featured: true,
  },
  {
    quoteEn:
      "Jonathan turned what I expected to be stressful into something I'll talk about for years. Every detail was resolved before I even asked.",
    quoteEs:
      "Jonathan convirtió lo que esperaba que fuera estresante en algo de lo que hablaré por años. Cada detalle estaba resuelto antes de que yo lo solicitara.",
    name: "Michael R.",
    roleEn: "MIAMI, FL",
    roleEs: "Miami, FL",
  },
  {
    quoteEn:
      "From the first meeting to the delivery at my house — flawless. Jonathan operates on a completely different level. I've already referred three colleagues.",
    quoteEs:
      "Desde la primera reunión hasta la entrega en mi casa — impecable. Jonathan opera en un nivel completamente diferente. Ya referí a tres colegas.",
    name: "David T.",
    roleEn: "ENTREPRENEUR",
    roleEs: "Empresario",
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
                <Scrambler text="04 · CLIENT STORIES" />
              </FadeUp>
            </div>
            <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-paper/50">
              <FadeUp delay={0.1}>Historias de clientes</FadeUp>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="display text-[12vw] leading-[0.88] md:text-[7vw]">
              <SplitText
                mode="word"
                variant="mask"
                duration={1.0}
                stagger={0.06}
              >
                {"What my clients say."}
              </SplitText>
            </h2>
            <FadeUp delay={0.5} className="mt-4">
              <p className="text-[3vw] italic leading-[1.2] tracking-normal text-paper/50 md:text-[1.4vw]">
                Lo que mis clientes dicen.
              </p>
            </FadeUp>
          </div>
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
                      {`"${t.quoteEn}"`}
                    </SplitText>
                  </p>
                  <FadeUp delay={0.6} className="mt-6">
                    <p className="max-w-3xl text-[15px] italic leading-[1.5] text-paper/55 md:text-[16px]">
                      “{t.quoteEs}”
                    </p>
                  </FadeUp>
                  <footer className="mt-10 flex items-center gap-6">
                    <div className="h-px w-12 bg-gold" />
                    <div>
                      <div className="text-[16px] font-bold tracking-tight">
                        {t.name}
                      </div>
                      <div className="mt-1 font-mono text-[10px] tracking-[0.3em] text-paper/50">
                        {t.roleEn}
                      </div>
                      <div className="mt-0.5 font-mono text-[9px] italic tracking-[0.3em] text-paper/40">
                        {t.roleEs}
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
                  <p className="text-[16px] leading-[1.5] tracking-tight text-paper/90 md:text-[17px]">
                    “{t.quoteEn}”
                  </p>
                  <p className="mt-3 text-[12px] italic leading-[1.55] tracking-tight text-paper/50 md:text-[13px]">
                    “{t.quoteEs}”
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <div className="h-px w-8 bg-gold" />
                    <div>
                      <div className="text-[14px] font-bold tracking-tight">
                        {t.name}
                      </div>
                      <div className="mt-0.5 font-mono text-[10px] tracking-[0.3em] text-paper/50">
                        {t.roleEn}
                      </div>
                      <div className="mt-0.5 font-mono text-[9px] italic tracking-[0.3em] text-paper/40">
                        {t.roleEs}
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
