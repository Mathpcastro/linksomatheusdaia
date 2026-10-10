export type LiveEvent = {
  slug: string;
  edition: string;
  title: string;
  description: string;
  calendarTitle: string;
  startsAt: string | null;
  endsAt: string | null;
  whatsappUrl: string | null;
  meetUrl: string | null;
};

const firstLive: LiveEvent = {
  slug: "live-edicao-videos-com-ia",
  edition: "LIVE 01",
  title: "Como editar vídeos com IA usando Claude e Codex",
  description:
    "Uma aula prática para transformar vídeo bruto em conteúdo com motion e montar uma oferta de edição que você pode vender pelo WhatsApp.",
  calendarTitle: "Encontro - Como criar e editar vídeos com IA",
  startsAt: process.env.LIVE_EDICAO_VIDEO_IA_START_AT ?? "2026-10-15T20:00:00-03:00",
  endsAt: process.env.LIVE_EDICAO_VIDEO_IA_END_AT ?? "2026-10-15T21:00:00-03:00",
  whatsappUrl: process.env.LIVE_EDICAO_VIDEO_IA_WHATSAPP_URL ?? "https://chat.whatsapp.com/GUZulMes6MGLTeFXaMoiXe?s=cl&p=i&ilr=4&iam=0",
  meetUrl: "https://meet.google.com/jsa-ihta-jgs",
};

export function getFirstLive(): LiveEvent {
  return firstLive;
}

export function getLiveSchedule(live: LiveEvent) {
  if (!live.startsAt || !live.endsAt) return null;

  const start = new Date(live.startsAt);
  const end = new Date(live.endsAt);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start) {
    return null;
  }

  const date = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(start);
  const time = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
  }).format(start);
  const shortDate = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
  }).format(start);

  const calendarDate = (value: Date) =>
    value.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: live.calendarTitle,
    dates: `${calendarDate(start)}/${calendarDate(end)}`,
    details: `${live.description}\n\nEntrar na transmissão: ${live.meetUrl ?? `https://omatheusdaia.com.br/${live.slug}`}\nGrupo da live: ${live.whatsappUrl ?? "Acesse a página da live"}\nDetalhes: https://omatheusdaia.com.br/${live.slug}`,
    location: live.meetUrl ?? `https://omatheusdaia.com.br/${live.slug}`,
    ctz: "America/Sao_Paulo",
  });

  return {
    date,
    shortDate,
    time,
    calendarUrl: `https://calendar.google.com/calendar/render?${params.toString()}`,
  };
}

export function getWhatsAppUrl(live: LiveEvent) {
  if (!live.whatsappUrl) return null;
  try {
    const url = new URL(live.whatsappUrl);
    if (url.protocol !== "https:" || url.hostname !== "chat.whatsapp.com") return null;
    return url.toString();
  } catch {
    return null;
  }
}
