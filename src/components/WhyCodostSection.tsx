"use client";

import { motion } from "framer-motion";
import {
  IndianRupee,
  Zap,
  Smartphone,
  MessageCircle,
  Wrench,
  Handshake,
} from "lucide-react";
import React from "react";

const reasons = [
  {
    icon: IndianRupee,
    title: "Transparent Economics",
    description:
      "Elite technical solutions shouldn't have opaque pricing. Fixed packages starting at ₹8,000 with zero hidden line items.",
  },
  {
    icon: Zap,
    title: "Velocity-Driven Delivery",
    description:
      "We launch production-ready environments in 7–35 days. High-speed deployment without compromising code integrity.",
  },
  {
    icon: Smartphone,
    title: "Omnichannel Precision",
    description:
      "Over 80% of your audience is mobile. We build responsive architectures that maintain high-craft aesthetics on every screen.",
  },
  {
    icon: MessageCircle,
    title: "Direct Access Support",
    description:
      "No support tickets. Direct WhatsApp communication in Telugu or English for rapid, human-to-human problem solving.",
  },
  {
    icon: Wrench,
    title: "Full-Lifecycle Handling",
    description:
      "From domain architecture to specialized SEO. We handle the entire technical stack so you can scale your core business.",
  },
  {
    icon: Handshake,
    title: "Strategic Continuity",
    description:
      "We don't just deliver; we partner. Our monthly maintenance ensures your digital reputation evolves with the market.",
  },
];

const FeatureCard = ({ reason, index }: { reason: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -12,
        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 20px -10px var(--color-primary)",
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="group relative p-10 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[32px] hover:border-[var(--color-primary)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
    >
      <div className="flex flex-col h-full relative z-10">
        {/* Index Number */}
        <span className="absolute top-0 right-0 text-[14px] font-mono font-medium text-[var(--color-text-muted)] opacity-20 group-hover:opacity-40 transition-opacity">
          0{index + 1}
        </span>

        {/* Icon Plate */}
        <div className="mb-10 relative">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <reason.icon size={32} strokeWidth={1.5} />
          </div>
          {/* Subtle Glow beneath icon */}
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[var(--color-primary)] blur-3xl opacity-0 group-hover:opacity-20 transition-opacity" />
        </div>

        <h4
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-[22px] font-bold text-[var(--color-foreground)] mb-4 tracking-tight leading-tight"
        >
          {reason.title}
        </h4>

        <p
          style={{ fontFamily: "var(--font-body)" }}
          className="text-[16px] text-[var(--color-text-secondary)] leading-relaxed"
        >
          {reason.description}
        </p>
      </div>
      
      {/* Decorative Corner */}
      <div className="absolute bottom-0 right-0 w-12 h-12 opacity-5 pointer-events-none overflow-hidden">
         <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-[var(--color-primary)] translate-x-1/2 translate-y-1/2 rounded-full" />
      </div>
    </motion.div>
  );
};

export function WhyCodostSection() {
  return (
    <section
      id="why-codost"
      className="relative py-24 md:py-40 bg-[var(--color-bg)] overflow-hidden"
    >
      {/* Blueprint Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.1]" 
          style={{ 
            backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
            backgroundSize: '80px 80px' 
          }} 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-[var(--color-primary-light)] blur-[160px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header Content */}
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[1px] bg-[var(--color-primary)]" />
            <span className="text-[var(--color-primary)] font-bold text-[12px] tracking-[0.2em] uppercase">
              The Edge
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-[44px] md:text-[84px] font-bold text-[var(--color-foreground)] tracking-[-0.04em] leading-[0.95]"
            >
              Excellence <br /> <span className="text-[var(--color-text-muted)]">by Design.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-[18px] md:text-[22px] text-[var(--color-text-secondary)] max-w-[520px] leading-relaxed mb-2"
            >
              We've engineered our entire process to remove the friction between a business reputation and its digital execution.
            </motion.p>
          </div>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <FeatureCard key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
