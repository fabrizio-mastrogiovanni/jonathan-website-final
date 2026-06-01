import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // FLIPPED to dark theme for Jonathan brand:
        // `paper` is the page background (now dark), `ink` is the text (warm cream).
        // Components written for `bg-paper text-ink` automatically become dark theme.
        paper: "#0A0908", // warm near-black (page background)
        ink: "#F5EFE3", // warm cream (primary text)
        mist: "#141110", // slightly elevated dark (cards / contrast blocks)
        rule: "#2A241D", // hairline borders on dark bg
        muted: "#8A7E6D", // warm gray for secondary text

        // Jonathan brand accents
        gold: "#C9A84C", // primary accent
        goldBright: "#E0B85A", // hover / highlight
        brown: "#6B4423", // deep leather brown
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        crush: "-0.04em",
      },
      transitionTimingFunction: {
        weblove: "cubic-bezier(0.22, 1, 0.36, 1)",
        snap: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
