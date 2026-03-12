'use client';

import { siteConfig } from '@/data/siteConfig';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xl font-bold mb-4">{siteConfig.name}</p>
        <p className="text-muted-foreground mb-8">Full Stack Engineer</p>
        
        <div className="flex justify-center gap-6 mb-8">
          {Object.entries(siteConfig.socials).map(([name, url]) => (
            <a 
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors capitalize"
            >
              {name}
            </a>
          ))}
          <a 
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};
