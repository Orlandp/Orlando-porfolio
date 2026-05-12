import { useState, useEffect } from 'react'

const SOCIALS = [
  { label: 'GitHub',  href: 'https://github.com',              iconId: 'github-icon'  },
  { label: 'X.com',   href: 'https://x.com/vite_js',          iconId: 'x-icon'       },
  { label: 'Discord', href: 'https://chat.vite.dev/',          iconId: 'discord-icon' },
  { label: 'Bluesky', href: 'https://bsky.app/profile/vite.dev', iconId: 'bluesky-icon'},
]

export default function Footer() {
  
  const [showTop, setShowTop] = useState<boolean>(false)

  
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn) 
  }, []) 

  return (
    <footer className="bg-black border-t border-white/5 relative">

      
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute -top-5 right-6 w-10 h-10 bg-red-600 hover:bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:-translate-y-0.5"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600 tracking-wide">
          © {new Date().getFullYear()}{' '}
          <span className="text-gray-500 font-semibold">Orlando</span>.
          {' '}Built with React · TypeScript · Tailwind.
        </p>

        <ul className="flex items-center gap-5">
          {SOCIALS.map(({ label, href, iconId }) => (
            <li key={iconId}>
              <a
                href={href} target="_blank" rel="noreferrer"
                aria-label={label}
                className="text-gray-600 hover:text-red-400 transition-colors block"
              >
                <svg className="w-4 h-4" role="presentation" aria-hidden="true">
                  <use href={`/icons.svg#${iconId}`} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}