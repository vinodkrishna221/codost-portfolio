'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'scale' | 'fade' | 'parallax' | 'slide';
}

export default function ScrollReveal({ children, variant = 'scale' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Transformations
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  const yParallax = useTransform(smoothProgress, [0, 1], [40, -40]);

  return (
    <div ref={ref} className="relative w-full">
      <motion.div
        style={{
          scale: variant === 'scale' ? scale : 1,
          opacity: variant === 'fade' || variant === 'scale' ? opacity : 1,
          y: variant === 'parallax' ? yParallax : 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
