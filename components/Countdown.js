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

function Pad({ n }) {
  return String(n).padStart(2, '0')
}

export default function Countdown() {
  const [t, setT] = useState(null)

  useEffect(() => {
    setT(calcTimeLeft())
    const id = setInterval(() => setT(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!t) return null

  const units = [
    { value: t.days,    label: 'DAYS' },
    { value: t.hours,   label: 'HRS'  },
    { value: t.minutes, label: 'MIN'  },
    { value: t.seconds, label: 'SEC'  },
  ]

  return (
    <div className="inline-flex flex-col items-center lg:items-start mb-10">
      <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-3">
        Kickoff · Jun 11, 2026
      </p>
      <div className="flex items-end gap-1.5">
        {units.map(({ value, label }, i) => (
          <div key={label} className="flex items-end gap-1.5">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl px-3.5 py-2.5 min-w-[58px] text-center">
                <span className="text-[#D8FF00] font-black text-3xl tabular-nums leading-none">
                  <Pad n={value} />
                </span>
              </div>
              <span className="text-white/35 text-[9px] font-bold tracking-widest mt-1.5">{label}</span>
            </div>
            {i < 3 && (
              <span className="text-white/25 font-black text-2xl leading-none mb-4">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
