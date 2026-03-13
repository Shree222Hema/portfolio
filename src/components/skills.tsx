'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

export const Skills = () => {
  const categories = [
    { title: 'Programming', skills: siteConfig.skills.programming, icon: '01' },
    { title: 'Frontend', skills: siteConfig.skills.frontend, icon: '02' },
    { title: 'Backend', skills: siteConfig.skills.backend, icon: '03' },
    { title: 'Database', skills: siteConfig.skills.database, icon: '04' },
    { title: 'Tools', skills: siteConfig.skills.tools, icon: '05' },
    { title: 'Analytics', skills: siteConfig.skills.analytics, icon: '06' },
  ];

  return (
    <section id="skills" className="py-32 bg-muted/20 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Stack & <span className="text-primary italic">Expertise</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-8 rounded-[2rem] border border-primary/5 bg-background hover:bg-card hover:border-primary/30 transition-all duration-500 shadow-xl shadow-transparent hover:shadow-primary/5 relative overflow-hidden"
            >
              {/* Category Number Accent */}
              <div className="absolute top-4 right-8 font-black text-4xl text-primary/5 group-hover:text-primary/10 transition-colors">{cat.icon}</div>
              
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full group-hover:scale-y-125 transition-transform"></span>
                {cat.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <motion.span 
                    key={skill}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      transition: { duration: 0.2 } 
                    }}
                    className="px-5 py-2.5 bg-muted/50 text-foreground/80 rounded-2xl text-xs font-black uppercase tracking-widest border border-border/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
