/** @type {import('next').NextConfig} */

// Content Security Policy — this is a fully static marketing site.
// All external destinations (Square, WhatsApp, Instagram, NEO, Forbes) are
// plain links (navigations), not embedded scripts or iframes, so the policy
// can stay tight. 'unsafe-inline' is required for Next.js hydration scripts
// and Framer Motion's inline styles.
const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Force HTTPS for 2 years, including subdomains.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Block the site from being embedded in an iframe (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Stop browsers from MIME-sniffing responses.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Limit how much referrer info is shared with other sites.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable powerful browser features the site doesn't use.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // hide "X-Powered-By: Next.js"
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
