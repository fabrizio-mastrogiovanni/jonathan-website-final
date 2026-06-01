/**
 * Monochrome SVG marks for press credentials.
 * Designed as simple recognizable silhouettes — not exact reproductions —
 * suitable for editorial press-mention contexts.
 */

interface IconProps {
  className?: string;
  size?: number;
}

const defaultClass = "h-8 w-8 text-gold";

export function UnivisionMark({ className = defaultClass, size }: IconProps) {
  // Stylized "U" — Univisión's signature curve
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-label="Univisión"
    >
      <path d="M10 8h6v22a8 8 0 0 0 16 0V8h6v22a14 14 0 1 1-28 0V8z" />
    </svg>
  );
}

export function TelemundoMark({ className = defaultClass, size }: IconProps) {
  // Stylized "T" inside a square — Telemundo's bold mark
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-label="Telemundo"
    >
      <rect x="4" y="4" width="40" height="40" rx="4" fill="currentColor" />
      <path d="M14 16h20v4h-8v16h-4V20h-8z" fill="#0a0908" />
    </svg>
  );
}

export function GuinnessMark({ className = defaultClass, size }: IconProps) {
  // Laurel wreath with star — Guinness World Records emblem
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-label="Guinness World Records"
    >
      <path
        d="M12 22c0-2 1-6 3-9M14 30c-1-2-2-5-2-8M16 36c-2-2-3-4-4-6"
        strokeLinecap="round"
      />
      <path
        d="M36 22c0-2-1-6-3-9M34 30c1-2 2-5 2-8M32 36c2-2 3-4 4-6"
        strokeLinecap="round"
      />
      <path
        d="M24 12l2 5 5 1-4 4 1 5-4-3-4 3 1-5-4-4 5-1z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function DoralMark({ className = defaultClass, size }: IconProps) {
  // Shield with palm — City of Doral seal
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-label="City of Doral"
    >
      <path
        d="M24 6l14 4v14c0 9-6 16-14 18-8-2-14-9-14-18V10l14-4z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <circle cx="24" cy="22" r="3" fill="currentColor" stroke="none" />
      <path
        d="M24 25v8M20 30l4 3 4-3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DocumentaryMark({ className = defaultClass, size }: IconProps) {
  // Film clapper — documentary nominable
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-label="Documental Nominable"
    >
      <rect x="6" y="18" width="36" height="24" rx="2" fillOpacity="0.2" />
      <path d="M6 12l4-4h4l-2 4h4l2-4h4l-2 4h4l2-4h4l-2 4h6l2-4h2v6H6z" />
      <circle cx="24" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M22 27l4 3-4 3z" />
    </svg>
  );
}

export function LeadersMark({ className = defaultClass, size }: IconProps) {
  // Podium with star — Mesa de Líderes
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-label="Mesa de Líderes"
    >
      <path d="M24 6l3 6 6 1-4.5 4.5 1 6L24 21l-5.5 2.5 1-6L15 13l6-1z" />
      <rect x="20" y="26" width="8" height="16" />
      <rect x="8" y="32" width="10" height="10" fillOpacity="0.6" />
      <rect x="30" y="30" width="10" height="12" fillOpacity="0.6" />
    </svg>
  );
}

export interface Credential {
  Icon: (props: IconProps) => JSX.Element;
  en: string;
  es: string;
  context: string;
}

export const credentials: Credential[] = [
  {
    Icon: LeadersMark,
    en: "Leaders Roundtable",
    es: "Mesa de Líderes",
    context: "Featured Panelist",
  },
  {
    Icon: UnivisionMark,
    en: "Univision News Café",
    es: "Univisión News Café",
    context: "TV Appearance",
  },
  {
    Icon: TelemundoMark,
    en: "Telemundo · La Mesa Caliente",
    es: "Telemundo · La Mesa Caliente",
    context: "Featured Guest",
  },
  {
    Icon: GuinnessMark,
    en: "Guinness World Record · Zennit Summit 2026",
    es: "Récord Guinness · Zennit Summit 2026",
    context: "Record Holder",
  },
  {
    Icon: DoralMark,
    en: "Recognized by the City of Doral",
    es: "Reconocido por la Alcaldía del Doral",
    context: "Civic Recognition",
  },
  {
    Icon: DocumentaryMark,
    en: "Documentary Nominee",
    es: "Documental Nominable",
    context: "Featured Subject",
  },
];
