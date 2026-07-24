"use client";

import { Marquee } from "@/components/Marquee";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Marquee
        items={[
          "JONATHAN LÓPEZ",
          "AUTOMOTIVE NEGOTIATION STRATEGIST",
          "MIAMI · FLORIDA",
          "EST. 2018",
          "NEO NEGOTIATOR",
        ]}
        speed={60}
        className="border-y border-paper/15 py-8"
        itemClassName="text-paper"
      />
      <div className="grid grid-cols-12 gap-6 px-6 py-16 text-[11px] tracking-[0.3em] md:px-10">
        <div className="col-span-6 md:col-span-3">
          <div className="text-paper/40">CONTACT</div>
          <div className="font-mono text-[9px] italic tracking-[0.3em] text-paper/30">
            Contacto
          </div>
          <div className="mt-3 flex flex-col gap-1.5">
            <a
              href="https://wa.me/13053551234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper transition-colors hover:text-gold"
            >
              WHATSAPP →
            </a>
            <a
              href="https://www.instagram.com/byjonathanlopez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper transition-colors hover:text-gold"
            >
              INSTAGRAM →
            </a>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-paper/40">SERVICES</div>
          <div className="font-mono text-[9px] italic tracking-[0.3em] text-paper/30">
            Servicios
          </div>
          <div className="mt-3 flex flex-col gap-1.5">
            <a
              href="https://square.link/u/o2e9grla?src=sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper transition-colors hover:text-gold"
            >
              ADVISORY $999.99
            </a>
            <a
              href="https://neo.jonathanlopez.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper transition-colors hover:text-gold"
            >
              NEO ADVISOR $99/YR
            </a>
            <a
              href="/news"
              className="text-paper transition-colors hover:text-gold"
            >
              THE BRIEF · NEWS
            </a>
            <a
              href="/coming-soon"
              className="text-paper transition-colors hover:text-gold"
            >
              CREDIT REPAIR · SOON
            </a>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-paper/40">LOCATION</div>
          <div className="font-mono text-[9px] italic tracking-[0.3em] text-paper/30">
            Ubicación
          </div>
          <div className="mt-3">Miami, Florida</div>
          <div className="mt-1 text-paper/60">Established 2018</div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-paper/40">PROJECT</div>
          <div className="font-mono text-[9px] italic tracking-[0.3em] text-paper/30">
            Proyecto
          </div>
          <div className="mt-3">NEO Negotiator</div>
          <div className="mt-1 text-paper/60">AI · Synthetic Negotiation</div>
        </div>
      </div>
      {/* Legal row — links to terms pages */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-paper/15 px-6 py-5 font-mono text-[10px] tracking-[0.3em] text-paper/50 md:px-10">
        <a
          href="/terms"
          className="transition-colors hover:text-gold"
        >
          PRIVACY & CONSENT
          <span className="ml-1.5 italic opacity-60">
            Privacidad y consentimiento
          </span>
        </a>
        <span className="text-paper/20">·</span>
        <a
          href="/membership-terms"
          className="transition-colors hover:text-gold"
        >
          MEMBERSHIP TERMS
          <span className="ml-1.5 italic opacity-60">
            Términos de membresía
          </span>
        </a>
      </div>

      <div className="flex flex-col items-center justify-between gap-1 border-t border-paper/15 px-6 py-6 font-mono text-[10px] tracking-[0.3em] text-paper/40 md:flex-row md:px-10">
        <span>© 2026 — JONATHAN LÓPEZ · ALL RIGHTS RESERVED</span>
        <span className="text-paper/30 italic">
          Todos los derechos reservados · v1.2
        </span>
      </div>
    </footer>
  );
}
