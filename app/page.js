import Link from 'next/link'

// ─── Icons ────────────────────────────────────────────────────────────────────

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
    <div
      className={`relative w-[210px] h-[430px] bg-[#0f0f0f] rounded-[40px] border-[3px] border-[#2a2a2a] shadow-[0_32px_80px_rgba(0,0,0,0.45)] overflow-hidden flex-shrink-0 ${className}`}
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0f0f0f] rounded-full z-10" />
      <div className="w-full h-full overflow-hidden">{children}</div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full z-10" />
    </div>
  )
}

// ─── App screens (CSS mockups) ────────────────────────────────────────────────

function ScreenRanking() {
  const rows = [
    { pos: 1, name: 'Jordi',  pts: 280, me: true },
    { pos: 2, name: 'Marc',   pts: 245 },
    { pos: 3, name: 'Ana',    pts: 220 },
    { pos: 4, name: 'Pere',   pts: 195 },
    { pos: 5, name: 'Lluís',  pts: 160 },
  ]
  return (
    <div className="h-full bg-[#3A12A3] p-5 pt-12">
      <p className="text-white/40 text-[9px] font-bold tracking-widest mb-0.5 uppercase">Liga Amigos</p>
      <h3 className="text-white font-black text-lg mb-5">Clasificación</h3>
      {rows.map((r) => (
        <div
          key={r.pos}
          className={`flex items-center rounded-2xl px-4 py-2.5 mb-2 ${r.me ? 'bg-[#D8FF00]' : 'bg-white/10'}`}
        >
          <span className={`text-xs font-bold w-5 ${r.me ? 'text-[#25006F]' : 'text-white/30'}`}>#{r.pos}</span>
          <span className={`font-semibold text-sm flex-1 ml-2 ${r.me ? 'text-[#25006F]' : 'text-white'}`}>{r.name}</span>
          <span className={`font-black text-xs ${r.me ? 'text-[#25006F]' : 'text-[#D8FF00]'}`}>{r.pts} pts</span>
        </div>
      ))}
    </div>
  )
}

function ScreenProfeta() {
  const teams = [
    { flag: '🇦🇷', name: 'Argentina', sel: true },
    { flag: '🇧🇷', name: 'Brasil',    sel: true },
    { flag: '🇲🇽', name: 'México',    sel: false },
    { flag: '🇵🇱', name: 'Polonia',   sel: false },
  ]
  return (
    <div className="h-full bg-[#3A12A3] p-5 pt-12">
      <p className="text-white/40 text-[9px] font-bold tracking-widest mb-0.5 uppercase">Profeta · Grupo A</p>
      <h3 className="text-white font-black text-lg mb-1">Elige 2 clasificados</h3>
      <p className="text-white/40 text-[10px] mb-5">Mundial 2026 · Fase de grupos</p>
      {teams.map((t) => (
        <div
          key={t.name}
          className={`flex items-center rounded-2xl px-4 py-2.5 mb-2 ${t.sel ? 'bg-[#D8FF00]' : 'bg-white/10'}`}
        >
          <span className="text-xl mr-3">{t.flag}</span>
          <span className={`font-semibold text-sm flex-1 ${t.sel ? 'text-[#25006F]' : 'text-white'}`}>{t.name}</span>
          {t.sel && <span className="text-[#25006F] font-black text-sm">✓</span>}
        </div>
      ))}
      <button className="w-full mt-3 bg-[#D8FF00] text-[#25006F] font-black text-sm py-3 rounded-2xl">
        Guardar picks
      </button>
    </div>
  )
}

function ScreenArena() {
  return (
    <div className="h-full bg-[#25006F] p-5 pt-12">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[#D8FF00] text-[9px] font-bold tracking-widest uppercase">Arena Live</p>
          <p className="text-white font-black text-base mt-0.5">Fase de grupos</p>
        </div>
        <span className="bg-red-500 px-2.5 py-1 rounded-full text-white text-[9px] font-bold tracking-wide">
          ● LIVE
        </span>
      </div>

      <div className="bg-white/10 rounded-2xl p-4 mb-4">
        <p className="text-white/40 text-[9px] font-bold tracking-widest text-center mb-3 uppercase">Resultado final</p>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <span className="text-3xl">🇪🇸</span>
            <p className="text-white text-[10px] font-bold mt-1">ESP</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">2</span>
            </div>
            <span className="text-white/30 font-bold">—</span>
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">1</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-3xl">🇧🇷</span>
            <p className="text-white text-[10px] font-bold mt-1">BRA</p>
          </div>
        </div>
      </div>

      <p className="text-white/40 text-[9px] font-bold tracking-widest mb-2 uppercase">Goleador</p>
      {[
        { name: 'Morata',      sel: true },
        { name: 'Vinicius Jr.', sel: false },
        { name: 'Yamal',       sel: false },
      ].map((p) => (
        <div
          key={p.name}
          className={`flex items-center rounded-xl px-3 py-2 mb-1.5 ${
            p.sel ? 'bg-[#D8FF00]/20 border border-[#D8FF00]/50' : 'bg-white/10'
          }`}
        >
          <span className="mr-2 text-sm">⚽</span>
          <span className={`text-xs font-semibold flex-1 ${p.sel ? 'text-[#D8FF00]' : 'text-white/80'}`}>
            {p.name}
          </span>
          {p.sel && <span className="text-[#D8FF00] text-xs font-black">+3</span>}
        </div>
      ))}
    </div>
  )
}

// ─── Layout components ────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#25006F]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-black text-xl tracking-tight">
          bet<span className="text-[#D8FF00]">mund</span>
        </Link>
        <a
          href="#download"
          className="bg-[#D8FF00] text-[#25006F] font-bold text-sm px-5 py-2 rounded-full hover:bg-[#c8ef00] transition-colors"
        >
          Download
        </a>
      </div>
    </nav>
  )
}

// ─── Page sections ────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#25006F] via-[#3A12A3] to-[#5522D6] flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#D8FF00] text-[#25006F] text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              World Cup 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              Your World Cup.<br />
              <span className="text-[#D8FF00]">Your League.</span>
            </h1>
            <p className="text-white/65 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Create a private league, predict the tournament, and compete with
              friends — round by round, match by match.
            </p>
            <div className="flex justify-center lg:justify-start">
              <StoreButtons />
            </div>
          </div>

          {/* Phones */}
          <div className="flex gap-5 items-end flex-shrink-0">
            <div className="translate-y-8">
              <Phone><ScreenRanking /></Phone>
            </div>
            <div className="-translate-y-8">
              <Phone><ScreenProfeta /></Phone>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[#756B93] font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Two ways to play
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-[#25006F] mb-16 text-center leading-tight">
          Pick your game
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Profeta */}
          <div className="bg-[#F7F5FF] rounded-3xl p-8">
            <div className="flex items-start justify-between mb-6">
              <span className="text-5xl">🏆</span>
              <span className="bg-[#D8FF00] text-[#25006F] text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                Free
              </span>
            </div>
            <h3 className="text-2xl font-black text-[#25006F] mb-3">Profeta</h3>
            <p className="text-[#756B93] text-base leading-relaxed mb-6">
              Make your tournament predictions before the World Cup starts. Pick group
              qualifiers, the knockout bracket, and award winners. Compete all summer long.
            </p>
            <ul className="space-y-2.5">
              {[
                'Group stage qualifiers',
                'Full knockout bracket',
                "Best Player & Top Scorer picks",
                'Season-long private league ranking',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-[#25006F] font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#D8FF00] flex items-center justify-center text-[10px] font-black flex-shrink-0">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Arena */}
          <div className="bg-[#25006F] rounded-3xl p-8">
            <div className="flex items-start justify-between mb-6">
              <span className="text-5xl">⚡</span>
              <span className="bg-[#FBBF24] text-[#25006F] text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                Premium
              </span>
            </div>
            <h3 className="text-2xl font-black text-white mb-3">Arena</h3>
            <p className="text-white/65 text-base leading-relaxed mb-6">
              Go live during the tournament. Predict the exact score, goalscorers, and MVP
              for every match. Earn points in real time as games are played.
            </p>
            <ul className="space-y-2.5">
              {[
                'Live match score prediction',
                'Goalscorer picks (+3 pts each)',
                'MVP of the match (+5 pts)',
                'Real-time ranking updates',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-white/90 font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#FBBF24] flex items-center justify-center text-[10px] font-black text-[#25006F] flex-shrink-0">
                    ✓
                  </span>
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

function HowProfetaWorks() {
  const steps = [
    {
      n: '01',
      title: 'Create your league',
      desc: 'Set up a private league and invite friends with a single link. You control who joins.',
    },
    {
      n: '02',
      title: 'Make your predictions',
      desc: 'Before the World Cup starts, pick group qualifiers, the knockout bracket, and award winners.',
    },
    {
      n: '03',
      title: 'Track the ranking all season',
      desc: 'Picks lock at kickoff. Points accumulate round by round — check the leaderboard after every match.',
    },
  ]
  return (
    <section className="bg-[#F7F5FF] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#D8FF00] text-[#25006F] text-xs font-black px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Profeta · Free
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#25006F] mb-12 leading-tight">
              How Profeta<br />works
            </h2>
            <div className="space-y-8">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5 text-left">
                  <span className="text-4xl font-black text-[#D8FF00] leading-none flex-shrink-0 [text-shadow:0_0_30px_rgba(216,255,0,0.4)]">
                    {s.n}
                  </span>
                  <div>
                    <h4 className="font-black text-[#25006F] text-lg mb-1">{s.title}</h4>
                    <p className="text-[#756B93] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <Phone><ScreenProfeta /></Phone>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowArenaWorks() {
  const steps = [
    {
      n: '01',
      title: 'Upgrade to Arena',
      desc: 'League admins activate Arena in league settings. One upgrade covers the full tournament.',
    },
    {
      n: '02',
      title: 'Predict each match live',
      desc: 'Before kickoff, pick the final score, who scores, and who wins MVP. Predictions lock at kickoff.',
    },
    {
      n: '03',
      title: 'Earn real-time points',
      desc: 'Points land as goals are scored and matches end. Watch the ranking shift after every game.',
    },
  ]
  return (
    <section className="bg-[#25006F] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-[#FBBF24] text-[#25006F] text-xs font-black px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Arena · Premium
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-12 leading-tight">
              How Arena<br />works
            </h2>
            <div className="space-y-8">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5 text-left">
                  <span className="text-4xl font-black text-[#FBBF24] leading-none flex-shrink-0">
                    {s.n}
                  </span>
                  <div>
                    <h4 className="font-black text-white text-lg mb-1">{s.title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <Phone><ScreenArena /></Phone>
          </div>
        </div>
      </div>
    </section>
  )
}

function Download() {
  return (
    <section id="download" className="bg-[#D8FF00] py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-[#25006F] mb-5 leading-tight tracking-tight">
          Ready to play?
        </h2>
        <p className="text-[#25006F]/65 text-lg mb-10 max-w-md mx-auto">
          Join your friends in a private league. The 2026 World Cup starts soon.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <StoreButtons dark />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#25006F] py-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <Link href="/" className="text-white font-black text-xl tracking-tight">
          bet<span className="text-[#D8FF00]">mund</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/45">
          <Link href="/privacy"          className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms"            className="hover:text-white transition-colors">Terms</Link>
          <Link href="/support"          className="hover:text-white transition-colors">Support</Link>
          <Link href="/account-deletion" className="hover:text-white transition-colors">Account Deletion</Link>
        </div>
        <p className="text-white/30 text-sm">© 2026 Betmund</p>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowProfetaWorks />
        <HowArenaWorks />
        <Download />
      </main>
      <Footer />
    </>
  )
}
