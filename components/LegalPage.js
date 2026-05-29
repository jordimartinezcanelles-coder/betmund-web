import Link from 'next/link'

export default function LegalPage({ title, lastUpdated, children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      <header className="bg-[#25006F] py-5">
        <div className="max-w-2xl mx-auto px-6">
          <Link href="/" className="text-white font-black text-xl tracking-tight">
            bet<span className="text-[#D8FF00]">mund</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-16">
        <h1 className="text-4xl font-black text-[#25006F] mb-2">{title}</h1>
        {lastUpdated && (
          <p className="text-[#756B93] text-sm mb-12">Last updated: {lastUpdated}</p>
        )}
        <div className="space-y-10 text-[#374151]">{children}</div>
      </main>

      <footer className="bg-[#25006F] py-8 mt-auto">
        <div className="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-white font-black text-lg tracking-tight">
            bet<span className="text-[#D8FF00]">mund</span>
          </Link>
          <div className="flex flex-wrap gap-5 text-sm text-white/45">
            <Link href="/privacy"          className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms"            className="hover:text-white transition-colors">Terms</Link>
            <Link href="/support"          className="hover:text-white transition-colors">Support</Link>
            <Link href="/account-deletion" className="hover:text-white transition-colors">Account Deletion</Link>
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
