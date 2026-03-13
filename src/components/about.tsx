'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-4">
              <p className="text-lg leading-relaxed">
                {siteConfig.about}
              </p>
              <p>
                My journey in technology began with a deep curiosity about how systems interact. 
                Today, I specialize in building end-to-end applications that solve real-world problems. 
                I enjoy tackling complex architectural challenges and refining the user experience.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">Remote / India</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground underline truncate max-w-[200px]" title={siteConfig.email}>
                  {siteConfig.email}
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="aspect-[4/5] max-w-md mx-auto relative group">
              <div className="absolute inset-0 border-2 border-primary rounded-2xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              <div className="w-full h-full bg-muted border border-border rounded-2xl flex items-center justify-center overflow-hidden relative">
                {siteConfig.profileImage ? (
                  <img 
                    src={siteConfig.profileImage} 
                    alt={siteConfig.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-8xl font-black text-primary/10">HKJ</span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
