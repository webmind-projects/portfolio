import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export function TestimonialsMarquee() {
  const marqueeData = [...testimonials, ...testimonials, ...testimonials]
  const [isHovering, setIsHovering] = useState(false)
  const marqueeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = marqueeRef.current
    if (!el) return

    const animations = el.getAnimations()
    animations.forEach((animation) => {
      animation.playbackRate = isHovering ? 0.5 : 1
    })
  }, [isHovering])

  return (
    <section id="depoimentos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-ash dark:text-brand-silver">Depoimentos</p>
          <h2 className="font-heading text-2xl text-midnight dark:text-white sm:text-4xl">Feedbacks que guiam nosso processo.</h2>
        </div>
      </div>

      <div className="mt-10">
        <div className="relative mx-auto max-w-6xl overflow-hidden px-4 lg:px-6">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-midnight dark:via-midnight/90 dark:to-transparent z-10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/70 to-transparent dark:from-midnight dark:via-midnight/90 dark:to-transparent z-10"
            aria-hidden="true"
          />
          <div
            ref={marqueeRef}
            className="relative z-0 flex min-w-max animate-marquee gap-6 pr-6 will-change-transform"
            role="marquee"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {marqueeData.map((card, idx) => (
              <article
                key={`${card.id}-${idx}`}
                className="min-w-[280px] max-w-sm flex-none rounded-3xl border border-black/10 bg-white p-5 text-midnight dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <div className="flex items-center gap-3">
                  <img src={card.avatar} alt={card.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold">{card.name}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-silver">{card.role}</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-1 text-brand-gold">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-brand-ash dark:text-brand-silver">{card.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
