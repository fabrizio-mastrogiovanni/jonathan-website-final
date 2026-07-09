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
  type: "subheading" | "paragraph" | "list" | "list-with-lead" | "notice";
  // for subheading / paragraph / notice
  en?: string;
  es?: string;
  // for list-with-lead
  leadEn?: string;
  leadEs?: string;
  items?: Pair[];
}

interface Section {
  num?: string;
  titleEn: string;
  titleEs: string;
  blocks: SubBlock[];
}

const sections: Section[] = [
  {
    titleEn: "Service Description",
    titleEs: "Descripción del servicio",
    blocks: [
      {
        type: "paragraph",
        en: "By purchasing any of the plans or memberships offered by Jonathan López — Automotive Negotiation Strategist & Advisory — through Stellantis Group, LLC, the client is contracting the following services according to the selected plan. NEO Car Advisor is the name of the AI chatbot offered within certain plans; the advisor and negotiator throughout is Jonathan López.",
        es: "Al adquirir cualquiera de los planes o membresías ofrecidos por Jonathan López — Estratega de Negociación Automotriz y Asesoría — a través de Stellantis Group, LLC, el cliente está contratando los siguientes servicios según el plan seleccionado. NEO Car Advisor es el nombre del chatbot con inteligencia artificial ofrecido dentro de ciertos planes; el asesor y negociador en todo momento es Jonathan López.",
      },

      {
        type: "subheading",
        en: "A. ADVISORY & NEGOTIATION MEMBERSHIPS (one-time payment)",
        es: "A. Membresías de Asesoría y Negociación (pago único)",
      },

      {
        type: "subheading",
        en: "CORPORATE — $1,500 (one-time payment)",
        es: "Corporativa — $1,500 (pago único)",
      },
      {
        type: "list",
        items: [
          {
            en: "Validity: 【TO CONFIRM】",
            es: "Vigencia: 【A CONFIRMAR】",
          },
          {
            en: "Includes the NEO Bot and the Academy.",
            es: "Incluye Bot NEO y Academia.",
          },
          {
            en: "Corporate scope / number of vehicles: 【TO BE DEFINED】",
            es: "Alcance corporativo / número de vehículos: 【A DEFINIR】",
          },
        ],
      },

      {
        type: "subheading",
        en: "FULL MEMBERSHIP (GOLD) — $999 (one-time payment)",
        es: "Membresía Completa (Oro) — $999 (pago único)",
      },
      {
        type: "paragraph",
        en: "Validity: one (1) year. An integrated service that includes:",
        es: "Vigencia: un (1) año. Un servicio integral que incluye:",
      },
      {
        type: "list",
        items: [
          {
            en: "Personalized advisory and real-time negotiation directly with Jonathan López for vehicle purchases. Jonathan accompanies the client during the dealer visit and actively negotiates on their behalf via WhatsApp call, phone call, or WhatsApp written messages.",
            es: "Asesoría personalizada y negociación en tiempo real directamente con Jonathan López para la compra de vehículos. Jonathan acompaña al cliente durante la visita al dealer y negocia activamente en su nombre vía llamada de WhatsApp, llamada telefónica o mensajes escritos de WhatsApp.",
          },
          {
            en: "Five (5) CARFAX reports included to protect the client's purchase.",
            es: "Cinco (5) reportes CARFAX incluidos para la protección de la compra del cliente.",
          },
          {
            en: "Access to the NEO chatbot: the first month is included in the membership payment; from the second month onward it is billed separately at $99.00 per month.",
            es: "Acceso al chatbot NEO: el primer mes está incluido en el pago de la membresía; a partir del segundo mes se cobra por separado a una tarifa de $99.00 mensuales.",
          },
          {
            en: "Access to the Academy.",
            es: "Acceso a la Academia.",
          },
          {
            en: "Required for vehicles whose cost EXCEEDS $30,000.",
            es: "Requerida para vehículos cuyo costo SUPERE los $30,000.",
          },
        ],
      },

      {
        type: "subheading",
        en: "BRONZE — $699 (was $799) (one-time payment)",
        es: "Bronce — $699 (antes $799), pago único",
      },
      {
        type: "paragraph",
        en: "Validity: three (3) months.",
        es: "Vigencia: tres (3) meses.",
      },
      {
        type: "list",
        items: [
          {
            en: "Advisory and negotiation for ONE (1) single vehicle.",
            es: "Asesoría y negociación para UN (1) solo vehículo.",
          },
          {
            en: "Does NOT include the NEO chatbot or the Academy.",
            es: "NO incluye chatbot NEO ni Academia.",
          },
          {
            en: "Only for vehicles whose cost does NOT exceed $30,000.",
            es: "Únicamente para vehículos cuyo costo NO supere los $30,000.",
          },
        ],
      },

      {
        type: "subheading",
        en: "B. NEO CAR ADVISOR CHATBOT — MONTHLY PLANS (subscription)",
        es: "B. Planes Mensuales del Chatbot NEO Car Advisor (suscripción)",
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

      {
        type: "notice",
        en: "The Bronze Membership applies exclusively to vehicles whose cost does not exceed $30,000. If the vehicle exceeds that amount, the client must contract the Full Membership ($999). No exceptions will be made to this limit.",
        es: "La Membresía Bronce aplica exclusivamente a vehículos cuyo costo no supere los $30,000 dólares. Si el vehículo supera ese monto, el cliente deberá contratar la Membresía Completa ($999). No se realizarán excepciones a este límite.",
      },
    ],
  },
  {
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
            en: "Monday through Saturday: 10:30 AM to 9:30 PM (Eastern Time, ET)",
            es: "Lunes a sábado: 10:30 AM a 9:30 PM (hora del este, ET)",
          },
        ],
      },
      {
        type: "paragraph",
        en: "Outside of personalized advisory hours, the client may consult with the NEO Car Advisor chatbot at any time, 24 hours a day, 7 days a week, according to their plan. The chatbot is designed to answer questions about vehicle purchases, proposal analysis, negotiation strategies, and consumer protection, drawing on the same knowledge base as Jonathan López.",
        es: "Fuera del horario de asesoría personalizada, el cliente puede consultar con el chatbot NEO Car Advisor en cualquier momento, las 24 horas del día, los 7 días de la semana, según su plan. El chatbot está diseñado para responder consultas sobre compra de vehículos, análisis de propuestas, estrategias de negociación, y protección del consumidor con la misma base de conocimiento de Jonathan López.",
      },
    ],
  },
  {
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
    titleEn: "Refund & Cancellation Policy",
    titleEs: "Política de reembolsos y cancelaciones",
    blocks: [
      {
        type: "paragraph",
        en: "All payments are final and non-refundable under any circumstances.",
        es: "Todos los pagos son finales y no reembolsables bajo ninguna circunstancia.",
      },
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
        en: "BRONZE MEMBERSHIP ($699)",
        es: "Membresía Bronce ($699)",
      },
      {
        type: "list",
        items: [
          {
            en: "The $699 membership payment is NON-REFUNDABLE.",
            es: "El pago de la membresía de $699 NO ES REEMBOLSABLE.",
          },
          {
            en: "The membership is valid for three (3) months from the date of purchase.",
            es: "La membresía es válida por tres (3) meses a partir de la fecha de compra.",
          },
          {
            en: "It covers a single negotiation.",
            es: "Ampara una sola negociación.",
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
    titleEn: "Chargebacks & Payment Disputes",
    titleEs: "Contracargos y Disputas de Pago",
    blocks: [
      {
        type: "paragraph",
        en: "By accepting these terms, the Client expressly waives the right to initiate chargebacks, disputes, or payment claims ('chargebacks') with their bank, issuing institution, Afterpay, Square, or any payment processor, with respect to the contracted services. This document, together with the payment receipt, constitutes binding and sufficient proof of acceptance of these terms. In the event of a chargeback, Stellantis Group, LLC will present this documentation to the financial institution or payment processor in order to dismiss the claim. Any attempt at a chargeback will be considered a breach of contract, entitling the provider to pursue the corresponding collection and legal actions.",
        es: "Al aceptar estos términos, el Cliente renuncia expresamente a iniciar contracargos, disputas o reclamos de pago ('chargebacks') ante su banco, entidad emisora, Afterpay, Square o cualquier procesador de pagos, respecto de los servicios contratados. El presente documento, junto con el comprobante de pago, constituye prueba vinculante y suficiente de la aceptación de estos términos. En caso de contracargo, Stellantis Group, LLC presentará esta documentación ante la entidad financiera o procesador de pagos para desestimar el reclamo. Todo intento de contracargo se considerará incumplimiento contractual, facultando al proveedor a ejercer las acciones de cobro y legales que correspondan.",
      },
    ],
  },
  {
    titleEn: "Client Responsibility",
    titleEs: "Responsabilidad del Cliente",
    blocks: [
      {
        type: "paragraph",
        en: "The final decision to acquire or not acquire a vehicle rests solely and exclusively with the Client. It is the Client's obligation to notify Jonathan López of any purchase decision before completing it. If the Client decides not to buy the vehicle, for any reason, they will not be entitled to a refund. If the Client acquires the vehicle without prior notification, that decision is their sole responsibility and does not generate a refund. Jonathan López acts as an advisor and negotiator; he is not the owner, seller, or guarantor of the vehicle.",
        es: "La decisión final de adquirir o no un vehículo corresponde única y exclusivamente al Cliente. Es obligación del Cliente notificar a Jonathan López cualquier decisión de compra antes de concretarla. Si el Cliente decide no comprar el vehículo, por cualquier motivo, no tendrá derecho a reembolso. Si el Cliente adquiere el vehículo sin notificar previamente, dicha decisión es de su exclusiva responsabilidad y no genera reembolso. Jonathan López actúa como asesor y negociador; no es propietario, vendedor ni garante del vehículo.",
      },
    ],
  },
  {
    titleEn: "Transferability",
    titleEs: "Transferibilidad",
    blocks: [
      {
        type: "paragraph",
        en: "Memberships, plans, and advisory services are transferable, provided that the original holder notifies Jonathan López in advance of their intention to transfer the membership and identifies the person to whom it will be transferred. Once the transfer is approved and completed, the services become tied exclusively to the new holder and may only be used by them.",
        es: "Las membresías, planes y servicios de asesoría son transferibles, siempre y cuando el titular original notifique a Jonathan López con antelación su intención de transferir la membresía e indique la persona a quien será transferida. Una vez aprobada y concretada la transferencia, los servicios quedan vinculados exclusivamente al nuevo titular y solo pueden ser utilizados por este.",
      },
    ],
  },
  {
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
            en: "They waive the right to initiate chargebacks or payment disputes over the contracted services.",
            es: "Renuncia a iniciar contracargos o disputas de pago sobre los servicios contratados.",
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
              JONATHAN LÓPEZ — AUTOMOTIVE NEGOTIATION STRATEGIST & ADVISORY
            </div>
            <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
              Jonathan López — Estratega de Negociación Automotriz y Asesoría
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
                  Automotive Negotiation Strategist & Advisory
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
                  July 2026
                </div>
                <div className="mt-1 text-[11px] italic tracking-tight text-muted">
                  Julio 2026
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

      {/* ACCEPTANCE BANNER */}
      <section className="border-b border-rule px-6 py-10 md:px-10 md:py-12">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <div className="border border-gold bg-gold/5 p-6 md:p-8">
              <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                — IMPORTANT
              </div>
              <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
                Importante
              </div>
              <p className="mt-5 text-[15px] font-bold leading-[1.6] tracking-tight text-ink md:text-[16px]">
                By making payment for any membership, plan, or service, the
                Client declares that they have read and expressly, voluntarily,
                and irrevocably accepted these terms in their entirety. Payment
                constitutes electronic acceptance of this contract.
              </p>
              <p className="mt-2 text-[12px] italic leading-[1.6] tracking-tight text-muted md:text-[13px]">
                Al realizar el pago de cualquier membresía, plan o servicio, el
                Cliente declara haber leído y aceptado de forma expresa,
                voluntaria e irrevocable la totalidad de estos términos. El pago
                constituye la aceptación electrónica de este contrato.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          {sections.map((sec, sIdx) => {
            const num = String(sIdx + 1).padStart(2, "0");
            return (
              <FadeUp
                key={sIdx}
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
                      {num}
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
            );
          })}

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
                      WHATSAPP
                    </div>
                    <div className="font-mono text-[9px] italic tracking-[0.3em] text-muted">
                      WhatsApp
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
  if (block.type === "notice") {
    return (
      <div className="border border-gold bg-gold/5 p-6 md:p-7">
        <p className="text-[14px] font-bold leading-[1.6] tracking-tight text-ink md:text-[15px]">
          {block.en}
        </p>
        <p className="mt-2 text-[12px] italic leading-[1.6] tracking-tight text-muted md:text-[13px]">
          {block.es}
        </p>
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
