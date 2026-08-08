import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://linksomatheusdaia.vercel.app"),
  title: "@omatheusdaia - Links",
  description: "Links oficiais de @omatheusdaia: conteúdo gratuito, comunidades, SaaS e produtos de IA.",
  openGraph: {
    title: "@omatheusdaia - Links",
    description: "Links oficiais de @omatheusdaia: conteúdo gratuito, comunidades, SaaS e produtos de IA.",
    type: "website",
    locale: "pt_BR",
    siteName: "@omatheusdaia - Links",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${anton.variable} ${inter.variable} ${mono.variable}`}><body>{children}</body></html>;
}
