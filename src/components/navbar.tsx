'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/data/siteConfig';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('About');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header 
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl",
        scrolled ? "top-4" : "top-6"
      )}
    >
      <nav 
        className={cn(
          "px-8 py-3 flex items-center justify-between rounded-full border border-primary/10 transition-all duration-500 shadow-2xl shadow-primary/5",
          scrolled ? "bg-background/80 backdrop-blur-xl py-3 border-primary/20" : "bg-transparent py-4 border-transparent"
        )}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-xl font-black tracking-tighter"
        >
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">H</span>
            <span className="hidden sm:block">{siteConfig.name}</span>
          </a>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-2 bg-muted/20 p-1 rounded-full border border-border/50">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              <a 
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={cn(
                  "px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all relative z-10",
                  activeSection === link.name ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </a>
              {activeSection === link.name && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-primary rounded-full -z-0"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all bg-muted/30 border border-border/50 active:scale-90"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all border border-primary/20 active:scale-90"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="md:hidden absolute top-20 left-0 right-0 p-4 bg-background/95 backdrop-blur-2xl rounded-3xl border border-primary/20 shadow-2xl z-40"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a 
                    href={link.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveSection(link.name);
                    }}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-2xl text-lg font-bold transition-all",
                      activeSection === link.name ? "bg-primary text-primary-foreground" : "hover:bg-primary/5 hover:translate-x-2"
                    )}
                  >
                    {link.name}
                    <ArrowRight size={18} className={activeSection === link.name ? "opacity-100" : "opacity-0"} />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
