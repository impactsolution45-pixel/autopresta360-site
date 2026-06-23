import type { Metadata } from "next";
import { Rajdhani, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoPresta 360 — L'application de gestion complète pour les pros de l'automobile",
  description:
    "Devis, factures, stock, clients et conformité e-facturation : AutoPresta 360 centralise la gestion des pros de la serrurerie auto, reprogrammation ECU, carrosserie légère, detailing, covering et débosselage sans peinture.",
  metadataBase: new URL("https://autopresta360.fr"),
  verification: {
    google: 'Bot0zOlohYm3RIEnR2oCPjrgpXHvh_BlqOD-Zgvq_WE',
  },
  openGraph: {
    title: "AutoPresta 360",
    description:
      "L'application de gestion complète pour les professionnels de l'automobile.",
    images: ["/images/logo.png"],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
