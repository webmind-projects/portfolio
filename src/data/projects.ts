import desktopEcovoltFullpage from '../assets/pages-sites/desktop-ecovolt-fullpage.png'
import desktopMagnaJurisFullpage from '../assets/pages-sites/desktop-magnajuris-fullpage.png'
import desktopBlendFullpage from '../assets/pages-sites/desktop-barbeariablend-fullpage.png'
import desktopMentePlenaFullpage from '../assets/pages-sites/desktop-menteplena-fullpage.png'
import desktopSorrisoTotalFullpage from '../assets/pages-sites/desktop-sorrisototal-fullpage.png'

export type Project = {
  id: string
  label: string
  category: string
  shortDescription: string
  longDescription: string
  timeframe: string
  techStack: string[]
  testimonial: {
    name: string
    role: string
    quote: string
    rating: number
  }
  metrics: {
    conversionLift: string
    trafficLift: string
  }
  mockup: string
  modalMockup: string
  ctaUrl: string
}

// TODO: Replace mocked project details with real case studies once available
export const projects: Project[] = [
  {
    id: 'magna-juris',
    label: "Magna Juris - Advocacia",
    category: 'Site Institucional',
    shortDescription: 'Foco em sofisticação e profissionalismo, alinhado à mensagem de exclusividade. O conteúdo evidencia compromisso com resultados e atualização constante.',
    longDescription:
      'A página apresenta uma proposta clara de excelência jurídica voltada ao setor empresarial, destacando proteção patrimonial e estratégias de alta performance.<br><br>Sua estrutura é organizada em seções descritivas e com termos e políticas que reforçam credibilidade. O design transmite sofisticação e profissionalismo, alinhado à mensagem de exclusividade.<br><br>O conteúdo evidencia compromisso com resultados e atualização constante em compliance. Essa combinação de clareza, organização e identidade visual consistente gera confiança e autoridade.',
    timeframe: '2 Dias',
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript Vanilla'],
    testimonial: {
      name: 'Marina Brandão',
      role: 'CEO, Magna Juris',
      quote:
        'Conseguiram transparecer nossa autoridade com elegância e clareza. Em poucos dias o novo site já se pagou e retornou mais do que o investido nesse lindo trabalho.',
      rating: 5,
    },
    metrics: {
      conversionLift: '+35% contratos fechados',
      trafficLift: 'ROI em 1 semana',
    },
    mockup: desktopMagnaJurisFullpage,
    modalMockup: desktopMagnaJurisFullpage,
    ctaUrl: 'https://webmind-projects.github.io/pf-advocacia-magnajuris',
  },
    {
      id: 'ecovolt-solutions',
      label: 'EcoVolt - Energia Solar',
      category: 'Landing Page',
      shortDescription: 'Foco direto na conversão: apresentando a proposta de valor com simulador de economia, benefícios claros e exemplos reais, etapas simplificadas para contratação.',
      longDescription:
        'A página apresenta uma proposta de valor direta, destacando a redução significativa na conta de energia. Explica de forma clara a tecnologia utilizada, o monitoramento remoto e as garantias oferecidas.<br><br>O design sofisticado reforça credibilidade e inovação, enquanto depoimentos e exemplos reais aumentam a confiança do visitante.<br><br>A navegação é intuitiva, com seções bem estruturadas que mostram benefícios e etapas do processo. No conjunto, transmite clareza, estética premium e apelo comercial, despertando interesse imediato no público-alvo.',
      timeframe: '3 Dias',
      techStack: ['HTML5', 'Tailwind CSS', 'JavaScript Vanilla'],
      testimonial: {
        name: 'Júlio Belotto',
        role: 'CEO, EcoVolt',
        quote:
          'A WebMind capturou perfeitamente a nossa proposta de valor com clareza. Graças a calculadora de ROI em poucos dias passamos a receber clientes muito mais preparados e decididos a fechar conosco.',
        rating: 5,
      },
      metrics: {
        conversionLift: '+42% leads qualificados',
        trafficLift: '+63% tempo na página',
      },
      mockup: desktopEcovoltFullpage,
      modalMockup: desktopEcovoltFullpage,
      ctaUrl: 'https://webmind-projects.github.io/pf-energiasolar-ecovolt',
    },
  {
    id: 'barbearia-blend',
    label: "Blend & Bourbon - Barbearia",
    category: 'Site Agenda + Branding',
    shortDescription: 'Visamos promover a identidade da marca e entregar um sistema de agendamento automatizado que otimiza o atendimento, a rotina dos barbeiros e a do cliente.',
    longDescription:
      'A página apresenta a proposta de um espaço premium voltado ao cuidado pessoal, destacando tradição e estilo contemporâneo.<br><br>O objetivo é transmitir uma experiência premium, que vai além de um corte, reforçando bem-estar e sofisticação. A estrutura é organizada, com seções que contam a história, descrevem serviços, informam meios de contato e localização.<br><br>O conteúdo valoriza a qualidade dos profissionais e equipamentos. A navegação é clara e intuitiva, facilitando o acesso às informações. O resultado é uma comunicação elegante que fortalece a identidade e credibilidade da marca.',
    timeframe: '5 Dias',
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Google Calendar'],
    testimonial: {
      name: 'Lucas Prado',
      role: 'Barbeiro, Blend',
      quote:
        'O site ficou impecável no celular e o branding trouxe muita credibilidade. Com o sistema de agendamento nossa rotina está otimizada e organizada.',
      rating: 5,
    },
    metrics: {
      conversionLift: '+58% agendamentos',
      trafficLift: '+31% visitantes orgânicos',
    },
    mockup: desktopBlendFullpage,
    modalMockup: desktopBlendFullpage,
    ctaUrl: 'https://webmind-projects.github.io/pf-barbearia-bladeebourbon',
  },
  {
    id: 'sorriso-total',
    label: "Sorriso Total - Odontologia",
    category: 'Landing Page',
    shortDescription: 'Design moderno e direto com foco em apresentar os principais serviços, conscientizar o lead e expandir a base de clientes com um formulário simples.',
    longDescription:
      'Criamos storytelling sob medida com animações de scroll que explicam o ciclo de importação, adicionamos calculadora de ROI e conectamos o formulário com Airtable + Slack para alertas instantâneos.',
    timeframe: '3 Dias',
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript Vanilla'],
    testimonial: {
      name: 'Carlos Gomes',
      role: 'CEO, Sorriso Total',
      quote:
        'O time trouxe clareza ao produto e os leads passaram a chegar altamente qualificados.',
      rating: 5,
    },
    metrics: {
      conversionLift: '+3,1x CTR',
      trafficLift: '+55% cadastros trial',
    },
    mockup: desktopSorrisoTotalFullpage,
    modalMockup: desktopSorrisoTotalFullpage,
    ctaUrl: 'https://webmind-projects.github.io/pf-odontologia-sorrisototal/',
  },
  {
    id: 'mente-plena',
    label: 'Mente Plena - Saúde Mental',
    category: 'Site Institucional',
    shortDescription: 'Design minimalista que transmite calma e serenidade, transparecendo a autoridade da clínica e dos profissionais, construída e pensada para o público-alvo.',
    longDescription:
      'A página apresenta um espaço acolhedor voltado ao equilíbrio emocional e bem-estar, destacando atendimentos presenciais e online. Explica a atuação de especialistas em terapia cognitivo-comportamental, com foco em ansiedade, autoestima, relacionamentos e mudanças de vida.<br><br>Mostra serviços estruturados com planos claros de acompanhamento. Depoimentos de pacientes reforçam credibilidade e resultados positivos. O design transmite calma e proximidade, facilitando o contato e o agendamento. É eficaz porque une clareza, empatia e profissionalismo em uma experiência digital organizada.',
    timeframe: 'Poucas Horas',
    techStack: ['HTML5', 'CSS3', 'JavaScript Vanilla'],
    testimonial: {
      name: 'Sofia Martins',
      role: 'DRA, Mente Plena',
      quote: 'A página ficou super leve e perfeita em qualquer dispositivo, conseguiu passar a mensagem da empresa de forma leve e acolhedora e conectou com nosso público.',
      rating: 5,
    },
    metrics: {
      conversionLift: '+28% propostas aprovadas',
      trafficLift: '-50% suporte manual',
    },
    mockup: desktopMentePlenaFullpage,
    modalMockup: desktopMentePlenaFullpage,
    ctaUrl: 'https://webmind-projects.github.io/pf-clinica-menteplena',
  },
//  { 
//    id: 'linq-learning',
//    label: 'Experiência educacional Linq Learning',
//    category: 'Plataforma de cursos',
//    shortDescription: 'Onboarding digital para edtech que aumentou em 61% as matrículas corporativas.',
//    longDescription:
//      'Criamos uma biblioteca navegável com filtros por squads, player customizado e área de carreira para reforçar retenção. Integramos com HubSpot e enviamos relatórios automáticos para RH.',
//    timeframe: '7 semanas',
//    techStack: ['Remix', 'Tailwind', 'Framer Motion', 'HubSpot'],
//    testimonial: {
//      name: 'Nayara Nunes',
//      role: 'CEO, Linq Learning',
//      quote: 'O onboarding ficou tão intuitivo que cortamos pela metade o tempo de ativação dos novos times.',
//      rating: 5,
//    },
//    metrics: {
//      conversionLift: '+61% matrículas',
//      trafficLift: '+48% tempo em aula',
//    },
//    mockup: mockTwo,
//    modalMockup: mockTwo,
//    ctaUrl: 'https://example.com/linqlearning',
//  },
]
