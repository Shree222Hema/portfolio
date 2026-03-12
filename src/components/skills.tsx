'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

export const Skills = () => {
  const categories = [
    { title: 'Programming', skills: siteConfig.skills.programming },
    { title: 'Frontend', skills: siteConfig.skills.frontend },
    { title: 'Backend', skills: siteConfig.skills.backend },
    { title: 'Database', skills: siteConfig.skills.database },
    { title: 'Tools', skills: siteConfig.skills.tools },
    { title: 'Analytics', skills: siteConfig.skills.analytics },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
