"use client";

import { motion } from "framer-motion";
import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";
import Link from "next/link";

interface ParagraphPair {
  en: string;
  es: string;
}

interface ListItemPair {
  en: string;
  es: string;
}

interface Section {
  num: string;
  titleEn: string;
  titleEs: string;
  priceTag?: string;
  durationEn?: string;
  durationEs?: string;
  paragraphs: ParagraphPair[];
  listLeadEn?: string;
  listLeadEs?: string;
  listItems?: ListItemPair[];
  postListParagraphs?: ParagraphPair[];
}

const sections: Section[] = [
  {
    num: "01",
    titleEn: "General Terms",
    titleEs: "Términos generales",
    paragraphs: [
      {
        en: "All memberships are non-refundable. By purchasing any membership, the client acknowledges and accepts that no refunds will be issued under any circumstances, including but not limited to early termination, change of mind, or failure to use the services within the specified timeframe.",
        es: "Todas las membresías son no reembolsables. Al adquirir cualquier membresía, el cliente reconoce y acepta que no se emitirán reembolsos bajo ninguna circunstancia, incluyendo pero no limitado a terminación anticipada, cambio de opinión, o falta de uso de los servicios dentro del plazo establecido.",
      },
      {
        en: "All memberships, plans, and advisory services are strictly personal and NON-TRANSFERABLE. The original purchaser may not transfer, assign, sell, or share their membership with any other person. The services are tied exclusively to the original purchaser and may only be used by them.",
        es: "Todas las membresías, planes y servicios de asesoría son estrictamente personales y NO TRANSFERIBLES. El comprador original no puede transferir, ceder, vender ni compartir su membresía con ninguna otra persona. Los servicios están vinculados exclusivamente al comprador original y solo pueden ser utilizados por este.",
      },
      {
        en: "Services are provided by Jonathan López through his company SERVICE IA INC. and its associated platforms, including but not limited to the NEO Advisor AI chatbot and the NEO Credit Repair AI chatbot.",
        es: "Los servicios son proporcionados por Jonathan López a través de su empresa SERVICE IA INC. y sus plataformas asociadas, incluyendo pero no limitado al chatbot NEO Advisor y el chatbot NEO Credit Repair.",
      },
    ],
  },
  {
    num: "02",
    titleEn: "Bronze Membership",
    titleEs: "Membresía Bronce",
    priceTag: "$799",
    durationEn: "3 months from the date of purchase",
    durationEs: "3 meses a partir de la fecha de compra",
    paragraphs: [
      {
        en: "This membership covers one (1) car buying deal only. Services included are a 25-minute pre-negotiation advisory session and guided negotiation support until the vehicle is purchased or the membership expires, whichever occurs first.",
        es: "Esta membresía cubre un (1) solo negocio de compra de auto. Los servicios incluidos son una sesión de asesoría de 25 minutos previa a la negociación y soporte de negociación guiada hasta que el vehículo se compre o la membresía expire, lo que ocurra primero.",
      },
      {
        en: "If the client does not utilize the services within the 3-month period, the membership expires automatically and no extension, credit, or refund will be provided. The client must initiate a new purchase to access services again.",
        es: "Si el cliente no utiliza los servicios dentro del período de 3 meses, la membresía expira automáticamente y no se proporcionará extensión, crédito ni reembolso. El cliente deberá realizar una nueva compra para acceder a los servicios nuevamente.",
      },
      {
        en: "This membership does not include access to the Academy, AI chatbot credits, credit repair services, tax structuring, or business coaching.",
        es: "Esta membresía no incluye acceso a la Academia, créditos de chatbot IA, servicios de reparación de crédito, estructuración tributaria ni coaching de negocios.",
      },
    ],
  },
  {
    num: "03",
    titleEn: "Gold Membership",
    titleEs: "Membresía Oro",
    priceTag: "$999",
    durationEn: "1 year from the date of purchase",
    durationEs: "1 año a partir de la fecha de compra",
    paragraphs: [
      {
        en: "This membership includes two (2) car buying deals for the price of one (2×1). Services included are unlimited advisory and guided negotiation support for up to two separate vehicle purchases within the membership period.",
        es: "Esta membresía incluye dos (2) negocios de compra de auto por el precio de uno (2×1). Los servicios incluidos son asesoría ilimitada y soporte de negociación guiada para hasta dos compras de vehículos separadas dentro del período de membresía.",
      },
      {
        en: "This membership includes access to the Academy for the duration of the membership.",
        es: "Esta membresía incluye acceso a la Academia durante la vigencia de la membresía.",
      },
      {
        en: "If the client does not utilize both deals within the 1-year period, unused deals expire automatically. No extension, credit, or refund will be provided for unused services.",
        es: "Si el cliente no utiliza ambos negocios dentro del período de 1 año, los negocios no utilizados expiran automáticamente. No se proporcionará extensión, crédito ni reembolso por servicios no utilizados.",
      },
      {
        en: "This membership does not include AI chatbot credits, credit repair services, tax structuring, or business coaching.",
        es: "Esta membresía no incluye créditos de chatbot IA, servicios de reparación de crédito, estructuración tributaria ni coaching de negocios.",
      },
    ],
  },
  {
    num: "04",
    titleEn: "Diamond Membership",
    titleEs: "Membresía Diamante",
    priceTag: "$1,499",
    durationEn: "1 year from the date of purchase",
    durationEs: "1 año a partir de la fecha de compra",
    paragraphs: [
      {
        en: "This is the most comprehensive membership offered. It includes two (2) car buying deals for the price of one (2×1) with the following services:",
        es: "Esta es la membresía más completa ofrecida. Incluye dos (2) negocios de compra de auto por el precio de uno (2×1) con los siguientes servicios:",
      },
      {
        en: "NEO Car Business Chatbot: 300 credits included free for the first month. After the first month, credits must be purchased separately through the available credit plans. Credits do not roll over to the following month.",
        es: "NEO Car Business Chatbot: 300 créditos incluidos gratis el primer mes. Después del primer mes, los créditos deben comprarse por separado a través de los planes de créditos disponibles. Los créditos no se acumulan para el mes siguiente.",
      },
      {
        en: "NEO Credit Repair Chatbot: 150 credits included free for the first month. After the first month, credits must be purchased separately. This service is designed to help the client work on improving their credit profile.",
        es: "NEO Credit Repair Chatbot: 150 créditos incluidos gratis el primer mes. Después del primer mes, los créditos deben comprarse por separado. Este servicio está diseñado para ayudar al cliente a trabajar en mejorar su perfil crediticio.",
      },
    ],
    listLeadEn: "Additional services included for the full duration of the membership:",
    listLeadEs: "Servicios adicionales incluidos durante toda la vigencia de la membresía:",
    listItems: [
      { en: "Proposal analysis for vehicle purchases.", es: "Análisis de propuestas de compra de vehículos." },
      { en: "Unlimited negotiation support.", es: "Soporte de negociación ilimitado." },
      { en: "Free access to the Academy for 1 year.", es: "Acceso gratuito a la Academia por 1 año." },
      { en: "Fraud prevention guidance and education.", es: "Orientación y educación en prevención de fraudes." },
      { en: "Business coaching.", es: "Coaching de negocios." },
      { en: "Tax structuring advisory.", es: "Asesoría en estructuración tributaria." },
      { en: "Company creation guidance.", es: "Orientación en creación de compañías." },
    ],
    postListParagraphs: [
      {
        en: "If the client does not utilize the services within the 1-year period, the membership expires automatically. No extension, credit, or refund will be provided for unused services. AI chatbot credits expire at the end of each monthly cycle and do not accumulate.",
        es: "Si el cliente no utiliza los servicios dentro del período de 1 año, la membresía expira automáticamente. No se proporcionará extensión, crédito ni reembolso por servicios no utilizados. Los créditos del chatbot IA expiran al final de cada ciclo mensual y no se acumulan.",
      },
    ],
  },
  {
    num: "05",
    titleEn: "AI Chatbot Credit Terms",
    titleEs: "Términos de créditos del chatbot IA",
    paragraphs: [
      {
        en: "AI chatbot credits included with the Diamond membership are valid for the first month only. Unused credits expire at the end of the first monthly cycle and do not carry over.",
        es: "Los créditos del chatbot IA incluidos con la membresía Diamante son válidos solo para el primer mes. Los créditos no utilizados expiran al final del primer ciclo mensual y no se transfieren al siguiente.",
      },
      {
        en: "After the initial free credits are consumed or expire, clients may purchase additional credits through the available subscription plans or one-time recharge options. Credit purchases are non-refundable.",
        es: "Después de que los créditos gratuitos iniciales se consuman o expiren, los clientes pueden adquirir créditos adicionales a través de los planes de suscripción disponibles o las opciones de recarga única. Las compras de créditos no son reembolsables.",
      },
      {
        en: "Jonathan López and SERVICE IA INC. reserve the right to modify credit allocations, pricing, and service terms with reasonable notice to active members.",
        es: "Jonathan López y SERVICE IA INC. se reservan el derecho de modificar las asignaciones de créditos, precios y términos de servicio con aviso razonable a los miembros activos.",
      },
    ],
  },
  {
    num: "06",
    titleEn: "Limitation of Liability",
    titleEs: "Limitación de responsabilidad",
    paragraphs: [
      {
        en: "The services provided through these memberships are advisory and educational in nature. Jonathan López and SERVICE IA INC. do not guarantee specific financial outcomes, interest rates, vehicle prices, credit score improvements, or negotiation results. All advisory is based on professional experience and market knowledge, but results depend on individual circumstances, dealer availability, and market conditions.",
        es: "Los servicios proporcionados a través de estas membresías son de naturaleza asesora y educativa. Jonathan López y SERVICE IA INC. no garantizan resultados financieros específicos, tasas de interés, precios de vehículos, mejoras en el puntaje crediticio ni resultados de negociación. Toda la asesoría se basa en experiencia profesional y conocimiento del mercado, pero los resultados dependen de las circunstancias individuales, la disponibilidad de los dealers y las condiciones del mercado.",
      },
    ],
  },
];

export default function MembershipTermsPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-paper text-ink">
      {/* Top nav — minimal */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-rule bg-paper/95 px-6 py-5 backdrop-blur md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-ink transition-opacity hover:opacity-60"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
          JONATHAN LÓPEZ
        </Link>
        <Link
          href="/#personal-coaching"
          className="font-mono text-[11px] tracking-[0.3em] text-ink transition-opacity hover:opacity-60"
        >
          ← BACK / VOLVER
        </Link>
      </header>

      {/* HERO */}
      <section className="border-b border-rule px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
              — LEGAL · MEMBERSHIPS
            </div>
            <div className="mt-1 font-mono text-[10px] italic tracking-[0.3em] text-muted">
              Legal · Membresías
            </div>
          </FadeUp>

          <h1 className="display mt-10 text-[11vw] leading-[0.9] md:text-[6.5vw]">
            <SplitText mode="word" variant="mask" duration={1.0} stagger={0.05}>
              Membership Terms
            </SplitText>
            <br />
            <span className="text-gold">
              <SplitText
                mode="word"
                variant="mask"
                duration={1.0}
                stagger={0.05}
                delay={0.3}
              >
                & Conditions.
              </SplitText>
            </span>
          </h1>
          <FadeUp delay={0.7} className="mt-5">
            <p className="text-[3.5vw] italic leading-[1.2] text-muted md:text-[2vw]">
              Términos y Condiciones de Membresías
            </p>
          </FadeUp>

          {/* Meta row */}
          <FadeUp delay={0.9} className="mt-12">
            <div className="grid grid-cols-1 gap-6 border-t border-rule pt-8 md:grid-cols-3">
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                  AUTHOR
                </div>
                <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
                  Autor
                </div>
                <div className="mt-3 text-[14px] font-bold tracking-tight text-ink md:text-[15px]">
                  Jonathan López
                </div>
                <div className="mt-1 text-[11px] italic tracking-tight text-muted">
                  Integrity System
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                  LAST UPDATED
                </div>
                <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
                  Última actualización
                </div>
                <div className="mt-3 text-[14px] font-bold tracking-tight text-ink md:text-[15px]">
                  June 2026
                </div>
                <div className="mt-1 text-[11px] italic tracking-tight text-muted">
                  Junio 2026
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                  PROVIDER
                </div>
                <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
                  Proveedor
                </div>
                <div className="mt-3 text-[14px] font-bold tracking-tight text-ink md:text-[15px]">
                  SERVICE IA INC.
                </div>
                <div className="mt-1 text-[11px] italic tracking-tight text-muted">
                  Empresa proveedora
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          {sections.map((sec, sIdx) => (
            <FadeUp
              key={sec.num}
              delay={sIdx * 0.05}
              className={
                sIdx === 0
                  ? "pb-16 md:pb-24"
                  : "border-t border-rule py-16 md:py-24"
              }
            >
              {/* Section header */}
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-2">
                  <div className="font-mono text-[12px] tracking-[0.3em] text-gold md:text-[13px]">
                    {sec.num}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-10">
                  <h2 className="display text-[8vw] leading-[1] md:text-[3.2vw]">
                    {sec.titleEn}
                  </h2>
                  <div className="mt-1 text-[3.5vw] italic leading-[1.15] text-muted md:text-[1.5vw]">
                    {sec.titleEs}
                  </div>

                  {/* Price/duration meta for membership sections */}
                  {sec.priceTag && (
                    <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-rule pt-6">
                      <div>
                        <div className="font-mono text-[9px] tracking-[0.3em] text-gold">
                          PRICE / Precio
                        </div>
                        <div className="display mt-2 text-[2.5rem] leading-none text-gold md:text-[3rem]">
                          {sec.priceTag}
                        </div>
                      </div>
                      <div className="max-w-xs">
                        <div className="font-mono text-[9px] tracking-[0.3em] text-gold">
                          DURATION / Duración
                        </div>
                        <div className="mt-3 text-[14px] font-bold tracking-tight text-ink md:text-[15px]">
                          {sec.durationEn}
                        </div>
                        <div className="mt-1 text-[11px] italic tracking-tight text-muted md:text-[12px]">
                          {sec.durationEs}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Paragraphs */}
                  <div className="mt-10 space-y-8">
                    {sec.paragraphs.map((p, i) => (
                      <ParagraphBlock key={i} en={p.en} es={p.es} />
                    ))}
                  </div>

                  {/* List (Diamond services) */}
                  {sec.listItems && sec.listLeadEn && (
                    <div className="mt-10">
                      <ParagraphBlock en={sec.listLeadEn} es={sec.listLeadEs ?? ""} />
                      <ul className="mt-6 space-y-4">
                        {sec.listItems.map((it, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-4 border-l-2 border-gold/40 pl-5"
                          >
                            <div className="flex-1">
                              <div className="text-[14px] font-bold leading-[1.5] tracking-tight text-ink md:text-[15px]">
                                {it.en}
                              </div>
                              <div className="mt-1 text-[12px] italic leading-[1.5] tracking-tight text-muted md:text-[13px]">
                                {it.es}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Post-list paragraphs */}
                  {sec.postListParagraphs && (
                    <div className="mt-10 space-y-8">
                      {sec.postListParagraphs.map((p, i) => (
                        <ParagraphBlock key={i} en={p.en} es={p.es} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}

          {/* CONTACT */}
          <FadeUp className="border-t border-rule py-16 md:py-24">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-2">
                <div className="font-mono text-[12px] tracking-[0.3em] text-gold md:text-[13px]">
                  ✉
                </div>
              </div>
              <div className="col-span-12 md:col-span-10">
                <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                  CONTACT FOR QUESTIONS
                </div>
                <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
                  Contacto para preguntas
                </div>
                <p className="mt-6 text-[15px] leading-[1.55] tracking-tight text-ink md:text-[16px]">
                  For questions regarding these terms, contact:
                </p>
                <p className="mt-1 text-[12px] italic leading-[1.55] tracking-tight text-muted md:text-[13px]">
                  Para preguntas sobre estos términos, contactar:
                </p>
                <motion.a
                  href="mailto:info@jonathanlopez.com"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="mt-5 inline-block text-[1.3rem] font-bold tracking-tight text-ink transition-colors hover:text-gold md:text-[1.6rem]"
                >
                  info@jonathanlopez.com
                </motion.a>
              </div>
            </div>
          </FadeUp>

          {/* CTA — back to coaching */}
          <FadeUp className="mt-20 text-center md:mt-28">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="inline-block"
            >
              <Link
                href="/#personal-coaching"
                className="group inline-flex flex-col items-center gap-1 bg-gold px-10 py-5 text-paper transition-colors hover:bg-goldBright"
              >
                <span className="font-mono text-[11px] tracking-[0.3em]">
                  BACK TO MEMBERSHIPS →
                </span>
                <span className="font-mono text-[9px] italic tracking-[0.3em] opacity-75">
                  Volver a las membresías
                </span>
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* Footer hairline */}
      <div className="border-t border-rule px-6 py-6 text-center font-mono text-[10px] tracking-[0.3em] text-muted md:px-10">
        <span>© 2026 — JONATHAN LÓPEZ · INTEGRITY SYSTEM</span>
      </div>
    </main>
  );
}

/* ---------------- bilingual paragraph (EN + ES italic muted) ---------------- */
function ParagraphBlock({ en, es }: { en: string; es: string }) {
  return (
    <div>
      <p className="text-[15px] leading-[1.65] tracking-tight text-ink md:text-[16px]">
        {en}
      </p>
      <p className="mt-2 text-[12px] italic leading-[1.65] tracking-tight text-muted md:text-[13px]">
        {es}
      </p>
    </div>
  );
}
