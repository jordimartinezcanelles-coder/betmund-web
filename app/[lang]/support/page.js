import { redirect } from 'next/navigation'
import LegalPage, { Section } from '../../../components/LegalPage'
import Link from 'next/link'

const LANGS = ['en', 'es']

export async function generateMetadata({ params }) {
  const { lang } = await params
  return { title: lang === 'es' ? 'Soporte — Betmund' : 'Support — Betmund' }
}

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export default async function Support({ params }) {
  const { lang } = await params
  if (!LANGS.includes(lang)) redirect('/en/support')

  if (lang === 'es') {
    return (
      <LegalPage title="Soporte" lang="es">
        <Section title="Contáctanos">
          <p className="text-base leading-relaxed mb-4">
            ¿Necesitas ayuda con la app o con tu liga? Envíanos un email y te responderemos
            lo antes posible.
          </p>
          <a
            href="mailto:support@betmund.com"
            className="inline-flex items-center gap-2 bg-[#3A12A3] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#25006F] transition-colors"
          >
            support@betmund.com
          </a>
        </Section>
        <Section title="Cuando nos escribas, incluye">
          <ul className="space-y-2">
            {[
              'Tu email de cuenta.',
              'El nombre de la liga o el código de invitación si el problema es específico de una liga.',
              'Una breve descripción de lo que ha ocurrido y en qué pantalla estabas.',
            ].map((item, i) => (
              <li key={i} className="flex gap-2.5 text-base leading-relaxed">
                <span className="text-[#3A12A3] mt-1.5 flex-shrink-0 text-xs">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Eliminación de cuenta">
          <p className="text-base leading-relaxed">
            Puedes eliminar tu cuenta directamente desde la app en{' '}
            <strong>Ajustes → Eliminar cuenta</strong>, o visita la{' '}
            <Link href="/es/account-deletion" className="text-[#3A12A3] font-semibold hover:underline">
              página de eliminación de cuenta
            </Link>{' '}
            para más información.
          </p>
        </Section>
      </LegalPage>
    )
  }

  return (
    <LegalPage title="Support" lang="en">
      <Section title="Get in touch">
        <p className="text-base leading-relaxed mb-4">
          Need help with the app or your league? Send us an email and we'll get back to you as
          soon as possible.
        </p>
        <a
          href="mailto:support@betmund.com"
          className="inline-flex items-center gap-2 bg-[#3A12A3] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#25006F] transition-colors"
        >
          support@betmund.com
        </a>
      </Section>
      <Section title="When writing to us, please include">
        <ul className="space-y-2">
          {[
            'Your account email.',
            'The league name or invite code if the issue is league-specific.',
            'A short description of what happened and which screen you were using.',
          ].map((item, i) => (
            <li key={i} className="flex gap-2.5 text-base leading-relaxed">
              <span className="text-[#3A12A3] mt-1.5 flex-shrink-0 text-xs">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Account deletion">
        <p className="text-base leading-relaxed">
          You can delete your account directly from the app at{' '}
          <strong>Settings → Delete account</strong>, or visit the{' '}
          <Link href="/en/account-deletion" className="text-[#3A12A3] font-semibold hover:underline">
            account deletion page
          </Link>{' '}
          for more information.
        </p>
      </Section>
    </LegalPage>
  )
}
