import {useState, useEffect} from 'react'
import profilePhoto from '../assets/profile.jpg'

const ROLES = ['Frontend Developer', 'React specialist', 'Typescript developer']

export default function Home() {
    const [roleIndex, setRolexIndex] = useState<number>(0)

    const [visible, setVisible] = useState<boolean>(true)

    useEffect(() =>  {
        const id = setInterval(() => {
            setVisible(false)
            setTimeout(() => {
                setRolexIndex((i) => (i + 1) % ROLES.length)
                setVisible(true)

            }, 500)

        }, 2500)
        return () => clearInterval(id)
    }, [])

    const scrollTo =(id: string) =>
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

    return(
        <section id="home"
        className= "relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
            <div className="grid-overlay absolute inset-0 pointer-events-none" />
            <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(224,48,48,0.12) 0%,transparent 70%)' }}

            />
              <div className="hero-enter relative mb-8">
        <div
          className="w-28 h-28 rounded-full p-0.5 mx-auto"
          style={{ background: 'linear-gradient(135deg,#e03030,#ff6b6b,#7f1d1d)' }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
            <img src={profilePhoto} alt="James" className="w-full h-full object-cover" />
          </div>
        </div>
         <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white dark:border-black" />
      </div>

      <p
        className="hero-enter text-xs font-semibold tracking-[0.3em] uppercase text-red-500 mb-3"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}
      >
        {ROLES[roleIndex]}
      </p>

      <h1 className="hero-enter text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-none mb-5 tracking-tight">
        Hi, I'm<br />
        <span className="text-red-500">JAMES</span>
      </h1>

      <p className="hero-enter max-w-lg text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base mb-10">
        Building fast, accessible, and visually sharp web interfaces using
        React, TypeScript, and Tailwind CSS.
      </p>

      <div className="hero-enter flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => scrollTo('#projects')}
          className="px-7 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest rounded-md transition-all hover:-translate-y-0.5"
        >
          View Work
        </button>
        <button
          onClick={() => scrollTo('#contact')}
          className="px-7 py-3 border border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs font-bold uppercase tracking-widest rounded-md transition-all hover:-translate-y-0.5"
        >
          Contact Me
        </button>
        <a
          href="/James_Blessing_CV.pdf"
          download
          className="px-7 py-3 border border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs font-bold uppercase tracking-widest rounded-md transition-all hover:-translate-y-0.5"
        >
          Download CV
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-400 dark:text-gray-700 uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4 text-gray-400 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
        </div>
        </section>
     )

}
