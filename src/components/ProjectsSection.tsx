import { useState, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '../data/projects'
import { ProjectModal } from './ProjectModal'
import { MagneticButton } from './MagneticButton'

// --- Componente auxiliar para animação de rolagem suave na imagem do card ---
function ProjectCardImage({ mockup, label }: { mockup: string; label: string }) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [hovered, setHovered] = useState(false)

  // Ao hover, anima translateY para mostrar o final da imagem
  // Assume que a imagem é bem mais alta que o container 16:9
  // O valor de 40% é um chute para rolar até o "final" sem sair do frame
  // Ajuste conforme necessário para o layout real
  // Para efeito de "scroll" visual, a imagem precisa ser mais alta que o container
  // O translateY negativo deve ser suficiente para mostrar o final da imagem
  // Exemplo: h-[200%] e translateY(-50%)
  return (
    <img
      ref={imgRef}
      src={mockup}
      alt={label}
      className="absolute left-0 top-0 h-[200%] w-full object-cover object-top transition-transform duration-1000"
      style={{
        transform: hovered ? 'translateY(-50%)' : 'translateY(0%)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      draggable={false}
    />
  )
}

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="projetos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-ash dark:text-brand-silver">Projetos</p>
          <h2 className="font-heading text-3xl text-midnight dark:text-white sm:text-4xl">
            Projetos recentes que impulsionaram empresas.
          </h2>
          <p className="text-base text-brand-ash dark:text-brand-silver">
            Procuramos sempre atender as expectativas e trazer satisfação a cada cliente, desde o protótipo até o lançamento. Abaixo misturamos projetos reais e fictícios para demonstrar a qualidade e eficiência em projetos diversos e complexos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group flex cursor-pointer flex-col rounded-3xl border border-black/10 bg-white p-5 text-midnight transition hover:border-brand-cyan/60 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 aspect-[16/9] relative group">
                <ProjectCardImage mockup={project.mockup} label={project.label} />
              </div>
              <div className="mt-4 flex flex-1 flex-col space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-ash dark:text-brand-silver">{project.category}</p>
                <h3 className="text-xl font-semibold text-midnight dark:text-white">{project.label}</h3>
                <p className="text-sm text-brand-ash dark:text-brand-silver">{project.shortDescription}</p>
              </div>
              <div className="mt-6 flex items-center justify-between gap-3 text-sm text-brand-ash dark:text-brand-silver">
                <span>{project.timeframe}</span>
                <a
                  href={project.ctaUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-1 rounded-full border border-black/10 px-3 py-1 font-semibold text-midnight transition hover:border-brand-cyan hover:text-brand-cyan dark:border-white/15 dark:text-white"
                >
                  Acessar
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
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

      <ProjectModal open={Boolean(activeProject)} project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
