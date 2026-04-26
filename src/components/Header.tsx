import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { AppLogo } from './ui/AppLogo';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12",
        isScrolled ? "bg-deep-bg/70 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <AppLogo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "link-underline text-xs font-medium tracking-[0.25em] uppercase transition-colors hover:text-gold",
                location.pathname === link.path ? "text-gold" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/services" className="btn-primary py-2 px-6 text-sm">
            Hire Me
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-deep-bg z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className={cn(
              "text-2xl font-serif tracking-widest uppercase",
              location.pathname === link.path ? "text-gold" : "text-white"
            )}
          >
            {link.name}
          </Link>
        ))}
        <Link 
          to="/services" 
          onClick={() => setIsMenuOpen(false)}
          className="btn-primary"
        >
          Hire Me
        </Link>
      </div>
    </motion.header>
  );
};
