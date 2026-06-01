"use client";

import { Marquee } from "@/components/Marquee";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Marquee
        items={[
          "JONATHAN LÓPEZ",
          "ESTRATEGA DE NEGOCIACIÓN AUTOMOTRIZ",
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
          <div className="text-paper/40">CONTACTO</div>
          <div className="mt-2 flex flex-col gap-1.5">
            <a
              href="https://wa.me/13053551234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper transition-colors hover:text-gold"
            >
              WHATSAPP →
            </a>
            <a
              href="https://instagram.com/jonathanlopez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper transition-colors hover:text-gold"
            >
              INSTAGRAM →
            </a>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-paper/40">SERVICIOS</div>
          <div className="mt-2 flex flex-col gap-1.5">
            <a
              href="#servicios"
              className="text-paper transition-colors hover:text-gold"
            >
              ASESORÍA $999.99
            </a>
            <a
              href="#servicios"
              className="text-paper transition-colors hover:text-gold"
            >
              NEO ADVISOR $99/AÑO
            </a>
            <a
              href="#servicios"
              className="text-paper transition-colors hover:text-gold"
            >
              CREDIT REPAIR $99/AÑO
            </a>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-paper/40">UBICACIÓN</div>
          <div className="mt-2">Miami, Florida</div>
          <div className="mt-1 text-paper/60">Est. 2018</div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-paper/40">PROYECTO</div>
          <div className="mt-2">NEO Negotiator</div>
          <div className="mt-1 text-paper/60">AI · Negociación · IA Sintética</div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-paper/15 px-6 py-6 font-mono text-[10px] tracking-[0.3em] text-paper/40 md:px-10">
        <span>© 2026 — JONATHAN LÓPEZ · TODOS LOS DERECHOS RESERVADOS</span>
        <span>v1.0</span>
      </div>
    </footer>
  );
}
