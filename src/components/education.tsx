'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const Education = () => {
  return (
    <section id="education" className="py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Academic <span className="text-primary">Foundation</span></h2>
          <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {siteConfig.education.map((edu, i) => (
              <motion.div
                key={edu.degree + edu.institution}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-10 rounded-[3rem] border border-primary/10 bg-background/50 hover:bg-background transition-all duration-500 overflow-hidden"
              >
                {/* Visual Background Text */}
                <div className="absolute top-1/2 right-10 -translate-y-1/2 text-8xl font-black text-primary/5 select-none transition-transform group-hover:scale-110 duration-700">EDU</div>
                
                <div className="relative z-10">
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 block">{edu.period}</span>
                  <div className="max-w-2xl">
                    <h3 className="text-3xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">{edu.degree}</h3>
                    <p className="text-xl font-bold text-muted-foreground mb-6">{edu.institution}</p>
                    <div className="bg-primary/10 w-fit px-6 py-2 rounded-full border border-primary/20">
                      <span className="text-sm font-black text-primary">{edu.details}</span>
                    </div>
                  </div>
                </div>

                {/* Animated Corner Decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
