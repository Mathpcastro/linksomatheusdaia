import Image from "next/image";
import type { LiveEvent } from "@/content/liveEvents";
import { getLiveSchedule, getWhatsAppUrl } from "@/content/liveEvents";
import styles from "./LiveLanding.module.css";

const workflow = [
  {
    number: "01",
    title: "Do vídeo bruto ao corte",
    text: "Transcrever, selecionar os melhores trechos e organizar uma edição com Claude ou Codex.",
  },
  {
    number: "02",
    title: "Motion que melhora a mensagem",
    text: "Criar telas, textos animados e transições com Remotion para deixar o vídeo mais claro e vendável.",
  },
  {
    number: "03",
    title: "Da entrega à oferta",
    text: "Empacotar o serviço, mostrar exemplos e desenhar um anúncio que leva a conversa para o WhatsApp.",
  },
];

const tools = [
  {
    name: "Claude ou Codex",
    role: "Seu parceiro de edição",
    detail: "Você descreve a intenção; o agente ajuda a organizar cortes, ajustes e código.",
    url: null,
  },
  {
    name: "video-use",
    role: "Fluxo de edição com agente",
    detail: "Projeto open source do Browser Use para trabalhar com vídeos a partir de instruções em conversa.",
    url: "https://github.com/browser-use/video-use",
  },
  {
    name: "ElevenLabs ou Whisper local",
    role: "Transcrição",
    detail: "Duas opções para transformar fala em texto e localizar os trechos importantes.",
    url: "https://elevenlabs.io/docs/overview/capabilities/speech-to-text/",
    urlLabel: "ElevenLabs",
  },
  {
    name: "Remotion",
    role: "Motion em código",
    detail: "Animações, composição de cenas e elementos visuais programados com React.",
    url: "https://www.remotion.dev/docs/",
  },
  {
    name: "Higgsfield",
    role: "Caminho opcional",
    detail: "Uma alternativa para gerar ou editar cenas com IA em uma interface visual.",
    url: "https://higgsfield.ai/create/motion-control",
  },
];

export default function LiveLanding({ live }: { live: LiveEvent }) {
  const schedule = getLiveSchedule(live);
  const whatsappUrl = getWhatsAppUrl(live);

  const eventJsonLd = schedule
    ? {
        "@context": "https://schema.org",
        "@type": "Event",
        name: live.title,
        description: live.description,
        startDate: live.startsAt,
        endDate: live.endsAt,
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "VirtualLocation",
          url: live.meetUrl ?? `https://omatheusdaia.com.br/${live.slug}`,
        },
        organizer: {
          "@type": "Person",
          name: "Matheus Castro",
          url: "https://omatheusdaia.com.br",
        },
      }
    : null;

  return (
    <main className={styles.page} data-live-landing>
      {eventJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd).replace(/</g, "\\u003c") }}
        />
      )}

      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="Matheus Castro — início">
          <span className={styles.brandMark}>MC<span>.</span></span>
          <span className={styles.brandName}>MATHEUS CASTRO <small>/ LIVES</small></span>
        </a>
        <nav className={styles.nav} aria-label="Navegação da página">
          <a href="#o-que-vai-aprender">O que você vai aprender</a>
          <a href="#ferramentas">Ferramentas</a>
        </nav>
        <a className={styles.headerCta} href="#participar">Participar <span aria-hidden="true">↗</span></a>
      </header>

      <section className={styles.hero} aria-labelledby="live-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span className={styles.liveDot} /> {live.edition} · {schedule ? `${schedule.shortDate} ÀS ${schedule.time} · BRASÍLIA` : "AULA AO VIVO"}</p>
            <h1 id="live-title">Edite vídeos com IA. <em>Transforme isso em uma oferta.</em></h1>
            <p className={styles.heroLead}>
              Use Claude ou Codex para sair do vídeo bruto, criar motion e montar um serviço que você pode vender com anúncios levando clientes para o WhatsApp.
            </p>
            <div className={styles.heroActions}>
              {whatsappUrl ? (
                <a className={styles.primaryButton} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Entrar no grupo da live <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className={`${styles.primaryButton} ${styles.disabledButton}`} aria-disabled="true">
                  Link do grupo em breve <span aria-hidden="true">↗</span>
                </span>
              )}
              {schedule ? (
                <a className={styles.calendarButton} href={schedule.calendarUrl} target="_blank" rel="noopener noreferrer">
                  <CalendarIcon /> Adicionar ao Google Agenda
                </a>
              ) : (
                <span className={`${styles.calendarButton} ${styles.disabledCalendar}`} aria-disabled="true">
                  <CalendarIcon /> Data em definição
                </span>
              )}
            </div>
            <p className={styles.heroNote}>No grupo: aviso da transmissão, lembretes e espaço para trocar ideias sobre a aula.</p>
          </div>

          <div className={styles.heroVisual} aria-label="Apresentação da live com Matheus Castro">
            <div className={styles.visualTop}><span>ESTÚDIO / AO VIVO</span><span>{live.edition}</span></div>
            <div className={styles.portraitWrap}>
              <Image src="/matheus.jpg" alt="Matheus Castro, apresentador da live" fill priority sizes="(max-width: 760px) 70vw, 420px" className={styles.portrait} />
              <div className={styles.portraitCaption}>MATHEUS<br />CASTRO<span>.</span></div>
            </div>
            <div className={styles.visualBottom}>
              <span>VÍDEO BRUTO</span><b>→</b><span>CORTE + MOTION</span><b>→</b><span>OFERTA</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.ticker} aria-hidden="true">
        <div>EDIÇÃO COM IA <span>✳</span> MOTION DESIGN <span>✳</span> OFERTA DE SERVIÇO <span>✳</span> TRÁFEGO PARA WHATSAPP <span>✳</span></div>
      </div>

      <section id="o-que-vai-aprender" className={styles.section}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>O QUE VAI ROLAR</p>
          <h2>Uma live para aprender a fazer <em>e a vender.</em></h2>
          <p>Vamos construir um processo de edição que você consegue repetir e transformar em uma oferta clara para negócios e criadores.</p>
        </div>
        <div className={styles.workflow}>
          {workflow.map((step) => (
            <div className={styles.workflowRow} key={step.number}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.offerSection}>
        <div className={styles.offerInner}>
          <p className={styles.kicker}>A IDEIA DE NEGÓCIO</p>
          <h2>O vídeo é a entrega.<br /><em>A oferta é o que abre a conversa.</em></h2>
          <div className={styles.offerColumns}>
            <p>Você vai ver como transformar uma edição com cortes, legendas e motion em um serviço com escopo e resultado visual fáceis de explicar.</p>
            <p>Depois, como apresentar esse serviço em um anúncio com chamada para WhatsApp e conduzir a primeira conversa comercial — sem prometer faturamento automático.</p>
          </div>
          <div className={styles.offerFlow} aria-label="Caminho da oferta">
            <span>EXEMPLO DE VÍDEO</span><span aria-hidden="true">→</span><span>OFERTA CLARA</span><span aria-hidden="true">→</span><span>ANÚNCIO</span><span aria-hidden="true">→</span><span>CONVERSA NO WHATSAPP</span>
          </div>
        </div>
      </section>

      <section id="ferramentas" className={styles.section}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>STACK DA AULA</p>
          <h2>As ferramentas <em>no fluxo certo.</em></h2>
          <p>Você vai entender o papel de cada uma e quando faz sentido escolher uma alternativa.</p>
        </div>
        <div className={styles.toolList}>
          {tools.map((tool) => (
            <div className={styles.toolRow} key={tool.name}>
              <div><span className={styles.toolRole}>{tool.role}</span><h3>{tool.name}</h3></div>
              <p>{tool.detail}</p>
              {tool.url && <a href={tool.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${"urlLabel" in tool ? tool.urlLabel : tool.name} no site oficial`}>↗</a>}
            </div>
          ))}
        </div>
        <p className={styles.toolFootnote}><a href="https://github.com/openai/whisper" target="_blank" rel="noopener noreferrer">Whisper local ↗</a> é uma alternativa de transcrição. Higgsfield entra como opção para geração e edição de cenas, não como substituto obrigatório do fluxo.</p>
      </section>

      <section id="participar" className={styles.finalCta}>
        <div className={styles.finalInner}>
          <div>
            <p className={styles.kicker}>{schedule ? `${schedule.date.toUpperCase()} · ${schedule.time} (BRASÍLIA)` : "DATA E HORÁRIO EM BREVE"}</p>
            <h2>Quer acompanhar <em>ao vivo?</em></h2>
            <p>Entre no grupo para receber o acesso à transmissão e continuar a conversa com quem também quer produzir e vender vídeos com IA.</p>
          </div>
          <div className={styles.finalActions}>
            {whatsappUrl ? (
              <a className={styles.primaryButton} href={whatsappUrl} target="_blank" rel="noopener noreferrer">Entrar no grupo da live <span aria-hidden="true">↗</span></a>
            ) : (
              <span className={`${styles.primaryButton} ${styles.disabledButton}`} aria-disabled="true">Link do grupo em breve <span aria-hidden="true">↗</span></span>
            )}
            {schedule && <a className={styles.finalCalendar} href={schedule.calendarUrl} target="_blank" rel="noopener noreferrer"><CalendarIcon /> Adicionar ao Google Agenda</a>}
          </div>
        </div>
      </section>
      <footer className={styles.footer}><span>MATHEUS CASTRO / LIVES</span><span>Uma aula por vez. Uma habilidade para aplicar.</span></footer>
    </main>
  );
}

function CalendarIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}
