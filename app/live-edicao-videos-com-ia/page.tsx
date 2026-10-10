import type { Metadata } from "next";
import LiveLanding from "@/components/lives/LiveLanding";
import { getFirstLive } from "@/content/liveEvents";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Live: edite vídeos com IA e crie uma oferta para vender | Matheus Castro",
  description:
    "Aprenda ao vivo a editar vídeos com Claude e Codex, criar motion com Remotion e estruturar uma oferta de vídeos para vender pelo WhatsApp.",
  alternates: { canonical: "https://omatheusdaia.com.br/live-edicao-videos-com-ia" },
  openGraph: {
    title: "Live: como editar vídeos com IA usando Claude e Codex",
    description:
      "Da edição com IA à oferta de vídeos com motion para vender pelo WhatsApp.",
    url: "https://omatheusdaia.com.br/live-edicao-videos-com-ia",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function LiveEdicaoVideosComIaPage() {
  return <LiveLanding live={getFirstLive()} />;
}
