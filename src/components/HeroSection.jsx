import { useEffect, useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useAnimation } from 'framer-motion';

const words = ['Sound.', 'Perfected.'];

export default function HeroSection() {
  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      await controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.5, duration: 0.8, ease: 'easeOut' },
      }));
    }
    sequence();
  }, [controls]);

  const particles = useMemo(() =>
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 6,
      opacity: 0.2 + Math.random() * 0.6,
    })), []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-gradient-to-b from-[#0b1020] to-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient sheen overlay to enhance contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map(p => (
          <span
            key={p.id}
            className="absolute rounded-full bg-[#00D9FF] blur-[2px]"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animation: `floatY ${p.duration}s ${p.delay}s ease-in-out infinite alternate`,
              boxShadow: '0 0 12px rgba(0,217,255,0.6)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 w-full">
          <div className="max-w-3xl">
            <div className="leading-none">
              {words.map((w, i) => (
                <motion.h1
                  key={w+i}
                  custom={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  className="text-[12vw] md:text-[8rem] font-extrabold tracking-tight"
                  style={{
                    lineHeight: 0.95,
                    background: 'linear-gradient(90deg, #fff, #B537FF, #00D9FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 10px 30px rgba(0,217,255,0.15))'
                  }}
                >
                  {w}
                </motion.h1>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mt-6 text-lg md:text-xl text-slate-200"
            >
              Experience audio like never before.
            </motion.p>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes floatY { from { transform: translateY(-10px); } to { transform: translateY(10px); } }
        `}
      </style>
    </section>
  );
}
