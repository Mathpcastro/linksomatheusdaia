export type LinkItem = {
  index: string;
  name: string;
  description: string;
  href: string;
  domain: string;
  motif: "orbit" | "score" | "archive";
};

export const links: LinkItem[] = [
  {
    index: "01",
    name: "Criando Startup",
    description: "Comunidade para quem está transformando ideias em startups reais.",
    href: "https://criandostartup.com",
    domain: "CRIANDOSTARTUP.COM",
    motif: "orbit",
  },
  {
    index: "02",
    name: "Lumipage",
    description: "Entenda por que seu SaaS não converte em vendas. Receba um score, compare o antes e depois e comece com um teste gratuito.",
    href: "https://www.lumipage.com.br",
    domain: "LUMIPAGE.COM.BR",
    motif: "score",
  },
  {
    index: "03",
    name: "OSetup",
    description: "Tenha acesso ao meu acervo pessoal de IA: skills, plugins, MCPs, ferramentas secretas e um agente para ajudar você a encontrar exatamente o que precisa, quando precisa.",
    href: "https://omatheusdaia.vercel.app",
    domain: "OMATHEUSDAIA.VERCEL.APP",
    motif: "archive",
  },
];
