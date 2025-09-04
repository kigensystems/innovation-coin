'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import XLogo from './XLogo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#mission', label: 'Mission' },
    { href: '#impact', label: 'Impact' },
    { href: '#roadmap', label: 'Roadmap' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-[#e8e8e8]' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
            Innovation Coin
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base md:text-lg font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="https://x.com/Innovation_Coin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="X (formerly Twitter)"
            >
              <XLogo className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-[#e8e8e8]">
          <div className="container mx-auto py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-base font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="https://x.com/Innovation_Coin" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center py-3 hover:opacity-70 transition-opacity"
              aria-label="X (formerly Twitter)"
            >
              <XLogo className="w-5 h-5" />
              <span className="ml-2 text-base font-medium uppercase tracking-wide">X</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}