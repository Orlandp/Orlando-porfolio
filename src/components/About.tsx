import { useState, useEffect, useRef } from 'react'
 
interface Stat {
  label:  string
  target: number
  suffix: string
}
 
const STATS: Stat[] = [
  { label: 'Years coding',      target: 2,   suffix: '+' },
  { label: 'Projects shipped',  target: 10,  suffix: '+' },
  { label: 'Technologies',      target: 8,   suffix: '+' },
  { label: 'Passion for craft', target: 100, suffix: '%' },
]
 
const BADGES = ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML', 'CSS', 'Figma']
 
export default function About() {
  const ref = useRef<HTMLElement>(null)
 
  // useState: current displayed value for each stat counter
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0])
 
  // useEffect: count up when section enters the viewport
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect() // only trigger once
 
        STATS.forEach((stat, i) => {
          const steps = 40
          const inc   = stat.target / steps
          let   cur   = 0
 
          const id = setInterval(() => {
            cur += inc
            if (cur >= stat.target) { cur = stat.target; clearInterval(id) }
            setCounts((prev) => {
              const next = [...prev]
              next[i] = Math.round(cur)
              return next
            })
          }, 1200 / steps)
        })
      },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
 
  return (
    <section id="about" ref={ref} className="py-28 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-red-500 mb-3">
          About me
        </p>
        <h2 className="reveal text-4xl md:text-5xl font-black text-white leading-tight mb-16">
          Turning ideas into<br />
          <span className="text-gray-600">pixel-perfect reality</span>
        </h2>
 
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="reveal space-y-5 text-gray-400 text-sm leading-relaxed">
            <p>
              I'm a self-taught frontend developer with a sharp eye for design
              and a deep respect for clean code.
            </p>
            <p>
              My stack revolves around{' '}
              <span className="text-white font-medium">React</span>,{' '}
              <span className="text-white font-medium">TypeScript</span>, and{' '}
              <span className="text-white font-medium">Tailwind CSS</span>.
            </p>
            <p>
              When I'm not coding, I'm studying new frameworks or sketching
              side projects that scratch my own itch.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {BADGES.map((b) => (
                <span key={b} className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>
 
          {/* counts[i] is updated by useEffect as the counter runs */}
          <div className="reveal grid grid-cols-2 gap-3">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-6 hover:border-red-500/30 transition-colors"
              >
                <p className="text-3xl font-black text-red-400">
                  {counts[i]}{stat.suffix}
                </p>
                <p className="text-xs text-gray-600 uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
 