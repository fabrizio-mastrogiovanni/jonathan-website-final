"use client";

import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";
import { motion } from "framer-motion";

export function Founder() {
  return (
    <section id="founder" className="relative bg-paper">
      <div className="grid grid-cols-12 gap-px bg-rule md:min-h-[90vh]">
        {/* Portrait — left column on desktop */}
        <div className="relative col-span-12 overflow-hidden bg-ink md:col-span-6">
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            <img
              src="/portrait/jonathan.jpg"
              alt="Jonathan López — Automotive Negotiation Strategist"
              className="h-full min-h-[80vh] w-full object-cover md:min-h-[90vh]"
            />
          </motion.div>
          {/* Decorative caption overlay — bottom of photo */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/40 to-transparent p-6 md:p-10">
            <div className="flex items-end justify-between font-mono text-[10px] tracking-[0.3em] text-paper">
              <div>
                <div>JONATHAN LÓPEZ</div>
                <div className="mt-1 font-mono text-[9px] italic text-paper/60">
                  Miami · Florida
                </div>
              </div>
              <div className="text-right">
                <div className="text-gold">EST. 2018</div>
                <div className="mt-1 font-mono text-[9px] italic text-paper/60">
                  Establecido
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Identity / Bio — right column */}
        <div className="col-span-12 flex flex-col justify-center bg-paper px-6 py-20 md:col-span-6 md:px-14 md:py-24 lg:px-20">
          {/* Eyebrow */}
          <FadeUp>
            <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
              — THE MAN BEHIND IT ALL
            </div>
            <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
              El hombre detrás de todo esto
            </div>
          </FadeUp>

          {/* Monogram + Name */}
          <div className="mt-12 flex items-start gap-6 md:mt-16">
            <FadeUp delay={0.1}>
              {/* Monogram badge */}
              <div className="flex h-20 w-20 items-center justify-center border border-gold/40 bg-mist md:h-24 md:w-24">
                <span className="display text-[2.5rem] leading-none text-gold md:text-[3rem]">
                  JL
                </span>
              </div>
            </FadeUp>
            <div className="pt-1">
              <h2 className="display text-[10vw] leading-[0.92] md:text-[4.5vw]">
                <SplitText
                  mode="word"
                  variant="mask"
                  duration={1.0}
                  stagger={0.06}
                >
                  Jonathan López
                </SplitText>
              </h2>
              <div className="mt-2 font-mono text-[10px] tracking-[0.3em] text-gold md:text-[11px]">
                AUTOMOTIVE NEGOTIATION STRATEGIST
              </div>
              <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted md:text-[10px]">
                Estratega de negociación automotriz
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-12 md:mt-16">
            <FadeUp delay={0.2}>
              <p className="display text-[6vw] leading-[1.05] tracking-tight md:text-[2.5vw]">
                <SplitText
                  mode="word"
                  variant="mask"
                  duration={1.0}
                  stagger={0.04}
                >
                  Built inside the dealership.
                </SplitText>
                <br />
                <span className="text-gold">
                  <SplitText
                    mode="word"
                    variant="mask"
                    duration={1.0}
                    stagger={0.04}
                    delay={0.25}
                  >
                    Now working against it — for you.
                  </SplitText>
                </span>
              </p>
            </FadeUp>
            <FadeUp delay={0.5} className="mt-4">
              <p className="text-[3vw] italic leading-[1.2] text-muted md:text-[1.3vw]">
                Formado dentro del dealer. Ahora trabaja en contra de él — por ti.
              </p>
            </FadeUp>
          </div>

          {/* Bio paragraph */}
          <div className="mt-12 max-w-md md:mt-16">
            <FadeUp delay={0.3}>
              <p className="text-[15px] leading-[1.6] tracking-tight text-ink md:text-[16px]">
                I&apos;m the buyer&apos;s advocate the industry never wanted you
                to have. After being named Rookie of the Year at Airport
                Chrysler Dodge Jeep Ram, I walked away from the dealer model to
                represent the only person who matters: <strong>you</strong>.
              </p>
              <p className="mt-4 text-[12px] italic leading-[1.6] tracking-tight text-muted md:text-[13px]">
                Soy el defensor del comprador que la industria nunca quiso que
                tuvieras. Después de ser Novato del Año en Airport Chrysler
                Dodge Jeep Ram, me retiré del modelo tradicional para
                representar a la única persona que importa: tú.
              </p>
            </FadeUp>
          </div>

          {/* Identity stats row */}
          <div className="mt-14 grid grid-cols-3 gap-px bg-rule md:mt-20">
            <IdentityCell value="2009" en="Career start" es="Inicio" />
            <IdentityCell value="2018" en="Miami, FL" es="Miami, FL" />
            <IdentityCell value="2026" en="NEO Negotiator" es="Hoy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function IdentityCell({
  value,
  en,
  es,
}: {
  value: string;
  en: string;
  es: string;
}) {
  return (
    <div className="bg-paper p-4 md:p-6">
      <div className="display text-[7vw] leading-none text-gold md:text-[2vw]">
        {value}
      </div>
      <div className="mt-2 font-mono text-[9px] tracking-[0.3em] text-muted md:text-[10px]">
        {en}
      </div>
      <div className="mt-0.5 font-mono text-[8px] italic tracking-[0.3em] text-muted/70 md:text-[9px]">
        {es}
      </div>
    </div>
  );
}
