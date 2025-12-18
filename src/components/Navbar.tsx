import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import { MagneticButton } from './MagneticButton'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/80 text-midnight backdrop-blur-xl dark:border-white/5 dark:bg-midnight/70 dark:text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        <a href="#hero" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan/70">
          <Logo />
        </a>

  <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-wider text-brand-ash dark:text-brand-silver md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative transition hover:text-brand-cyan"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a href="#contato" className="inline-flex">
            <MagneticButton type="button">COMEÇAR PROJETO</MagneticButton>
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Abrir menu"
            className="rounded-full border border-black/10 p-2 text-midnight dark:border-white/20 dark:text-white"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="space-y-4 border-t border-black/5 bg-white px-4 py-6 text-midnight dark:border-white/10 dark:bg-midnight-light dark:text-white">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-base font-semibold text-brand-silver"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contato" onClick={closeMenu} className="mt-4 block">
                <MagneticButton type="button" className="w-full justify-center">
                  COMEÇAR PROJETO
                </MagneticButton>
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
