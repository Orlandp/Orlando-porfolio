import { motion } from 'framer-motion';
import { Layout, Palette, Code2, Database } from 'lucide-react';

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

        <div className="grid md:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
}