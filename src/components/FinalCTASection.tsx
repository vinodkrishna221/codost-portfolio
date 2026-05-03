'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles, Circle } from 'lucide-react';
import { useRef } from 'react';
import Magnetic from '@/components/Magnetic';

const services = [
  "Logo Designing",
  "Rapid Prototyping and MVPs",
  "Digital Marketing & SEO",
  "Visual Identity",
  "Web Development",
  "App Development",
  "Branding and Strategy",
  "UI/UX Audit"
];

const FloatingTag = ({ children, x, y, delay = 0 }: { children: React.ReactNode, x: string, y: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0.1, 0.2, 0.1],
      y: [0, -15, 0],
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className="absolute pointer-events-none select-none text-[9px] font-mono text-white/10 tracking-[0.2em] uppercase"
    style={{ left: x, top: y }}
  >
    {children}
  </motion.div>
);

export default function FinalCTASection() {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      id="cta"
      className="relative bg-[var(--color-bg)] py-24 md:py-32 px-4 md:px-12 w-full overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{ 
            backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
            backgroundSize: '120px 120px'
          }}
        />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.05] blur-[120px] rounded-full" 
        />
      </div>

      {/* The Main Dark Card Container */}
      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="relative bg-zinc-950 rounded-[48px] md:rounded-[64px] py-20 md:py-32 px-6 md:px-16 overflow-hidden flex flex-col items-center text-center shadow-2xl"
        >
          {/* Subtle Card Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          <FloatingTag x="10%" y="15%" delay={0}>[ STATUS: ONLINE ]</FloatingTag>
          <FloatingTag x="85%" y="20%" delay={1}>[ PORT: 0x80 ]</FloatingTag>

          <h2
            className="text-[28px] md:text-[54px] font-medium text-white mb-12 tracking-tight max-w-4xl leading-[1.1]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            You've reached the end — <br className="hidden md:block" />
            <span className="text-zinc-400">now let's start something new!</span>
          </h2>

          <Magnetic strength={0.2}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-8 h-[64px] bg-white text-black rounded-full text-[18px] font-bold transition-all mb-20 overflow-hidden"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {/* ALWAYS-ON Fast Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-shine pointer-events-none" />
              <div className="absolute -inset-2 bg-white opacity-20 blur-xl animate-pulse-fast pointer-events-none" />
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse-glow pointer-events-none" />

              <Sparkles size={20} className="text-zinc-600 relative z-10" />
              <span className="relative z-10">Let's Connect</span>
            </motion.a>
          </Magnetic>

          {/* Service Chips Section */}
          <div className="w-full">
            <p className="text-zinc-500 text-[14px] font-medium mb-10 tracking-wide uppercase font-mono">
              Trust us we are good at this :)
            </p>

            <div className="relative w-full overflow-hidden flex flex-col gap-6">
              
              {/* Overlayed Marquees for Icon Change Effect */}
              <div className="relative h-14 overflow-hidden">
                {/* Left Side: Circles (Masked) */}
                <div 
                  className="absolute inset-0 flex items-center gap-4 animate-marquee-reverse whitespace-nowrap"
                  style={{ maskImage: 'linear-gradient(to right, black 45%, transparent 55%)', WebkitMaskImage: 'linear-gradient(to right, black 45%, transparent 55%)' }}
                >
                  {[...services, ...services, ...services, ...services].map((service, i) => (
                    <div 
                      key={`circle-${i}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/[0.02] text-white/40 text-sm font-medium"
                    >
                      <Circle size={10} className="text-zinc-600" />
                      {service}
                    </div>
                  ))}
                </div>

                {/* Right Side: Ticks (Masked) */}
                <div 
                  className="absolute inset-0 flex items-center gap-4 animate-marquee-reverse whitespace-nowrap"
                  style={{ maskImage: 'linear-gradient(to left, black 45%, transparent 55%)', WebkitMaskImage: 'linear-gradient(to left, black 45%, transparent 55%)' }}
                >
                  {[...services, ...services, ...services, ...services].map((service, i) => (
                    <div 
                      key={`tick-${i}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/[0.02] text-white/70 text-sm font-medium"
                    >
                      <Check size={14} className="text-[var(--color-primary)]" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* Central Highlight */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none z-20">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="px-10 py-4 bg-zinc-900 border border-white/30 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-md text-white font-bold text-xl tracking-tight flex items-center gap-3 scale-110"
                >
                   Codost..
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes shine {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.1; transform: scale(1); filter: blur(16px); }
          50% { opacity: 0.3; transform: scale(1.1); filter: blur(24px); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 12s linear infinite;
        }
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
        .animate-shine {
          animation: shine 2s linear infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 1s ease-in-out infinite;
        }
        .animate-pulse-fast {
          animation: pulse-fast 0.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
