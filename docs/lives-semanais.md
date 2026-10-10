# Lives semanais

A primeira landing pública é `/live-edicao-videos-com-ia`. Ela usa o componente
`components/lives/LiveLanding.tsx`, com layout em `LiveLanding.module.css` e
dados em `content/liveEvents.ts`.

## Ativar os botões da primeira live

O horário de 15/10/2026, 20h às 21h (Brasília), o link do grupo e o Meet
informados pelo organizador estão cadastrados em `content/liveEvents.ts`.
Para mudar data ou grupo sem alterar o código, defina no ambiente de execução:

```env
LIVE_EDICAO_VIDEO_IA_START_AT=2026-10-15T20:00:00-03:00
LIVE_EDICAO_VIDEO_IA_END_AT=2026-10-15T21:00:00-03:00
LIVE_EDICAO_VIDEO_IA_WHATSAPP_URL=https://chat.whatsapp.com/SEU_CODIGO_DE_CONVITE
```

O código já contém os valores reais da primeira live; o convite acima é apenas
um exemplo de formato.
O Google Agenda recebe as datas em UTC, com a visualização no fuso de Brasília.
Sem as duas datas válidas, o botão de agenda fica indisponível. Sem um convite
válido de `chat.whatsapp.com`, o botão do grupo também fica indisponível.

## Próximas lives

Crie um novo objeto `LiveEvent` em `content/liveEvents.ts` e uma rota pública
`app/<novo-slug>/page.tsx` que passe esse objeto a `LiveLanding`. Se a pauta
pedir outra sequência de aula ou outras ferramentas, ajuste as seções do
componente para essa edição antes de publicar. Cada rota deve ter título,
descrição e URL canônica próprios.
