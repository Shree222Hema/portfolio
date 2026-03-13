'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Selected <span className="text-primary italic">Works</span></h2>
          <p className="text-muted-foreground font-medium">Engineering solutions with modern architectural patterns.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {siteConfig.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{ perspective: 1000 }}
              className="group"
            >
              <motion.div
                whileHover={{ rotateX: 3, rotateY: -3, scale: 1.02 }}
                className="bg-card rounded-[2.5rem] border border-primary/10 overflow-hidden h-full flex flex-col shadow-xl shadow-primary/5 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-primary/10 bg-gradient-to-br from-card to-muted/20"
              >
                {/* Visual Header */}
                <div className="aspect-[16/10] bg-muted/40 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-8xl font-black tracking-tighter select-none">0{i + 1}</span>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/30">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2 text-sm font-medium leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-primary/5 text-primary border border-primary/10 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link w-full py-4 rounded-2xl bg-muted/50 hover:bg-primary text-foreground hover:text-white transition-all font-bold text-sm flex items-center justify-center gap-2 border border-border group-hover:border-primary"
                  >
                    Source Code 
                    <Github size={16} className="group-hover/link:rotate-12 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
