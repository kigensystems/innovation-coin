'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Coins, School, TrendingUp } from 'lucide-react';

export default function Mission() {
  const steps = [
    {
      number: '01',
      icon: <Coins className="w-8 h-8" />,
      title: 'Transaction Fees',
      description: 'Every transaction generates fees',
    },
    {
      number: '02', 
      icon: <TrendingUp className="w-8 h-8" />,
      title: '100% Donation',
      description: 'All fees go to education',
    },
    {
      number: '03',
      icon: <School className="w-8 h-8" />,
      title: 'Fund Innovation',
      description: 'Support the next generation',
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
          <h2 className="heading-1 font-bold uppercase tracking-tight mb-6 md:mb-8">
            Our Mission
          </h2>
          <p className="body-text text-[#999999] max-w-4xl mx-auto">
            We believe in creating wealth that serves a greater purpose. Every transaction 
            on the Innovation Coin network directly funds education and nurtures the next 
            generation of innovators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-20 md:mb-24 items-stretch">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-[#f5f5f5] p-10 md:p-12 rounded-xl text-center h-full flex flex-col justify-center min-h-[280px]">
                <div className="text-7xl font-bold text-[#e8e8e8] mb-8">
                  {step.number}
                </div>
                <div className="mb-6 flex justify-center">{step.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide">{step.title}</h3>
                <p className="text-sm md:text-base text-[#999999]">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden md:block text-[#999999] z-10" size={24} />
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
          <div className="bg-black text-white p-12 md:p-16 rounded-xl flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight">
              Transparent & Impactful
            </h3>
            <p className="text-base md:text-lg opacity-90 mb-10 leading-relaxed">
              Every fee generated is tracked on-chain and allocated to verified 
              educational institutions. No hidden costs, no corporate profits.
            </p>
            <button className="px-10 py-4 border-2 border-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200 rounded-sm">
              View Tracker
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#f5f5f5] p-8 md:p-10 rounded-xl text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">$0</div>
              <div className="text-xs md:text-sm text-[#999999] uppercase tracking-wider font-medium">Donated</div>
            </div>
            <div className="bg-[#f5f5f5] p-8 md:p-10 rounded-xl text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">0</div>
              <div className="text-xs md:text-sm text-[#999999] uppercase tracking-wider font-medium">Schools</div>
            </div>
            <div className="bg-[#f5f5f5] p-8 md:p-10 rounded-xl text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">0</div>
              <div className="text-xs md:text-sm text-[#999999] uppercase tracking-wider font-medium">Students</div>
            </div>
            <div className="bg-[#f5f5f5] p-8 md:p-10 rounded-xl text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">0</div>
              <div className="text-xs md:text-sm text-[#999999] uppercase tracking-wider font-medium">Countries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}