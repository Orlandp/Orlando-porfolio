import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Coffee, Rocket } from 'lucide-react';

const STATS = [
  { label: 'Years coding', target: 2, suffix: '+', icon: Terminal },
  { label: 'Projects shipped', target: 10, suffix: '+', icon: Rocket },
  { label: 'Technologies', target: 8, suffix: '+', icon: Lightbulb },
  { label: 'Passion', target: 100, suffix: '%', icon: Coffee },
];

const BADGES = ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML', 'CSS', 'Figma'];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3"
        >
          About me
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-16"
        >
          Turning ideas into<br />
          <span className="text-neutral-500 font-display">pixel-perfect reality.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-neutral-400 text-base leading-relaxed"
          >
            <p>
              I'm a self-taught frontend developer with a sharp eye for design
              and a deep respect for clean code. I believe that a great user experience starts with a solid foundation.
            </p>
            <p>
              My stack revolves around{' '}
              <span className="text-foreground font-medium">React</span>,{' '}
              <span className="text-foreground font-medium">TypeScript</span>, and{' '}
              <span className="text-foreground font-medium">Tailwind CSS</span>.
            </p>
            <p>
              When I'm not coding, I'm studying new frameworks, sketching
              side projects that scratch my own itch, or finding inspiration in everyday design.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {BADGES.map((b, i) => (
                <motion.span 
                  key={b} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.05) }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                  className="text-xs font-medium text-neutral-300 border border-white/10 px-4 py-2 rounded-full cursor-default transition-colors"
                >
                  {b}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 flex flex-col justify-between group"
                >
                  <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-primary/20 group-hover:text-primary transition-colors text-neutral-400">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-4xl font-black text-foreground mb-1">
                      {stat.target}<span className="text-primary">{stat.suffix}</span>
                    </p>
                    <p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 