import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Sonic Wave Pro',
    price: '$349',
    img: 'https://images.unsplash.com/photo-1518443895914-6d1b47fd8943?q=80&w=1740&auto=format&fit=crop',
    color: 'from-[#0f172a] to-[#111827]'
  },
  {
    id: 2,
    name: 'Sonic Wave Air',
    price: '$299',
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1740&auto=format&fit=crop',
    color: 'from-[#0b132b] to-[#1c1f29]'
  },
  {
    id: 3,
    name: 'Sonic Wave Studio',
    price: '$449',
    img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1740&auto=format&fit=crop',
    color: 'from-[#0a0f1f] to-[#141824]'
  },
  {
    id: 4,
    name: 'Sonic Wave Lite',
    price: '$199',
    img: 'https://images.unsplash.com/photo-1518444084803-4bf72a94ffdd?q=80&w=1740&auto=format&fit=crop',
    color: 'from-[#0b0f1a] to-[#10131b]'
  }
];

function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`group relative aspect-[4/5] w-[280px] flex-shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br ${product.color} p-3`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-white text-xl font-semibold drop-shadow">{product.name}</h3>
        <p className="text-slate-300">{product.price}</p>
        <div className="mt-4 flex items-center gap-3">
          <button className="relative overflow-hidden rounded-full border border-cyan-300/60 px-4 py-2 text-sm font-medium text-cyan-200 transition-all duration-300 group-hover:text-black group-hover:shadow-[0_0_24px_rgba(0,217,255,0.6)]">
            <span className="relative z-10">Add to Cart</span>
            <span className="absolute inset-0 scale-0 rounded-full bg-[#00D9FF] opacity-90 transition-transform duration-500 group-hover:scale-100" />
          </button>
          <button className="rounded-full px-4 py-2 text-sm font-medium text-white/80 hover:text-white/100">Details</button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl shadow-[0_0_40px_10px_rgba(181,55,255,0.15)]" />
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-35%']);

  return (
    <section ref={ref} className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Explore the Lineup</h2>
            <p className="mt-3 text-slate-300">Glide through the collection and feel the details.</p>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 will-change-transform">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
