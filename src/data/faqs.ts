export type FAQItem = {
  id: string
  question: string
  answer: string
  bullets?: Array<{ title: string; description: string }>
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-importance',
    question: 'Qual a importância de um site para minha empresa?',
    answer:
      'Tratamos o site como uma filial digital: ele apresenta sua proposta com clareza, gera leads enquanto a equipe descansa e reforça a autoridade da marca em todas as interações.',
  },
  {
    id: 'faq-costs',
    question: 'Quais custos recorrentes preciso considerar para manter um site ativo?',
    answer:
      'Os investimentos são previsíveis e baixos quando comparados ao retorno. Durante o projeto auxiliamos na escolha das melhores opções e monitoramos o consumo para evitar surpresas.',
    bullets: [
      {
        title: 'Domínio',
        description: 'Endereço exclusivo do seu site. A renovação anual fica em torno de R$ 40 e garante que ninguém utilize o mesmo nome.',
      },
      {
        title: 'Hospedagem',
        description:
          'Serviço que mantém o site no ar 24/7. Começamos em provedores gratuitos e migramos para planos pagos apenas quando o tráfego realmente justificar.',
      },
      {
        title: 'Certificado SSL e e-mail',
        description:
          'Incluímos certificados e caixas de e-mail profissionais nos pacotes de hospedagem recomendados, evitando taxas extras desnecessárias.',
      },
    ],
  },
  {
    id: 'faq-google',
    question: 'Meu site vai aparecer no Google?',
    answer:
      'Sim. Toda a arquitetura é pensada para SEO técnico, conteúdo escaneável e velocidade. Trabalhamos para entregar a melhor pontuação possível e facilitar que você figure entre as primeiras posições, mas reforçamos que o topo do Google depende de atualizações constantes do algoritmo e de um trabalho contínuo de conteúdo e autoridade.',
  },
  {
    id: 'faq-types',
    question: 'Qual a diferença entre site institucional, landing page, e-commerce, portal e blog?',
    answer: 'Cada formato atende a um objetivo e podemos combinar módulos sempre que fizer sentido.',
    bullets: [
      {
        title: 'Site institucional',
        description:
          'Apresenta a empresa, destaca diferenciais, cases e direciona o visitante para leads qualificados, reuniões ou pontos físicos.',
      },
      {
        title: 'Landing page (LP)',
        description:
          'Páginas únicas focadas em conversão imediata, ideais para campanhas, lançamentos ou captação de contatos com oferta específica.',
      },
      {
        title: 'E-commerce',
        description:
          'Inclui catálogo, carrinho, meios de pagamento e integração logística para vender diretamente on-line com rastreabilidade.',
      },
      {
        title: 'Portal ou plataforma',
        description:
          'Organiza grande volume de dados, permissões e buscas avançadas (imobiliárias, marketplaces, comunidades).',
      },
      {
        title: 'Blog e hub de conteúdo',
        description:
          'Publicações periódicas para educar a audiência, nutrir SEO e sustentar campanhas de mídia e e-mail.',
      },
    ],
  },
  {
    id: 'faq-pricing',
    question: 'Quanto custa para desenvolver um site?',
    answer:
      'O investimento varia conforme escopo, integrações e prazos. Projetos institucionais começam em valores acessíveis e podem retornar até 10x o aporte quando alinhados a estratégias de marketing e vendas. Sempre apresentamos uma proposta detalhada com fases, entregáveis e formas de pagamento.',
  },
  {
    id: 'faq-domain-registry',
    question: 'O que é registro de domínio?',
    answer:
      'É o ato de reservar legalmente o nome do seu site em órgãos como Registro.br ou ICANN. Realizamos o processo em seu nome, configuramos DNS, protegemos dados e mantemos lembretes de renovação para que o endereço nunca fique indisponível.',
  },
  {
    id: 'faq-domain-choice',
    question: 'Como escolher o melhor domínio?',
    answer:
      'Prefira nomes curtos, fáceis de pronunciar e diretamente ligados à sua marca ou serviço principal. Validamos disponibilidade, variações com e sem acentos e sugerimos registrar extensões estratégicas (.com, .com.br, .io) para impedir cópias.',
  },
  {
    id: 'faq-email',
    question: 'O que é e-mail profissional?',
    answer:
      'São caixas como contato@suaempresa.com.br hospedadas no mesmo domínio do site. Elas reforçam credibilidade, facilitam autenticação em campanhas e possibilitam organizar caixas setoriais (financeiro@, suporte@) com backups automáticos.',
  },
  {
    id: 'faq-seo',
    question: 'O que é SEO e por que ele importa?',
    answer:
      'Search Engine Optimization é o conjunto de ajustes técnicos e de conteúdo que ajuda mecanismos de busca a indicar seu site para as palavras-chave certas. Cumprimos boas práticas de estrutura, semântica e performance desde o início para acelerar resultados orgânicos.',
  },
  {
    id: 'faq-process',
    question: 'Quanto tempo leva e como funciona o processo?',
    answer:
      'Trabalhamos em sprints curtos com checkpoints semanais para manter você no controle.',
    bullets: [
      { title: '1. Diagnóstico', description: 'Mapeamento de objetivos, público e integrações (1 a 2 dias úteis).' },
      { title: '2. Estratégia e UX', description: 'Arquitetura, copy e protótipo navegável para aprovação (1 a 2 semanas).' },
      { title: '3. Desenvolvimento', description: 'Implementação, integrações e testes multi-dispositivo (2 a 4 semanas conforme escopo).' },
      { title: '4. Go-live e acompanhamento', description: 'Publicação assistida, monitoramento das métricas e ajustes finos.' },
    ],
  },
  {
    id: 'faq-maintenance',
    question: 'Vocês oferecem manutenção e suporte contínuo?',
    answer:
      'Sim. Após a entrega podemos assumir planos de evolução com monitoramento, novas páginas, otimizações de performance, conteúdo e campanhas. Você escolhe entre pacotes recorrentes ou horas sob demanda.',
  },
]
