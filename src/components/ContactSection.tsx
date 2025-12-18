import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  // Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  // PhoneCall,
  Youtube,
  type LucideIcon,
} from 'lucide-react'
import { submitLead, type LeadPayload } from '../utils/airtable'
import { SapirangaLeafletMap } from './SapirangaLeafletMap'

const serviceOptions = ['Sites Institucionais', 'Lojas Virtuais', 'Landing Pages', 'Blogs', 'Identidade visual']
const responseOptions = ['WhatsApp', 'E-mail', 'Telefone']
const contactDetails: { label: string; value: string; href?: string; icon: LucideIcon }[] = [
  {
    label: 'WhatsApp',
    value: '+55 (51) 9 8182 7886',
    href: 'https://wa.me/5551981827886',
    icon: MessageCircle,
  },
  // {
  //  label: 'Telefone',
  //  value: '+55 (51) 9 8182 7886',
  //  href: 'tel:+5551981827886',
  //  icon: PhoneCall,
  // },
  {
    label: 'E-mail',
    value: 'webmind.dev@gmail.com',
    href: 'mailto:webmind.dev@gmail.com',
    icon: Mail,
  },
]
const socialPlatforms = [
  { label: 'Facebook', href: 'https://www.facebook.com/people/WebMind-Performance/61558946820184/', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/webmind.ai', icon: Instagram },
  // { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
  { label: 'Youtube', href: 'https://www.youtube.com/@eduardzdev', icon: Youtube },
]

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadPayload>({
    defaultValues: {
      budgetRange: '1000',
      serviceType: serviceOptions[0],
      responseChannel: responseOptions[0],
    },
  })
  const [budgetValue, setBudgetValue] = useState(1000)
  const { ref: budgetRef, onChange: budgetOnChange, ...budgetHandlers } = register('budgetRange', {
    required: 'Compartilhe o investimento',
  })
  const formattedBudget = useMemo(
    () =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 2,
      }).format(budgetValue),
    [budgetValue],
  )
  const [status, setStatus] = useState<SubmitState>('idle')
  const [message, setMessage] = useState('')

  const onSubmit = async (data: LeadPayload) => {
    setStatus('loading')
    setMessage('')
    try {
      const result = await submitLead(data)
      if (result.offline) {
        setMessage('Integração real indisponível — mensagem simulada. Configure o Airtable quando estiver pronto.')
        setStatus('success')
      } else {
        setMessage('Mensagem enviada! Responderemos em até 1 dia útil.')
        setStatus('success')
      }
      reset()
    } catch (error) {
      console.error(error)
      setMessage('Não conseguimos enviar agora. Tente novamente em instantes.')
      setStatus('error')
    }
  }

  return (
    <section id="contato" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:px-6">
        <div className="rounded-3xl border border-black/10 bg-white p-8 text-midnight dark:border-white/10 dark:bg-white/5 dark:text-white">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-ash dark:text-brand-silver">Contato</p>
          <h2 className="mt-3 font-heading text-3xl">Vamos construir algo memorável juntos!</h2>
          <p className="mt-2 text-brand-ash dark:text-brand-silver">
            Resposta em até 24h úteis. Preencha o formulário e descreva a sua ideia para solicitar seu orçamento.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-brand-ash dark:text-brand-silver">
                Nome:
                <input
                  {...register('name', { required: 'Informe seu nome' })}
                  placeholder="Ex: João"
                  className="h-12 rounded-full border border-black/10 bg-white/70 px-4 py-3 text-midnight outline-none transition focus:border-brand-cyan dark:border-white/10 dark:bg-white/10 dark:text-white"
                />
                {errors.name && <span className="text-xs text-brand-gold">{errors.name.message}</span>}
              </label>
              <label className="flex flex-col gap-2 text-sm text-brand-ash dark:text-brand-silver">
                Telefone:
                <input
                  type="tel"
                  {...register('phone', { required: 'Informe um telefone' })}
                  placeholder="(DDD) 99999-9999"
                  className="h-12 rounded-full border border-black/10 bg-white/70 px-4 py-3 text-midnight outline-none transition focus:border-brand-cyan dark:border-white/10 dark:bg-white/10 dark:text-white"
                />
                {errors.phone && <span className="text-xs text-brand-gold">{errors.phone.message}</span>}
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm text-brand-ash dark:text-brand-silver">
              E-mail:
              <input
                type="email"
                {...register('email', { required: 'Informe um e-mail válido' })}
                placeholder="exe@email.com"
                className="h-12 rounded-full border border-black/10 bg-white/70 px-4 py-3 text-midnight outline-none transition focus:border-brand-cyan dark:border-white/10 dark:bg-white/10 dark:text-white"
              />
              {errors.email && <span className="text-xs text-brand-gold">{errors.email.message}</span>}
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-brand-ash dark:text-brand-silver">
                Por onde prefere ser respondido?
                <select
                  {...register('responseChannel', { required: 'Selecione um canal' })}
                  className="h-12 rounded-full border border-black/10 bg-white/70 px-4 py-3 text-midnight outline-none transition focus:border-brand-cyan dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                  {responseOptions.map((option) => (
                    <option key={option} value={option} className="bg-white text-midnight">
                      {option}
                    </option>
                  ))}
                </select>
                {errors.responseChannel && <span className="text-xs text-brand-gold">{errors.responseChannel.message}</span>}
              </label>
              <label className="flex flex-col gap-2 text-sm text-brand-ash dark:text-brand-silver">
                Tipo de serviço:
                <select
                  {...register('serviceType', { required: 'Selecione o tipo de serviço' })}
                  className="h-12 rounded-full border border-black/10 bg-white/70 px-4 py-3 text-midnight outline-none transition focus:border-brand-cyan dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option} className="bg-white text-midnight">
                      {option}
                    </option>
                  ))}
                </select>
                {errors.serviceType && <span className="text-xs text-brand-gold">{errors.serviceType.message}</span>}
              </label>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-brand-ash dark:text-brand-silver">Orçamento estimado:</label>
              <div className="relative">
                <input
                  type="range"
                  min={1000}
                  max={100000}
                  step={1000}
                  value={budgetValue}
                  onChange={(event) => {
                    setBudgetValue(Number(event.target.value))
                    budgetOnChange(event)
                  }}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-black/10 accent-brand-purple"
                  ref={budgetRef}
                  {...budgetHandlers}
                />
                <div className="pointer-events-none absolute -top-8 right-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-midnight shadow-lg shadow-brand-purple/30 dark:bg-white/90 dark:text-midnight">
                  {formattedBudget}
                </div>
              </div>
              <div className="flex justify-between text-[11px] uppercase tracking-[0.4em] text-brand-ash dark:text-brand-silver">
                <span>R$ 1.000,00</span>
                <span>R$ 100.000,00</span>
              </div>
              {errors.budgetRange && <span className="text-xs text-brand-gold">{errors.budgetRange.message}</span>}
            </div>

            <label className="flex flex-col gap-2 text-sm text-brand-ash dark:text-brand-silver">
              Mensagem:
              <textarea
                rows={4}
                {...register('message', { required: 'Conte um pouco sobre a sua ideia' })}
                placeholder="Conte um pouco sobre sua empresa ou sua ideia..."
                className="min-h-[140px] rounded-3xl border border-black/10 bg-white/80 px-4 py-3 text-midnight outline-none transition focus:border-brand-cyan dark:border-white/10 dark:bg-white/10 dark:text-white"
              />
              {errors.message && <span className="text-xs text-brand-gold">{errors.message.message}</span>}
            </label>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-purple px-8 py-3 font-semibold text-white shadow-glow transition hover:bg-brand-purple-strong disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar'}
              <ArrowUpRight className="h-4 w-4" />
            </button>
            {message && (
              <p className={`text-sm ${status === 'error' ? 'text-brand-gold' : 'text-brand-cyan'}`}>{message}</p>
            )}
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-black/10 bg-white p-6 text-midnight dark:border-white/10 dark:bg-midnight-light/80 dark:text-white sm:p-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/40 px-4 py-1 text-xs uppercase tracking-[0.4em] text-brand-cyan">
                <span className="h-2 w-2 rounded-full bg-brand-cyan" /> Disponível
              </div>
              <h3 className="text-2xl font-semibold">Agenda aberta para novos projetos durante o ano de 2026.</h3>
              <div className="space-y-4 text-sm text-brand-ash dark:text-brand-silver">
                <p className="flex items-center gap-2 text-sm text-brand-ash dark:text-brand-silver">
                  <MapPin className="h-4 w-4 text-brand-purple" /> Sapiranga / RS — Atendendo Global.
                </p>
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  return (
                    <p key={detail.label} className="flex items-center gap-2 text-sm text-brand-ash dark:text-brand-silver">
                      <Icon className="h-4 w-4 text-brand-purple" />
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm font-semibold text-brand-ash transition hover:text-brand-cyan dark:text-brand-silver"
                        >
                          {detail.label}: {detail.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-brand-ash dark:text-brand-silver">
                          {detail.label}: {detail.value}
                        </span>
                      )}
                    </p>
                  )
                })}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-brand-cyan">Siga-nos</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {socialPlatforms.map((platform) => {
                    const Icon = platform.icon
                    return (
                      <a
                        key={platform.label}
                        href={platform.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Siga no ${platform.label}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan text-white shadow-lg shadow-brand-purple/30 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-black/10 bg-gradient-to-br from-brand-purple/30 to-brand-cyan/20 p-6 dark:border-white/5">
              <p className="text-sm uppercase tracking-[0.4em] text-white/80">HUB CRIATIVO 📍</p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-midnight">
                <SapirangaLeafletMap />
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-brand-cyan/20 bg-gradient-to-br from-brand-purple/20 via-midnight-light/60 to-brand-cyan/20 p-6 text-white shadow-glow sm:p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-cyan">Suporte</p>
            <h4 className="mt-3 text-2xl font-semibold">Ainda tem alguma dúvida?</h4>
            <p className="mt-2 text-sm text-white/80">
              Fale direto com nosso time no WhatsApp e receba um direcionamento personalizado para seu projeto.
            </p>
            <a
              href="https://wa.me/5551981827886"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white/95 px-6 py-3 font-semibold text-midnight shadow-lg shadow-brand-purple/30 transition hover:-translate-y-0.5 hover:text-brand-purple"
            >
              <MessageCircle className="h-4 w-4" /> Iniciar conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
