import { ArrowUpRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import heroMockup from '../assets/mockup-hero.svg'
import { MagneticButton } from './MagneticButton'

const stats = [
  { value: '+20', label: 'Projetos digitais' },
  { value: '+8', label: 'Setores atendidos' },
  { value: '+300k', label: 'Gerados (R$)' },
]

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-visible pb-16 pt-12 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="space-y-6 sm:space-y-6 text-midnight dark:text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="inline-flex items-center rounded-full border border-black/10 px-4 py-1 text-xs uppercase tracking-[0.24em] text-brand-ash dark:border-white/10 dark:text-brand-silver"
          >
            WebMind • Desenvolvimento web
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-none font-heading text-3xl leading-tight text-midnight dark:text-white sm:text-5xl lg:text-6xl"
          >
            Criamos experiências que convertem tráfego em receita previsível.
          </motion.h1>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-8 text-midnight dark:text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-sm sm:text-lg text-brand-ash dark:text-brand-silver"
            >
              Combinamos experiência e interatividade com estratégias e métodos para transformar seus visitantes em clientes fiéis. Testes e aprimoramentos contínuos no setor de IA nos permitem entregar jornadas digitais em tempo recorde e que convertem melhor a cada entrega.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-row flex-wrap gap-3"
            >
              <a href="#contato">
                <MagneticButton type="button">
                  <span>Começar projeto</span>
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 font-semibold text-midnight transition hover:border-brand-cyan/80 hover:text-brand-cyan dark:border-white/20 dark:text-white/80"
              >
                <Play className="h-4 w-4" />
                VER PROJETOS
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="grid grid-cols-3 gap-3 text-sm text-brand-ash dark:text-brand-silver sm:gap-6"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-black/10 bg-white/70 p-3 backdrop-blur-lg dark:border-white/10 dark:bg-white/5 sm:p-4"
                >
                  <p className="text-lg font-semibold text-midnight dark:text-white sm:text-2xl">{stat.value}</p>
                  <p className="text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 }}
            className="relative hidden h-full w-full items-stretch lg:flex lg:self-start"
          >
            <div className="pointer-events-none absolute -top-6 -bottom-24 -left-8 -right-8 rounded-[48px] bg-gradient-to-r from-brand-purple/40 to-brand-cyan/30 opacity-90 blur-3xl" />
            <div className="relative flex h-full w-full items-stretch rounded-[32px] border border-black/10 bg-white/95 p-4 shadow-glass backdrop-blur dark:border-white/10 dark:bg-midnight-light/80">
              <img src={heroMockup} alt="Prévia de projeto" className="h-full w-full rounded-[24px] object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
