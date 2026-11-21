export type LinkItem = {
  name: string;
  description: string;
  href: string;
  logo: "comunidade" | "carrossell" | "videosell" | "whatsapp" | "youtube";
  category: string;
};

export const links: LinkItem[] = [
  {
    name: "Grupo gratuito de networking",
    description: "Entre no grupo gratuito para trocar ideias e conhecer outras pessoas da área.",
    href: "https://chat.whatsapp.com/Ias5qZF4WjA44yB8qYjxnH",
    logo: "comunidade",
    category: "COMUNIDADE",
  },
  {
    name: "Carrossell - Sua primeira venda do seu SaaS",
    description: "Transforme conteúdo em audiência e vendas.",
    href: "https://carrosseisquevendem.com.br/app/",
    logo: "carrossell",
    category: "APP + MÉTODO",
  },
  {
    name: "Videosell - Reels que vendem seu SaaS",
    description: "Avatares de IA para apresentar e vender seu produto.",
    href: "https://carrosseisquevendem.com.br/videosell",
    logo: "videosell",
    category: "VÍDEOS COM IA",
  },
  {
    name: "Contato para projetos personalizados",
    description: "Fale comigo pelo WhatsApp.",
    href: "https://wa.me/5541992636749",
    logo: "whatsapp",
    category: "CONTATO",
  },
  {
    name: "YouTube",
    description: "Conteúdo gratuito sobre IA.",
    href: "https://youtube.com/@omatheusdaia",
    logo: "youtube",
    category: "CONTEÚDO",
  },
];
