'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUpRight, ShieldCheck, Cpu } from 'lucide-react';
import Magnetic from '@/components/Magnetic';

const team = [
  {
    name: "Vinod Krishna",
    role: "Founder & Lead Developer",
    location: "Kurnool, AP",
    bio: "Full-stack engineer specializing in high-performance AI architectures. Built 5 production-grade applications including B2B SaaS and AI platforms before graduation.",
    initials: "VK",
    id: "[TEAM-01]",
    colSpan: "lg:col-span-7",
    stats: {
      apps: "05",
      stack: "NEXT.JS / REACT",
      focus: "AI SYSTEMS"
    },
    links: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Venu Gopal",
    role: "Co-Founder & UI Lead",
    location: "Kurnool, AP",
    bio: "Frontend specialist with a focus on immersive UX and fluid motion systems. Expert in translating complex engineering into delightful interfaces.",
    initials: "VG",
    id: "[TEAM-02]",
    colSpan: "lg:col-span-5",
    stats: {
      apps: "03",
      stack: "TAILWIND / MOTION",
      focus: "IMMERSIVE UI"
    },
    links: {
      github: "#",
      linkedin: "#"
    }
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-40 bg-[var(--color-bg)] overflow-hidden">
      {/* Technical Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{ 
            backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
            backgroundSize: '120px 120px'
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[var(--color-primary)] opacity-[0.05] blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header: Display Authority */}
        <div className="flex flex-col mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
              <ShieldCheck size={16} />
            </span>
            <span className="text-[12px] font-bold tracking-[0.2em] text-[var(--color-primary)] uppercase font-mono">
              [ PERSONNEL_DOSSIER ]
            </span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="text-[12vw] md:text-[84px] font-bold leading-[0.9] tracking-[-0.04em] text-[var(--color-foreground)] mb-10"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              The Engineering <br />
              <span className="text-[var(--color-text-muted)]">Core of Codost.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We are a collective of engineering students from Andhra Pradesh, turning academic rigor into world-class digital performance.
            </motion.p>
          </div>
        </div>

        {/* Dossier Cards Grid: Asymmetrical 12-column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 20px -10px var(--color-primary)",
                transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`group relative p-8 md:p-12 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[40px] overflow-hidden ${member.colSpan} hover:border-[var(--color-primary)] transition-colors duration-500`}
            >
              {/* Dossier ID */}
              <div className="absolute top-8 right-8 text-[11px] font-mono text-[var(--color-text-muted)] opacity-50">
                {member.id}
              </div>

              <div className="flex flex-col md:flex-row items-start gap-10">
                {/* Scanner Avatar */}
                <div className="relative shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-3xl overflow-hidden relative group-hover:border-[var(--color-primary)] transition-colors duration-500 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] opacity-20 font-heading">
                      {member.initials}
                    </span>
                    
                    {/* Corner Accents */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Scanning Line */}
                    <div className="absolute inset-x-0 h-[1px] bg-[var(--color-primary)]/30 top-0 opacity-0 group-hover:opacity-100 group-hover:animate-scan-slow pointer-events-none" />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)] mb-2 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-primary)] font-mono text-xs tracking-wider uppercase mb-6 flex items-center gap-2">
                    <Cpu size={12} /> {member.role}
                  </p>
                  
                  <p className="text-[var(--color-text-secondary)] text-[16px] leading-relaxed mb-10 max-w-lg">
                    {member.bio}
                  </p>

                  {/* Technical Metadata */}
                  <div className="grid grid-cols-3 gap-4 p-5 bg-[var(--color-bg)] rounded-2xl border border-[var(--color-border)] group-hover:border-[var(--color-primary)]/20 transition-colors duration-500">
                    <div>
                      <span className="block text-[9px] font-mono text-[var(--color-text-muted)] uppercase mb-1">Projects</span>
                      <span className="text-sm font-bold text-[var(--color-foreground)] font-mono">{member.stats.apps}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-[var(--color-text-muted)] uppercase mb-1">Stack</span>
                      <span className="text-sm font-bold text-[var(--color-foreground)] font-mono truncate">{member.stats.stack}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-[var(--color-text-muted)] uppercase mb-1">Core Focus</span>
                      <span className="text-sm font-bold text-[var(--color-foreground)] font-mono">{member.stats.focus}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Magnetic Social Actions */}
              <div className="flex items-center gap-4 mt-10">
                <Magnetic strength={0.2}>
                  <a href={member.links.github} className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300">
                    <Github size={18} strokeWidth={1.5} />
                  </a>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <a href={member.links.linkedin} className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300">
                    <Linkedin size={18} strokeWidth={1.5} />
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>

        {/* High-Authority Manifesto: Founders' Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative p-8 md:p-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[48px] overflow-hidden">
            {/* Background Label */}
            <div className="absolute top-0 right-0 p-8 text-[60px] font-bold text-[var(--color-foreground)] opacity-[0.03] pointer-events-none select-none font-heading uppercase leading-none translate-x-1/4 -translate-y-1/4">
              Manifesto
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-[10px] font-bold tracking-widest uppercase mb-8 font-mono">
                <ShieldCheck size={12} /> Verification: Student-Run, Expert-Grade
              </div>
              
              <p className="text-[24px] md:text-[36px] font-bold text-[var(--color-foreground)] leading-[1.1] tracking-tight mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
                "We've shipped 5 full-stack applications—from AI platforms to B2B SaaS—before graduation. We bring that same engineering rigor to every local business website we build. Tier-3 college origin, world-class output."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[var(--color-primary)]" />
                <span className="text-sm font-mono text-[var(--color-text-muted)] tracking-widest uppercase">
                  [ MISSION_STATEMENT_01 ]
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-slow {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
