'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {siteConfig.education.map((edu, i) => (
            <motion.div
              key={edu.degree + edu.institution}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/30 pb-4 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <GraduationCap size={18} className="text-primary" /> {edu.degree}
                  </h3>
                  <p className="font-medium text-muted-foreground">{edu.institution}</p>
                </div>
                <span className="text-sm font-bold px-3 py-1 bg-muted rounded-full w-fit">
                  {edu.period}
                </span>
              </div>
              <p className="text-muted-foreground font-medium">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
