'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Career <span className="text-primary">Trajectory</span></h2>
          <p className="text-muted-foreground max-w-lg font-medium">Tracing my growth through the tech ecosystem.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line Decoration */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {siteConfig.experience.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-8 md:gap-16",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-4 md:top-1/2 w-8 h-8 rounded-2xl bg-background border-4 border-primary shadow-[0_0_20px_rgba(59,130,246,0.5)] -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"></div>

                {/* Content Card */}
                <div className={cn(
                  "w-full md:w-1/2 p-8 rounded-[2.5rem] border border-primary/10 bg-card/50 backdrop-blur-xl relative group hover:border-primary/40 transition-all duration-500",
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                )}>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4 block">{exp.period}</span>
                  <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-muted-foreground font-bold mb-4">{exp.company}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed group-hover:text-foreground transition-colors">
                    {exp.description}
                  </p>
                  
                  {/* Decorative Glow */}
                  <div className="absolute -z-10 inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
                </div>

                {/* Empty Spacer for Desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
