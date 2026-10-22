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
    title:       'Rental-ACE',
    description: 'Property management platform for landlords, agents, and tenants — units, rent, invoices, M-Pesa payments with emailed receipts, and branded PDF agreements.',
    tags:        ['React', 'Flask', 'PostgreSQL', 'Docker', 'M-Pesa'],
    liveUrl:     'https://acerental.olando.co.ke',
    repoUrl:     'https://github.com/Orlandp/Rental-ACE',
    featured:    true,
  },
  {
    title:       'Awelando Cars (car-rental-platform)',
    description: 'Full-stack car rental booking platform with an admin dashboard for fleet and reservation management, backed by a Flask API and PostgreSQL.',
    tags:        ['React', 'Flask', 'PostgreSQL', 'Docker'],
    liveUrl:     'https://carrental.olando.co.ke',
    repoUrl:     'https://github.com/Orlandp/car-rental-platform',
    featured:    true,
  },
  {
    title:       'Eagles Portal (EEnovators)',
    description: 'Energy monitoring platform for EEnovators — live power tracking, historical analysis, billing verification, and anomaly detection measured directly from meters on site.',
    tags:        ['React', 'Energy Monitoring'],
    liveUrl:     'https://eagles.eenovators.com',
    featured:    true,
  },
  {
    title:       'Portfolio Site',
    description: 'React + TypeScript + Vite + Tailwind. Smooth scroll, active nav, typed component architecture.',
    tags:        ['React', 'TypeScript', 'Vite', 'Tailwind'],
    repoUrl:     'https://github.com/Orlandp/Orlando-porfolio',
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
    <section id="projects" className="py-28 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-xs font-semibold uppercase tracking-[0.15em] text-red-500 mb-3">
          Work
        </p>
        <h2 className="reveal text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight mb-3">
          Things I've built
        </h2>
        <p className="reveal text-sm text-gray-500 max-w-md mb-10">
          A selection of projects that show how I think, build, and ship. Click a card to open it.
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
                  : 'border-black/10 dark:border-white/10 text-gray-500 hover:border-black/30 dark:hover:border-white/30 hover:text-gray-900 dark:hover:text-gray-200'
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
          {shown.map((p) => {
            const primaryUrl = p.liveUrl ?? p.repoUrl
            return (
              <article
                key={p.title}
                onClick={() => primaryUrl && window.open(primaryUrl, '_blank', 'noreferrer')}
                className={`reveal relative flex flex-col gap-4 p-6 rounded-xl border transition-all hover:-translate-y-0.5 ${
                  primaryUrl ? 'cursor-pointer' : ''
                } ${
                  p.featured
                    ? 'bg-red-50 dark:bg-red-950/20 border-red-500/25 hover:border-red-500/50'
                    : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/8 dark:border-white/8 hover:border-black/20 dark:hover:border-white/20'
                }`}
              >
                {p.featured && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase text-red-500 dark:text-red-400 border border-red-500/40 px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
                <h3 className="text-gray-900 dark:text-white font-bold text-lg pr-20">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[11px] text-gray-600 border border-black/10 dark:border-white/10 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5 pt-1">
                  {p.repoUrl && (
                    <a href={p.repoUrl} target="_blank" rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                      GitHub
                    </a>
                  )}
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors">
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
