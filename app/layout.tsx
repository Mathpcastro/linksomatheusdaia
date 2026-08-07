import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://linksomatheusdaia.vercel.app"),
  title: "Matheus Daia — Comunidades, SaaS e IA",
  description: "Comunidades, SaaS e produtos práticos de IA criados por Matheus Daia.",
  openGraph: {
    title: "Matheus Daia — Comunidades, SaaS e IA",
    description: "Explore a comunidade e os produtos criados por Matheus Daia.",
    type: "website",
    locale: "pt_BR",
    siteName: "OMATHEUSDAIA",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${anton.variable} ${inter.variable} ${mono.variable}`}><body>{children}</body></html>;
}
