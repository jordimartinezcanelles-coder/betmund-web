import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getT } from '../../lib/i18n'
import Countdown from '../../components/Countdown'
import LanguageSwitcher from '../../components/LanguageSwitcher'

const LANGS = ['en', 'es']

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }) {
  const { lang } = await params
  const t = getT(lang)
  return { title: t.meta.title, description: t.meta.description }
}

// ─── Store buttons ─────────────────────────────────────────────────────────────

function AppleIcon() {
  return (
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l15.4 8.5c.65.38.65 1.22 0 1.6L4.6 21.3c-.66.5-1.6.03-1.6-.8z" />
    </svg>
  )
}

function StoreButtons({ dark = false }) {
  const base = dark
    ? 'bg-[#25006F] text-white hover:bg-[#3A12A3]'
    : 'bg-black text-white hover:bg-neutral-800'
  return (
    <div className="flex flex-wrap gap-3">
      <a href="#" className={`flex items-center gap-2.5 ${base} px-5 py-3 rounded-xl transition-colors`}>
        <AppleIcon />
        <div>
          <p className="text-[9px] text-white/60 leading-none">Download on the</p>
          <p className="text-sm font-bold leading-snug">App Store</p>
        </div>
      </a>
      <a href="#" className={`flex items-center gap-2.5 ${base} px-5 py-3 rounded-xl transition-colors`}>
        <PlayIcon />
        <div>
          <p className="text-[9px] text-white/60 leading-none">Get it on</p>
          <p className="text-sm font-bold leading-snug">Google Play</p>
        </div>
      </a>
    </div>
  )
}

// ─── Phone frame ──────────────────────────────────────────────────────────────

function Phone({ children, className = '' }) {
  return (
    <div className={`relative w-[210px] h-[430px] bg-[#0f0f0f] rounded-[40px] border-[3px] border-[#2a2a2a] shadow-[0_32px_80px_rgba(0,0,0,0.45)] overflow-hidden flex-shrink-0 ${className}`}>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0f0f0f] rounded-full z-10" />
      <div className="w-full h-full overflow-hidden">{children}</div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full z-10" />
    </div>
  )
}

// ─── App screens ──────────────────────────────────────────────────────────────

function ScreenRanking() {
  const rows = [
    { pos: 1, name: 'Jordi', pts: 280, me: true },
    { pos: 2, name: 'Marc',  pts: 245 },
    { pos: 3, name: 'Ana',   pts: 220 },
    { pos: 4, name: 'Pere',  pts: 195 },
    { pos: 5, name: 'Lluís', pts: 160 },
  ]
  return (
    <div className="h-full bg-[#3A12A3] p-5 pt-12 flex flex-col">
      <p className="text-white/40 text-[9px] font-bold tracking-widest mb-0.5 uppercase">Liga Amigos</p>
      <h3 className="text-white font-black text-lg mb-5">Clasificación</h3>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.pos} className={`flex items-center rounded-2xl px-4 py-2.5 ${r.me ? 'bg-[#D8FF00]' : 'bg-white/10'}`}>
            <span className={`text-xs font-bold w-5 ${r.me ? 'text-[#25006F]' : 'text-white/30'}`}>#{r.pos}</span>
            <span className={`font-semibold text-sm flex-1 ml-2 ${r.me ? 'text-[#25006F]' : 'text-white'}`}>{r.name}</span>
            <span className={`font-black text-xs ${r.me ? 'text-[#25006F]' : 'text-[#D8FF00]'}`}>{r.pts} pts</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenCreateLeague() {
  return (
    <div className="h-full bg-[#3A12A3] flex flex-col p-5 pt-12">
      <div className="flex-1">
        <p className="text-white font-black text-lg mb-5">Create League</p>
        <p className="text-white/50 text-[9px] font-bold tracking-widest mb-2 uppercase">Choose mode</p>
        <div className="flex gap-2 mb-5">
          <div className="flex-1 bg-white/15 border-2 border-[#D8FF00] rounded-2xl p-3 relative">
            <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#D8FF00] rounded-full flex items-center justify-center">
              <span className="text-[#25006F] text-[9px] font-black">✓</span>
            </div>
            <span className="text-2xl">🏆</span>
            <p className="text-[#D8FF00] font-black text-xs mt-1">Free</p>
            <p className="text-white/50 text-[8px] leading-tight mt-0.5">Pick teams before the tournament</p>
          </div>
          <div className="flex-1 bg-white/8 rounded-2xl p-3 opacity-50">
            <span className="text-2xl">🔒</span>
            <p className="text-white/80 font-black text-xs mt-1">Premium</p>
            <p className="text-white/40 text-[8px] leading-tight mt-0.5">Match by match live predictions</p>
          </div>
        </div>
        <p className="text-white text-[10px] font-bold mb-1.5">What are you betting?</p>
        <div className="bg-white/10 rounded-xl px-3 py-2.5 mb-1.5">
          <p className="text-white/35 text-[10px]">Winner chooses the restaurant 🍔</p>
        </div>
        <p className="text-white/30 text-[8px]">Keep it fun: dinner, drinks, bragging rights...</p>
      </div>
      <div className="bg-[#111] rounded-2xl px-4 py-2.5 text-center">
        <span className="text-white font-black text-xs">Create league ⚽</span>
      </div>
    </div>
  )
}

function ScreenGroups() {
  const teams = [
    { flag: '🇰🇷', name: 'S. Korea', sel: true },
    { flag: '🇿🇦', name: 'S. Africa', sel: false },
    { flag: '🇨🇿', name: 'Czech Rep.', sel: false },
    { flag: '🇲🇽', name: 'Mexico',  sel: true },
  ]
  return (
    <div className="h-full bg-[#3A12A3] flex flex-col">
      <div className="px-4 pt-12 pb-2">
        <p className="text-white/40 text-[8px] font-bold tracking-widest uppercase mb-2">Mi Profeta</p>
        <div className="flex gap-1 overflow-hidden mb-3">
          {['Groups', 'R16', 'R8', 'QF', 'SF'].map((t, i) => (
            <span key={t} className={`text-[8px] font-bold px-2 py-1 rounded-full flex-shrink-0 ${i === 0 ? 'bg-[#D8FF00] text-[#25006F]' : 'bg-white/15 text-white/50'}`}>{t}</span>
          ))}
        </div>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-[#D8FF00] font-black text-2xl leading-none">2</span>
          <span className="text-white/40 text-xs">/ 32 teams</span>
        </div>
        <div className="flex gap-1 mb-3">
          {['A','B','C','D','E','F'].map((g, i) => (
            <span key={g} className={`text-[9px] font-black w-7 h-7 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-[#D8FF00] text-[#25006F]' : 'bg-white/15 text-white/50'}`}>{g}</span>
          ))}
        </div>
      </div>
      <div className="mx-4 bg-white rounded-2xl p-3 flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="font-black text-[#25006F] text-xs">GROUP A</span>
          <span className="bg-[#f0fdf4] text-[#166534] text-[8px] font-bold px-2 py-0.5 rounded-full">2/3 selected</span>
        </div>
        <div className="space-y-1.5">
          {teams.map((t) => (
            <div key={t.name} className={`flex items-center rounded-xl px-2.5 py-2 ${t.sel ? 'bg-[#f0fdf4] border border-[#86efac]' : 'bg-gray-50'}`}>
              <span className="text-lg mr-2 leading-none">{t.flag}</span>
              <span className={`text-[11px] font-semibold flex-1 ${t.sel ? 'text-[#166534]' : 'text-gray-600'}`}>{t.name}</span>
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${t.sel ? 'bg-[#22C55E] border-[#22C55E]' : 'border-gray-300'}`}>
                {t.sel && <span className="text-white text-[7px] font-black">✓</span>}
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-[8px] mt-2 text-center">24 qualify: 1st/2nd + 8 best 3rd-placed</p>
      </div>
    </div>
  )
}

function ScreenAwards() {
  const awards = [
    { emoji: '🏆', title: "Ballon d'Or",  sub: 'Best player',    player: 'Lionel Messi' },
    { emoji: '👟', title: 'Golden Boot',  sub: 'Top scorer',     player: 'M. Oyarzabal' },
    { emoji: '⭐', title: 'Best Young',   sub: 'Under 21',       player: 'Lamine Yamal' },
    { emoji: '🤝', title: 'Fair Play',    sub: 'Fair play team', player: 'Germany' },
    { emoji: '🎁', title: 'Revelation',   sub: 'Surprise team',  player: 'Morocco' },
  ]
  return (
    <div className="h-full bg-[#3A12A3] flex flex-col p-4 pt-12">
      <p className="text-white/40 text-[8px] font-bold tracking-widest uppercase mb-0.5">Final step</p>
      <p className="text-white font-black text-sm mb-4">0 awards left ✓</p>
      <div className="space-y-2 flex-1">
        {awards.map((a) => (
          <div key={a.title} className="bg-white/10 rounded-xl px-3 py-2">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">{a.emoji}</span>
                <div>
                  <p className="text-white text-[10px] font-bold leading-tight">{a.title}</p>
                  <p className="text-white/40 text-[8px]">{a.sub}</p>
                </div>
              </div>
              <span className="text-[#22C55E] font-black text-xs">✓</span>
            </div>
            <div className="bg-[#D8FF00]/15 border border-[#D8FF00]/30 rounded-lg px-2 py-1">
              <span className="text-[#D8FF00] text-[10px] font-semibold">{a.player}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenArena() {
  return (
    <div className="h-full bg-[#3A12A3] flex flex-col p-4 pt-12">
      <div className="bg-[#FBBF24]/15 border border-[#FBBF24]/30 rounded-xl px-3 py-2 mb-3 flex items-center gap-2">
        <span className="text-sm">⭐</span>
        <div>
          <p className="text-[#FBBF24] text-[10px] font-bold">Premium feature</p>
          <p className="text-white/40 text-[8px]">Upgrade your league to unlock</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-3 mb-3 flex-shrink-0">
        <div className="flex justify-center gap-2 mb-2">
          <span className="text-2xl">🏟️</span>
          <span className="text-2xl">🔒</span>
        </div>
        <p className="text-[#25006F] font-black text-sm text-center mb-1">Arena is Premium</p>
        <p className="text-[#756B93] text-[9px] text-center mb-3">Predict matches day by day and earn extra points</p>
        {[
          { icon: '⚽', label: 'Match result' },
          { icon: '🥅', label: 'Goalscorers' },
          { icon: '⭐', label: 'MVP of the match' },
        ].map((f) => (
          <div key={f.label} className="flex items-center gap-2 bg-[#F0EEFF] rounded-xl px-2.5 py-1.5 mb-1.5">
            <span className="text-xs">{f.icon}</span>
            <span className="text-[#25006F] text-[10px] font-semibold">{f.label}</span>
          </div>
        ))}
      </div>
      <p className="text-white/40 text-[8px] font-bold tracking-widest uppercase mb-1.5">Upcoming Matches</p>
      <div className="space-y-1.5 flex-1">
        {[
          { h: '🇺🇸', a: '🇯🇵', label: 'USA vs JPN', date: 'Jun 12 · 21:00' },
          { h: '🇪🇸', a: '🇧🇷', label: 'ESP vs BRA', date: 'Jun 13 · 18:00' },
          { h: '🇫🇷', a: '🇲🇽', label: 'FRA vs MEX', date: 'Jun 14 · 21:00' },
        ].map((m) => (
          <div key={m.label} className="flex items-center gap-1.5 bg-white/10 rounded-xl px-2.5 py-2">
            <span className="text-sm">{m.h}</span>
            <span className="text-white/30 text-[8px]">vs</span>
            <span className="text-sm">{m.a}</span>
            <span className="text-white text-[9px] font-medium flex-1 ml-0.5">{m.label}</span>
            <span className="text-white/25 text-xs">🔒</span>
          </div>
        ))}
      </div>
      <button className="mt-3 bg-[#D8FF00] text-[#25006F] font-black text-[10px] py-2.5 rounded-2xl text-center">
        🔒 Unlock Arena
      </button>
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ t, lang }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#25006F]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
        <Link href={`/${lang}`} className="text-white font-black text-xl tracking-tight">
          bet<span className="text-[#D8FF00]">mund</span>
        </Link>
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-2xl bg-[#3A12A3] border border-white/20 flex items-center justify-center shadow-lg" style={{ padding: '4px' }}>
            <img src="/trophy.png" alt="Betmund" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <LanguageSwitcher lang={lang} />
          <a href="#download" className="bg-[#D8FF00] text-[#25006F] font-bold text-sm px-5 py-2 rounded-full hover:bg-[#c8ef00] transition-colors">
            {t.navbar.download}
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─── Page sections ────────────────────────────────────────────────────────────

function Hero({ t, lang }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#25006F] via-[#3A12A3] to-[#5522D6] pt-[108px] flex flex-col">
      <div className="flex-1 flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-16 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block bg-[#D8FF00] text-[#25006F] text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                {t.hero.badge}
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
                {t.hero.h1a}<br />
                <span className="text-[#D8FF00]">{t.hero.h1b}</span>
              </h1>
              <p className="text-white/65 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="inline-flex items-center gap-3 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl px-5 py-3">
                  <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8FF00] opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D8FF00]"></span>
                  </span>
                  <p className="text-white/90 font-bold text-sm">{t.hero.launching}</p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <StoreButtons />
              </div>
            </div>
            <div className="flex gap-5 items-end flex-shrink-0">
              <div className="translate-y-8"><Phone><ScreenRanking /></Phone></div>
              <div className="-translate-y-8"><Phone><ScreenGroups /></Phone></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CreateLeagueSection({ t }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-[#756B93] font-semibold text-sm uppercase tracking-widest mb-3">{t.createLeague.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#25006F] mb-4 leading-tight">
              {t.createLeague.h2a}<br />{t.createLeague.h2b}
            </h2>
            <p className="text-[#756B93] text-lg mb-10 max-w-md mx-auto lg:mx-0">{t.createLeague.subtitle}</p>
            <div className="space-y-6">
              {t.createLeague.steps.map((s) => (
                <div key={s.title} className="flex gap-4 text-left">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{s.emoji}</span>
                  <div>
                    <h4 className="font-black text-[#25006F] text-base mb-0.5">{s.title}</h4>
                    <p className="text-[#756B93] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0"><Phone><ScreenCreateLeague /></Phone></div>
        </div>
      </div>
    </section>
  )
}

function Features({ t }) {
  return (
    <section className="bg-[#F7F5FF] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[#756B93] font-semibold text-sm uppercase tracking-widest mb-3 text-center">{t.features.eyebrow}</p>
        <h2 className="text-4xl md:text-5xl font-black text-[#25006F] mb-16 text-center leading-tight">{t.features.h2}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8">
            <div className="flex items-start justify-between mb-6">
              <span className="text-5xl">🏆</span>
              <span className="bg-[#D8FF00] text-[#25006F] text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide">{t.features.free}</span>
            </div>
            <h3 className="text-2xl font-black text-[#25006F] mb-3">{t.features.profeta.name}</h3>
            <p className="text-[#756B93] text-base leading-relaxed mb-6">{t.features.profeta.desc}</p>
            <ul className="space-y-2.5">
              {t.features.profeta.items.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-[#25006F] font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#D8FF00] flex items-center justify-center text-[10px] font-black flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#25006F] rounded-3xl p-8">
            <div className="flex items-start justify-between mb-6">
              <span className="text-5xl">⚡</span>
              <span className="bg-[#FBBF24] text-[#25006F] text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide">{t.features.premium}</span>
            </div>
            <h3 className="text-2xl font-black text-white mb-3">{t.features.arena.name}</h3>
            <p className="text-white/65 text-base leading-relaxed mb-6">{t.features.arena.desc}</p>
            <ul className="space-y-2.5">
              {t.features.arena.items.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-white/90 font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#FBBF24] flex items-center justify-center text-[10px] font-black text-[#25006F] flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowProfetaWorks({ t }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#D8FF00] text-[#25006F] text-xs font-black px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              {t.profeta.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#25006F] mb-10 leading-tight">
              {t.profeta.h2a}<br />{t.profeta.h2b}
            </h2>
            <div className="space-y-7">
              {t.profeta.steps.map((s) => (
                <div key={s.n} className="flex gap-5 text-left">
                  <span className="text-4xl font-black text-[#D8FF00] leading-none flex-shrink-0 [text-shadow:0_0_30px_rgba(216,255,0,0.3)]">{s.n}</span>
                  <div>
                    <h4 className="font-black text-[#25006F] text-lg mb-1">{s.title}</h4>
                    <p className="text-[#756B93] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-5 border border-[#E8E0FF] mt-10">
              <p className="text-[#756B93] text-[10px] font-bold tracking-widest uppercase mb-4">{t.profeta.scoringLabel}</p>
              <div className="space-y-2.5">
                {t.profeta.scoring.map(({ label, pts }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-[#756B93] text-sm">{label}</span>
                    <span className="text-[#3A12A3] font-black text-sm">+{pts} pts</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-end flex-shrink-0">
            <div className="translate-y-8"><Phone><ScreenGroups /></Phone></div>
            <div className="-translate-y-8 hidden sm:block"><Phone><ScreenAwards /></Phone></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowArenaWorks({ t }) {
  return (
    <section className="bg-[#25006F] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#FBBF24] text-[#25006F] text-xs font-black px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              {t.arena.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-10 leading-tight">
              {t.arena.h2a}<br />{t.arena.h2b}
            </h2>
            <div className="space-y-7">
              {t.arena.steps.map((s) => (
                <div key={s.n} className="flex gap-5 text-left">
                  <span className="text-4xl font-black text-[#FBBF24] leading-none flex-shrink-0">{s.n}</span>
                  <div>
                    <h4 className="font-black text-white text-lg mb-1">{s.title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white/10 rounded-2xl p-5 mt-10">
              <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-4">{t.arena.scoringLabel}</p>
              <div className="space-y-2.5">
                {t.arena.scoring.map(({ label, pts }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">{label}</span>
                    <span className="text-[#FBBF24] font-black text-sm">+{pts} pts</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0"><Phone><ScreenArena /></Phone></div>
        </div>
      </div>
    </section>
  )
}

function Download({ t }) {
  return (
    <section id="download" className="bg-[#D8FF00] py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-[#25006F] mb-5 leading-tight tracking-tight">{t.download.h2}</h2>
        <p className="text-[#25006F]/65 text-lg mb-10 max-w-md mx-auto">{t.download.subtitle}</p>
        <div className="inline-flex items-center gap-3 bg-[#25006F]/10 border border-[#25006F]/20 rounded-2xl px-6 py-4 mb-10">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25006F] opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25006F]"></span>
          </span>
          <p className="text-[#25006F] font-bold text-sm">{t.download.launching}</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <StoreButtons dark />
        </div>
      </div>
    </section>
  )
}

function Footer({ t, lang }) {
  const base = `/${lang}`
  return (
    <footer className="bg-[#25006F] py-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <Link href={base} className="text-white font-black text-xl tracking-tight">
          bet<span className="text-[#D8FF00]">mund</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/45">
          <Link href={`${base}/privacy`}          className="hover:text-white transition-colors">{t.footer.privacy}</Link>
          <Link href={`${base}/terms`}             className="hover:text-white transition-colors">{t.footer.terms}</Link>
          <Link href={`${base}/support`}           className="hover:text-white transition-colors">{t.footer.support}</Link>
          <Link href={`${base}/account-deletion`}  className="hover:text-white transition-colors">{t.footer.accountDeletion}</Link>
        </div>
        <p className="text-white/30 text-sm">© 2026 Betmund</p>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function Home({ params }) {
  const { lang } = await params
  if (!LANGS.includes(lang)) redirect('/en')
  const t = getT(lang)

  return (
    <>
      <Navbar t={t} lang={lang} />
      <Countdown messages={t.banner} />
      <main>
        <Hero t={t} lang={lang} />
        <CreateLeagueSection t={t} />
        <Features t={t} />
        <HowProfetaWorks t={t} />
        <HowArenaWorks t={t} />
        <Download t={t} />
      </main>
      <Footer t={t} lang={lang} />
    </>
  )
}
