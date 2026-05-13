import { useState, useEffect } from 'react'
 
interface Project {
  title:       string
  description: string
  tags:        string[]
  repoUrl?:    string
  liveUrl?:    string
  featured?:   boolean
}
 
const ALL: Project[] = [
  {
    title:       'Portfolio Site',
    description: 'React + TypeScript + Vite + Tailwind. Smooth scroll, active nav, typed component architecture.',
    tags:        ['React', 'TypeScript', 'Vite', 'Tailwind'],
    liveUrl:     '#',
    repoUrl:     'https://github.com',
    featured:    true,
  },
  {
    title:       'React Dashboard',
    description: 'Admin dashboard with data charts, filterable tables, dark mode, and responsive layout.',
    tags:        ['React', 'TypeScript', 'Recharts', 'Tailwind'],
    liveUrl:     '#',
    repoUrl:     'https://github.com',
  },
  {
    title:       'UI Component Library',
    description: '20+ typed React components — buttons, inputs, modals, toasts — with Storybook docs.',
    tags:        ['React', 'TypeScript', 'Storybook', 'Tailwind'],
    repoUrl:     'https://github.com',
  },
  {
    title:       'Landing Page Kit',
    description: 'Responsive landing page sections built with Tailwind CSS — hero, features, pricing, footer.',
    tags:        ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
    repoUrl:     'https://github.com',
  },
]
 
const ALL_TAGS = ['All', ...Array.from(new Set(ALL.flatMap((p) => p.tags)))]
 
export default function Projects() {
  // useState: active tag filter — starts at 'All'
  const [filter, setFilter] = useState<string>('All')
 
  // useEffect: runs a side effect whenever filter changes
  useEffect(() => {
    console.log(`Projects filter changed → ${filter}`)
    
  }, [filter]) // dependency array — re-runs when filter changes
 
  
  const shown =
    filter === 'All' ? ALL : ALL.filter((p) => p.tags.includes(filter))
 
  return (
    <section id="projects" className="py-28 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-red-500 mb-3">
          Work
        </p>
        <h2 className="reveal text-4xl md:text-5xl font-black text-white leading-tight mb-3">
          Things I've built
        </h2>
        <p className="reveal text-sm text-gray-500 max-w-md mb-10">
          A selection of projects that show how I think, build, and ship.
        </p>
 
        {/* filter buttons — clicking updates useState */}
        <div className="reveal flex flex-wrap gap-2 mb-4">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-md border transition-all ${
                filter === tag
                  ? 'bg-red-600 border-red-600 text-white'
                  : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
 
        <p className="text-xs text-gray-600 mb-8">
          Showing {shown.length} of {ALL.length} projects
        </p>
 
        <div className="grid sm:grid-cols-2 gap-4">
          {shown.map((p) => (
            <article
              key={p.title}
              className={`reveal relative flex flex-col gap-4 p-6 rounded-xl border transition-all hover:-translate-y-0.5 ${
                p.featured
                  ? 'bg-red-950/20 border-red-500/25 hover:border-red-500/50'
                  : 'bg-white/[0.02] border-white/8 hover:border-white/20'
              }`}
            >
              {p.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase text-red-400 border border-red-500/40 px-2 py-0.5 rounded-full">
                  Featured
                </span>
              )}
              <h3 className="text-white font-bold text-lg pr-20">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-[11px] text-gray-600 border border-white/10 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-5 pt-1">
                {p.repoUrl && (
                  <a href={p.repoUrl} target="_blank" rel="noreferrer"
                    className="text-xs text-gray-500 hover:text-white transition-colors">
                    GitHub
                  </a>
                )}
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer"
                    className="text-xs text-red-400 hover:text-red-300 transition-colors">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
 