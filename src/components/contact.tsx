'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-muted-foreground mb-12">
              I'm always open to new opportunities, collaborations, or just a friendly chat. 
              Feel free to reach out to me!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <a 
                href={`mailto:${siteConfig.email}`}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors flex flex-col items-center gap-4"
              >
                <div className="p-4 bg-primary/10 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold">Email</h4>
                <p className="text-sm text-muted-foreground truncate w-full">{siteConfig.email}</p>
              </a>
              
              <a 
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors flex flex-col items-center gap-4"
              >
                <div className="p-4 bg-primary/10 rounded-full text-primary">
                  <Github size={24} />
                </div>
                <h4 className="font-bold">GitHub</h4>
                <p className="text-sm text-muted-foreground">Shree222Hema</p>
              </a>
              
              <a 
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors flex flex-col items-center gap-4"
              >
                <div className="p-4 bg-primary/10 rounded-full text-primary">
                  <Linkedin size={24} />
                </div>
                <h4 className="font-bold">LinkedIn</h4>
                <p className="text-sm text-muted-foreground">Hemashree K J</p>
              </a>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <MessageSquare size={24} /> Have a project in mind?
              </h3>
              <p className="mb-8 opacity-90">
                I'm currently looking for new opportunities as a Full Stack Engineer.
              </p>
              <a 
                href={`mailto:${siteConfig.email}`}
                className="inline-block bg-background text-foreground px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Say Hello
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
