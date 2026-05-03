"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Smartphone, TrendingUp, ArrowUpRight } from "lucide-react";
import React from "react";

const services = [
  {
    id: "SVC-01",
    icon: Globe,
    title: "Flagship Digital Architecture",
    description:
      "We design and build custom, high-craft web environments that serve as your brand's digital headquarters. Mobile-first, speed-optimized, and built for conversion.",
    colSpan: "lg:col-span-7",
  },
  {
    id: "SVC-02",
    icon: ShoppingCart,
    title: "Commerce Ecosystems",
    description:
      "Complete e-commerce infrastructure with seamless Razorpay/UPI integration, automated GST invoicing, and high-velocity checkout flows.",
    colSpan: "lg:col-span-5",
  },
  {
    id: "SVC-03",
    icon: Smartphone,
    title: "Strategic Local Visibility",
    description:
      "Dominate local search. We optimize your Google Business architecture and social touchpoints to capture demand where it originates.",
    colSpan: "lg:col-span-5",
  },
  {
    id: "SVC-04",
    icon: TrendingUp,
    title: "Performance SEO",
    description:
      "Technical SEO that moves the needle. From schema markup to authority building, we engineer your visibility on global search engines.",
    colSpan: "lg:col-span-7",
  },
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
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
      className={`group relative p-8 md:p-12 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[32px] overflow-hidden ${service.colSpan} hover:border-[var(--color-primary)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]`}
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary-light)] blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-12">
          {/* Icon Plate */}
          <div className="relative">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <service.icon size={32} strokeWidth={1.5} />
            </div>
            {/* Active Indicator */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--color-primary)] rounded-full border-2 border-[var(--color-surface)] scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
          </div>

          <span className="text-[12px] font-mono font-medium text-[var(--color-text-muted)] tracking-widest opacity-40">
            [{service.id}]
          </span>
        </div>

        <div className="mt-auto">
          <h4
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-[24px] md:text-[32px] font-bold text-[var(--color-foreground)] mb-4 tracking-tight leading-tight group-hover:text-[var(--color-primary)] transition-colors duration-500"
          >
            {service.title}
          </h4>

          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-[16px] md:text-[18px] text-[var(--color-text-secondary)] leading-relaxed max-w-[480px] mb-8"
          >
            {service.description}
          </p>

          <div className="flex items-center gap-2 text-[var(--color-primary)] font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span className="text-[14px] uppercase tracking-wider">Analyze Solution</span>
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
      
      {/* Grid Pattern Inside Card */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-700">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `radial-gradient(var(--color-foreground) 1px, transparent 1px)`,
            backgroundSize: '24px 24px' 
          }} 
        />
      </div>
    </motion.div>
  );
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-40 bg-[var(--color-bg)] overflow-hidden"
    >
      {/* Blueprint Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{ 
            backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
            backgroundSize: '120px 120px' 
          }} 
        />
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
              Solutions
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
              Architecting <br /> <span className="text-[var(--color-text-muted)]">Digital Growth.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-[18px] md:text-[22px] text-[var(--color-text-secondary)] max-w-[520px] leading-relaxed mb-2"
            >
              We don't just build websites. We engineer end-to-end digital pipelines that convert casual visitors into loyal customers.
            </motion.p>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
