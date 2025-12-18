import { Moon, SunMedium } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export function ThemeToggle() {
  const { mode, toggle } = useTheme()
  const isDark = mode === 'dark'

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      onClick={toggle}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-midnight transition hover:border-brand-cyan/60 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/70 dark:border-white/10 dark:bg-white/10 dark:text-white"
    >
      {isDark ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
