"use client";

import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";
import { motion } from "framer-motion";

export function Booking() {
  return (
    <section id="booking" className="relative bg-ink text-paper">
      <div className="px-6 py-32 md:px-10 md:py-48">
        <div className="grid grid-cols-12 gap-6">
          {/* Eyebrow column */}
          <div className="col-span-12 md:col-span-4">
            <FadeUp>
              <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                — SPEAKING & BOOKINGS
              </div>
              <div className="mt-1 font-mono text-[10px] italic tracking-[0.3em] text-paper/50">
                Conferencias y contrataciones
              </div>
            </FadeUp>
          </div>

          {/* Headline */}
          <div className="col-span-12 md:col-span-8">
            <h2 className="display text-[10vw] leading-[0.9] md:text-[5.5vw]">
              <SplitText
                mode="word"
                variant="mask"
                duration={1.0}
                stagger={0.05}
              >
                Bring him to your
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
                  next conference.
                </SplitText>
              </span>
            </h2>
            <FadeUp delay={0.7} className="mt-5">
              <p className="text-[3vw] italic leading-[1.2] tracking-normal text-paper/55 md:text-[1.4vw]">
                Llévalo a tu próxima conferencia.
              </p>
            </FadeUp>

            <FadeUp delay={0.9} className="mt-12 max-w-2xl">
              <p className="text-[16px] leading-[1.6] tracking-tight text-paper/85 md:text-[18px]">
                For conferences, speaking engagements, media appearances,
                interviews, or any professional collaboration, please contact
                Jonathan&apos;s exclusive PR representative.
              </p>
              <p className="mt-4 text-[13px] italic leading-[1.6] tracking-tight text-paper/55 md:text-[14px]">
                Para conferencias, ponencias, apariciones en medios, entrevistas
                o cualquier colaboración profesional, por favor contacta a la
                representante de PR exclusiva de Jonathan.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Contact card */}
        <FadeUp delay={1.0} className="mt-20 md:mt-28">
          <div className="grid grid-cols-12 gap-px border border-paper/15 bg-paper/15">
            {/* PR identity */}
            <div className="col-span-12 bg-ink p-10 md:col-span-5 md:p-14">
              <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
                EXCLUSIVE PR REPRESENTATIVE
              </div>
              <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-paper/50">
                Representante de PR exclusiva
              </div>

              <div className="mt-10 flex items-start gap-5">
                {/* Initials badge */}
                <div className="flex h-16 w-16 items-center justify-center border border-gold/40 bg-paper/5">
                  <span className="display text-[1.5rem] leading-none text-gold">
                    DB
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="display text-[2.4rem] leading-[1] md:text-[2.8rem]">
                    Delia Barroso
                  </h3>
                  <div className="mt-2 font-mono text-[10px] tracking-[0.3em] text-paper/60">
                    ORBON ENTERPRISE
                  </div>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="col-span-12 bg-ink p-10 md:col-span-7 md:p-14">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Phone */}
                <div>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-paper/40">
                    PHONE
                  </div>
                  <div className="font-mono text-[9px] italic tracking-[0.3em] text-paper/30">
                    Teléfono
                  </div>
                  <motion.a
                    href="tel:+17873979148"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mt-4 block text-[1.5rem] font-bold tracking-tight text-paper transition-colors hover:text-gold md:text-[1.75rem]"
                  >
                    +1 (787) 397-9148
                  </motion.a>
                </div>

                {/* Email */}
                <div>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-paper/40">
                    EMAIL
                  </div>
                  <div className="font-mono text-[9px] italic tracking-[0.3em] text-paper/30">
                    Correo electrónico
                  </div>
                  <motion.a
                    href="mailto:info@orbonenterprise.com"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mt-4 block break-all text-[1.1rem] font-bold tracking-tight text-paper transition-colors hover:text-gold md:text-[1.25rem]"
                  >
                    info@orbonenterprise.com
                  </motion.a>
                </div>
              </div>

              <div className="mt-12 border-t border-paper/15 pt-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-[13px] leading-[1.5] tracking-tight text-paper/70 md:text-[14px]">
                      All booking inquiries are handled directly by Delia.
                    </p>
                    <p className="mt-1 text-[11px] italic leading-[1.5] tracking-tight text-paper/45 md:text-[12px]">
                      Todas las solicitudes de contratación las maneja Delia
                      directamente.
                    </p>
                  </div>
                  <motion.a
                    href="mailto:info@orbonenterprise.com?subject=Booking Inquiry — Jonathan López"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="inline-flex flex-shrink-0 flex-col items-center gap-1 bg-gold px-7 py-4 text-ink transition-colors hover:bg-goldBright"
                  >
                    <span className="font-mono text-[11px] tracking-[0.3em]">
                      SEND INQUIRY →
                    </span>
                    <span className="font-mono text-[9px] italic tracking-[0.3em] opacity-75">
                      Enviar solicitud
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
