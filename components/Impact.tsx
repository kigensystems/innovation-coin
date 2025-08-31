'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Globe, Sparkles, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Impact() {
  const [donationAmount, setDonationAmount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDonationAmount(prev => prev + Math.floor(Math.random() * 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const schools = [
    {
      name: 'MIT Innovation Lab',
      location: 'Cambridge, MA',
      students: 500,
      focus: 'AI & Robotics',
    },
    {
      name: 'Stanford Tech Initiative',
      location: 'Palo Alto, CA',
      students: 350,
      focus: 'Blockchain & Web3',
    },
    {
      name: 'Global STEM Academy',
      location: 'Multiple Locations',
      students: 2000,
      focus: 'STEM Education',
    },
    {
      name: 'Africa Innovation Hub',
      location: 'Lagos, Nigeria',
      students: 800,
      focus: 'Tech Entrepreneurship',
    },
  ];

  const metrics = [
    { icon: <GraduationCap className="w-6 h-6" />, value: '0', label: 'Students Funded' },
    { icon: <Globe className="w-6 h-6" />, value: '0', label: 'Countries' },
    { icon: <Sparkles className="w-6 h-6" />, value: '0', label: 'Schools' },
    { icon: <Heart className="w-6 h-6" />, value: '0%', label: 'Donated' },
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
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6">
            REAL IMPACT
          </h2>
          <p className="text-lg md:text-xl text-[#999999] max-w-3xl mx-auto leading-relaxed">
            Every transaction creates tangible change. Track our donations in real-time 
            and see the institutions and students benefiting from your participation.
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
            <p className="text-sm uppercase tracking-wider mb-4 opacity-80">Total Donated</p>
            <div className="text-6xl md:text-7xl font-bold tracking-tight mb-2">
              ${donationAmount.toLocaleString()}
            </div>
            <p className="text-sm opacity-60">Updated in real-time from blockchain</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">{metric.icon}</div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-xs uppercase tracking-wider opacity-60">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 tracking-tight text-center">FEATURED INSTITUTIONS</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schools.map((school, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-black p-6 border border-border hover:border-black dark:hover:border-white transition-colors"
              >
                <h4 className="font-bold mb-2">{school.name}</h4>
                <p className="text-sm text-muted mb-4">{school.location}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Students:</span>
                    <span className="font-medium">{school.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Focus:</span>
                    <span className="font-medium">{school.focus}</span>
                  </div>
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
          <p className="text-2xl font-light tracking-wide mb-8">
            Your investment doesn't just grow wealth - it grows minds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium tracking-wide hover:scale-105 transition-transform">
              VIEW ALL DONATIONS
            </button>
            <button className="px-8 py-4 border-2 border-black dark:border-white font-medium tracking-wide hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              SUBMIT INSTITUTION
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}