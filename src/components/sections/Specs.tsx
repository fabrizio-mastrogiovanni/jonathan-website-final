"use client";

import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";
import { Marquee } from "@/components/Marquee";

interface Service {
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  priceSuffix: string;
  cta: { label: string; href: string };
  featured?: boolean;
}

const services: Service[] = [
  {
    eyebrow: "SESIÓN DE ASESORÍA PERSONAL",
    title: "La experiencia completa.",
    description:
      "2 negociaciones por el precio de 1 y el Chatbot NEO Advisor incluido.",
    price: "$999.99",
    priceSuffix: "PAGO ÚNICO",
    cta: { label: "RESERVA TU SESIÓN →", href: "https://wa.me/13053551234" },
    featured: true,
  },
  {
    eyebrow: "ASESOR NEURONAL CON IA SINTÉTICA · CAR BUSINESS",
    title: "NEO Advisor",
    description:
      "Tu asesor personal con IA entrenada en el car buying business. NEO combina lógica neuronal humana, integraciones en tiempo real con inventario, financiamiento y data de mercado, y herramientas expertas que te acompañan paso a paso en tu compra — 24/7, desde la búsqueda hasta la negociación final.",
    price: "$99",
    priceSuffix: "POR AÑO",
    cta: { label: "OBTENER ACCESO →", href: "#cta" },
  },
  {
    eyebrow: "ASESOR NEURONAL CON IA SINTÉTICA · CREDIT REPAIR",
    title: "NEO Credit Repair Advisor",
    description:
      "Tu crédito decide cuánto pagas por tu próximo auto. NEO Credit Repair Advisor es un asesor neuronal con IA sintética e integraciones directas que limpia, reconstruye y maximiza tu perfil crediticio antes de que entres a un dealer.",
    price: "$99",
    priceSuffix: "POR AÑO",
    cta: { label: "OBTENER ACCESO →", href: "#cta" },
  },
];

export function Specs() {
  return (
    <section id="servicios" className="relative bg-paper">
      {/* Brutal marquee divider */}
      <div className="border-y border-rule py-6">
        <Marquee
          items={[
            "NEGOCIACIÓN ESTRUCTURADA",
            "ANÁLISIS DE CONTRATOS",
            "ESTRATEGIA FINANCIERA",
            "REPRESENTACIÓN DEL COMPRADOR",
            "NEO ADVISOR",
          ]}
          speed={50}
          itemClassName="font-bold"
        />
      </div>

      <div className="px-6 py-32 md:px-10 md:py-48">
        <div className="mb-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
              <FadeUp>02 · SERVICIOS</FadeUp>
            </div>
          </div>
          <h2 className="col-span-12 display text-[12vw] leading-[0.88] md:col-span-9 md:text-[8vw]">
            <SplitText mode="word" variant="mask" duration={1.0} stagger={0.06}>
              {"Dos formas\nde comenzar."}
            </SplitText>
          </h2>
        </div>

        {/* Services list — vertical, brutal */}
        <div className="flex flex-col gap-px bg-rule">
          {services.map((s, i) => (
            <FadeUp
              key={i}
              delay={i * 0.08}
              className={
                s.featured
                  ? "group relative bg-mist p-8 transition-colors duration-500 md:p-12"
                  : "group relative bg-paper p-8 transition-colors duration-500 hover:bg-mist md:p-12"
              }
            >
              {s.featured && (
                <div className="pointer-events-none absolute inset-0 border border-gold/40" />
              )}
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-8">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                    {s.eyebrow}
                  </div>
                  <h3 className="display mt-4 text-[8vw] leading-[0.95] md:text-[4vw]">
                    {s.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-[14px] leading-[1.55] tracking-tight text-muted md:text-[15px]">
                    {s.description}
                  </p>
                  <div className="mt-8">
                    <a
                      href={s.cta.href}
                      target={s.cta.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        s.cta.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={
                        s.featured
                          ? "inline-block bg-gold px-7 py-4 font-mono text-[11px] tracking-[0.3em] text-paper transition-colors hover:bg-goldBright"
                          : "inline-block border border-ink/40 px-7 py-4 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors hover:border-gold hover:text-gold"
                      }
                    >
                      {s.cta.label}
                    </a>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 md:text-right">
                  <div className="display text-[16vw] leading-none text-gold md:text-[6vw]">
                    {s.price}
                  </div>
                  <div className="mt-3 font-mono text-[10px] tracking-[0.3em] text-muted">
                    {s.priceSuffix}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
