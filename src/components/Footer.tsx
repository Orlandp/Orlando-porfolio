import { useState, useEffect } from 'react';
import { ArrowUp, Terminal, MessageSquare, Globe, AtSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com', icon: Terminal },
  { label: 'X (Twitter)', href: 'https://x.com/vite_js', icon: AtSign },
  { label: 'Discord', href: 'https://chat.vite.dev/', icon: MessageSquare },
  { label: 'Bluesky', href: 'https://bsky.app/profile/vite.dev', icon: Globe },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <footer className="border-t border-white/5 relative">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute -top-5 right-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-500 tracking-wide font-medium">
          © {new Date().getFullYear()}{' '}
          <span className="text-foreground">Orlando</span>.
          {' '}Built with React & Framer Motion.
        </p>

        <ul className="flex items-center gap-6">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-neutral-500 hover:text-primary transition-colors block"
              >
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}