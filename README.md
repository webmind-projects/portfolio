# WebMind Solutions — Portfolio

Single-page React experience designed for a dark “cosmic neon” mood with micro animações, modal de projetos e formulário integrado ao Airtable.

## Stack

- React 19 + TypeScript + Vite (rolldown build)
- Tailwind CSS com tema light/dark e presets de animação
- Framer Motion + React Scroll Parallax para interações
- Headless UI para o modal de projetos
- React Hook Form + Airtable API para leads

## Pré-requisitos

- Node.js 18+ (recomendado 20+)
- npm 9+

## Como rodar

```bash
npm install
npm run dev
```

O servidor sobe por padrão em http://localhost:5173. Para build de produção:

```bash
npm run build
npm run preview
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha com os dados reais do Airtable. Enquanto os valores estiverem vazios, o formulário entra em modo _mock_ e apenas simula o envio (também há um aviso no frontend).

```
VITE_AIRTABLE_BASE_ID=
VITE_AIRTABLE_TABLE_NAME=
VITE_AIRTABLE_TOKEN=
```

## Estrutura das seções

1. **Head/Navbar** — logo animado (dark/light), links âncora, toggle de tema e CTA magnético.
2. **Hero** — headline cinética, contadores, CTA duplo e mockup com parallax.
3. **Sobre nós** — cartões “Quem somos / O que fazemos / Localização” + timeline.
4. **Projetos** — grade com três cards, modal detalhado (stack, resultados, depoimento) e botão “Acessar”.
5. **Depoimentos** — faixa infinita com cards, fotos, estrelas douradas e textos curtos.
6. **Contato + CTA** — formulário conectado ao Airtable, badge de disponibilidade, botões de WhatsApp e mapa estilizado.

## Placeholders & TODOs

- Logos e mockups em `src/assets` podem ser trocados por versões finais (arquivos SVG simples).
- Os dados exibidos vêm de `src/data/projects.ts` e `src/data/testimonials.ts` e estão marcados com `// TODO` para substituição futura.
- Ajuste os textos/CTAs diretamente nos componentes quando tiver o copy definitivo.

## Responsividade & Acessibilidade

- Layout 100% responsivo (grid reorganiza para 1 coluna em telas pequenas, navbar ganha menu mobile).
- Focus states visíveis, textos com contraste e botões grandes.
- Modal de projetos usa Headless UI para suporte a teclado/ARIA.

## Scripts úteis

- `npm run dev` – ambiente de desenvolvimento com HMR.
- `npm run build` – build para produção (TS + rolldown vite).
- `npm run preview` – serve o build.
- `npm run lint` – regras ESLint padrão Vite.

Fique à vontade para adaptar os componentes ou adicionar novas seções (FAQ, blog, etc.).
