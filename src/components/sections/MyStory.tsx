"use client";

import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";

interface Chapter {
  year: string;
  titleEn: string;
  titleEs: string;
  bodyEn: string;
  bodyEs: string;
  highlight?: string;
}

const chapters: Chapter[] = [
  {
    year: "2018",
    titleEn: "The Arrival",
    titleEs: "La Llegada",
    bodyEn:
      "I arrived in the United States with nothing but conviction. In Venezuela I had already spent years in the car business — but starting over in a new country meant proving myself all over again, from zero.",
    bodyEs:
      "Llegué a Estados Unidos sin nada más que convicción. En Venezuela ya había pasado años en el car business — pero empezar de nuevo en un país nuevo significaba demostrar mi valía otra vez, desde cero.",
  },
  {
    year: "2018 — 2019",
    titleEn: "Construction by Day, Study by Night",
    titleEs: "Construcción de día, estudio de noche",
    bodyEn:
      "My first year I worked construction, traveling across the entire state of Florida. While my coworkers played PlayStation in the hotel at night, I locked myself in the bathroom to study — preparing for the Florida 215 life insurance license.",
    bodyEs:
      "Mi primer año trabajé en construcción, viajando por todo el estado de Florida. Mientras mis compañeros jugaban PlayStation en el hotel por la noche, yo me encerraba en el baño a estudiar — preparándome para la licencia 215 de seguros de vida.",
    highlight: "Studied in hotel bathrooms after 12-hour construction shifts.",
  },
  {
    year: "2019",
    titleEn: "Five Tries to a License",
    titleEs: "Cinco intentos para una licencia",
    bodyEn:
      "I failed the state exam four times. On the fifth attempt, I passed. I still hold the 215 license today — a reminder that the door eventually opens for whoever refuses to leave.",
    bodyEs:
      "Reprobé el examen estatal cuatro veces. En el quinto intento, lo aprobé. Hoy todavía tengo vigente la licencia 215 — un recordatorio de que la puerta eventualmente se abre para quien se niega a irse.",
    highlight: "Failed 4 times. Passed on the 5th. Never quit.",
  },
  {
    year: "2020",
    titleEn: "The Crossroads",
    titleEs: "La Encrucijada",
    bodyEn:
      "For personal reasons, the insurance career I had fought for never materialized. I entered an extremely delicate financial situation. With my back against the wall, I made the decision to do what I had always known how to do — but had been avoiding: return to the car business.",
    bodyEs:
      "Por razones personales, la carrera en seguros por la que tanto luché nunca se materializó. Entré en una situación financiera extremadamente delicada. Con la espalda contra la pared, tomé la decisión de hacer lo que siempre supe hacer — pero había estado evitando: volver al car business.",
  },
  {
    year: "2020 — 2026",
    titleEn: "Rookie of the Year → Top Salesman",
    titleEs: "Novato del Año → Mejor Vendedor",
    bodyEn:
      "Almost four years at the dealership. First year: named Rookie of the Year. Every year since: top salesman. Today I no longer work for the dealer — I work against the dealer, on the side of the buyer. The cobbler stuck to his shoes.",
    bodyEs:
      "Casi cuatro años en el dealer. Primer año: nombrado Novato del Año. Cada año siguiente: mejor vendedor. Hoy ya no trabajo para el dealer — trabajo en contra del dealer, del lado del comprador. Zapatero a sus zapatos.",
    highlight: "From the dealer's side → to the buyer's side.",
  },
];

export function MyStory() {
  return (
    <section id="my-story" className="relative bg-paper">
      {/* Eyebrow header */}
      <div className="border-b border-rule px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <FadeUp>
              <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                — MY STORY
              </div>
              <div className="mt-1 font-mono text-[10px] italic tracking-[0.3em] text-muted">
                Mi historia
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
                From hotel bathrooms
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
                  to top salesman.
                </SplitText>
              </span>
            </span>
            <FadeUp delay={0.7} className="mt-5">
              <p className="text-[3vw] italic leading-[1.2] tracking-normal text-muted md:text-[1.4vw]">
                De los baños de hotel al mejor vendedor.
              </p>
            </FadeUp>
          </h2>
        </div>
      </div>

      {/* Chapters timeline */}
      <div className="divide-y divide-rule">
        {chapters.map((c, i) => (
          <FadeUp
            key={c.year}
            delay={i * 0.05}
            className="group px-6 py-16 transition-colors duration-500 hover:bg-mist md:px-10 md:py-24"
          >
            <div className="grid grid-cols-12 gap-6">
              {/* Year column */}
              <div className="col-span-12 md:col-span-3">
                <div className="display text-[14vw] leading-none text-gold md:text-[3vw]">
                  {c.year}
                </div>
              </div>

              {/* Title + body column */}
              <div className="col-span-12 md:col-span-9">
                <h3 className="display text-[8vw] leading-[1] md:text-[3.5vw]">
                  {c.titleEn}
                </h3>
                <div className="mt-2 text-[3vw] italic leading-[1.1] text-muted md:text-[1.3vw]">
                  {c.titleEs}
                </div>

                <p className="mt-8 max-w-2xl text-[16px] leading-[1.6] tracking-tight text-ink md:text-[18px]">
                  {c.bodyEn}
                </p>
                <p className="mt-4 max-w-2xl text-[13px] italic leading-[1.6] tracking-tight text-muted md:text-[14px]">
                  {c.bodyEs}
                </p>

                {c.highlight && (
                  <FadeUp delay={0.2} className="mt-8">
                    <div className="inline-flex items-center gap-3 border-l-2 border-gold px-5 py-2">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
                        ★
                      </span>
                      <span className="text-[14px] font-bold italic text-ink md:text-[15px]">
                        {c.highlight}
                      </span>
                    </div>
                  </FadeUp>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Closing pull-quote */}
      <div className="border-t border-rule px-6 py-32 md:px-10 md:py-48">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 font-mono text-[10px] tracking-[0.3em] text-gold md:pt-4">
            ★ PRINCIPLE
            <div className="mt-1 italic text-muted">Principio</div>
          </div>
          <blockquote className="col-span-12 md:col-span-10">
            <p className="display text-[8vw] leading-[1.05] md:text-[3.5vw]">
              <SplitText
                mode="word"
                variant="mask"
                duration={1.0}
                stagger={0.04}
              >
                The door eventually opens
              </SplitText>
              <br />
              <span className="text-gold">
                <SplitText
                  mode="word"
                  variant="mask"
                  duration={1.0}
                  stagger={0.04}
                  delay={0.3}
                >
                  for whoever refuses to leave.
                </SplitText>
              </span>
            </p>
            <FadeUp delay={0.7} className="mt-6">
              <p className="text-[3vw] italic leading-[1.2] text-muted md:text-[1.4vw]">
                La puerta eventualmente se abre para quien se niega a irse.
              </p>
            </FadeUp>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
