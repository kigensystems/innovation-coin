'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Innovators() {
  const innovators = [
    {
      name: 'Elon Musk',
      title: 'The Visionary',
      quote: 'When something is important enough, you do it even if the odds are not in your favor.',
      principles: ['First Principles Thinking', 'Rapid Iteration', 'Bold Vision'],
    },
    {
      name: 'Steve Jobs',
      title: 'The Perfectionist',
      quote: 'Innovation distinguishes between a leader and a follower.',
      principles: ['Design Excellence', 'User Experience', 'Simplicity'],
    },
    {
      name: 'Jeff Bezos',
      title: 'The Builder',
      quote: 'Your brand is what other people say about you when you\'re not in the room.',
      principles: ['Customer Obsession', 'Long-term Thinking', 'Day 1 Mentality'],
    },
  ];

  return (
    <section id="innovators" className="py-20 md:py-28 bg-[#f5f5f5] px-6">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading-1 font-bold uppercase tracking-tight mb-6 md:mb-8">
            The Innovators
          </h2>
          <p className="body-text text-[#999999] max-w-4xl mx-auto">
            Inspired by the greatest minds of our generation, Innovation Coin embodies 
            the principles that drive world-changing innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="bg-black p-16 md:p-24 lg:p-32 rounded-xl flex justify-center items-center">
            <Image
              src="/coin-logo.png"
              alt="Innovation Coin - The Innovators"
              width={400}
              height={400}
              className="filter invert max-w-full h-auto"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {innovators.map((innovator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-10 md:p-12 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{innovator.name}</h3>
                <p className="text-sm md:text-base text-[#999999] uppercase tracking-wider">{innovator.title}</p>
              </div>
              <blockquote className="text-lg md:text-xl italic mb-10 text-[#666666] leading-relaxed">
                "{innovator.quote}"
              </blockquote>
              <div className="border-t border-[#e8e8e8] pt-10">
                <p className="text-xs md:text-sm font-bold uppercase tracking-wider mb-6 text-[#999999]">
                  Core Principles
                </p>
                <ul className="space-y-4">
                  {innovator.principles.map((principle, idx) => (
                    <li key={idx} className="text-sm md:text-base flex items-center">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 flex-shrink-0" />
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 px-4">
            Every holder becomes part of this legacy of innovation
          </p>
          <button className="px-12 py-5 bg-black text-white font-bold uppercase tracking-wider hover:opacity-90 transition-all duration-200 rounded-sm">
            Join the Movement
          </button>
        </motion.div>
      </div>
    </section>
  );
}