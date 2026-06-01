import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "Jonathan López · Automotive Negotiation Strategist",
  description:
    "I don't sell cars. I buy them for you. 15 years turning car buying into a structured negotiation — not an improvised transaction.",
  openGraph: {
    title: "Jonathan López · Automotive Negotiation Strategist",
    description: "I don't sell cars. I buy them for you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
