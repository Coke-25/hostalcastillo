import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hostal Castillo | San José de la Rinconada",
  description:
    "Hostal familiar en Avda. Malecón, 6, San José de la Rinconada, a la entrada desde Sevilla por la carretera de Brenes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
