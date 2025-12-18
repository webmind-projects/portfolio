import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '../data/projects'

interface ProjectModalProps {
  open: boolean
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ open, project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70 backdrop-blur" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-black/10 bg-white text-midnight shadow-glass dark:border-white/10 dark:bg-midnight-light dark:text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-between border-b border-black/10 px-6 py-4 dark:border-white/10">
                <div>
                  <DialogTitle className="font-heading text-2xl">{project.label}</DialogTitle>
                  <p className="text-sm text-brand-silver">{project.category}</p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Fechar"
                  className="rounded-full border border-black/10 p-2 dark:border-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-8 px-6 py-6 lg:grid-cols-[3fr_2fr]">
                <div className="space-y-6">
                  <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 aspect-[16/9] relative">
                    <div className="absolute inset-0 overflow-y-auto">
                      <img
                        src={project.modalMockup}
                        alt="Prévia do projeto"
                        className="w-full min-h-[200%] object-cover object-top pointer-events-none select-none"
                        draggable={false}
                        style={{ maxHeight: 'unset' }}
                      />
                    </div>
                  </div>
                  <p
                    className="text-brand-ash dark:text-brand-silver"
                    dangerouslySetInnerHTML={{ __html: project.longDescription }}
                  />
                </div>

                <div className="space-y-6 rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-brand-ash dark:text-brand-silver">Stack</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      {project.techStack.map((tech) => (
                        <li key={tech} className="text-white/90">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-brand-ash dark:text-brand-silver">Tempo</p>
                    <p className="text-midnight dark:text-white">{project.timeframe}</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-brand-ash dark:text-brand-silver">Resultados</p>
                    <ul className="mt-2 space-y-1 text-brand-ash dark:text-brand-silver">
                      <li>{project.metrics.conversionLift}</li>
                      <li>{project.metrics.trafficLift}</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/5 dark:bg-white/5">
                    <p className="text-base font-semibold text-midnight dark:text-white">{project.testimonial.name}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-silver">{project.testimonial.role}</p>
                    <p className="mt-3 text-sm text-brand-ash dark:text-brand-silver">“{project.testimonial.quote}”</p>
                  </div>
                  <a
                    href={project.ctaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-brand-cyan hover:text-brand-cyan"
                  >
                    Acessar projeto
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
