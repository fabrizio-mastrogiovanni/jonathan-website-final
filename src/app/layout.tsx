import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "Jonathan López · Estratega de Negociación Automotriz",
  description:
    "Yo no vendo autos, los compro por ti. 15 años convirtiendo la compra de un auto en una negociación estructurada — no una transacción improvisada.",
  openGraph: {
    title: "Jonathan López · Estratega de Negociación Automotriz",
    description: "Yo no vendo autos, los compro por ti.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-paper text-ink antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
