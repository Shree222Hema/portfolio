'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const Hero = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as any 
      } 
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl"
          variants={containerVars}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={itemVars}>
            <h2 className="text-primary font-bold mb-4 flex items-center gap-2 tracking-widest uppercase text-xs">
              <span className="w-12 h-[2px] bg-primary/30"></span>
              Full Stack Architecture
            </h2>
          </motion.div>
          
          <motion.h1 
            variants={itemVars}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]"
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500">{siteConfig.name}</span> <br />
            <span className="text-muted-foreground/60">{siteConfig.title}</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVars}
            className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed font-medium"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div 
            variants={itemVars}
            className="flex flex-wrap gap-6 items-center"
          >
            <a 
              href="#contact" 
              className="group relative bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold flex items-center gap-3 overflow-hidden shadow-2xl shadow-primary/20"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10">Launch Project</span> 
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex gap-4">
              {[
                { icon: Github, href: siteConfig.socials.github, label: 'GitHub' },
                { icon: Linkedin, href: siteConfig.socials.linkedin, label: 'LinkedIn' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-2 border-primary/10 rounded-full hover:bg-primary/5 hover:border-primary/30 transition-all shadow-sm flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon size={22} className="text-foreground/70" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Advanced Particles Decor */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0.1,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: ["-10%", "110%"],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * -20
            }}
            className="absolute w-1 h-1 bg-primary rounded-full blur-[2px]"
          />
        ))}
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] animate-bounce-slow"></div>
      </div>
    </section>
  );
};
