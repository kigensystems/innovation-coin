'use client';

import { motion } from 'framer-motion';

export default function Tokenomics() {
  const distribution = [
    { label: 'Community & Holders', value: '40', percentage: 40 },
    { label: 'Education Fund', value: '30', percentage: 30 },
    { label: 'Development', value: '15', percentage: 15 },
    { label: 'Marketing', value: '10', percentage: 10 },
    { label: 'Team (Vested)', value: '5', percentage: 5 },
  ];

  const features = [
    { title: 'LOCKED LIQUIDITY', value: '5 YEARS' },
    { title: 'FAIR LAUNCH', value: 'NO VCS' },
    { title: 'DEFLATIONARY', value: '1% BURN' },
    { title: 'TRANSPARENT', value: 'VERIFIED' },
  ];

  return (
    <section id="tokenomics" className="py-20 md:py-28 bg-[#f5f5f5] px-6">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight mb-8">
            Tokenomics
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#999999] max-w-4xl mx-auto leading-relaxed">
            Built for sustainability, designed for impact. Our tokenomics ensure 
            long-term value while maximizing charitable contributions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 md:p-14 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-12 uppercase tracking-tight">Distribution</h3>
            <div className="space-y-10">
              {distribution.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium uppercase tracking-wide">{item.label}</span>
                    <span className="text-2xl font-bold">{item.value}%</span>
                  </div>
                  <div className="w-full bg-[#f5f5f5] h-3 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-full bg-black"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-black text-white p-8 md:p-10 rounded-lg text-center">
              <h3 className="text-7xl font-bold mb-3">1B</h3>
              <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Total Supply</p>
              <p className="text-lg font-bold">$INNO</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold mb-3">{feature.value}</div>
                  <div className="text-xs text-[#999999] uppercase tracking-wider">
                    {feature.title}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 rounded-lg"
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div>
              <h4 className="text-xs font-bold uppercase mb-4 text-[#999999] tracking-wider">
                Transaction Fee
              </h4>
              <p className="text-4xl font-bold mb-2">3%</p>
              <p className="text-sm text-[#999999]">
                2% education / 1% burn
              </p>
            </div>
            <div className="border-x border-[#e8e8e8] px-8">
              <h4 className="text-xs font-bold uppercase mb-4 text-[#999999] tracking-wider">
                Contract Status
              </h4>
              <p className="text-4xl font-bold mb-2">AUDITED</p>
              <p className="text-sm text-[#999999]">
                By CertiK
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase mb-4 text-[#999999] tracking-wider">
                Launch Type
              </h4>
              <p className="text-4xl font-bold mb-2">FAIR</p>
              <p className="text-sm text-[#999999]">
                No presale
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}