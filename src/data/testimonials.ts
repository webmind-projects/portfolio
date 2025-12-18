export type Testimonial = {
  id: string
  name: string
  role: string
  quote: string
  avatar: string
  rating: number
}

// TODO: substituir imagens e depoimentos abaixo por conteúdos reais
export const testimonials: Testimonial[] = [
  {
    id: 'client-01',
    name: 'Eduarda Klein',
    role: 'CEO, Aurora Store',
    quote: 'Transformaram nosso catálogo em uma experiência sensorial. O time entende de conversão e estética.',
    avatar: 'https://i.pravatar.cc/150?img=15',
    rating: 5,
  },
  {
    id: 'client-02',
    name: 'Mateus Lacerda',
    role: 'Founder, OrbitPay',
    quote: 'A cadência do projeto foi impecável, sempre com protótipos animados e decisões baseadas em dados.',
    avatar: 'https://i.pravatar.cc/150?img=43',
    rating: 5,
  },
  {
    id: 'client-03',
    name: 'Sílvia Rottenberg',
    role: 'Gerente de Marketing, Clímax Saúde',
    quote: 'O novo site animado trouxe clareza para nossos serviços e subiu a taxa de agendamentos no primeiro mês.',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
  },
  {
    id: 'client-04',
    name: 'Vítor Neves',
    role: 'CEO, Norte Energia Solar',
    quote: 'Com a funcionalidade de cálculo de economia aumentamos 100% nossa proposta de valor e fechamos muito mais clientes.',
    avatar: 'https://i.pravatar.cc/150?img=58',
    rating: 5,
  },
  {
    id: 'client-05',
    name: 'Larissa Melo',
    role: 'Diretora, Clarity Odontologia',
    quote: 'Com o site da nossa clínica desenvolvido pela WebMind começamos a receber 3x mais clientes e tivemos que ampliar o time para atender a demanda.',
    avatar: 'https://i.pravatar.cc/150?img=27',
    rating: 5,
  },
  {
    id: 'client-06',
    name: 'Henrique Bastos',
    role: 'Expert, Alpha Finance',
    quote: 'As landing pages otimizadas trouxeram leads tão qualificados que reduzimos 40% do CAC e seguimos escalando sem perder margem.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
  },
  {
    id: 'client-07',
    name: 'Patrícia Velozo',
    role: 'Founder, Academia VivaSaúde',
    quote: 'Fiz meu primeiro lançamento com o funil de LPs desenvolvido pela WebMind e bati 72% de conversão logo na estreia.',
    avatar: 'https://i.pravatar.cc/150?img=30',
    rating: 5,
  },
  {
    id: 'client-08',
    name: 'Rafael Júnior',
    role: 'Head de Produto, HorizonPay',
    quote: 'Depois da nova experiência mobile, dobramos o número de clientes e reduzimos em 70% o número de cancelamentos.',
    avatar: 'https://i.pravatar.cc/150?img=54',
    rating: 5,
  },
  {
    id: 'client-09',
    name: 'Camila Duarte',
    role: 'CEO, Duarte Advogados',
    quote: 'O novo site da Duarte trouxe muita clareza sobre os serviços que oferecemos e com isso aumentamos o número de propostas aprovadas.',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
  },
  {
    id: 'client-placeholder',
    name: 'SEU NOME AQUI',
    role: 'Seu cargo, Sua empresa',
    quote: 'Espaço reservado para o seu depoimento.',
    avatar: 'https://img.icons8.com/m_rounded/1200/user-male-circle.jpg',
    rating: 5,
  },
]
