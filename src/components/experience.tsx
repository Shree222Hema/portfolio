'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {siteConfig.experience.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/30 pb-4 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Briefcase size={18} className="text-primary" /> {exp.role}
                  </h3>
                  <p className="font-medium text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm font-bold px-3 py-1 bg-muted rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
