'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Circle } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      phase: 'PHASE 1',
      title: 'Foundation',
      status: 'completed',
      items: [
        'Security Audit Complete',
        'Website & Branding Launch',
        'Initial Community Building',
      ],
    },
    {
      phase: 'PHASE 2',
      title: 'Launch',
      status: 'active',
      items: [
        'Fair Launch on Pump.fun',
        'First Weekly Donation',
        'Donation Wallet Published',
        '1K Holders Milestone',
      ],
    },
    {
      phase: 'PHASE 3',
      title: 'Scholarship Impact',
      status: 'upcoming',
      items: [
        '$10K Total Donated',
        'Partnership Announcements',
        'First Student Stories',
      ],
    },
    {
      phase: 'PHASE 4',
      title: 'Scale',
      status: 'upcoming',
      items: [
        '$100K Total Donated',
        '50K Holders',
        'Additional Scholarship Partners',
        'Community Governance',
      ],
    },
    {
      phase: 'PHASE 5',
      title: 'Legacy',
      status: 'upcoming',
      items: [
        '$100K Total Donated',
        '100K Holders',
        'Scholarship DAO Launch',
        'Multi-chain Expansion',
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
            Our path to transforming U.S. education funding through cryptocurrency. 
            Every milestone brings more scholarships to deserving students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className={`bg-white p-6 md:p-8 rounded-xl border-2 transition-all duration-200 h-full ${
                  phase.status === 'active' 
                    ? 'border-black shadow-lg' 
                    : phase.status === 'completed'
                    ? 'border-[#e8e8e8] opacity-90'
                    : 'border-[#e8e8e8] hover:border-[#999999]'
                }`}
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold uppercase tracking-[0.12em] ${
                      phase.status === 'active' ? 'text-black' : 'text-[#999999]'
                    }`}>
                      {phase.phase}
                    </span>
                    {phase.status === 'completed' && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    {phase.status === 'active' && (
                      <div className="w-5 h-5 rounded-full bg-black animate-pulse" />
                    )}
                  </div>
                  <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-tight ${
                    phase.status === 'upcoming' ? 'text-[#666666]' : 'text-black'
                  }`}>
                    {phase.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`text-sm flex items-start gap-2 ${
                        phase.status === 'completed' 
                          ? 'text-[#666666]' 
                          : phase.status === 'upcoming'
                          ? 'text-[#999999]'
                          : 'text-black'
                      }`}
                    >
                      <span className="mt-1 flex-shrink-0">
                        {phase.status === 'completed' ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : phase.status === 'active' ? (
                          <Circle className="w-4 h-4" />
                        ) : (
                          <Circle className="w-4 h-4 opacity-40" />
                        )}
                      </span>
                      <span className={phase.status === 'completed' ? '' : ''}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {phase.status === 'active' && (
                  <div className="mt-6 pt-4 border-t border-[#e8e8e8]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
                      In Progress
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-[#999999]">
            Timeline subject to change based on community growth and market conditions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}