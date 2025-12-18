import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faqs'

function FAQItemCard({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[number]
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState('0px')

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`)
    } else {
      setMaxHeight('0px')
    }
  }, [isOpen])

  return (
    <div className="rounded-3xl border border-black/10 bg-white/80 p-4 shadow-glass dark:border-white/10 dark:bg-white/5 dark:shadow-none">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-midnight dark:text-white">{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand-purple transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight, opacity: isOpen ? 1 : 0 }}
      >
        <div className="pt-4 text-sm leading-relaxed text-brand-ash dark:text-brand-silver">
          <p>{item.answer}</p>
          {item.bullets && (
            <ul className="mt-4 space-y-3">
              {item.bullets.map((bullet, index) => (
                <li key={`${item.id}-bullet-${index}`}>
                  <p className="font-semibold text-midnight dark:text-white">{bullet.title}</p>
                  <p>{bullet.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [activeId, setActiveId] = useState<string | null>(faqs[0]?.id ?? null)

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-ash dark:text-brand-silver">
            Dúvidas Frequentes
          </p>
          <h2 className="font-heading text-3xl text-midnight dark:text-white sm:text-4xl">
            Perguntas que respondemos todos os dias.
          </h2>
          <p className="text-base text-brand-ash dark:text-brand-silver">
            Transparência reduz atrito. Organizamos as principais respostas para clarear o próximo passo da sua presença digital.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <FAQItemCard
              key={item.id}
              item={item}
              isOpen={activeId === item.id}
              onToggle={() => setActiveId((current) => (current === item.id ? null : item.id))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
