import { useState, useEffect, useRef } from 'react'

interface Skill { 
    name: string
    level: number
}

const SKILLS: Skill[] = [
    { name: 'HTML $ CSS', level: 75 },
    { name: 'Javascript', level: 75 },
    { name: 'React', level: 75 },
    { name:  'Tailwind Css', level: 75 },
]

export default function Skills() {
    const ref = useRef<HTMLElement>(null)

    const [hovered, setHovered] = useState<string | null>(null)

     useEffect(() => {
    const fills = ref.current?.querySelectorAll<HTMLElement>('[data-fill]')
    if (!fills) return
 
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fills.forEach((el) => el.classList.add('skill-animate'))
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
 
  return (
    <section id="skills" ref={ref} className="py-28 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-red-500 mb-3">
          Technical Skills
        </p>
        <h2 className="reveal text-4xl md:text-5xl font-black text-white leading-tight mb-3">
          What I work with
        </h2>
        <p className="reveal text-sm text-gray-500 max-w-md mb-12">
          Proficiency based on real project experience — not just tutorials.
        </p>
 
        <div className="reveal flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Frontend
          </span>
        </div>
 
        <ul className="reveal grid sm:grid-cols-2 gap-x-16 gap-y-6 max-w-2xl">
          {SKILLS.map((skill) => (
            <li
              key={skill.name}
              onMouseEnter={() => setHovered(skill.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex justify-between mb-1.5">
                {/* colour driven by useState hovered */}
                <span
                  className={`text-sm transition-colors ${
                    hovered === skill.name ? 'text-white font-medium' : 'text-gray-400'
                  }`}
                >
                  {skill.name}
                </span>
                <span
                  className={`text-xs transition-colors ${
                    hovered === skill.name ? 'text-red-400' : 'text-gray-600'
                  }`}
                >
                  {skill.level}%
                </span>
              </div>
              <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                {/* useEffect adds skill-animate class on scroll */}
                <div
                  data-fill
                  className="h-full rounded-full bg-red-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
 
        {/* tooltip — only shows when hovered is not null */}
        {hovered && (
          <p className="mt-8 text-xs text-gray-500">
            Hovering: <span className="text-red-400 font-medium">{hovered}</span>
          </p>
        )}
      </div>
    </section>
  )
}