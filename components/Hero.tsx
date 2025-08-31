'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, DollarSign, Users } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f5f5f5] px-6 py-12">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center justify-center space-y-12 md:space-y-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <motion.div
              animate={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 25 }}
            >
              <Image
                src="/coin-logo.png"
                alt="Innovation Coin"
                width={280}
                height={280}
                className="mx-auto"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight leading-[1.1]">
              Innovation Coin
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#999999] uppercase tracking-[0.2em] font-medium mb-8">
              Funding Tomorrow's Genius
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-14 pb-10"
          >
            <button className="px-14 py-5 bg-black text-white font-bold uppercase tracking-wider hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm min-w-[200px] rounded-md shadow-lg">
              Buy $INNO
            </button>
            <button className="px-14 py-5 bg-white border-2 border-black text-black font-bold uppercase tracking-wider hover:bg-black hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm min-w-[200px] rounded-md shadow-md">
              Learn More
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="w-full max-w-5xl mx-auto mt-20 md:mt-24"
          >
            <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e8e8e8]">
                <div className="px-10 py-14 text-center hover:bg-gray-50 transition-colors duration-300 cursor-default">
                  <div className="flex justify-center mb-3"><Heart className="w-5 h-5" /></div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">0%</div>
                  <div className="text-xs md:text-sm text-[#666666] uppercase tracking-[0.15em] font-semibold">Donated</div>
                </div>
                <div className="px-10 py-14 text-center hover:bg-gray-50 transition-colors duration-300 cursor-default">
                  <div className="flex justify-center mb-3"><DollarSign className="w-5 h-5" /></div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">$0</div>
                  <div className="text-xs md:text-sm text-[#666666] uppercase tracking-[0.15em] font-semibold">Raised</div>
                </div>
                <div className="px-10 py-14 text-center hover:bg-gray-50 transition-colors duration-300 cursor-default">
                  <div className="flex justify-center mb-3"><Users className="w-5 h-5" /></div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">0</div>
                  <div className="text-xs md:text-sm text-[#666666] uppercase tracking-[0.15em] font-semibold">Holders</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}