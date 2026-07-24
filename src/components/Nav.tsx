"use client";

import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 mix-blend-difference"
    >
      <div className="flex items-center justify-between px-6 py-5 text-white md:px-10">
        <a
          href="#top"
          className="flex items-center gap-2 text-[11px] tracking-[0.3em]"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
          JONATHAN LÓPEZ
        </a>
        <nav className="hidden gap-7 text-[11px] tracking-[0.3em] lg:flex">
          <a href="#founder" className="transition-opacity hover:opacity-60">
            ABOUT
          </a>
          <a href="#my-story" className="transition-opacity hover:opacity-60">
            STORY
          </a>
          <a href="#servicios" className="transition-opacity hover:opacity-60">
            SERVICES
          </a>
          <a href="/news" className="transition-opacity hover:opacity-60">
            THE BRIEF
          </a>
          <a
            href="#testimonios"
            className="transition-opacity hover:opacity-60"
          >
            STORIES
          </a>
          <a href="#booking" className="transition-opacity hover:opacity-60">
            BOOKING
          </a>
        </nav>
        <a
          href="#cta"
          className="text-[11px] tracking-[0.3em] transition-opacity hover:opacity-60"
        >
          BOOK →
        </a>
      </div>
    </motion.header>
  );
}
