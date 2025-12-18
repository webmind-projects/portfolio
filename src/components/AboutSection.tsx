import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Puzzle, Earth, Users } from 'lucide-react'

const aboutBlocks = [
  {
    icon: Users,
    title: 'Quem somos',
    copy: 'Estúdio criativo focado em fundir design de elite e alta tecnologia para posicionar marcas globalmente.',
  },
  {
    icon: Puzzle,
    title: 'O que fazemos',
    copy: 'Criamos interfaces e sistemas de alto padrão com funis de venda otimizados e automatizados, visando resultados.',
  },
  {
    icon: Earth,
    title: 'Localização',
    copy: 'Sediados no Sul do Brasil. Atuação 100% remota com metodolodia de entrega contínua e foco em eficiência.',
  },
]

const milestones = [
  { year: '2024', label: 'Lançamento da WebMind' },
  { year: '2025', label: 'Consolidação no mercado' },
  { year: '2026', label: 'Crescimento global' },
]

export function AboutSection() {
  const timelineRef = useRef<HTMLDivElement | null>(null)
  useScroll({ target: timelineRef, offset: ['start 80%', 'end 40%'] })

  return (
    <section id="sobre" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-ash dark:text-brand-silver">Sobre nós</p>
          <h2 className="font-heading text-3xl text-midnight dark:text-white sm:text-4xl">
            Desenvolvimento web orientado a crescimento e previsibilidade.
          </h2>
          <p className="text-lg text-brand-ash dark:text-brand-silver">
            Ajudamos diversos setores empresariais a lançar experiências web únicas e otimizadas, integradas ao stack comercial. Com um time altamente treinado em IA e Desenvolvimento conseguimos entregar projetos complexos em tempo recorde.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {aboutBlocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-brand-cyan/20 bg-gradient-to-br from-brand-purple/20 via-midnight-light/60 to-brand-cyan/20 p-6 text-white shadow-none transition-shadow duration-300 hover:shadow-glow"
            >
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 p-3 text-brand-purple">
                <block.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{block.title}</h3>
              <p className="text-white/80">{block.copy}</p>
            </motion.div>
          ))}
        </div>

        <div
          ref={timelineRef}
          className="mt-12 overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-r from-white to-transparent p-6 text-midnight dark:border-white/10 dark:from-white/5 dark:text-white md:p-8"
        >
          <div className="relative">
            <div className="grid gap-6 md:grid-cols-3 md:gap-10">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex items-center gap-3 md:flex-col md:items-center md:justify-center md:gap-2">
                  <div className="relative flex flex-col items-center">
                    <motion.div
                      className="z-10 h-4 w-4 rounded-full border-2 border-brand-cyan bg-white dark:bg-midnight"
                      initial={{ scale: 0.4, opacity: 0.4 }}
                      whileInView={{ scale: 1, opacity: 1, backgroundColor: '#34f4ff' }}
                      transition={{ delay: index * 0.15, type: 'spring', stiffness: 220 }}
                      viewport={{ once: true, margin: '-40px' }}
                    />
                    <motion.span
                      className="absolute inset-[-12px] rounded-full bg-brand-cyan/40"
                      initial={{ scale: 0, opacity: 0.6 }}
                      whileInView={{ scale: 1.8, opacity: 0 }}
                      transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
                      viewport={{ once: true, margin: '-40px' }}
                    />
                  </div>
                  <div className="flex items-baseline gap-2 md:flex-col md:items-center md:gap-1 md:text-center">
                    <p className="text-2xl font-bold text-brand-cyan md:text-3xl">{milestone.year}</p>
                    <p className="text-sm text-brand-ash dark:text-brand-silver md:text-base">{milestone.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
