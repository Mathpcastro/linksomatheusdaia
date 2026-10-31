export type LinkItem = {
  name: string;
  description: string;
  href: string;
  logo: "comunidade" | "carrossell" | "setup" | "whatsapp" | "youtube";
  category: string;
};

export const links: LinkItem[] = [
  {
    name: "Lives e Comunidade",
    description: "Encontros semanais, grupo e avisos das próximas lives.",
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
    name: "Setup - 1127 skills sem precisar instalar nenhuma",
    description: "Plugins, MCPs e skills de IA em um só lugar.",
    href: "https://setup.omatheusdaia.com.br/comece",
    logo: "setup",
    category: "FERRAMENTAS DE IA",
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
