'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, DollarSign, Users } from 'lucide-react';

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f5f5f5] px-6 pt-28 pb-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center justify-center gap-y-6 md:gap-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <Image
              src="/coin-logo.png"
              alt="Innovation Coin"
              width={200}
              height={200}
              className="mx-auto md:w-[240px] md:h-[240px]"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-3 md:space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter">
              Innovation Coin
            </h1>
            <p className="text-lg md:text-xl text-[#666666] uppercase tracking-[0.15em] font-semibold">
              Funding Tomorrow&apos;s Genius
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6"
          >
            <a href="https://pump.fun/coin/A9qDXrmSoWg9howQ3gUdNoKRebvuKiZSC9EDpHqepump" target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="px-12 py-5 bg-black text-white font-bold uppercase tracking-wider hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm min-w-[200px] rounded-md shadow-lg">
                Buy $INNO
              </button>
            </a>
            <button className="px-12 py-5 bg-white border-2 border-black text-black font-bold uppercase tracking-wider hover:bg-black hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm min-w-[200px] rounded-md shadow-md">
              Learn More
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="w-full max-w-5xl mx-auto mt-8 md:mt-12"
          >
            <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e8e8e8]">
                <div className="px-8 py-8 text-center hover:bg-gray-50 transition-colors duration-300 cursor-default">
                  <div className="flex justify-center mb-2"><Heart className="w-5 h-5" /></div>
                  <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1">0%</div>
                  <div className="text-xs uppercase tracking-[0.12em] text-[#666666] font-medium">Donated</div>
                </div>
                <div className="px-8 py-8 text-center hover:bg-gray-50 transition-colors duration-300 cursor-default">
                  <div className="flex justify-center mb-2"><DollarSign className="w-5 h-5" /></div>
                  <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1">$0</div>
                  <div className="text-xs uppercase tracking-[0.12em] text-[#666666] font-medium">Raised</div>
                </div>
                <div className="px-8 py-8 text-center hover:bg-gray-50 transition-colors duration-300 cursor-default">
                  <div className="flex justify-center mb-2"><Users className="w-5 h-5" /></div>
                  <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1">0</div>
                  <div className="text-xs uppercase tracking-[0.12em] text-[#666666] font-medium">Holders</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}