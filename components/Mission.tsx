'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Coins, School, TrendingUp } from 'lucide-react';

export default function Mission() {
  const steps = [
    {
      number: '01',
      icon: <Coins className="w-10 h-10" />,
      title: 'Trades → Fees',
      description: 'Every transaction generates creator fees on-chain.',
    },
    {
      number: '02', 
      icon: <TrendingUp className="w-10 h-10" />,
      title: '50/50 Scholarships',
      description: 'Fees are pooled and donated weekly',
    },
    {
      number: '03',
      icon: <School className="w-10 h-10" />,
      title: 'On-Chain Proof',
      description: 'Public donation wallet, and posted receipts for each donation',
    },
  ];

  return (
    <section id="mission" className="py-24 md:py-32 bg-white px-6">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 md:mb-8">
            Our Mission
          </h2>
          <p className="body-text text-[#666666] max-w-4xl mx-auto">
            Every trade of Innovation Coin funds American scholarships. 100% of creator fees 
            are routed to a public donation wallet and donated weekly.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-8 md:gap-16 mb-20 md:mb-24 items-stretch">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-[#f5f5f5] p-8 md:p-10 rounded-xl text-center w-full flex flex-col justify-center min-h-[240px] relative">
                <div className="absolute top-4 right-4 text-2xl font-bold text-[#d0d0d0]">
                  {step.number}
                </div>
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 uppercase tracking-tight">{step.title}</h3>
                <p className="text-sm text-[#666666]">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -translate-y-1/2 -right-12 hidden md:flex items-center justify-center w-10 h-10 bg-black rounded-full z-10">
                  <ArrowRight className="text-white" size={18} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-10 md:gap-12 items-stretch"
        >
          <div className="bg-gradient-to-br from-black to-gray-900 text-white p-10 md:p-14 rounded-xl flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-tight">
              Transparency & Impact
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              All creator fees are tracked on-chain and distributed weekly to our two U.S. 
              scholarship partners. We post the sweep tx, donation receipts, and running 
              totals.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div className="bg-[#f5f5f5] p-6 md:p-8 rounded-xl text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">$0</div>
                <div className="text-xs uppercase tracking-[0.12em] text-[#666666] font-semibold">Raised</div>
                <div className="text-xs mt-1 text-[#999999] normal-case tracking-normal">Creator fees routed to the donation wallet so far.</div>
              </div>
              <div className="bg-[#f5f5f5] p-6 md:p-8 rounded-xl text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">$0</div>
                <div className="text-xs uppercase tracking-[0.12em] text-[#666666] font-semibold">Donated</div>
                <div className="text-xs mt-1 text-[#999999] normal-case tracking-normal">Total given to partners (lifetime).</div>
              </div>
              <div className="bg-[#f5f5f5] p-6 md:p-8 rounded-xl text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">0</div>
                <div className="text-xs uppercase tracking-[0.12em] text-[#666666] font-semibold">Donations</div>
                <div className="text-xs mt-1 text-[#999999] normal-case tracking-normal">Weekly disbursements completed.</div>
              </div>
              <div className="bg-[#f5f5f5] p-6 md:p-8 rounded-xl text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">9/10</div>
                <div className="text-xs uppercase tracking-[0.12em] text-[#666666] font-semibold">Next Donation</div>
                <div className="text-xs mt-1 text-[#999999] normal-case tracking-normal">Wednesday, September 10, 2025</div>
              </div>
              <div className="bg-[#f5f5f5] p-6 md:p-8 rounded-xl text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">2</div>
                <div className="text-xs uppercase tracking-[0.12em] text-[#666666] font-semibold">Partners</div>
                <div className="text-xs mt-1 text-[#999999] normal-case tracking-normal">Jack Kent Cooke Foundation, QuestBridge.</div>
              </div>
              <div className="bg-[#f5f5f5] p-6 md:p-8 rounded-xl text-center cursor-pointer hover:bg-[#efefef] transition-colors">
                <div className="text-xl md:text-2xl font-bold mb-2 font-mono">Dfn...WAwj</div>
                <div className="text-xs uppercase tracking-[0.12em] text-[#666666] font-semibold">Donation Wallet</div>
                <div className="text-xs mt-1 text-[#999999] normal-case tracking-normal">Tap to copy full address.</div>
              </div>
            </div>
            <p className="text-xs text-[#999999] text-center">
              Innovation Coin is not affiliated with Jack Kent Cooke Foundation, QuestBridge, or any individuals depicted in our artwork. Donations are U.S.-only.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}