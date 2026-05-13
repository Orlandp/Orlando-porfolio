import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "../utils/cn";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Theme state
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true; // default dark
  });

  useEffect(() => {
    // Add default dark mode if no class is present on load
    if (!document.documentElement.classList.contains("dark") && isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href: string, label: string) => {
    setMenuOpen(false);
    setActive(label);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={cn(
            "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
            scrolled ? "glass" : "bg-transparent"
          )}
        >
          <button
            onClick={() => scrollTo("#home", "Home")}
            className="font-display font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            Orlando<span className="text-primary">.</span>
          </button>

          <ul className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href, label)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors"
                >
                  <span className={cn("relative z-10", active === label ? "text-background dark:text-foreground" : "text-neutral-500 hover:text-foreground")}>
                    {label}
                  </span>
                  {active === label && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-foreground/10 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-neutral-500 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-2 p-4 glass-card md:hidden flex flex-col gap-2 origin-top"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href, label)}
                className={cn(
                  "p-3 text-sm font-medium rounded-xl text-left transition-colors",
                  active === label ? "bg-foreground/10 text-foreground" : "text-neutral-500 hover:text-foreground hover:bg-foreground/5"
                )}
              >
                {label}
              </button>
            ))}
            <div className="h-px bg-foreground/10 my-2" />
            <div className="flex items-center justify-between p-2">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-foreground"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                <span>Toggle Theme</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}