import logoWebmind from '../assets/logo-webmind.png'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src={logoWebmind} alt="WebMind Performance" className="h-6 w-auto sm:h-8" loading="lazy" />
      <span className="sr-only">WebMind Performance</span>
    </div>
  )
}
