import { Users } from 'lucide-react';
import XLogo from './XLogo';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 px-6">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">
              INNOVATION COIN
            </h3>
            <p className="text-base md:text-lg opacity-80 uppercase tracking-wider">
              Funding tomorrow&apos;s genius
            </p>
          </div>
          
          <div className="flex gap-6 items-center">
            <a 
              href="https://x.com/Innovation_Coin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="X (formerly Twitter)"
            >
              <XLogo className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/i/communities/1963293818104811621" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Users className="w-6 h-6" />
              <span className="text-sm md:text-base font-medium uppercase tracking-wide">Community</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-xs md:text-sm opacity-60">
            © 2024 Innovation Coin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}