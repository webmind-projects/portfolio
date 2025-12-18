import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export function BackgroundFX() {
  const { mode } = useTheme()
  const blobs = [
    { id: 1, className: 'top-10 left-10 bg-brand-purple/30', size: 'h-72 w-72', delay: 0 },
    { id: 2, className: 'bottom-10 right-16 bg-brand-cyan/25', size: 'h-64 w-64', delay: 1.2 },
    { id: 3, className: 'top-1/3 right-1/4 bg-brand-purple-strong/20', size: 'h-96 w-96', delay: 2.4 },
  ]

  return (
    <div
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${
        mode === 'dark' ? 'bg-midnight' : 'bg-[#f9f7ff]'
      }`}
    >
      <div className="absolute inset-0 bg-grid-glow" />
      <div className="absolute inset-0 bg-noise-texture opacity-40" />
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute blur-3xl ${blob.size} ${blob.className}`}
          animate={{ scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: blob.delay }}
        />
      ))}
    </div>
  )
}
