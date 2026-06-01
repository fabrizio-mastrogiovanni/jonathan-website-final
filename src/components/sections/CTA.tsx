"use client";

import { SplitText } from "@/components/SplitText";
import { Marquee } from "@/components/Marquee";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="cta" className="relative bg-paper">
      <div className="border-y border-rule py-6">
        <Marquee
          items={[
            "RESERVA HOY",
            "CUPOS LIMITADOS",
            "DEL LADO DEL COMPRADOR",
            "MIAMI · FLORIDA",
          ]}
          speed={45}
          reverse
          itemClassName="font-bold"
        />
      </div>

      <div className="px-6 py-32 md:px-10 md:py-48">
        <div className="text-center">
          <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
            — COMIENZA HOY
          </div>
          <h2 className="display mt-8 text-[12vw] leading-[0.88] md:text-[7vw]">
            <SplitText mode="word" variant="mask" duration={1.0} stagger={0.05}>
              Tu próximo capítulo
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
                comienza aquí.
              </SplitText>
            </span>
          </h2>
          <p className="mx-auto mt-10 max-w-xl text-[15px] leading-[1.55] tracking-tight text-muted md:text-[17px]">
            <SplitText mode="word" variant="rise" duration={0.8} stagger={0.04}>
              Únete a un grupo selecto de clientes que experimentan la
              adquisición automotriz en su más alto nivel.
            </SplitText>
          </p>
        </div>

        {/* Guarantees row */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-px border-y border-rule bg-rule md:grid-cols-3">
          <Guarantee value="48h" label="RESPUESTA GARANTIZADA" />
          <Guarantee value="1:1" label="ATENCIÓN PERSONAL" />
          <Guarantee value="100%" label="DEL LADO DEL COMPRADOR" />
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <motion.a
            href="https://wa.me/13053551234"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group inline-flex items-center gap-3 bg-gold px-10 py-6 font-mono text-[11px] tracking-[0.3em] text-paper transition-colors duration-300 hover:bg-goldBright"
          >
            <span>RESERVAR ASESORÍA — $999.99</span>
            <motion.span
              aria-hidden
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group inline-flex items-center gap-3 border border-ink/30 px-10 py-6 font-mono text-[11px] tracking-[0.3em] text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            <span>NEO ADVISOR — $99/AÑO</span>
            <motion.span
              aria-hidden
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
        </div>

        <div className="mt-10 flex justify-center font-mono text-[10px] tracking-[0.3em] text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#25D366]" />
            CUPOS LIMITADOS ESTE MES
          </span>
        </div>
      </div>
    </section>
  );
}

function Guarantee({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-paper p-8 text-center md:p-12">
      <div className="display text-[14vw] leading-none text-gold md:text-[5vw]">
        {value}
      </div>
      <div className="mt-4 font-mono text-[10px] tracking-[0.3em] text-muted">
        {label}
      </div>
    </div>
  );
}
