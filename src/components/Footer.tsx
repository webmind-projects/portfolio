export function Footer() {
  return (
    <footer className="border-t border-black/10 py-8 text-center text-sm text-brand-ash dark:border-white/10 dark:text-brand-silver">
      <p>© {new Date().getFullYear()} WebMind Performance.</p>
      <p className="mt-1">Feito com React, Tailwind e animações cuidadosamente coreografadas.</p>
    </footer>
  )
}
