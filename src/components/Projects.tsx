import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ALL: Project[] = [
  {
    title: 'Portfolio Site',
    description: 'React + TypeScript + Vite + Tailwind. Smooth scroll, active nav, typed component architecture, and Framer Motion animations.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer'],
    liveUrl: '#',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    title: 'React Dashboard',
    description: 'Admin dashboard with data charts, filterable tables, dark mode, and responsive layout.',
    tags: ['React', 'TypeScript', 'Recharts', 'Tailwind'],
    liveUrl: '#',
    repoUrl: 'https://github.com',
  },
  {
    title: 'UI Component Library',
    description: '20+ typed React components — buttons, inputs, modals, toasts — with Storybook docs.',
    tags: ['React', 'TypeScript', 'Storybook', 'Tailwind'],
    repoUrl: 'https://github.com',
  },
  {
    title: 'Landing Page Kit',
    description: 'Responsive landing page sections built with Tailwind CSS — hero, features, pricing, footer.',
    tags: ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
    repoUrl: 'https://github.com',
  },
];

const ALL_TAGS = ['All', ...Array.from(new Set(ALL.flatMap((p) => p.tags)))];

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const shown = filter === 'All' ? ALL : ALL.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3"
            >
              Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-foreground"
            >
              Things I've built
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-sm text-sm"
          >
            A selection of projects that showcase my ability to design and build scalable frontend applications.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${
                filter === tag
                  ? 'bg-foreground text-background shadow-md'
                  : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-foreground'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={p.title}
                className={`group relative flex flex-col gap-4 p-6 sm:p-8 rounded-2xl transition-all border ${
                  p.featured
                    ? 'bg-primary/5 border-primary/20 hover:border-primary/50'
                    : 'glass-card hover:border-white/20'
                }`}
              >
                {p.featured && (
                  <span className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
                
                <h3 className="text-2xl font-bold text-foreground pr-20">{p.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed flex-1">{p.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 mt-2 border-t border-white/5">
                  {p.repoUrl && (
                    <a href={p.repoUrl} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-foreground transition-colors">
                      <Code2 size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
 