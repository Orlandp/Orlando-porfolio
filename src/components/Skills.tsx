import { useState, useEffect, useRef } from 'react'

interface Skill {
    name: string
    level: number
}

interface SkillGroup {
    category: string
    skills:   Skill[]
}

const GROUPS: SkillGroup[] = [
    {
        category: 'Frontend',
        skills: [
            { name: 'HTML & CSS',    level: 75 },
            { name: 'JavaScript',    level: 75 },
            { name: 'React',        level: 75 },
            { name: 'Tailwind CSS', level: 75 },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Python',       level: 75 },
            { name: 'Flask',        level: 75 },
            { name: 'REST APIs',    level: 75 },
            { name: 'PostgreSQL',   level: 70 },
            { name: 'Docker',       level: 70 },
        ],
    },
]

export default function Skills() {
    const ref = useRef<HTMLElement>(null)

    const [hovered, setHovered] = useState<string | null>(null)

    const [revealed, setRevealed] = useState<boolean>(false)

     useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-28 px-6 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-xs font-semibold uppercase tracking-[0.15em] text-red-500 mb-3">
          Technical Skills
        </p>
        <h2 className="reveal text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight mb-3">
          What I work with
        </h2>
        <p className="reveal text-sm text-gray-500 max-w-md mb-12">
          Proficiency based on real project experience — not just tutorials.
        </p>

        {GROUPS.map((group, gi) => (
          <div key={group.category} className={gi > 0 ? 'mt-12' : ''}>
            <div className="reveal flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                {group.category}
              </span>
            </div>

            <ul className="reveal grid sm:grid-cols-2 gap-x-16 gap-y-6 max-w-2xl">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  onMouseEnter={() => setHovered(skill.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex justify-between mb-1.5">
                    <span
                      className={`text-sm transition-colors ${
                        hovered === skill.name ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {skill.name}
                    </span>
                    <span
                      className={`text-xs transition-colors ${
                        hovered === skill.name ? 'text-red-500 dark:text-red-400' : 'text-gray-500 dark:text-gray-600'
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-[2px] bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-red-500 transition-[width] duration-1000 ease-out"
                      style={{ width: revealed ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* tooltip — only shows when hovered is not null */}
        {hovered && (
          <p className="mt-8 text-xs text-gray-500">
            Hovering: <span className="text-red-500 dark:text-red-400 font-medium">{hovered}</span>
          </p>
        )}
      </div>
    </section>
  )
}
