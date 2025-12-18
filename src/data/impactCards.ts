export type ImpactCard = {
  id: string
  title: string
  copy: string
  icon: string
}

export const impactCards: ImpactCard[] = [
  {
    id: 'impact-clients',
    title: 'Atrai clientes prontos para comprar',
    copy: 'Conteúdos claros e chamadas estratégicas qualificam leads antes mesmo do primeiro contato.',
    icon: 'users',
  },
  {
    id: 'impact-sales',
    title: 'Escala suas vendas',
    copy: 'Fluxos de conversão, provas sociais e ofertas sempre disponíveis funcionam como seu melhor vendedor.',
    icon: 'handshake',
  },
  {
    id: 'impact-visibility',
    title: 'Amplia a visibilidade da marca',
    copy: 'Performance, SEO e conteúdo alinhado posicionam sua empresa onde o público pesquisa.',
    icon: 'radar',
  },
  {
    id: 'impact-google',
    title: 'É encontrado no Google',
    copy: 'Estruturamos páginas com boas práticas técnicas e de conteúdo para aparecer nas buscas certas.',
    icon: 'search',
  },
  {
    id: 'impact-insights',
    title: 'Entende melhor o público-alvo',
    copy: 'Dashboards e eventos monitorados revelam o comportamento real de quem visita seu site.',
    icon: 'target',
  },
  {
    id: 'impact-email',
    title: 'Profissionaliza canais e e-mails',
    copy: 'Domínio próprio e caixas corporativas reforçam autoridade em propostas, contratos e suporte.',
    icon: 'mail',
  },
  {
    id: 'impact-exposure',
    title: 'Marca ativa 24/7',
    copy: 'Seu site segue apresentando ofertas enquanto a equipe dorme, sem depender do algoritmo das redes.',
    icon: 'clock',
  },
  {
    id: 'impact-independence',
    title: 'Menos dependência de redes sociais',
    copy: 'Você passa a ter um ativo próprio para captar leads, vender e nutrir relacionamento de forma previsível.',
    icon: 'shield',
  },
]
