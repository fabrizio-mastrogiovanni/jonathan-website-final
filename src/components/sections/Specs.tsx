"use client";

import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";
import { Marquee } from "@/components/Marquee";

interface Service {
  eyebrowEn: string;
  eyebrowEs: string;
  titleEn: string;
  titleEs: string;
  descriptionEn: string;
  descriptionEs: string;
  price: string;
  priceSuffixEn: string;
  priceSuffixEs: string;
  ctaEn: string;
  ctaEs: string;
  href: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    eyebrowEn: "PERSONAL ADVISORY SESSION",
    eyebrowEs: "Sesión de asesoría personal",
    titleEn: "The complete experience.",
    titleEs: "La experiencia completa.",
    descriptionEn:
      "Two negotiations for the price of one, with NEO Advisor chatbot included.",
    descriptionEs:
      "2 negociaciones por el precio de 1 y el Chatbot NEO Advisor incluido.",
    price: "$999.99",
    priceSuffixEn: "ONE-TIME PAYMENT",
    priceSuffixEs: "Pago único",
    ctaEn: "BOOK YOUR SESSION →",
    ctaEs: "Reserva tu sesión",
    href: "https://square.link/u/o2e9grla?src=sheet",
    featured: true,
  },
  {
    eyebrowEn: "NEURAL AI ADVISOR · CAR BUSINESS",
    eyebrowEs: "Asesor neuronal con IA · car business",
    titleEn: "NEO Advisor",
    titleEs: "NEO Advisor",
    descriptionEn:
      "Your personal advisor with AI trained in the car buying business. NEO combines human neural logic, real-time integrations with inventory, financing, and market data — guiding you 24/7 from search to final negotiation.",
    descriptionEs:
      "Tu asesor personal con IA entrenada en el car buying business. NEO combina lógica neuronal humana, integraciones en tiempo real con inventario, financiamiento y data de mercado, y herramientas expertas que te acompañan paso a paso en tu compra — 24/7, desde la búsqueda hasta la negociación final.",
    price: "$99",
    priceSuffixEn: "PER YEAR",
    priceSuffixEs: "Por año",
    ctaEn: "GET ACCESS →",
    ctaEs: "Obtener acceso",
    href: "https://neo.jonathanlopez.com/",
  },
  {
    eyebrowEn: "NEURAL AI ADVISOR · CREDIT REPAIR",
    eyebrowEs: "Asesor neuronal con IA · credit repair",
    titleEn: "NEO Credit Repair Advisor",
    titleEs: "NEO Credit Repair Advisor",
    descriptionEn:
      "Your credit decides what you pay for your next car. NEO Credit Repair Advisor is a neural AI advisor with direct integrations that cleans, rebuilds, and maximizes your credit profile before you walk into a dealership.",
    descriptionEs:
      "Tu crédito decide cuánto pagas por tu próximo auto. NEO Credit Repair Advisor es un asesor neuronal con IA sintética e integraciones directas que limpia, reconstruye y maximiza tu perfil crediticio antes de que entres a un dealer.",
    price: "$99",
    priceSuffixEn: "PER YEAR",
    priceSuffixEs: "Por año",
    ctaEn: "GET NOTIFIED →",
    ctaEs: "Notificarme",
    href: "/coming-soon",
  },
];

export function Specs() {
  return (
    <section id="servicios" className="relative bg-paper">
      <div className="border-y border-rule py-6">
        <Marquee
          items={[
            "STRUCTURED NEGOTIATION",
            "CONTRACT ANALYSIS",
            "FINANCIAL STRATEGY",
            "BUYER REPRESENTATION",
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
              <FadeUp>02 · SERVICES</FadeUp>
            </div>
            <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
              <FadeUp delay={0.1}>Servicios</FadeUp>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="display text-[12vw] leading-[0.88] md:text-[8vw]">
              <SplitText
                mode="word"
                variant="mask"
                duration={1.0}
                stagger={0.06}
              >
                {"Two ways\nto begin."}
              </SplitText>
            </h2>
            <FadeUp delay={0.5} className="mt-4">
              <p className="text-[3vw] italic leading-[1.2] tracking-normal text-muted md:text-[1.4vw]">
                Dos formas de comenzar.
              </p>
            </FadeUp>
          </div>
        </div>

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
                    {s.eyebrowEn}
                  </div>
                  <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
                    {s.eyebrowEs}
                  </div>
                  <h3 className="display mt-5 text-[8vw] leading-[0.95] md:text-[4vw]">
                    {s.titleEn}
                  </h3>
                  {s.titleEn !== s.titleEs && (
                    <div className="mt-1 text-[3vw] italic text-muted md:text-[1.2vw]">
                      {s.titleEs}
                    </div>
                  )}
                  <p className="mt-5 max-w-xl text-[14px] leading-[1.55] tracking-tight text-ink md:text-[15px]">
                    {s.descriptionEn}
                  </p>
                  <p className="mt-3 max-w-xl text-[12px] italic leading-[1.55] tracking-tight text-muted md:text-[13px]">
                    {s.descriptionEs}
                  </p>
                  <div className="mt-8">
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        s.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={
                        s.featured
                          ? "inline-block bg-gold px-7 py-4 font-mono text-[11px] tracking-[0.3em] text-paper transition-colors hover:bg-goldBright"
                          : "inline-block border border-ink/40 px-7 py-4 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors hover:border-gold hover:text-gold"
                      }
                    >
                      {s.ctaEn}
                      <span className="ml-2 italic opacity-70">
                        / {s.ctaEs}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 md:text-right">
                  <div className="display text-[16vw] leading-none text-gold md:text-[6vw]">
                    {s.price}
                  </div>
                  <div className="mt-3 font-mono text-[10px] tracking-[0.3em] text-muted">
                    {s.priceSuffixEn}
                  </div>
                  <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted/70">
                    {s.priceSuffixEs}
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
