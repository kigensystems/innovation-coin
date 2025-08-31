'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Circle, Zap } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      phase: 'PHASE 1',
      title: 'Foundation',
      status: 'completed',
      items: [
        'Smart Contract Development',
        'Security Audit',
        'Website Launch',
        'Community Building',
      ],
    },
    {
      phase: 'PHASE 2',
      title: 'Launch',
      status: 'completed',
      items: [
        'Token Launch',
        'DEX Listings',
        'First Donations',
        '10K Holders',
      ],
    },
    {
      phase: 'PHASE 3',
      title: 'Growth',
      status: 'active',
      items: [
        'CEX Listings',
        'Global Partnerships',
        '50K Holders',
        '$10M Donated',
      ],
    },
    {
      phase: 'PHASE 4',
      title: 'Expansion',
      status: 'upcoming',
      items: [
        'Innovation Grants Program',
        'DAO Governance',
        'Cross-chain Integration',
        '100K Holders',
      ],
    },
    {
      phase: 'PHASE 5',
      title: 'Impact',
      status: 'upcoming',
      items: [
        'Global Education Network',
        'Innovation Labs',
        'Scholarship Platform',
        '$100M Donated',
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-20 md:py-28 bg-[#f5f5f5] px-6">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading-1 font-bold uppercase tracking-tight mb-6">
            ROADMAP
          </h2>
          <p className="body-text text-[#999999] max-w-3xl mx-auto">
            Our journey from concept to global impact. Each milestone brings us 
            closer to revolutionizing charitable giving through blockchain.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${
                  index % 2 === 0 ? 'lg:pr-[50%]' : 'lg:pl-[50%] lg:text-right'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-black dark:border-white bg-white dark:bg-black hidden lg:flex items-center justify-center ${
                    phase.status === 'completed' ? 'bg-black dark:bg-white' : ''
                  }`}
                >
                  {phase.status === 'completed' && (
                    <CheckCircle className="w-6 h-6 text-white dark:text-black" />
                  )}
                  {phase.status === 'active' && (
                    <Zap className="w-6 h-6" />
                  )}
                  {phase.status === 'upcoming' && (
                    <Circle className="w-6 h-6" />
                  )}
                </div>

                <div
                  className={`bg-gray-50 dark:bg-gray-950 p-8 ${
                    phase.status === 'active' ? 'border-2 border-black dark:border-white' : 'border border-border'
                  }`}
                >
                  <div className={`mb-4 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                    <span className="text-sm font-medium text-muted uppercase tracking-wider">
                      {phase.phase}
                    </span>
                    <h3 className="text-2xl font-bold mt-2">{phase.title}</h3>
                  </div>
                  <ul className={`space-y-2 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                    {phase.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={`text-sm flex items-center gap-2 ${
                          phase.status === 'completed' ? 'text-muted line-through' : ''
                        } ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}
                      >
                        {phase.status === 'completed' && (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        )}
                        {phase.status === 'active' && (
                          <Circle className="w-4 h-4" />
                        )}
                        {phase.status === 'upcoming' && (
                          <Circle className="w-4 h-4 opacity-30" />
                        )}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl font-light tracking-wide mb-8">
            Join us on this journey to transform education funding forever
          </p>
          <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium tracking-wide hover:scale-105 transition-transform">
            GET INVOLVED
          </button>
        </motion.div>
      </div>
    </section>
  );
}