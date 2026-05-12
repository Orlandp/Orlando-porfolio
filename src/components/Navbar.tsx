import { useState, useEffect} from "react";

interface NavLinks {
    label: string;
    href: string;
}

const NAV_LINKS: NavLinks[] = [
    { label: "Home" , href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
]

export default function Navbar() {
    const [active, setActive] = useState<string>("Home")

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect(() => {
        const obs= new IntersectionObserver(
            (entries) => 
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id)
                }),
            { threshold: 0.5 }
        )
        
        NAV_LINKS.forEach(({ href }) => {
            const el = document.querySelector(href)
            if (el) obs.observe(el)

        })

        return () => obs.disconnect()
    }, [])

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 24)
        window.addEventListener("scroll", fn)
        return () => window.removeEventListener("scroll", fn) 
        } ,[])

    const scrollTo = (href: string) => {
      setMenuOpen(false)
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

    }

     return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-black/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('#home')}
          className="font-black text-xl tracking-widest uppercase text-white hover:text-red-400 transition-colors"
        >
          Orlando<span className="text-red-500">.</span>
        </button>
 
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            return (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className={`text-xs font-semibold uppercase tracking-widest pb-0.5 border-b-2 transition-colors ${
                    active === id
                      ? 'text-white border-red-500'
                      : 'text-gray-500 border-transparent hover:text-gray-200'
                  }`}
                >
                  {label}
                </button>
              </li>
            )
          })}
        </ul>
 
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-400 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-400 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
 
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-72' : 'max-h-0'}`}>
        <ul className="bg-black/95 border-t border-white/5 px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-red-400 transition-colors"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )

    

}