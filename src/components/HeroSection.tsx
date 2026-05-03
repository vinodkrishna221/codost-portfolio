'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]; // Custom smooth easing

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-[140px] pb-20 overflow-hidden px-5">
      {/* Left Side Dot Grid */}
      <div 
        className="absolute left-0 top-0 bottom-0 pointer-events-none -z-10"
        style={{
          width: '22%',
          backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.55) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
        }}
      />
      {/* Right Side Dot Grid */}
      <div 
        className="absolute right-0 top-0 bottom-0 pointer-events-none -z-10"
        style={{
          width: '22%',
          backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.55) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
        }}
      />
      {/* Top Dot Grid */}
      <div 
        className="absolute left-0 right-0 top-0 pointer-events-none -z-10"
        style={{
          height: '30%',
          backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.55) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      />
      <style>{`
        @keyframes badge-pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-badge-pulse {
          animation: badge-pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Background radial gradient with pulse */}
      <motion.div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(8,145,178,0.06) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
      />

      <div className="w-full max-w-[720px] flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0, ease }}
          className="inline-flex items-center gap-2 bg-[var(--color-success)]/10 px-4 py-1.5 rounded-full mb-8"
        >
          <span className="text-[12px] font-medium text-[var(--color-success)] tracking-[0.5px] uppercase">
            Accepting new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.12, ease }}
          className="font-heading font-bold text-[36px] md:text-[56px] leading-[1.1] md:leading-[1.1] tracking-[-1.5px] md:tracking-[-2.5px] text-[var(--color-text)] mb-6"
        >
          Great Reviews on Google Maps? Now Let's Build You a Website That Matches.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.24, ease }}
          className="font-body text-[18px] text-[var(--color-text-secondary)] leading-[1.6] max-w-[65ch] mb-10"
        >
          We help local businesses in Andhra Pradesh go from word-of-mouth to online presence. Beautiful websites, fair prices, zero headaches.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36, ease }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto"
        >
          <Link 
            href="#contact" 
            className="group flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white font-medium text-[15px] px-7 py-3 rounded-full hover:bg-[var(--color-primary-hover)] transition-all duration-200 hover:scale-[1.02] active:scale-100 shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            Book a Free Call
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
          </Link>
          <Link 
            href="#work" 
            className="group flex items-center justify-center gap-2 bg-transparent text-[var(--color-primary)] font-medium text-[15px] px-7 py-3 rounded-[var(--radius-lg)] hover:bg-[var(--color-primary-light)] transition-all duration-200 w-full sm:w-auto"
          >
            See Our Work ↓
          </Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.48, ease }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="w-8 h-8 rounded-full border-2 border-[var(--color-surface)] ring-1 ring-[var(--color-primary)]/20 bg-gray-100 flex items-center justify-center overflow-hidden shrink-0"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
              </div>
            ))}
          </div>
          <div className="text-[var(--color-text-secondary)] text-[14px]">
            <span className="text-[#f59e0b] mr-1 tracking-[1px]">★★★★★</span>
            <span className="font-medium text-[var(--color-text)]">5 projects delivered</span> · Trusted by businesses across AP
          </div>
        </motion.div>
      </div>
    </section>
  );
}
