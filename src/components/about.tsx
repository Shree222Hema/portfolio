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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-[280px] mx-auto aspect-square">
              {/* Background Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full -z-10"
              />
              
              {/* Innovative Image Container */}
              <motion.div 
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative group w-full h-full"
              >
                {/* Blob Shape Background Decoration */}
                <div className="absolute inset-0 bg-primary/20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transform rotate-12 -z-10 group-hover:rotate-0 transition-transform duration-700"></div>
                
                <div className="w-full h-full bg-muted border-2 border-primary/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] flex items-center justify-center overflow-hidden relative shadow-2xl group-hover:border-primary/50 transition-colors duration-500">
                  {siteConfig.profileImage ? (
                    <img 
                      src={siteConfig.profileImage} 
                      alt={siteConfig.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-6xl font-black text-primary/10">HKJ</span>
                  )}
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
