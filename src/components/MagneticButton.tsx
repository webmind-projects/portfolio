import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface MagneticButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode
}

export function MagneticButton({ children, className = '', ...props }: MagneticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const glow = useMotionTemplate`radial-gradient(150px circle at ${x}px ${y}px, rgba(52, 244, 255, 0.35), transparent 65%)`

  return (
    <motion.button
      {...props}
      style={{ backgroundImage: glow }}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        x.set(event.clientX - bounds.left)
        y.set(event.clientY - bounds.top)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
      className={`relative overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-brand-purple to-brand-cyan px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition hover:scale-[1.01] focus-visible:outline-offset-4 ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  )
}
