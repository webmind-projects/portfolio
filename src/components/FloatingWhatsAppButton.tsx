import { MessageCircle } from 'lucide-react'

export function FloatingWhatsAppButton() {
  const whatsappLink =
    'https://api.whatsapp.com/send?phone=5551981827886&text=Ol%C3%A1%21%20Vim%20pelo%20seu%20site%20e%20tenho%20interesse%20em%20iniciar%20um%20projeto.'

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-black shadow-lg transition-all duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan/70"
      style={{
        animation: 'pulse-glow-whatsapp 2s ease-in-out infinite',
      }}
    >
      <MessageCircle className="h-6 w-6 text-[#25D366]" />
      <style>{`
        @keyframes pulse-glow-whatsapp {
          0%, 100% {
            box-shadow: 0 0 20px rgba(123, 63, 228, 0.4), 0 8px 16px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(123, 63, 228, 0.6), 0 8px 24px rgba(0, 0, 0, 0.4);
          }
        }
      `}</style>
    </a>
  )
}
