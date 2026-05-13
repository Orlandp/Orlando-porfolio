import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2 } from 'lucide-react';

const ROLES = ['Frontend Developer', 'React Specialist', 'TypeScript Expert', 'UI/UX Enthusiast'];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center"
      >
        <motion.div 
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10"
          whileHover={{ scale: 1.05 }}
        >
          <Code2 size={16} className="text-primary" />
          <span className="text-sm font-medium">Hello, World!</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black text-foreground leading-tight mb-6">
          I'm <span className="text-gradient">James</span><br />
          <span className="text-4xl md:text-6xl text-neutral-400 font-display">Building Digital Experiences</span>
        </h1>

        <div className="h-8 mb-8 overflow-hidden relative">
          <motion.div
            key={roleIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="text-lg md:text-xl font-medium text-neutral-300"
          >
            {ROLES[roleIndex]}
          </motion.div>
        </div>

        <p className="max-w-xl text-neutral-400 leading-relaxed text-base md:text-lg mb-10">
          Crafting fast, accessible, and visually stunning web interfaces using
          React, TypeScript, Framer Motion, and Tailwind CSS.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollTo('#projects')}
            className="px-8 py-3 bg-foreground text-background hover:bg-neutral-200 font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            View Work
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 glass hover:bg-white/10 text-foreground font-semibold rounded-full transition-all border border-white/10 flex items-center gap-2"
          >
            Resume
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="px-8 py-3 glass hover:bg-white/10 text-foreground font-semibold rounded-full transition-all border border-white/10"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollTo('#about')}
      >
        <span className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Scroll down</span>
        <ArrowDown size={20} className="text-neutral-500" />
      </motion.div>
    </section>
  );
}