"use client";

import { SplitText } from "@/components/SplitText";
import { FadeUp } from "@/components/FadeUp";
import { motion } from "framer-motion";

const GOOGLE_REVIEW_URL = "https://share.google/v5tPPVtwOQpA9zpj4";

/* Google "G" logo — inline SVG so it stays within the site's Content Security Policy */
function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex items-center justify-center gap-1.5" aria-label="5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          className="h-7 w-7 md:h-9 md:w-9"
          initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2 + i * 0.1,
            type: "spring",
            stiffness: 260,
            damping: 16,
          }}
          aria-hidden
        >
          <path
            fill="#C9A84C"
            d="M12 2l2.9 6.26L21.8 9.2l-5 4.87 1.18 6.88L12 17.7l-6 3.25L7.2 14.07l-5-4.87 6.9-1.01L12 2z"
          />
        </motion.svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-y border-rule bg-paper"
    >
      <div className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="font-mono text-[10px] tracking-[0.3em] text-gold">
            — REVIEWS
          </div>
          <div className="mt-1 font-mono text-[9px] italic tracking-[0.3em] text-muted">
            Reseñas
          </div>

          {/* Stars */}
          <div className="mt-10">
            <Stars />
          </div>

          {/* Headline */}
          <h2 className="display mt-10 text-[11vw] leading-[0.9] md:text-[5.5vw]">
            <SplitText mode="word" variant="mask" duration={1.0} stagger={0.05}>
              Was it a great
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
                experience?
              </SplitText>
            </span>
          </h2>

          <FadeUp delay={0.6} className="mt-5">
            <p className="text-[3.4vw] italic leading-[1.2] text-muted md:text-[1.5vw]">
              ¿Fue una gran experiencia?
            </p>
          </FadeUp>

          <p className="mx-auto mt-10 max-w-xl text-[15px] leading-[1.55] tracking-tight text-ink md:text-[17px]">
            Your words help other buyers negotiate with confidence. Leave a
            review on Google — it takes less than a minute.
          </p>
          <FadeUp delay={0.7} className="mt-3">
            <p className="mx-auto max-w-xl text-[12px] italic leading-[1.55] tracking-tight text-muted md:text-[13px]">
              Tu opinión ayuda a otros compradores a negociar con confianza.
              Deja una reseña en Google — te toma menos de un minuto.
            </p>
          </FadeUp>

          {/* CTA */}
          <div className="mt-14 flex justify-center">
            <motion.a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group inline-flex items-center gap-4 bg-gold px-10 py-5 text-paper transition-colors duration-300 hover:bg-goldBright"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper">
                <GoogleG className="h-5 w-5" />
              </span>
              <span className="flex flex-col items-start gap-1">
                <span className="font-mono text-[11px] tracking-[0.3em]">
                  LEAVE A GOOGLE REVIEW →
                </span>
                <span className="font-mono text-[9px] italic tracking-[0.3em] opacity-75">
                  Deja tu reseña en Google
                </span>
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
