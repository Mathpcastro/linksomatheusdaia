import { Github, Instagram } from "lucide-react";
import Image from "next/image";
import { LinkCard } from "@/components/LinkCard";
import { links } from "@/lib/links";

export default function Home() {
  return (
    <main className="site-shell" id="conteudo">
      <div className="topline"><span className="topline__mark">m<span>.</span></span><span>MATHEUS CASTRO <i aria-hidden="true">/</i> LINKS</span><span className="topline__edition">PÁGINA OFICIAL</span></div>
      <div className="page-grid">
        <section className="profile" aria-labelledby="profile-name">
          <div className="avatar"><Image src="/matheus.jpg" alt="Foto de Matheus Castro" width={144} height={144} priority /></div>
          <p className="profile-kicker"><span aria-hidden="true" /> CRIADOR, FUNDADOR &amp; COMUNIDADE</p>
          <h1 id="profile-name">Matheus<br /><em>Castro.</em></h1>
          <p className="profile-handle">@omatheusdaia</p>
          <p className="profile-bio">Comunidades, SaaS e produtos práticos de IA.</p>
          <div className="profile-socials" aria-label="Redes sociais">
            <a href="https://instagram.com/omatheusdaia" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Matheus Castro"><Instagram aria-hidden="true" /></a>
            <a href="https://github.com/Mathpcastro" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Matheus Castro"><Github aria-hidden="true" /></a>
          </div>
        </section>

        <section className="links" aria-label="Links de @omatheusdaia">
          <div className="links-heading"><span>ONDE ME ENCONTRAR</span><span>01 — 05</span></div>
          <div className="links-list">{links.map((item) => <LinkCard key={item.href} item={item} />)}</div>
          <p className="links-note">Ideias, ferramentas e pessoas no mesmo lugar. Escolha por onde começar.</p>
        </section>
      </div>
      <footer><span>© {new Date().getFullYear()} MATHEUS CASTRO</span><span>FEITO PARA EXPLORAR ↗</span></footer>
    </main>
  );
}
