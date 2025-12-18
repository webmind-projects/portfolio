import { motion } from 'framer-motion'
import { Users, Handshake, Radar, Search, Target, Mail, Clock, Shield } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { impactCards } from '../data/impactCards'
import { MagneticButton } from './MagneticButton'
import { ArrowUpRight } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  handshake: Handshake,
  radar: Radar,
  search: Search,
  target: Target,
  mail: Mail,
  clock: Clock,
  shield: Shield,
}

function ImpactCard({
  title,
  copy,
  icon,
  index,
}: {
  title: string
  copy: string
  icon: string
  index: number
}) {
  const Icon = iconMap[icon] ?? Users
  const delay = index * 0.08
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay }}
      className="group overflow-hidden rounded-3xl border border-brand-cyan/20 bg-gradient-to-br from-brand-purple/20 via-midnight-light/60 to-brand-cyan/20 p-6 text-white shadow-none transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-brand-purple">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/80">{copy}</p>
    </motion.div>
  )
}

export function ImpactGrid() {
  return (
    <section id="impact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-ash dark:text-brand-silver">Benefícios</p>
          <h2 className="font-heading text-3xl text-midnight dark:text-white sm:text-4xl">
            Como um site otimizado impulsiona seu negócio.
          </h2>
          <p className="text-base text-brand-ash dark:text-brand-silver">
            Confira os benefícios de ter seu site com a WebMind para transformar visitas em resultados previsíveis.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactCards.map((card, index) => (
            <ImpactCard key={card.id} {...card} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
                  <a href="#contato">
                    <MagneticButton type="button">
                      <span>COMEÇAR PROJETO</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </MagneticButton>
                  </a>
                </div>
      </div>
    </section>
  )
}
