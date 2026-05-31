'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher({ lang }) {
  const pathname = usePathname()

  // Replace leading /lang segment with new lang
  const getPath = (l) => '/' + l + pathname.slice(1 + lang.length)

  return (
    <div className="flex items-center gap-1.5 text-sm font-bold">
      <Link
        href={getPath('en')}
        className={lang === 'en' ? 'text-[#D8FF00]' : 'text-white/40 hover:text-white/70 transition-colors'}
      >
        EN
      </Link>
      <span className="text-white/20 text-xs">|</span>
      <Link
        href={getPath('es')}
        className={lang === 'es' ? 'text-[#D8FF00]' : 'text-white/40 hover:text-white/70 transition-colors'}
      >
        ES
      </Link>
    </div>
  )
}
