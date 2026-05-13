import { motion } from 'framer-motion';
import { Layout, Palette, Code2, Database, CheckCircle2, RefreshCw, CircleDashed } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend Frameworks',
    icon: Layout,
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'Vue.js', level: 60 },
    ],
  },
  {
    title: 'Styling & UI',
    icon: Palette,
    skills: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
      { name: 'SASS', level: 80 },
    ],
  },
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    title: 'Backend & Tools',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Git', level: 85 },
      { name: 'Vite', level: 90 },
    ],
  },
];

const LEARNING_JOURNEY = [
  {
    status: 'Mastered',
    skills: ['React Native', 'Redux', 'Jest'],
    icon: CheckCircle2,
    colorClass: 'text-green-500',
    bgClass: 'bg-green-500/10 border-green-500/20'
  },
  {
    status: 'Currently Learning',
    skills: ['GraphQL', 'Rust', 'WebGL'],
    icon: RefreshCw,
    colorClass: 'text-primary',
    bgClass: 'bg-primary/10 border-primary/20',
    active: true
  },
  {
    status: 'Next Up',
    skills: ['WebAssembly', 'Three.js'],
    icon: CircleDashed,
    colorClass: 'text-neutral-500',
    bgClass: 'bg-foreground/5 border-foreground/10'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3"
          >
            Technical Proficiency
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-foreground mb-4"
          >
            What I work with
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-xl mx-auto"
          >
            A curated stack of modern technologies I use to build scalable, accessible, and performant web applications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * idx }}
                className="glass-card p-8 group hover:border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl text-neutral-400 group-hover:text-accent transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <ul className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <li key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-neutral-300">{skill.name}</span>
                        <span className="text-xs text-neutral-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Learning Journey Progress Tracker */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-black text-foreground mb-4">Learning Journey</h3>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Technology evolves rapidly. Here is a transparent look at what I've mastered, what I'm actively studying, and what's next on my radar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {LEARNING_JOURNEY.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.status}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="glass-card p-8 group relative overflow-hidden flex flex-col h-full hover:border-white/20"
                >
                  {/* Subtle Background Glow */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 blur-[50px] opacity-20 transition-opacity duration-500 group-hover:opacity-40 pointer-events-none ${stage.bgClass.split(' ')[0]}`} />
                  
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className={`relative p-3 rounded-xl border ${stage.bgClass} flex items-center justify-center`}>
                      <Icon size={20} className={stage.colorClass} />
                      {stage.active && (
                        <span className="absolute inset-0 rounded-xl bg-primary/20 animate-ping" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg tracking-tight">{stage.status}</h4>
                      {stage.active && (
                        <span className="text-xs font-medium text-primary flex items-center gap-1 mt-0.5">
                          <RefreshCw size={10} className="animate-spin-slow" /> In Progress
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 relative z-10 space-y-3">
                    {stage.skills.map((skill, sIdx) => (
                      <div key={skill} className="flex items-center gap-3">
                        {stage.status === 'Mastered' ? (
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        ) : stage.active ? (
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                        )}
                        <span className="text-sm font-medium text-neutral-300">{skill}</span>
                        {stage.active && (
                          <div className="flex-1 ml-4 h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${60 + (sIdx * 15)}%` }} // Simulated progress
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 0.2 }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                        )}
                      </div>
                    ))}
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