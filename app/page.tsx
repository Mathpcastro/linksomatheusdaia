import { Github, Instagram } from "lucide-react";
import { LinkCard } from "@/components/LinkCard";
import { links } from "@/lib/links";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="masthead">
        <a href="#conteudo" className="wordmark">OMATHEUSDAIA</a>
        <span className="status"><i aria-hidden="true" /> CONSTRUINDO NA INTERNET</span>
      </header>
      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">CRIADOR &amp; FUNDADOR — BRASIL</p>
          <h1 id="hero-title">EU CRIO <em>COMUNIDADES,</em><br />SAAS E PRODUTOS<br />PRÁTICOS DE IA.</h1>
          <p className="intro">Projetos para quem está construindo, testando e colocando boas ideias no mundo.</p>
          <span className="hero-mark" aria-hidden="true">↘</span>
        </section>
        <section className="index" aria-label="Projetos de Matheus Daia">
          <div className="section-label"><span>ÍNDICE / 03</span><span>SELECIONE UM DESTINO</span></div>
          {links.map((item) => <LinkCard key={item.href} item={item} />)}
        </section>
      </main>
      <footer>
        <span>© {new Date().getFullYear()} MATHEUS DAIA</span>
        <nav aria-label="Redes sociais">
          <a href="https://instagram.com/omatheusdaia" target="_blank" rel="noopener noreferrer"><Instagram aria-hidden="true" /> Instagram</a>
          <a href="https://github.com/Mathpcastro" target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" /> GitHub</a>
        </nav>
        <span>FEITO ENTRE IDEIAS &amp; CÓDIGO</span>
      </footer>
    </div>
  );
}
