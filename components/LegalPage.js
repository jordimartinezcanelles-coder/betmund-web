import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

const footerLabels = {
  en: { privacy: 'Privacy', terms: 'Terms', support: 'Support', accountDeletion: 'Account Deletion' },
  es: { privacy: 'Privacidad', terms: 'Términos', support: 'Soporte', accountDeletion: 'Eliminar cuenta' },
}

export default function LegalPage({ title, lastUpdated, children, lang = 'en' }) {
  const labels = footerLabels[lang] ?? footerLabels.en
  const base = `/${lang}`

  return (
    <div className="min-h-screen bg-white flex flex-col">

      <header className="bg-[#25006F] py-5">
        <div className="max-w-2xl mx-auto px-6 flex items-center justify-between">
          <Link href={base} className="text-white font-black text-xl tracking-tight">
            bet<span className="text-[#D8FF00]">mund</span>
          </Link>
          <LanguageSwitcher lang={lang} />
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-16">
        <h1 className="text-4xl font-black text-[#25006F] mb-2">{title}</h1>
        {lastUpdated && (
          <p className="text-[#756B93] text-sm mb-12">
            {lang === 'es' ? 'Última actualización: ' : 'Last updated: '}{lastUpdated}
          </p>
        )}
        <div className="space-y-10 text-[#374151]">{children}</div>
      </main>

      <footer className="bg-[#25006F] py-8 mt-auto">
        <div className="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href={base} className="text-white font-black text-lg tracking-tight">
            bet<span className="text-[#D8FF00]">mund</span>
          </Link>
          <div className="flex flex-wrap gap-5 text-sm text-white/45">
            <Link href={`${base}/privacy`}          className="hover:text-white transition-colors">{labels.privacy}</Link>
            <Link href={`${base}/terms`}             className="hover:text-white transition-colors">{labels.terms}</Link>
            <Link href={`${base}/support`}           className="hover:text-white transition-colors">{labels.support}</Link>
            <Link href={`${base}/account-deletion`}  className="hover:text-white transition-colors">{labels.accountDeletion}</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}

export function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-xl font-black text-[#25006F] mb-3">{title}</h2>
      {children}
    </section>
  )
}

export function BulletList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-base leading-relaxed">
          <span className="text-[#3A12A3] mt-1.5 flex-shrink-0 text-xs">●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
