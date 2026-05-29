'use client'

import { useEffect, useState } from 'react'

const TARGET = new Date('2026-06-11T23:00:00Z')

function calcTimeLeft() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return null
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000)  / 60000),
    seconds: Math.floor((diff % 60000)    / 1000),
  }
}

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function CountdownBanner() {
  const [t, setT] = useState(null)

  useEffect(() => {
    setT(calcTimeLeft())
    const id = setInterval(() => setT(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-[#D8FF00] h-11">
      <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">

        <p className="text-[#25006F] font-bold text-sm hidden sm:block">
          ⚽ Gather your squad — the biggest World Cup ever is almost here.
        </p>
        <p className="text-[#25006F] font-bold text-sm sm:hidden">
          ⚽ The World Cup is coming!
        </p>

        {t ? (
          <div className="flex items-center gap-1 font-black text-[#25006F] tabular-nums text-sm flex-shrink-0">
            <span>{pad(t.days)}<span className="font-normal text-[#25006F]/50 text-xs ml-0.5">d</span></span>
            <span className="text-[#25006F]/30 mx-0.5">:</span>
            <span>{pad(t.hours)}<span className="font-normal text-[#25006F]/50 text-xs ml-0.5">h</span></span>
            <span className="text-[#25006F]/30 mx-0.5">:</span>
            <span>{pad(t.minutes)}<span className="font-normal text-[#25006F]/50 text-xs ml-0.5">m</span></span>
            <span className="text-[#25006F]/30 mx-0.5">:</span>
            <span>{pad(t.seconds)}<span className="font-normal text-[#25006F]/50 text-xs ml-0.5">s</span></span>
          </div>
        ) : (
          <span className="text-[#25006F] font-black text-sm">🏆 It has begun!</span>
        )}

      </div>
    </div>
  )
}
