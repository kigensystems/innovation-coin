'use client';

import { motion } from 'framer-motion';

export default function Impact() {
  const beneficiaries = [
    {
      name: 'Jack Kent Cooke Foundation',
      location: 'Nationwide (U.S.)',
      description: 'Scholarships & academic support for high-achieving students with financial need.',
      allocation: '50% of weekly donations',
      note: '(Not affiliated.)',
    },
    {
      name: 'QuestBridge',
      location: 'Nationwide (U.S.)',
      description: 'Pathways and scholarships connecting high-achieving, low-income students to top U.S. colleges.',
      allocation: '50% of weekly donations',
      note: '(Not affiliated.)',
    },
  ];

  const metrics = [
    { 
      value: '0', 
      label: 'Donations',
      description: 'Weekly disbursements completed.'
    },
    { 
      value: '2', 
      label: 'Partners',
      description: 'Jack Kent Cooke Foundation, QuestBridge.'
    },
    { 
      value: 'Dfn...WAwj', 
      label: 'Donation Wallet',
      description: 'Tap to copy full address.',
      isWallet: true,
      className: 'font-mono'
    },
  ];

  return (
    <section id="impact" className="py-20 md:py-28 bg-white px-6">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading-1 font-bold uppercase tracking-tight mb-6">
            REAL IMPACT
          </h2>
          <p className="body-text text-[#999999] max-w-3xl mx-auto">
            Every trade routes creator fees to a public wallet. We donate weekly, split 50/50 to 
            the Jack Kent Cooke Foundation and QuestBridge (not affiliated). On-chain updates, 
            posted receipts, U.S. only.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black text-white p-10 md:p-12 rounded-lg mb-12 md:mb-16"
        >
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider mb-4 opacity-80">Total Raised (On-Chain)</p>
            <div className="text-6xl md:text-7xl font-bold tracking-tight mb-4">
              $0
            </div>
            <p className="text-sm opacity-60 mb-6">Updated from on-chain data</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div className="opacity-80">
                <span className="text-[#999999]">Donated (lifetime):</span> <span className="font-semibold">$0</span>
              </div>
              <div className="opacity-80">
                <span className="text-[#999999]">Next donation:</span> <span className="font-semibold">September 10, 2025</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-12">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className={`text-center ${metric.isWallet ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
              >
                <div className={`text-2xl font-bold mb-1 ${metric.className || ''}`}>{metric.value}</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mb-2">{metric.label}</div>
                <div className="text-xs opacity-50 normal-case">{metric.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 tracking-tight text-center">CURRENT BENEFICIARIES</h3>
          
          <div className="mb-6">
            <div className="flex items-center justify-center mb-2">
              <div className="flex w-full max-w-md">
                <div className="bg-[#f5f5f5] flex-1 py-2 text-center border-r border-white">
                  <span className="text-xs font-semibold">50%</span>
                </div>
                <div className="bg-[#f5f5f5] flex-1 py-2 text-center">
                  <span className="text-xs font-semibold">50%</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-center text-[#999999]">
              Weekly split (after fees): 50% Jack Kent Cooke • 50% QuestBridge
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {beneficiaries.map((beneficiary, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 border border-[#e8e8e8] hover:border-black transition-colors"
              >
                <h4 className="font-bold text-lg mb-2">{beneficiary.name}</h4>
                <p className="text-sm text-[#666666] mb-4">{beneficiary.location}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-[#999999]">Programs:</span>
                    <p className="mt-1">{beneficiary.description}</p>
                  </div>
                  <div>
                    <span className="text-[#999999]">Your allocation:</span>
                    <p className="mt-1 font-medium">{beneficiary.allocation}</p>
                  </div>
                  <p className="text-xs text-[#999999] italic">{beneficiary.note}</p>
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
          className="text-center"
        >
          <p className="text-xs text-[#999999]">
            Innovation Coin is not affiliated with Jack Kent Cooke Foundation, QuestBridge, 
            or any individuals depicted in our artwork.
          </p>
        </motion.div>
      </div>
    </section>
  );
}