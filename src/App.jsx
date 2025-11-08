import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import FeaturesSection from './components/FeaturesSection';
import AudioVisualizer from './components/AudioVisualizer';

function App() {
  return (
    <div className="bg-black text-white font-inter">
      <HeroSection />
      <ProductShowcase />
      <FeaturesSection />
      <AudioVisualizer />

      <footer className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Sonic Wave. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="rounded-full p-2 text-slate-300 hover:text-white hover:scale-110 transition-transform">Twitter</a>
            <a href="#" className="rounded-full p-2 text-slate-300 hover:text-white hover:scale-110 transition-transform">Instagram</a>
            <a href="#" className="rounded-full p-2 text-slate-300 hover:text-white hover:scale-110 transition-transform">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
