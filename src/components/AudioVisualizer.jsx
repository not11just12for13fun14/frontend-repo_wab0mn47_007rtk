import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const profiles = [
  { id: 'warm', name: 'Warm Bass', from: '#FF8A00', to: '#FF3D00' },
  { id: 'neutral', name: 'Balanced', from: '#00D9FF', to: '#B537FF' },
  { id: 'bright', name: 'Crystal Treble', from: '#7C4DFF', to: '#B537FF' },
];

export default function AudioVisualizer() {
  const canvasRef = useRef(null);
  const [active, setActive] = useState('neutral');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let rafId;
    const bars = 48;

    function draw() {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth * dpr;
      const height = canvas.clientHeight * dpr;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      ctx.clearRect(0, 0, width, height);

      const grad = ctx.createLinearGradient(0, 0, width, height);
      const profile = profiles.find(p => p.id === active) || profiles[1];
      grad.addColorStop(0, profile.from);
      grad.addColorStop(1, profile.to);
      ctx.fillStyle = grad;

      const time = Date.now() / 800;
      for (let i = 0; i < bars; i++) {
        const x = (i / bars) * width;
        const amplitude = Math.sin(time + i * 0.3) * 0.5 + 0.5;
        const h = amplitude * (height * 0.7) + height * 0.1;
        const barWidth = Math.max(3, width / bars - 6);
        ctx.fillRect(x, height - h, barWidth, h);
      }

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, [active]);

  return (
    <section className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">Feel the Profile</h3>
            <p className="mt-2 text-slate-300">Tap a sound to see frequencies dance.</p>
          </div>
          <div className="flex gap-2">
            {profiles.map(p => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === p.id ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
          <canvas ref={canvasRef} className="h-[280px] w-full" />
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(600px 200px at 20% 10%, rgba(0,217,255,0.15), transparent 60%)' }}
          />
        </div>
      </div>
    </section>
  );
}
