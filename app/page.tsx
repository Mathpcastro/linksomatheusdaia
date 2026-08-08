import { Github, Instagram } from "lucide-react";
import { LinkCard } from "@/components/LinkCard";
import { links } from "@/lib/links";

export default function Home() {
  return (
    <main className="site-shell" id="conteudo">
      <section className="profile" aria-labelledby="profile-name">
        <div className="avatar" aria-hidden="true">MD</div>
        <p className="profile-kicker">CRIADOR &amp; FUNDADOR</p>
        <h1 id="profile-name">Matheus Daia</h1>
        <p className="profile-bio">Comunidades, SaaS e produtos práticos de IA.</p>
      </section>

      <section className="links" aria-label="Links de Matheus Daia">
        {links.map((item) => <LinkCard key={item.href} item={item} />)}
      </section>

      <footer>
        <nav aria-label="Redes sociais">
          <a href="https://instagram.com/omatheusdaia" target="_blank" rel="noopener noreferrer">
            <Instagram aria-hidden="true" /> <span>Instagram</span>
          </a>
          <a href="https://github.com/Mathpcastro" target="_blank" rel="noopener noreferrer">
            <Github aria-hidden="true" /> <span>GitHub</span>
          </a>
        </nav>
        <p>© {new Date().getFullYear()} Matheus Daia</p>
      </footer>
    </main>
  );
}
