'use client';

import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-[var(--color-bg)]">
      <div className="container mx-auto px-5 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[var(--color-primary)] bg-[var(--color-primary-light)] text-sm font-medium tracking-wide mb-4">
              What Clients Say
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] tracking-tight"
            style={{ 
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.9px' 
            }}
          >
            Don't Take Our Word For It
          </motion.h2>
        </div>

        {/* Skeleton Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 lg:p-8 flex flex-col h-full relative overflow-hidden"
              style={{
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              {/* Avatar & Name Shimmer */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full shimmer-effect shrink-0" />
                <div className="flex flex-col gap-2.5 flex-1">
                  <div className="w-24 h-4 rounded-full shimmer-effect" />
                  <div className="w-16 h-3 rounded-full shimmer-effect" />
                </div>
              </div>

              {/* Stars Shimmer */}
              <div className="flex gap-1.5 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-4 h-4 rounded-sm shimmer-effect" />
                ))}
              </div>

              {/* Text Lines Shimmer */}
              <div className="flex flex-col gap-3 mt-auto">
                <div className="w-full h-3.5 rounded-full shimmer-effect" />
                <div className="w-[90%] h-3.5 rounded-full shimmer-effect" />
                <div className="w-[75%] h-3.5 rounded-full shimmer-effect" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Muted Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-[var(--color-text-muted)] text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>
            ✦ Client testimonials coming soon
          </p>
        </motion.div>
      </div>

      {/* Shimmer Effect Global Styles for this component */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .shimmer-effect {
          background: #f1f5f9;
          background-image: linear-gradient(
            to right,
            #f1f5f9 0%,
            #e2e8f0 20%,
            #f1f5f9 40%,
            #f1f5f9 100%
          );
          background-repeat: no-repeat;
          background-size: 800px 100%;
          animation-duration: 1.5s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: placeholderShimmer;
          animation-timing-function: linear;
        }

        @keyframes placeholderShimmer {
          0% { background-position: -468px 0; }
          100% { background-position: 468px 0; }
        }
      `}} />
    </section>
  );
}
