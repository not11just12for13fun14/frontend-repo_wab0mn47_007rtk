import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Titanium-coated drivers for ultra-precise response',
  'Adaptive noise cancellation with wind reduction',
  'Studio-grade spatial audio processing',
  '40-hour battery life with warp-charge 10min → 8hrs'
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-[#0b1020] text-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: pseudo exploding view using layered SVGs */}
        <div className="relative">
          <div className="absolute -inset-10 rounded-[40px] bg-gradient-to-tr from-[#B537FF]/20 via-transparent to-[#00D9FF]/20 blur-3xl" />
          <div className="relative aspect-square">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Frame */}
                <motion.circle cx="200" cy="200" r="160" fill="none" stroke="#4B5563" strokeWidth="10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
                {/* Cushion */}
                <motion.circle cx="200" cy="200" r="120" fill="none" stroke="#9CA3AF" strokeWidth="8" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} />
                {/* Driver */}
                <motion.circle cx="200" cy="200" r="80" fill="none" stroke="#00D9FF" strokeWidth="6" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }} />
                {/* Coil */}
                <motion.circle cx="200" cy="200" r="40" fill="none" stroke="#B537FF" strokeWidth="6" initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.6 }} />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Right: bullets lighting up */}
        <div>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">Engineered to Amaze</h3>
          <p className="mt-4 text-slate-300">Every layer crafted for clarity, power, and comfort.</p>
          <ul className="mt-8 space-y-4">
            {features.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#00D9FF] to-[#B537FF] shadow-[0_0_20px_rgba(0,217,255,0.5)]">
                  <Check className="h-4 w-4 text-black" />
                </span>
                <span className="text-slate-200">{f}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
