"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";
import Magnetic from "@/components/Magnetic";

const projects = [
  {
    name: "Architect",
    tag: "AI / Technical Planning",
    description:
      "A high-precision tool for engineering teams to build bulletproof technical blueprints—PRDs, schemas, and specs—before writing code.",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    link: "https://the-architect-demo.vercel.app",
    featured: true,
  },
  {
    name: "Sudori",
    tag: "E-Commerce / Heritage",
    description:
      "A premium marketplace connecting global buyers with India's most authentic local artisans and their traditional crafts.",
    stack: ["React", "Node.js", "Tailwind"],
    link: "https://github.com/vinodkrishna221/sudori",
  },
  {
    name: "Praxis",
    tag: "EdTech / AI Simulation",
    description:
      "Intelligent AI mock interview platform that simulates real-world stress and provides deep behavioral analysis in real time.",
    stack: ["React", "FastAPI", "OpenAI"],
    link: "https://github.com/vinodkrishna221/praxis",
  },
  {
    name: "KhetiDheko",
    tag: "AgriTech / Supply Chain",
    description:
      "Revolutionizing India's agricultural supply chain by connecting farmers directly to markets with real-time price discovery.",
    stack: ["Next.js", "PostgreSQL", "Full-Stack"],
    link: "https://github.com/vinodkrishna221/khetdheko",
  },
  {
    name: "TestCraft",
    tag: "B2B / Education",
    label: "Client Project",
    description:
      "Massive-scale question paper generation for competitive exams. Powering some of India's largest JEE/NEET coaching centers.",
    stack: ["Next.js", "Redis", "Cloudflare"],
    featured: true,
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -12,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={`relative col-span-1 ${
        project.featured 
          ? "md:col-span-7" 
          : "md:col-span-5"
      } ${
        !project.featured && isEven ? "md:mt-24" : ""
      } ${
        project.featured && !isEven ? "md:mt-12" : ""
      }`}
    >
      <div className="group relative flex flex-col h-full">
        {/* Visual Asset Container */}
        <div className="relative aspect-[16/10] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[24px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-[var(--color-primary)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-surface)]" />
          
          {/* Typographic Poster Effect */}
          <div className="absolute inset-0 flex items-center justify-center p-8 overflow-hidden pointer-events-none">
            <motion.span
              style={{ 
                fontFamily: "var(--font-heading)",
                WebkitTextStroke: "1px var(--color-foreground)"
              }}
              className="text-[12vw] md:text-[8vw] font-bold leading-none tracking-tighter text-transparent select-none uppercase opacity-[0.05] transition-all duration-700 group-hover:opacity-[0.12] group-hover:scale-110"
            >
              {project.name}
            </motion.span>
          </div>

          {/* Floating Label */}
          <div className="absolute top-6 left-6 z-10">
             <span className="px-3 py-1 bg-white/80 backdrop-blur-md border border-[var(--color-border)] text-[var(--color-text-secondary)] text-[10px] font-bold tracking-widest rounded-full uppercase">
              {project.tag}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="pt-8 pb-4 flex flex-col flex-grow">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h4
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-[28px] md:text-[32px] font-bold text-[var(--color-foreground)] tracking-tight leading-tight"
            >
              {project.name}
            </h4>
            
            {project.link && (
              <Magnetic strength={0.2}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-foreground)] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={`Visit ${project.name}`}
                >
                  <ArrowUpRight size={22} className="stroke-[2.5px]" />
                </a>
              </Magnetic>
            )}
          </div>

          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-[17px] text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-[90%]"
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.stack.map((tech: string, i: number) => (
              <span
                key={i}
                className="text-[13px] font-medium text-[var(--color-text-muted)]"
              >
                {tech}
                {i !== project.stack.length - 1 && <span className="mx-2 opacity-30">/</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function WorkSection() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative py-24 md:py-40 bg-[var(--color-bg)] overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `radial-gradient(var(--color-text-muted) 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Radial Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-primary-light)] blur-[120px] opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-primary-light)] blur-[120px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header Content */}
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[var(--color-primary)]" />
            <span className="text-[var(--color-primary)] font-bold text-[12px] tracking-[0.2em] uppercase">
              Portfolio
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-[44px] md:text-[84px] font-bold text-[var(--color-foreground)] tracking-[-0.04em] leading-[0.95]"
            >
              Selected <br /> <span className="text-[var(--color-text-muted)]">Work.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-[18px] md:text-[22px] text-[var(--color-text-secondary)] max-w-[480px] leading-relaxed mb-2"
            >
              Building digital experiences that combine technical excellence with business-driven design.
            </motion.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-[var(--color-border)] text-center"
        >
          <p className="text-[var(--color-text-secondary)] mb-8 text-lg font-medium">Have a project in mind?</p>
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-2 text-[32px] md:text-[56px] font-bold text-[var(--color-foreground)] tracking-tight hover:text-[var(--color-primary)] transition-colors duration-300"
          >
            Let's build something <br className="md:hidden" /> legendary together.
            <ArrowUpRight className="w-12 h-12 md:w-20 md:h-20 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
