"use client";

import { motion } from "framer-motion";
import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";
import Link from "next/link";

interface Pair {
  en: string;
  es: string;
}

interface SubBlock {
  type: "subheading" | "paragraph" | "list" | "list-with-lead";
  // for subheading / paragraph
  en?: string;
  es?: string;
  // for list-with-lead
  leadEn?: string;
  leadEs?: string;
  items?: Pair[];
}

interface Section {
  num: string;
  titleEn: string;
  titleEs: string;
  blocks: SubBlock[];
}

const sections: Section[] = [
  {
    num: "01",
    titleEn: "Service Description",
    titleEs: "Descripción del servicio",
    blocks: [
      {
        type: "paragraph",
        en: "By purchasing any of the plans or memberships offered by Jonathan López through Stellantis Group, LLC and the NEO Car Advisor platform, the client is contracting the following services according to the selected plan:",
        es: "Al adquirir cualquiera de los planes o membresías ofrecidos por Jonathan López a través de Stellantis Group, LLC y la plataforma NEO Car Advisor, el cliente está contratando los siguientes servicios según el plan seleccionado:",
      },
      {
        type: "subheading",
        en: "FULL MEMBERSHIP — $999 (one-time payment)",
        es: "Membresía Completa — $999, pago único",
      },
      {
        type: "paragraph",
        en: "The client contracts an integrated service that includes:",
        es: "El cliente contrata un servicio integral que incluye:",
      },
      {
        type: "list",
        items: [
          {
            en: "Personalized online advisory directly with Jonathan López for vehicle purchases.",
            es: "Asesoría personalizada en línea directamente con Jonathan López para la compra de vehículos.",
          },
          {
            en: "Real-time negotiation: Jonathan accompanies the client during the dealer visit and actively negotiates on their behalf via WhatsApp call, phone call, or WhatsApp written messages.",
            es: "Negociación en tiempo real: Jonathan acompaña al cliente durante la visita al dealer y negocia activamente en su nombre vía llamada de WhatsApp, llamada telefónica, o mensajes escritos de WhatsApp.",
          },
          {
            en: "Five (5) CARFAX reports included to protect the client's purchase.",
            es: "Cinco (5) reportes CARFAX incluidos para la protección de la compra del cliente.",
          },
          {
            en: "Access to the NEO Car Advisor AI chatbot with integrations, available 24 hours a day, 7 days a week, for real-time consultations when Jonathan is not available.",
            es: "Acceso al chatbot NEO Car Advisor con inteligencia artificial e integraciones, disponible 24 horas al día, 7 días a la semana, para consultas en tiempo real cuando Jonathan no esté disponible.",
          },
          {
            en: "The first month of access to the NEO chatbot is included in the membership payment. From the second month onward, chatbot access is billed separately at $99.00 per month.",
            es: "El primer mes de acceso al chatbot NEO está incluido en el pago de la membresía. A partir del segundo mes, el acceso al chatbot se cobra por separado a una tarifa de $99.00 mensuales.",
          },
        ],
      },
      {
        type: "subheading",
        en: "PREMIUM PLAN — $99.99 / month",
        es: "Plan Premium — $99.99 mensuales",
      },
      {
        type: "paragraph",
        en: "500 monthly credits for use of the NEO Car Advisor chatbot + 5 monthly CARFAX reports + access to all chatbot analysis, negotiation, and advisory features.",
        es: "500 créditos mensuales para uso del chatbot NEO Car Advisor + 5 reportes CARFAX mensuales + acceso a todas las funciones de análisis, negociación y asesoría del chatbot.",
      },
      {
        type: "subheading",
        en: "PROFESSIONAL PLAN — $49.99 / month",
        es: "Plan Profesional — $49.99 mensuales",
      },
      {
        type: "paragraph",
        en: "300 monthly credits for use of the NEO Car Advisor chatbot + 3 monthly CARFAX reports + access to all chatbot features.",
        es: "300 créditos mensuales para uso del chatbot NEO Car Advisor + 3 reportes CARFAX mensuales + acceso a todas las funciones del chatbot.",
      },
      {
        type: "subheading",
        en: "BASIC PLAN — $24.99 / month",
        es: "Plan Básico — $24.99 mensuales",
      },
      {
        type: "paragraph",
        en: "150 monthly credits for use of the NEO Car Advisor chatbot + 1 monthly CARFAX report + access to all chatbot features.",
        es: "150 créditos mensuales para uso del chatbot NEO Car Advisor + 1 reporte CARFAX mensual + acceso a todas las funciones del chatbot.",
      },
    ],
  },
  {
    num: "02",
    titleEn: "Personalized Advisory Hours",
    titleEs: "Horario de asesoría personalizada con Jonathan López",
    blocks: [
      {
        type: "paragraph",
        en: "Direct personalized advisory with Jonathan López (included in the Full Membership) is available during the following hours:",
        es: "La asesoría personalizada directa con Jonathan López (incluida en la Membresía Completa) está disponible en el siguiente horario:",
      },
      {
        type: "list",
        items: [
          {
            en: "Monday through Sunday: 10:30 AM to 10:30 PM (Eastern Time, ET)",
            es: "Lunes a domingo: 10:30 AM a 10:30 PM (hora del este, ET)",
          },
        ],
      },
      {
        type: "paragraph",
        en: "Outside of personalized advisory hours, the client may consult with the NEO Car Advisor chatbot at any time, 24 hours a day, 7 days a week. The chatbot is designed to answer questions about vehicle purchases, proposal analysis, negotiation strategies, and consumer protection, drawing on the same knowledge base as Jonathan López.",
        es: "Fuera del horario de asesoría personalizada, el cliente puede consultar con el chatbot NEO Car Advisor en cualquier momento, las 24 horas del día, los 7 días de la semana. El chatbot está diseñado para responder consultas sobre compra de vehículos, análisis de propuestas, estrategias de negociación, y protección del consumidor con la misma base de conocimiento de Jonathan López.",
      },
    ],
  },
  {
    num: "03",
    titleEn: "Permitted Communication Channels",
    titleEs: "Medios de comunicación permitidos",
    blocks: [
      {
        type: "paragraph",
        en: "Communication with Jonathan López is conducted exclusively through the following channels:",
        es: "La comunicación con Jonathan López se realiza exclusivamente por los siguientes medios:",
      },
      {
        type: "list",
        items: [
          { en: "WhatsApp call", es: "Llamada de WhatsApp" },
          { en: "Conventional phone call", es: "Llamada telefónica convencional" },
          { en: "WhatsApp written messages", es: "Mensajes escritos por WhatsApp" },
        ],
      },
      {
        type: "paragraph",
        en: "SENDING VOICE NOTES TO JONATHAN LÓPEZ IS STRICTLY PROHIBITED. Voice notes will not be answered. All direct communication with Jonathan must be by call or written message.",
        es: "ESTÁ ESTRICTAMENTE PROHIBIDO ENVIAR NOTAS DE VOZ a Jonathan López. Las notas de voz no serán atendidas. Toda comunicación directa con Jonathan debe ser por llamada o por mensaje escrito.",
      },
      {
        type: "paragraph",
        en: "Communication with the NEO Car Advisor chatbot does not have this restriction. The chatbot accepts text messages, voice notes, and images.",
        es: "La comunicación con el chatbot NEO Car Advisor no tiene esta restricción. El chatbot acepta mensajes de texto, notas de voz e imágenes.",
      },
    ],
  },
  {
    num: "04",
    titleEn: "Refund & Cancellation Policy",
    titleEs: "Política de reembolsos y cancelaciones",
    blocks: [
      {
        type: "subheading",
        en: "FULL MEMBERSHIP ($999)",
        es: "Membresía Completa ($999)",
      },
      {
        type: "list",
        items: [
          {
            en: "The $999 membership payment is NON-REFUNDABLE under any circumstances.",
            es: "El pago de la membresía de $999 NO ES REEMBOLSABLE bajo ninguna circunstancia.",
          },
          {
            en: "The membership is valid for one (1) year from the date of purchase for advisory and negotiation services.",
            es: "La membresía es válida por un (1) año a partir de la fecha de compra para los servicios de asesoría y negociación.",
          },
          {
            en: "Access to the NEO chatbot included in the first month is NON-REFUNDABLE.",
            es: "El acceso al chatbot NEO incluido en el primer mes NO es reembolsable.",
          },
        ],
      },
      {
        type: "subheading",
        en: "CHATBOT SUBSCRIPTION ($99/month from the second month for Full Membership clients)",
        es: "Suscripción del chatbot ($99/mes a partir del segundo mes para miembros de la Membresía Completa)",
      },
      {
        type: "list",
        items: [
          {
            en: "The client may cancel the chatbot subscription at any time.",
            es: "El cliente puede cancelar la suscripción del chatbot en cualquier momento.",
          },
          {
            en: "Cancellation applies only to the next monthly charge. Charges already made are NON-REFUNDABLE.",
            es: "La cancelación aplica únicamente al siguiente cobro mensual. Los cobros ya realizados NO son reembolsables.",
          },
          {
            en: "Canceling the chatbot subscription does NOT cancel the personalized advisory and negotiation services included in the $999 Full Membership, which remain in effect until their expiration date.",
            es: "Cancelar la suscripción del chatbot NO cancela los servicios de asesoría personalizada y negociación incluidos en la Membresía Completa de $999, los cuales siguen vigentes hasta su fecha de vencimiento.",
          },
        ],
      },
      {
        type: "subheading",
        en: "MONTHLY PLANS (Basic $24.99, Professional $49.99, Premium $99.99)",
        es: "Planes mensuales (Básico $24.99, Profesional $49.99, Premium $99.99)",
      },
      {
        type: "list",
        items: [
          {
            en: "The client may cancel the subscription at any time.",
            es: "El cliente puede cancelar su suscripción en cualquier momento.",
          },
          {
            en: "Cancellation applies to the next monthly charge. Charges already made are NON-REFUNDABLE.",
            es: "La cancelación aplica al siguiente cobro mensual. Los cobros ya realizados NO son reembolsables.",
          },
          {
            en: "Credits unused at the end of the monthly cycle DO NOT carry over to the following month.",
            es: "Los créditos no utilizados al final del ciclo mensual NO se acumulan para el siguiente mes.",
          },
        ],
      },
    ],
  },
  {
    num: "05",
    titleEn: "Transferability",
    titleEs: "Transferibilidad",
    blocks: [
      {
        type: "paragraph",
        en: "All memberships and plans are transferable. The original holder may transfer their membership to another person by notifying Jonathan López in writing prior to the transfer. The expiration date does not reset upon transfer. The new beneficiary assumes all terms and conditions.",
        es: "Todas las membresías y planes son transferibles. El titular original puede transferir su membresía a otra persona notificando por escrito a Jonathan López antes de la transferencia. La fecha de vencimiento no se reinicia con la transferencia. El nuevo beneficiario asume todos los términos y condiciones.",
      },
    ],
  },
  {
    num: "06",
    titleEn: "Credits & CARFAX Reports",
    titleEs: "Créditos y reportes CARFAX",
    blocks: [
      {
        type: "paragraph",
        en: "Chatbot credits are allocated monthly according to the contracted plan. Credits unused at the end of the monthly cycle expire and do not transfer to the following month.",
        es: "Los créditos del chatbot se asignan mensualmente según el plan contratado. Los créditos no utilizados al final del ciclo mensual expiran y no se transfieren al siguiente mes.",
      },
      {
        type: "paragraph",
        en: "CARFAX reports included in each plan are for monthly use. Unused reports do not carry over to the following month.",
        es: "Los reportes CARFAX incluidos en cada plan son de uso mensual. Los reportes no utilizados no se acumulan para el siguiente mes.",
      },
      {
        type: "paragraph",
        en: "The cost of each CARFAX report is charged in credits within the platform. The number of available reports depends on the contracted plan.",
        es: "El costo de cada reporte CARFAX se cobra en créditos dentro de la plataforma. El número de reportes disponibles depende del plan contratado.",
      },
      {
        type: "paragraph",
        en: "Stellantis Group, LLC reserves the right to modify credit allocations, the number of included reports, and plan pricing with reasonable notice to active members.",
        es: "Stellantis Group, LLC se reserva el derecho de modificar las asignaciones de créditos, la cantidad de reportes incluidos, y los precios de los planes con aviso razonable a los miembros activos.",
      },
    ],
  },
  {
    num: "07",
    titleEn: "Nature of Service",
    titleEs: "Naturaleza del servicio",
    blocks: [
      {
        type: "paragraph",
        en: "The services provided through these memberships and plans are advisory and educational in nature. Jonathan López and Stellantis Group, LLC:",
        es: "Los servicios proporcionados a través de estas membresías y planes son de naturaleza asesora y educativa. Jonathan López y Stellantis Group, LLC:",
      },
      {
        type: "list",
        items: [
          {
            en: "DO NOT guarantee specific financial outcomes, interest rates, vehicle prices, or negotiation results.",
            es: "NO garantizan resultados financieros específicos, tasas de interés, precios de vehículos, ni resultados de negociación.",
          },
          {
            en: "DO NOT sell vehicles directly.",
            es: "NO venden vehículos directamente.",
          },
          {
            en: "DO NOT provide formal legal or tax advice. References to tax structuring and company creation are orientational, and the client must consult with certified professionals (CPA, attorneys) for implementation.",
            es: "NO proveen asesoría legal o fiscal formal. Las menciones a estructuración tributaria y creación de compañías son orientativas y el cliente debe consultar con profesionales certificados (CPA, abogados) para su implementación.",
          },
          {
            en: "DO NOT access dealer systems or generate client credit reports.",
            es: "NO acceden a sistemas de dealers ni generan reportes de crédito del cliente.",
          },
        ],
      },
      {
        type: "paragraph",
        en: "Results depend on individual client circumstances, dealer availability, market conditions, and the client's credit profile.",
        es: "Los resultados dependen de las circunstancias individuales del cliente, la disponibilidad de los dealers, las condiciones del mercado, y el perfil crediticio del cliente.",
      },
    ],
  },
  {
    num: "08",
    titleEn: "Artificial Intelligence & Chatbot",
    titleEs: "Inteligencia artificial y chatbot",
    blocks: [
      {
        type: "paragraph",
        en: "The NEO Car Advisor chatbot uses artificial intelligence (advanced language models) with integrations to vehicle market databases and third-party services (including CARFAX). The chatbot is trained on Jonathan López's knowledge and experience, but it is an automated system.",
        es: "El chatbot NEO Car Advisor utiliza inteligencia artificial (modelos de lenguaje avanzados) con integraciones a bases de datos de mercado vehicular y servicios de terceros (incluyendo CARFAX). El chatbot está entrenado con el conocimiento y la experiencia de Jonathan López, pero es un sistema automatizado.",
      },
      {
        type: "paragraph",
        en: "The client understands and accepts that:",
        es: "El cliente entiende y acepta que:",
      },
      {
        type: "list",
        items: [
          {
            en: "The chatbot is a complementary tool, not a substitute for professional advice.",
            es: "El chatbot es una herramienta complementaria, no un sustituto de asesoría profesional.",
          },
          {
            en: "Chatbot responses are based on market data and negotiation patterns, but do not constitute guarantees.",
            es: "Las respuestas del chatbot se basan en datos de mercado y patrones de negociación, pero no constituyen garantías.",
          },
          {
            en: "Information provided by the chatbot is educational and orientational.",
            es: "La información proporcionada por el chatbot es educativa y orientativa.",
          },
        ],
      },
    ],
  },
  {
    num: "09",
    titleEn: "Privacy & Personal Data",
    titleEs: "Privacidad y datos personales",
    blocks: [
      {
        type: "paragraph",
        en: "Stellantis Group, LLC collects and stores the following client data:",
        es: "Stellantis Group, LLC recopila y almacena los siguientes datos del cliente:",
      },
      {
        type: "list",
        items: [
          { en: "Full name", es: "Nombre completo" },
          { en: "Phone number", es: "Número de teléfono" },
          { en: "Email address", es: "Dirección de correo electrónico" },
          {
            en: "Conversation history with the chatbot (for context and service improvement)",
            es: "Historial de conversaciones con el chatbot (para contexto y mejora del servicio)",
          },
          {
            en: "Payment data (processed by Square, Inc.)",
            es: "Datos de pago (procesados por Square, Inc.)",
          },
        ],
      },
      {
        type: "paragraph",
        en: "This data is used exclusively to:",
        es: "Estos datos se utilizan exclusivamente para:",
      },
      {
        type: "list",
        items: [
          {
            en: "Provide the contracted services",
            es: "Proveer los servicios contratados",
          },
          {
            en: "Verify client identity and membership status",
            es: "Verificar la identidad y el estado de la membresía del cliente",
          },
          {
            en: "Improve service quality and the chatbot",
            es: "Mejorar la calidad del servicio y del chatbot",
          },
          {
            en: "Service-related communications",
            es: "Comunicaciones relacionadas con el servicio",
          },
        ],
      },
      {
        type: "paragraph",
        en: "Stellantis Group, LLC does not sell, rent, or share clients' personal data with third parties, except when necessary to provide the service (payment processors, messaging services) or when required by law.",
        es: "Stellantis Group, LLC no vende, alquila ni comparte datos personales de los clientes con terceros, excepto cuando sea necesario para proveer el servicio (procesadores de pago, servicios de mensajería) o cuando sea requerido por ley.",
      },
      {
        type: "paragraph",
        en: "The client may request deletion of their personal data by contacting info@jonathanlopez.com.",
        es: "El cliente puede solicitar la eliminación de sus datos personales contactando a info@jonathanlopez.com.",
      },
    ],
  },
  {
    num: "10",
    titleEn: "Acceptance of Terms",
    titleEs: "Aceptación de términos",
    blocks: [
      {
        type: "paragraph",
        en: "By making payment for any membership or plan, the client confirms that:",
        es: "Al realizar el pago de cualquier membresía o plan, el cliente confirma que:",
      },
      {
        type: "list",
        items: [
          {
            en: "They have read and fully understood these terms of service.",
            es: "Ha leído y comprendido estos términos de servicio en su totalidad.",
          },
          {
            en: "They accept that the membership and payments made are non-refundable.",
            es: "Acepta que la membresía y los pagos realizados no son reembolsables.",
          },
          {
            en: "They understand that canceling the chatbot does not cancel the advisory services of the Full Membership.",
            es: "Entiende que la cancelación del chatbot no cancela los servicios de asesoría de la Membresía Completa.",
          },
          {
            en: "They accept the prohibition on sending voice notes to Jonathan López.",
            es: "Acepta la prohibición de enviar notas de voz a Jonathan López.",
          },
          {
            en: "They acknowledge that services are advisory and educational in nature, without guarantee of specific results.",
            es: "Reconoce que los servicios son de naturaleza asesora y educativa, sin garantía de resultados específicos.",
          },
        ],
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-paper text-ink">
      {/* Top nav — minimal sticky */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-rule bg-paper/95 px-6 py-5 backdrop-blur md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-ink transition-opacity hover:opacity-60"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
          JONATHAN LÓPEZ
        </Link>
        <Link
          href="/"
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
              — LEGAL · PRIVACY & CONSENT
            </div>
            <div className="mt-1 font-mono text-[10px] italic tracking-[0.3em] text-muted">
              Legal · Privacidad y consentimiento
            </div>
          </FadeUp>

          <h1 className="display mt-10 text-[11vw] leading-[0.9] md:text-[5.5vw]">
            <SplitText mode="word" variant="mask" duration={1.0} stagger={0.05}>
              Terms of Service, Consent
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
                & Privacy Policy.
              </SplitText>
            </span>
          </h1>
          <FadeUp delay={0.7} className="mt-5">
            <p className="text-[3.5vw] italic leading-[1.2] text-muted md:text-[1.8vw]">
              Términos de servicio, consentimiento y política de privacidad.
            </p>
          </FadeUp>
          <FadeUp delay={0.85} className="mt-6">
            <div className="font-mono text-[10px] tracking-[0.3em] text-gold md:text-[11px]">
              NEO CAR ADVISOR — MEMBERSHIP & SERVICES
            </div>
            <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
              NEO Car Advisor — Membresía y servicios
            </div>
          </FadeUp>

          {/* Meta row */}
          <FadeUp delay={1.0} className="mt-12">
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
                  Stellantis Group, LLC
                </div>
                <div className="mt-1 text-[11px] italic tracking-tight text-muted">
                  Orlando, FL
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
              delay={sIdx * 0.04}
              className={
                sIdx === 0
                  ? "pb-16 md:pb-24"
                  : "border-t border-rule py-16 md:py-24"
              }
            >
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-2">
                  <div className="font-mono text-[12px] tracking-[0.3em] text-gold md:text-[13px]">
                    {sec.num}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-10">
                  <h2 className="display text-[7vw] leading-[1] md:text-[3vw]">
                    {sec.titleEn}
                  </h2>
                  <div className="mt-1 text-[3.5vw] italic leading-[1.15] text-muted md:text-[1.4vw]">
                    {sec.titleEs}
                  </div>

                  {/* Blocks */}
                  <div className="mt-10 space-y-8">
                    {sec.blocks.map((b, i) => (
                      <SectionBlock key={i} block={b} />
                    ))}
                  </div>
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
                  CONTACT
                </div>
                <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
                  Contacto
                </div>
                <p className="mt-6 text-[15px] leading-[1.55] tracking-tight text-ink md:text-[16px]">
                  For questions about these terms:
                </p>
                <p className="mt-1 text-[12px] italic leading-[1.55] tracking-tight text-muted md:text-[13px]">
                  Para preguntas sobre estos términos:
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                      EMAIL
                    </div>
                    <div className="font-mono text-[9px] italic tracking-[0.3em] text-muted">
                      Correo electrónico
                    </div>
                    <motion.a
                      href="mailto:info@jonathanlopez.com"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="mt-3 inline-block break-all text-[1.1rem] font-bold tracking-tight text-ink transition-colors hover:text-gold md:text-[1.3rem]"
                    >
                      info@jonathanlopez.com
                    </motion.a>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                      WHATSAPP · NEO CAR ADVISOR
                    </div>
                    <div className="font-mono text-[9px] italic tracking-[0.3em] text-muted">
                      WhatsApp NEO Car Advisor
                    </div>
                    <motion.a
                      href="https://wa.me/14076490964"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="mt-3 inline-block text-[1.1rem] font-bold tracking-tight text-ink transition-colors hover:text-gold md:text-[1.3rem]"
                    >
                      +1 (407) 649-0964
                    </motion.a>
                  </div>
                </div>

                <div className="mt-12 border-t border-rule pt-6 text-[11px] tracking-tight text-muted">
                  <div className="font-bold text-ink">
                    Jonathan López · Integrity System
                  </div>
                  <div className="mt-1 italic">
                    Stellantis Group, LLC — Orlando, FL
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* CTA — back to home */}
          <FadeUp className="mt-20 text-center md:mt-28">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="inline-block"
            >
              <Link
                href="/"
                className="group inline-flex flex-col items-center gap-1 bg-gold px-10 py-5 text-paper transition-colors hover:bg-goldBright"
              >
                <span className="font-mono text-[11px] tracking-[0.3em]">
                  RETURN TO SITE →
                </span>
                <span className="font-mono text-[9px] italic tracking-[0.3em] opacity-75">
                  Volver al sitio
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

/* ---------------- Block renderer ---------------- */
function SectionBlock({ block }: { block: SubBlock }) {
  if (block.type === "subheading") {
    return (
      <div className="border-t border-gold/20 pt-6">
        <div className="font-mono text-[10px] font-bold tracking-[0.3em] text-gold md:text-[11px]">
          {block.en}
        </div>
        <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted md:text-[10px]">
          {block.es}
        </div>
      </div>
    );
  }
  if (block.type === "paragraph") {
    return (
      <div>
        <p className="text-[15px] leading-[1.65] tracking-tight text-ink md:text-[16px]">
          {block.en}
        </p>
        <p className="mt-2 text-[12px] italic leading-[1.65] tracking-tight text-muted md:text-[13px]">
          {block.es}
        </p>
      </div>
    );
  }
  if (block.type === "list" && block.items) {
    return (
      <ul className="space-y-4">
        {block.items.map((it, i) => (
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
    );
  }
  return null;
}
