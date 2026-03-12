'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-medium mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span>
              Welcome to my portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              I'm <span className="text-primary">{siteConfig.name}</span>, <br />
              <span className="text-muted-foreground">{siteConfig.title}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              {siteConfig.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#contact" 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Get in touch <ArrowRight size={20} />
            </a>
            <div className="flex gap-4">
              <a 
                href={siteConfig.socials.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={siteConfig.socials.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[30%] w-[300px] h-[300px] bg-purple-500 rounded-full blur-[100px]"></div>
      </div>
    </section>
  );
};
