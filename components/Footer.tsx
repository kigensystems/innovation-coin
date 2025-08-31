import { Twitter, Github, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 px-6">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold tracking-tighter mb-4">
              INNOVATION<span className="opacity-60">COIN</span>
            </h3>
            <p className="text-sm opacity-80">
              Funding tomorrow's genius through blockchain innovation.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Whitepaper</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Audit Report</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contract</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Community</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Telegram</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Discord</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Twitter</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Medium</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-60 mb-4 md:mb-0">
            © 2024 Innovation Coin. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:scale-110 transition-transform">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}