import { motion } from 'framer-motion'
import { Building2, MonitorSmartphone, TabletSmartphone, Rocket } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Sites & Lojas',
    description: 'Sites Institucionais e Lojas Virtuais que transmitem credibilidade e maximizam as vendas e o posicionamento.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Sistemas Web',
    description: 'Dashboards, CRMs, SaaS e plataformas robustas, exclusivas para necessidades específicas do seu negócio.',
  },
  {
    icon: TabletSmartphone,
    title: 'Aplicativos',
    description: 'Soluções mobile nativas e híbridas feitas sob medida para facilitar o dia a dia da sua operação e dos seus usuários.',
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    description: 'Páginas com mensagens diretas e persuasivas, carregamento veloz e foco total em um único objetivo.',
  },
]

export function ServicesCards() {
  return (
    <section className="relative z-10 pb-8 pt-6 sm:pb-12 sm:pt-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group overflow-hidden rounded-3xl border border-brand-cyan/20 bg-gradient-to-br from-brand-purple/20 via-midnight-light/60 to-brand-cyan/20 p-5 text-center text-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-glow sm:p-6"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-brand-purple transition-colors">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-xs text-white/80 sm:text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
