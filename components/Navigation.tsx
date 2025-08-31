'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { href: '#innovators', label: 'Innovators' },
    { href: '#tokenomics', label: 'Tokenomics' },
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
          <a href="#" className="text-xl font-bold uppercase tracking-tight">
            Innovation Coin
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <button className="ml-4 px-6 py-2.5 bg-black text-white font-medium uppercase tracking-wide hover:opacity-90 transition-opacity">
              Connect
            </button>
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
                className="block py-3 text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-black text-white font-medium uppercase tracking-wide hover:opacity-90 transition-opacity">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}